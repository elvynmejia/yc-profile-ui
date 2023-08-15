import { useReducer, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { useNavigate } from 'react-router-dom';

import {
  reducer,
  PERSONAL_INFO,
  personalInfoDefaultState,
} from '../reducers/profile';

import { JOB_SEARCH_STATUS, AFFILIATIONS } from '../constants';

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

  let personalProfileFromLocalStorage = localStorage.getItem(PERSONAL_INFO);

  let personalProfile;

  if (personalProfileFromLocalStorage) {
    personalProfile = JSON.parse(personalProfileFromLocalStorage);
  } else {
    personalProfile = personalInfoDefaultState;
  }

  const [state, dispatch] = useReducer(reducer, personalProfile);

  const saveAndNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    localStorage.setItem(PERSONAL_INFO, JSON.stringify(state));

    navigate('/location');
  };

  // refactor as a hook
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: PERSONAL_INFO,
      payload: {
        [name]: value,
      },
    });
  };

  const { email, linkedin, firstName, lastName, hideFrom } = state;

  return (
    <div>
      <h1>Personal info</h1>
      <form noValidate autoComplete="off" className={classes.root}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className={classes.textField}>
            <label htmlFor="html">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className={classes.textField}>
            <label htmlFor="html">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.textField}>
          <label htmlFor="html">Email Address (personal recommended) *</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={classes.textField}>
          <label htmlFor="html">
            LinkedIn Profile URL (highly recommended) *
          </label>
          <input
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={handleChange}
          />
        </div>
        <div className={classes.textField}>
          <label htmlFor="html">What is your job search status? *</label>
          {JOB_SEARCH_STATUS.map((status) => {
            return (
              <div>
                <input
                  key={status.value}
                  type="radio"
                  name="status"
                  value={status.value}
                  onChange={handleChange}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className={classes.textField}>
          <label htmlFor="html">Have you worked at a YC company? *</label>
          {AFFILIATIONS.map((status) => {
            return (
              <div>
                <input
                  key={status.value}
                  type="radio"
                  name="affiliation"
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
            Are there YC companies you want to be hidden from? (e.g. your
            current employer) *
          </label>
          <input
            type="text"
            name="hideFrom"
            value={hideFrom}
            onChange={handleChange}
          />
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