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
          archive: false
        };
      }

      handelArchive=()=>{
          this.setState({archive:!this.state.archive})
      }
      

      addArchive(){
        const data={
            id:this.props.value.id,
            "isArchived":true
        }
        let token =localStorage.getItem('token');
          service. archiveNote(token,data).then(res=>{
              if(res){
                   // this.props.NoteDeleted()
              }
          })
          .catch(err => {
            this.setState({
                archive: !this.state.archive
              });
          });

      }

      render(){
          return(
              <div>
                <Tooltip title={this.state.archive ? 'Unarchive' : 'Archive'}>
                    <IconButton onClick={this.handelArchive}>
                        <img  src={this.state.archive ? unarchive : archive} alt="archive"/>
                    </IconButton>
                </Tooltip>
                </div>
          )
      }

}
export default Archivenote