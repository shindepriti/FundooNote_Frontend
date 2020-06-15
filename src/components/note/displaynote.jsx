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
        }

        componentDidUpdate=(prevProps)=>{
            if(prevProps !== this.props){
                this.setState({viewVal:this.props.view})
                this.setState({typeOfNote:this.props.typeOfNote})

            }
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
         
                
          render(){
              return(
                  <div>  
                                                           
                      {this.state.typeOfNote === 'Keep' ?
                      <div>
                        <Addnote noteTypeToPrint= {this.noteTypeToPrint} handleAddList = {this.handleAddList}/>
                      </div> :" "}
                      <div className="note">
                      
                        <Grid  container direction="row" justify="center" alignItems="center"> 
                        {this.state.list.map((value, index)=>(             
                        <div key={value.id}>
                            <div>
                            <Grid>
                              <Note value={value} index={index}/>
                            </Grid>                            
                        </div>
                        </div>
                        ))}</Grid>    
                    </div>
                        
                  </div>
              )
          }



}
export default CardNote

