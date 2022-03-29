import React from "react";
import {useSelector} from "react-redux";
import TuitListItem
       from "./tuit-list-item";


const TuitList = () => {
const tuits = useSelector(
    state => state.tuits);
  return (
    <ul className="list-group1">
      {
        tuits.map && tuits.map(tuits =>
          <TuitListItem key={tuits._id}
                        tuits={tuits}/>)
      }
    </ul>
  );
}

export default TuitList;

