const normalizeRepo = repo => ({
  id: repo.id,
  name: repo.name,
  fullName: repo.full_name,
  url: repo.html_url,
  cloneUrl: repo.clone_url,
  createdAt: repo.created_at,
  updatedAt: repo.updated_at,
  pushedAt: repo.pushed_at,
  description: repo.description,
  forks: repo.forks,
  openIssues: repo.open_issues,
  starsCount: repo.stargazers_count,
  watchers: repo.watchers,
  isForked: repo.fork,
  language: repo.language || 'N/A',
  license: repo.licence && repo.license.name,
  size: repo.size,
  topics: repo.topics,
});

const normalizeReposList = reposList => reposList.map(normalizeRepo);

export default normalizeReposList;
