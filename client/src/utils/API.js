// This is where fetch request functions will be housed
// const PORT = 3001;

const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
};




module.exports = { loginUser }