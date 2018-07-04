const normalizeUser = user => ({
  id: user.id,
  login: user.login,
  pictureUrl: user.avatar_url,
  githubUrl: user.html_url,
  reposUrl: user.repos_url,
  name: user.name,
  location: user.location,
  company: user.company,
  email: user.email,
  bio: user.bio,
  blog: user.blog,
  followers: user.followers,
  following: user.following,
  createdAt: user.created_at,
  publicRepos: user.public_repos,
  publicGists: user.public_gists,
});

const normalizeUsersList = usersList => usersList.map(normalizeUser);

export default normalizeUsersList;
