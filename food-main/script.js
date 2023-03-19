window.addEventListener('DOMContentLoaded', ()=> {
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
});