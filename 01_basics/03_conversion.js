let score = "2012-12-12T12:12:12.12Z" //44 //"2012-12-12T12:12:12.12Z" //true //33 //'abc' // null
//YYYY-MM-DDTHH:mm:ss.sssZ

console.log(typeof score)
console.log(typeof(score))

let value = Number(score)
console.log(typeof(value), value)

// NaN

value = String(score)
console.log(typeof(value), value)

value = Boolean(score)
console.log(typeof(value), value)

value = Date.parse(score).toString()
console.log(typeof(value), value)


const date = new Date(score);
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM

console.log(typeof(date), date)
