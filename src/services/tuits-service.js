import axios from 'axios';

const TUITS_API = 'https://fullstack-mongo.herokuapp.com/api/tuits';


export const createTuit = async (tuits) => {
 const response = await axios.post(TUITS_API, tuits)
 return response.data;
}



export const findAllTuits = async () => {
 const response = await axios.get(TUITS_API);
 const tuits = response.data;

 return tuits;
}


export const deleteTuit = async (tuits) => {
 const response = await axios
   .delete(`${TUITS_API}/${tuits._id}`);
 return response.data;
}


export const updateTuit = async (tuits) => {
 const response = await axios
   .put(`${TUITS_API}/${tuits._id}`, tuits);
 return response.data;
}

export const dislikeTuit = async (tuits) => {
 const response = await axios
   .put(`${TUITS_API}/${tuits._id}`, tuits);
 return response.data;
}


