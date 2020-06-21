import React from  'react'
import {shallow,mount,render, configure} from 'enzyme'
import Login from '../components/pages/login'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter})

describe(`Test Cases To Login Component `,()=>{

    it(`givenEmail_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Login/>).find('#email').length).toEqual(1)
    })

    it(`givenPassword_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Login/>).find('#password').length).toEqual(1)
    })
})
describe(`Login Input Value Integrations`,()=>{

    it(`givenEmail_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Login/>);
        wrapper.find('#email').simulate('change',{target:{name:'email',value:'pritishinde34@gmail.com'}});
        expect(wrapper.state('email')).toEqual('pritishinde34@gmail.com')
    })

    it(`givenPassword_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Login/>);
        wrapper.find('#password').simulate('change',{target:{name:"password",value:"priti123"}});
        expect(wrapper.state('password')).toEqual('priti123');

    })

})
