// Get today's date
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString(undefined, options);

// Display the date in the paragraph
document.getElementById('dateDisplay').textContent = formattedDate;