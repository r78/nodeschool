function loadUsers(userIds, load, done) {
  var count = 0
  var users = []
  userIds.forEach((id, index) => {
    load(id, (user) => {
      users[index] = user
      if (count++ === userIds.length) return done(users)
    })
  })
}

module.exports = loadUsers
