let a = []

let y = [1, 2, 3, 4]

let y1 = ["mayuri", "shilpa", "jaya"]

console.log(typeof y1)

//javascript => object
//property and methods

// let rollNumber = [11, 22, 33, 44, 55, 66, 77, 99]
// //index         0   1  2  3  4  5
// //length        1  2  3   4   5  6 
// //property // (length)

// console.log(rollNumber[0]) //11
// console.log(rollNumber[5]) //55

// console.log(rollNumber.length) //6

// console.log(rollNumber[rollNumber.length - 1])
//rollNumber[5] //66

//methods

//1. push()
// let rollNumber = [11, 22, 33, 44, 55, 66, 77, 99]
// let s1=rollNumber.push(500)
// console.log(s1) //9
// console.log(rollNumber)

//2. unshift()
// let rollNumber = [11, 22, 33, 44, 55, 66, 77, 99]
// let s2=rollNumber.unshift(900)
// console.log(s2) //9
// console.log(rollNumber)

//3. shift()
// let rollNumber = [11, 22, 33, 44, 55, 66, 77, 99]
// let s3=rollNumber.shift()
// console.log(s3)//11
// console.log(rollNumber)

//4. pop()
// let rollNumber = [11, 22, 33, 44, 55, 66, 77, 99]
// let s4=rollNumber.pop()
// console.log(s4)//99
// console.log(rollNumber)

//5. indexOf()
// let rollNumber = [11, 22, 33, 44, 55, 66, 77, 99]
// //                0    1   2  3   4   5   6   7
// let s5 = rollNumber.indexOf(33)
// console.log(s5) //2

// let s6 = rollNumber.indexOf(333)
// console.log(s6)//-1

//6.includes()
// let rollNumber = [11, 22, 33, 44, 55, 66, 77, 099]
// console.log(rollNumber)
// let s7 = rollNumber.includes(99)
// console.log(s7)//true

// let s8 = rollNumber.includes(099)
// console.log(s8)//true

//7. flat()
//           0  1  2    0   1  2  3   0 1 2  3 
// let marks=[[88,99,100],[66,99,44,55],[1,2,3,4]]
// //             0            1            2
// //[]
// console.log(marks[1]) //[66,99,44,55]

// console.log(marks[1][2])//44

// console.log(marks[2][2])//3

// let s9=marks.flat()
// console.log(s9)

//8. join()
// let names=["mayuri","rohan","kalpesh"]
// let u1=names.join('@')
// console.log(u1)
// console.log(typeof u1)

// let sss=[1,2,3,4]
// let u2=sss.join('')
// console.log(typeof u2)

//9. reverse()
// let arr=[1,2,3,4,5,6]
// let arrnew=arr.reverse()
// console.log(arrnew) //[6,5,4,3,2,1]

// let u11=["mayuri","vaibhav","jaya","sathish"]
// console.log(u11.reverse())


//let marks = [22, 34, 56, 98, 55]
// let arr=[]
// //[24,36,58,100,57]
// for (let i = 0; i < marks.length; i++) {
//     //console.log(i) //index
//     //console.log(marks[i])
//     //console.log(marks[i] + 2)
//     let u1=marks[i] + 2
//     arr.push(u1)
// }
// console.log(arr)

// //10. map()
// let result = marks.map(function (ele, index, array) {
//     return ele-2
// })
// console.log(result)

// let student = ["mayuri", "jaya", "ram", "sham"]
// //["jaya","sham"]
// // let newarr=[]
// // for (let i = 0; i < student.length; i++) {
// //     //console.log(student[i])
// //     if (student[i].length == 4) {
// //         //console.log(student[i])
// //         newarr.push(student[i])
// //     }
// // }
// // console.log(newarr)

// //filter()
// let res=student.filter(function(el,index,array){
//     return el.length==4
// })
// console.log(res)

// let marks = [2, 3, 4, 5]
// //14
// // let sum = 0 //2 //5 //9 //14
// // for (let i = 0; i < marks.length; i++) {
// //     sum = sum + marks[i] //0+2==> 2, 2+3, 5+4 , 9+5
// // }
// // console.log(sum)

// //reduce()
// let result=marks.reduce(function (acc, element, index, array) {
//     return acc + element
// }, 0)
// console.log(result)

let arr = [33, 20, 10, 56, 11]
let y9 = arr.filter(function (el) {
    return el > 20
})
console.log(y9)




//1. push()
//2. pop()
//3. unshift()
//4. shift()
//5. indexof()
//6. includes()
//7. map()
//8. filter()
//9. reduced()
//10. reverse()
//11. flat()
//12. join()









// function add(){
//     console.log("hello")
// }

// add()
















