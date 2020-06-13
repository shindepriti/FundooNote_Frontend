import React from 'react'
import "../../scss/note.scss"
//import jwt_decode from 'jwt-decode'
import { Card,Typography,Grid} from '@material-ui/core'
import Pinnote from './pinnote'
import Colornote from './colornote'
import Archive from './archive'
import Remind from './remindnote'
import Image from './addimage'
import Addnote from './addnote'
import notes from '../../services/note'
const service = new notes()

const cardStyl = {
    maxWidth:'213px',
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: 'auto',
    marginTop:'25px',
    paddingTop:'25px'
  }
class CardNote extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          list:[],
          valueOf:'',
          index:'',
          open:false,
          maxWidth:'xl',
          pinnedNote:'',
          otherNote:'',
          viewVal:this.props.view,
          typeOfNote:this.props.typeOfNote
            }
          
        }

        componentDidUpdate=(prevProps)=>{
            if(prevProps !== this.props){
                this.setState({viewVal:this.props.view})
                this.setState({typeOfNote:this.props.typeOfNote})

            }
        }

          handleGetNote() {
            // const token = localStorage.usertoken
            // const decoded = jwt_decode(token);
            console.log(this.props)
            console.log(this.state.list);
            let token =localStorage.getItem('token');
            service.getNote(token).then(response =>{
              if(response){
                this.setState({
                  list:response
                })
              }
              //this.noteTypeToPrint();
            })
          }

       
          render(){
              return(
                  <div>  
                                        
                      {this.state.typeOfNote === 'Keep' ?
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Addnote noteTypeToPrint= {this.noteTypeToPrint} handleAddList = {this.handleAddList}/>
                      </div> :" "}
                      <div style={{cardStyl}}>
                         
                    </div>
                        
                  </div>
              )
          }



}
export default CardNote

