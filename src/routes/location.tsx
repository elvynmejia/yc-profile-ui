import { useReducer } from 'react';
import Button from '@material-ui/core/Button';

import { useNavigate } from 'react-router-dom';

import {
  reducer,
  LOCATION_INFO,
  locationInfoDefaultState,
} from '../reducers/location';

import {
  REMOTE_WORK_PREFERENCES,
  EMPLOYMENT_SPONSORSHIP,
  WORK_AUTHORIZATION,
} from '../constants';

// FIX: select radio button if loading data from local storage
const PersonalInfo = () => {
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
      <h1 className="page-header">Location</h1>
      <form noValidate autoComplete="off">
        <div className="form-control">
          <label htmlFor="html">What city do you live in? *</label>
          <input type="text" name="city" value={city} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label htmlFor="html">
            Are you legally authorized to work in the United States? *
          </label>
          {WORK_AUTHORIZATION.map((status) => {
            return (
              <div key={status.value}>
                <input
                  type="radio"
                  name="workAuthorization"
                  value={status.value}
                  onChange={handleChange}
                  checked={status.value === workAuthorization}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className="form-control">
          <label htmlFor="html">
            Will you now, or will you in the future, require sponsorship for
            employment visa status to work legally in the United States? *
          </label>
          {EMPLOYMENT_SPONSORSHIP.map((status) => {
            return (
              <div key={status.value}>
                <input
                  type="radio"
                  name="sponsorship"
                  value={status.value}
                  onChange={handleChange}
                  checked={status.value === sponsorship}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className="form-control">
          <label htmlFor="html">Are you open to working remotely? *</label>
          {REMOTE_WORK_PREFERENCES.map((status) => {
            return (
              <div key={status.value}>
                <input
                  type="radio"
                  name="openToRemoteWork"
                  value={status.value}
                  onChange={handleChange}
                  checked={status.value === openToRemoteWork}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
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
