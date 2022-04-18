import React, {useState,useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {updateTuit, createTuit,deleteTuit, findAllTuits} from "../../../actions/tuits-actions";
import TuitListItem from "./tuit-list-item";


const TuitList = () => {
const tuits = useSelector(
    state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
       findAllTuits(dispatch),
       []);
const [newTuit, setNewTuit] =
      useState({tuit: 'New Tuit'});



  return (
  <>
  <img src = "/images/susie.jpg" width="48" className="wd-display-img1"/>

  <textarea className="whatstext" placeholder = "What's happening"
    onChange={(e) =>
      setNewTuit({...newTuit,
      tuits: e.target.value})}></textarea>
      <button onClick={() =>
          createTuit(dispatch, newTuit)}
            className="btn btn-primary btn-sm tweet">
          Tuit
        </button>

    <ul className="list-group1">

      {   tuits.map && tuits.map(tuits =>
          <TuitListItem key={tuits._id}
                        tuits={tuits}/>)
      }
    </ul>
    </>
  );
}

export default TuitList;

