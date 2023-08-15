import { useReducer, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import reducer from '../reducers/profile';
import { jobSearchStatus, affiliations } from '../constants';

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

const PersonalInfo = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    linkedin: '',
    jobStatus: 'yes',
    hideFrom: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e);
    dispatch({
      type: 'PERSONAL_INFO',
      payload: {
        [name]: value,
      },
    });
  };

  console.log({ state });

  const { email, linkedin, firstName, lastName, hideFrom } = state;
  return (
    <div>
      Personal info
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
          {jobSearchStatus.map((status) => {
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
          {affiliations.map((status) => {
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
      </form>
    </div>
  );
};

export default PersonalInfo;
