function Tweet() {
    return (
      <div className="tweet">
        <img
          src="https://imgur.com/ebIbhBy.png"
          className="profile"
          alt="profile"
        />
  
        <div className="body">
          <div className="top">
            <span className="user">
              <span className="name">Root Learn</span>
              <span className="handle">@root.learn</span>
            </span>
  
            <span className="timestamp">Nov 30, 2022</span>
          </div>
  
          <p className="message">
            On December 7th, we will be hosting a #webinar that will introduce you
            to #SQL! Are you ready? 🚀
          </p>
  
          <div className="actions">
            {/* Font Awesome icons */}
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-share"></i>
          </div>
        </div>
  
        <i class="fas fa-ellipsis-h"></i>
      </div>
    );
  }
  
  export default Tweet;
  