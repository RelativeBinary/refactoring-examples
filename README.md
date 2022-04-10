# This is the README file for the refactoring-examples repo

to run tests run: `npm run test`

The format of this repo, i'll try my hardest to keep each refactor 'stage' in its own commit to create a nice visible transition through the code. 

Key takeaways from reading / coding along with Fowler's book on Refactoring.

# The first step in refactoring 
- make sure to have solid set of tests to make sure nothing is broken during refactoring.

# Decomposing the 'statement' Function
- try to id points that separate different parts of the overall behaviour. In this stage the switch statement sticking out will be removed using 'Extract Function'.
- "Any fool can write code that a computer can understand. Good programmers write code that numans can understand.

# Removing the 'play' variable 
- play's data is already provided in performance and so we can remove play from amountFor's parameter list using the technique 'Replace Temp with Query'
    - extract play variable from amountFor
    - replace with a query getting the data instead

# Extracting Volume Credits 
- like the play variable were going to try to extract the volumeCredits variable. 
    - to further reduce locally scoped variables