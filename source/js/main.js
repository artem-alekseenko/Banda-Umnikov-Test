// const deadline = 'May 25 2019 00:59:59 GMT+03:00';

// function getTimeRemaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor((t / 1000) % 60);
//     const minutes = Math.floor((t / 1000 / 60) % 60);
//     const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     return {
//         'total': t,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }

// function initializeTimer(endtime) {
//     const hoursId = document.getElementById('hours');
//     const minId = document.getElementById('min');
//     const secId = document.getElementById('sec');

//     function updateClock() {
//         const t = getTimeRemaining(endtime);
//         hoursId.innerHTML = ('0' + t.hours).slice(-2);
//         minId.innerHTML = ('0' + t.minutes).slice(-2);
//         secId.innerHTML = ('0' + t.seconds).slice(-2);
//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }
//     updateClock();
//     const timeinterval = setInterval(updateClock, 1000);
// }

// initializeTimer(deadline);