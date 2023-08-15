const LOCATION_INFO = 'LOCATION';

export type locationInfoDefaultStateType = {
  city: string | '';
  workAuthorization: string | '';
  sponsorship: string | '';
  openToRemoteWork: boolean | '';
};

const locationInfoDefaultState = {
  city: '',
  workAuthorization: '',
  sponsorship: '',
  openToRemoteWork: '',
};

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case LOCATION_INFO:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export { LOCATION_INFO, reducer, locationInfoDefaultState };