# Tpredic Gallery Assignment


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.	welecome to our front end test for new applicatns.


## Development server


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.	# How to get started?


## Code scaffolding	1. Clone this repository to your computer.
2. Run 'npm i' -> 'ng serve'.
3. You project url is 'http://localhost:4200/'.
4. Follow the test instructions.
4. Make sure you apen your own repository, here in github.
5. Make sure to commit at each step.


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Build


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


# What do you need to do?

Our project contains an image gallery that is loaded from 'Flickr', using a 'Get request'.
there are 100 images that are being loaded to the gallery.
The gallery images are related to a 'Tag' that can be insert in the header search bar.

# The following changes need to be implemented to the gallery:
  1. Make images popup on click.
  2. Turn the Gallery into 'infinite-scrolling' gallery (for example: facebook feed).
  3. Add a uniq feature. Here is where you can go wild and show us what you can do.
  4. BONUS: Implement the infinite scrolling without using third party packages


# Additional Info

* You can use any third party packages.
* There are no time limit (but please let us know your how long you assume it may take)
* You are incuraged to get help from the web but make sure you understand each element that you are using.
* Please send us a link to your repository onece the assignment is completed.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


# What was done

* Added infinite scroll component (implementation is based on [Intersection Observer API
](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API))
* Added image popup (using ngx-lightbox component)
* Extended gallery service
* Fixed unit test
* Fixed end-to-end test
* Fixed bugs