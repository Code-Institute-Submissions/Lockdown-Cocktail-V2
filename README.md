# Lockdown-Cocktail-V2
## Code Institute Milestone Project 2: Interactive Frontend Development

Lockdown Cocktail is a project that came to be during the UK national lockdown of 
November 2020. During this time, cocktail bars were closed and consumers were unable 
to head out for cocktail drinks. The premise of the site is for consumers to create a cocktail
at home. Since cocktails are generally more complicated to make, I thought it would be fun 
to give people the receipe, and a visual image of their cocktail, once they 
have made it, in order to compare.

A link to the website can be found [here] (https://telesia.github.io/Lockdown-Cocktail-V2/)
* Please note that I have maintained the labelling 'V2' on the second version of my Lockdown Cocktails project for submission for my MS2. I started an original project but after some consideration to my methodology began again. I do not want to create
any confusion within my github and current labelling systems so have kept them both, but didn't want to confuse matters when viewing the repository. 

### UX

#### Strategy
Lockdown Cocktail is a fun and informative website for cocktail drinkers who wish to
whip up a cocktail in the comfort of their own home. During Covid-19, local and national lockdowns 
have meant that cocktail bars have been closed to the public leaving cocktail drinkers at a loss
as to how to consume their beloved cocktails. The project is aimed at women between the ages of 18-40 
who would normally enjoy a social cocktail out at a cocktail bar with friends. These users will want clear 
information on how to whip up a cocktail but it is important that the site encapsulates the feminine fun 
of heading out for cocktails and interacting with a mixologist at the bar. This feel will be created by the 
projects choice of colour, copy, functionality and typography. These users will have a choice to search for 
their favourite cocktail receipe or generate a random cocktail to view at the click of a button. 

As a user I want to:

* be able to search for the name of my favourite cocktail by name or ingredient, view and then easily recreate it.
* be inspired by a random cocktail choice and view (a fun feature to recreate the feel of asking the mixologist to choose a drink for you and make it).
* be easily directed to any social media channels that can add additional viewing material to entice a user to connect with the Lockdown Cocktail community.
* be able to instinctively navigate the website to find the information required efficiently.
* enjoy the experience of entering a website that makes me feel good.
* view a variety of cocktails to inspire making one at home.
* be able to contact Lockdown Cocktail to request any cocktail receipes that may not be available within the search feature.


#### Scope
After analysis of the user stories, I have decided that I cannot implement all user's needs at this time so I have decided on the below features to be my initial minimum scope.

* Random Cocktail feature from API
* Search Cocktail feature from API
* Responsive design
* Social Media links
* Contact form 

#### Structure
I wanted the structure of the website to feature a one page scroller as this is a modern choice and would suit my target audience. I think a navbar will lend a good UX to point the user
towards the contact page, but other than that, all content will remain on one page. The page is designed for mobile first as I imagine users would access the site from their phones during lockdown. Additionally, this structure for the project would keep users on the site for longer as they scroll through/between the two main features.

#### Skeleton
I designed wireframes for mobile, tablet and desktop using Balsamiq.
They are viewable in PDF using the following link:

#### Surface
##### Colours
A light, pastel colour scheme has been chosen for the website. The colour choices are to entice the chosen user (females aged 18-40) to enjoy the site. The choices also reflect the bright colours of some cocktails.
Pink
White #fafafa
Light Grey 
#089299
#69863178

##### Typography

I have used two Google Fonts: Elsie Swash Caps and Antic Didone.

### Features

#### All Website Pages:
* A navbar features across all pages. It shows the Lockdown Cocktail brand logo on the left and on the right the 2 pages in order of user priority: home and contact. The navbar collapses into a hamburger button when viewed on smaller screen devices.
* A footer that includes social media links to Facebook, YouTube and Instagram and a navbar to redirect users so they do not need to scroll to the top.

#### Main Page:
Features listed in order as you scroll down the page.

#### Random Cocktail Generator Feature
* Title 'Lockdown Cocktail' in stand out Google Font Elsie Swash Caps to create a visually appealing heading for the page and set the tone for the intended user.
* Paragraph to entice users to click on the 'Cocktail Generator' button below.
* Button labeled 'Cocktail Generator' links to random-cocktail.js to give it functionality. The button is styled in a complimentary colour to the section is it in for a pleasing UX. 
The button features a mouseover 'gloved hand icon' when you hover of the it to indicate to users to click there. When clicked on the button border turns pink then the users see displayed 
below a cocktail title, receipe and image.

#### Search Cocktail Feature
* Heading 'Search for your favourite cocktail' present to indicate to users the purpose of the searchbar below
* Search bar with 'mojito' placeholder text to point users in the right direction in terms of what they can search for.
Search bar also features a cross for users to delete what they have written to start a new search with ease.
* Button labelled 'search'. The button features a mouseover 'gloved hand icon' when you hover of the it to indicate to users to click there. 
The button 

#### Contact Page:
* A Bootstrap contact form with space for name, email and message; with a button to send featured at the bottom of the form.
* This contact form is fully functional via the integration of the service EmeilJS.
* The name and email fields are specified as required.
* The colours have been amended to tie in with the colour scheme of the site.

#### Features Left to Implement:
* To include the ingredients list for each cocktail within the cards that pop up when a user either clicks the 'Cocktail Generator' or searches for a cocktail.
* Another section on the main page including a set of static cards or perhaps a carousel of cards including cocktail names, images, recipes and ingredients for users to be inspired.
* To be able to have multiple cocktails displayed from search bar. For example, if they input rum, it would display a set of rum based cocktails available from the database.

### Technologies Used
* HTML5

The project uses HTML5 as the main language of the website.

* Bootstrap v4.5

The project uses Bootstrap elements to help with form and design.

* Javascript

Used to implement the functionality of integrating the CocktailDB API into the main page.
Used to implement the functionality of the contact form.

* GitHub

The project uses GitHub to store its code.

* Visual Studio Code

The project uses VS Code as the IDE

* Git

Used within Gitpod as the version control system.

* Google Developer Tools
Used within Google Chrome to inspect pages to help solve any bugs and view responsive design features.

* Balsamiq

The project uses Balsamiq to create wireframes.

* EmailJS

Used to integrate the functionality of the contact form to connect to an appropriate email address.

* CocktailDB API

https://www.thecocktaildb.com/api.php

Used to collect the data for the cocktails that are shown in searchbar and 'Cocktail Generator'.

### Testing

Please refer to seperate document found [here] (testing/TESTING.md)

#### W3C Validator Testing
I used the W3C validators for HTML and CSS to check my code. I used the BeautifyTools to check my Javascript http://beautifytools.com/javascript-validator.php On the final test there were no errors found. There were a few errors throughout my work on the project that I corrected as I went along.

#### Feature Testing

| Page       | Action Taken  | Expected Result  | Pass/Fail | 
| -----------|:-------------:| ----------------:| ---------:|
| index.html | Clicked on random cocktail button |   API call and display random cocktail with name, recipe and image     |    Passed    |
| contact.html | Add initial emailJS script tag to check connected to personal email    |   Receive blank email template | Passed
| index.html | Click on logo in top left corner  |   Keeps you on homepage  | Passed |
| index.html (991px and under) | Click on hamburger button | Opens up the navbar items 'home' and 'contact' | Passed
| index.html (991px and under) | Click on home text within hamburger button | Keeps you on homepage | Passed
| index.html (991px and under) | Click on contact text within hamburger button | Takes you to contact page | Passed 
| index.html (991px and under) | Click on hamburger button with navbar items open | Closes navbar | Passed
| index.html (991px and above) | Click on 'Home' in navbar | Remain on homepage | Passed
| index.html (991px and above) | Click on 'Contact' in navbar | Redirected to Contact page | Passed
| index.html | Click on 'Cocktail Generator' button | A random cocktail from API will display below the button | Passed 
| index.html | Click on 'Cocktail Generator' button again | A new random cocktai displays | Passed
| index.html | Click on search input bar | Text able to be inputted and deleted, shown by flashing text bar and cross icon | Passed
| index.html | Text inputted into search bar | See displayed text | Passed
| index.html | Nonsense text put in search bar | Alert displayed on screen that data wasn't fetched | Passed
| index.thml | Test cocktail names tried (cosmo, mai tai, mojito) | See a cocktail with that name displayed below the searchbar | Passed
| index.html | Navbar in footer click on 'home' | Remain on home page | Passed
| index.html | Navbar in footer click on 'contact' | Link to contact page works and redirected | Passed
| index.html | Click on facebook icon | A new webpage tab opens to the Facebook homepage | Passed
| index.html | Click on Youtube icon | A new webpage tab opens to the Youtube homepage | Passed
| index.html | Click on Youtube icon | A new webpage tab opens to the instagram homepage | Passed
| contact.html | Click on logo in top left corner  |   Keeps you on homepage  | Passed |
| contact.html(991px and under) | Click on hamburger button | Opens up the navbar items 'home' and 'contact' | Passed
| contact.html (991px and under) | Click on home text within hamburger button | Keeps you on homepage | Passed
| contact.html (991px and under) | Click on contact text within hamburger button | Takes you to contact page | Passed 
| contact.html (991px and under) | Click on hamburger button with navbar items open | Closes navbar | Passed
| contact.html (991px and above) | Click on 'Home' in navbar | Redirected to home page | Passed
| contact.html (991px and above) | Click on 'Contact' in navbar | Remain on contact page | Passed
| contact.html | Able to click and enter text into 'Name' placeholder input field | Text inputted | Passed
| contact.html | Able to click and enter text into 'Email' placeholder input field | Text inputted | Passed
| contact.html | Able to click and enter text into 'Message' placeholder input field | Text inputted | Passed
| contact.html | Hover mouse over 'Send Message' button | Mouseover gloved hand appears | Passed
| contact.html | Click 'Send Message' button | Email to be sent to my personal email for project purposes with name, email and message | 
| contact.html | Navbar in footer click on 'home' | Redirected to home page | Passed
| contact.html | Navbar in footer click on 'contact' | Remain on contact page | Passed
| contact.html | Click on facebook icon | A new webpage tab opens to the Facebook homepage | Passed
| contact.html | Click on Youtube icon | A new webpage tab opens to the Youtube homepage | Passed
| contact.html | Click on Youtube icon | A new webpage tab opens to the instagram homepage | Passed


#### Bug Testing

| Bugs Found | Action to fix | Link to fix commit| 
| -----------|:-------------:| -----------------:| 
|            |                 |                   | 
|      |   |    |
| |      |    |

### Deployment

The repository for the project is held on GitHub and was created by Sarah Telesia. The deployment involved using the settings within the Lockdown Cocktail V2 repository to enable the website to be deployed as a GitHub page, which you can access at: https://telesia.github.io/Lockdown-Cocktail-V2/ 

Steps on how to clone the Lockdown-Cocktail-V2 repository from GitHub

I have learned and taken the information for the below clone steps from https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

There are two options:

Clone using GitHub Desktop

Open GitHub website and navigate to Quartet-Militaire repository on Sarah Telesia's GitHub at https://github.com/Telesia/Lockdown-Cocktail-V2
Above the list of files, click on Code button
Scroll down to read 'Open with GitHub Desktop' and then click
This will open GitHub Desktop (If this is your first time using GitHub Desktop follow the software download procedure)
A pop up will ask you where you wish to clone the repository to on your local computer and then press clone
You can now access the repository files in your chosen IDE
Clone using Git

Open GitHub website and navigate to Quartet-Militaire repository on Sarah Telesia's GitHub at https://github.com/Telesia/Lockdown-Cocktail-V2
Above the list of files, click on Code button
Click on the web URL viewable and copy
Open the terminal
Change the current working directory to the location where you want the cloned directory
Type git clone, and then paste the URL you copied earlier
Press Enter to create your local clone.6.
You can now access the repository files in your chosen IDE

### Credits

Although I didn't end up using the code, so it is not referenced within my random-cocktail.js, this link led me to a different solution.
https://www.codegrepper.com/code-examples/javascript/how+to+display+image+in+html+from+json+object 

Credit to CI (Code Institute) lessons on EmailJS integration for the contact.js function.

To Johann the CI tutor for helping me solve my javascript issue with the searchbar feature in search.js


