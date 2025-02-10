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
        const webhookUrl = 'https://webhook.site/8e2b244c-4311-4098-bc25-e5ececbe423b';

        fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors', // Set to no-cors
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                button: 'Confirm Continue',
                redirect: 'For My Crushhh',
                timestamp: new Date().toLocaleString('en-US', {timeZone: 'Asia/Ho_Chi_Minh'}),
            }),
        })
        .then(() => {
            // Redirect after logging the click
            window.open("./formycrush/index.html", '_blank'); // Change this to your desired URL
        })
        .catch(error => console.error('Error:', error));
    });

    confirmNo.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}

nextButton.addEventListener('click', showNextImage);
stopButton.addEventListener('click', showConfirmationModal);
stopButton.style.display = 'none';