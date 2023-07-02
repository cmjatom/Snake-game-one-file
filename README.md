# Starter React App

This is a starter React application built with Typescript. It features the classic game of Snake, playable in a web browser.

## Installation

To install the dependencies, run the following command:

```
npm install
```

## Running the App

To start the application, run the following command:

```
npm start
```

The application will start and can be accessed at `http://localhost:3000`.

## Game Play

Use the arrow keys to control the snake. The objective is to eat as much food as possible without colliding with the snake's own body.

## Project Structure

The project is structured as follows:

- `src/index.tsx`: Entry point of the application.
- `src/App.tsx`: Main App component.
- `src/components/SnakeGame.tsx`: Main game component.
- `src/components/Snake.tsx`: Snake component.
- `src/components/Food.tsx`: Food component.
- `src/components/Board.tsx`: Game board component.
- `src/utils/constants.ts`: Contains constant values used across the application.
- `src/utils/helpers.ts`: Contains helper functions used across the application.
- `src/styles/`: Contains all the styles for the components.
- `public/`: Contains static files like `index.html`, `favicon.ico`, and `manifest.json`.
- `package.json`: Contains project metadata and dependencies.
- `tsconfig.json`: Configures Typescript compiler options.
- `.gitignore`: Specifies files to ignore in git version control.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)