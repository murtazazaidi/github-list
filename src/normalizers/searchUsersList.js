const normalizeUser = user => ({
  id: user.id,
  login: user.login,
  pictureUrl: user.avatar_url,
  githubUrl: user.html_url,
  reposUrl: user.repos_url,
});

const normalizeUsersList = usersList => usersList.map(normalizeUser);

export default normalizeUsersList;
