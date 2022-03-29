import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuits}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuits});
  };
  return (
  <div className="wd-icon-links">
  					<i className='fa fa-comment'></i>  22
  					<i className="fa fa-retweet"></i>   34
  					<span onClick={likeTuit}>
                        {
                          tuits.liked &&
                          <i className="fa fa-heart me-1"
                             style={{color: 'red'}}></i>
                        }
                        {
                          !tuits.liked &&
                          <i className="fa fa-heart me-1"></i>
                        }
                        {tuits.stats && tuits.stats.likes}
                        </span>
  					<i className="fa fa-upload" aria-hidden="true"></i>
  	</div>

  );
}
export default TuitStats;

