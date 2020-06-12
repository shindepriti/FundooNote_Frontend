import React from 'react'
import "../../scss/note.scss"
import { Card,Input,InputBase} from '@material-ui/core'


import Pinnote from './pinnote'
import Colornote from './colornote'
import Archive from './archive'
import Remind from './remindnote'
import Image from './addimage'
class Displaynote extends React.Component{
        constructor(props){
            super(props)
            this.state={
                title:" ",
                content:"",
                open:false,
            }
           
        }

        render(){
            return(
                <div >
                <Card className="root" variant="outlined">
                <div style={{width:"300px"}}>
                    <div className="container">
                    <div>
                        <Input value={this.state.content} name='content' placeholder="Heading" multiline={true} disableUnderline={true} />
                    </div>
                          
                    <div className="pin">
                        <Pinnote/>
                    </div>
                    </div>
                    <div>
                    <div className="input-note">
                        <Input value={this.state.content} name='content' placeholder="content" multiline={true} disableUnderline={true} />
                    </div>
                    <div style={{display:"flex"}} >
                        <div className="icon">
                            <Remind/>
                        </div>
                        <div className="icon">
                            <Archive/>
                        </div>
                        <div className="icon">
                            <Colornote/>
                        </div>
                        <div className="icon">
                            <Image/>
                        </div>
                        
                    </div>
                    </div> 
                    
                </div>                    
                </Card>
            </div>

               
                    
            )
        }

}
export default Displaynote