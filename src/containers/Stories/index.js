import React, { useState } from "react";
//
import './styles.scss';
import Story from '../../components/Story';

function Stories({ stories, getUserById }) {
  const [showStory, setShowStory] = useState(false);
  const [currentStory, setCurrentStory] = useState({});
  const [selectedUser, setSelectedUser] = useState({});

  const findStoryById = (id) => stories.find(story => story.id === id);

  const handleStory = (story, user) => {
    story = findStoryById(story.id);
    setSelectedUser(user);
    setCurrentStory(story);
    setShowStory(!showStory);
  };

  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            stories.map((story, index) => {
              const user = getUserById(story.userId);
              return (
                <div key={story.id} className="stories__story">
                <button                  
                  onClick={() => handleStory(story, user)}
                  className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
                >
                  <div className="user__thumb__wrapper">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                </button>
                <span>{user.username}</span>
                </div>
            )})
          }
        </div>
      </section>
      {
      showStory && (
        <Story
          story={currentStory}
          user={selectedUser}
          handleClose={() => setShowStory(!showStory)}
        />
        )
      }
    </>
  );
};
export default Stories;
