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
export {
  JOB_SEARCH_STATUS,
  AFFILIATIONS,
  WORK_AUTHORIZATION,
  EMPLOYMENT_SPONSORSHIP,
  REMOTE_WORK_PREFERENCES,
};
