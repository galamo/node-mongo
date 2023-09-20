# MongoDB

1. relational DB => MySQL
2. non relational DB => mongoDB, Couchbase,  Graphdb - neo4j, casandra, dynamoDB.

MongoDB => JSON

Vehicles

```json
Car:
 { "lp": "56-665-555", "manufacturer": "tesla", "technical":{ "engine":2, "numberOfWheels":4, "numberOfSeats":5, }, "doors":4 }

 Track:
 { "lp": "56-444-555", "manufacturer": "Volvo", "isDanger":true ,"technical":{ "engine":5, "numberOfWheels":8, "numberOfSeats":3, }, "doors":2 , "trailerLp": "56-444-552"}
```


Shapes
```javascript

const circle = { radius:10, area: 11, x:1,y:2 }
const square = {  area: 11, x:1,y:2, size:5 }
const triangle = { area: 11, x:1,y:2,  }

```

=> schema 
 => collection = shapes, vehicles
  => json

# Homework
1. download 3T
2. sign up and connect with 3T
3. https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
4. uri connect => mongodb://localhost:27017
5. query example: db.Vehicles.find({ "Horsepower" : { "$gte": 210 } }, { "Name":true })
