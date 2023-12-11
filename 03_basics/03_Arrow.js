const user ={
    username: "hitesh",
    price: 99,

    welcomeMessage: function(){
     console.log(`${this.username} welcome to website`);
     console.log(this);
    }

}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// function chai(){
//     let username ="hitesh"
//     // console.log(this.username); ==> undefined

// }
// chai()

// const  chai =  ()=>{
//           let username ="hitesh"
//           console.log(this); //==> undefined

// }

//+++++ Arrow Function ++++++++++++++++++++++++++++
// exiplite return
// const addTwo=(num1, num2) => {    // when we give curly braces
//     return num1 + num2         then it is mendetory to give return
// }   

//Emplicite return
// const addTwo = (num1, num2)=> num1 + num2

// it is used in react
//const addTwo = (num1, num2) => (num1 + num2)  // no need to return 

// object return
//  const addTwo = (num1, num2) => {username:"hitesh"} ==> undefined
 const addTwo = (num1, num2) => ({username:"hitesh"}) 

console.log(addTwo(3,5))