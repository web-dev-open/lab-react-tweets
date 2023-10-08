import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./TimeStamp";
import User from "./User";

function Tweet(props) {
  const { tweets } = props;
  // const {
  //   user: { name, image, handle },
  //   timestamp,
  //   message,
  // } = tweet;

  return tweets.map((tweet, i) => {
    return (
      <div className="tweet" key={i}>
        <ProfileImage profileImage={tweet.user.image} />
        <div className="body">
          <div className="top">
            <User name={tweet.user.name} handle={tweet.user.handle} />
            <TimeStamp timestamp={tweet.timestamp} />
          </div>
          <Message message={tweet.message} />
          <Actions />
        </div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    );
  });
}

export default Tweet;
