import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit, dislikeTuit, updateTuit } from "../../../actions/tuits-actions";
import TuitStats from "./tuit-stats"
const TuitListItem = ({tuits}) => {
  const dispatch = useDispatch();

  console.log(tuits);
    return(
            <li className="list-group-item1">

		    	<img src={tuits.image} className="wd-display-img rounded-circle img-fluid"/>
		    	<a href="#" className="wd-topic-heading">{tuits.author}  </a><i className="fa fa-check-circle"></i><a href="#" className="wd-follow-handle">@{tuits.handle}</a>

		    	<span className="wd-topic-time"> - {tuits.time}</span><br/>
                <i className="fa fa-trash fa-pull-right" onClick={() => deleteTuit(dispatch, tuits)}></i>
		    	<span className="wd-topic-description">{tuits.tuit}</span><br/>
		    	<div className="wd-head-image">
              		<img src={tuits.postImage} className="wd-topic-heading-image"/></div>
		    	<span className="wd-topic-description">{tuits.caption}</span><br/>
		    	<span className="wd-topic-topicname">{tuits.text}</span>
                      <span>
                      Likes: {tuits.likes}
                      <i onClick={() => updateTuit(dispatch, {
                       ...tuits,
                                             likes: tuits.likes + 1
                                           })} className="far fa-thumbs-up ms-2 me-5"></i>
                       Dislikes: {tuits.dislikes}
                       <i onClick={() => dislikeTuit(dispatch, {
                       ...tuits,
                       dislikes: tuits.dislikes - 1})} className="far fa-thumbs-down ms-2"></i>
                       </span>
		    </li>

    );
}
export default TuitListItem;

//<TuitStats tuits = {tuits}/>

/*		    	<i onClick={() => deleteTuit(tuits)}
                                   className="fa fa-trash fa-pull-right"></i>*/