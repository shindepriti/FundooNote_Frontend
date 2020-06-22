import React from 'react'
import { Tooltip,IconButton ,Button,Snackbar} from '@material-ui/core';
import archive from '../../assets/archive.svg'
import unarchive from '../../assets/unarchive.svg'
import notes from '../../services/note'
const service = new notes()

class Archivenote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isArchived: this.props.value.isArchived,
            note:[],
            snackbaropen:false,
            snackbarmsg:"",
        };
      }

    getArchiveList=()=>{
      let token = localStorage.getItem('token');
      service.getArchiveNotes(token)
         .then(data =>{
           console.log(data)
           this.setState({
             note:data.data.data.data,
             
           })
         })
         .catch(error =>{
           console.log(error)
         })
    }

      
    archiveUnarchiveNotes = () => {
        let noteData = {
            noteIdList: [this.props.value.id],
            isArchived: !this.state.isArchived
        }
        console.log(noteData);
        let token =localStorage.getItem('token');
        service.archiveNote(token,noteData)
            .then(response => {
                this.setState({isArchived:!this.state.isArchived});
                this.props.getNote()
                this.setState({snackbaropen:true ,  snackbarmsg: this.state.isArchived=== true?"Archived":"Un Archived"}) 
            })
            .catch(error => {
                this.setState({snackbaropen:true,snackbarmsg:error.message})
            }) 
            
        }

      render(){

          return(
                <div>
                <Tooltip title={this.state.isArchived ? 'Unarchive' : 'Archive'}>
                    <IconButton onClick={this.archiveUnarchiveNotes}>
                        <img  src={this.state.isArchived ? unarchive : archive} alt="archive"/>
                    </IconButton>
                </Tooltip>

                <Snackbar
                    anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                    open={this.state.snackbaropen}
                    autoHideDuration={100000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={<Button color="inherit" size="small">Undo</Button>}/>
                </div>
          )
      }

}
export default Archivenote