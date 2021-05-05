import * as MODEL from "../model/model.js";

function init() {
  $("nav a").click(function (e) {
    let btnId = this.id;
    let contentID = btnId + "Content";
    if (btnId == "home") {
      $("nav").removeClass("black-nav");
      $(".heading").css("display", "flex");
      $(".hero-remove").addClass("hero");
      $(".black").css("display", "none");
      $(".white").css("display", "block");
      MODEL.getPageContent(contentID, addHomeBlogListeners);
    } else if (btnId == "gallery") {
      otherPages();
      MODEL.getPageContent(contentID, addGalleryListeners);
    } else if (btnId == "blog") {
      otherPages();
      MODEL.getPageContent(contentID, addBlogListeners);
    } else {
      otherPages();
      MODEL.getPageContent(contentID);
    }
  });
}

function addGalleryListeners() {
  $(".galleries a").click(function (e) {
    let galleryId = this.id;
    let galleryContent = galleryId + "Content";
    otherPages();
    MODEL.getPageContent(galleryContent);
  });
}

function addBlogListeners() {
  $(".blogs a").click(function (e) {
    let blogId = this.id;
    let blogContent = blogId + "Content";
    otherPages();
    MODEL.getPageContent(blogContent);
  });
}

function addHomeBlogListeners() {
  $(".event-dates a").click(function (e) {
    let blogId = this.id;
    let blogContent = blogId + "Content";
    otherPages();
    MODEL.getPageContent(blogContent);
  });
}

function otherPages() {
  $("nav").addClass("black-nav");
  $(".hero-remove").removeClass("hero");
  $(".heading").css("display", "none");
  $(".white").css("display", "none");
  $(".black").css("display", "block");
}

$(document).ready(function () {
  init();
  MODEL.getPageContent("homeContent", addHomeBlogListeners);
});
