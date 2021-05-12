/**
 * this file will contain all functions that generate ids like sessionid or orderid and any future type id.
 */

import cryptoRandomString from 'crypto-random-string';

/**
 * generates a random 36 uuid that will be used as a sessionid
 * @returns 
 */
export function generateSessionId () {
    const sessionId = cryptoRandomString({length: 64, type:"base64"});
    console.log("sessionid generated: ", sessionId)
    return sessionId
}


export function generateOrderId () {
    const orderId = Date.now()
    console.log("orderId generated: ", orderId)
    return orderId
}