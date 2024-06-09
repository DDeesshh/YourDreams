
function updateCountdownTwo() {

    const countdownTwoDate = new Date();
    countdownTwoDate.setHours(0, 0, 0);
    countdownTwoDate.setDate(countdownTwoDate.getDate() + 1);
    countdownTwoDate.setHours(1);

    const now = new Date().getTime();
    const distance = countdownTwoDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdownTwo").innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (distance < 0) {
        clearInterval(interval);
        updateCountdownTwo();
    }
}

const intervalTwo = setInterval(updateCountdownTwo, 1000);

updateCountdownTwo();
