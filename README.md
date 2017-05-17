# nobitsy v.0.2017.05.15.01

A React Web Client that uses thebaracca/cekirdek, for nobitsy.com

## Getting Started

thebaracca/nobitsy uses [SemVer](http://semver.org/lang/tr/) for decent versioning and [facebook/react](https://facebook.github.io/react/). These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites


### Installing

After installing Git, Git Bash, VirtualBox/Parallels(Mac) and Vagrant, open Git Bash/Terminal to get Homestead:

```
cd ~

git clone https://github.com/laravel/homestead.git Homestead

cd ./Homestead

// Mac / Linux...
bash init.sh

// Windows...
init.bat
```

After init, `Homestead.yaml` will be placed in ~/.homestead hidden directory (for windows: C:\Users\Backend\ .homestead).

The `provider` in ~/.homestead/Homestead.yaml means which Vagrant provider should be used: virtualbox, vmware_fusion, vmware_workstation, or parallels.
```
provider: virtualbox
```

The `folders` property of the Homestead.yaml file lists all shared folders with Homestead.
```
folders:
    - map: ~/Code
      to: /home/vagrant/Code
```

The `sites` property of the Homestead.yaml file make it possible to access our project from Browser and Postman
```
sites:
    - map: nobitsy.local
      to: /home/vagrant/Code/nobitsy/public
```

And add `nobitsy.local` to your local host file (for mac: /etc/hosts for windows: C:\Windows\System32\drivers\etc\hosts)
```
192.168.10.10  nobitsy.local
```

Get in to your homestead directory with Git Bash/Terminal and start the VM:
```
cd ~/Homestead
vagrant up
```

We need to generate a new ssh key from git-bash(windows) or terminal(on mac)

```
ssh-keygen -t rsa
```


Your Local Development Server is up. Use putty/Terminal to ssh 127.0.0.1:2222 with login:`vagrant` password:`vagrant` and navigate to Code directory.

```
cd ~/Code
```

Now we need to clone nobitsy's master repository to our vm machine.

```
git clone https://github.com/thebaracca/nobitsy.git nobitsy
```

This should ask you your github username and password, because it is a private repository.

Copy `.env.example` to `.env` and make sure to read it first.

Update vendor list
composer update
```
```

Create database tables for the project in Homestead
```
php artisan migrate
```

Fill tables with data
```
php artisan db:seed
```

## Development
There is always at least two branches:

`Master` - the testing server runs on this branch.

`Stable` - the live server runs on this branch.

If a developer gets a new task, get a copy of master branch to local environment:

```
git pull origin master
```

Creates a new branch for the task and switch to it:
```
git branch <taskBranch>
git checkout <taskBranch>
```

Commit often, it only effects local environment.

## Testing


## Merging
When the task is finished and tested locally, switch to master branch:
```
git checkout master
```

This will switch all your file structure of task branch, with file structure of master branch.
Then, merge master branch with task branch and send new master to remote repository.
```
git merge <taskBranch>
git push origin master
```

## Before Finishing a Task

ALWAYS make sure to create migration files for each model!!

ALWAYS make sure to create seed files for each model!!

AlWAYS make sure to create/update postman api catalogue!!

ALWAYS make sure to complete testing!!

Always make sure to merge taskBranch with masterBranch!!


## Versioning

For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Şuayip Ekmekci** - *Initial work* - [suayipekmekci](https://github.com/suayipekmekci)
* **Arda Fidancı** - *Initial work* - [wwardaww](https://github.com/wwardaww)
* **Erdem Dur** - *Initial work* - [erdemdur](https://github.com/erdemdur)


See also the list of [contributors](https://github.com/thebaracca/nobitsy/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Requirements
