import { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

import { COMPANY_PREFERENCES as COMPANY_PREFERENCES_OPTIONS } from '../constants';

import { 
  COMPANY_PREFERENCES,
  reducer,
  defaultState
} from '../reducers/companyPreferences';

const PersonalInfo = () => {

  let fromLocalStorage = localStorage.getItem(COMPANY_PREFERENCES);

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
      type: COMPANY_PREFERENCES,
      payload: {
        [name]: value
      }
    });
  };

  const saveAndNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    localStorage.setItem(COMPANY_PREFERENCES, JSON.stringify(state));

    navigate('/');
  };

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
                      const key = [row.title, row.name, rating].join('-')
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
