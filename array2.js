//13. forEach()

// let student = ["ram", "sham", "dinga", "pinga"]
// //welcome ram
// //welcome sham

// // for(let i=0;i<student.length;i++){
// //     console.log('Welcome'+" " + student[i])
// // }

// student.forEach(function (el, index, arr) {
//     console.log("Welcome " + el)
// })


//14. find()
// let rollNumber = [2, 14, 56,56, 56, 20, 35, 90, 86]
// let result=rollNumber.find(function (el, index, arr) {
//     return el > 20
// })

//  console.log(result)

//15. findIndex()
// let rollNumber = [2, 14, 56, 20, 35, 90, 86]
// //                0   1   2   3  4    5   6
// let result=rollNumber.findIndex(function(el,index,arr){
//     return el>20
// })
// console.log(result) //2


//16. some()
// let number = [2, 3, 5, 6, 8, 9, 10]
// let y1=number.some(function (el, index, arr) {
//     return el > 6
// })
// console.log(y1) //true

//17. every()
// let number = [2, 3, 5, 6, 8, 9, 10]
// let y2=number.every(function (el, index, arr) {
//     return el > 1
// }) 
// console.log(y2)


//18. slice()
//          -8   -7  -6  -5  -4  -3  -2  -1
// let marks = [34, 12, 22, 55, 89, 90, 56, 44]
// //            0   1   2  3   4   5   6    7
// //arrayname.slice(startposition,endposition)
// //endposition optional
// //endposition always less than 1  (1,6)
// //left ==> right

// let m8 = marks.slice(-6, -2)
// console.log(m8) //[22,55,89,90]

// let m1 = marks.slice(1, 5)
// console.log(m1) //[12,22,55,89]

// let m2 = marks.slice(4)
// console.log(m2) //[89,90,56,44]

// let m3=marks.slice(5,2)
// console.log(m3)

// let m4=marks.slice(1,-3)
// console.log(m4) //[12,22,55,89]

// let m5=marks.slice(-2,-7)
// console.log(m5) //[]

// let m6=marks.slice(-1)
// console.log(m6)

// let m7=marks.slice(1,-1)
// console.log(m7) //[12,22,55,89,90,56]

// let m8=marks.slice(-6,-2)
// console.log(m8)


//19. splice()

//           -8   -7  -6  -5  -4  -3  -2  -1
// let marks = [34, 12, 22, 55, 89, 90, 56, 44]
//            0   1   2  3   4   5   6    7           
//arrayName.splice(startposition,no of element removed,replce1,replace2)
// let y1=marks.splice(2,4,100,200,300)
// console.log(y1) //[22,55,89,90]

// console.log(marks)

// let y2=marks.splice(3)
// console.log(y2)
// console.log(marks) //[34,12,22]

// let y3=marks.splice(-6)
// console.log(y3) //
// console.log(marks)


//20. fill()
//           -8   -7  -6  -5  -4  -3  -2  -1
// let marks = [34, 12, 22, 55, 89, 90, 56, 44]
// //            0   1   2  3   4   5   6    7  

// // arrayname.fill(element which need to fill, startpostion, endposition)
// // let y4=marks.fill("mayuri",3,7)
// // console.log(y4) //[34, 12, 22,"mayuri,mayuri"mayuri,mayuri,44]

// let y5=marks.fill(100,4)
// console.log(y5) //[34,12,22,55,100,100,100,100]

// let y6=marks.fill(500)
// console.log(y6)

//21. concat()
// let a=[2,3,4]
// let b=[10,20,30]
// let c=[200,300,400]

// let arr=a.concat(b)
// console.log(arr)

// let arr2=b.concat(a)
// console.log(arr2)

// let arr3=a.concat(b).concat(c)
// console.log(arr3)

//22.at()
let marks = [34, 12, 22, 55, 89, 90, 56, 44]
//            0   1   2  3   4   5   6    7  
let u1=marks.at(3)
console.log(u1)






