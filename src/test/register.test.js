import React from  'react'
import {shallow,mount,render, configure} from 'enzyme'
import Registration from '../components/pages/registration'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter})
                                                                                                                       
describe(`Test Cases To Registration Component `,()=>{

    // it.skip(`givenPage_whenRender_shouldReturnTrue`,()=>{
    //     expect(shallow(<Registration/>).find('/register').exists()).toBe(true)
    // })

    it(`givenFirstName_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Registration/>).find('#firstName').length).toEqual(1)

    })

    it(`givenLastName_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Registration/>).find('#lastName').length).toEqual(1)
    })

    it(`givenEmail_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Registration/>).find('#email').length).toEqual(1)
    })

    it(`givenPassword_whenEnter_shouldReturnTrue`,()=>{
        expect(shallow(<Registration/>).find('#password').length).toEqual(1)
    })
})

describe(`Registartion Input Value Integrations`,()=>{

    it(`givenFirstname_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Registration/>);
        wrapper.find('#firstName').simulate('change',{target:{name:'firstName',value:'priti'}});
        expect(wrapper.state('firstName')).toEqual('priti')
    })

    it(`givenLastName_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Registration/>);
        wrapper.find('#lastName').simulate('change',{target:{name:"lastName",value:"shinde"}});
        expect(wrapper.state('lastName')).toEqual('shinde');
    })

    it(`givenEmail_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Registration/>);
        wrapper.find('#email').simulate('change',{target:{name:"email",value:"pritishinde34@gmail.com"}});
        expect(wrapper.state('email')).toEqual('pritishinde34@gmail.com');

    })

    it(`givenPassword_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Registration/>);
        wrapper.find('#password').simulate('change',{target:{name:"password",value:"priti123"}});
        expect(wrapper.state('password')).toEqual('priti123');

    })

})