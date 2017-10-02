    $(document).ready(function() {
      var menuitems = $('.menu-item');
      menuitems.click(function(e){
        alert(e.target.innerHTML);
      });
      menuitems.mouseenter(function(){
        $(this).addClass('menu-item-active');
      }).mouseleave(function(){
        $(this).removeClass('menu-item-active');
      });
    });