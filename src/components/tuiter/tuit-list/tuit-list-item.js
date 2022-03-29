import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats"
const TuitListItem = ({tuits}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuits) => {
    dispatch({type: 'delete-tuit', tuits})
  };
    return(
            <li className="list-group-item1">

		    	<img src={tuits.image} className="wd-display-img"/>
		    	<a href="#" className="wd-topic-heading">{tuits.author}  </a><i className="fa fa-check-circle"></i><a href="#" className="wd-follow-handle">@{tuits.handle}</a>

		    	<span className="wd-topic-time"> - {tuits.time}</span><br/>
		    	<i onClick={() => deleteTuit(tuits)}
                                 className="fa fa-trash fa-pull-right"></i>
		    	<span className="wd-topic-description">{tuits.tweet}</span><br/>
		    	<div className="wd-head-image">
              		<img src={tuits.postImage} className="wd-topic-heading-image"/></div>
		    	<span className="wd-topic-description">{tuits.caption}</span><br/>
		    	<span className="wd-topic-topicname">{tuits.text}</span>
                <TuitStats tuits = {tuits}/>
		    </li>

    );
}
export default TuitListItem;