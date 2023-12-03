$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav ul').toggleClass('show');
    });

    // Fecha o menu ao clicar em um link
    $('nav ul li a').click(function () {
        $('nav ul').removeClass('show');
    });
});

