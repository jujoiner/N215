import * as MODEL from "../model/model.js";

function init(){
    $("nav a").click(function(e){
        let btnId = this.id;
        let contentID = btnId + "Content";
        if (btnId == "home") {
            $("nav").removeClass("other");
            $(".heading").css("display", "block");
            $(".hero-remove").addClass("hero");
            $("#black").css("display", "none");
            $("#white").css("display", "block");
            MODEL.getPageContent(contentID, addPromoListeners);
        } else if (btnId == "tours") {
            otherPages();
            MODEL.getPageContent(contentID, addPromoListeners);
        } else {
            otherPages();
            MODEL.getPageContent(contentID);
        }
    })
}

function addPromoListeners() {
    $(".promo button a").click(function(e){
        let promoId = this.id;
        let promoContent = promoId + "Content";
        otherPages();
        MODEL.getPageContent(promoContent);
    })
}

function otherPages() {
    $("nav").addClass("other")
    $(".hero-remove").removeClass("hero");
    $(".heading").css("display", "none");
    $("#white").css("display", "none");
    $("#black").css("display", "block");
}

$(document).ready(function(){
    init();
    MODEL.getPageContent("homeContent", addPromoListeners);
})