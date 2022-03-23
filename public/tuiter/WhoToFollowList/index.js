import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
    <div class="list-group-item"><b>Who to follow</b></div>
            ${
                who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')
            }
        </ul>
    `);
}
export default WhoToFollowList;
