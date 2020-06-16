import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import "../../scss/note.scss"
import Pinnote from './pinnote'
import Colornote from './colornote'
import Archive from './archive'
import Remind from './remindnote'
import Image from './addimage'
import More from './more'
import notes from '../../services/note'
const service = new notes()
class Note extends Component{
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
            open:false
        }
               
    }
    componentDidUpdate(prevProps){
        if(prevProps!==this.props){
            this.setState({
                title:this.props.value.title,
                description:this.props.value.description,
                
               })
        }
    }

    
    


    render(){
       
        return(
            <div>
            <div>
                <Card className="get-note" variant="outlined"> 
                     <div>
                        <div className="container">
                            <div className="title">
                                <h4>{this.state.title}</h4>
                            </div>
                            <div className="pin">
                                <Pinnote/>
                            </div>  
                        </div>
                        <div className="input-note">
                            <Typography >{this.state.description}</Typography>
                        </div>
                        <div className="container">
                            <div className="note-icon">
                                <Remind/>
                            </div>
                            <div className="note-icon">
                                <Image/>
                            </div>
                            <div className="note-icon">
                                <Archive/>
                            </div>
                            <div className="note-icon">
                                <Colornote/>
                            </div>
                            <div className="note-icon">
                                <More/>
                            </div>
                        </div>

                     </div>
                  </Card>
              </div>
              </div>
        )
    }
}

export default Note