const CAREER_PREFERENCES = 'CAREER_PREFERENCES';

export type ActionType = {
  type: string;
  payload: {
    seedStagePreference?: string | '';
    smallStagePreference?: string | '';
    mediumStagePreference?: string | '';
    largeStagePreference?: string | '';
    equityPreference?: string | '';
    salaryPreference?: string | '';
    minimumSalary?: string | '';
  };
};

const defaultState = {
  seedStagePreference: '',
  smallStagePreference: '',
  mediumStagePreference: '',
  largeStagePreference: '',
  equityPreference: '',
  salaryPreference: '',
  minimumSalary: ''
};

const reducer = (state: any, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case CAREER_PREFERENCES:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export { CAREER_PREFERENCES, reducer, defaultState };
