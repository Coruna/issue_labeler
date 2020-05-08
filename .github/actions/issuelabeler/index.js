const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
  
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    //const repo = github.context.repo;
    const token = core.getInput("repo-token");
    const number = core.getInput("number");
    const octokit = new github.GitHub(token);
    
    const label = "new"
        
    // Label issue
    const response = await octokit.issues.addLabels({
      owner,
      repo,
      issue_number: number,
      labels: label
    });      
       
    console.log(response);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
