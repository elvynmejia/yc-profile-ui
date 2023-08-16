import { useReducer } from 'react';
import Button from '@material-ui/core/Button';

import { useNavigate } from 'react-router-dom';

import {
  reducer,
  PERSONAL_INFO,
  defaultState,
} from '../reducers/profile';

import { JOB_SEARCH_STATUS, AFFILIATIONS } from '../constants';

// FIX: select radio button if loading data from local storage
const PersonalInfo = () => {
  const navigate = useNavigate();

  let promLocalStorage = localStorage.getItem(PERSONAL_INFO);

  let personalProfile;

  if (promLocalStorage) {
    personalProfile = JSON.parse(promLocalStorage);
  } else {
    personalProfile = defaultState;
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

  const { email, linkedin, firstName, lastName, hideFrom, affiliation } = state;
  console.log({ affiliation })
  return (
    <div>
      <h1 className="page-header">Personal info</h1>
      <p>
        Connect with over one thousand YC startup founders with a single
        profile. Founders can reach you via email or through the platform. (And
        we'll send you notifications.)
      </p>
      <form noValidate autoComplete="off" className="form">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            className="form-control"
            style={{ width: '50%', marginRight: '50px' }}
          >
            <label htmlFor="html">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control" style={{ width: '50%' }}>
            <label htmlFor="html">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="html">Email Address (personal recommended) *</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
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
        <div className="form-control">
          <label htmlFor="html">What is your job search status? *</label>
          {JOB_SEARCH_STATUS.map((status) => {
            return (
              <div key={status.value}>
                <input
                  type="radio"
                  name="status"
                  value={status.value}
                  onChange={handleChange}
                  checked={state.status === status.value}
                />
                <span>{status.title}</span>
              </div>
            );
          })}
        </div>
        <div className="form-control">
          <label htmlFor="html">Have you worked at a YC company? *</label>
          {AFFILIATIONS.map((status) => {
            return (
              <div key={status.value}>
                <input
                  type="radio"
                  name="affiliation"
                  value={status.value}
                  checked={state.affiliation === status.value}
                  onChange={handleChange}
                />
                <span>{status.title}</span>
              </div>
            );
          })}
        </div>
        <div className="form-control">
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
          <Button
            className='save-and-next-button'
            variant="contained"
            color="primary"
            type="submit"
            onClick={saveAndNext}
          >
            Save & next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
