import React from "react";
import posts from "./Posts.json";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(
    <>
    	<ul className="list-group1">
    		<li className="list-group-item1">
            {
                posts.map(posts => {
                    return(<PostItem posts = {posts}/>);
                })
            }
            </li>
        </ul>
    </>
    );
}
export default PostList;
