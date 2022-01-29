const lStorage = {
  LoginStorage: (state) => {
    let logUserData = JSON.stringify({
      email: state.data.email,
      name: state.data.name,
      username: state.data.username,
      status: state.data.status,
      role: state.data.role,
      token: state.data.access_token,
    });
    localStorage.setItem("user", logUserData);
  },
};

export default lStorage;
