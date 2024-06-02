# Restify Project

## Description

This project allows users to make HTTP requests to an API and visualize the responses. Users can select the HTTP method (GET, POST, PUT, DELETE), enter the API URL, and provide a request body in JSON format or an authentication token.

The web utilizes local state to manage various aspects of the request, including the method, URL, body, token, response, and loading and error states. When users click the "RUN" button, the web sends an HTTP request to the API using the selected method and body. The response is then displayed in the "Response" section, along with any errors that may occur.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/Chrisgoac/restify.git
   cd restify
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the server:

   ```sh
   npm start
   ```

4. Open your web browser and navigate to `http://localhost:3000`.