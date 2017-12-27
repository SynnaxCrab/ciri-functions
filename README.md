# Ciri Functions #

[![Build Status](https://travis-ci.org/winfield/ciri-functions.svg?branch=master)](https://travis-ci.org/winfield/ciri-functions)
[![Greenkeeper badge](https://badges.greenkeeper.io/winfield/ciri-functions.svg)](https://greenkeeper.io/)

Ciri Lambda Functions collection. Currently, there is only one function to perform db migration

## Deployment & Usage ##

Currently there is no way to test functions locally using apex/up. To test, you have to deploy functions to lambda.

To deploy functions, just set up travis CI, and all is done!

To run migrations locally, just cd into the db-migrations function fold, and run yarn commands in package.json