import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

import {Link} from "react-router-dom";

export default function Post({ post }) {
  const [like,setLike] = useState(post.likes.length)
  const [User,setUser] = useState({})
  const [isLiked,setIsLiked] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async()=>{
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data)
    }
    fetchUser();
  }, [post.userId])
  
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${User.username}`}>
            <img
              className="postProfileImg"
              src={PF+ User.profilePicture || PF+"person/noAvatar.png"}
              alt=""
              />
              </Link>
            <span className="postUsername">
              {User.username}
            </span>
            {/* <span className="postDate">{format(post.createdAt, 'en_US')}</span> */}
            <span className="postDate">{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={PF+"like.png"} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={PF+"heart.png"} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
