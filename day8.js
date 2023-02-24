
//for loop

//while loop

//for loop 5 table 

// for (let i = 5; i <= 50; i = i + 5) { //5+5=10
//     console.log(i) //5
// }

// //i=5


//1-5 addition
//1 - 5
// let sum = 0 //1 3 6 10  15
// for (let i = 1; i <= 5; i++) { //2 3 4 5  6
//     sum = sum + i
// }

// console.log(sum)
// //0+1 ==> 1
// //1+2=> 3
// //3+3 => 6
// //6+4 => 10
// //10+5 => 15



//============================================

// let i = 1
// let sum = 0
// while (i <= 5) {
//     //console.log(i)
//     sum = sum + i
//     i++
// }
// console.log(sum)


// //2 table
// let j = 2
// while (j <= 20) {
//     console.log(j)
//     j = j + 2
// }

//===================================================

//break

//1-5
// 3 came outside of loop

// for (let i = 1; i <= 5; i++) { //2  3
//     if (i == 3) { //1==3 2==3  3==3
//         break
//     }
//     console.log(i) //1  2
// }


// for (let i = 1; i <= 5; i++) { 
//     console.log(i)
//     if (i == 3) { 
//         break
//     }
// }


//continue
//1-5  3 => 1 2 4 5
// for (let i = 1; i <= 5; i++) { //2 3  4  5 6
//     if (i == 3) { //1==3  2==3  3==3  4==3 5==3
//         continue
//     }
//     console.log(i) //1 2 4 5
// }

// for (let i = 1; i <= 5; i++) { 
//     console.log(i) 
//     if (i == 3) {
//         continue
//     }
// }


//===========================================================

//while break and continue

//1-5  3 break

// let k=1
// while(k<=5){ 
//     if(k==3){ //1==3  2==3  3==3
//         break
//     }
//     console.log(k) //1  2
//     k++ //2  3
// }

let k = 1
while (k <= 5) {
    console.log(k)
    if (k == 3) {
        break
    }
    k++
}

