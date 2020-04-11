var houses = [
  {'x': 0.2425, 'y': 0.1225}, {'x': 0.31, 'y': 0.1225}, {'x': 0.3725, 'y': 0.1325}, {'x': 0.445, 'y': 0.1225}, {'x': 0.5075, 'y': 0.1225}, {'x': 0.5775, 'y': 0.1225}, {'x': 0.645, 'y': 0.1325}, {'x': 0.71, 'y': 0.1325}, {'x': 0.7775, 'y': 0.1225}, {'x': 0.8425, 'y': 0.1225},
  {'x': 0.1775, 'y': 0.31}, {'x': 0.2425, 'y': 0.3025}, {'x': 0.31, 'y': 0.3025}, {'x': 0.3725, 'y': 0.31}, {'x': 0.445, 'y': 0.3025}, {'x': 0.5075, 'y': 0.3025}, {'x': 0.5775, 'y': 0.3025}, {'x': 0.645, 'y': 0.31}, {'x': 0.71, 'y': 0.3025}, {'x': 0.7775, 'y': 0.3025}, {'x': 0.8425, 'y': 0.3025},
  {'x': 0.11, 'y': 0.4775}, {'x': 0.1775, 'y': 0.4875}, {'x': 0.2425, 'y': 0.4775}, {'x': 0.31, 'y': 0.4775}, {'x': 0.3725, 'y': 0.4775}, {'x': 0.445, 'y': 0.4775}, {'x': 0.5075, 'y': 0.4875}, {'x': 0.5775, 'y': 0.4775}, {'x': 0.645, 'y': 0.4775}, {'x': 0.71, 'y': 0.4775}, {'x': 0.7775, 'y': 0.4875}, {'x': 0.8425, 'y': 0.4775}
];

var parks = [
  {'x': 0.792, 'y': 0.0485, 'row':0, 'score': 2}, {'x': 0.826, 'y': 0.0485, 'row':0, 'score': 4}, {'x': 0.859, 'y': 0.0485, 'row':0, 'score': 10},

  {'x': 0.7571, 'y': 0.2272, 'row':1, 'score': 2}, {'x': 0.792, 'y': 0.2272, 'row':1, 'score': 4}, {'x': 0.826, 'y': 0.2272, 'row':1, 'score': 6}, {'x': 0.859, 'y': 0.2272, 'row':1, 'score': 14},

   {'x': 0.722, 'y': 0.405, 'row':2, 'score': 2}, {'x': 0.7571, 'y': 0.405, 'row':2, 'score': 4}, {'x': 0.792, 'y': 0.405, 'row':2, 'score': 6}, {'x': 0.826, 'y': 0.405, 'row':2, 'score': 8}, {'x': 0.859, 'y': 0.405, 'row':2, 'score': 18}
];

var park_scores = [
  { 'x' : 0.1565, 'y' : 0.74819 },
  { 'x' : 0.1565, 'y' : 0.799 },
  { 'x' : 0.1565, 'y' : 0.847 },
];

var pools = [
  {'x': 0.37, 'y': 0.098}, {'x': 0.64, 'y': 0.098}, {'x': 0.705, 'y': 0.098}, 
  {'x': 0.17, 'y': 0.276}, {'x': 0.373, 'y': 0.276}, {'x': 0.64, 'y': 0.276},
  {'x': 0.17, 'y': 0.455}, {'x': 0.506, 'y': 0.455}, {'x': 0.771, 'y': 0.455}
];

var pools_checks = [
  { 'x' : 0.217, 'y' : 0.71 }, { 'x' : 0.25, 'y' : 0.71 },
  { 'x' : 0.217, 'y' : 0.743 }, { 'x' : 0.25, 'y' : 0.743 },
  { 'x' : 0.217, 'y' : 0.776 }, { 'x' : 0.25, 'y' : 0.776 },
  { 'x' : 0.217, 'y' : 0.809 }, { 'x' : 0.25, 'y' : 0.809 },
  { 'x' : 0.217, 'y' : 0.842 }
];

var pool_scores = [0, 3, 6, 9, 13, 17, 21, 26, 31, 36];

var fences = [
  {'x': 0.2965, 'y': 0.088},
  {'x': 0.363 , 'y': 0.088},
  {'x': 0.4295, 'y': 0.088},
  {'x': 0.496 , 'y': 0.088},
  {'x': 0.5625, 'y': 0.088},
  {'x': 0.629 , 'y': 0.088},
  {'x': 0.6955 , 'y': 0.088},
  {'x': 0.762 , 'y': 0.088},
  {'x': 0.8285, 'y': 0.088},

  {'x': 0.23  , 'y': 0.273},
  {'x': 0.2965, 'y': 0.273},
  {'x': 0.363 , 'y': 0.273},
  {'x': 0.4295, 'y': 0.273},
  {'x': 0.496 , 'y': 0.273},
  {'x': 0.5625, 'y': 0.273},
  {'x': 0.629 , 'y': 0.273},
  {'x': 0.6955 , 'y': 0.273},
  {'x': 0.762 , 'y': 0.273},
  {'x': 0.8285, 'y': 0.273},

  {'x': 0.164  , 'y': 0.455},
  {'x': 0.23  , 'y': 0.455},
  {'x': 0.2965, 'y': 0.455},
  {'x': 0.363 , 'y': 0.455},
  {'x': 0.4295, 'y': 0.455},
  {'x': 0.496 , 'y': 0.455},
  {'x': 0.5625, 'y': 0.455},
  {'x': 0.629 , 'y': 0.455},
  {'x': 0.6955 , 'y': 0.455},
  {'x': 0.762 , 'y': 0.455},
  {'x': 0.8285, 'y': 0.455}
];

var worksigns = [
  {'x': 0.325, 'y': 0.7},
  {'x': 0.365, 'y': 0.7},
  {'x': 0.325, 'y': 0.74},
  {'x': 0.365, 'y': 0.74},
  {'x': 0.325, 'y': 0.778},
  {'x': 0.365, 'y': 0.778},
  {'x': 0.325, 'y': 0.815},
  {'x': 0.365, 'y': 0.815},
  {'x': 0.345, 'y': 0.72},
  {'x': 0.345, 'y': 0.759},
  {'x': 0.345, 'y': 0.798},
];

var worksigns_radio = [
  { 'x' : 0.31, 'y' : 0.847, 'score': 7 },
  { 'x' : 0.341, 'y' : 0.847, 'score': 4 },
  { 'x' : 0.372, 'y' : 0.847, 'score': 1 }
];

var landprices = [
  {'x': 0.449, 'y': 0.76, 'col': 0, 'score': 3},

  {'x': 0.495, 'y': 0.745, 'col': 1, 'score': 3}, {'x': 0.495, 'y': 0.7733, 'col': 1, 'score': 4},
  
  {'x': 0.537, 'y': 0.728, 'col': 2, 'score': 4}, {'x': 0.537, 'y': 0.7563, 'col': 2, 'score': 5}, {'x': 0.537, 'y': 0.7846, 'col': 2, 'score': 6},
  
  {'x': 0.582, 'y': 0.712, 'col': 3, 'score': 5}, {'x': 0.582, 'y': 0.7403, 'col': 3, 'score': 6}, {'x': 0.582, 'y': 0.7686, 'col': 3, 'score': 7}, {'x': 0.582, 'y': 0.797, 'col': 3, 'score': 8},
  
  {'x': 0.628, 'y': 0.698, 'col': 4, 'score': 6}, {'x': 0.628, 'y': 0.7263, 'col': 4, 'score': 7}, {'x': 0.628, 'y': 0.7546, 'col': 4, 'score': 8}, {'x': 0.628, 'y': 0.783, 'col': 4, 'score': 10},
  
  {'x': 0.672, 'y': 0.681, 'col': 5, 'score': 7}, {'x': 0.672, 'y': 0.7093, 'col': 5, 'score': 8}, {'x': 0.672, 'y': 0.7376, 'col': 5, 'score': 10}, {'x': 0.672, 'y': 0.766, 'col': 5, 'score': 12}
];

var landcounters = [
  {'x': 0.457, 'y': 0.855, 'id':'landcounter-0'},
  {'x': 0.503, 'y': 0.855, 'id':'landcounter-1'},
  {'x': 0.549, 'y': 0.855, 'id':'landcounter-2'},
  {'x': 0.596, 'y': 0.855, 'id':'landcounter-3'},
  {'x': 0.644, 'y': 0.855, 'id':'landcounter-4'},
  {'x': 0.690, 'y': 0.855, 'id':'landcounter-5'},
];

var landprices_score = [1,2,3,4,5,6];

var bis = [
  { 'x' : 0.75, 'y' : 0.683 },{ 'x' : 0.787, 'y' : 0.683 },
  { 'x' : 0.75, 'y' : 0.724 },{ 'x' : 0.787, 'y' : 0.724 },
  { 'x' : 0.75, 'y' : 0.765 },{ 'x' : 0.787, 'y' : 0.765 },
  { 'x' : 0.75, 'y' : 0.806 },{ 'x' : 0.787, 'y' : 0.806 },
  { 'x' : 0.75, 'y' : 0.847 }
];

var bis_scores = [0, 1, 3, 6, 9, 12, 16, 20, 24, 28];

var total_scores = [
  { 'x' : 0.0765, 'y' : 0.9218, 'id' : 'bonus-score' },
  { 'x' : 0.1565, 'y' : 0.9218, 'id' : 'park-score' },
  { 'x' : 0.2465, 'y' : 0.9218, 'id' : 'pool-score' },
  { 'x' : 0.352, 'y' : 0.9218, 'id' : 'work-score' },
  { 'x' : 0.453, 'y' : 0.9218, 'id' : 'landprice-score-0' },
  { 'x' : 0.499, 'y' : 0.9218, 'id' : 'landprice-score-1' },
  { 'x' : 0.544, 'y' : 0.9218, 'id' : 'landprice-score-2' },
  { 'x' : 0.59, 'y' : 0.9218, 'id' : 'landprice-score-3' },
  { 'x' : 0.638, 'y' : 0.9218, 'id' : 'landprice-score-4' },
  { 'x' : 0.687, 'y' : 0.9218, 'id' : 'landprice-score-5' },
  { 'x' : 0.78, 'y' : 0.9218, 'id' : 'bis-score' },
  { 'x' : 0.867, 'y' : 0.9218, 'id' : 'cantplay-score' },
  { 'x' : 0.935, 'y' : 0.9218, 'id' : 'total-score' },
];

var cityname = {'x': 0.04, 'y':0.155};
