const PERSONAL_INFO = 'PERSONAL_INFO';

export type personalInfoDefaultStateType = {
  firstName: string | '';
  lastName: string | '';
  email: string | '';
  linkedin: string | '';
  jobStatus: string | '';
  hideFrom: string | '';
};

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  linkedin: '',
  jobStatus: 'yes',
  hideFrom: ''
};

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case PERSONAL_INFO:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export { PERSONAL_INFO, reducer, defaultState };
