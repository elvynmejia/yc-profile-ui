const JOB_SEARCH_STATUS = [
  {
    title: "I'm actively looking for a job",
    value: 'yes',
  },
  {
    title: "I'm open to new opportunities",
    value: 'passive',
  },
  {
    title:
      "I'm not looking for a job / not ready to meet founders yet. HIDE MY PROFILE.",
    value: 'no',
  },
];

const AFFILIATIONS = [
  {
    title: 'No affiliation',
    value: 'none',
  },
  {
    title: 'Current or former employee at YC company',
    value: 'Current or former employee at YC company',
  },
];

const WORK_AUTHORIZATION = [
  {
    title: 'yes',
    value: 'yes',
  },
  {
    title: 'No',
    value: 'no',
  },
];

const EMPLOYMENT_SPONSORSHIP = [...WORK_AUTHORIZATION];

const REMOTE_WORK_PREFERENCES = [
  {
    title: "I'm open to working remotely",
    value: 'yes',
  },
  {
    title: 'I only want to work remotely',
    value: 'only',
  },
  {
    title: "I don't want to work remotely",
    value: 'no',
  },
];


const COMPANY_PREFERENCES = [
  {
    title: 'Seed: 1 - 10 people',
    ratings: ['high', 'medium', 'low'],
    name: 'seedStagePreference',
  },
  {
    title: 'Small: 11 - 50 people',
    ratings: ['high', 'medium', 'low'],
    name: 'smallStagePreference',
  },
  {
    title: 'Medium: 51 - 300 people',
    ratings: ['high', 'medium', 'low'],
    name: 'mediumStagePreference',
  },
  {
    title: 'Large: 301+ people',
    ratings: ['high', 'medium', 'low'],
    name: 'largeStagePreference',
  },
];

const EQUITY_PREFERENCE = [
  {
    title: "I'm not that interested in startup equity; I'd prefer a cash-heavy package",
    value: 'low'
  },
  {
    title: "I'd be interested in getting some equity at a promising company",
    value: 'medium'
  },
  {
    title: "Equity is very important to me",
    value: 'high'
  }
];

const SALARY_PREFERENCE = [
  {
    title: "Yes, I'm only interested in salaries at or above my minimum",
    value: 'high'
  },
  {
    title: "I have a minimum in mind, but would consider offers below it for the right company",
    value: 'medium'
  },
  {
    title: "I'm flexible, or not sure what my requirements are yet",
    value: 'low'
  }
];

export {
  JOB_SEARCH_STATUS,
  AFFILIATIONS,
  WORK_AUTHORIZATION,
  EMPLOYMENT_SPONSORSHIP,
  REMOTE_WORK_PREFERENCES,
  COMPANY_PREFERENCES,
  EQUITY_PREFERENCE,
  SALARY_PREFERENCE
};
