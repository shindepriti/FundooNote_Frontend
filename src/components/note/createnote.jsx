import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Input} from '@material-ui/core';
import "../../scss/note.scss"
import Pinnote from './pinnote'

class Note extends React.Component{ 
    
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value})
      }

    render(){
            return(
                <div>
                    <Card className="create-note" variant="outlined">
                    <div>
                        <div className="container">
                            <div className="input-title">
                                <Input name='title' className="input-text" placeholder="Title" onChange={this.handleInput} multiline={true}
                                disableUnderline={true} ></Input>
                            </div>
                            <div className="pin">
                                <Pinnote togglePin={this.togglePin} />
                            </div>  
                        </div>
                        <div className="input-note">
                            <Input name='description' className="input-text" placeholder="Take a note..." onChange={this.handleInput}
                            multiline={true} disableUnderline={true} />
                        </div>
                    </div>
                    </Card>
                </div>
            )

} 
}
export default Note