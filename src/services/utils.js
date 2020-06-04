export const shufflePosts = (arrPosts) => {
  if(!arrPosts || !arrPosts.length) return false;
  let shuffled = []
  let biggerLength = 0;
  // Define array with the bigger length
  arrPosts.forEach((arr) => biggerLength = Math.max(biggerLength, arr.length))
  // Loop 'biggerLength' times and each time check if the current array has
  // something in de 'i' index. In case this is truthy, push it to the 
  // shuffled array
  for(let i = 0; i < biggerLength; i++) {
    arrPosts.forEach((arr) => {
      if(arr[i]) {
        shuffled.push(arr[i])
      }
    })
  }
  return shuffled
}

export const validAvatar = (avatar) => {
  if(!avatar) return false;
  return avatar.endsWith(".jpg") || avatar.endsWith(".png")
}