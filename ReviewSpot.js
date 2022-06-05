import React from "react";
import { Card } from "react-bootstrap";
import './ReviewSpot.css';
import "./StarRatingNew";




export default function ReviewSpots(){
  // let n = reviewStars;
  // let stars = []
  // for (let i = 0; i < reviewStars.length; i++){
  //   stars.push(<span><i class="fa-solid fa-star"></i></span>);
  // } 

return (
  
  <div className="center">

  <div className="card">
    <div className="additional">
      <div className="user-card">
        <div className="level center">
        Horror Reviewer
        {/* {interest} Reviewer */}
        </div>
        <div className="points center">
        {/* {points} Points */}
        100,312 Points
        </div>
        {/* {profilePicture} */}
        <img width="110" height="110" className="profile-pic center" alt="profile" src="https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg"></img>
      </div>
      <div className="more-info">
        <h1>Username</h1>
        <div className="coords">
          <span>Interest #1</span>
          {/* {Interest1} */}
          <span>Interest #2</span>
          {/* {Interest2} */}
        </div>
        <div className="coords">
          <span>Well-Known</span>
          <span>👻👻👻</span>
        </div>
        <div className="stats">
          <div>
          <div className="title">
                Awards
              </div>
              <i className="fa fa-trophy"></i>
              <div className="value">3</div>
          </div>
          <div>
          <div className="title">
                Films
              </div>
              <i className="fa fa-video-camera"></i>
              <div className="value">1000</div>
          </div>
          <div>
          <div className="title">
                Friends
              </div>
              <i className="fa fa-heart"></i>
              <div className="value">27</div>
            </div>
          <div>
          <div className="title">
                Followers
              </div>
              <i className="fa fa-group"></i>
              <div className="value">2</div>
          </div>
        </div>
      </div>
    </div>
    <div className="general">
      <h1>Title ★★★★</h1>
      {/* <h1>{title} {stars}</h1> */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
      {/* <p>{Review}</p> */}
    </div>
    
  </div>
  <div className="Container">
    <div className="buttons column">
      <button className="button row" alt="like button"> 
      <i className="fa fa-thumbs-up"></i>
      </button>
      <button className="button row" alt="follow button"> 
      <i className="fa-solid fa-circle-plus"></i>
      </button>
      <button className="button row" alt="gift button">
      <i className="fa fa-gift"></i> 
      </button>
      <button className="button row" alt="favorite button"> 
      <i className="fa fa-group"></i>
      </button>
    </div>
  </div>
  </div>
)
}