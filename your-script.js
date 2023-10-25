// Function to show the popup
function showLocationPopup() {
    const popup = document.getElementById('locationPopup');
    popup.style.display = 'block';
  }
  
  // Function to handle user's choice
  function handleLocationPermission() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        // You can replace the alert with any other functionality to use the user's location.
      },
      function (error) {
        alert('Error getting location: ' + error.message);
      }
    );
  
    // Hide the popup
    const popup = document.getElementById('locationPopup');
    popup.style.display = 'none';
  }
  
  // Event listener for the "Allow Your Location" button
  const allowLocationBtn = document.getElementById('allowLocationBtn');
  allowLocationBtn.addEventListener('click', handleLocationPermission);
  
  // Show the popup when the user visits the website
  showLocationPopup();
  