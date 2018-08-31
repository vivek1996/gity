# Gitty
<p align="center">
  <a href="https://github.com/vivek1996/gity/issues"><img src="https://img.shields.io/github/issues/vivek1996/gity.svg?style=flat-square" alt="GitHub issues"></a>
  <a href="https://github.com/vivek1996/gity/network"><img src="https://img.shields.io/github/forks/vivek1996/gity.svg?style=flat-square" alt="GitHub forks"></a>
    <a href="https://github.com/vivek1996/gity/stargazers"><img src="https://img.shields.io/github/stars/vivek1996/gity.svg?style=flat-square" alt="GitHub stars"></a>
  <a href="https://david-dm.org/vivek1996/gity"><img src="https://david-dm.org/vivek1996/gity.svg" alt="DEPENDENCIES"></a>
  <a href="https://snyk.io/test/github/vivek1996/gity"><img src="https://snyk.io/test/github/vivek1996/gity/badge.svg?style=flat-square" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/vivek1996/gity" style="max-width:100%;"></a>
  <a href="https://github.com/vivek1996/gity"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="forthebadge"></a>
</p>
<br>
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.
<br>

## Problem Statement

Project Description -
This project should be a ready to deploy Github client. It must have all the
features mentioned below and it must be deployed on a server before
submission. You are allowed to use any kind of modules, libraries and tool you
want.
### About the API -
GitHub api is an open source API which gives you access to all Github Data-
Step 1 - Go to https://developer.github.com/v3/ and read the overview.
Step 2 - For authentication, use Basic Authentication method . You may create a dummy
github account in case you don’t want to share your actual github credentials.
Step 3 - For performing authorization, use the Authorization API .
Step 4 - You may use Github Libraries also for ease of managing the request,
authentication and authorization etc.
### Features of the Application -
1) Login View - User should be able to login to the system through his github
account. Upon login, user should land on his User View .
2) User View - Name, company, bio, followers, stars, repo url, public repos and
gists count. (You may display other suitable information as well)
a) Search box to search for usernames. Upon searching a username,
search view should open
b) List of public repos of user.
c) List of public gists of user.
d) List of followers.
e) Upon clicking on any gist, user should land on his gist view.
f) Upon clicking on any repo, user should land on repo's github page.
g) Upon clicking, on any of the follower, its user dashboard should open.
3) Search View - Upon clicking on search button, User View, of that username,
should open.
4) Error Views - You have to handle each error response with a different page.


# Project Description :
The Application has 3 views. They are **Login View, User view, Search view.**
The login view has the login button to login to the application via github. **Auth0** library is used for the authentication. After successful login the application routes to the user view.
	 The User View contains the information about the logined user such as Name, company, bio, followers, stars, repo url, public repos and gists count. 
	 The User's Repos, Gists, Followers and Following are also displayed. Clicking on any of the repo or gists takes to the respective github page. Clicking on any followers or following takes to respective user's details.
	The search component is embedded in the nav bar and other views. Upon input to the search box the suggestions are given. Clicking any of those suggestions or search button the user detail is displayed in the search view.
	The search view has the minimal details about the user such as Name, company, bio, followers, stars, repo url, public repos and gists count.
## Todo ✍

 - [ ] Add service worker
 - [ ] Add View to display User Events
 
 ## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

