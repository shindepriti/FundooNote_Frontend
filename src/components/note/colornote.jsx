import React from 'react'
import "../../scss/note.scss"
import { Tooltip, Menu, MuiThemeProvider} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ColorIcon from '../../assets/colour.svg'
import notes from '../../services/note'
const service = new notes()

  
class Colornote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          anchorEl: null,
          colourName : ['White', 'Red', 'Orange',
          'Yellow', 'Green', 'Teal',
          'Blue', 'Dark Blue', 'Purple',
          'Pink', 'Brown', 'Grey'
        ],
        colourArr : ['#fff', '#ff8a80', '#ffd180',
          '#ffff8d', '#ccff90', '#a7ffeb',
          '#80d8ff', '#82b1ff', '#b388ff',
          '#f8bbd0', '#d7ccc8', '#cfd8dc'
        ],
        };
      }
      
      openPalette = (event) => {
        this.setState({
          anchorEl: event.currentTarget
        });
        
      }

      addColour(color){
        let token =localStorage.getItem('token');
          service.changeColor(token).then(res=>{
              if(res){
                    this.props.changeColor(color)
              }
          })

      }

    handleChangeComplete = (color) => {
        this.setState({ color : color.hex})
      };

       handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
      };
    
      render() {
        let showColor = this.state.colourArr.map((color, ind) => {
            return <div title={this.state.colourName[ind]} key={ind} onClick={() => this.addColour(color)}  className="color-plate" style={{ backgroundColor: [color]}}></div>
          })
        return (
          <div>
            <Tooltip title="Change color">
              <IconButton onClick={this.openPalette}>
                <img src={ColorIcon} alt="colour" />
              </IconButton>
            </Tooltip>
            <MuiThemeProvider>
              <Menu
                anchorEl={this.state.anchorEl}
                open={Boolean(this.state.anchorEl)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center bottom' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center bottom' }}
                onClose={() => { this.setState({ anchorEl: null }) }}
              >
                <div className="color-note">
                  {showColor}
                </div>
              </Menu>
            </MuiThemeProvider>
          </div>
        );
      }
}

export default Colornote