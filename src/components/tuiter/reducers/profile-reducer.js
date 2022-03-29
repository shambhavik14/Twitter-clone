import profile from "../data/profile.json";
import moment from "moment";

const profileReducer = (state = profile, action) => {
                     switch (action.type) {
                             case 'edit-profile':
                                 console.log(action.profile);
                                 const newProfile = {};
                                 if (action.profileReducer.name) {
                                     newProfile["firstName"] = action.profileReducer["name"].split(" ")[0];
                                     newProfile["lastName"] = action.profileReducer["name"].split(" ")[1];
                                 }

                                 if(action.profileReducer.bio){
                                     newProfile["bio"] = action.profileReducer["bio"];
                                 }

                                 if(action.profileReducer.location){
                                     newProfile["location"] = action.profileReducer["location"];
                                 }

                                 if(action.profileReducer.website){
                                     newProfile["website"] = action.profileReducer["website"];
                                 }

                                 if(action.profileReducer.dateOfBirth){
                                     console.log(action.profileReducer["dateOfBirth"]);
                                     newProfile["dateOfBirth"] = moment(action.profileReducer["dateOfBirth"], 'Y/M/D').format('M/D/Y').toString();
                                     console.log(newProfile["dateOfBirth"]);
                                 }

                                 return [
                                     {
                                         ...state[0],
                                         // ...action.profile,
                                         ...newProfile,
                                     }
                                 ];

                             default:
                                 return (state);

                     }
                     }


export default profileReducer;