# Password Generator

## Description
This is a simple web application built with Express.js and Handlebars that generates random passwords based on user preferences.

## Features
- Allows users to specify the length of the password (between 4 to 16 characters).
- Provides options to include lowercase and uppercase alphabets, numbers, and symbols in the generated password.
- Allows users to exclude specific characters from the password.
- Generates a random password based on the user's preferences.

## Installation
1. Clone the repository:
```
git clone https://github.com/DonaldWongSuiSang/Password-Generator.git
```

2. Navigate to the project directory:
```
cd password_generator
```

3. Install dependencies:
```
npm install express express-handlebars nodemon
```

## Usage
1. Start the server:
```
npm run dev
```
2. Open a web browser and go to `http://localhost:3000`.
3. Specify your preferences for the password length and character sets.
4. Click on the "Generate Password" button to generate a random password.

## Dependencies
- [Express.js](https://expressjs.com/): Web framework for Node.js.
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars): View engine for Express.js.
- [Nodemon](https://www.npmjs.com/package/nodemon): Utility that monitors for changes in your source code and automatically restarts the server.

## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author
- Donald Wong
