import React, { useCallback, useState } from "react";
import { Link } from 'react-router-dom';
//
import './styles.scss';

function Story({ story, user, handleClose }) {
  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateProgress = useCallback(
    () => {
    if (metadata?.duration !== null  && currentTime !== null) {
      const elapsedTime = ((currentTime / metadata.duration) * 100);
      return `${elapsedTime.toFixed(2)}%`;
    }
    return '0%';
  }, [metadata, currentTime]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <Link to={`/users/${user.username}`} className="user">
            <div className="user__thumb">
              <img src={user.avatar} alt={user.name} />
            </div>
            <div className="user__name">{user.name}</div>
          </Link>
          <button
            className="story__close"
            onClick={() => handleClose()}
          >
            <i className="fas fa-times" />
          </button>
        </header>
        <div className="story__progress">
          <div
            style={{ width: updateProgress(), height: "10px"}}
            className="story__progress__elapsed"
          />
        </div>
      </div>

      {story.videoUrl && (
        <div className="container">
          <section className="story__video__wrapper">
            <video
              autoPlay
              className="video-player"
              loop
              playsInline
              onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
              onLoadedMetadata={e => {
                setMetadata({
                  videoHeight: e.target.videoHeight,
                  videoWidth: e.target.videoWidth,
                  duration: e.target.duration
                });
              }}
              src={story.videoUrl}
            />
          </section>
        </div>
      )}
    </section>
  );
};

export default Story;
