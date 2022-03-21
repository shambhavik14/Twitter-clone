import React from "react";
const WhoToFollowListItem = ({who = {
                                         avatarIcon: '../../../images/nasa.png',
                                         userName: 'NASA',
                                         handle: 'NASA',
                                     }
                                 }) => {
    return(
    <>
            <li className="list-group-item"><img src={who.avatarIcon} width="48" className="wd-follow-img"/>{who.userName}
            <i className="fa fa-check-circle"></i><br/>
		    <a href="#" className="wd-follow-handle" >@{who.handle}</a>
		    <button className="btn btn-primary btn-sm followBtn" type="button">Follow</button></li>
    </>
    );
}
export default WhoToFollowListItem;