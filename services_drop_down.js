document.addEventListener('DOMContentLoaded', () => {
    const servicesButton = document.getElementById('services-button');
    const dropdown = document.querySelector('.dropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    servicesButton.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!servicesButton.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            dropdown.classList.remove('active');

            dropdownItems.forEach(item => item.classList.remove('selected'));

            item.classList.add('selected');

            window.location.href = 'services.html';
        });
    });
});
