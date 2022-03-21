import React from "react";
const PostItem = ({posts = {
                            "topic": "Web Development",
                            "userName": "ReactJS",
                            "time": "2h",
                            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                            "image": "../../../images/react-blue.jpg"
                           }}) => {
    return(
    <>
            <li className="list-group-item1">
		    	<img src={posts.image} className="wd-display-img"/>
		    	<a href="#" className="wd-topic-heading">{posts.author}  </a><i className="fa fa-check-circle"></i><a href="#" className="wd-follow-handle">@{posts.handle}</a>
		    	<span className="wd-topic-time"> - {posts.time}</span><br/>
		    	<span className="wd-topic-description">{posts.tweet}</span><br/>
		    	<div className="wd-head-image">
              		<img src={posts.postImage} className="wd-topic-heading-image"/></div>
		    	<span className="wd-topic-description">{posts.caption}</span><br/>
		    	<span className="wd-topic-topicname">{posts.text}</span>
		    	<div className="wd-icon-links">
					<a href="#" className="wd-icon-link"><i className='fa fa-comment'></i>  22</a>
					<a href="#" className="wd-icon-link"><i className="fa fa-retweet"></i>   34</a>
					<a href="#" className="wd-icon-link-heart">	&#10084;  2</a>
					<a href="#" className="wd-icon-link"><i className="fa fa-upload" aria-hidden="true"></i></a>
				</div>
		    </li>
    </>
    );
}
export default PostItem;