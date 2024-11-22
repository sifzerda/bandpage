# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



TECH:

+ react-router
+ react-youtube
+ react-draggable
+ react-player


NOTES:

Features: 

(1) User Authentication and Accounts
+ Sign Up, Login, Logout

(2) News and Activity
+ Submit Notes and Updates
+ Data sent to MongoDB, accessed with graphql
+ Create/Read/Update/Delete Functions

(3) Calender
+ Users can indicate availability by switching color of date to red/green/white
+ Page can be saved to local storage (user) via save
+ Page can be sent to DB (remote sitewide) for other users, via submit 

(4) Music Player:
+ play, pause, next/prev song
+ imported inside App.jsx outside react-router outlet so the player persists after nav tab switch, and playback continues.

(5) Song Suggestions:
+ Embedded YouTube search using YouTube Data API v3
+ Search for youtube videos/music, play in embedded player

TO DO:
[ ] Main Page Updates (Create, Read, Update, Delete)
[ ] Save song video id from search page, send to global music player
[ ] Submit calendar availability to DB and retrieve so all users can see
[ ] Add functionality to music player: run through playlist, enhanced GUI
[ ] Fix up global GUI, styling
[ ] Post Song suggestions from YT search to song suggestion page via retrieving video id
[ ]
[ ]
[ ]