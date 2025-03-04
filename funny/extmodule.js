function logWebhook(actionText, messageText) {
    const webhookUrl = 'https://webhook-test.com/f8e041fc4c441265a5c4b0135408d243';

    fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Set to no-cors
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: actionText,
            message: messageText,
            timestamp: new Date().toLocaleString('en-US', {timeZone: 'Asia/Ho_Chi_Minh'}),
        }),
    })
    .then(() => {
        console.log("Log done!");
    })
    .catch(error => console.error('Error:', error));
}