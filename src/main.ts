import * as core from "@actions/core";
import * as github from "@actions/github";

export async function main() {
  core.info(
    `Running type ${github.context.payload.action} for event ${github.context.eventName}`
  );
}
