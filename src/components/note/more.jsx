/**********************************************************************
 * @purpose  : Define Note delete label 
 * @file     : more.jsx             
 * @overview : Componet To Handel Delete label and Other options for User
 * @author   : priti shinde
 * @since    : 20/6/2020
************************************************************************/
import React from 'react'
import { Tooltip,TextField,ClickAwayListener,MenuList, MenuItem,Menu,Checkbox} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import More from '../../assets/more.svg'
import Label from './label'
import DeleteNote from './deletenote'
import { ArrowLeft } from '@material-ui/icons';
import labels from '../../services/label';
import notes from '../../services/note'
const noteService = new notes()
const labelService = new labels()
class MoreNote extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
          anchorEl: null,
          active:false ,
          typeOfNote:this.props.typeOfNote,
          label:"",
          labelPick:false,
          labelList:[],
          getNoteLabel:this.props.getNoteLabel ,
        //   noteLabels:this.props.value.noteLabels,
          checkBoxClick:true    
        }
        
    }

    componentDidMount() {
        this.getNoteLabel() 
              
      }
      
      getNoteLabel=()=>{
        let token =localStorage.getItem('token');
        labelService.getNoteLabelList(token)
          .then(data => {
              console.log(data)
              this.setState({
                labelList: data.data.data.details
                },this.initializeNoteLabels)
            })
            .catch(error => {
                console.log(error);
            })
       }

    //    initializeNoteLabels = ()=>{
    //         this.state.noteLabels.forEach((noteLbl,j,noteLbls)=>{
    //             this.setState({[noteLbl.id]:true});
    //         })
    //    }

       addRemoveLabelToNote=(event)=>{
           let noteLabelId = event.target.name;

        this.setState({[event.target.name]: event.target.checked},()=>{
            if(this.state[noteLabelId] === true){
                //code to assign label to note
            }else{
                //code to remove label from note
            }
        })

        // let userId = localStorage.getItem('userId');
        // let id = this.props.value.id
        // let checkBoxClick = this.state.checkBoxClick
        // if(checkBoxClick === true){
        //     noteService.addLabelToNote(id,userId)
        //     .then(data => {
        //         console.log(data)
        //         this.setState({checkBoxClick:!this.state.checkBoxClick});
        //         this.props.getNote()
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        //     }
        // else{
        // noteService.removeLabelToNote(id,userId)
        //   .then(data => {
        //       console.log(data)
        //       this.setState({checkBoxClick:!this.state.checkBoxClick});
        //       this.props.getNote()
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        // }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleMenuClick = (event) => {
        this.setState({active:true,anchorEl: event.currentTarget});
        
    }
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };
    handelLabelClick = (event) => {

        this.setState({labelPick:true});

    }
    handelLabelClose = (event) => {
        this.setState({labelPick:false});
    }
    handleClickAway = () => {
      this.setState({ active: false});  
  }
      render(){
        const { anchorEl } = this.state;
          return(
              <div>
                  <ClickAwayListener onClickAway={this.handleClickAway} >
                <div>
                <div>
                <Tooltip title="More">
                        <IconButton getNote={this.props.getNote} onClick={this.handleMenuClick} >
                            <img src={More}></img>
                        </IconButton>
                  </Tooltip> 
                </div>
                <div  className="deletecontainer" >
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left bottom ' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left bottom' }}
                        open={Boolean(anchorEl)}
                        onClose={this.handleMenuClose}> 
                        
                        {this.state.labelPick ? 
                            <div>
                                <MenuItem>
                                    <ArrowLeft onClick={this.handelLabelClose}/>
                                    {/* <TextField name="label" value={this.state.label} onChange={this.handleChange} type="text" placeholder="Enter Label name" /> */}    
                                </MenuItem>
                                <FormGroup>
                                {this.state.labelList.map((value,index)=>(
                                    <MenuItem key={value.id} >
                                        <FormControlLabel 
                                            control={<Checkbox checked={this.state[value.id]}  onChange={this.addRemoveLabelToNote} 
                                            name={value.id} />}
                                            label={value.label} />
                                    </MenuItem>                                
                                ))}
                                </FormGroup>
                            </div>:
                            <div>
                                <MenuItem>
                                    <DeleteNote value={this.props.value} getNote={this.props.getNote}/>
                                </MenuItem>
                                <MenuItem onClick={this.handelLabelClick} >Add Lable</MenuItem> 
                            </div>}
                        
                    </Menu>
                </div>
                </div>
                </ClickAwayListener> 
              </div>
          )
      }

}
export default MoreNote


