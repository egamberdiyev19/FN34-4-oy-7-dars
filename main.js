// Boshlang‘ich darajadagi masalalar
// 1-masala
let num1 = [5, 6, 7, 8, 9, ]
console.log(num1);
// 2-masala
let num2 = [6, 9, 3, 7]
let sum2 = 0;
for ( let i = 0; i < num2.length; i++) {
    sum2 += num2[i]
}
console.log(sum2);
// 3-masala
let num3 = [6, 9, 8, 3]
let max31;
let max32;
if (num3[0] > num3[1]) {
    max31 = num3[0]
} else {
    max31 = num3[1]
}
if (num3[2] > num3[3]) {
    max32 = num3[2]
} else {
    max32 = num3[3]
}
if (max31 > max32) {
    console.log(max31)
} else {
    console.log(max32)
}

// 4-masala
let num4 = [6, 9, 8, 3]
let max41;
let max42;
if (num4[0] > num4[1]) {
    max41 = num4[1]
} else {
    max41 = num4[2]
}
if (num4[2] > num4[3]) {
    max42 = num4[3]
} else {
    max42 = num4[2]
}
if (max41 > max42) {
    console.log(max42)
} else {
    console.log(max41)
}
// 5-masala
let num5 = [1, 5, 6, 8, 6, 9]
for (let i = 0; i < num5.length; i++) {
    if (num5[i] % 2 == 0) {
        console.log(num5[i]);
        
    }
}
// 6-masala
let num6 = [1, 6, 9, 7, 3, 8]
for (let i = 0; i < num6.length; i++) {
    if (num6[i] % 2 == 1) {
        console.log(num6[i]);
        
    }
}
// 7-masala
let num7 = [4, -6, -2, -7, 3, -8]
let sum7 = 0;
for (let i = 0; i < num7.length; i++) {
    if (num7[i] < 0 ) {
        sum7 += num7[i];
        console.log(sum7);
        
    }
}
// 8-masala
let num8 = [4, 6, -2, -7, 3, -8]
let sum8 = 0;
for (let i = 0; i < num8.length; i++) {
    if (num8[i] > 0 ) {
        sum8 += num8[i];
        console.log(sum8);
        
    }
}
// 9-masala
let num9 = [5, 8, 4, 7]
let sum9 = 0;
for (let i = 0; i < num9.length; i++) {
    sum9 += num9[i]
}
console.log(sum9 / num9.length)
// 10-masala
let num10 = [10, 32, 16, 52, 41]
let num101 = num10.reverse()
console.log(num101);
// 11-masala
let num11 = [18, 21, 63, 45, 89]
let num111 = num11.reverse()
console.log(num111);




// 12-masala
let num12 = [3, 7, 2, 9, 6]
let res12 = []
for (let i = 0; i < num12.length; i++) {
    res12[i] = num12[i*2]
}
// 13-masala
let num13 = [1, 0, 8, 0, 4]
let sum13 = 0;
for (let i = 0; i < num13.length; i++) {
    if (num13[i] == 0) {
        sum13++;
    }
}
console.log(sum13);
// 14-masala
let num14 = [1, 5, 8, 15, 10, 14]
for (let i = 0; i < num14.length; i++) {
    if (num14[i] % 5 == 0) {
        console.log(num14[i]);
    }
    
    
}
// 15-masala
let num15 = [20, 51, 29, 49]
num15.sort()
console.log(num15);
//16-masala
let num16 = [40, 52, 54, 32, 19]
num16.sort()
console.log(num16);


// 17-masala
let num17 = [2, 8, 6, 4]
let res17 = []
for (let i = 0; i < num17.length; i++) {
  res17[i] = [i+3];
}
// 18-masala
let num18 = [5, -9, 7, -3, 1]
let res18 = []
for (let i = 0; i < num18.length; i++) {
    if (num18[i] > 0) {
        res18 = num18[i]
    }
    console.log(res18)
}
// 19-masala
let num19 = [9, -10, 2, -47, 21]
let res19 = []
for (let i = 0; i < num19.length; i++) {
    if (num18[i] < 0) {
        res19 = num19[i]
    }
    console.log(res19)
}
// 20-masala
let num20 = [4, 6, 9, 23, 8]
for(let i = 0; i < num20.length; i+=2) {
    console.log(num20[i]);
    
}
// O‘rta darajadagi masalalar
// 21-masala
let num21 = [10, 25, 54, 63, 95, 87]
let yarmi21 = Math.floor(num21.length/2);
let birinchiYarmi = num21.slice(0, yarmi21);
let ikkinchiYarmi = num21.slice(yarmi21);
console.log(birinchiYarmi);
console.log(ikkinchiYarmi);


// 22-masala
let num22 = [4, 5, 12, 15, 2]
if (num22.length > 10) {
    console.log("kop")
} else {
    console.log("kam");
    
}
// 23-masala
let num23 = [5, 36, 32, 21, 5]
for (let i = 0; i < num23.length; i++) {

    num23 = 0
    console.log(num23);
}
// 24-masala
let num24 = [5, 12, 23, 41, 11]
num24.pop();
num24.unshift(11);
console.log(num24);
// 25-masala
let num25 = [10, 20, 31, 54, 71]
num25.pop();
num25.unshift(71);
console.log(num25);

// 26-masala
let num26 = [9, 12, 20, 14, 54]
num25[1] = '';
num25[3] = '';

console.log(num26)
// 27-masala
let num27 = [21, -8, -23, 45, 41]
for (let i = 0; i < num27.length; i++) {
    if (num27[i] < 0) {
      num27[i] = 0;
      console.log(num27)
    }
}
// 28-masala
let num28 = [4, 89, 42, 31, 2]
let num281 = []
for (let i = 0; i < num28.length; i++) {
 num28[i] *= 2
  
}

console.log(num28)
// 29-masala
let num29 = [12, 5, 45, 63]
for (let i = 0; i < num29.length; i++) {
    if (num29[i] % 3 != 0) {
        num29[i] *= 0;
        
    
    }
    
}
// 31-masala
let num31 = [25, 17, 36, 25, 96]
let num311 = [...new Set(num31)]
console.log(num311);


// 32-masala
let num32 = [12, 30, 41, 23, 25]
for(let i = 0; i < num32.length; i++) {
    if (num32[i] % 2 != 0) {
        console.log(num32[i]);
        


    }
}
// 33-masala
let num33 = [28, 78, 65, 93, 24, 67]
let ortasi33 = Math.floor(num33.length / 2);
if (num33.length % 2 == 0) {
    num33.splice(ortasi33 - 1, 2);
} else {
    um33.splice(ortasi33, 1)
}
console.log(num33);
// 34-masala
let num34 = [21, 14, 23, 15]
num34.push(21);

num34.unshift(15)

console.log(num34)
// 35-masala
let num35 = [12, 4, 52, 14, 42]
let num351 = [2, 5, 9 ]
console.log(num35 + num351);
// 36-masala
let num36 = [2, 9, 5, 12, 31]
for (let i = 0; i < num36.length; i++) {
    if (num36[i] % 3 != 0) {
         console.log(num36[i]);
         
    }
}
// 37-masala
let num37 = [10, -21, 14, 35, -3]
for (let i = 0; i < num37.length; i++) {
    if (num37[i] > 0) {
        console.log(num37[i]);
        
    }
}
// 38-masala
let num38 = [13, 15, 28, 96, 35]
for (let i = 0; i < num38.length; i++) {
    if (num38[i] % 2 == 0) {
        num38[i] = 0;
       
        
    }
  
}
// 39-masala
let num39 = [20, 43, 20, 36]
let num391 = [...new Set(num39)]
console.log(num391);



// 40-masala
let num40 = [1, 20, 43, 33, 8, 36]
num40[num40.length/2] = 10,
console.log(num40)
// 41-masala

// 42-masala
let num42 = [7, 10, 12, 15, 19]
let num421 = num42.pop();
num42.unshift(num421);
console.log(num42);
// 43-masala
let num43 = [5, 17, 12, 14, 11]
let num431 = num43.shift();
num43.push(num431);
console.log(num43);
// 44-masala
let num44 = [6, 9, 8, 3]
let max441;
let max442;
if (num44[0] > num44[1]) {
    max441 = num44[0]
} else {
    max441 = num44[1]
}
if (num44[2] > num44[3]) {
    max442 = num44[2]
} else {
    max442 = num44[3]
}
if (max441 > max442) {
    console.log(max441)
} else {
    console.log(max442)
}
// 45-masala

let num45 = [10, 3, 7, 61, 20];
let minValue = Math.min(...num45);
let minIndex = num45.indexOf(minValue);
num45.splice(minIndex, 1);
console.log(num45);
// 46-masala
let num46 = [29, 41, 56, 78];
let maxValue = Math.max(...num46);
let maxIndex = num46.indexOf(maxValue);
num46.splice(maxIndex, 1);
console.log(num46);
// 48-masala
let num48 = [64, 20, 36, 20];
let num481 = [...new Set(num48)];

console.log(num481);
// 49-masala
let num49 = [10, 30, 22, 13, 61, 32];
let num492 = [];
let num493 = [];
let num495 = [];
for (let num497 of num49) {
    if (num497 % 2 === 0) {
        num492.push(num497);  
    }
    if (num497 % 3 === 0) {
        num493.push(num497); 
    }
    if (num497 % 5 === 0) {
        num495.push(num497);  
    }
}

console.log( num492);
console.log( num493);
console.log( num495);
// 50-masala
let num50 = [20, 10, 32, 25];
for (let i = 0; i < 3; i++) {
    let num501 = num50.pop();  
    num50.unshift(num501);    
}

console.log(num50);


























