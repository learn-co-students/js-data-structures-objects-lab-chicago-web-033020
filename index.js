// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driverObj, key, value) {
    // some code here
    const newDriver = Object.assign({}, driverObj, { [key]: value })
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
    // some code here
    driverObj[key] = value;
    return driverObj
}

function deleteFromDriverByKey(driverObj, key) {
    // some code here
    const newDriverObj = Object.assign({}, driverObj);
    delete newDriverObj[key]
    return newDriverObj
}

function destructivelyDeleteFromDriverByKey(driverObj, key) {
    // some code here
    delete driverObj[key]
    return driverObj
}