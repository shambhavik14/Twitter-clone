import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuits) => {
 const newTuit = await service.createTuit(tuits);
 console.log(newTuit);
 dispatch({
   type: CREATE_TUIT,
   newTuit
 });
}

export const findAllTuits = async (dispatch) => {
 const tuits = await service.findAllTuits();
 dispatch({
   type: FIND_ALL_TUITS,
   tuits
 })};

export const updateTuit = async (dispatch, tuits) => {
 const status = await service.updateTuit(tuits);
 dispatch({
   type: UPDATE_TUIT,
   tuits
 });
}

export const deleteTuit = async (dispatch, tuits) => {
 const response = await service.deleteTuit(tuits);
 dispatch({
   type: DELETE_TUIT,
   tuits
 })
}

/*export const dislikeTuit = async (dispatch, tuits) => {
 const status = await service.dislikeTuit(tuits);
 dispatch({
   type: DISLIKE_TUIT,
   tuits
 });
}*/




