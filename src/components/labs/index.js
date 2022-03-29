import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list"
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
            <div>
                <h1>Labs</h1>
                <ConditionalOutput/>
                <TodoList/>
                <Styles/>
                <Classes/>
                <ReduxExamples/>
                <br/>
                <Link to="/tuiter/">
                 Tuiter
                </Link> |
                <Link to="/hello">
                Hello
                </Link>
            </div>
        )
};

export default Labs;
