const product = (a,b)=>{
    return a*b;
}
console.log("Product is: ",product(2,3))

const student ={
    name: "Damini",
    age: 23,
    Email: "kesharkardamini1234@gmail.com",
    greet: ()=>{
        console.log("Name: "+this.name+" Age: "+this.age+" Email: "+this.Email)
    },
    greet2: function () {
        console.log("Name: "+this.name+" Age: "+this.age+" Email: "+this.Email)
    }
}
student.greet();
student.greet2();