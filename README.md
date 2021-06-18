****  A bit.ly clone app - smallify.ly ****

Tech Stack -
                1. Node.Js (As a server)
                2. MongoDB (For storing the links shortened)
                3. Express.js (For easy routing and error handling)
                You Know all the above mentioned pretty sure-

Process(Work to be toiled) - 

        * Stage 1 - Setting Up
                    - Create a server folder
                    - cd server
                    - npm init
                    - npm i express morgan nodemon(you can also install it as a dev dependency, prefered)
                    - go into package.json :
                        *Remove test script
                        *Add start script and run (dev) script

        
        * Stage 2 - Going to the Frontend portion
                    - Use Bootstrap or Bulma for CSS
                    - Use minified vue.js
                    - Set it according to your liking
                    - Serve it directly from expess (express.static('./public'))
                    - Create forms

        * Stage 3 - Going into creating the server(initial steps)
                    
                    Task 1 - Create a new url form for the client
                        - npm i mongoose
                        - Create a database folder inside the server folder and connect mongoose
                        - To get mongoDB server runnning on ypur PC go to bin folder of mongoDB and paste : .\mongod.exe --dbpath=/Users/ahmba/mongodb-data
                        - Connect the database 'mongodb://127.0.0.1:27017/lnks-ad
                        - Inside server folder create a models folder
                        - Handle errors
                        - Show created link on page

                    Task 2:
                        - Create a seperate route for all the links from the database and make them clickable
                        - If they are clicked then find the id in the mongoDB and with the result, call a res.result + add incrementor
                        - Show the previously created tabs in another TAB.