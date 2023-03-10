//array

// let student=["mayuri","sham","ram","sathish","mangal","jangam","shravani"]
// //  index      0         1      2      3
// //length        1         2      3      4
// //first value
// console.log(student[0])//"mayuri"
// console.log(student[3]) //"sathish"

// console.log(student[student.length-1]) //

// //length
// console.log(student.length)//4

//============================================================
//array methods

let rollNo = [22, 44, 77, 89, 12, 34]
//1.push(element)
//action => add the element at last
//return => new length

// let a1=rollNo.push(500)
// console.log(a1) //7
// console.log(rollNo)

//2.unshift()
//action => add the element at first
//return=> new length

let a2 = rollNo.unshift(412)
console.log(a2)//7
console.log(rollNo)

//3. pop()
//action => remove the element from last
//return => removed element

// let flower=['lily','jasmine','lotus','zenia']
// let a3=flower.pop()
// console.log(a3)//zenia
// console.log(flower)

//4. shift()
//action => remove the element from first
//return => removed element

// let a4=flower.shift()
// console.log(a4) //lily
// console.log(flower)

//push()
//unshift()
//pop()
//shift()

//5. indexOf()
//give the index of given element if found and if not found -1
//return number

// let marks = [30, 22, 11, 01, 78, 90, 100, 44]
// //            0   1   2   3   4   5  6     7
// let a6=marks.indexOf(01) //3
// console.log(a6)

// let a7=marks.indexOf(1)
// console.log(a7)//3

// let a8=marks.indexOf(400)
// console.log(a8)

// console.log(marks)

//6. includes(element)
//check whether element present in array or not if present true if not false
//boolean

// let marks = [30, 22, 11, 01, 78, 90, 100, 44]
// let y1=marks.includes(11)
// console.log(y1)

// let y2=marks.includes(100)
// console.log(y2)

// let y3=marks.includes(800)
// console.log(y3)

//7. flat()
//convert all array elements into single array
//new array

//         0  1  2    0   1   2     0  1  2
let arr=[[22,66,99],[100,899,500],[11,44,77]]
//          0           1              2  

// console.log(arr[0])//[22,66,77]
// arr[2] //[11,44,77]

// console.log(arr[2][1]) //44

// console.log(arr[1][0])

let y12=arr.flat()
console.log(y12)

//join()
//action => join the element
//return  => string
let rollNumber=[1,2,3,4]
let y44=rollNumber.join('@')
console.log(y44)
console.log(typeof y44)










