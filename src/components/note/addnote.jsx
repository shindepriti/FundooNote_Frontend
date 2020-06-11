import React from 'react';
import Card from '@material-ui/core/Card';
import {Input,Button,InputBase} from '@material-ui/core';
import "../../scss/note.scss"
import Pinnote from './pinnote'
import Colornote from './colornote'
import Archive from './archive'
import Remind from './reminder'
import notes from '../../services/note'
const service = new notes()
class Addnote extends React.Component{ 
    constructor(){
        super()
        this.state = {
            title:'',
            content:'',
            color:'',
            isPinned:false,
            label:[],
            noteType:'isNote',
            photo:'',
            reminder:'',
            openNote:false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    openNoteForContent=()=>{
        this.setState({openNote:true})
    }

    closeNoteForContent = ()=>{
        this.setState({openNote:false, title:'', content:''})
    }

    onSubmit(e){
        if(this.state.title !== '' && this.state.content !== ''){
            const token = localStorage.getItem('token')
            e.preventDefault()
            const note = {
                title:this.state.title,
                content:this.state.content,
                noteType: this.state.noteType,
                isPinned:this.state.isPinned,
                userId:token._id,
                color:this.state.color,
                label:this.state.label,
                photo:this.state.photo,
                reminder:this.state.reminder
            }
    
            service.addNote(note).then(res => {
                if(res){
                    console.log("Add Note")
                }
               })
               .catch(err => {
                   console.log(err);
               })
            }  
           
    }
    

    render(){
            return(
                <div>
                    <Card className="create-note" variant="outlined">
                    <div>
                        <div className="container">
                            <div className="input-title">
                                <InputBase name='title' value={this.state.title} className="input-text" placeholder="Title" onChange={this.handleInput} multiline={true}
                                disableUnderline={true} onClick ={this.openNoteForContent}
                                onChange={this.onChange}></InputBase>
                            </div>
                            <div className="pin">
                                <Pinnote togglePin={this.togglePin} />
                            </div>  
                        </div>
                        { this.state.openNote ? true && <div>
                        <div className="input-note">
                            <Input value={this.state.content} name='content' className="input-text" placeholder="Take a note..." onChange={this.onChange}
                            multiline={true} disableUnderline={true} />
                        </div>
                        <div style={{display:"flex"}} >
                            <div className="icon">
                                <Remind/>
                            </div>
                            <div className="icon">
                                <Archive/>
                            </div>
                            <div className="icon">
                                <Colornote/>
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