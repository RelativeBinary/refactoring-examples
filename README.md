# This is the README file for the refactoring-examples repo

to run tests run: `npm run test`

The format of this repo, i'll try my hardest to keep each refactor 'stage' in its own commit to create a nice visible transition through the code. 

Key takeaways from reading / coding along with Fowler's book on Refactoring.

# The first step in refactoring 
- make sure to have solid set of tests to make sure nothing is broken during refactoring.

# Decomposing the 'statement' Function
- try to id points that separate different parts of the overall behaviour. In this stage the switch statement sticking out will be removed using 'Extract Function'.
