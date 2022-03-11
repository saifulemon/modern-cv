// for ripples
$(document).ready(function() {
// for ripples
    $('#profile-ripple').ripples({
        resolation: 512,
        dropRadius: 20
    })


// for progress bar
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    });



// for counter
    const counters = document.querySelectorAll('.counter');
    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;

            let target = +counter.dataset.count;
            let step = target / 100;

            let countIt = function () {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 12);
                }
                else {
                    counter.innerText = target;
                }
            }
            countIt();
        });
    }
    runCounter();

    let counterSection = document.querySelector('.counter-wrapper');

    let options = {
        rootMargin : '0px 0px -300px 0px'
    }

    let done = 0;

    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();
        } 
    }, options)
    sectionObserver.observe(counterSection);
});