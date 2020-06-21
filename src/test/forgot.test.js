import React from  'react'
import {shallow,mount,render, configure} from 'enzyme'
import Forgot from '../components/pages/forgotpassword'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter})

describe(`Test Case To Forgot Component`,()=>{
    it(`givenEmail_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Forgot/>).find('#email').length).toEqual(1)
    })

})

describe(`Forgot Input Value Integrations`,()=>{

    it(`givenEmail_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Forgot/>);
        wrapper.find('#email').simulate('change',{target:{name:'email',value:'pritishinde34@gmail.com'}});
        expect(wrapper.state('email')).toEqual('pritishinde34@gmail.com')
    })

})

