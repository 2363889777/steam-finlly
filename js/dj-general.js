!function () {
    // 设置二级导航下拉条鼠标悬浮事件
    let dropdown_menu = $('#dj-gsmm-software .dropdown-menu');
    let dropdown_menu_hardware = $('#dj-gsmm-hardware .dropdown-menu');
    let dropdown_menu_game = $('#dj-gsmm-game .dropdown-menu');
    let dropdown_menu_shop = $('#dj-gsmm-shop .dropdown-menu');

    $('#dj-gsmm-shop').hover(function () {
        dropdown_menu_shop.removeClass('hidden');
        dropdown_menu_shop.addClass('show');
    },function () {
        dropdown_menu_shop.removeClass('show');
        dropdown_menu_shop.addClass('hidden');
    });

    $('#dj-gsmm-software').hover(function () {
        dropdown_menu.removeClass('hidden');
        dropdown_menu.addClass('show');
    },function () {
        dropdown_menu.removeClass('show');
        dropdown_menu.addClass('hidden');
    });

    $('#dj-gsmm-hardware').hover(function () {
        dropdown_menu_hardware.removeClass('hidden');
        dropdown_menu_hardware.addClass('show');
    },function () {
        dropdown_menu_hardware.removeClass('show');
        dropdown_menu_hardware.addClass('hidden');
    });

    $('#dj-gsmm-game').hover(function () {
        dropdown_menu_game.removeClass('hidden');
        dropdown_menu_game.addClass('show');
    },function () {
        dropdown_menu_game.removeClass('show');
        dropdown_menu_game.addClass('hidden');
    });

    $('.dj-general-second-main-menu .dropdown-menu').addClass('border');
    // $('#dj-gsmm-software').hover(function () {
    //     dropdown_menu.dropdown('toggle');
    // },function () {
    //     console.log('aaa');
    //     $('#dj-gsmm-software .dropdown-menu')[].dropdown('dispose');
    // })
}();
