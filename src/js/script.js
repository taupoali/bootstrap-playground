// JavaScript for interactivity, such as smooth scrolling, form validation, etc.

document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!'); // Simple feedback for form submission
});

// Initialize Google Map
function initMap() {
    var location = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({ position: location, map: map });
}
