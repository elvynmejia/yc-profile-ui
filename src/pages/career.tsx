import { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

import {
  COMPANY_PREFERENCES as COMPANY_PREFERENCES_OPTIONS,
  EQUITY_PREFERENCE,
  SALARY_PREFERENCE
} from '../constants';

import { CAREER_PREFERENCES, reducer, defaultState } from '../reducers/career';

const PersonalInfo = () => {
  let fromLocalStorage = localStorage.getItem(CAREER_PREFERENCES);

  let companyPreferences;

  if (fromLocalStorage) {
    companyPreferences = JSON.parse(fromLocalStorage);
  } else {
    companyPreferences = defaultState;
  }

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, companyPreferences);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: CAREER_PREFERENCES,
      payload: {
        [name]: value
      }
    });
  };

  const saveAndNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    localStorage.setItem(CAREER_PREFERENCES, JSON.stringify(state));

    navigate('/');
  };

  const { equityPreference, salaryPreference, minimumSalary } = state;

  return (
    <div>
      <h1 className="page-header">Career</h1>
      <form>
        <div className="form-control">
          <label htmlFor="html">
            What size company would you like to work at? *
          </label>
          <div className="container">
            <div className="container-heading">
              <p className="container-heading-item"></p>
              <p className="container-heading-item">Preferred</p>
              <p className="container-heading-item">OK</p>
              <p className="container-heading-item">Not Interested</p>
            </div>
            {COMPANY_PREFERENCES_OPTIONS.map((row) => {
              return (
                <div className="rating-grid-row" key={row.title}>
                  <div className="rating-grid-columns">
                    <div className="grid-column-item">
                      <p>{row.title}</p>
                    </div>
                    {row.ratings.map((rating) => {
                      const key = [row.title, row.name, rating].join('-');
                      return (
                        <div className="grid-column-item" key={key}>
                          <input
                            type="radio"
                            name={row.name}
                            value={rating}
                            onChange={handleChange}
                            checked={rating === state[row.name]}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="html">
            How much do you value equity as part of an overall compensation
            package that includes a market salary? *
          </label>
          {EQUITY_PREFERENCE.map((preference) => {
            return (
              <div key={preference.value}>
                <input
                  type="radio"
                  name="equityPreference"
                  value={preference.value}
                  onChange={handleChange}
                  checked={preference.value === equityPreference}
                />
                <span>{preference.title}</span>
              </div>
            );
          })}
        </div>
        <div className="form-control">
          <label htmlFor="html">
            Do you have a minimum salary requirement? *
          </label>
          {SALARY_PREFERENCE.map((preference) => {
            return (
              <div key={preference.value}>
                <input
                  type="radio"
                  name="salaryPreference"
                  value={preference.value}
                  onChange={handleChange}
                  checked={preference.value === salaryPreference}
                />
                <span>{preference.title}</span>
              </div>
            );
          })}
        </div>
        {salaryPreference === 'medium' && (
          <div className="form-control">
            <label htmlFor="html">
              What minimum salary are you looking for? *
            </label>
            <input
              type="text"
              name="minimumSalary"
              value={minimumSalary}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="submit-form">
          <Button
            className="save-and-next-button"
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
