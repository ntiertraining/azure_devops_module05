
// initial 'green' test (quick green forgives all sins)
/*
export function validateUsername(username) {
    // Just enough code to pass the current test
    if (username === 'joel_doe') {
        return true;
    }
    return false;
}
*/

// src/userService.js
export function validateUsername(username) {
    // Refactored to check for length
    return typeof username === 'string' && username.length > 3;
}