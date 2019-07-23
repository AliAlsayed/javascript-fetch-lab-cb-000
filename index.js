function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {

}

function forkRepo() {

  const token = '2858f9f3dabcfbd2bfaaaa0cd8b55a831ecc3c06';

  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
