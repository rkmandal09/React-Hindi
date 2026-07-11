import React from "react";
import "./Like.css";
import { useState } from "react";

const Like = () => {
  const [likeCount, setLikeCount] = useState(0);
  const likeBtn = () => {
    setLikeCount(likeCount + 1);
  };
  const disLikeBtn = () => {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
    }
  };
  let famous = () => {
    if (likeCount <= 0) {
      return "😭Unpopular";
    } else if (likeCount >= 10) {
      return "😎popular";
    } else {
      return "Jaldi like karo🤩";
    }
  };
  return (
    <div>
      <div className="allLikes">
        <h3>{famous()}</h3>
        <h2>❤️{likeCount}</h2>
      </div>
      <button className="clickToLike" onClick={likeBtn}> Like 👍 </button>
      <button className="clickToDisLike" onClick={disLikeBtn}>Dislike 👎</button>
    </div>
  );
};

export default Like;
