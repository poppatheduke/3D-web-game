Marble Race Game
Welcome to the Marble Race Game repository! This project is an interactive 3D marble race game built using Three.js and React Three Fiber. Navigate through various obstacles and reach the fini line in this dynamic and visually engaging game.

Features
Dynamic Obstacles: Includes a variety of moving obstacles such as spinners, limbo bars, and swinging axes.
Customizable Levels: Easily configure the number of obstacles and their types to create different levels.
Interactive Graphics: Utilizes Three.js for rendering 3D graphics and React Three Fiber for integrating 3D objects in React.
Physics Simulation: Powered by @react-three/rapier for realistic physics interactions.
Responsive Design: Ensures a smooth experience across different devices and screen sizes.
Installation
Prerequisites
Node.js (>=14.0.0)
npm (>=6.0.0)
Steps
Clone the repository:
<code>
git clone https://github.com/poppatheduke/3D-web-game.git
Navigate to the project directory:
</code>
cd marble-race-game
Install the dependencies:

npm install
Usage
Start the development server:

npm start
Open your browser and navigate to http://localhost:3000 to see the game in action.

Documentation
Project Structure
java

marble-race-game/
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
Components
BlockStart: Displays the starting block with a floating "Marble Race" text.
BlockEnd: Displays the finiing block with a "FINI" text and a hamburger model.
BlockSpinner: A spinning obstacle that rotates around the Y-axis.
BlockLimbo: An obstacle that moves up and down along the Y-axis.
BlockAxe: A swinging axe obstacle that moves back and forth along the X-axis.
Level: Combines all the blocks to create a complete level with configurable length and obstacle types.
Customization
You can customize the game by modifying the Level component's props:

jsx

export function Level({
count = 5, // Number of obstacles
types = [BlockSpinner, BlockAxe, BlockLimbo], // Types of obstacles
seed = 0, // Seed for randomization
}) {
// Level logic
}
Adding New Obstacles
To add a new obstacle:

Create a new component in the components directory.
Implement the obstacle's behavior using Three.js and React Three Fiber.
Add the new component to the types array in the Level component.
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
