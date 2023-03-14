
//String
// let flower = "LilY"

// l   i   l    y
// 0   1   2    3

//method()

// let y1=flower.toUpperCase()
// console.log(y1) //LILY

// let y2=flower.toLowerCase()
// console.log(y2) //lily

// let y3=flower.indexOf('i')
// console.log(y3) //1

// let y4=flower.includes('y')
// console.log(y4)

// let y5 = flower.startsWith('iy')
// console.log(y5)

// let y6 = flower.endsWith('y')
// console.log(y6)

//method chaining
// let firstName="ShreeGAnesh"
// firstName.toUpperCase().toLowerCase().indexOf('s').includes('H') //not possible
// firstName.toUpperCase().toLowerCase().indexOf('s')


//7. trim()

//     p   u  n   e   
//  0  1   2  3   4  5
// let city = " pune "
// console.log(city.length)//6

// //action => remove space from starting and ending
// //return => new string
// let m1 = city.trim()
// console.log(m1)
// console.log(m1.length)


//8. trimStart()
//action remove space from start
//return new string

// let city=" Nashik "
// console.log(city.length)//8

// let m2=city.trimStart()
// console.log(m2) //"Nashik "
// console.log(m2.length)

//9.trimEnd()
//action remove space from last
//new string

// let city = " Nashik "
// console.log(city.length) //8
// let m3 = city.trimEnd()
// console.log(m3)
// console.log(m3.length)

// city.trim().toUpperCase().toLowerCase().startsWith('N').toUpperCase()
//Nashik.toupperCase()
//NASHIK.toLowerCase()
//nashik.startsWith()
//false.toUpperCase() //not work


//10. slice()
//action => break string as per starting and ending index
//new string

let student = "Vaibhav"
// -7  -6  -5  -4  -3  -2  -1
//  V   a   i   b   h   a   v
//  0   1   2   3   4   5   6

//string.slice(startpostion,endposition)
//endposition ooptinal
//endposition less than 1
//left ==> right
//right ==> left ==> blank string

let u1=student.slice(3) //bhav
console.log(u1)

let u2=student.slice(1,6)
console.log(u2) //aibha

let u3=student.slice(5,0)
console.log(u3)

let u4=student.slice(-5,5)
console.log(u4)//ibh

let u5=student.slice(-2,-6)
console.log(u5) //blank string

let u6=student.slice(-7,-3)
console.log(u6) //Vaib


//trim()
//trimStart()
//trimEnd()
//slice()
