<h1>Marble Race Game</h1>

![3d game](https://github.com/user-attachments/assets/d43ea40d-2a32-41e9-98a7-94582f921f8b)

Welcome to the Marble Race Game repository! This project is an interactive 3D marble race game built using Three.js and React Three Fiber. Navigate through various obstacles and reach the fini line in this dynamic and visually engaging game.

## Features
<h4>Dynamic Obstacles:</h4> Includes a variety of moving obstacles such as spinners, limbo bars, and swinging axes.

<h4>Customizable Levels:</h4> Easily configure the number of obstacles and their types to create different levels.

<h4>Interactive Graphics:</h4> Utilizes Three.js for rendering 3D graphics and React Three Fiber for integrating 3D objects in React.

<h4>Physics Simulation:</h4> Powered by @react-three/rapier for realistic physics interactions.

<h4>Responsive Design:</h4> Ensures a smooth experience across different devices and screen sizes.

## Installation

<h3>Prerequisites</h3>

Node.js (>=14.0.0)

npm (>=6.0.0)

## Steps
### Clone the repository:

```bash
git clone https://github.com/poppatheduke/3D-web-game.git
Navigate to the project directory:
cd marble-race-game
```

### Install the dependencies:

<code>npm install</code>

## Usage
### Start the development server:

<code>npm start</code>

Open your browser and navigate to <code>http://localhost:3000</code> to see the game in action.

Documentation
Project Structure
java

marble-race-game/
```php
├── public/
│ ├── hamburger.glb
│ ├── bebas-neue-v9-latin-regular.woff
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Level.tsx
│ │ ├── BlockStart.tsx
│ │ ├── BlockEnd.tsx
│ │ ├── BlockSpinner.tsx
│ │ ├── BlockLimbo.tsx
│ │ └── BlockAxe.tsx
│ ├── App.tsx
│ ├── index.tsx
│ └── styles.css
├── package.json
└── README.md
```
## Components

<h5>BlockStart:</h4> Displays the starting block with a floating "Marble Race" text.

<h4>BlockEnd:</h4> Displays the finiing block with a "FINI" text and a hamburger model.

<h4>BlockSpinner:</h4> A spinning obstacle that rotates around the Y-axis

<h4>BlockLimbo:</h4> An obstacle that moves up and down along the Y-axis.

<h4>BlockAxe:</h4> A swinging axe obstacle that moves back and forth along the X-axis.

<h4>Level:</h4> Combines all the blocks to create a complete level with configurable length and obstacle types.


## Customization
You can customize the game by modifying the Level component's props:

```js
export function Level({
count = 5, // Number of obstacles
types = [BlockSpinner, BlockAxe, BlockLimbo], // Types of obstacles
seed = 0, // Seed for randomization
}) {
// Level logic
}
```

## Adding New Obstacles
### To add a new obstacle:

Create a new component in the components directory.

Implement the obstacle's behavior using Three.js and React Three Fiber.

Add the new component to the types array in the Level component.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
