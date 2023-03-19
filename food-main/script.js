window.addEventListener('DOMContentLoaded', ()=> {
    // tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsFolder = document.querySelector('.tabheader');

    function hideTabsContent () {
        tabsContent.forEach ( item => {
            item.style.display = 'none';
            });
        tabs.forEach (item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabsContent (i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent ();

    tabsFolder.addEventListener ('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabsContent();
                    showTabsContent (i);
                }
            });
        }
    });

    // timer 
    const timeEnd = '2023-03-31';
    function getTimeRemaining (finishTime) {
        const t = Date.parse(finishTime) - Date.parse (new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor ((t / 1000 / 60) % 60),
            seconds = Math.floor ( (t/1000) % 60);
        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes, 
            'seconds' : seconds
        }
    }
    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
            updateClock();
            
        function updateClock() {
                const time = getTimeRemaining(endTime);
                days.innerHTML = time.days;
                hours.innerHTML = time.hours;
                minutes.innerHTML = time.minutes; 
                seconds.innerHTML = time.seconds;
                if( t.total <= 0 ) {
                    clearInterval(timeInterval);
                }
            }
    }
    setClock('.timer', timeEnd);
});