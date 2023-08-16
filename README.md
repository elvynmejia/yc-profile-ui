My YC Profile ReactJS app scaffolded using vite

# Features
- Edit Peersonal Info
- Edit Location
- Edit Career

- save data to local storage
- retreives data from local storage
- allows navigation between profile pages
- uses local component state
- uses reducers to manipulate state

# TODOS
- abstract repeated code that sets and access local storage into a reusable hooks

```
  let fromLocalStorage = localStorage.getItem(CAREER_PREFERENCES);

  let companyPreferences;

  if (fromLocalStorage) {
    companyPreferences = JSON.parse(fromLocalStorage);
  } else {
    companyPreferences = defaultState;
  }
```

- Create a reusable component for the Save & Next button
- Adds test
- think about local component state vs global state
- save data to API
- validate data on the frontend