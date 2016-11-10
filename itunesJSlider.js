(function( $ ){
  $.fn.iCarousel = function( options ) {

    var settings = $.extend( {
      'sensivity':'20',
      'motion':'true',
      'clickToFull':'true',
      'slidesMargin':'20',
      'start':'0'
    }, options);

    var $this = $("."+this.attr("class"));

    function initialize(){
      $this.children().addClass("jc_cover");
      $this.children(".jc_cover").eq(settings.start).addClass("jc_active");
      $this.children(".jc_cover").click(function(){
        $this.children(".jc_cover").removeClass("jc_active");
        $this.children(".jc_cover").unbind("mousemove").unbind("mouseleave");
        $this.children(".jc_acrive").unbind("click");
        $(this).addClass("jc_active").removeClass("jc_left").removeClass("jc_right");
        zindex();
        reinit();
        $(this).css("z-index","200");
        $(this).css("margin-left","");
      });
      reinit();
      zindex();
    }

    function reinit(){
      var after = 0;
      var current;
      var count = $(".jc_cover").length;
      $this.children(".jc_cover").each(function(i,e){
        if($(e).hasClass("jc_active")) {current= i; return false; }
      });
      $this.children(".jc_cover").each(function(i,e){
        if(i < current){
          $(e).css("margin-left","-"+(current-i)*parseInt(settings.slidesMargin)+"px");
          $(e).removeClass("jc_right").addClass("jc_left");
        }
        else if(i>current){
          $(e).css("margin-left",(i-current)*parseInt(settings.slidesMargin)+"px");
          $(e).removeClass("jc_left").addClass("jc_right");
        }
      });
      if(settings.motion == "true"){
        $this.children(".jc_active").mousemove(function(e){
          var pos = $(this).offset();
          var elem_left = pos.left;
          var elem_top = pos.top;
          var Xinner = e.pageX - elem_left;
          var Yinner = e.pageY - elem_top;
          var eWidth = $(this).width();
          var eHeight = $(this).height();
          xPercent=Xinner*101/eWidth;
          yPercent=Yinner*101/eHeight;
          xPercent=50-xPercent;
          if(xPercent>0) xPercent=0-xPercent;
          else if(xPercent<0) xPercent=Math.abs(xPercent);
          yPercent=50-yPercent;
          if(yPercent>0) yPercent=0-yPercent;
          else if(yPercent<0) yPercent=Math.abs(yPercent);
          $this.children(".jc_active").css("transform","rotateX("+(yPercent*(settings.sensivity/(100-50)))+"deg)"+"rotateY("+(xPercent*(settings.sensivity/(100-50)))+"deg)");
        });
        $this.children(".jc_active").mouseleave(function() {
          $(".jc_active").css("transform","");
        });
      }
      if(settings.clickToFull == "true"){
        $this.children(".jc_active").click(function(){
          if($(this).hasClass("jc_full"))
            $(this).removeClass("jc_full");
          else
            $(this).addClass("jc_full");
        });
      }
      $this.children(".jc_cover").removeClass("jc_full");
    }
    function zindex(){
      var after=0;
      var count = $(".jc_cover").length;
      $this.children(".jc_cover").each(function(i,e){
        $(e).css("transition","0");
        if($(e).hasClass("jc_active")) {after= 1; return true; }
        if(after == 0)
           $(e).css("z-index",i);
        else
          $(e).css("z-index",count-i);
      });
    }
    initialize();
  };
})( jQuery );
