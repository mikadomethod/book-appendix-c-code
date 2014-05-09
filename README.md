Appendix C example in JavaScript 
===================
The code from appendix C in [The Mikado Method book](http://www.manning.com/ellnestam/).

![Mikado Method book cover](http://www.manning.com/ellnestam/ellnestam_cover150.jpg)

This example shows how to apply the Mikado Method where you don't have a compiler to assist you.

The branches in the repo reflects the bigger steps in the refactoring.

Retrieve all branches
````
for remote in `git branch -r`; do git branch --track ${remote#origin/} $remote; done
git pull --all
````

# Loan Server 

## Getting Started
Start the server with: 

$ node server/lib/loan-server.js

## The Example
The code is located in server/lib

=======
$ node server/lib/loan-server.js

## The Example
The code is located in server/lib

Tests are located in server/test

## License
Copyright (c) 2013 Daniel Brolund & Ola Ellnestam  
Licensed under the MIT license.
