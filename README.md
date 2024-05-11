**Spoty for nFactorial**
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This is the copy of spotify, written on React.

To check the project:

Download the repo as a zip or by terminal

```git clone https://github.com/xotoxex/Spoty.git```

Then install all dependencies

```npm install```

Finally, run the project

```npm start```
and open http://localhost:3000

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Details 

As, I am slightly new to the React, some youtube tutorials were used.

**Menu**

The Menu has Navbar, which has buttons. They determine whether the searchbar or home page are shown. Even if they are told to be pages, navbar buttons do not redirect to other pages, as they just switch components.
The same thing is for the Login and Sign In pages. They are all located in the localhost:3000. The buttons change the state (useState) of the main page, so other components are rendered. As for the detailed view of musics, they all have their own pages (localhost:300/musics/:id). useNavigate was used in order to open these pages. 

**PostPage**

Detailed view page shows the elements of objects (local API) which id  matches with the id of the page. Also, the cover for the musics is demonstrated. The review and comments abuse useContext to add objects to the array which is located in App.js . Then, they use filter, to show only content which post_id corresponds to the id of the PostPage.

To mention, in order to catch the id of the detailed view page useParams() was used.

However, if the user is not registered, he will not be able to see the detailed page, or if he entered the page via routing, he will not able to comment and rate. the state of the Menu will be cahnged and user will see login page.

**Login and Signin**

Basic form abuse. the entered value is given to the Setuser and Setpassw with useContext() and useState(), so they can be used in any component.

**Future plans**

I believe, all requirements are done by me, so i am planning to add playlist during the next week (13.05.24-18.05.24)

Of course, I hope to pass the 2 stage of the nFactorial as well!!




