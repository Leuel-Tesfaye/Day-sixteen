/**JSON stands for javascript object nation. 
 * JSON format is only text or string. 
 * JSON is light weight data format for storing or transporting 
 * JSON is mostly used when data is sent from the server to client.
 * 
 *  */ 
// converting json to javascript 

const user = `{
    "users": [
        {
            "firstName": "Asabeneh",
            "lastName": "Yetayeh",
            "age": 250,
            "email": "asab@asb.com"
        }
    ]
}`;
const userObj = JSON.parse(user);
console.log(userObj);

/** The above JSON example is not that much different from a normal object. 
 * the difference is the key of a JSON object should be in double quote. 
 */

const users = `{
    "Asab" :{
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "prince" : {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    }
}`
const usersObj = JSON.parse(users) 
console.log(usersObj)