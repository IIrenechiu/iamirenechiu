
//hamburger
$(document).ready(function() {
   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
});

let target = document.getElementById("header-content");
let button = document.getElementById("hamburger");

button.addEventListener("click", function (event) {
  target.classList.toggle("header-content_active");
});

// $(document).ready(function(){
//  $('.showmenu').on('click',  function(e){
//       e.preventDefault();
//   $("content").hide();

//   });
// });

$(document).ready(function(){
  $("contentpic").click(function(){
    $("content").css({" overflow":"hidden"});
  });
});

//tab-innerwrap
$(function(){
    var _showTab = 0;
    var $li = $('ul.tab-title li');
        $($li. eq(_showTab) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
        
        $li.mouseover(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });


    var amount = '';
    function scroll() {
        $('.nav').animate({
            scrollLeft: amount
        }, 100, 'linear',function() {
            if (amount != '') {
                scroll();
            }
        });
    }
    $('.arrow-right').hover(function() {
        amount = '+=40';
        scroll();
    }, function() {
        amount = '';
    });
    $('.arrow-left').hover(function() {
        amount = '-=40';
        scroll();
    }, function() {
        amount = '';
    });
    });


//maincontent
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

//overlay
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(document).ready(function() {
  $(`.contentpic`).click(function() {
    $(this).parent().children(".overlay").fadeIn(600);

  });

  $(`.close,.overlay`).click(function() {
    $(".overlay").fadeOut('600', function() {
      
    });
  });

});






