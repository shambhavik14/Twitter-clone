import React from "react";
const PostSummaryItem = ({posts = {
                                "topic": "Web Development",
                                "userName": "ReactJS",
                                "time": "2h",
                                "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                "image": "../../../images/react-blue.jpg"
                                 }
                             }) => {
    return(
    <>
            <li className="list-group-item"><img src= {posts.image} width="48" className="wd-topic-img"/>
	    	<a href="#" className="wd-topic-topicname">{posts.topic}</a><br/>
		    	<a href="#" className="wd-topic-heading">{posts.userName}  </a><i className="fa fa-check-circle"></i><span className="wd-topic-time"> - {posts.time}</span><br/>
		    	<span className="wd-topic-description">{posts.title}</span><br/>
		    	<span className="wd-topic-tweetcount">{posts.tweets}</span>
		    </li>
    </>
    );
}
export default PostSummaryItem;