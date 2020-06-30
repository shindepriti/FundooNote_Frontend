/***************************************************************
 * @purpose  : Define Note Update 
 * @file     : updatenote.jsx             
 * @overview : Componet To Handel Update Note For User
 * @author   : priti shinde
 * @since    : 23/6/2020
***************************************************************/
import React, { Component } from 'react';

import "../../scss/updatestyle.scss"
import Pinnote from './pinnote'
import Colornote from './colornote'
import Archive from './archive'
import Remind from './remindnote'
import Image from './addimage'
import More from './more'
import Collaborator from './collaborator'
import notes from '../../services/note'
import { DialogContent, Button,InputBase} from '@material-ui/core';
const service = new notes()
class UpdateNote extends Component{
    constructor(props){
        super(props)
        console.log(props);
        console.log(this.props);
        this.state ={
            title:this.props.value.title,
            description:this.props.value.description,
            id:this.props.value.id, 
            isPined:this.props.value.isPined,           
            color:this.props.value.color,
            label:this.props.value.label,
            photo:this.props.value.photo,
            reminder:this.props.value.reminder,
            open:false,
            
        }
        this.handleChange = this.handleChange.bind(this)             
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }


    updateNote=()=>{
        const data = {
            noteId:this.props.value.id,
            title:this.state.title,
            description:this.state.description,
        }
        let token =localStorage.getItem('token');
        service.updateNote(token,data)
        .then(response => {
            //check response by code
            console.log(response)
             this.props.handleClose()
            this.props.getNote();
            this.setState({snackbaropen:true ,  snackbarmsg: "Note Updated Successfully"}) 
        })
        .catch(error => {
            this.setState({snackbaropen:true,snackbarmsg:error.message})
        }) 
        
    
    }
   
    render(){
       
        return(
            <div>
               <div>
                    <DialogContent className="update-container">
                    <div variant="outlined"> 
                    <div style={{backgroundColor : this.props.value.color}}>
                        <div className="container">
                        <div className="update-title">
                        <InputBase className="input-text"
                            name='title'
                            multiline={true}
                            onChange={this.handleChange}
                            defaultValue={this.state.title}
                            InputProps={{disableUnderline: true}} />
                        </div>
                        <div className="pin">
                            <Pinnote  value={this.props.value} isPined={this.state.isPined} getNote={this.props.getNote}/>
                        </div>  
                        </div>
                        <div className="update-title">
                     <InputBase
                        id='descriptionDisplay'
                        multiline={true}
                        name='description'
                        onChange={this.handleChange}
                        defaultValue={this.state.description}
                        InputProps={{disableUnderline: true}} />
                    </div>
                    <div className="update">
                    <div className="update-icon">
                        <Remind className="remind-card"/>
                    </div>
                    <div className="update-icon">
                        <Collaborator/>
                    </div>
                    <div className="update-icon">
                    <Image/>
                    </div>
                    <div className="update-icon">
                        <Archive value={this.props.value} getNote={this.props.getNote}  />
                    </div> 
                    <div className="update-icon">
                    <Colornote  value={this.props.value} getNote={this.props.getNote}/>
                    </div>
                    <div className="update-icon">
                        <More value={this.props.value} getNote={this.props.getNote}/>
                    </div>
                        <Button type="submit" size="small"  onClick={this.updateNote}>Close</Button>
                    </div>
                 </div>
            </div>
            </DialogContent>
        </div>
  </div>
        )
    }
}

export default UpdateNote