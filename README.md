# Helsinki City Bikeapp

## Description

This project was inspired by Solita Dev Academy Finland 2023 pre-assignment. (https://github.com/solita/dev-academy-2023-exercise). It's a full stack application that displays information about bicycle stations and journeys.

### Technologies used

Frontend and backend are both build with JavaScript.

- Node
- Express
- Mongo database
- Mongoose
- React
- Material UI components

### Features

Station list with search functionality and server side pagination because journey dataset is too big for client to handle.

![Station list view](https://i.imgur.com/2vIvS1J.png)

![Pagination example](https://i.imgur.com/1xzxGJS.png)

Clicking any of the station rows shows you more details about station. Starting and ending journeys are calculated by backend service: 

![Single station view](https://i.imgur.com/m7AmEMz.png)

Journey list shows some information about journeys and pagination works there too. Journeys dataset is about ~3 million rows.

![Journey list example](https://i.imgur.com/hgDFWfI.png)

![Journey pagination](https://i.imgur.com/azKeWrY.png)

## How to run this project locally

First of all make sure to have ports 3000, 4000 and 27017 (MongoDB default port) free or you need to change them in code.

1. Get MongoDB running and create database called "Solita". I used MongoDB Compass to import data. https://www.mongodb.com/products/compass

2. Import both collections from datasets folder. Data is already parsed to match pre-assigment requirements and there are tests to validate it.

    MongoDB compass -> Choose your database from left -> Create collection -> Name them **journeys** and **stations** -> Choose collection -> Add data -> Choose corresponding .csv
    
3. Run `npm install` in both **backend** and **helsinki-city-bikeapp** folders

4. Create .env -file in root of backend folder.\
    That file should contain following variables: \
    `MONGODB_URI="mongodb://127.0.0.1:27017/solita"` <- Database name\
    `BASE_URL="http://127.0.0.1:4000"`\
    `PORT=4000`
    
    Make sure to have correct addresses and port. This is just example. Some Node versios wont recognize "localhost" so that's why I'm using 127.0.0.1 here.

5. Create another .env -file in root of helsinki-city-bikeapp -folder.\
    That file should contain following variables: \
    `PORT=3000`\
    `REACT_APP_API_URI="http://127.0.0.1:4000"` <- Match this port to another .env-file's port

6. Now everything should be ready to run. Run `npm start` command in both folders and locate to `http://localhost:3000/` with your browser to see app in action.

7. To run backend tests locate to backend folder and run `npm test`

*I'v only ran this project on Windows devices.*

## What I'v learned during this project

- How to structure project files and code better. 
- How to work with huge datasets and server side pagination
- Material UI components, mostly DataGrid to display data
- MongoDB. I chose this because I'v never used it before and it seems to be pretty popular
- Unit testing for first time

## TODO:

I'm still working on this project and here's what's still on TODO-list.

- [ ] Frontend tests
- [ ] Station map
- [ ] Top 5 most popular return stations for journeys starting from the station
- [ ] Top 5 most popular departure stations for journeys ending at the station
- [ ] Run both frontend and backend in Docker or Cloud
- [ ] UI and endpoints to add journeys/stations

    
    