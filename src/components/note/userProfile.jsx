import { Route } from "react-router-dom";

const theme = createMuiTheme({
    overrides: {
      MuiMenu: {
        paper: {
          marginTop: '50px',
          backgroundColor: 'rgb(238, 238, 238)'
        }
      },
      MuiButton: {
        label: {
          textTransform: 'capitalize'
        }
      },
      MuiAvatar: {
  
      }
    }
  })


class UserProfile extends Route.Component{
    constructor(){
        super()
        this.state={
            anchorEl:null,
            logOut:false,
            randomToggle:false

        }
    }
    openProfile = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      onProfileClose = () => {
        this.setState({ anchorEl: null });
      };
    
      logout = () => {
        this.setState({
          logout: true
        });
        localStorage.clear();
      }
    

    render(){
        return(
            <div>
                
                

            </div>

        )
    }
}
export default UserProfile