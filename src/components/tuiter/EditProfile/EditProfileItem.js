import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import moment from "moment";

const currentProfile = (state) => state.profile;


const EditProfileItem = () => {
    let profile = useSelector(currentProfile);
    profile = profile[0];
    const dob = moment(profile.dateOfBirth, 'M/D/Y').format('MMMM D, Y');
    const [values, setValues] = useState({});
    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log("on change", name, value);
        if(name === "dateOfBirth"){
            setValues((values) => ({ ...values, [name]: value }));
        }
        else{
            setValues((values) => ({ ...values, [name]: value }));
        }
    };

    const onSubmit = () => {
        dispatch({
                     type: "edit-profile",
                     profile: values,
                 });
    };


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
                            onClick={onSubmit}
                        >
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
                        <input
                            onChange={onChangeHandler}
                            defaultValue={profile.firstName + " " + profile.lastName}
                            className="form-control"
                            name="name"
                        />
                    </li>
                    <li className="list-group-item">
                        <label> Bio</label>
                        <textarea
    onChange={onChangeHandler}
    defaultValue={profile.bio}
    className="form-control"
    name="bio"
    />
                    </li>
                    <li className="list-group-item">
                        <label> Location</label>
                        <input
                            onChange={onChangeHandler}
                            defaultValue={profile.location}
                            className="form-control"
                            name="location"
                        />
                    </li>
                    <li className="list-group-item">
                        <label> Website</label>
                        <input
                            onChange={onChangeHandler}
                            defaultValue={profile.website}
                            className="form-control"
                            name="website"
                        />
                    </li>
                    <li className="list-group-item">
                        <label> Birth date</label>
                        <input
                            onChange={onChangeHandler}
                            type="date"
                            defaultValue={dob}
                            className="form-control"
                            name="dateOfBirth"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default EditProfileItem;