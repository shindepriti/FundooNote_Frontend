import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core';
import image from '../../assets/image.svg'
class Addimage extends React.Component{
    constructor(){
        super()
        this.state={

        }
        this.inputOpenFileRef = React.createRef()
        this.onChange = this.onChange.bind(this)
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }
    onChange=(event)=>{
        event.stopPropagation();
        event.preventDefault();
        event.persist();
            console.log(event.target.files[0]);
            this.setState(prevState =>({
                photo:URL.createObjectURL(event.target.files[0])
              }))
        }
    render(){
        return(
            <div>
                 <input accept="image/*" name="photo" ref={this.inputOpenFileRef} style={{display:'none'}} type="file" onChange={this.onChange}/>
                <Tooltip title="Add image">
                <IconButton >
                <img alt="UploadImage" onClick={this.showOpenFileDlg}  src={image}  />
                </IconButton>
                </Tooltip>
            </div>
        )
    }

}

export default Addimage