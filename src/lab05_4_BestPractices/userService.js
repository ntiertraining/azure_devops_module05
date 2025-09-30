
import { db } from "./db";


// src/userService.js
export function validateUsername(username) {
    // Refactored to check for length
    return typeof username === 'string' && username.length > 3;
}


export async function getUser(username) {
    return db.findByUsername(username);
}