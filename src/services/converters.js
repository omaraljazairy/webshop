/**
 * converts an isoDate to any date format passed in the formatType string. 
 * @param {string} isoDate: isoDate format from aws for example 2015-02-10T10:12:50.5000z
 * @param {string} formatType: the datetime format
 * @returns date object
 */
export function dateFormatterFromAWS (isoDate, formatType) {
    var date = new Date(isoDate);
    switch (formatType){
        case 'toDateString':
            return date.toDateString(); //'Tue Feb 10 2015';
        case 'toLocaleDateString':
            return date.toLocaleDateString(); //'2/10/2015';
        case 'toGMTString':
            return date.toGMTString(); //'GMT format';
        case 'toISOString':
            return date.toISOString(); //'2015-02-10T10:12:50.500Z';
        case 'toLocaleString':
            return date.toLocaleString(); //'Local date Format';
        case 'toLocaleTimeString':
            return date.toLocaleTimeString(); //'Locale time format';
        case 'toString':
            return date.toString('YYYY-MM-dd'); //'Tue Feb 10 2015 15:42:50';
        case 'toTimeString':
            return date.toTimeString(); //'15:42:50';
        case 'toUTCString':
            return date.toUTCString();
        default:
            return date
        }
}