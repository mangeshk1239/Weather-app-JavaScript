# React, NodeJS & ExpressJS based Full stack web app - Weather app JavaScript

## Overview

The Weather app is a web application designed to provide users with accurate and up-to-date weather information for a specific city. It utilizes data from the API of [OpenWeather](https://openweathermap.org/).

## Features

- Current weather: The app displays the current temperature, humidity, wind speed, visibility, and other relevant information about the weather at the user's desired location.

## Tech Stack

This app combines a number of third party open-source tools:

- [Express](https://expressjs.com/) builds the backend.
- [Vite](https://vitejs.dev/) builds the [React](https://reactjs.org/) frontend.

## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.

### Installing the project

1. Clone the repository: Clone this project repository using the following command in your terminal or command prompt:

```shell
git clone https://github.com/mangeshk1239/Weather-app-JavaScript.git
```

2. Navigate to the project directory: Change to the Weather-app-JavaScript directory within the main project folder:
cd .\Weather-app-JavaScript\

3. This directory consists of two folders: backend and frontend.

4. Install dependencies in both the folders: Run the following command to install the necessary dependencies:
```shell
npm install
```

5. Create a ".env" file in the "backend" directory and copy the environment variables from the .envexample file to this file. Please note that you will need to enter your OpenWeather API Access Token in the environment variable called "WEATHER_API_APP_ID". 
You can get the OpenWeather API Access Token by creating an account at [OpenWeather](https://openweathermap.org/).

6. Run the development environment for both the folders: Use the following command to start the development environment:

```shell
npm run dev
```