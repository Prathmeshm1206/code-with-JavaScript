//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name= "sam"
tinderUser.isLoggedIn= false

//console.log(tinderUser);

const regularUser ={
    email:"sum@gmail.com",
    fullname: {
        userfullname:{
            firstname: "omkar",
            lastname:"mane"
        }
    }
}

console.log(regularUser.fullname); //=>{ userfullname: { firstname: 'omkar', lastname: 'mane' } }
console.log(regularUser.fullname.userfullname.firstname); //=>omkar

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "c", 6: "d"}
const obj4 = {7: "c", 8: "d"}

//const obj3 = {obj1, obj2}
//console.log(obj3); //=>{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj0 = Object.assign({},obj1, obj2, obj3) //=> {} - all values of obj1 and obj2 combine and collect in empty {}
// console.log(obj0); //=>{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj0 = {...obj1, ...obj2}
console.log(obj0);

const users = [

{
    id : 1,
    email: "omkar@gmail.com"
    
},
{
    id : 2,
    email: "omkar@gmail.com"
    
},
{
    id : 3,
    email: "omkar@gmail.com"
},
{
    id : 1,
    email: "omkar@gmail.com"
    
},
]

users[0].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
//=>[ 'id', 'name', 'isLoggedIn' ] return type arrays 
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  


//*************************** De-Structure *************************

const course ={
    consursename: "js in hindi",
    price: "999",
    courseInstructor: "omkar"
}
//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const navbar = ({company}) =>{ // replacement from props.company

}
navbar(company ="omkar")

// JSON

// {
//     "name": "omakr",
//     "consurseName": "js in hindi",
//     "price": "free"
// }

// JOSON in array format
[
    {},
    {},
    {}
]

