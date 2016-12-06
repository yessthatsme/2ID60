$(document).ready(function(){

  $("#aboutInfo").hide();
  $("#studiesInfo").hide();
  $("#proInfo").hide();

  $("#jumboMe").hide();
  $("#jumboStudies").hide();
  $("#jumboPro").hide();

  $("#myCarousel2").hide();
  $("#myCarousel3").hide();

  $(".home").click(function(){
    $("#homeInfo").show();
    $("#aboutInfo").hide();
    $("#studiesInfo").hide();
    $("#proInfo").hide();

    $("#jumboHome").show();
    $("#jumboMe").hide();
    $("#jumboStudies").hide();
    $("#jumboPro").hide();

    $("#myCarousel").show();
    $("#myCarousel2").hide();
    $("#myCarousel3").hide();
  });

  $(".about").click(function(){
    $("#homeInfo").hide();
    $("#aboutInfo").show();
    $("#studiesInfo").hide();
    $("#proInfo").hide();

    $("#jumboHome").hide();
    $("#jumboMe").show();
    $("#jumboStudies").hide();
    $("#jumboPro").hide();

    $("#myCarousel").show();
    $("#myCarousel2").hide();
    $("#myCarousel3").hide();
  });

  $(".studies").click(function(){
    $("#homeInfo").hide();
    $("#aboutInfo").hide();
    $("#studiesInfo").show();
    $("#proInfo").hide();

    $("#jumboHome").hide();
    $("#jumboMe").hide();
    $("#jumboStudies").show();
    $("#jumboPro").hide();

    $("#myCarousel").hide();
    $("#myCarousel2").show();
    $("#myCarousel3").hide();
  });

  $(".projects").click(function(){
    $("#homeInfo").hide();
    $("#aboutInfo").hide();
    $("#studiesInfo").hide();
    $("#proInfo").show();

    $("#jumboHome").hide();
    $("#jumboMe").hide();
    $("#jumboStudies").hide();
    $("#jumboPro").show();

    $("#myCarousel").hide();
    $("#myCarousel2").hide();
    $("#myCarousel3").show();
  });

  $(".contact").click(function(){
    $("html, body").animate({ scrollTop: $("#contact").offset().top }, 1000);
  });

  $(".pschool").click(function(){
    $(".pschoolfoto").slideToggle("fast", function(){});
  });

  $(".sschool").click(function(){
    $(".sschoolfoto").slideToggle("fast", function(){});
  });

  $(".uschool").click(function(){
    $(".uschoolfoto").slideToggle("fast", function(){});
  });

  $(".Awbb0").click(function(){
    $(".Awbb0foto").slideToggle("fast",function(){});
  });
});

$(document).on('click',function(){
  $('.collapse').collapse('hide');
});
