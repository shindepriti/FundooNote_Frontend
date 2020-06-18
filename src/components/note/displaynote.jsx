import React from 'react'
import "../../scss/note.scss"
import {Grid} from '@material-ui/core'
import Note from './card'
import Addnote from './addnote'
import notes from '../../services/note'
const service = new notes()

class CardNote extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[],
            typeOfNote:this.props.typeOfNote
            } 
           
                    
        }


        componentDidMount() {
          this.getNote()
        }
      

      getNote = () => {
        let token =localStorage.getItem('token');
        service.getNote(token)
            .then(data => {
                console.log(data)
                this.setState({
                    list: data.data.data.data
                })
            }
            )
            .catch(err => {
                console.log(err);
            })
       }
         
          render(){
              return(
                  <div>  
                                                           
                      
                      <div>
                        <Addnote getNote={this.getNote}/>
                      </div> 
                      <div className="note" >
                      
                        <Grid container direction="row" justify="center" alignItems="center" > 
                        {this.state.list.map((value, index)=>(             
                        <div key={value.id}>
                            <div >
                            <Grid>
                              <Note getNote={this.getNote}  value={value} index={index}/>
                            </Grid>                            
                        </div>
                        </div>
                        ))}</Grid>
                      </div>

                        {this.state.typeOfNote === 'Archive' ?<div>
                          <Grid container direction='row' justify="center" alignItems="center">
                            {this.state.list.map((value,index)=>(
                              <div key={value.id}>
                                <div>
                                  <Grid>
                                    <Note value={value} getNote={this.getNote} index={index}/>
                                  </Grid>
                                </div>
                                </div>

                            ))}</Grid>

                        </div> : ""}
                  </div>
              )
          }



}
export default CardNote