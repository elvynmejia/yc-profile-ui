import { useReducer, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { useNavigate } from 'react-router-dom';

import {
  reducer,
  LOCATION_INFO,
  locationInfoDefaultState,
} from '../reducers/location';

import { 
  REMOTE_WORK_PREFERENCES, 
  EMPLOYMENT_SPONSORSHIP,
  WORK_AUTHORIZATION 
} from '../constants';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      // padding: theme.spacing(),
      // width: '100%'
      marginTop: '20px',
      width: '100ch',
    },
  },
  textField: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

// FIX: select radio button if loading data from local storage
const PersonalInfo = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  let locationInfoFromLocalStorage = localStorage.getItem(LOCATION_INFO);

  let locationInfo;

  if (locationInfoFromLocalStorage) {
    locationInfo = JSON.parse(locationInfoFromLocalStorage);
  } else {
    locationInfo = locationInfoDefaultState;
  }

  const [state, dispatch] = useReducer(reducer, locationInfo);

  const saveAndNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    localStorage.setItem(LOCATION_INFO, JSON.stringify(state));

    navigate('/career');
  };

  // refactor as a hook
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: LOCATION_INFO,
      payload: {
        [name]: value,
      },
    });
  };

  const { city, workAuthorization, sponsorship, openToRemoteWork } = state;
  
  return (
    <div>
      <h1>Personal info</h1>
      <form noValidate autoComplete="off" className={classes.root}>
        <div className={classes.textField}>
          <label htmlFor="html">What city do you live in? *</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </div>
        <div className={classes.textField}>
          <label htmlFor="html">Are you legally authorized to work in the United States? *</label>
          {WORK_AUTHORIZATION.map((status) => {
            return (
              <div>
                <input
                  key={status.value}
                  type="radio"
                  name="workAuthorization"
                  value={status.value}
                  onChange={handleChange}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className={classes.textField}>
          <label htmlFor="html">Will you now, or will you in the future, require sponsorship for employment visa status to work legally in the United States? *</label>
          {EMPLOYMENT_SPONSORSHIP.map((status) => {
            return (
              <div>
                <input
                  key={status.value}
                  type="radio"
                  name="sponsorship"
                  value={status.value}
                  onChange={handleChange}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className={classes.textField}>
          <label htmlFor="html">
            Are you open to working remotely? *
          </label>
          {REMOTE_WORK_PREFERENCES.map((status) => {
            return (
              <div>
                <input
                  key={status.value}
                  type="radio"
                  name="openToRemoteWork"
                  value={status.value}
                  onChange={handleChange}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className="submit-form">
          <button type="submit" onClick={saveAndNext}>
            Save & next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
