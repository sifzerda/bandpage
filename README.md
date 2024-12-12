# BANDPAGE 🎶

## Table of Contents

- [BANDPAGE 🎶](#bandpage-)
  - [Table of Contents](#table-of-contents)
  - [(1) Description](#1-description)
  - [(2) Badges](#2-badges)
  - [(3) Visuals](#3-visuals)
  - [(4) Installation](#4-installation)
  - [(5) Usage](#5-usage)
  - [(6) Dev Stuff: Building:](#6-dev-stuff-building)
  - [(8) Bugs and Further Development:](#8-bugs-and-further-development)
  - [(9) To do:](#9-to-do)
  - [(10) Support](#10-support)
  - [(11) Contributing](#11-contributing)
  - [(12) Authors and acknowledgment](#12-authors-and-acknowledgment)
  - [(13) License](#13-license)
  - [(14) Project status](#14-project-status)

## (1) Description

This site was designed for my (cover) band for use of a number of functions:

(a) CALENDAR PAGE: to arrange a jamming date amongst band members, visually depicting who is available on which days, to make it easier to arrange an optimal date. The calendar can be used for any group activity, not just jamming.

(b) SEARCH PAGE: Implements a youtube audio search for music. You can search for audio, which can be:
(i) added to the suggestions page; or
(ii) added to the global music player playlist

(c) SUGGESTIONS PAGE: Band members can post music suggestions from the YT search page for future jams on this page.

(c) MUSIC PLAYER: Users can send audio from the YT search to the global music player, which will save the audio via YT video id. Music can be played through the player, and will persist even after the user leaves the SEARCH page and visits a different tab.

This was built with React, Express, GraphQl, MongoDB, Node, Javascript, and CSS. 

## (2) Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![FontAwesome](https://img.shields.io/badge/Font%20Awesome-538DD7.svg?style=for-the-badge&logo=Font-Awesome&logoColor=white) 
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## (3) Visuals

[Visit App deployed to Heroku](.../)

![bandpage-screenshot](...)

## (4) Installation

```bash
git clone https://github.com/sifzerda/bandpage.git
cd bandpage
npm install
npm run start
```

## (5) Usage

Technologies:

+ express
+ graphql
+ mongodb
+ axios
~~+ socket.io~~ : scrapped in favour of mongodb and graphql
+ react-router
+ react-youtube
+ react-draggable
+ react-player

## (6) Dev Stuff: Building:

The main functions of code:

Features: 

(1) User Authentication and Accounts
+ Sign Up, Login, Logout

(2) Current Activity Landing Page
+ Currently Unused
+ Requires Future Development
+ Intended to allow users to post group updates  
+ Anticipated Create/Read/Update/Delete Functions

(3) Calender
+ Users can indicate availability by switching color of date to red/green/white
+ User changes are updated and saved instantly into MongoDB and retrieved via GraphQL

(4) Music Player:
+ play, pause, next/prev song
+ imported inside App.jsx outside react-router outlet so the player persists after nav tab switch, and playback continues.
+ User can play any song saved from youtube search
+ Music Player is draggable
+ Progress bar is draggable to skip forward or back in song
+ Saved songs kept in playlist 

(5) Search:
+ Embedded YouTube search using YouTube Data API v3
+ Search for youtube videos/music, play in embedded player
+ User can save video results to music player. HandleSaveVideo prop passes from Suggestions page to music player at the global level (in App.jsx, outside react-router-outlet) allowing song to play even after page switched via nav tabs
+ Search has a keydown function to allow search to run by pressing enter

(5) Suggestions:
+ Displays search results posted from the Search page
+ Read/Delete functions (only the user who posted the result can delete it)
+ Posted results are retrieved from User model, which stores song posts

## (8) Bugs and Further Development: 

Optimization:
- use react-virtualized to only render visible stuff
- use a bundler like Webpack or Parcel to optimize build output: Enable code splitting, tree-shaking, and minification to reduce bundle size and improve load times.
- Consider memoizing components to prevent unnecessary re-renders, especially if their props rarely change.

## (9) To do: 

[ ] Main Page Updates (Create, Read, Update, Delete)
[x] Save song video id from search page, send to global music player
[x] Submit calendar availability to DB and retrieve so all users can see
[x] Add functionality to music player: run through playlist, enhanced GUI
[x] Fix up global GUI, styling
[x] Post Song suggestions from YT search to song suggestion page via retrieving video id
[ ] Enhance song suggestion page GUI to look better
[ ] Save user playlists to MongDB, retrievable by graphQL
[ ] Add Profile page functions, including viewing:
    [ ] User's song posts
    [ ] User's created playlists

## (10) Support

For support, users can contact tydamon@hotmail.com.

## (11) Contributing

Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/NewFeature)
3. Commit your Changes (git commit -m 'Add some NewFeature')
4. Push to the Branch (git push origin feature/NewFeature)
5. Open a Pull Request

## (12) Authors and acknowledgment

The author acknowledges and credits those who have contributed to this project including:

- ChatGPT

## (13) License

Distributed under the MIT License. See LICENSE.txt for more information.

## (14) Project status

This project is completed. 
