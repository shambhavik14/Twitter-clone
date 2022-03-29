import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
                     switch (action.type) {
                     case 'like-tuit':
                           return state.map(tuits => {
                             if(tuits._id === action.tuits._id) {
                               if(tuits.liked === true) {
                                 tuits.liked = false;
                                 tuits.stats.likes--;
                               } else {
                                 tuits.liked = true;
                                 tuits.stats.likes++;
                               }
                               return tuits;
                             } else {
                               return tuits;
                             }
                           });
                     case 'delete-tuit':
                         return state.filter(
                         tuits => tuits._id !== action.tuits._id);
                     case 'create-tuit':
                        const newTuit = {
                        tuits: action.tuits,
                        _id: (new Date()).getTime() + '',
                        postedBy: {
                        "username": "ReactJS"
                        },
                        stats: {
                        retuits: 111,
                        likes: 222,
                        replies: 333
                        }
                     }
                     return [
                        newTuit,
                        ...state,
                     ];
                     default:
                        return tuits
    }
}


export default tuitsReducer;