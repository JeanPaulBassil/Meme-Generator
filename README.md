# Meme Generator

This project is a React-based web application that allows users to create custom memes. The app fetches meme templates from an API and enables users to add their own text to the templates.

## Features

- Fetch and display a random meme image from an API.
- Input fields for users to enter top and bottom text for the meme.
- Display the resulting meme with the user's text overlaid on the image.

## Components Structure

- `Header`: Contains the application title and a troll face image.
- `Body`: Renders the main content area where input fields and meme display are located.
- `Input`: Manages the state for the current meme, including the text and image URL, and handles the change events for the input fields.
- `Button`: Provides an interactive button that fetches a new meme image when clicked.
- `Title`: Displays the application title alongside a troll face image.

## File Structure

```
public
│
src
├── Components
│   ├── Body
│   │   ├── Body.css
│   │   └── Body.js
│   ├── Button
│   │   ├── Button.css
│   │   └── Button.js
│   ├── Header
│   │   ├── Header.css
│   │   └── Header.js
│   ├── Input
│   │   ├── Input.css
│   │   └── Input.js
│   └── Title
│       ├── Title.css
│       └── Title.js
├── Media
│   ├── download.png
│   └── Troll Face.png
├── MemeGen.css
├── MemeGen.js
├── memesData.js
├── index.js
├── .gitignore
├── package-lock.json
└── package.json
```

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage

To start the application, run `npm start`. This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies

- React
- ReactDOM
- React Scripts
- Web Vitals
- Testing libraries (for development)

## Scripts

- `start`: Runs the app in development mode.
- `build`: Builds the app for production to the `build` folder.
- `test`: Runs the test watcher in an interactive mode.
- `eject`: Removes the single build dependency from your project.

For more information on how to perform common tasks, you can find the Create React App documentation [here](https://facebook.github.io/create-react-app/docs/getting-started).

Please note that you will need to have Node.js installed on your machine to use npm commands.