$(document).ready(function () {
    // About 팝업 열기 & 닫기
    $(".about").click(function () {
        $(".pop_bg_about").addClass("active");
    });

    $(".close_about").click(function () {
        $(".pop_bg_about").removeClass("active");
    });

    // 탬버린즈 팝업 열기 & 닫기
    $(".item1").click(function () {
        $(".pop_bg_tamburins").addClass("active");
    });

    $(".close_tamburins").click(function () {
        $(".pop_bg_tamburins").removeClass("active");
    });

    // 티켓링크 팝업 열기 & 닫기
    $(".item2").click(function () {
        $(".pop_bg_ticketlink").addClass("active");
    });

    $(".close_ticketlink").click(function () {
        $(".pop_bg_ticketlink").removeClass("active");
    });

    // 팝업 바깥 클릭 시 닫기
    $(".pop_bg").click(function (e) {
        if ($(e.target).hasClass("pop_bg")) {
            $(this).removeClass("active");
        }
    });
});

