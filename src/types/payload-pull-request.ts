export type PullRequestLabel = {
  name: string;
};

export type PayloadPullRequest = {
  [key: string]: any;
  number: number;
  html_url?: string;
  body?: string;

  labels?: PullRequestLabel[];
};
