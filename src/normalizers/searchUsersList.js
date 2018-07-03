const normalizeUser = user => ({
  id: user.id,
  login: user.login,
  score: user.score || 0,
  pictureUrl: user.avatar_url,
  githubUrl: user.html_url,
  reposUrl: user.repos_url,
});

const normalizeUsersList = usersList => usersList.map(normalizeUser);

export default normalizeUsersList;
