let sum = function (a, b) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        result += 1;
    }
    return result;
}

//CHECK GIT HUB
// let sum2 = function (a, b) => {
//     let result = 0;
//     for (let i = a; i <= b; i++) {
//         result += 1;
//     }
// }

console.log(sum(1, 10));
// console.log(sum2(1, 10));


// function mystery() {
//     return 42;
// }

// function mystery2(callback){
//     let result = callback() + 5;
//     console.log(result);
// }

// mystery2(mystery);





const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
 ];
 
 const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 
 // forEach
 companies.forEach(val => { console.log(val.name)});  //no round brackets required if one arg       //prints all the companies
 companies.forEach((val, i) => { console.log(`${i}: ${val.name}`)}); //value, index, array
 
 // filter
 
 // Get 21 and older
 const oldPeople = ages.filter((age) => age >= 21);
 console.log(oldPeople);

 // Filter retail companies
 const retailCompanies = companies.filter(c => c.category === 'Retail'); //returns true if category is retail
 console.log(retailCompanies);
 // Get 80s companies
 const start = companies.filter(b => (b.start >= 1980) && (b.start <=1989));
 console.log(start);
 // Get companies that lasted  10 years or more
 const last = companies.filter(a => a.end - a.start >= 10);
 console.log(last);