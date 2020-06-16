/***************************************************************
 * @purpose  : Define Note Add 
 * @file     : addnote.jsx             
 * @overview : Componet To Handel Note Add  
 * @author   : priti shinde
 * @since    : 9/6/2020
***************************************************************/
import React from 'react';
import Card from '@material-ui/core/Card';
import {Input,Button,InputBase} from '@material-ui/core';
import "../../scss/note.scss"
import Pinnote from './pinnote'
import Colornote from './colornote'
import Archive from './archive'
import Remind from './remindnote'
import notes from '../../services/note'
import Image from './addimage'
import More from './more'
const service = new notes()

class Addnote extends React.Component{ 
    constructor(){
        super()
        this.state = {
            title:'',
            description:'',
            color:'',
            isPined:false,
            noteType:'isNote',
            photo:'',
            reminder:'',
            openNote:false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    openNoteForContent=()=>{
        this.setState({openNote:true})
    }

    closeNoteForContent = ()=>{
        this.setState({openNote:false, title:'', description:''})
    }

    handleToggle = () => {
        this.setState(state => ({ openNote: !state.openNote }));
      };

    onSubmit(event){
        if(this.state.title !== '' && this.state.description !== ''){
            let token = localStorage.getItem('token')
            event.preventDefault()
            const note = {
                title:this.state.title,
                description:this.state.description,
                noteType: this.state.noteType,
                isPined:this.state.isPined,
                userId:token.id,
                color:this.state.color,
                photo:this.state.photo,
                reminder:this.state.reminder
            }
            service.addNote(note).then(res => {
                if(res){
                    this.props.handleAddList(res);
                    
                }
               })
               .catch(err => {
                   console.log(err);
                   
               })
              
               
        }else{
            this.handleToggle();
            
        } 
     }
    
     changeColor = (color) => {
        this.setState({
            color: color
        })
    }

    render(){
            return(
                <div className="note">
                    <Card className="create-note" variant="outlined">
                    <div>
                        <div className="container">
                            <div className="input-title">
                                <InputBase name='title' value={this.state.title} className="input-text" placeholder="Title" onChange={this.onChange} multiline={true}
                                disableUnderline={true} onClick ={this.openNoteForContent}
                                ></InputBase>
                            </div>
                            <div className="pin">
                                <Pinnote/>
                            </div>  
                        </div>
                        { this.state.openNote ? true && <div>
                        <div className="input-note">
                            <Input value={this.state.description} name='description' className="input-text" placeholder="Take a note..." onChange={this.onChange}
                            multiline={true} disableUnderline={true} />
                        </div>
                        <div className="container" >
                            <div className="icon">
                                <Remind/>
                            </div>
                            <div className="icon">
                                <Image/>
                            </div>
                            <div className="icon">
                                <Archive/>
                            </div>
                            <div className="icon">
                                <Colornote changeColor={this.changeColor}/>
                            </div>
                            <div className="icon">
                                <More/>
                            </div>
                            <div className="button-container">
                            <Button  size="small" onClick={this.onSubmit}>Close</Button>
                            </div>
                        </div>
                        </div> : null}
                        
                    </div>                    
                    </Card>
                </div>
            )

} 
}
export default Addnote