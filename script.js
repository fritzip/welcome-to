
var posx;var posy;
var actions = [];
var numbers = [];

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

var xscale = 100.427;
var yscale = 100.427;

function initHouses() {
  for (var i in houses) {
    $("#widget-container").append(`<div id='house-${i}' class='house widget' style='left:${xscale*houses[i].x}%;top:${yscale*houses[i].y}%;'><input type="number" min="0" max="17"></div>`);
  }
}

function initBonus() {
  for (var i in bonus) {
    $("#widget-container").append(`<div id='bonus-${i}' class='bonus widget' style='left:${xscale*bonus[i].x}%;top:${yscale*bonus[i].y}%;'><input type="number" min="0" max="9" value="0"></div>`);
  }
};

function initParks() {
  var extraClass = "";
  var row = 99;
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
  for (var i in fences) {
    $("#widget-container").append(`<div id='fence-${i}' class='fence widget' style='left:${xscale*fences[i].x}%;top:${yscale*fences[i].y}%;'></div>`);
  }
}

function initWorkSigns() {
  for (var i in worksigns) {
    $("#widget-container").append(`<div id='work-${i}' class='work widget' style='left:${xscale*worksigns[i].x}%;top:${yscale*worksigns[i].y}%;'></div>`);
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
    $("#widget-container").append(`<div id='landcounter-${i}' class='landcounter widget' style='left:${xscale*landcounters[i].x}%;top:${yscale*landcounters[i].y}%;'><input type="number" min="0" max="9" value="0"></div>`);
  }
}

function updateLandScores() {
  for(var col in landcounters) {
    var last_checked = $(".landprice[data-col='" + col +"'].check:last");
    if($(last_checked).length==0) {
      $("#landprice-score-"+col+">span").text(landprices_score[col]*$("#landcounter-" + col + ">input").val());
    } else {
      $("#landprice-score-"+col+">span").text($(last_checked).data('score')*$("#landcounter-" + col + ">input").val());
    }
  }     
}

function initBis() {
  var extraClass = "";
  for (var i in bis) {
    if (i==0) {
      extraClass = "checkable";
    }
    $("#widget-container").append(`<div id='bis-${i}' class='bis widget ${extraClass}' style='left:${100*bis[i].x}%;top:${100*bis[i].y}%;'></div>`);
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

function renderCards() {
  var i = $("#round").val();
  $("#action1").attr("src","assets/"+actions[i*3]+".png");
  $("#action2").attr("src","assets/"+actions[i*3 + 1]+".png");
  $("#action3").attr("src","assets/"+actions[i*3 + 2]+".png");
  $("#number1").text(numbers[i*3]);
  $("#number2").text(numbers[i*3 + 1]);
  $("#number3").text(numbers[i*3 + 2]);
}

function generateDeck() {
  var datas = {
    numbers:{
      1:3,
      2:3,
      3:4,
      4:5,
      5:6,
      6:7,
      7:8,
      8:9,
      9:8,
      10:7,
      11:6,
      12:5,
      13:4,
      14:3,
      15:3
    },
    actions:{
      'park':18,
      'pool':9,
      'work':9,
      'bis':9,
      'landprice':18,
      'fence':18
    }
  };
  
  numbers = [];
  for(i of Object.keys(datas.numbers)) {
    for(let j = 0; j < datas.numbers[i]; j++) {
      numbers.push(i);
    }
  }
  
  actions = [];
  for(action of Object.keys(datas.actions)) {
    for(let j = 0; j < datas.actions[action]; j++) {
      actions.push(action);
    }
  }
  shuffle(numbers, $("#seed").val());
  shuffle(actions, $("#seed").val());
  console.log(numbers);
  numbers_next_seed = [];
  for(i of Object.keys(datas.numbers)) {
    for(let j = 0; j < datas.numbers[i]; j++) {
      numbers_next_seed.push(i);
    }
  }
  
  actions_next_seed = [];
  for(action of Object.keys(datas.actions)) {
    for(let j = 0; j < datas.actions[action]; j++) {
      actions_next_seed.push(action);
    }
  }
  shuffle(numbers_next_seed, Number($("#seed").val())+1);
  shuffle(actions_next_seed, Number($("#seed").val())+1);
  console.log(numbers_next_seed);
  numbers.push(...numbers_next_seed);
  actions.push(...actions_next_seed);
  renderCards();
}

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

    $("#widget-container").append(`<div id=cityname style='left:${xscale*cityname.x}%;top:${yscale*cityname.y}%;'><input type="text"></div>`);

    $( ".house" ).click(function() {
      console.log($(this).attr('id'));
    });

    $(".bonus>input").on('input',function(){
      var sum = 0;
      $('.bonus>input').each(function() {
          sum += Number($(this).val());
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
    });

    $(".work").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
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
    
    $(".landcounter>input").change(function(){
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

    $(".bonus-score").each(function() {
      $("span", this).text(0);
    });

    $(".park-score").each(function() {
      $("span", this).text(0);
    });

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