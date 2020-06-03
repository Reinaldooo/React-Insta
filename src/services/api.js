function fetchUserPosts(userId) {
  return fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userId}/posts`)
  .then((data) => data.json())
}

export function fetchPosts() {
  // The function below only fetches 5 accounts because in this fake api only they
  // have posts to show
  let users
  return fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?page=1&limit=5`)
  .then((data) => data.json())
  .then((data) => {
    users = data
    return Promise.all(users.map(({ id }) => fetchUserPosts(id)))
  })
  .then((posts) => {
    return {
      users,
      posts
    }
  })
}