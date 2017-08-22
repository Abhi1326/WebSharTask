/**
 * Created by Counter on 7/2/2017.
 */
import React from "react";
import {shallow} from "enzyme";
import {Route} from "react-router";
import Routes from "./routes";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Task from "./components/Task/Task";
import Profile from "./components/Task/profile/profile";
import taskOne from "./components/Task/taskOne/taskOne";


it('renders correct routes', () => {
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
    }, {});

    expect(pathMap['/']).toBe(Login);
    expect(pathMap['/home']).toBe(Home);
    expect(pathMap['/task']).toBe(Task);
    expect(pathMap['/task/taskOne']).toBe(taskOne);
    expect(pathMap['/task/profile']).toBe(Profile);
});