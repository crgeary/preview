import { PayloadPullRequest } from "../types/payload-pull-request";

export function isPullRequestPayload(o: unknown): o is PayloadPullRequest {
  return typeof o === "object" && o !== null && "id" in o;
}
