Lunch Academy is a Rails-React website for reviewing sandwiches. Denise Walter, Zach Hirschritt, Dan Glick, and Emily Herlich built it in Fall 2017 as a group project for Launch Academy, a coding bootcamp.

* Ruby version
  ruby 2.3.3

* Configuration
  dependencies:
      @rails/webpacker: ^3.0.2
      babel-preset-react: ^6.24.1
      coffeescript: 1.12.7
      prop-types: ^15.6.0
      react: ^16.0.0
      react-dom: ^16.0.0
      react-router-dom: ^4.2.2
      sass-loader: ^6.0.6
  devDependencies: 
      @commercetools/jest-enzyme-matchers: ^1.1.2
      babel-jest: ^21.2.0
      babel-loader: ^7.1.2
      enzyme: ^3.1.0
      enzyme-adapter-react-16: ^1.0.2
      jest: ^21.2.1
      jest-enzyme: ^4.0.1
      react-scripts: ^1.0.14
      react-test-renderer: ^16.0.0
      sinon: ^4.0.1
      webpack-dev-server: ^2.9.2
    jest: 
      verbose: true
      transform: 
        ^.+\\.js$: babel-jest
      globals: 
        NODE_ENV: test
      moduleFileExtensions: 
        js
        jsx
      moduleDirectories: 
        node_modules
        app/frontend
      testPathIgnorePatterns: 
        <rootDir>/config/
      setupTestFrameworkScriptFile: <rootDir>/spec/test-setup.js
  
* Database creation
  Heroku Postgres

* Database initialization
  Command line:
    rake db:create
    rake db:migrate
    rake db:seed

* How to run the test suite
  Command line:
    rake
    jest

* Deployment instructions
  Command line:
    git clone [repo]
    bundle install, yarn install
    foreman start

[ ![Codeship Status for emily-helrich/lunch-academy](https://app.codeship.com/projects/9459b320-94c4-0135-ea79-5e19c06be32c/status?branch=master)](https://app.codeship.com/projects/251042)

[![Test Coverage](https://api.codeclimate.com/v1/badges/67203cad463bd5806755/test_coverage)](https://codeclimate.com/github/emily-helrich/lunch-academy/test_coverage)

[![Coverage Status](https://coveralls.io/repos/github/emily-helrich/lunch-academy/badge.svg?branch=master)](https://coveralls.io/github/emily-helrich/lunch-academy?branch=master)
