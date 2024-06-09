// Функция для обновления отображения отсчета времени
function updateCountdown() {

    // Устанавл. даты, к которой нужно выполнить отсчет
    const countdownDate = new Date();
    countdownDate.setHours(0, 0, 0); // Устанавл. время 00:00:00
    countdownDate.setDate(countdownDate.getDate() + 1); // Устанавл. следующий день
    countdownDate.setHours(1);

    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Вычисл. оставшееся время в часах, минутах и секундах
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отображ. оставшееся время
    document.getElementById("countdown").innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Если отсчет закончился, то перезапуск
    if (distance < 0) {
        clearInterval(interval);
        updateCountdown(); // Запуск отсчета заново
    }
}

// Обновл. отображения отсчета времени каждую секунду
const interval = setInterval(updateCountdown, 1000);

updateCountdown();








