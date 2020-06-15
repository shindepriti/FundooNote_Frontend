import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../../scss/note.scss"

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

    render(){
       
        return(
            <div>
                <Card>
                    <CardContent>
                        <div>
                            <div><h5>{this.state.title}</h5></div>
                        </div>
                          <Typography>{this.state.description}</Typography>
                     </CardContent>
                  </Card>
              </div>
        )
    }
}

export default Note