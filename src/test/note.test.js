import React from  'react'
import {shallow,configure} from 'enzyme'
import Addnote from '../components/note/addnote'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter})

describe(`Test Cases To Add Note Component `,()=>{

    it(`givenTitle_whenEnter_shouldReturnText`,()=>{
        expect(shallow(<Addnote/>).find('#title').length).toEqual(1)
    })

   
})
describe(`Add Note Input Value Integrations`,()=>{

    it(`givenTitle_whenResponde_shouldChangeEventAndState`,()=>{
        const wrapper = shallow(<Addnote/>);
        wrapper.find('#title').simulate('change',{target:{name:'title',value:'helloWorld'}});
        expect(wrapper.state('title')).toEqual('helloWorld')
    })


})
