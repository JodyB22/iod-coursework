function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20000) + 1000; 
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(`Success! Delay was ${delay}ms.`);
            } else {
                reject(`Failure! Delay was ${delay}ms.`);
            }
        }, delay);
    });
}


randomDelay()
    .then(message => console.log(`✅ Resolved: ${message}`))
    .catch(error => console.error(`❌ Rejected: ${error}`));
