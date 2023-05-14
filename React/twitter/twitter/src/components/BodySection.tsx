import "./styles.css";
import { Tweets, tweet } from "../module.ts";
import { MdVerified } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BiBarChart } from "react-icons/bi";
import { RxShare2 } from "react-icons/rx";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const BodySection = () => {
  const imageContent = (singletweet: tweet): JSX.Element => {
    let className = "imageContainer one";
    if (singletweet.postContent.length === 2) {
      className = "imageContainer two";
    }
    else if (singletweet.postContent.length === 3) {
      className = "imageContainer three";
    }
    else if (singletweet.postContent.length === 4) {
      className = "imageContainer four";
    }
    else if (singletweet.postContent.length > 4) {
      className = "imageContainer fourPlus";
    }  
    return (
      <div className={className}>
        {singletweet.postContent.map((imageURL) => (
          <div className="img-div" key={singletweet.postContent.indexOf(imageURL)}>
            <img src={imageURL} />
          </div>
        ))}
      </div>
    );
  };
  const myBody: JSX.Element[] = Tweets.map(
    (singletweet): JSX.Element => (
      <div className="post-component" key={Tweets.indexOf(singletweet)}>
        <img src={singletweet.profilePicture} />
        <div className="post-body">
          <div className="post-head">
            <div className="post-head main">
              <h3>{singletweet.userName}</h3>
              {singletweet.isVerified && <MdVerified />}
              <p className="side-info">@{singletweet.displayName}</p>
              <p>
                <BsDot style={{ height: "0.4em", width: "0.4em" }} />
              </p>
              <p className="side-info">14h</p>
            </div>
            <button className="side-info">
              <BiDotsHorizontalRounded />
            </button>
          </div>
          <p className="post">{singletweet.postText}</p>
          {singletweet.postContent.length !== 0 && imageContent(singletweet)}
          <div className="interactives">
            <button className="interactive">
              <FaRegComment />
              <p>0</p>
            </button>
            <button className="interactive">
              <FaRetweet />
              <p>0</p>
            </button>
            <button className="interactive">
              <FcLike />
              <p>0</p>
            </button>
            <button className="interactive">
              <BiBarChart />
              <p>0</p>
            </button>
            <button className="interactive">
              <RxShare2 />
            </button>
          </div>
        </div>
      </div>
    )
  );
  return <div className="body-section">{myBody}</div>;
};

export default BodySection;
