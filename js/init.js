$(document).ready(function() {

    lightTheme()
        // darkTheme()















    $('select').select2({
        //width: '200px',
        dropdownAutoWidth: true

    });

    setLayouts('sm');

    var myTabs = tabs({
        el: '#tabs',
        tabNavigationLinks: '.c-tabs-nav__link',
        tabContentContainers: '.c-tab'
    });
    myTabs.init();
});


showProperties();