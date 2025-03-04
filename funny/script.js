
const mainImage = document.getElementById('mainImage');
const nextButton = document.getElementById('nextButton');
const stopButton = document.getElementById('stopButton');

let currentImage = 1;

function showNextImage() {
    currentImage = 2;
    mainImage.src = 'images/image2.jpg'; // Update to the new image source
    nextButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
}

function showConfirmationModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
        <p>Đã bảo đừng tiếp tục rồi!</p>
        <p><b>Visiting this page implies your acceptance of my having a crush on you <3 </p>
        <button id="confirmYes">Vẫn tiếp tục</button>
        <button id="confirmNo">Thôi</button>
    `;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const confirmYes = modal.querySelector('#confirmYes');
    const confirmNo = modal.querySelector('#confirmNo');

    confirmYes.addEventListener('click', () => {
        
        document.body.removeChild(modal);
        // Redirect after logging the click
        window.open("./formycrush/index.html", '_blank'); // Change this to your desired URL
        
        logWebhook("Click continue buttom", "Your crush allow you crush her :v")
    });

    confirmNo.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}

nextButton.addEventListener('click', showNextImage);
stopButton.addEventListener('click', showConfirmationModal);
stopButton.style.display = 'none';