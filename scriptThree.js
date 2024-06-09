function updateCountdownThree() {

    const countdownThreeDate = new Date();
    countdownThreeDate.setHours(0, 0, 0); 
    countdownThreeDate.setDate(countdownThreeDate.getDate() + 1); 
    countdownThreeDate.setHours(1);

    const now = new Date().getTime();
    const distance = countdownThreeDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdownThree").innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (distance < 0) {
        clearInterval(interval);
        updateCountdownThree();
    }
}

const intervalThree = setInterval(updateCountdownThree, 1000);

updateCountdownThree();
