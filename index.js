// Write your solution in this file!
const driver = {}


function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = { ...driver };
    newDriver[key] = value;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}

function deleteFromDriverByKey(driver, key){
    const newDriver = {...driver}
    delete newDriver[key]
    return newDriver
}



// Follow the steps below, running `learn` as you go to get additional information
// from the tests. To start, define a `driver` variable and assign it to an
// `Object`. Various updates will be applied to this variable (destructively and
// non-destructively) in this lab.

// You'll be writing four functions:

// - `updateDriverWithKeyAndValue()`- this function should take in three arguments:
//   a `driver` `Object`, a `key` and a `value`. This function should not mutate the
//   `driver` and should return a _new_ `driver` that has an updated
//   `value` for the `key` passed in.
// - `destructivelyUpdateDriverWithKeyAndValue()` - this function should work the
//   same as `updateDriverWithKeyAndValue()` but it _should_ mutate the `driver`
//   parameter passed in.
// - `deleteFromDriverByKey()` - this function should take in a `driver` `Object`
//   and a `key`. It should delete the `key`/`value` pair for the `key` that was
//   passed in from the `driver` `Object`. This should all not actually mutate the
//   `driver` passed in.
// - `destructivelyDeleteFromDriverByKey()` - this function should work the same as
//   `deleteFromDriverByKey()` but it _should_ mutate the `driver` passed in. Be
//   sure and consider whether dot-notation or bracket-notation might affect your
//   solution.