const lStorage = {
  RegisterStorage: (state) => {
    let RegUserData = JSON.stringify({
      id: state.id,
      username: state.username,
    });
    localStorage.setItem("user", RegUserData);
  },
  LoginStorage: (state) => {
    let logUserData = JSON.stringify({
      id: state.id,
      username: state.username,
      token: state.token,
    });
    localStorage.setItem("user", logUserData);
  },
};

export default lStorage;
