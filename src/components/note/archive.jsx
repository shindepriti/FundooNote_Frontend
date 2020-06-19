import React from 'react'
import { Tooltip,IconButton } from '@material-ui/core';
import archive from '../../assets/archive.svg'
import unarchive from '../../assets/unarchive.svg'
import notes from '../../services/note'
const service = new notes()

class Archivenote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isArchived: false,
            note:[]
        };
      }

    //   componentDidMount(){
    //     this.getArchiveList()
    // }

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

      
      archiveNotes = () => {
        let noteData = {
            noteIdList: [this.props.value.id],
            isArchived: true
        }
        console.log(noteData);
        let token =localStorage.getItem('token');
        service.archiveNote(token,noteData)
            .then(res => {
                this.props.getNote()
            })
            .catch(err => {
                console.log(err);

            })
            
        }

        unarchiveNotes = () => {
            let noteData = {
                noteIdList: [this.props.value.id],
                isArchived: false
            }
            console.log(noteData);
            let token =localStorage.getItem('token');
            service.archiveNote(token,noteData)
                .then(res => {
                    this.props.getNote()
                })
                .catch(err => {
                    console.log(err);
    
                })
                
            }
    

      render(){

          return(

              <div>
                    {this.props.value.isArchived == false ? 
                    <div>
                        <Tooltip title='Archive'>
                            <IconButton  onClick={this.archiveNotes}>
                                <img  src={archive} alt="archive"/>
                            </IconButton>
                        </Tooltip>
                    </div>:""} 
                    {this.props.value.isArchived == true ? <div>
                        <Tooltip title='Unarchive'>
                            <IconButton  onClick={this.unarchiveNotes}>
                                <img  src={unarchive} alt="archive"/>
                            </IconButton>
                        </Tooltip>

                    </div>: ""}
                </div>
          )
      }

}
export default Archivenote