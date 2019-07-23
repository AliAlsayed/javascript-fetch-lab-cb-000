function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const token = '316326c0b0b618b83458c172ecd88edae2f5050c';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${owner}`, {
    method: 'POST',
    headers: {
      Authorization:
    }
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
