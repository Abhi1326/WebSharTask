/**
 * Created by Counter on 7/2/2017.
 */
import React from 'react'
import Home from "./components/Home/home";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./components/Login/login";
import Task from "./components/Task/Task";
import Profile from "./components/Task/profile/profile";
import taskOne from "./components/Task/taskOne/taskOne";
import taskTwo from "./components/Task/taskTwo/taskTwo";
import {BrowserRouter as Router, Route} from "react-router-dom";
const history = createBrowserHistory();
export default props => (
    <Router history={history}>
        <div>

            <Route exact path={'/'} component={Login}/>
            { /**
             exact is used because every route contains the
             root-path('/') so with every route app component
             will be activated but with "exact" keyword we can
             stop this and app component will only be activated
             if path exactly matches this("/")
             **/
            }
            <Route path={'/home'} exact component={Home}/>
            <Route path={'/task'}  component={Task}/>
            <Route path={'/task/profile'} component={Profile}/>
            <Route path={'/task/one'} component={taskOne}/>
            <Route path={'/task/taskRevised'} component={taskTwo}/>


        </div>
    </Router>

)