// FIX: select radio button if loading data from local storage
const PersonalInfo = () => {
  return (
    <div>
      <h1 className="page-header">Career</h1>
      <form>
      <div className="form-control">
          <label htmlFor="html">What size company would you like to work at? *</label>
          {/* <input type="text" name="city" value={city} onChange={handleChange} /> */}
        </div>
      </form>

      {/* <form noValidate autoComplete="off">
        <div className="form-control">
          <label htmlFor="html">What city do you live in? *</label>
          <input type="text" name="city" value={city} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label htmlFor="html">
            Are you legally authorized to work in the United States? *
          </label>
          {WORK_AUTHORIZATION.map((status) => {
            return (
              <div>
                <input
                  key={status.value}
                  type="radio"
                  name="workAuthorization"
                  value={status.value}
                  onChange={handleChange}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className="form-control">
          <label htmlFor="html">
            Will you now, or will you in the future, require sponsorship for
            employment visa status to work legally in the United States? *
          </label>
          {EMPLOYMENT_SPONSORSHIP.map((status) => {
            return (
              <div>
                <input
                  key={status.value}
                  type="radio"
                  name="sponsorship"
                  value={status.value}
                  onChange={handleChange}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className="form-control">
          <label htmlFor="html">Are you open to working remotely? *</label>
          {REMOTE_WORK_PREFERENCES.map((status) => {
            return (
              <div>
                <input
                  key={status.value}
                  type="radio"
                  name="openToRemoteWork"
                  value={status.value}
                  onChange={handleChange}
                />
                <label htmlFor="status">{status.title}</label>
              </div>
            );
          })}
        </div>
        <div className="submit-form">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={saveAndNext}
          >
            Save & next
          </Button>
        </div>
      </form> */}
    </div>
  );
};

export default PersonalInfo;
