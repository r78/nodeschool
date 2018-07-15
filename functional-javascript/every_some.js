function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(u => u.id === submittedUser.id)
    });
  };
};
module.exports = checkUsersValid
