"use strict";
//import moment from 'moment';
//const moment = require('moment');
//const { parse } = require('date-fns');

export function gc2ec(gcd) {

  // Convert the datetime string to a Date object
  const date = new Date(gcd);

  // Extract the day, month, and year
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  
  gcd = `${year}-${month}-${day}`;
  // Split the input string by '-' into at most 3 parts
  gcd = gcd.split('-', 3);

  // Calculate ey using a ternary operator 
  let ey = (((parseInt(gcd[0]) - 7) % 4 === 0 && parseInt(gcd[1]) > 9) || (parseInt(gcd[1]) === 9 && parseInt(gcd[2]) > 11) || (parseInt(gcd[1]) > 9) || (parseInt(gcd[1]) === 9 && parseInt(gcd[2]) > 10)) ? (parseInt(gcd[0]) - 7) : (parseInt(gcd[0]) - 8);
  let em = 0;
  let ed;

  if ((parseInt(gcd[1]) === 9 && parseInt(gcd[2]) > 5 && (((parseInt(gcd[0]) - 7) % 4 === 0 && parseInt(gcd[2]) < 12) || parseInt(gcd[2]) < 11))) {
    ed = parseInt(gcd[2]) - 5;
    em = 13;
  } else if (([9, 10].includes(parseInt(gcd[1])) || ((parseInt(gcd[0]) - 7) % 4 === 0 && [11, 12].includes(parseInt(gcd[1]))))) {
    if (parseInt(gcd[2]) > 10) {
      ed = parseInt(gcd[2]) - 10;
      em = parseInt(gcd[1]) - 8;
    } else {
      ed = parseInt(gcd[2]) + 20;
      em = parseInt(gcd[1]) > 9 ? parseInt(gcd[1]) - 9 : parseInt(gcd[1]) - 8;
    }
  } else if (([3, 11, 12].includes(parseInt(gcd[1])) || ((parseInt(gcd[0]) - 7) % 4 === 0 && parseInt(gcd[1]) === 1))) {
    if (parseInt(gcd[2]) > 9) {
      ed = parseInt(gcd[2]) - 9;
      em = [11, 12].includes(parseInt(gcd[1])) ? parseInt(gcd[1]) - 8 : parseInt(gcd[1]) + 4;
    } else {
      ed = parseInt(gcd[2]) + 21;
      em = [11, 12].includes(parseInt(gcd[1])) ? parseInt(gcd[1]) - 9 : parseInt(gcd[1]) + 3;
    }
  } else if (([1, 4, 5].includes(parseInt(gcd[1])) || ((parseInt(gcd[0]) - 7) % 4 === 0 && parseInt(gcd[1]) === 2))) {
    if (parseInt(gcd[2]) > 8) {
      ed = parseInt(gcd[2]) - 8;
      em = parseInt(gcd[1]) + 4;
    } else {
      ed = parseInt(gcd[2]) + 22;
      em = parseInt(gcd[1]) + 3;
    }
  } else if ([2, 6, 7].includes(parseInt(gcd[1]))) {
    if (parseInt(gcd[2]) > 7) {
      ed = parseInt(gcd[2]) - 7;
      em = parseInt(gcd[1]) + 4;
    } else {
      ed = parseInt(gcd[2]) + 23;
      em = parseInt(gcd[1]) + 3;
    }
  } else {
    if (parseInt(gcd[2]) > 6) {
      ed = parseInt(gcd[2]) - 6;
      em = parseInt(gcd[1]) + 4;
    } else {
      ed = parseInt(gcd[2]) + 24;
      em = parseInt(gcd[1]) + 3;
    }
  }

  // Format em and ed to be two-digit strings if they are less than 10
  em = em < 10 ? '0' + em.toString() : em.toString();
  ed = ed < 10 ? '0' + ed.toString() : ed.toString();

  //let ecd = [ey.toString(), '-', em, '-', ed];
  //ecd = ecd.join('');
  let ecd = `${ey.toString()}-${em}-${ed}`;

  //const date = moment(ecd, 'YYYY-MM-DD').toDate();
  //const date = Date.parse(ecd.toString);
  //const edate = new Date(date);

  return ecd;
}

//let ec = gc2ec('2025-02-18');
//console.log(ec);