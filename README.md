# Helsinki City Bikeapp

## Description

This project was inspired by Solita Dev Academy Finland 2023 pre-assignment. (https://github.com/solita/dev-academy-2023-exercise). It's a full stack application that displays information about bicycle stations and journeys.

## Technologies used

Frontend and backend are both build with Javascript.

- Node
- Express
- Mongo database
- Mongoose
- React
- Material UI components

## Features

Station list with search functionality and server side pagination because journey dataset is too big for client to handle.

![Station list view](https://i.imgur.com/2vIvS1J.png)

![Pagination example](https://i.imgur.com/1xzxGJS.png)

Clicking any of the station rows shows you more details about station:

![Single station view](https://i.imgur.com/m7AmEMz.png)

Journey list shows some information about journeys and pagination works there too.

![Journey list example](https://i.imgur.com/hgDFWfI.png)

## How to run this project locally

1. Get MongoDB running and create database called "Solita". I used MongoDB Compass to import data. https://www.mongodb.com/products/compass

2. Import both collections (journeys and stations) from https://oamk-my.sharepoint.com/:f:/g/personal/t0vaja01_students_oamk_fi/ElpDrC0lW1dFhgNsVbEV0GEBcKXs3lKwaArrASgkdeoKzQ?e=LSWPE5

3.
