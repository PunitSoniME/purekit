### main branch
- `main` branch contains production code.

### develop branch
- `develop` branch is created from main.
- This branch contains pre-production code.

### release branch
- `release` branch is created from develop.
- When the `release` branch is done it is merged into `develop` and `main`.

### feature / fix branch
- `feature or fix` branches are created from develop.
- When a `feature or fix` is complete it is merged into the develop branch.

--------------------------
### Branch naming

- For `feature` - `feature/branch-name` ( For example `feature/new-feature` )
- For `release` - `release/version-number` ( For example `release/1.0.0` )
- For `fix`     - `fix/branch-name`
- For `hot Fix` - `hotfix/branch-name`
- To push small things - create `feature` branch from `develop`

> Note: All your pull request must be `YOUR_BRANCH` to `develop` branch

-------------------------

### If you PR solves any issue, please include comment like this below

- Suppose your PR fix issue no 16, then include `resolves #16` in your commit message to link the issue with your PR automatically

- You can refer this [GitHub page](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) also
