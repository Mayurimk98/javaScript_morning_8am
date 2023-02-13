//1-10

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// //10-1
// for(let i=10;i>=1;i--){
//     console.log(i)
// }


//loop 
//break statement => to came outside of loop

//1-5 => 3

// for (let i = 1; i <= 5; i++) {//2 3
//     if (i == 3) {
//         break
//     }
//     console.log(i) //1 2
// }
//i =1  1<=5    => 
//i=2  2<=5
//i=3  3<=5

// for (let i = 1; i <= 5; i++) { //2 3
//     console.log(i) //1 2 3
//     if (i == 3) {//1==3 2==3 3==3
//         break
//     }
// }

//========================================================
//2. continue=> perticular condiftion escape

//1 2 3 4 5  => 1 2 4 5

// for (let i = 0; i <= 5; i++) { //1  2  3 4  5 6
//     if (i == 3) { //0==3 1==3 2==3  3==3  4==3 5==3
//         continue
//     }
//     console.log(i) //0  1  2  4  5
// }

for (let i = 1; i <= 5; i++) { //2  3  4  5  6
    console.log(i) //1  2  3  4  5
    if (i == 3) { //1==3 2==3 3==3 4==3 5==3
        continue
    }
}

//1 2  4 5
