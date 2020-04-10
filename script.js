
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

function initParks() {
  for (var i in parks) {
    $("#widget-container").append(`<div id='park-${i}' class='park widget' style='left:${xscale*parks[i].x}%;top:${yscale*parks[i].y}%;' data-row='${parks[i].row}' data-score='${parks[i].score}'></div>`);
  }
  for (var i in park_scores) {
    $("#widget-container").append(`<div id='park-score-${i}' class='total-score park-score widget' style='left:${xscale*park_scores[i].x}%;top:${yscale*park_scores[i].y}%;'><span></span></div>`);
  }
}

function initPools() {
  for (var i in pools) {
    $("#widget-container").append(`<div id='pool-${i}' class='pool widget' style='left:${xscale*pools[i].x}%;top:${yscale*pools[i].y}%;'></div>`);
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
}

function initLandPrices() {
  for (var i in landprices) {
    $("#widget-container").append(`<div id='landprice-${i}' class='landprice widget' style='left:${xscale*landprices[i].x}%;top:${yscale*landprices[i].y}%;'></div>`);
  }
}

function initBis() {
  for (var i in bis) {
    $("#widget-container").append(`<div id='bis-${i}' class='bis widget' style='left:${100*bis[i].x}%;top:${100*bis[i].y}%;'></div>`);
  }
}

function initScores() {
  for (var i in total_scores) {
    $("#widget-container").append(`<div id='${total_scores[i].id}' class='total-score widget' style='left:${xscale*total_scores[i].x}%;top:${yscale*total_scores[i].y}%;'><span></span></div>`);
  }
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
  renderCards();
}

$( document ).ready(function() {
    initHouses();
    initParks();
    initPools();
    initFences();
    initWorkSigns();
    initLandPrices();
    initBis();
    initScores();

    $("#seed").val(Math.floor((Math.random() * $("#seed").attr("max")) + 1));
    generateDeck();

    $("#widget-container").append(`<div id=cityname style='left:${xscale*cityname.x}%;top:${yscale*cityname.y}%;'><input type="text"></div>`);

    $( ".house" ).click(function() {
      console.log($(this).attr('id'));
    });

    $(".park").click(function() {
      var row = $(this).data("row");
      var first_unchecked = $(".park[data-row='" + row +"']:not(.check):first");
      var last_checked = $(".park[data-row='" + row +"'].check:last");
        
      if (($(this).hasClass('check') && $(last_checked).data('score') === $(this).data('score')) || (!$(this).hasClass('check') && $(first_unchecked).data('score') == $(this).data('score'))) {
        var result = $(this).toggleClass("check");
        if (result.hasClass("check")) {
          $("#park-score-"+row+">span").text($(this).data('score'));
        } else {
          if ($(this).data('score')==2) {
            $("#park-score-"+row+">span").text(0);
          } else {
            $("#park-score-"+row+">span").text($(".park[data-row='" + row +"'].check:last").data('score'));
          }
        }
      } else {
        return false;
      }
      var sum = 0;
      $('.park-score>span').each(function() {
          sum += Number($(this).text());
      });
      $('#park-score>span').text(sum);
    });

    $(".pool").click(function() {
      var result = $(this).toggleClass("check");
      if (result.hasClass('check')) {
        $(".pool-check:not(.check):first").toggleClass("check");
      } else {
        $(".pool-check.check:last").toggleClass("check");
      }
      $("#pool-score>span").text(pool_scores[$(".pool-check.check").length]);
    });

    $(".fence").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
    });

    $(".work").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
    });

    $(".landprice").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("check");
    });

    $(".bis").click(function() {
      console.log($(this).attr('id'));

      var first_unchecked = $(".bis:not(.check):first");
      var last_checked = $(".bis.check:last");
        
      if (($(this).hasClass('check') && $(last_checked).attr('id') === $(this).attr('id')) || (!$(this).hasClass('check') && $(first_unchecked).attr('id') == $(this).attr('id'))) {
        $(this).toggleClass("check");
        $("#bis-score>span").text(bis_scores[$(".bis.check").length]);
      } else {
        return false;
      }
    });

    $(".total-score").each(function() {
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
        if (i < 0) i = 0;
        return i;
      });
      renderCards();
    });

    $("#round").blur(function(){
      var i = $(this).val();
      var maxval = $(this).attr("max");
      if (i > maxval) i =  maxval;
      var minval = $(this).attr("min");
      if (i < minval) i = minval;
      $(this).val(i);
      renderCards();
    });

    $("#seed").blur(function(){
      var i = $(this).val();
      var maxval = $(this).attr("max");
      if (i > maxval) i =  maxval;
      var minval = $(this).attr("min");
      if (i < minval) i = minval;
      $(this).val(i);
      generateDeck();
    });
});