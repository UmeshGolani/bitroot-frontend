export const convertDate = (date) =>{
    // Unix timestamp
var timestamp = 1606311631;

// Create a new Date object with the timestamp in milliseconds
var date = new Date(timestamp * 1000);

// Options for formatting the date
var options = { month: 'short', day: '2-digit', year: 'numeric' };

// Format the date as "Nov 25, 2020"
var formattedDate = date.toLocaleDateString('en-US', options);

return formattedDate;
}