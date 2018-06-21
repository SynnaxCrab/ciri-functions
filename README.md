# Ciri Functions

[![Build Status](https://travis-ci.org/winfield/ciri-functions.svg?branch=master)](https://travis-ci.org/winfield/ciri-functions)
[![Greenkeeper badge](https://badges.greenkeeper.io/winfield/ciri-functions.svg)](https://greenkeeper.io/)

Ciri Lambda Functions collection. Currently, there is only one function to perform db migration

## Deployment & Usage

### Migrate locally

Run commands defined in package.json to run migrations locally

### Migrate on AWS

run command `echo -n '{ "action": "up", "migration": {} }' | apex invoke db-migrations --profile YOU_AWS_PROLIE --logs` to excute my migrations on AWS.
