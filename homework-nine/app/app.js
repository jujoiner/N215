import * as MODEL from "../model/model.js";

function init(){
    
    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";



        console.log("clicked " + btnId);
        console.log(contentId);
        //console.log(cupsContent);
        MODEL.getPageContent(contentId);
        //$("#app").append(btnId);
        //$("#app").prepend(btnId);
        elemButtonListener();
    });

   
    // console.log("thar be a draft " + userName);
}

function elemButtonListener(){
    $(".elements a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";

        console.log("clicked " + btnId);
        console.log(contentId);
        //console.log(cupsContent);
        MODEL.getPageContent(contentId);
        //$("#app").append(btnId);
        //$("#app").prepend(btnId);
    });
}
//this checks for all Elements in the browser
$(document).ready(function(){
    elemButtonListener();
    init();
    MODEL.getPageContent("homeContent");
});