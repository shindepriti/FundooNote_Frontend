import React from  'react'
import {shallow,mount,render, configure} from 'enzyme'
import Reset from '../components/pages/resetpassword'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter})

describe(`Test Case To Reset Component`,()=>{
    it(`givenNewPassword_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Reset/>).find('#password').length).toEqual(1)
    })

    it(`givenConfirmPassword_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Reset/>).find('#confirm').length).toEqual(1)
    })


})

describe(`Forgot Input Value Integrations`,()=>{

    it(`givenNewPassword_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Reset/>);
        wrapper.find('#password').simulate('change',{target:{name:'password',value:'priti123'}});
        expect(wrapper.state('password')).toEqual('priti123')
    })

    it(`givenConfirmPassword_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Reset/>);
        wrapper.find('#confirm').simulate('change',{target:{name:'confirm',value:'priti123'}});
        expect(wrapper.state('confirm')).toEqual('priti123')
    })

})

