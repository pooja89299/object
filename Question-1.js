// Write a Python program to combine two dictionary adding values for common keys.

// var d1={'a':100,'b':200,'c':300}
// var d2={'a':300,'b':200,'d':400}
// for ( var i in d1){
//     if (i in d2){
//         d2[i]=d1[i]+d2[i]
//     }else{
//         d2[i]=d1[i]
//     }
// }
// console.log(d2)



// var i=1
// while (i<=10){
//     console.log("**********")
//     i++
// }







var a={
    name:"pooja rani",
    age:22,
    country:"INDIA",
    favMovees:["dhoom","sholsy","hum"],
    salary : function(){
        return 25000;
    },
    fullname : function(){
        return this.country + " "+ this.favMovees;
    }

}
console.log(a.fullname());
// console.log(a.salary())
// console.log(a.favMovees[0])