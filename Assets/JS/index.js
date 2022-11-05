// Navbar
function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    setTimeout(function(){ test(); });
  });

  // Spearker

  $(function()
  {

       var showcase = $("#showcase")

       showcase.Cloud9Carousel( {
             yPos: 42,
             yRadius: 48,
             mirrorOptions: {
                   gap: 12,
                   height: 0.2
             },
             buttonLeft: $(".icon > .left"),
             buttonRight: $(".icon > .right"),
             autoPlay: true,
             bringToFront: true,

             onRendered: showcaseUpdated,
             onLoaded: function() {
                   showcase.css( 'visibility', 'visible' )
                   showcase.css( 'display', 'none')
                   showcase.fadeIn( 1500 )
             }
       })

       function showcaseUpdated( showcase ) 
       {
             var title = $("#item-title").html(
                   $(showcase.nearestItem()).attr( 'alt' )
             )

             var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI)
             title.css('opacity', 0.5 + (0.5 * c))
       }

       $('.icon > button').click( function( e ) {
             var b = $(e.target).addClass( 'down' )
             setTimeout( function() { b.removeClass( 'down' ) }, 80)
       } )

       $(document).keydown( function( e ) {
             switch( e.keyCode ) {
                   case 37:
                   $('.icon > .left').click()
                   break

                   case 39:
                   $('.icon > .right').click()
             }
       })
 })