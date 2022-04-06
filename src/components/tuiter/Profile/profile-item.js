import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


const ProfileItem = ({profile}) => {

    const dispatch = useDispatch();

    return (
    <>
            <div className = "heading">
            <i className="fa fa-long-arrow-alt-left wd-back fa-lg "/>
            <span className="text">{profile.name}<br/></span>
            <span className="d-block wd-lightText1">7000 Tweets</span>
            </div>
            <br />
            <div>
            <img src={profile.bannerPicture} alt={profile.bannerPicture} className="wd-coverimg"/>
            <img src={profile.profilePicture} alt={profile.profilePicture} className="wd-dpimg rounded-circle img-fluid"/>
            <Link to="../EditProfile">
             <button className="btn btn-light rounded-pill">Edit Profile</button>
             </Link>
            </div>
            <p>
            <span className="fs-5 text fw-bold">{profile.name}</span>
            <span className="d-block wd-lightText2 ps-3">{profile.handle} </span>
            </p>
            <p className="fs-6 text1 ">{profile.bio}<br />
            </p>
             <span className="wd-lightText3">
             <i className="fas fa-map-marker-alt"/>&nbsp; {profile.location} &nbsp;&nbsp;
             <i className="fas fa-link"/>&nbsp; <a href={profile.website} className="wd-profileA">{profile.website} &nbsp;&nbsp;</a>
             <i className="fas fa-map-pin"/>&nbsp; {profile.dateOfBirth} &nbsp;&nbsp;
             <i className="fas fa-calendar-alt"/>&nbsp; {profile.dateJoined} &nbsp;&nbsp;
             </span>
             <br />
             <span className="wd-lightText3">{profile.followingCount} Following</span> &nbsp;&nbsp;
             <span className="wd-lightText3">{profile.followersCount}  Followers</span>

    </>

    )
};

export default ProfileItem;