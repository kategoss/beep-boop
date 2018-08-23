# Beep Boop

#### Beep Boop / Code Review Week 3

#### By Kate Goss

## Description

This program will take in user inputted numbers and return one of 3 phrases dependent on the number.

## Specifications

Program replaces any number containing 0 with "Beep!"
-- Example input: 0
-- Example output: ["Beep!"]

Program replaces any number containing 1 with "Boop!"
-- Example input: 1
-- Example output: ["Boop!"]

Program replaces any number divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that!"
-- Example input: 30
-- Example output: ["I'm sorry Dave, I'm afraid I can't do that!"]

Program returns user inputted number with a range of numbers from 0 to the user inputted number
  -- Example input: 5
  -- Example output:  ["Beep!","Boop!", 2, "I'm sorry Dave. I'm afraid I can't do that", 4, 5]

Program rejects any letters, special characters or negative numbers
  -- Example input: #, dog, -100
  -- Example output: [Error: "Please insert a positive number"]

Program clears previous user input to allow for new number input.
  -- Example input: 3 enter, 2 enter
  -- Example output: ["Beep!","Boop!", 2, "I'm sorry Dave. I'm afraid I can't do that"] ["Beep!", "Boop!", 2]

## Setup/Installation Instructions

Make sure you have Git downloaded and setup on your local device.

Open terminal on your local device.

If you have not configured Git on your local device, in the terminal, you will need to set up a global configuration by entering the following:

```
_git config --global user.name "Your first and last name"_

git config --global user.email example@gmail.com_
```
If you're not already in the desktop directory in your terminal, then direct yourself to the desktop directory by entering the follow in your terminal:

`_cd Desktop_`

You can now begin by cloning the GitHub remote repository to your desktop. On the GitHub website with the remote GitHub repository, you will find a button colored green with the text "Clone or Download." Click the button and copy the GitHub repository URL.

Now in your terminal, enter the following:

`_git clone "the GitHub repository URL you copied"_` without the quotes

Now your desktop should have a local copy of the cloned repository.

To view the webpage, in your terminal, enter the following:

`_open index.html_`

The webpage should simply open in your default web browser.

## Technologies Used

HTML5

CSS3

Git

GitHub

README

### License

Copyright (c) 2018 **_Kate Goss_**
