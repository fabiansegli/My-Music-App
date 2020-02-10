import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 400,
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
});

export default function Toggle() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className= 'toogle'>
            <Card className={classes.root} style={{background: 'black', color: 'white'}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                Online Mode
                </Typography>
                <Typography className={classes.pos} style={{color: 'white'}}color="textSecondary">
                Is this application connected to the internet?
                </Typography>
            </CardContent>
            <CardActions>
            <FormGroup>
                <FormControlLabel
                    control={<Switch color = 'primary' checked={checked} onChange={toggleChecked} />}
                    label="Normal"
                />
            </FormGroup>
            </CardActions>
            </Card>
    </div>
  );
}
