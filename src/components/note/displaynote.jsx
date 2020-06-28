import React from 'react'
import "../../scss/note.scss"
import {Grid} from '@material-ui/core'
import Note from './card'
import Addnote from './addnote'
import TrashNote from './trashdisplay'
import notes from '../../services/note'
import Label from './label'
const service = new notes()

class CardNote extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[],
            label:[],
            open:false,
            typeOfNote:this.props.typeOfNote,
            label:this.props.label,
            labelNoteList:[]
            }           
        }
        componentDidUpdate(prevProps){
          if(prevProps !== this.props){
            //this.setState({typeOfNote:this.props.typeOfNote,label:this.props.label})
            if(this.props.typeOfNote==='label'){
              this.setState({typeOfNote:this.props.typeOfNote,label:this.props.label},this.getNotesListByLabel)
            }else{
              this.setState({typeOfNote:this.props.typeOfNote,label:this.props.label});
            }
          }
        }
        
        componentDidMount() {
          if(this.props.typeOfNote === 'label')
            this.getNotesListByLabel();
          else
            this.getNote(); 
        }
      

      getNote = () => {
        let token =localStorage.getItem('token');
        service.getNote(token)
          .then(data => {
              console.log(data)
              this.setState({
                  list: data.data.data.data
                })
            })
            .catch(error => {
                console.log(error);
            })
       }

       getNotesListByLabel = () => {
        service.getNotesListByLabel(this.state.label)
          .then(data => {
              console.log(data)
              this.setState({
                labelNoteList: data.data.data.data
                })
            })
            .catch(error => {
                console.log(error);
            })
       }

      render(){
          return(
                <div>
                  <div>                                       
                      {this.state.typeOfNote === 'Keep' ?<div>
                      <div>
                        <Addnote getNote={this.getNote}/>
                      </div> 
                      <div className="display-note" >
                      <div className="note-container">
                        <div className="note-container-title" >Pinned</div>
                        <Grid container direction="row" justify="left" alignItems="center" > 
                        {this.state.list.filter(note => note.isArchived === false && note.isPined === true && note.isDeleted===false).reverse().map((value, index)=>(             
                        <div key={value.id}>
                            <div >
                              <Grid>
                                <Note getNote={this.getNote}  value={value} index={index}/>
                              </Grid>                            
                            </div> 
                        </div>))}
                        </Grid>
                      </div>
                      <div className="note-container">
                        <div className="note-container-title">Other</div>
                        <Grid container direction="row" justify="left" alignItems="center" > 
                          {this.state.list.filter(note => note.isArchived === false && note.isPined === false && note.isDeleted===false ).reverse().map((value, index)=>(             
                          <div key={value.id}>
                              <div >
                                <Grid>
                                  <Note getNote={this.getNote}  value={value} index={index}/>
                                </Grid>                            
                              </div>
                          </div>
                          ))}
                        
                        </Grid>
                      </div>
                      </div>
                      </div>: ""}
                    </div>

                    <div>
                      <div className="note" >
                        {this.state.typeOfNote === 'Reminder' ?<div>
                          <Grid container direction='row' justify="left" alignItems="center">
                            {this.state.list.reverse().map((value,index)=>(
                              <div key={value.id}>
                                {value.reminder.length > 0 ?
                                <div>
                                  <Grid>
                                    <Note value={value} getNote={this.getNote}  index={index}/>
                                  </Grid>
                                </div> :""}
                                </div>

                            ))}</Grid>
                          
                        </div> : ""}
                        </div>
                  </div>
                  <div>
                      <div className="note" >
                        {this.state.typeOfNote === 'label' ?<div>
                          <Grid container direction='row' justify="left" alignItems="center">
                            {this.state.labelNoteList.map((value,index)=>(
                              <div key={value.id}>
                                  <Grid>
                                    <Note value={value} getNote={this.getNotesListByLabel}  index={index}/>
                                  </Grid>
                                </div>

                            ))}
                          </Grid>
                          
                        </div> : ""}
                        </div>
                  </div>
                        
                    <div>
                      <div className="note" >
                        {this.state.typeOfNote === 'Archive' ?<div>
                          <Grid container direction='row' justify="left" alignItems="center">
                            {this.state.list.reverse().map((value,index)=>(
                              <div key={value.id}>
                                {value.isArchived === true ?
                                <div>
                                  <Grid>
                                    <Note value={value} getNote={this.getNote}  index={index}/>
                                  </Grid>
                                </div> :""}
                                </div>

                            ))}</Grid>
                          
                        </div> : ""}
                        </div>
                  </div>

                  <div>
                      <div className="note" >
                        {this.state.typeOfNote === 'Trash' ?<div>
                          <Grid container direction='row' justify="left" alignItems="center">
                            {this.state.list.reverse().map((value,index)=>(
                              <div key={value.id}>
                                {value.isDeleted === true ?
                                <div>
                                  <Grid>
                                    <TrashNote value={value} getNote={this.getNote}  index={index}/>
                                  </Grid>
                                </div> :""}
                                </div>

                            ))}</Grid>
                          
                        </div> : ""}
                        </div>
                  </div>

                  
                  
                  </div>
              )
          }



}
export default CardNote