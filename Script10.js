
//while ==> break and continue

//1-5
// initialization
// while(condition){
//     statmenets
//     increment/decrement
// }

//infinity loop
// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }


//10-1
// let i=10
// while(i>=1){
//     console.log(i)
//     i--
// }

//===========================================

//break
//1-5   ==> 3 ==> break

// let i = 1
// while (i <= 5) {  //1<=5  2<=5  3<=5
//     if (i == 3) {  //1==3  2==3  3==3
//         break
//     }
//     console.log(i) //1  2
//     i++  //2  3
// }
// //1 2


// let j = 1 //
// while (j <= 5) {  //1<=5  2<=5 3<=5
//     console.log(j) //1 2  3
//     if (j == 3) { //1==3  2==3  3==3
//         break
//     }
//     j++ //2 3
// }


//continue

//1-5  3 ==> continue
// let i = 0
// while (i <= 5) {   //0<=5  1<=5  2<=5  3<=5
//     if (i == 3) { //0==3  1==3  2==3  3==3
//         continue
//     }
//     console.log(i)  //0  1  2
//     i++ //1  2  3
// }

//0 1 2 infinity


//proper way

// let i = 0
// while (i <= 5) {   //0<=5  1<=5  2<=5  3<=5 4<=5  5<=5  6<=5
//     if (i == 3) { //0==3  1==3  2==3  3==3  4==3  5==3
//         i++ //4
//         continue
//     }
//     console.log(i)  //0  1  2  4  5
//     i++ //1  2  3  5  6
// }

// let j = 1
// while (j <= 5) { //1<=5  2<=5  3<=5 4<=5  5<=5  6<=5
//     console.log(j)  //1 2 3  4  5
//     if (j > 3) {  //1>3  2>3 3>3 4>3  5>3
//         j++ //5 6
//         continue
//     }
//     j++ //2 3  4
// }


let j = 1
while (j <= 5) {  //1<=5  2<=5  3<=5  4<=5  5<=5  6<=5
    if (j > 3) {   //1>3 2>3  3>3 4>3  5>3
        j++ //5  6
        continue
    }
    console.log(j)  //1  2  3
    j++  //2  3  4
}