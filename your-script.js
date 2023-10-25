// Function to show the location popup
function showLocationPopup() {
    const locationPopup = document.getElementById('locationPopup');
    locationPopup.style.display = 'block';
}

// Function to check if the user has allowed location
function checkLocationPermission() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // User allowed location
            alert("Location enabled!");
        }, function(error) {
            // User denied location
            alert("You must allow location to access the website.");
            window.location = "about:blank"; // Redirect to a blank page
        });
    }
}

// Add an event listener to the button
const getLocationButton = document.getElementById('getLocationButton');
getLocationButton.addEventListener('click', checkLocationPermission);

// Check if the user has already granted location permission
if ("geolocation" in navigator) {
    navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
        if (result.state === 'granted') {
            // User has already granted location permission
            alert("Location enabled!");
        } else {
            // User hasn't granted permission, show the location popup
            showLocationPopup();
        }
    });
}
