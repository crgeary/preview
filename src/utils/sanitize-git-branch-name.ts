export function sanitizeGitBranchName(branchName: string) {
  return branchName.replace(/[^a-z0-9]{1,}/gi, "-").replace(/^-|-$/, "");
}
