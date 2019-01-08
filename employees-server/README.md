### Create a Fake REST API using Json Server , Node JS and Faker JS Library

Repository contains the 2 file for fake REST API creation

Setup Instruction

- Install Node Js on your system
- Install Json server using the npm install - ```npm install -g json-server```


Usage Instructions

- Go to the location where Json Server is installed in your system
- Copy the db.json file in that location and run the command ```json-server --watch db.json```
- The REST API will be up and ready in the local host ```http://localhost:3000```

Now to automate the Fake API data instead on manually editing the db.json everytime, we can follow the below steps - 

- run ```npm init``` in the cmd 
- run ```npm install faker```
- copy employee.js file to the same directory as above
- run ```json-server employee.js```

Refer https://youtu.be/x3NAo8zqdmo for step by step tutorial

Author: Aniket
Email: aniketneogy19@gmail.com
