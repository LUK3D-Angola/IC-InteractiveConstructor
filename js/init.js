$(document).ready(function() {

    //lightTheme()
        // darkTheme()




    //Reference: https://jeesite.gitee.io/front/jquery-select2/4.0/index.htm
    $('select').select2({
        //width: '200px',
        dropdownAutoWidth: true,
        placeholder: 'Selecione',
        tags: true,
        //allowClear: true,
        tokenSeparators: [',', ' ']

    });





    setLayouts('sm');

    var myTabs = tabs({
        el: '#tabs',
        tabNavigationLinks: '.c-tabs-nav__link',
        tabContentContainers: '.c-tab'
    });
    myTabs.init();

    $(AddComponent(null, "div")).width("100%").height("100vh");
});


showProperties();