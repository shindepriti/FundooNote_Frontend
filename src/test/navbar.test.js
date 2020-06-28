import React from  'react'
import {shallow,configure} from 'enzyme'
import Dashboard from '../components/dashboard/drawer'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter})

describe(`Test Cases To Add Note Component `,()=>{

    it(`givenTitle_whenEnter_shouldReturnText`,()=>{
        expect(shallow(<Dashboard/>).find('#logo').length).toEqual(1)
    })

   
})
describe(`Add Note Input Value Integrations`,()=>{

    // it(`givenTitle_whenResponde_shouldChangeEventAndState`,()=>{
    //     const wrapper = shallow(<Addnote/>);
    //     wrapper.find('#title').simulate('change',{target:{name:'title',value:'helloWorld'}});
    //     expect(wrapper.state('title')).toEqual('helloWorld')
    // })


})
