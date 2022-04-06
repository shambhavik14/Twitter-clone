import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const EditProfileItem = () => {
 let profile =
       useSelector(state => state.profile[0]);
 const [name, setname] = useState(profile.name);
 const [bio, setBio] = useState(profile.bio);
 const [location, setLocation] = useState(profile.location);
 const [website, setWebsite] = useState(profile.website);
 const [dateOfBirth, setdateOfBirth] = useState(profile.dateOfBirth);
 const dispatch = useDispatch();
 const editProfileClickHandler = () => {
      dispatch({type: 'edit-profile',
      name: name,
      bio: bio,
      location: location,
      website: website,
      dateOfBirth: dateOfBirth});
      }


    return(
        <>
            <div>
                <div className="wd-edit-title">
                    <div className="wd-cancel-button">
                        <Link to="/tuiter/profile">
                            <i className="fas fa-times"/>
                        </Link>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="wd-title-text">Edit Profile</span>
                    <div className="wd-save-button">
                        <Link
                            className="btn btn-save"
                            to="/tuiter/profile"
                            onClick={editProfileClickHandler}>
                            Save
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={profile.bannerPicture}
                    alt={profile.bannerPicture}
                    className="wd-coverimg"
                    alt="Cover Image"
                />
            </div>
            <div>
                <img
                    src={profile.profilePicture}
                    alt={profile.bannerPicture}
                    className="wd-dpimg"
                    alt="Profile Image"
                />
            </div>
            <div className="wd-edit-details">
                <ul className="list-group">
                    <li className="list-group-item">
                        <label> Name</label>
                        <input type = "text"
                            className="form-control"
                            defaultValue={profile.name}
                            onChange={(event) => setname(event.target.value)}/>
                    </li>
                    <li className="list-group-item">
                        <label> Bio</label>
                        <input type = "text"
                          className="form-control"
                          defaultValue={profile.bio}
                          onChange={(event) => setBio(event.target.value)}/>
                    </li>
                    <li className="list-group-item">
                        <label> Location</label>
                        <input type = "text"
                        className="form-control"
                        defaultValue={profile.location}
                        onChange={(event) => setLocation(event.target.value)}/>
                    </li>
                    <li className="list-group-item">
                        <label> Website</label>
                        <input type = "text"
                        className="form-control"
                        defaultValue={profile.website}
                        onChange={(event) => setWebsite(event.target.value)}/>
                    </li>
                    <li className="list-group-item">
                        <label> Birth date</label>
                        <input type = "text"
                        className="form-control"
                        defaultValue={profile.dateOfBirth}
                        onChange={(event) => setdateOfBirth(event.target.value)}/>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default EditProfileItem;