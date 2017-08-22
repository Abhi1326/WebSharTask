/**
 * Created by Counter on 7/2/2017.
 */
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import taskTwo from './taskTwo'

test('Contact FORM(taskTwo) component should render as expected',()=>{
    const component =shallow(<taskTwo/>);
    const tree =toJson(component);
    expect(tree).toMatchSnapshot()
});