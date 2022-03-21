import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
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