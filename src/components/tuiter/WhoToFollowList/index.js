import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
const who = useSelector(state => state.who);
    return(
    <>
            {
                who.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
    </>
    );
}
export default WhoToFollowList;