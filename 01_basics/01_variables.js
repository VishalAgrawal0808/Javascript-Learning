// Declaring a Constant
const accountId = 15555
let accountEmail = "vishal@gmail.com"
var accountPassword = "12121212"
accountCity = "Mathura"
let accountState                            // default value will be undefined

// accountId = 123                          // Const variables cannot be reassigned
accountEmail = "agrawal@gmail.com"
accountPassword = "2121"
accountCity = "Jaipur"

/*
Prefer not to use var
because of issue in block scope
and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])