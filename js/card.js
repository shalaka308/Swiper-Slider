$(document).ready(function () {
    $(".card-li").click(function () {
        var li_class = $(this).attr('class');
        //console.log(li_class);
        $(".card-li").removeClass('active-li');
        var cardsec = $(this).attr("id");
        $(this).addClass("active-li");
        $(".card-wrap #" + cardsec).fadeIn(1000).siblings().hide();
        // $('#image-content').addClass("hidden");
    });
});