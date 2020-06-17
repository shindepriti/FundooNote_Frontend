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
            valueOf:'',
            index:'',
            open:false,
            typeOfNote:this.props.typeOfNote
            } 
            this.handleAddList = this.handleAddList.bind(this);
            this.noteTypeToPrint = this.noteTypeToPrint.bind(this);
            this.handleClickOpen = this.handleClickOpen.bind(this);
                    
        }
        handleClickOpen = (value, index) => {
          this.setState({ open: true });
          this.setState({valueOf:value})
          this.setState({index:index})
        };
      
        componentDidUpdate=(prevProps)=>{
            if(prevProps !== this.props){
                this.setState({typeOfNote:this.props.typeOfNote})

            }
        }
        noteTypeToPrint (){
          let pinCount = 0;
          let noteCount = 0;
          this.state.list.forEach(value => {
            if(value.isPined === true && value.noteType === 'isNote'){
                  pinCount++; 
                  
                }
                if(value.isPined === false && value.noteType === 'isNote'){
                  noteCount++
                
              }
              if(pinCount > 0){
                this.setState({pinedNote:'PINNED'})
              }
              else{
                this.setState({pinedNote:''})
              }
              if(noteCount>0){
                this.setState({otherNote:'OTHERS'})
              }
              else{
                this.setState({otherNote:''})
              }
          });
        }
        
        componentDidMount() {
          let token =localStorage.getItem('token');
          service.getNote(token).then(res =>{
            console.log(res);
            if(res){
              this.setState({
                list:res.data.data.data
              })
            }
            
          })
        }

          handleAddList = (newItem) =>{
            let newList = this.state.list
            newList.push(newItem);
            this.setState({list:newList})
            this.noteTypeToPrint()
          }
                
          render(){
              return(
                  <div>  
                                                           
                      {this.state.typeOfNote === 'Keep' ?
                      <div>
                        <Addnote noteTypeToPrint= {this.noteTypeToPrint} handleAddList = {this.handleAddList}/>
                      </div> :" "}
                      <div className="note" >
                      
                        <Grid container direction="row" justify="center" alignItems="center" > 
                        {this.state.list.map((value, index)=>(             
                        <div key={value.id}>
                            <div >
                            <Grid>
                              <Note  value={value} index={index}/>
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
                                    <Note value={value} index={index}/>
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