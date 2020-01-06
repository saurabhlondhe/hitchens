---
title: "Let's start with git"
date: 2019-03-01
author: "Saurabh Londhe"
avatar: "img/authors/saurabh.png"
image: "img/git.jpg"
categories: [Linux]
layout: post
---

### Let's talk a little bit about why git?

The same guy who created a 'Linux Operating System' Linus Torvalds also created git for Linux kernel development.

While working in a group project we need to keep our code from where other team members can easily access it. keeping them centrally is a good idea but what if someone deleted it by mistakenly. That won't happen but the location where we have kept our code becomes the backbone of our system. If it gets down then we are down. So keeping them centrally may lead to some disasters and solution is to Keep them distributed.

---

### Install git:

The first two things you'll want to do are install git and create a free [GitHub](https://github.com/) account.
I personally love Gitlab as it provides great feature freely but GitHub is the old player 😅

- Installing on Linux

  If you are Fedora guy (`.rpm`)

  ```sh
  sudo dnf install git-all
  ```

  elif you are Debian/ubuntu guy (`.deb`)

  ```sh
  sudo apt install git-all
  ```

  else have a look [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

* Installing on Windows

  No commands for Windows so get installer [here 😒](https://git-scm.com/download/win)

---

### Initial configurations

```sh
$ git config --global user.name "YOUR NAME"

$ git config --global user.email "YOUR EMAIL"
```

### Create a local repository

- Make a folder for your project

  ```sh
  $ mkdir testProject
  ```

- navigate into folder

  ```sh
  $ cd testProject/
  ```

- To initialize a git repository in the root of the folder, run the `git init` command

  ```sh
  $ git init
  Initialized empty Git repository in C:/Users/Saurabh Londhe/github/testProject/.git/
  ```

- git has created a hidden folder in your working directory as `.git`

- This git folder will have these folders
  ```sh
  ├───hooks
  ├───info
  ├───objects
  │   ├───info
  │   └───pack
  └───refs
      ├───heads
      └───tags
  ```

### Working with existing repo

```sh
git clone "URL" foldername
```

### Add files into a new repo

- Then you can commit files in that directory into the repo.

  ```sh
  $ touch test.txt        #creates a file
  ```


    ```sh
    $ git status
    On branch master

    No commits yet

    Untracked files:
    (use "git add <file>..." to include in what will be committed)

            test.txt

    nothing added to commit but untracked files present (use "git add" to track)

    ```

- `Untracked files` these files are newly created and that need to add using `git add 'filename'`

- the command `git add` will add this file into the staging area.

  ```sh
  $ git add test.txt
  ```


    ![Staging Area](https://saurabhlondhe.github.io/static/assets/img/blog/start_git/staging_area.png)


    ```sh
    $ git commit -m "message"
    [master (root-commit) 7dbacf2] message
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 test.txt

    ```

### Push your committed changes to the remote repository

- `git push` will push locally committed changes to the remote repository

- we can specify branch name to push the changes
  ```sh
  git push origin <branch name>
  ```

Till now we have created a repo, added content, committed it and successfully pushed to the remote server.

If you still stuck somewhere use following cheat sheet :)

![Staging Area](https://saurabhlondhe.github.io/static/assets/img/blog/start_git/git-cheatsheet-simple.jpg)

---

Try using git daily because more you use git, the more comfortable you'll.

Git for pro 💪 [here it is](/linux/2019/12/23/adv-git.html).
