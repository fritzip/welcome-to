
var posx;var posy;

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
  console.log('X : '+posx/$("#boardgame").width()+' Y : '+posy/$("#boardgame").height());
}

function initHouses() {
  for (var i in houses) {
    $("#widget-container").append(`<div id='house-${i}' class='house' style='left:${100*houses[i].x}%;top:${100*houses[i].y}%;'><input type="number" min="0" max="17"></div>`);
  }
}

function initParks() {
  for (var i in parks) {
    $("#widget-container").append(`<div id='park-${i}' class='park' style='left:${100*parks[i].x}%;top:${100*parks[i].y}%;'></div>`);
  }
}

function initPools() {
  for (var i in pools) {
    $("#widget-container").append(`<div id='pool-${i}' class='pool' style='left:${100*pools[i].x}%;top:${100*pools[i].y}%;'></div>`);
  }
}

function initFences() {
  for (var i in fences) {
    $("#widget-container").append(`<div id='fence-${i}' class='fence' style='left:${100*fences[i].x}%;top:${100*fences[i].y}%;'></div>`);
  }
}

function initWorkSigns() {
  for (var i in worksigns) {
    $("#widget-container").append(`<div id='work-${i}' class='work' style='left:${100*worksigns[i].x}%;top:${100*worksigns[i].y}%;'></div>`);
  }
}

function initLandPrices() {
  for (var i in landprices) {
    $("#widget-container").append(`<div id='landprice-${i}' class='landprice' style='left:${100*landprices[i].x}%;top:${100*landprices[i].y}%;'></div>`);
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

  const numbers = [];
  for(i of Object.keys(datas.numbers)) {
    for(let j = 0; j < datas.numbers[i]; j++) {
      numbers.push(i);
    }
  }
  console.log(numbers);

  const actions = [];
  for(action of Object.keys(datas.actions)) {
    for(let j = 0; j < datas.actions[action]; j++) {
      actions.push(action);
    }
  }
  shuffle(numbers, $("#seed").val());
  shuffle(actions, $("#seed").val());
}

$( document ).ready(function() {
    initHouses();
    initParks();
    initPools();
    initFences();
    initWorkSigns();
    initLandPrices();
    generateDeck();
    $("#widget-container").append(`<div id=cityname style='left:${100*cityname.x}%;top:${100*cityname.y}%;'><input type="text"></div>`);

    $( ".house" ).click(function() {
      console.log($(this).attr('id'));
    });
    $(".park").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
    })
    $(".pool").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
    })
    $(".fence").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
    })
    $(".work").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
    })
    $(".landprice").click(function() {
      console.log($(this).attr('id'));
      $(this).toggleClass("checked");
    })

});