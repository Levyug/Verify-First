document.addEventListener('DOMContentLoaded', () => {
    const servicesButton = document.getElementById('services-button');
    const dropdown = document.querySelector('.dropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Toggle dropdown on services button click
    servicesButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        dropdown.classList.toggle('active'); // Toggle 'active' class to show/hide dropdown
    });

    // Close dropdown if clicking outside of it
    document.addEventListener('click', (e) => {
        if (!servicesButton.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Add click event listener to each dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior

            // Remove active class to hide dropdown
            dropdown.classList.remove('active');

            // Remove the 'selected' class from all items
            dropdownItems.forEach(item => item.classList.remove('selected'));

            // Add 'selected' class to the clicked item to make it orange
            item.classList.add('selected');
        });
    });
});
