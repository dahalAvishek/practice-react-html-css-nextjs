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
  const myBody = Tweets.map((singletweet) => (
    <div className="post-component">
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
        {singletweet.postContent && (
          <div className="imageOrVideo">
            {singletweet.postContent.map((imageURL) => (
            
                <img src={imageURL} />
              
            ))}
          </div>
        )}
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
  ));
  return <div className="body-section">{myBody}</div>;
};

export default BodySection;
