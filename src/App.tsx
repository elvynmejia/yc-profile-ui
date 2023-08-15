import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Outlet } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ListItemLink = (props: any) => {
  return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={3}>
        <List component="nav" aria-label="secondary mailbox folders">
         <ListItemLink href="/">
           <ListItemText primary="Personal Profile" />
         </ListItemLink>
         <ListItemLink href="/location">
           <ListItemText primary="Location" />
         </ListItemLink>
         <ListItemLink href="/career">
           <ListItemText primary="Career" />
         </ListItemLink>
         <ListItemLink href="/share">
           <ListItemText primary="Share" />
         </ListItemLink>
       </List>
      </Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default App;