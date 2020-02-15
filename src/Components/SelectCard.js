import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  button: {
    display: 'block',
    //marginTop: theme.spacing(2),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
});

export default function SelectCard(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
       if(event.target.value == 10) {
       props.soundQualityLow()
    }else if(event.target.value == 20) {
      props.soundQualityMedium()
    }else {
      props.soundQualityHigh()
    }

    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className= 'select-card'>
            <Card className={classes.root} style={{background: 'black', color: 'white'}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                Sound Quality
                </Typography>
                <Typography className={classes.pos} style={{color: 'white'}}color="textSecondary">
                Manually control the music quality in event of poor connection
                </Typography>
            </CardContent>

            <CardActions>
            <div style={{color: 'white'}}>
            <FormControl className={classes.formControl} >
                <InputLabel id="demo-controlled-open-select-label" style={{color: 'white'}}>Equalizer</InputLabel>
                <Select style={{color: 'white'}}
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
                >
               
                <MenuItem value={10}>Low</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>High</MenuItem>
                </Select>
            </FormControl>
        </div>
        </CardActions>
        </Card>
        </div>
   );
}