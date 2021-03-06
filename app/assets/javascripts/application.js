// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  $(".get_answer").click(function(){
    $(".response").toggle();
  });

  $(".close").click(function(){
    $(".lightbox").hide();
    $(".response").hide();
    $(this).parent().toggle();
  });

  $(".box").click(function(){
    $(this).text('');
    $(".color").css({
      "background-color": $(this).parent().find(".color").attr("color")
    });
    $(".lightbox").show();
    $(".answer-"+$(this).attr("box-id")).show();

  });

  $(".lightbox").click(function(){
    $(".answer").hide();
    $(".response").hide();
    $(".lightbox").hide();
  });

  $(".get_colors").click(function(){
    $(".box").each(function(){
      $(this).css({
        "background-color": $(this).parent().find(".color").attr("color")
      })
    });
    window.setTimeout(function(){
      $(".box").css({
        "background-color": "#2c3e50"
      });
    }, 2000);    
  });

});