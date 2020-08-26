

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Instructions for the running the SPA
1) Make sure you have done npm install and run the json server. Run the command (json-server --watch server/db.json)
2) In a new terminal, run ng serve -o
3) Go to localhost:4200
4) Here, the trending gifs are visible. Without logging in, if you go to view favourites or try adding favourite, you will be redirected to the login page.
5) There are 2 users available for login. (currently, I have made provision for 2 users only)
user-1 
username - admin
password - pass
user-2
username - manager
password - pass
6) After loggin in, you will be redirected to localhost:4200/favourites. Currently it won't have any favourite gifs. You can go to trending and add favourites or search and add your favourite.
7) Press the add to Favourite button just once. it will be added to the collection.
8) Go to view favourites section, to view your favourite gifs. You can delete the gifs from here.
9) You can log out from your account. This will delete the token and username from local storage. You can still search and view trending. however, when you login back to the particular account, you can still see the gifs.


# SpaGiphy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

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
