"use strict";

// CASE 1

// let haftaKuni = 4

// let haftaKuniNomi;

// switch (haftaKuni) {
//     case 1:
//     haftaKuniNomi = "Dushanba"
//         break;
//     case 2:
//     haftaKuniNomi = "Seshanba"
//         break;
//     case 3:
//     haftaKuniNomi = "Chorshanba"
//         break;
//     case 4:
//     haftaKuniNomi = "Payshanba"
//         break;
//     case 5:
//     haftaKuniNomi = "Juma"
//         break;
//     case 6:
//     haftaKuniNomi = "Shanba"
//         break;
//     case 7:
//     haftaKuniNomi = "Yakshanba"
//         break;
// }

// console.log(haftaKuniNomi);

// CASE 2

// let K = 1

// let bahoNatijasi;

// switch (K) {
//     case 1:
//     bahoNatijasi = "yomon"
//         break;
//     case 2:
//     bahoNatijasi = "qoniqarsiz"
//         break;
//     case 3:
//     bahoNatijasi = "qoniqarli"
//         break;
//     case 4:
//     bahoNatijasi = "yaxshi"
//         break;
//     case 5:
//     bahoNatijasi = "a'lo"
//         break;
//     default:
//         bahoNatijasi = "Xato"
// }

// console.log(bahoNatijasi);

// CASE 3

// let oyRaqami = 9;

// let oyNomi;

// switch (oyRaqami) {
//     case 1 , 2:
//     oyNomi = "qish"
//         break;
//     case 12:
//     oyNomi = "qish"
//         break;
//     case 3,4, 5:
//     oyNomi = "bahor"
//         break;
//     case 6,7, 8:
//     oyNomi = "yoz"
//         break;
//     case 9, 10, 11:
//     oyNomi = "kuz"
//         break;

//     default:
//     oyNomi = "bunday oy yo'q"

// }

// console.log(oyNomi);

// CASE 4

// let oyRaqami = 12

// let oyKuni;

// switch (oyRaqami) {
//     case 12:
//     oyKuni = 31
//         break;
//     case 1:
//     oyKuni = 31
//         break;
//     case 2:
//     oyKuni = 31
//         break;
//     case 3:
//     oyKuni = 28
//         break;
//     case 4:
//     oyKuni = 31
//         break;
//     case 5:
//     oyKuni = 30
//         break;
//     case 6:
//     oyKuni = 31
//         break;
//     case 7:
//     oyKuni = 30
//         break;
//     case 8:
//     oyKuni = 31
//         break;
//     case 9:
//     oyKuni = 30
//         break;
//     case 10:
//     oyKuni = 31
//         break;
//     case 11:
//     oyKuni = 30
//         break;

//     default: "bunday oy yo'q"
//         break;
// }

// console.log(oyKuni);

// CASE 5

// let a = 5

// let b = 4

// let arifmetic = "qo'shish"

// switch (arifmetic) {
//     case "qo'shish":
//     arifmetic = a + b
//         break;
//     case "ayirish":
//     arifmetic = a - b
//         break;
//     case "ko'paytirish":
//     arifmetic = a * b
//         break;
//     case "bo'lish":
//     arifmetic = a / b
//         break;

//     default:
//         break;
// }

// console.log(arifmetic);

// CASE 6

// let length = 1000;

// let birlik = "km";

// switch (birlik) {
//   case "dm":
//     console.log(length * 0.1);
//     break;
//   case "km":
//     console.log(length * 0.001);
//     break
//   case "m":
//     console.log(length * 1);
//     break;
//   case "mm":
//     console.log(length *1000);
//     break;
//   case "sm":
//     console.log(length * 100);
//     break;
// }

// CASE 7

// let weight = 189;

// let qiymat = "g";

// switch (qiymat) {
//   case "kg":
//     console.log(weight * 1);
//     break;
//   case "mm":
//     console.log(weight * 0.000001);
//     break
//   case "g":
//     console.log(weight * 0.001);
//     break;
//   case "tn":
//     console.log(weight * 1000);
//     break;
//   case "sr":
//     console.log(weight * 100);
//     break;
// }


// CASE 8

// let kun = 29

// let oy = 2

// let jamlanma;

// switch (oy) {
//   case 1:
//   oy = "Yanvar"
//   jamlanma = "31" 
//     break;
//   case 2:
//   oy = "fevral"
//   jamlanma = "28" 
//     break;
//   case 3:
//   oy = "mart"
//   jamlanma = "31" 
//     break;
//   case 4:
//   oy = "may"
//   jamlanma = "31" 
//     break;
//   case 5:
//   oy = "aprel"
//   jamlanma = "31" 
//     break;
//   case 6:
//   oy = "iyun"
//   jamlanma = "31" 
//     break;
//   case 7:
//   oy = "iyul"
//   jamlanma = "31" 
//     break;
//   case 8:
//   oy = "avgust"
//   jamlanma = "31" 
//     break;
//   case 9:
//   oy = "sentabr"
//   jamlanma = "31" 
//     break;
//   case 10:
//   oy = "Yanvar"
//   jamlanma = "31" 
//     break;
//   case 11:
//   oy = "Yanvar"
//   jamlanma = "31" 
//     break;
//   case 12:
//   oy = "Yanvar"
//   jamlanma = "31" 
//     break;
// }

// if (kun <= jamlanma && jamlanma !== null) {
//     console.log(`${kun}inchi ${oy}`);
// } else {
//     console.log("Notug'ri sana"); 
// }

//  CASE 10

// let y = "sh"

// let k = 2

// let compasdetect

// switch (y) {
//   case "s":
//     compasdetect = "sharq"
//     break;
//   case "g'":
//     compasdetect = "g'arb"
//     break;
//   case "j":
//     compasdetect = "janub"
//     break;
//   case "sh":
//     compasdetect = "shimol"
//     break;

//   default:
//     break;
// }

// console.log(compasdetect);

// CASE 11

// let buyruq = prompt("Iltiomos buyruqni kirirting : 0 - chapga 90, 1 - o'nga 90, 2 - 180, 3 - joyga qaytish", "")

// let compasdetect;

// switch (buyruq) {
//   case "0":
//     compasdetect = "sharq"
//     break;
//   case "1":
//     compasdetect = "g'arb"
//     break;
//   case "2":
//     compasdetect = "janub"
//     break;
//   case "3":
//     compasdetect = "shimol"
//     break;

//   default:
//     compasdetect = 'ko`rsatilgan buyruqlardan birini tanlang'
// }

// alert(compasdetect)


// CASE 12

// const p = 3.14;

// let R, D, L, S;

// let element = 3;

// switch (element) {
//     case 1: 
//         R = 1;
//         console.log( R);
//         D = 2 * R;
//         console.log( D);
//         L = 2 * p - R;
//         console.log(L);
//         S = p * R ** 2;
//         console.log(S);
//         break;
//     case 2:
//         D = 1;
//         console.log(D);
//         R = D / 2;
//         console.log(R);
//         L = 2 * p - R;
//         console.log(L);
//         S = p * R ** 2;
//         console.log(S);
//         break;
//     case 3:
//         L = 1;
//         console.log(L);
//         R = (2 * p - L) / 2;
//         console.log(R);
//         D = 2 * R;
//         console.log(D);
//         S = p * R ** 2;
//         console.log(S);
//         break;
//     case 4: 
//         S = 1;
//         console.log( S);
//         R = Math.sqrt(S / p);
//         console.log( R);
//         D = 2 * R;
//         console.log( D);
//         L = 2 * p - R;
//         console.log(L);
//         break;
//     default:
//         console.log("Noto'g'ri formula");
// }

// CASE 13

// let p = 3.14

// let a, c, h, S;

// let element = 4;

// switch (element) {
//     case 1: 
//         a = 1;
//         console.log( a);
//         c = 2 * a;
//         console.log( c);
//         h = 2 * p - a;
//         console.log(h);
//         S = p * a ** 2;
//         console.log(S);
//         break;
//     case 2:
//         c = 1;
//         console.log(c);
//         a = c / 2;
//         console.log(a);
//         h = 2 * p - a;
//         console.log(h);
//         S = p * a ** 2;
//         console.log(S);
//         break;
//     case 3:
//         h = 1;
//         console.log(h);
//         a = (2 * p - h) / 2;
//         console.log(a);
//         c = 2 * a;
//         console.log(c);
//         S = p * a ** 2;
//         console.log(S);
//         break;
//     case 4: 
//         S = 1;
//         console.log( S);
//         a = Math.sqrt(S / p);
//         console.log( a);
//         c = 2 * a;
//         console.log( c);
//         h = 2 * p - a;
//         console.log(h);
//         break;
//     default:
//         console.log("Noto'g'ri formula");
// }


// CASE 16

// let x = 70

// let suzlarda = '';

// let on = Math.floor(x / 10)
// let bir = Math.floor(x % 10)

//   switch (on) {
//     case 2:
//       suzlarda += "yigirma "
//       break;
//     case 3:
//       suzlarda += "o`ttiz "
//       break;
//     case 4:
//       suzlarda += "qiriq "
//       break;
//     case 5:
//       suzlarda += "ellik "
//       break;
//     case 6:
//       suzlarda += "oltmish "
//       break;
  
//     default:
//       break;
//   }

//   switch (bir) {
//   case 1:
//     suzlarda += "bir"
//     break;
//   case 2:
//     suzlarda += "ikki"
//     break;
//   case 3:
//     suzlarda += "uch"
//     break;
//   case 4:
//     suzlarda += "to'rt"
//     break;
//   case 5:
//     suzlarda += "besh"
//     break;
//   case 6:
//     suzlarda += "olti"
//     break;
//   case 7:
//     suzlarda += "yetti"
//     break;
//   case 8:
//     suzlarda += "sakkiz"
//     break;
//   case 9:
//     suzlarda += "to'qqiz"
//     break;

//   default:
//     console.log("sonlar faqat 20dan 69gacha bo'lishi kerak");
//     break;
// }



// console.log(suzlarda + " yosh");

// CASE 17

// let x = 1

// let suzlarda = '';

// let on = Math.floor(x / 10)
// let bir = Math.floor(x % 10)


//   switch (on) {
//     case 2:
//       suzlarda += "yigirma"
//       break;
//     case 3:
//       suzlarda += "o`ttiz"
//       break;
//     case 4:
//       suzlarda += "qiriq"
//       break;
//     case 5:
//       suzlarda += "ellik"
//       break;
//     case 6:
//       suzlarda += "oltmish"
//       break;
  
//     default:
//       break;
//   }

//   switch (bir) {
//   case 1:
//     suzlarda += " bir"
//     break;
//   case 2:
//     suzlarda += " ikki"
//     break;
//   case 3:
//     suzlarda += " uch"
//     break;
//   case 4:
//     suzlarda += " to'rt"
//     break;
//   case 5:
//     suzlarda += " besh"
//     break;
//   case 6:
//     suzlarda += " olti"
//     break;
//   case 7:
//     suzlarda += " yetti"
//     break;
//   case 8:
//     suzlarda += " sakkiz"
//     break;
//   case 9:
//     suzlarda += " to'qqiz"
//     break;
// }


// if (on <= 40 && 40 >= 10) {
//   console.log(suzlarda + `ta masala`);
// }else{
//   console.log("masalalar soni 10tadan 40tagacha bo'lishi kerak");
// }

// CASE 18

// let x = 321;

// let suzlarda = " ";

// let yuz = Math.floor(x / 100)

// let on = Math.floor((x % 100) / 10)

// let bir = Math.floor(x % 10)

// switch (yuz) {
//   case 1:
//     suzlarda += "bir yuz"
//     break;
//   case 2:
//     suzlarda += "ikki yuz"
//     break;
//   case 3:
//     suzlarda += "uch yuz"
//     break;
//   case 4:
//     suzlarda += "to'rt yuz"
//     break;
//   case 5:
//     suzlarda += "besh yuz"
//     break;
//   case 6:
//     suzlarda += "olti yuz"
//     break;
//   case 7:
//     suzlarda += "yetti yuz"
//     break;
//   case 8:
//     suzlarda += "sakkiz yuz"
//     break;
//   case 9:
//     suzlarda += "to'qqiz yuz"
//     break;

//   default:
//     break;
// }

// suzlarda+=" "

//   switch (on) {
//     case 1:
//       suzlarda += "o'n"
//       break
//     case 2:
//       suzlarda += "yigirma"
//       break;
//     case 3:
//       suzlarda += "o`ttiz"
//       break;
//     case 4:
//       suzlarda += "qiriq"
//       break;
//     case 5:
//       suzlarda += "ellik"
//       break;
//     case 6:
//       suzlarda += "oltmish"
//       break;
//     case 7:
//       suzlarda += "yetmish"
//       break;
//     case 8:
//       suzlarda += "sakson"
//       break;
//     case 9:
//       suzlarda += "to'qson"
//       break;
  
//     default:
//       break;
//   }

//   switch (bir) {
//   case 1:
//     suzlarda += " bir"
//     break;
//   case 2:
//     suzlarda += " ikki"
//     break;
//   case 3:
//     suzlarda += " uch"
//     break;
//   case 4:
//     suzlarda += " to'rt"
//     break;
//   case 5:
//     suzlarda += " besh"
//     break;
//   case 6:
//     suzlarda += " olti"
//     break;
//   case 7:
//     suzlarda += " yetti"
//     break;
//   case 8:
//     suzlarda += " sakkiz"
//     break;
//   case 9:
//     suzlarda += " to'qqiz"
//     break;
// }

// console.log(`${x} -` + suzlarda);

// CASE 19

// let x = 1984

// let user =1988

// let butun = Math.floor((user - x) / 12)
// let qoldiq = Math.floor((user - x) % 12)

// let umumiy = " ";

// switch (butun) {
//     case 0:
//         umumiy += "yashil"
//         break;
//     case 1:
//         umumiy += "qizil"
//         break;
//     case 2:
//         umumiy += "sariq"
//         break;
//     case 3:
//         umumiy += "oq"
//         break;
//     case 4:
//         umumiy += "qora"
//         break;

//     default:
//         break;
// }

// umumiy += " "

// switch (qoldiq) {
//     case 0:
//         umumiy += "sichqon"
//         break;
//     case 1:
//         umumiy += "sigir"
//         break;
//     case 2:
//         umumiy += "yo'lbars"
//         break;
//     case 3:
//         umumiy += "quyon"
//         break;
//     case 4:
//         umumiy += "ajdar"
//         break;
//     case 5:
//         umumiy += "ilon"
//         break;
//     case 6:
//         umumiy += "ot"
//         break;
//     case 7:
//         umumiy += "qo'y"
//         break;
//     case 8:
//         umumiy += "maymun"
//         break;
//     case 9:
//         umumiy += "tovuq"
//         break;
//     case 10:
//         umumiy += "it"
//         break;
//     case 11:
//         umumiy += "to'ng'iz"
//         break;

//     default:
//         break;
// }

// CASE 20

