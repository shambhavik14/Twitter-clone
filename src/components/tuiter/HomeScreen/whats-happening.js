import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
         tuit: whatsHappening
       });
  }
  return (
    <>
      <img src = "/images/susie.jpg" width="48" className="wd-display-img1"/>
      <textarea className = "whatstext" placeholder = "What's happening?" value={whatsHappening}
               onChange={(event) =>
        setWhatsHappening(event.target.value)}>
      </textarea>
      <br/>
      <button className = "btn btn-primary btn-sm tweet" type="button" onClick={tuitClickHandler}>
        Tweet
      </button>
    </>
  );
}
export default WhatsHappening;

