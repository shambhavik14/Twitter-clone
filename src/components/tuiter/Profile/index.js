import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./profile-item";

const Profiles = () => {
const profile = useSelector(
    state => state.profile);
  return (
        profile && profile.map && profile.map(profile =>
          <ProfileItem key={profile._id}
                        profile={profile}/>)
  );
}

export default Profiles;

