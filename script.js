$(document).ready(function () {
    $('.buttonDogs').click(function () {
        $('.cat').hide();
        $('.dog').show();

        $('.buttonDogs').addClass('active');
        $('.buttonALL').removeClass('active');
        $('.buttonCats').removeClass('active');
    });
    $('.buttonCats').click(function () {
        $('.dog').hide();
        $('.cat').show();

        $('.buttonCats').addClass('active');
        $('.buttonALL').removeClass('active');
        $('.buttonDogs').removeClass('active');
    });
    $('.buttonALL').click(function () {
        $('.dog').show();
        $('.cat').show();

        $('.buttonALL').addClass('active');
        $('.buttonCats').removeClass('active');
        $('.buttonDogs').removeClass('active');
    });
});
