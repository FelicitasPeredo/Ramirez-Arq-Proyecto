const images = [
    { "url": "https://example.com/image1.jpg" },
    { "url": "https://example.com/image2.jpg" },
    { "url": "https://example.com/image3.jpg" },
    { "url": "https://example.com/image4.jpg" },
    { "url": "https://example.com/image5.jpg" },
    { "url": "https://example.com/image6.jpg" }
]

// Main function to load images into the container
async function loadImages(images) {
    const container = document.getElementById('image-gallery');
    try {
        console.log(images)
        // const response = await fetch('./deco-gallery.json');
        // const images = await response.json();
        // Iterate over the images array in chunks of 3
        for (let i = 0; i < images.length; i += 3) {
            const imageGroup = images.slice(i, i + 3);
            container.appendChild(createImageSection(imageGroup));
        }
    } catch (error) {
        console.error('Error fetching the images:', error);
    }
}

// Function to create a section with images
function createImageSection(imageList) {
    // Create a section element
    const section = document.createElement('section');
    section.setAttribute('class', 'row')

    // Add images to the section
    section.innerHTML = "";
    imageList.forEach(e => {
        section.innerHTML+=`
        <div class="proy-grid-item col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div>
                <img src="${e.url}" class="img-casas">
            </div>
        </div>`;
    })

    return section;
}

// Load images on page load
document.addEventListener('DOMContentLoaded', loadImages(images));