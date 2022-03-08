const monthsArray = [
    { shortName: "January", numDays: 31},
    { shortName: "February", numDays: 29},
    { shortName: "March", numDays: 31},
    { shortName: "April", numDays: 30},
    { shortName: "May", numDays: 31},
    { shortName: "June", numDays: 30},
    { shortName: "July", numDays: 31},
    { shortName: "August", numDays: 31},
    { shortName: "September", numDays: 30},
    { shortName: "October", numDays: 31},
    { shortName: "November", numDays: 30},
    { shortName: "December", numDays: 31}
];

export function calcButtonTextColor(buttonColor) {
    const r = parseInt(buttonColor.slice(1,3), 16);    
    const g = parseInt(buttonColor.slice(3,5), 16);
    const b = parseInt(buttonColor.slice(5,7), 16);
    
    return ( 0.3 * r + 0.6 * g + 0.1 * b) < 128
        ? "#FFFFFF"
        : "#000000";
}

export const months = {
    getShortName: i => monthsArray[i].shortName,
    getNumDays: i => monthsArray[i].numDays,
    getMonths: () => monthsArray
};