# Lockdown-Cocktail-V2
## Code Institute Milestone Project 2: Interactive Frontend Development

Lockdown Cocktail is a project that came to be during the UK national lockdown of 
November 2020. During this time, cocktail bars were closed and consumers were unable 
to head out for cocktail drinks. The premise of the site is for consumers to create a cocktail
at home. Since cocktails are generally more complicated to make, I thought it would be fun 
to give people the receipe, and a visual image of their cocktail, once they 
have made it to compare.

A link to the website can be found here[ADD LINK]

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
##### Random Cocktail Generator Feature
* Title 'Lockdown Cocktail' in stand out Google Font Elsie Swash Caps to create a visually appealing heading for the page and set the tone for the intended user.
* Paragraph to entice users to click on the 'Cocktail Generator' button below.
* Button labeled 'Cocktail Generator' links to random-cocktail.js to give it functionality. The button is styled in a complimentary colour to the section is it in for a pleasing UX. 
The button features a mouseover 'gloved hand icon' when you hover of the it to indicate to users to click there. When clicked on the button border turns pink then the users see displayed 
below a cocktail title, receipe and image.

##### Search Cocktail Feature
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

Used to collect the data for the cocktails that are shown in searchbar and 'Cocktail Generator'.

### Testing

#### Feature Testing

| Page       | Action Taken  | Expected Result  | Pass/Fail | 
| -----------|:-------------:| ----------------:| ---------:|
| index.html | Clicked on random cocktail button |   API call and display random cocktail with name, recipe and image     |    Passed    |
| contact.html     | Add initial emailJS script tag to check connected to personal email    |   Receive blank email template | Passed
|  |      |     |

#### Bug Testing

| Bugs Found | Action to fix | Link to fix commit| 
| -----------|:-------------:| -----------------:| 
|            |                 |                   | 
|      |   |    |
| zebra stripes | are neat      |    $1 |

### Deployment

### Credits

Although I didn't end up using the code, so it is not referenced within my random-cocktail.js, this link led me to a different solution.
https://www.codegrepper.com/code-examples/javascript/how+to+display+image+in+html+from+json+object 

Credit to CI (Code Institute) lessons on EmailJS integration for the contact.js function.

To Johann the CI tutor for helping me solve my javascript issue with the searchbar feature in search.js


