import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list"

const Labs = () => {
    return(
            <div>
                <h1>Labs</h1>
                <ConditionalOutput/>
                <TodoList/>
                <Styles/>
                <Classes/>
            </div>
        )
};

export default Labs;
