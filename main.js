document.addEventListener('DOMContentLoaded', function () {
    var newsletterForm = document.querySelector('.sidebar-newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    }
});
