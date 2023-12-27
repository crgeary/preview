import * as core from "@actions/core";
import * as github from "@actions/github";

export async function main() {
  core.info(
    JSON.stringify(github.context)
  );
}
