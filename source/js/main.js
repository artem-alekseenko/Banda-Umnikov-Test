// const deadline = 'May 20 2019 00:59:59 GMT+03:00';

// function getTimeRemaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor((t / 1000) % 60);
//     const minutes = Math.floor((t / 1000 / 60) % 60);
//     const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }

// function initializeMin(id, endtime) {
//     const clock = document.getElementById(id);
//     const timeinterval = setInterval(function () {
//         const t = getTimeRemaining(endtime);
//         t.minutes > 9 ? clock.innerHTML = t.minutes : clock.innerHTML = '0' + t.minutes   
//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }, 1000);
// }


// initializeMin('min', deadline);

// function initializeSec(id, endtime) {
//     const clock = document.getElementById(id);
//     const timeinterval = setInterval(function () {
//         const t = getTimeRemaining(endtime);
//         t.seconds > 9 ? clock.innerHTML = t.seconds : clock.innerHTML = '0' + t.seconds
//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }, 1000);
// }

// initializeSec('sec', deadline);

// function initializeHours(id, endtime) {
//     const clock = document.getElementById(id);
//     const timeinterval = setInterval(function () {
//         const t = getTimeRemaining(endtime);
//         t.hours > 9 ? clock.innerHTML = t.hours : clock.innerHTML = '0' + t.hours
//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }, 1000);
// }

// initializeHours('hours', deadline);