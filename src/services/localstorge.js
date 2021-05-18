import { generateSessionId } from './idgenerators';
import { getUserIP, getUserAgent } from './userInfo';

/**
 * this file will contain all functions set and fetch data from localStorage.
 */


/**
 * store a sessionid into the localStorage if it doesn't exist
 * @return sessionid
 */
 export function storeSession () {
     // check if session exist
     const storedSession = localStorage.getItem('sessionid')
     if (!storedSession) {
        // create a new session and store it in the localstorage
        let sessionid = generateSessionId()
        localStorage.setItem('sessionid', sessionid)
        return sessionid
     } else {
         return storedSession
     }
 }


/**
 * check first if the ip is already stored.
 * if there is no ip, it will store the ipaddress it gets from the
 * getUserIP function. if the return type received is an object,
 * it will take the ip from it and store it. else it will store the return body. 
 */
 export async function storeIp () {
    const storedIpaddress = localStorage.getItem('ipaddress');
    if (!storedIpaddress ) {
        const body = await getUserIP()
        if (typeof body === 'object' ) {
            localStorage.setItem('ipaddress', body.ip)
            return body.ip
        } else {
            localStorage.setItem('ipaddress', body)
            return body
        }
    } else {
        return storedIpaddress
    }
}


export function storeUserAgent () {
    const storedUserAgent = localStorage.getItem('useragent');
    if (!storedUserAgent) {
        // userAgent is not stored. so save it now
        let useragent = getUserAgent()
        localStorage.setItem('useragent', useragent)
        return useragent
     } else {
         return storedUserAgent
     }
}


 