$(document).ready(function() {
    var a = $("#img1")
        b = $("#img2"),
        c = $("#img3");
    $("#cright").click(function() {
        return a.is(":visible") ? (a.animate({
            width: "toggle"
        }, 350), void b.animate({
            width: "toggle"
        }, 350)) : b.is(":visible") ? (b.animate({
            width: "toggle"
        }, 350), void c.animate({
            width: "toggle"
        }, 350)) : c.is(":visible") ? (c.animate({
            width: "toggle"
        }, 350), void a.animate({
            width: "toggle"
        }, 350)) : void 0
    }), $("#cleft").click(function() {
        return a.is(":visible") ? (a.animate({
            width: "toggle"
        }, 350), void c.animate({
            width: "toggle"
        }, 350)) : b.is(":visible") ? (b.animate({
            width: "toggle"
        }, 350), void a.animate({
            width: "toggle"
        }, 350)) : c.is(":visible") ? (c.animate({
            width: "toggle"
        }, 350), void b.animate({
            width: "toggle"
        }, 350)) : void 0
    })
});