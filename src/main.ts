import * as core from "@actions/core";
import * as github from "@actions/github";

import { getTask } from "./utils/get-task";
import { Task } from "./types/task";
import { sanitizeGitBranchName } from "./utils/sanitize-git-branch-name";

async function main() {
  const task = getTask();

  core.debug(`Task: ${task}`);

  if (!task) {
    core.warning(`No tasks match for action ${github.context.payload.action} in event ${github.context.eventName}`);
    return;
  }

  const sanitizedBranchName = sanitizeGitBranchName(github.context.payload.pull_request!.head.ref);

  if (task === Task.Deploy) {
    // ...
    core.info(`Deploying to: ${sanitizedBranchName}.example.com`);
  } else if (task === Task.ForceDelete) {
    // ...
    core.info(`Deleting environment: ${sanitizedBranchName}`);
  }

  core.debug("End of main");
}

main().catch((err) => core.error(err));
