// Function to update the year dropdown
function updateYearDropdown(era, years) {
    const yearDropdown = document.getElementById('yearDropdown');

    // Clear the current year dropdown
    yearDropdown.innerHTML = '';

    // Populate the dropdown with years based on the selected era
    for (let i = 1; i <= years; i++) {
        let yearLink = document.createElement('a');
        yearLink.href = '#';
        yearLink.textContent = i;
        yearDropdown.appendChild(yearLink);
    }

    // Log the selected era (optional)
    console.log('Selected Era: ' + era);
}