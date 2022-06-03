// This is where fetch request functions will be housed
// const PORT = 3001;
module.exports = {

loginUser(userData) {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
}

};
