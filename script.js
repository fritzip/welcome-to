var posx;var posy;
var actions = [];
var numbers = [];
var img=new Image();

function capmouse(e) {
  // captures the mouse position
  posx = 0; posy = 0;
  if (!e){var e = window.event;}

  if (e.pageX || e.pageY){
    posx = e.pageX;
    posy = e.pageY;
  }
  else if (e.clientX || e.clientY){
    posx = e.clientX;
    posy = e.clientY;
  }
}

function showP(){
  console.log('{ \'x\' : '+posx/$("#scoresheet").width()+', \'y\' : '+posy/$("#scoresheet").height()+' },');
}

var xscale = 100.2;
var yscale = 100;

function initHouses() {
  for (var row in houses) {
    for (var i in houses[row]) {
      $("#widget-container").append(`<div id='house-${row}-${i}' class='house widget' data-row='${row}' style='left:${xscale*houses[row][i].x}%;top:${yscale*houses[row][i].y}%;'><input type="number" min="0" max="17"></div>`);
    }
  }
}

function initBonus() {
  for (var i in bonus_scores) {
    $("#widget-container").append(`<div id='bonus-${i}' class='total-score bonus-score widget' style='left:${xscale*bonus_scores[i].x}%;top:${yscale*bonus_scores[i].y}%;'><span></span></div>`);
  }
};

function initParks() {
  var extraClass = "";
  var row = -1;
  for (var i in parks) {
    if(row != parks[i].row) {
      row = parks[i].row;
      extraClass = "checkable";
    }
    $("#widget-container").append(`<div id='park-${i}' class='park widget ${extraClass}' style='left:${xscale*parks[i].x}%;top:${yscale*parks[i].y}%;' data-row='${parks[i].row}' data-score='${parks[i].score}'></div>`);
    extraClass = "";
  }
  for (var i in park_scores) {
    $("#widget-container").append(`<div id='park-score-${i}' class='total-score park-score widget' style='left:${xscale*park_scores[i].x}%;top:${yscale*park_scores[i].y}%;'><span></span></div>`);
  }
}

function updateParkScores() {
  for (var row in park_scores) {
    var last_checked = $(".park[data-row='" + row +"'].check:last");
    if($(last_checked).length==0) {
      $("#park-score-"+row+">span").text(0);
    } else {
      $("#park-score-"+row+">span").text($(last_checked).data('score'));
    }
  }
}

function initPools() {
  for (var i in pools) {
    $("#widget-container").append(`<div id='pool-${i}' class='pool widget checkable' style='left:${xscale*pools[i].x}%;top:${yscale*pools[i].y}%;'></div>`);
  }
  for (var i in pools_checks) {
    $("#widget-container").append(`<div id='pool-check-${i}' class='pool-check widget' style='left:${xscale*pools_checks[i].x}%;top:${yscale*pools_checks[i].y}%;'></div>`);
  }
}

function initFences() {
  for (var row in fences) {
    for (var i in fences[row]) {
      $("#widget-container").append(`<div id='fence-${row}-${i}' class='fence widget' data-row='${row}' style='left:${xscale*fences[row][i].x}%;top:${yscale*fences[row][i].y}%;'></div>`);
    }
  }
}

function initWorkSigns() {
  for (var i in worksigns) {
    $("#widget-container").append(`<div id='work-${i}' class='work widget checkable' style='left:${xscale*worksigns[i].x}%;top:${yscale*worksigns[i].y}%;'></div>`);
  }
  for (var i in worksigns_radio) {
    $("#widget-container").append(`<div id='work-score-${i}' class='work-score widget checkable' data-score='${worksigns_radio[i].score}' style='left:${xscale*worksigns_radio[i].x}%;top:${yscale*worksigns_radio[i].y}%;'><span></span></div>`);
  }
}

function initLandPrices() {
  var extraClass = "";
  var col = 99;
  for (var i in landprices) {
    if(col != landprices[i].col) {
      col = landprices[i].col;
      extraClass = "checkable";
    }
    $("#widget-container").append(`<div id='landprice-${i}' class='landprice widget ${extraClass}' data-col='${landprices[i].col}' data-score='${landprices[i].score}' style='left:${xscale*landprices[i].x}%;top:${yscale*landprices[i].y}%;'></div>`);
    extraClass = "";
  }
  for (var i in landcounters) {
    $("#widget-container").append(`<div id='landcounter-${i}' class='landcounter widget' style='left:${xscale*landcounters[i].x}%;top:${yscale*landcounters[i].y}%;'><span></span></div>`);
  }
}

function updateLandScores() {
  for(var col in landcounters) {
    var last_checked = $(".landprice[data-col='" + col +"'].check:last");
    if($(last_checked).length==0) {
      $("#landprice-score-"+col+">span").text(landprices_score[col]*Number($("#landcounter-" + col + ">span").text()));
    } else {
      $("#landprice-score-"+col+">span").text($(last_checked).data('score')*Number($("#landcounter-" + col + ">span").text()));
    }
  }    
}

function initBis() {
  var extraClass = "";
  for (var i in bis) {
    if (i==0) {
      extraClass = "checkable";
    }
    $("#widget-container").append(`<div id='bis-${i}' class='bis widget ${extraClass}' style='left:${xscale*bis[i].x}%;top:${yscale*bis[i].y}%;'></div>`);
    extraClass = "";
  }
}

function initCantplay() {
  var extraClass = "";
  for (var i in cantplay) {
    if (i==0) {
      extraClass = "checkable";
    }
    var res = $("#widget-container").append(`<div id='cantplay-${i}' class='cantplay widget ${extraClass}' data-score='${cantplay[i].score}' style='left:${xscale*cantplay[i].x}%;top:${yscale*cantplay[i].y}%;'></div>`);
    extraClass = "";
  }
}

function initScores() {
  for (var i in total_scores) {
    $("#widget-container").append(`<div id='${total_scores[i].id}' class='total-score widget' style='left:${xscale*total_scores[i].x}%;top:${yscale*total_scores[i].y}%;'><span></span></div>`);
  }
}

function updateLandCounter() {
  $(".landcounter>span").each(function() {
    $(this).text(0);
  });

  var inHousingEstate;
  var housingEstateSize;
  for (var row=0; row < 3; ++row ) {
    inHousingEstate = true;
    housingEstateSize = 0;
    var housesDOM = $(".house[data-row='" + row +"']>input").get();
    var fencesDOM = $(".fence[data-row='" + row +"']").get();
    for (var i=0; i<housesDOM.length; ++i) {
      if($(housesDOM[i]).val()) {
        housingEstateSize++;
      } else {
        inHousingEstate = false;
      }
      if($(fencesDOM[i]).hasClass("checked") || (typeof fencesDOM[i] == 'undefined')) {
        if (inHousingEstate && housingEstateSize < 7) {
          housingEstateSize--;
          $("#landcounter-"+housingEstateSize+">span").text(parseInt($("#landcounter-"+housingEstateSize+">span").text()) + 1);
        }
        housingEstateSize = 0;
        inHousingEstate = true;
      }
    }
  }
  updateLandScores();
  updateTotalScore();
}

function updateTotalScore() {
  var sum = 0;
  sum+= Number($("#bonus-score>span").text());
  sum+= Number($("#park-score>span").text());
  sum+= Number($("#pool-score>span").text());
  sum+= Number($("#work-score>span").text());
  sum+= Number($("#landprice-score-0>span").text());
  sum+= Number($("#landprice-score-1>span").text());
  sum+= Number($("#landprice-score-2>span").text());
  sum+= Number($("#landprice-score-3>span").text());
  sum+= Number($("#landprice-score-4>span").text());
  sum+= Number($("#landprice-score-5>span").text());
  sum-= Number($("#bis-score>span").text());
  sum-= Number($("#cantplay-score>span").text());
  $('#total-score>span').text(sum);
}

function shuffle(array, seed) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(random(seed) * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    ++seed
  }

  return array;
}

function random(seed) {
  var x = Math.sin(seed++) * 10000; 
  return x - Math.floor(x);
}

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

function renderCards() {
  var i = $("#round").val();
  $("#action1").attr("src","assets/"+actions[i*3]+".png");
  $("#action2").attr("src","assets/"+actions[i*3 + 1]+".png");
  $("#action3").attr("src","assets/"+actions[i*3 + 2]+".png");
  $("#number1").text(numbers[i*3]);
  $("#number2").text(numbers[i*3 + 1]);
  $("#number3").text(numbers[i*3 + 2]);
  $("#number1").nextAll(':lt(2)').attr("src","assets/"+actions[i*3 + 3]+"-ico.png");
  $("#number2").nextAll(':lt(2)').attr("src","assets/"+actions[i*3 + 4]+"-ico.png");
  $("#number3").nextAll(':lt(2)').attr("src","assets/"+actions[i*3 + 5]+"-ico.png");
}

function renderBonus() {
  $(".bonus-card").each(function() {
    $(this).attr("src","assets/bonus/bonus"+$(this).data("row")+"r"+$(this).data("number")+".jpg");
  });
}

function generateDeck() {
  var seed = Number($("#seed").val());
  numbers = [];
  for(i of Object.keys(datas.numbers)) {
    for(let j = 0; j < datas.numbers[i]; j++) {
      numbers.push(i);
    }
  }
  
  actions = [];
  for(action of Object.keys(datas.actions)) {
    for(let j = 0; j < datas.actions[action]; j++) {
      actions.push(action);
    }
  }
  shuffle(numbers, seed);
  shuffle(actions, seed*3);

  numbers_next_seed = [];
  for(i of Object.keys(datas.numbers)) {
    for(let j = 0; j < datas.numbers[i]; j++) {
      numbers_next_seed.push(i);
    }
  }
  
  actions_next_seed = [];
  for(action of Object.keys(datas.actions)) {
    img.src="assets/"+action+".png";
    for(let j = 0; j < datas.actions[action]; j++) {
      actions_next_seed.push(action);
    }
  }
  shuffle(numbers_next_seed, seed+1);
  shuffle(actions_next_seed, seed*3+1);
  numbers.push(...numbers_next_seed);
  actions.push(...actions_next_seed);

  $("#bonus1").data("number",Math.floor(random(seed)*6 + 1));
  $("#bonus2").data("number",Math.floor(random(seed*13 + 3)*6 + 1));
  $("#bonus3").data("number",Math.floor(random(seed*7 - 23)*6 + 1));
  renderCards();
  renderBonus();
}
  
function set_viewport_height() {
  // We execute the same script as before
  let vh = $("#boardgame-img").height() * 0.01;
  $(document.documentElement).css('--vh', `${vh}px`);
  //document.documentElement.style.setProperty('--vh', `${vh}px`);
}

$( window ).resize(set_viewport_height);

$( document ).ready(function() {
    initHouses();
    initBonus();
    initParks();
    initPools();
    initFences();
    initWorkSigns();
    initLandPrices();
    initBis();
    initCantplay();
    initScores();

    $("#seed").val(Math.floor((Math.random() * $("#seed").attr("max")) + 1));
    generateDeck();

    $("#widget-container").append(`<div id=cityname class='widget' style='left:${xscale*cityname.x}%;top:${yscale*cityname.y}%;'>
      <div contenteditable="true" spellcheck="false" placeholder="your perfect home"></div>
    </div>`);

    $( ".house>input" ).on('input',function() {
      console.log($(this).parent().attr('id'));
      updateLandCounter();
    });

    /*$(".bonus>input").on('input',function(){
      var sum = 0;
      $('.bonus>input').each(function() {
          sum += Number($(this).val());
      });
      $('#bonus-score>span').text(sum);
      updateTotalScore();
    });*/

    $(".bonus-check").click(function() {
      var result = $(this).toggleClass("check");
      var sibling = $(this).siblings(".bonus-check");
      if($(sibling).hasClass("check")) {
        $(sibling).removeClass("check");
      }
      
      var bonus_card = $(this).siblings("img");
      var row = Number($(bonus_card).data("row")) - 1;
      if (result.hasClass('check')) {
        var number = Number($(bonus_card).data("number")) - 1;
        var bonus_id = $(this).hasClass("bonus-check-1") ? 0 : 1;
        $("#bonus-"+row+">span").text(bonus_cards_scores[row][number][bonus_id]);
      } else {
        $("#bonus-"+row+">span").text(0);
      }

      var sum = 0;
      $('.bonus-score>span').each(function() {
          sum += Number($(this).text());
      });
      $('#bonus-score>span').text(sum);
      updateTotalScore();
    });

    $(".park").click(function() {
      var row = $(this).data("row");
      var first_unchecked = $(".park[data-row='" + row +"']:not(.check):first");
      var last_checked = $(".park[data-row='" + row +"'].check:last");
        
      if (($(this).hasClass('check') && $(last_checked).data('score') === $(this).data('score')) || (!$(this).hasClass('check') && $(first_unchecked).data('score') == $(this).data('score'))) {
        $(this).toggleClass("check");

        $(".park[data-row='" + row +"']").each(function(){$(this).removeClass("checkable");});
        $(".park[data-row='" + row +"']:not(.check):first").addClass("checkable");
        $(".park[data-row='" + row +"'].check:last").addClass("checkable");

        updateParkScores();
      } else {
        return false;
      }

      var sum = 0;
      $('.park-score>span').each(function() {
          sum += Number($(this).text());
      });
      $('#park-score>span').text(sum);
      updateTotalScore();
    });

    $(".pool").click(function() {
      var result = $(this).toggleClass("check");
      if (result.hasClass('check')) {
        $(".pool-check:not(.check):first").toggleClass("check");
      } else {
        $(".pool-check.check:last").toggleClass("check");
      }
      $("#pool-score>span").text(pool_scores[$(".pool-check.check").length]);
      updateTotalScore();
    });

    $(".fence").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
      updateLandCounter();
    });

    $(".work").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("check");
    });

    $(".work-score").click(function() {
      var result = $(this).toggleClass("check");
      if (result.hasClass("check")) {
        $('.work-score').not(this).each(function(){
          $(this).removeClass("check");
        });
        $("#work-score>span").text($(this).data('score'));
      } else {
        $("#work-score>span").text(0);
      }
      updateTotalScore();
    });

    $(".landprice").click(function() {
      //console.log($(this).attr('id'));
      //$(this).toggleClass("check");
      var col = $(this).data("col");
      var first_unchecked = $(".landprice[data-col='" + col +"']:not(.check):first");
      var last_checked = $(".landprice[data-col='" + col +"'].check:last");
        
      if (($(this).hasClass('check') && $(last_checked).data('score') === $(this).data('score')) || (!$(this).hasClass('check') && $(first_unchecked).data('score') == $(this).data('score'))) {
        $(this).toggleClass("check");

        $(".landprice[data-col='" + col +"']").each(function(){$(this).removeClass("checkable");});
        $(".landprice[data-col='" + col +"']:not(.check):first").addClass("checkable");
        $(".landprice[data-col='" + col +"'].check:last").addClass("checkable");

        updateLandScores();
      } else {
        return false;
      }
      updateTotalScore();
    });
    
    $(".landcounter>span").change(function(){
      updateLandScores();
      updateTotalScore();
    });

    $(".bis").click(function() {
      console.log($(this).attr('id'));

      var first_unchecked = $(".bis:not(.check):first");
      var last_checked = $(".bis.check:last");
        
      if (($(this).hasClass('check') && $(last_checked).attr('id') === $(this).attr('id')) || (!$(this).hasClass('check') && $(first_unchecked).attr('id') == $(this).attr('id'))) {
        $(this).toggleClass("check");
        $(".bis").each(function(){$(this).removeClass("checkable");});
        $(".bis:not(.check):first").addClass("checkable");
        $(".bis.check:last").addClass("checkable");
        $("#bis-score>span").text(bis_scores[$(".bis.check").length]);
        updateTotalScore();
      } else {
        return false;
      }
    });

    $(".cantplay").click(function() {
      var first_unchecked = $(".cantplay:not(.check):first");
      var last_checked = $(".cantplay.check:last");
        
      if (($(this).hasClass('check') && $(last_checked).attr('id') === $(this).attr('id')) || (!$(this).hasClass('check') && $(first_unchecked).attr('id') == $(this).attr('id'))) {
        $(this).toggleClass("check");
        var new_last_checked = $(".cantplay.check:last");
        if($(new_last_checked).length==0) {
          $("#cantplay-score>span").text(0);  
        } else {
          $("#cantplay-score>span").text($(new_last_checked).data('score'));
        }
        $(".cantplay").each(function(){$(this).removeClass("checkable");});
        $(".cantplay:not(.check):first").addClass("checkable");
        $(".cantplay.check:last").addClass("checkable");
        updateTotalScore();
      } else {
        return false;
      }
    });

    $(".total-score").each(function() {
      $("span", this).text(0);
    });

    updateLandCounter();

    $("#next").click(function() {
      $('#round').val( function(i, oldval) {
        var i = ++oldval;
        var maxval = $(this).attr("max");
        if (i > maxval) i =  maxval;
        return i;
      });
      renderCards();
    });

    $("#prev").click(function() {
      $('#round').val( function(i, oldval) {
        var i = --oldval;
        if (i < 1) i = 1;
        return i;
      });
      renderCards();
    });

    $("#round").blur(function(){
      var i = Number($(this).val());
      var maxval = Number($(this).attr("max"));
      if (i > maxval) i =  maxval;
      var minval = Number($(this).attr("min"));
      if (i < minval) i = minval;
      $(this).val(i);
      renderCards();
    });

    $("#seed").blur(function(){
      var i = Number($(this).val());
      var maxval = Number($(this).attr("max"));
      if (i > maxval) i =  maxval;
      var minval = Number($(this).attr("min"));
      if (i < minval) i = minval;
      $(this).val(i);
      generateDeck();
    });
});


$( window ).on( "load", function() {
    set_viewport_height();
});
