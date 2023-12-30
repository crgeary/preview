export enum Task {
  /**
   * Deploy pull request to preview environment
   */
  Deploy = "DEPLOY",

  /**
   * Remove a pull request preview environment
   */
  ForceDelete = "FORCE_DELETE",
}
