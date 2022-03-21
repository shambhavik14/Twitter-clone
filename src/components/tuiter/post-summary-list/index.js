import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
    <>
    	<ul className="list-group">
            {
                posts.map(posts => {
                    return(<PostSummaryItem posts = {posts}/>);
                })
            }
        </ul>
    </>
    );
}
export default PostSummaryList;