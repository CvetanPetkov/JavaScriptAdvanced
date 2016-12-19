function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let interval;

    startBtn.on('click', startTimer);
    stopBtn.on('click', stopTimer);

    function startTimer() {
        startBtn.off('click', startTimer);
        interval = setInterval(step, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        startBtn.on('click', startTimer);
    }

    function step() {
        let seconds = $('#seconds');
        let minutes = $('#minutes');
        let hours = $('#hours');

        let oldSec = Number(seconds.text());
        let oldMin = Number(minutes.text());
        let oldH = Number(hours.text());

        if (oldSec < 60) {
            if (oldSec < 9) {
                seconds.text('0' + ++oldSec);
            } else {
                seconds.text(++oldSec);
            }
        }
        else {
            if (oldMin < 9) {
                minutes.text('0' + ++oldMin);
                seconds.text('0' + '0')
            } else {
                minutes.text(++oldMin);
                seconds.text('0' + '0');
            }
        }
        if (oldMin == 60) {
            if (oldH < 9) {
                hours.text('0' + ++oldH);
                minutes.text('0' + '0');
            } else {
                hours.text(++oldH);
                minutes.text('0' + '0');
            }
        }
    }
}
