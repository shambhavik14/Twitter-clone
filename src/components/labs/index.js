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
                <br/>
                <Link to="/tuiter/home">
                 Tuiter
                </Link> |
                <Link to="/hello">
                Hello
                </Link>
            </div>
        )
};

export default Labs;
