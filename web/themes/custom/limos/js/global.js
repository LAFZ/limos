/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {

      $('.page-node-1 .carousel').wrap('<div class="col-12 col-md-10 col-lg-8" />');
      $('.path-node .node--type-page').addClass('row');

var classes = ['random1','random2', 'random3']; //add as many classes as u want
var randomnumber = Math.floor(Math.random()*classes.length);
$('body').addClass(classes[randomnumber]);

$('.path-galerias #block-sass-starterkit-content').append("<div id='blueimp-gallery' class='blueimp-gallery'><div class='slides' /><h3 class='title' /><a class='prev'>‹</a><a class='next'>›</a><a class='close'>×</a><a class='play-pause' /><ol class='indicator' /></div>");
$('.view-galerias').attr('id', 'links');

$('.triple .view-content').addClass('ml-sm-1 mr-sm-1');
$('.image-style-categoriapizza').addClass('img-thumbnail');
$('#flexslider-2>.flex-viewport>.slides> li').addClass('col-md-3');
$('#flexslider-2>.flex-viewport>.slides> li').attr('id','imaCarrusel');
$('#main-wrapper> #main >.row-offcanvas-left').addClass('col-md-12');
$('#imgProducto >.preview-pic >div >.image-style-medium').addClass('img-thumbnail');
console.log(window.location);

if (window.location.pathname!="/limos/web/") {
  $('#main-wrapper> #main >.row-offcanvas-left >.main-content').addClass('col-md-12');
    $(".navbar").attr("style",' position: relative; margin-top: 0%;');
    $(".navbar").addClass("myheader");
    $("#header").addClass("myheader");
}
if (window.location.pathname=="/limos/web/product/*") {
    $(".site-footer").addClass('myfooter');
}
document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};


    }
  };

})(jQuery, Drupal);
