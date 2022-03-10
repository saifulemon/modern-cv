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
    })
});