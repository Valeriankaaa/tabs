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
                const t = getTimeRemaining(endTime);
                days.innerHTML = t.days;
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes; 
                seconds.innerHTML = t.seconds;
                if( t.total <= 0 ) {
                    clearInterval(timeInterval);
                }
            }
    }
    setClock('.timer', timeEnd);

    // modal
    const modalTriger = document.querySelectorAll('[data-modal]'), // кнопка Связаться с нами
        modal = document.querySelector('.modal'), // попап
        modalClose = document.querySelector('[data-close]'); // закрыть кнопка

        modalTriger.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow='hidden';
            });
        });

        // общая функция
        function closePopUp () {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow='';
        }
        
        // для кнопки закрыть 
        modalClose.addEventListener ('click', closePopUp);
        
        // для пространства вне попап
        modal.addEventListener ('click', (event) => {
            if (event.target === modal) {
                closePopUp ();
            }
        });

        // для клавиши escape 
        document.addEventListener('keydown', (event)=>{
            if(event.code === 'Escape') {
                closePopUp ()
            }
        });

        // для кнопки закрыть 
        // // modalClose.addEventListener('click', ()=>{
        // //     modal.classList.add('hide');
        // //     modal.classList.remove('show');
        // //     document.body.style.overflow='';
        // // });
        
        // для пространства вне поп aп
        // // modal.addEventListener('click', (event)=> {
        // //     if(event.target === modal) {
        // //         modal.classList.add('hide');
        // //         modal.classList.remove('show');
        // //         document.body.style.overflow='';
        // //     }
        // // });

        // для клавиши escape 
        // // document.addEventListener('keydown', (event)=>{
        // //     if(event.code === 'Escape') {
        // //         modal.classList.add('hide');
        // //         modal.classList.remove('show');
        // //         document.body.style.overflow='';
        // //     }
});
        