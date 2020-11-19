#  Oct 2020 Cohort Final Project

# Final Project MVP Iteration #1

## Framing Session

- Who: Vegans in the Bay Area
- What: A website that connects vegans to local vegan food
- When: During trip planning or when searching for a restaurant
- Where: Bay Area, California
- Why: To help vegans find restaurants they can eat at

## Features List

- Form - to add bios for new restaurants
- Search - to find specific types of food
- Filter - by location or type of food

## MVP

Creating a web page that connects vegans to vegan food in the Bay Area

- Form to create a restaurant bio - users can add local restaurants that offer vegan food
    - [T: 1 hour, S: N, P: H]
- Search bar - to look up a specific restaurant 
    - [T: 2 hours, S: N, P: M]
- Filter - to narrow down options by location or food type
    - [T: 2 hours, S: N, P: M]

## Post MVP

- Allow users to create profiles
    - [T: 30 hours, S: X, P: L]
- Allow users to write reviews
    - [T: 40 hours, S: X, P: L]
- Create channel to share local vegan events
    - [T: 80 hours, S: X, P: L]
- Add grocery stores, co-ops, farms, and communities into the mix
    - [T: 3 hours, S: N, P: L]


# Pseudocode

- Form to create a restaurant bio - users can add local restaurants that offer vegan food
    
    function addNew(){
        // on click - create new restaurant bio
        // create new restaurant bio by grabbing all of the text in the input fields in the form
        // variables - restName, restAddy, restUrl, restAbout
        // on click - clear input fields  
    }

- Search bar - to look up a specific restaurant 

    function search(){
        // on click - find restaurant bios with key word in input field
        // display restaurant bio at top of page
    }

- Filter - to narrow down options by location or food type

    function filter(){
        // on click - drop down options for location or type of food
        // second on click - reorder restaurants based on location or type of food
    }
