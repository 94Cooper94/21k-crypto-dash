import * as React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Transaction History</Title>
      <Typography component="p" variant="h4">
        $COST
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        DATE
      </Typography>
      <Typography component="p" variant="h4">
        $COST
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        DATE
      </Typography>
      <Typography component="p" variant="h4">
        $COST
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        DATE
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
