import {MdVerified} from 'react-icons/md'
import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {FcLike} from 'react-icons/fc'
import {BiBarChart} from 'react-icons/bi'
import {RxShare2} from 'react-icons/rx'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import { tweet } from '../module'

const SingleTweet = () => {
    return (
      <div className="post-component">
        <img src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"/>
        <div className="post-body">
          <div className="post-head">
            <div className="post-head main">
              <h3>Elon Musk</h3>
              <MdVerified  />
              <p className="side-info">@elonmusk</p>
              <p><BsDot style={{height: '0.4em', width: '0.4em'}}/></p>
              <p className="side-info">14h</p>
            </div>
            <button className="side-info"><BiDotsHorizontalRounded  /></button>
          </div>
          <p className="post">We’re purging accounts that have had no activity at all for several years, so you will probably see follower count drop</p>
          <div className="interactives">
            <div className="interactive"><FaRegComment /><p>0</p></div>
            <div className="interactive"><FaRetweet /><p>0</p></div>
            <div className="interactive"><FcLike /><p>0</p></div>
            <div className="interactive"><BiBarChart /><p>0</p></div>
            <div className="interactive"><RxShare2 /></div>
          </div>
        </div>
      </div>
    )
  }

export default SingleTweet
  