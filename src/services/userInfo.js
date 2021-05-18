import { getUA } from 'react-device-detect';
/**
 * function that retrieve data about users ipaddres, useragent and other data. 
 */

/**
 * retrieves the user ipaddress, either returnt the ip or null
 * @returns a json object of the ipaddress or null for an error
 */
export async function getUserIP () {
    try {
        const res = await fetch('https://api64.ipify.org?format=json', {
            method: 'GET',
            headers: {}
        })
        let body = res.json()
        return body
    } catch (err) {
        console.error("error fetching ip: ", err);
        return err
    }
}


/**
 * 
 * @returns a string of the userAgent
 */
export function getUserAgent () {
    return getUA
}