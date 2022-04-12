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

# Removing the 'format' variable
- as suggested before temporary variables can be problematic. 
Theyre only useful within their own routine, and therefore they encourage long, 
complex routines. 
- format is the next one to remove.
- this will be done by replacing a the temp var with a function (perferably)

# Renaming the format function
- Breaking a function into smaller ones only adds value if the names are good.

# Removing total volume credits 
- technique: Split Loop - to separate the accumulation of volumeCredits 
- technique: Slide Statement - to move a declaration of a variable next to the use of it
- technique: Replace Temp with Query
- technique: Extract Function
- you not always need to make such small commits but when refactoring gets hard you first need 
to take smaller steps.
- you may be concerned about the amount of 'extra steps' this code is doing but its much easier to tune the performance of wall-factored code later.

# Do the same on totalAmount
- technique: Split Loop
- technique: Slide statement
- technique: Replace temp with query
- technique: Extract function

# Splitting phase of calcualtions and formatting
First phase:
- breaking down complicated chunks into small pieces 
- naming things well 

Next phase:
- splitting phase of calcualtions and formatting (presenataion)
    - starting with the rendering of the output statement
    - technique split phase with extract function 
    - create intermediate data structure

# Populating the intermediate data structure (depricating invoice)
- at this stage of splitting the calculations and the formatting we want to start populating our intermediate data structure with the data that our renderToPlainText function handles, because we just want the render function to only do formatting.

# Enrich performances
- technique: move function
- we want each play in performances to have the play.Name not just playID so we will need to 'enrich' performances

# Do the same to amountFor
- technique: move function

# Do the same to volumeCredits
- technique: move function

# Do the same to the total vairables 
- technique: move function