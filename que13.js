// Write a programme to find the 3 maximum values of an object and print them.



// var my_dict = {
//     'a':50,
//     'b':58,
//     'c':56,
//     'd':40,
//     'e':100,
//     'f':20
//     }
//     var m=[]
//     var n=[]
//     var s=[]
//     for (i in my_dict){
//         m.push(my_dict[i])
//         for(j of m){
//             if(my_dict[i]>j){
//                 n.push(my_dict[i])
//             }
//             if(n.length===3){
//                 break
//             }
//         }
//         // if (i in max){
//         //     max[i]=my_dict[i]+max[i]
        
//         // }else{
//         //     max[i]=my_dict[i]
//         // }
//     }
//     console.log(n)
    







    // for (i in d2){
    //     if (i in d1){
    //         d1[i]=d1[i]+d2[i]
        
    //     }else{
    //         d1[i]=d2[i]
    //     }
    // }
    // console.log(d1)
    







// var d1={'a':10, 'b':20}
// var d2={'c':30,'d':40}
// var d3={'e':50,'f':60}

// for(i in d3){
//     if(i in d2){
//         if (i in d1){
//             d1[i]=d1[i]+d2[i]
//             d2[i]=d2[i]+d3[i]
//         }
//         }
//     else{
//         d1[i]=d2[i]
//         d1[i]=d3[i]
//     }
// }
// console.log(d1)







// b={"a":2,"s":{"n":4}}
// s=require("readline-sync")
// p=s.question("Enter char:")
// for (i in b){
//     if (i==p){
//         console.log(i,b[i])
//     }
// }









// var my_dict = {
//     'a':50,
//     'b':58,
//     'c':56,
//     'd':40,
//     'e':100,
//     'f':20
//     }
// max=0
// for (i in my_dict){
//     if (my_dict[i]>max){
//         max=my_dict[i]
//     }
// }
// smx=0
// for (i in my_dict){
//     if (my_dict[i]!==max){
//         if (my_dict[i]>smx)
//     }
// }



// let a=require("readline-sync")
// var num=a.questionInt("Enter a number:")
// var i=1
// s=""
// while(i<=num){
//  s+="1/"+i
//  s+=" "
//  i++
// }
// console.log(s)







var emptyObject = {};
var person = {"name": "Nayak", "surname": "Kumar", "age": "24"};
// For better reading
var scooty = {
   "modal": "Ampere Rio",
   "color": "white",
   "Speed": "35 km"
}
console.log(scooty,person)