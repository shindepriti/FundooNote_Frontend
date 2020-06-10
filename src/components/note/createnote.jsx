import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth:50,
        display: 'flex',
        flexDirection:'column'
    },
    
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};
const cardStyle = {
    width:'35%',
    margin:'5% 30%'
}

class Note extends React.Component{  
    render(){
        const classes = styles;
            return(

                <div  >
                <Card style={cardStyle} variant="outlined">
                    <Typography  className={classes.title} variant="h5"  component="h2" color="textSecondary" gutterBottom>
                        Title
                    </Typography>
                    <CardContent>
                        <div>
                        <Typography component="p">
                            Take a note...
                        </Typography>
                        </div>
                        
                    </CardContent>
                </Card>
            </div>
            )

} 
}
export default (withStyles(styles)(Note))