let JiraApi = require('jira-client');
let config = require('./config.json')

// Initialize
let jira = new JiraApi({
  protocol: config.protocol,
  host: config.host,
  username: config.username,
  password: config.password,
  apiVersion: config.apiVersion,
  strictSSL: config.strictSSL // bool
});


jira.findIssue(issueNumber)
  .then(function (issue) {
    console.log('Status: ' + issue.fields.status.name);
  })
  .catch(function (err) {
    console.error(err);
  });