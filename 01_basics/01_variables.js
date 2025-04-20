const accountId = 122333
let accountEmail = "partha@gmail.com"
var accountPassword = "12345" // prefer not to use to avoide block or functionals scope related issues
accountCity = "Kolkata"
let accountState;

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// accountId = 9
accountEmail = "partha123@gmail.com"
accountPassword = "54321"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
