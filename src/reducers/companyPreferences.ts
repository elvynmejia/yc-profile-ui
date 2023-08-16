const COMPANY_PREFERENCES = 'COMPANY_PREFERENCES';

export type ActionType = {
  type: string;
  payload: {
    seedStagePreference?: string | '';
    smallStagePreference?: string | '';
    mediumStagePreference?: string | '';
    largeStagePreference?: string | '';
  };
};

const defaultState = {
  seedStagePreference: '',
  smallStagePreference: '',
  mediumStagePreference: '',
  largeStagePreference: '',
};

const reducer = (state: any, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case COMPANY_PREFERENCES:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export { COMPANY_PREFERENCES, reducer, defaultState };