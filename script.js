window.onload = function() {
    // Hide the loading spinner
    var loadingSpinner = document.getElementById('loading');
    loadingSpinner.remove()

    // Show the main content
    var elements = document.getElementsByName('content');
    elements.forEach(element => {
        element.style.display = 'block';
    });
};