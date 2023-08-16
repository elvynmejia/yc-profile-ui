My YC Profile ReactJS app scaffolded using ViteJs

# Features
- edit Personal Info
- edit Location
- edit Career

- save data to local storage
- retreives data from local storage
- allows navigation between profile pages using react-router-dom
- uses local component state
- uses reducers to manipulate state

# TODOS
- abstract repeated code that sets and access local storage into reusable hooks

```
  let fromLocalStorage = localStorage.getItem(CAREER_PREFERENCES);

  let companyPreferences;

  if (fromLocalStorage) {
    companyPreferences = JSON.parse(fromLocalStorage);
  } else {
    companyPreferences = defaultState;
  }
```

- create a reusable component for the Save & Next button
- adds test
- think about local component state vs global state
- save data to API
- validate data on the frontend
- the pages at the React level have a lot in common. We could build the pages in a configuration driven approach to avoid code repetition
- building remainig pages will be straightforward
- Add TS types where missing like in the reducers