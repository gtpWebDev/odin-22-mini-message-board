# odin-22-mini-message-board

An assignment in the nodejs module of the Odin Project.
This readme will be the beginnings of an express project template

## Install the express-generator

It is assumed that the express generator has been installed globally. If not, do so:

```bash
$ npm install -g express-generator
```

## Create the express project

Either:

1. create the express project, initialise the git repository locally, then add the repository to github
   or
2. Create a repository with the template, with the express project already created (not done and tested yet).

### Option 1 - create the express project first:

Create the project with the projectname, from the general repo directory

```bash
 express projectname --view=pug
```

In the directory, install the dependencies

```bash
 npm install
```

Add **gitignore** and remove node_modules

```js
node_modules;
```

Initialise the git repo, setting the name of the default branch.
Add and commit the new files.

```git
git init -b main
git add .
git commit -m "Initial commit"
```

Create the repository on github as usual, with no readme file or gitignore.
Then follow the instructions for
"…or push an existing repository from the command line"

```bash
git remote add origin insertSSHhere
git branch -M main
git push -u origin main
```

### Option 2 - create a git repository with the express project template

Not done this yet.
