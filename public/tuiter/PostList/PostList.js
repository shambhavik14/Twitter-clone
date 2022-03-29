import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
    	<ul class="list-group1">
    		<li class="list-group-item1">
            ${
                posts.map(posts => {
                    return(PostItem(posts));
                }).join('')
            }
            </li>
        </ul>
    `);
}
export default PostList;