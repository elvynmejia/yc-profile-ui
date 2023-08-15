const reducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
      case 'PERSONAL_INFO':
        return {
          ...state,
          ...payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;