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



    // portfolio gallery
    let $wrapper = $('.portfolio');

    // initialize isotope
    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationsOption : {
            duration : 750,
            easing : 'leniar'
        }

    });

    let links = document.querySelectorAll('.tabs a');
    links.forEach(link => {

        let selector = link.dataset.filter;

        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationsOption : {
                    duration : 750,
                    easing : 'leniar'
                } 
            });

            links.forEach(link => {
                link.classList.remove('active');
            });
            e.target.classlist.add('active');
        });
    });



    // magnify pop up
    $('.magnify').magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        },
        zoom : {
            enable : true
        }
    })

    
});