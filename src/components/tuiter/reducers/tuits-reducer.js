/*import tuits from "../data/tuits.json";*/
import {UPDATE_TUIT, CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS} from "../../../actions/tuits-actions";


const tuitsReducer = (state = [], action) => {
                     switch (action.type) {
                         case FIND_ALL_TUITS:
                             return action.tuits;
                         case DELETE_TUIT:
                            return state.filter(
                              tuits => tuits._id !== action.tuits._id);
                         case CREATE_TUIT:
                              return [
                                ...state,
                                action.newTuit
                              ];
                        case UPDATE_TUIT:
                             return state.map(
                               tuits => tuits._id === action.tuits._id ?
                                 action.tuits : tuits);

                        default:
                          return state;
                      }
}
                     /*case 'like-tuit':
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
}*/


export default tuitsReducer;