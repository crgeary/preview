import * as github from "@actions/github";

import { pullRequestPayloadHasLabel } from "./pull-request-has-label";
import { isPullRequestPayload } from "./is-pull-request-payload";
import { PULL_REQUEST_PREVIEW_LABEL } from "../constants";
import { Task } from "../types/task";

export function getTask(): Task | null {
  const { eventName, payload } = github.context;

  if (eventName !== "pull_request") {
    return null;
  }

  if (payload.action === "labeled" && payload.label.name === PULL_REQUEST_PREVIEW_LABEL) {
    return Task.Deploy;
  }

  if (payload.action === "unlabeled" && payload.label.name === PULL_REQUEST_PREVIEW_LABEL) {
    return Task.ForceDelete;
  }

  if (!isPullRequestPayload(payload.pull_request) || !pullRequestPayloadHasLabel(payload.pull_request)) {
    return null;
  }

  if (payload.action === "synchronize" || payload.action === "reopened") {
    return Task.Deploy;
  }

  if (payload.action === "closed") {
    return Task.ForceDelete;
  }

  return null;
}
