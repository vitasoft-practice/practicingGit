The front end "Drugopedia" needs the backend "drug-api" to be running to work

0. Start MongoDB on localhost
1. Start drug-api
2. POST the below request to http://localhost:3001/auth/signup
{
    "username": "guest",
    "password": "guest"
}
3. Start Drugopedia
