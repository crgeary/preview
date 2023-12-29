import { PULL_REQUEST_PREVIEW_LABEL } from "../constants";

type Label = {
  name: string;
};

type PullRequestPayloadHasLabelInput = {
  labels?: Label[];
};

export function pullRequestPayloadHasLabel(input: PullRequestPayloadHasLabelInput) {
  return !!input.labels?.find((label) => label.name === PULL_REQUEST_PREVIEW_LABEL);
}
