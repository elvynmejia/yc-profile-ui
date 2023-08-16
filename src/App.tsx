import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={2}>
        <div className="side-nav">
          <h3 style={{ marginLeft: '35px' }}>My Profile</h3>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Personal Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/location"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Location
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Career
              </NavLink>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default App;
