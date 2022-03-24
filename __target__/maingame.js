// Transcrypt'ed from Python, 2022-03-23 20:43:07
var math = {};
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {os} from './pyjsdl.pylib.js';
import * as pygame from './pyjsdl.js';
import {PDGeodesic, PDObject, PDPoint, arg, isApproxReal, isNearZero, mod2pi} from './PDneu.js';
import {absNew, complexNew} from './complex_new.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
var __name__ = '__main__';
export var platform = null;
if (platform === null) {
	var platform = 'js';
}
export var load_images = true;
export var load_images_pygame = true;
export var orange = tuple ([200, 140, 0]);
export var turquoise = tuple ([0, 206, 209]);
export var grey = tuple ([112, 128, 144]);
export var red = tuple ([153, 0, 0]);
export var green = tuple ([0, 153, 0]);
export var blue = tuple ([72, 61, 139]);
export var black = tuple ([0, 0, 0]);
export var white = tuple ([255, 255, 255]);
export var width = 801;
export var height = 801;
export var score_value_player1 = 0;
export var score_value_player2 = 0;
export var ball_colour = white;
export var movement = 0;
export var direction = 1;
export var angle1 = 0;
export var angle_rot1 = 0;
export var angle2 = 0;
export var angle_rot2 = 0;
export var wallup_p1 = PDPoint (complexNew (0.7, 0.5));
export var wallup_p2 = PDPoint (complexNew (-(0.7), 0.5));
export var wallup = PDGeodesic (wallup_p1, wallup_p2);
export var wallupcenter = wallup._center.getComplex ();
export var wallupcenter_x = wallupcenter.real;
export var wallupcenter_y = wallupcenter.imag;
export var wallupradius = wallup._radius;
export var wallplayer2_p1 = PDPoint (complexNew (0.7, 0.5));
export var wallplayer2_p2 = PDPoint (complexNew (0.7, -(0.5)));
export var wallplayer2 = PDGeodesic (wallplayer2_p1, wallplayer2_p2);
export var wallplayer2center = wallplayer2._center.getComplex ();
export var wallplayer2center_x = wallplayer2center.real;
export var wallplayer2center_y = wallplayer2center.imag;
export var wallplayer2radius = wallplayer2._radius;
export var walldown_p1 = PDPoint (complexNew (0.7, -(0.5)));
export var walldown_p2 = PDPoint (complexNew (-(0.7), -(0.5)));
export var walldown = PDGeodesic (walldown_p1, walldown_p2);
export var walldowncenter = walldown._center.getComplex ();
export var walldowncenter_x = walldowncenter.real;
export var walldowncenter_y = walldowncenter.imag;
export var walldownradius = walldown._radius;
export var wallplayer1_p1 = PDPoint (complexNew (-(0.7), 0.5));
export var wallplayer1_p2 = PDPoint (complexNew (-(0.7), -(0.5)));
export var wallplayer1 = PDGeodesic (wallplayer1_p1, wallplayer1_p2);
export var wallplayer1center = wallplayer1._center.getComplex ();
export var wallplayer1center_x = wallplayer1center.real;
export var wallplayer1center_y = wallplayer1center.imag;
export var wallplayer1radius = wallplayer1._radius;
export var wallradius = 0;
export var wallcenter = tuple ([0, 0]);
export var paddleradius = math.sqrt (0.6);
export var ballgeodesiccenter_x = 0;
export var ballgeodesiccenter_y = 0;
export var ballgeodesicradius = 0;
export var maxrad = 10;
export var helppoint_x = 0;
export var helppoint_y = 0;
export var solution = tuple ([0, 0]);
export var oldsolution = tuple ([0, 0]);
export var pseudopos = tuple ([0, 0]);
export var start = true;
export var w1 = 0;
export var w2 = 0;
export var h1 = 0;
export var h2 = 0;
export var nextintersection = tuple ([0, 0]);
export var wall = 1;
export var helpballpos = [0.0, 0.0];
export var win = 5;
export var quit = false;
export var pressed_r = false;
export var pressed_esc = false;
export var pressed_w = false;
export var pressed_s = false;
export var pressed_up = false;
export var pressed_down = false;
if (platform === null) {
	var __left0__ = 0;
	var font_normal = __left0__ [0];
	var font_small = __left0__ [1];
	var __left0__ = 0;
	var clock = __left0__ [0];
	var paddle1 = __left0__ [1];
	var paddle2 = __left0__ [2];
	var end_background = __left0__ [3];
	var __left0__ = 0;
	var m_tangent = __left0__ [0];
	var b_tangent = __left0__ [1];
}
export var setup = function (x, y) {
	if (typeof x == 'undefined' || (x != null && x.hasOwnProperty ("__kwargtrans__"))) {;
		var x = 500;
	};
	if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
		var y = 500;
	};
	pygame.init ();
	font_normal = pygame.font.Font ('pixChicago.ttf', 32);
	font_small = pygame.font.Font ('pixChicago.ttf', 25);
	var screen = pygame.display.set_mode (tuple ([x, y]));
	pygame.display.set_caption ('Ping Pong');
	clock = pygame.time.Clock ();
	return screen;
};
export var circ_inter_circ = function (r1, cx1, cy1, r2, cx2, cy2) {
	var swap = r1 > r2;
	if (swap) {
		var __left0__ = tuple ([r2, r1]);
		var r1 = __left0__ [0];
		var r2 = __left0__ [1];
		var __left0__ = tuple ([cx2, cx1]);
		var cx1 = __left0__ [0];
		var cx2 = __left0__ [1];
		var __left0__ = tuple ([cy2, cy1]);
		var cy1 = __left0__ [0];
		var cy2 = __left0__ [1];
	}
	var ix1 = 0.0;
	var iy1 = 0.0;
	var ix2 = 0.0;
	var iy2 = 0.0;
	var __left0__ = tuple ([cx1 - cx2, cy1 - cy2]);
	var dx = __left0__ [0];
	var dy = __left0__ [1];
	var d = math.sqrt (Math.pow (dx, 2) + Math.pow (dy, 2));
	if (isNearZero (d) && isNearZero (r1 - r2)) {
		return tuple ([-(1), ix1, iy1, ix2, iy2]);
	}
	if (isNearZero (d)) {
		return tuple ([0, ix1, iy1, ix2, iy2]);
	}
	if (isNearZero ((r1 + r2) - d) || isNearZero ((r2 - r1) - d)) {
		var ix1 = (dx / d) * r2 + cx2;
		var iy1 = (dy / d) * r2 + cy2;
		return tuple ([1, ix1, iy1, ix2, iy2]);
	}
	if (d + r1 < r2 || r1 + r2 < d) {
		return tuple ([0, ix1, iy1, ix2, iy2]);
	}
	var t = ((Math.pow (r1, 2) - Math.pow (d, 2)) - Math.pow (r2, 2)) / ((-(2) * d) * r2);
	if (t > 1) {
		var t = 1;
	}
	else if (t < -(1)) {
		var t = -(1);
	}
	var diffRad = math.acos (t);
	var centerRad = math.atan2 (dy, dx);
	var ix1 = cx2 + r2 * math.cos (centerRad - diffRad);
	var iy1 = cy2 + r2 * math.sin (centerRad - diffRad);
	var ix2 = cx2 + r2 * math.cos (centerRad + diffRad);
	var iy2 = cy2 + r2 * math.sin (centerRad + diffRad);
	if (swap) {
		return tuple ([2, ix1, iy1, ix2, iy2]);
	}
	else {
		return tuple ([2, ix2, iy2, ix1, iy1]);
	}
};
export var circ_inter_line = function (r, cx, cy, m, b) {
	var ldx = 1.0;
	var ldy = m;
	var __left0__ = tuple ([-(cx), b - cy, 1.0 - cx, (b + m) - cy]);
	var x1 = __left0__ [0];
	var y1 = __left0__ [1];
	var x2 = __left0__ [2];
	var y2 = __left0__ [3];
	var lineRad = math.atan2 (ldy, ldx);
	var pRad = math.atan2 (y1, x1);
	var pMag = math.sqrt (Math.pow (x1, 2) + Math.pow (y1, 2));
	var d = pMag * math.sin (pRad - lineRad);
	var negate = d < 0;
	if (negate) {
		var d = -(d);
	}
	var ix1 = 0.0;
	var iy1 = 0.0;
	var ix2 = 0.0;
	var iy2 = 0.0;
	if (isNearZero (d - r)) {
		var __left0__ = tuple ([-(r) * math.sin (lineRad), r * math.cos (lineRad)]);
		var ix = __left0__ [0];
		var iy = __left0__ [1];
		if (negate) {
			var __left0__ = tuple ([-(ix), -(iy)]);
			var ix = __left0__ [0];
			var iy = __left0__ [1];
		}
		var ix1 = cx + ix;
		var iy1 = cy + iy;
		return tuple ([1, ix1, iy1, ix2, iy2]);
	}
	if (d > r) {
		return tuple ([0, ix1, iy1, ix2, iy2]);
	}
	var diffRad = math.acos (d / r);
	var __left0__ = tuple ([-(r) * math.sin (lineRad - diffRad), r * math.cos (lineRad - diffRad)]);
	var ix1 = __left0__ [0];
	var iy1 = __left0__ [1];
	var __left0__ = tuple ([-(r) * math.sin (lineRad + diffRad), r * math.cos (lineRad + diffRad)]);
	var ix2 = __left0__ [0];
	var iy2 = __left0__ [1];
	if (negate) {
		var __left0__ = tuple ([-(ix1), -(iy1), -(ix2), -(iy2)]);
		var ix1 = __left0__ [0];
		var iy1 = __left0__ [1];
		var ix2 = __left0__ [2];
		var iy2 = __left0__ [3];
	}
	return tuple ([2, cx + ix1, cy + iy1, cx + ix2, cy + iy2]);
};
export var ballgeodesic = function (wall) {
	if (wall == 1) {
		helppoint (solution [0], solution [1], wallupcenter_x, wallupcenter_y);
	}
	else if (wall == 2) {
		helppoint (solution [0], solution [1], wallplayer2center_x, wallplayer2center_y);
	}
	else if (wall == 3) {
		helppoint (solution [0], solution [1], walldowncenter_x, walldowncenter_y);
	}
	else if (wall == 4) {
		helppoint (solution [0], solution [1], wallplayer1center_x, wallplayer1center_y);
	}
	else {
		print ('ERROR input must be in the set of {1,2,3,4}');
	}
	var p1 = xy_to_PD (solution [0], solution [1]);
	var p2 = xy_to_PD (helppoint_x, helppoint_y);
	var g = PDGeodesic (p1, p2);
	var center = g._center.getComplex ();
	ballgeodesiccenter_x = center.real;
	ballgeodesiccenter_y = center.imag;
	ballgeodesicradius = g._radius;
};
export var ball_radius = function (x, y) {
	if (math.sqrt (Math.pow (x, 2) + Math.pow (y, 2)) >= 1) {
		return 0;
	}
	else {
		return 15 * (1 - (Math.pow (x, 2) + Math.pow (y, 2)));
	}
};
export var blitRotate = function (surf, image, pos, originPos, angle) {
	var image_rect = image.get_rect (__kwargtrans__ ({topleft: tuple ([pos [0] - originPos [0], pos [1] - originPos [1]])}));
	var offset_center_to_pivot = tuple ([pos [0] - image_rect.center [0], pos [1] - image_rect.center [1]]);
	var angle_rad = (-(angle) * math.pi) / 180.0;
	var rotated_offset = tuple ([offset_center_to_pivot [0] * math.cos (angle_rad) - offset_center_to_pivot [1] * math.sin (angle_rad), offset_center_to_pivot [0] * math.sin (angle_rad) + offset_center_to_pivot [1] * math.cos (angle_rad)]);
	var rotated_image_center = tuple ([pos [0] - rotated_offset [0], pos [1] - rotated_offset [1]]);
	var rotated_image = pygame.transform.rotate (image, angle);
	var rotated_image_rect = rotated_image.get_rect (__kwargtrans__ ({center: rotated_image_center}));
	surf.blit (rotated_image, rotated_image_rect);
};
export var distance = function (z0, z1) {
	var z_diff = z0.__sub__ (z1);
	var z_diff_abs = z_diff.get_arg ();
	var z0_abs = z0.get_arg ();
	var z1_abs = z1.get_arg ();
	var this_dist = math.acosh (1 + (2 * (z_diff_abs * z_diff_abs)) / ((1 - z0_abs * z0_abs) * (1 - z1_abs * z1_abs)));
	return abs (this_dist);
};
export var findsolution2 = function () {
	var solutions = [null, null, null, null];
	var __left0__ = sol_wallupintersection ();
	var n = __left0__ [0];
	var sol_x = __left0__ [1];
	var sol_y = __left0__ [2];
	if (n < 1) {
		solutions [0] = null;
	}
	else {
		solutions [0] = tuple ([sol_x, sol_y]);
	}
	var __left0__ = sol_wallplayer2intersection ();
	var n = __left0__ [0];
	var sol_x = __left0__ [1];
	var sol_y = __left0__ [2];
	if (n < 1) {
		solutions [1] = null;
	}
	else {
		solutions [1] = tuple ([sol_x, sol_y]);
	}
	var __left0__ = sol_walldownintersection ();
	var n = __left0__ [0];
	var sol_x = __left0__ [1];
	var sol_y = __left0__ [2];
	if (n < 1) {
		solutions [2] = null;
	}
	else {
		solutions [2] = tuple ([sol_x, sol_y]);
	}
	var __left0__ = sol_wallplayer1intersection ();
	var n = __left0__ [0];
	var sol_x = __left0__ [1];
	var sol_y = __left0__ [2];
	if (n < 1) {
		solutions [3] = null;
	}
	else {
		solutions [3] = tuple ([sol_x, sol_y]);
	}
	if (solutions [0] === null && solutions [1] === null && solutions [2] === null && solutions [3] === null) {
		solution = tuple ([0.0, 0.0]);
		wall = -(10);
		pygame.quit ();
	}
	else {
		var min = null;
		var j = 0;
		for (var i = 0; i < 4; i++) {
			if (solutions [i] === null) {
				continue;
			}
			else {
				var dist = distance (complexNew (oldsolution [0], oldsolution [1]), complexNew (solutions [i] [0], solutions [i] [1]));
				if (min == null) {
					if (dist > 1e-15 && complexNew (solutions [i] [0], solutions [i] [1]).get_arg () <= 0.8) {
						var min = dist;
						var j = i;
					}
				}
				else if (dist < min && dist > 1e-15 && complexNew (solutions [i] [0], solutions [i] [1]).get_arg () <= 0.8) {
					var min = dist;
					var j = i;
				}
			}
			wall = j + 1;
			solution = solutions [j];
		}
		if (min == null) {
			solution = tuple ([0.0, 0.0]);
			wall = -(10);
			pygame.quit ();
		}
	}
};
export var game_over_text = function (win) {
	var over_text2 = font_normal.render ((str (score_value_player1) + ' : ') + str (score_value_player2), true, white);
	var over_text3 = font_small.render ('Press R to restart or Esc to exit the game.', true, white);
	if (score_value_player1 == win) {
		var over_text1 = font_normal.render ('Player 1 won!', true, white);
	}
	if (score_value_player2 == win) {
		var over_text1 = font_normal.render ('Player 2 won!', true, white);
	}
	var over_text1_rect = over_text1.get_rect (__kwargtrans__ ({center: tuple ([width / 2, height / 4])}));
	var over_text2_rect = over_text2.get_rect (__kwargtrans__ ({center: tuple ([width / 2, height / 3])}));
	var over_text3_rect = over_text3.get_rect (__kwargtrans__ ({center: tuple ([width / 2, (3 * height) / 4])}));
	screen.blit (over_text1, over_text1_rect);
	screen.blit (over_text2, over_text2_rect);
	screen.blit (over_text3, over_text3_rect);
};
export var helppoint = function (solution_x, solution_y, center_x, center_y) {
	if (center_x - solution_x != 0 && center_y - solution_y != 0) {
		var n = (center_y - solution_y) / (center_x - solution_x);
		var b_orthogonal = solution_y - n * solution_x;
		m_tangent = 1 / n;
		if (center_x == walldowncenter_x && center_y == walldowncenter_y) {
			b_tangent = (solution_y - m_tangent * solution_x) + 0.0001;
		}
		else if (center_x == wallupcenter_x && center_y == wallupcenter_y) {
			b_tangent = (solution_y - m_tangent * solution_x) - 0.0001;
		}
		else if (center_x == wallplayer1center_x && center_y == wallplayer1center_y) {
			b_tangent = (solution_y - m_tangent * solution_x) - 0.0001;
		}
		else if (center_x == wallplayer2center_x && center_y == wallplayer2center_y) {
			b_tangent = (solution_y - m_tangent * solution_x) + 0.0001;
		}
		var __left0__ = sol_helptangent ();
		var temp_n = __left0__ [0];
		var temp_sol_x = __left0__ [1];
		var temp_sol_y = __left0__ [2];
		if (temp_n < 1) {
			var __except0__ = RuntimeError ();
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else {
			var helpsolve = tuple ([temp_sol_x, temp_sol_y]);
		}
		var orthintersect_y = (m_tangent * (b_orthogonal - b_tangent)) / (m_tangent - n) + b_tangent;
		var orthintersect_x = (b_orthogonal - b_tangent) / (m_tangent - n);
		helppoint_y = 2 * orthintersect_y - helpsolve [1];
		helppoint_x = 2 * orthintersect_x - helpsolve [0];
	}
	else if (center_y - solution_y == 0) {
		if (center_x == wallplayer1center_x && center_y == wallplayer1center_y) {
			helppoint_x = solution_x + 0.001;
			helppoint_y = solution_y + 0.001;
		}
		else if (center_x == wallplayer2center_x && center_y == wallplayer2center_y) {
			helppoint_x = solution_x - 0.001;
			helppoint_y = solution_y - 0.001;
		}
		else {
			print ('Something went very wrong.');
		}
	}
	else if (center_x - solution_x == 0) {
		if (center_x == walldowncenter_x && center_y == walldowncenter_y) {
			helppoint_y = solution_y + 0.001;
			helppoint_x = solution_x - 0.001;
		}
		else if (center_x == wallupcenter_x && center_y == wallupcenter_y) {
			helppoint_y = solution_y - 0.001;
			helppoint_x = solution_x + 0.001;
		}
		else {
			print ('Something went very wrong.');
		}
	}
};
export var sol_helptangent = function () {
	var __left0__ = circ_inter_line (ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y, m_tangent, b_tangent);
	var n_inter = __left0__ [0];
	var sol_x1 = __left0__ [1];
	var sol_y1 = __left0__ [2];
	var sol_x2 = __left0__ [3];
	var sol_y2 = __left0__ [4];
	if (n_inter == 2) {
		if (math.sqrt (sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0) {
			return tuple ([n_inter, sol_x1, sol_y1]);
		}
		else {
			return tuple ([n_inter, sol_x2, sol_y2]);
		}
	}
	else {
		return tuple ([n_inter, sol_x1, sol_y1]);
	}
};
export var newballpos = function (center_x, center_y, radius, t) {
	var newballpos = [center_x + radius * math.cos ((2 * math.pi) * t), center_y + radius * math.sin ((2 * math.pi) * t)];
	return newballpos;
};
export var newgeodesic = function (x1, y1, x2, y2) {
	var p1 = xy_to_PD (x1, y1);
	var p2 = xy_to_PD (x2, y2);
	var g = PDGeodesic (p1, p2);
	var center = g._center.getComplex ();
	ballgeodesiccenter_x = center.real;
	ballgeodesiccenter_y = center.imag;
	ballgeodesicradius = g._radius;
};
export var paddle_scaling = function (x, y) {
	if (math.sqrt (Math.pow (x - 401, 2) + Math.pow (y - 401, 2)) >= 300) {
		return tuple ([0, 0]);
	}
	else {
		return tuple ([round (16 - (16 * math.sqrt (Math.pow (x - 401, 2) + Math.pow (y - 401, 2))) / 300), round (90 - (90 * math.sqrt (Math.pow (x - 401, 2) + Math.pow (y - 401, 2))) / 300)]);
	}
};
export var PD_to_xy = function (point) {
	var x = point.getReal ();
	var y = point.getImag ();
	return tuple ([x, y]);
};
export var pseudorand = function () {
	var x = random.randint (1, 10);
	if (x == 1) {
		newgeodesic (0.3, 0.4, 0.45, 0.2);
		movement = 0.6;
		direction = 1;
		wall = 2;
		var __left0__ = sol_wallplayer2intersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 2) {
		newgeodesic (-(0.0662), 0.2629, 0.2868, 0.0756);
		movement = -(0.3475);
		direction = 1;
		wall = 2;
		var __left0__ = sol_wallplayer2intersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 3) {
		newgeodesic (-(0.12), -(0.11), -(0.45), -(0.2));
		movement = 0.275;
		direction = 1;
		wall = 4;
		var __left0__ = sol_wallplayer1intersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 4) {
		newgeodesic (-(0.05), 0.22, -(0.3), -(0.5));
		movement = -(0.04);
		direction = -(1);
		wall = 3;
		var __left0__ = sol_walldownintersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 5) {
		newgeodesic (0.4473, -(0.2192), 0.1314, -(0.1148));
		movement = -(0.8);
		direction = -(1);
		wall = 2;
		var __left0__ = sol_wallplayer2intersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 6) {
		newgeodesic (0.252, -(0.0883), 0.265, -(0.089));
		movement = 0.249;
		direction = -(1);
		wall = 2;
		var __left0__ = sol_wallplayer2intersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 7) {
		newgeodesic (-(0.2275), 0.2389, 0.029, -(0.249));
		movement = 0.075;
		direction = -(1);
		wall = 3;
		var __left0__ = sol_walldownintersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 8) {
		newgeodesic (-(0.2937), -(0.1265), -(0.2555), 0.2046);
		movement = 0.0096;
		direction = -(1);
		wall = 3;
		var __left0__ = sol_walldownintersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 9) {
		newgeodesic (-(0.1683), -(0.2514), -(0.0005), -(0.1368));
		movement = 0.3551;
		direction = -(1);
		wall = 3;
		var __left0__ = sol_walldownintersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
	if (x == 10) {
		newgeodesic (-(0.497), -(0.088), -(0.398), -(0.163));
		movement = 0.1;
		direction = 1;
		wall = 4;
		var __left0__ = sol_wallplayer1intersection ();
		var n = __left0__ [0];
		var sol_x = __left0__ [1];
		var sol_y = __left0__ [2];
		solution = tuple ([sol_x, sol_y]);
		oldsolution = solution;
	}
};
export var show_score = function (x, y) {
	var score = font_normal.render ((str (score_value_player1) + ' : ') + str (score_value_player2), true, tuple ([255, 255, 255]));
	screen.blit (score, tuple ([x, y]));
};
export var topygamecoords = function (xcord, ycord) {
	var point = [round (401 + xcord * 300), round (401 - ycord * 300)];
	return point;
};
export var topygameradius = function (radius) {
	return 300 * radius;
};
export var sol_walldownintersection = function () {
	var __left0__ = circ_inter_circ (walldownradius, walldowncenter_x, walldowncenter_y, ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y);
	var n_inter = __left0__ [0];
	var sol_x1 = __left0__ [1];
	var sol_y1 = __left0__ [2];
	var sol_x2 = __left0__ [3];
	var sol_y2 = __left0__ [4];
	if (n_inter == 2) {
		if (math.sqrt (sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0) {
			return tuple ([n_inter, sol_x1, sol_y1]);
		}
		else {
			return tuple ([n_inter, sol_x2, sol_y2]);
		}
	}
	else {
		return tuple ([n_inter, sol_x1, sol_y1]);
	}
};
export var sol_wallplayer1intersection = function () {
	var __left0__ = circ_inter_circ (paddleradius, wallplayer1center_x, wallplayer1center_y, ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y);
	var n_inter = __left0__ [0];
	var sol_x1 = __left0__ [1];
	var sol_y1 = __left0__ [2];
	var sol_x2 = __left0__ [3];
	var sol_y2 = __left0__ [4];
	if (n_inter == 2) {
		if (math.sqrt (sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0) {
			return tuple ([n_inter, sol_x1, sol_y1]);
		}
		else {
			return tuple ([n_inter, sol_x2, sol_y2]);
		}
	}
	else {
		return tuple ([n_inter, sol_x1, sol_y1]);
	}
};
export var sol_wallplayer2intersection = function () {
	var __left0__ = circ_inter_circ (paddleradius, wallplayer2center_x, wallplayer2center_y, ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y);
	var n_inter = __left0__ [0];
	var sol_x1 = __left0__ [1];
	var sol_y1 = __left0__ [2];
	var sol_x2 = __left0__ [3];
	var sol_y2 = __left0__ [4];
	if (n_inter == 2) {
		if (math.sqrt (sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0) {
			return tuple ([n_inter, sol_x1, sol_y1]);
		}
		else {
			return tuple ([n_inter, sol_x2, sol_y2]);
		}
	}
	else {
		return tuple ([n_inter, sol_x1, sol_y1]);
	}
};
export var sol_wallupintersection = function () {
	var __left0__ = circ_inter_circ (wallupradius, wallupcenter_x, wallupcenter_y, ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y);
	var n_inter = __left0__ [0];
	var sol_x1 = __left0__ [1];
	var sol_y1 = __left0__ [2];
	var sol_x2 = __left0__ [3];
	var sol_y2 = __left0__ [4];
	if (n_inter == 2) {
		if (math.sqrt (sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0) {
			return tuple ([n_inter, sol_x1, sol_y1]);
		}
		else {
			return tuple ([n_inter, sol_x2, sol_y2]);
		}
	}
	else {
		return tuple ([n_inter, sol_x1, sol_y1]);
	}
};
export var wallrad = function (wall) {
	if (wall == 1) {
		wallradius = wallupradius;
	}
	if (wall == 2) {
		wallradius = wallplayer2radius;
	}
	if (wall == 3) {
		wallradius = walldownradius;
	}
	if (wall == 4) {
		wallradius = wallplayer1radius;
	}
	return wallradius;
};
export var xy_to_PD = function (x, y) {
	var z = PDPoint (complexNew (x, y));
	return z;
};
export var run = function () {
	if (quit == true) {
		pygame.quit ();
		return true;
	}
	if (load_images_pygame == true) {
		load_images_pygame = false;
		var temp_image = pygame.image.load ('Gameoverbg.png');
		end_background = pygame.transform.scale (temp_image, tuple ([width, height]));
		paddle1 = pygame.image.load ('paddle.jpg');
		paddle1 = pygame.transform.scale (paddle1, tuple ([8, 50]));
		paddle2 = pygame.image.load ('paddle.jpg');
		paddle2 = pygame.transform.scale (paddle2, tuple ([8, 50]));
		paddle1.set_colorkey (tuple ([0, 0, 0]));
		paddle2.set_colorkey (tuple ([0, 0, 0]));
		var __left0__ = paddle1.get_size ();
		w1 = __left0__ [0];
		h1 = __left0__ [1];
		var __left0__ = paddle2.get_size ();
		w2 = __left0__ [0];
		h2 = __left0__ [1];
	}
	for (var event of pygame.event.py_get ()) {
		if (event.py_metatype == pygame.QUIT) {
			pygame.quit ();
			return true;
		}
		else if (event.py_metatype == pygame.KEYDOWN) {
			if (event.key == pygame.K_r) {
				pressed_r = true;
			}
			else if (event.key == pygame.K_ESCAPE) {
				pressed_esc = true;
			}
			else if (event.key == pygame.K_w) {
				pressed_w = true;
			}
			else if (event.key == pygame.K_s) {
				pressed_s = true;
			}
			else if (event.key == pygame.K_UP) {
				pressed_up = true;
			}
			else if (event.key == pygame.K_DOWN) {
				pressed_down = true;
			}
		}
		else if (event.py_metatype == pygame.KEYUP) {
			if (event.key == pygame.K_r) {
				pressed_r = false;
			}
			else if (event.key == pygame.K_ESCAPE) {
				pressed_esc = false;
			}
			else if (event.key == pygame.K_w) {
				pressed_w = false;
			}
			else if (event.key == pygame.K_s) {
				pressed_s = false;
			}
			else if (event.key == pygame.K_UP) {
				pressed_up = false;
			}
			else if (event.key == pygame.K_DOWN) {
				pressed_down = false;
			}
		}
	}
	if (score_value_player1 >= win || score_value_player2 >= win) {
		screen.fill (black);
		screen.blit (end_background, tuple ([0, 0]));
		game_over_text (win);
		pygame.display.flip ();
		if (pressed_r == true) {
			pressed_r = false;
			score_value_player1 = 0;
			score_value_player2 = 0;
			start = true;
			pressed_r = false;
			return false;
		}
		else if (pressed_esc == true) {
			pressed_esc = false;
			quit = true;
			screen.fill (black);
			pygame.display.flip ();
			pygame.quit ();
			return true;
		}
		clock.tick (60);
		return false;
	}
	else {
		if (pressed_esc == true) {
			pressed_esc = false;
			quit = true;
			screen.fill (black);
			pygame.display.flip ();
			pygame.quit ();
			return true;
		}
		if (start == true) {
			pseudorand ();
			nextintersection = topygamecoords (solution [0], solution [1]);
			start = false;
		}
		helpballpos = newballpos (ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius, movement);
		if (ballgeodesicradius == 0) {
			movement += ((direction * 0.001) * ((score_value_player1 + score_value_player2) / 4 + 1)) / maxrad;
		}
		else {
			movement += ((direction * 0.001) * ((score_value_player1 + score_value_player2) / 4 + 1)) / ballgeodesicradius;
		}
		var ballpos = topygamecoords (helpballpos [0], helpballpos [1]);
		var ballradius = ball_radius (helpballpos [0], helpballpos [1]);
		if (Math.pow (ballpos [0] - nextintersection [0], 2) + Math.pow (ballpos [1] - nextintersection [1], 2) <= Math.pow (ballradius, 2) && (wall == 1 || wall == 3)) {
			if (wall == 1) {
				var wall_x = wallupcenter_x;
				var wall_y = wallupcenter_y;
				wallradius = wallrad (wall);
			}
			if (wall == 3) {
				var wall_x = walldowncenter_x;
				var wall_y = walldowncenter_y;
				wallradius = wallrad (wall);
			}
			ballgeodesic (wall);
			movement = math.atan2 (solution [1] - ballgeodesiccenter_y, solution [0] - ballgeodesiccenter_x) / (2 * math.pi);
			if (ballgeodesicradius == 0) {
				var pseudomovement = movement + (direction * 0.001) / maxrad;
			}
			else {
				var pseudomovement = movement + (direction * 0.001) / ballgeodesicradius;
			}
			pseudopos = newballpos (ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius, pseudomovement);
			if (Math.pow (pseudopos [0] - wall_x, 2) + Math.pow (pseudopos [1] - wall_y, 2) < Math.pow (wallradius, 2)) {
				direction *= -(1);
			}
			oldsolution = solution;
			findsolution2 ();
			if (wall == -(10)) {
				return true;
			}
			nextintersection = topygamecoords (solution [0], solution [1]);
		}
		else if (Math.pow (helpballpos [0] - wallplayer2center_x, 2) + Math.pow (helpballpos [1] - wallplayer2center_y, 2) <= Math.pow (wallrad (2), 2) && wall == 2) {
			score_value_player1++;
			start = true;
		}
		else if (Math.pow (helpballpos [0] - wallplayer1center_x, 2) + Math.pow (helpballpos [1] - wallplayer1center_y, 2) <= Math.pow (wallrad (4), 2) && wall == 4) {
			score_value_player2++;
			start = true;
		}
		else if (Math.pow (helpballpos [0] - wallupcenter_x, 2) + Math.pow (helpballpos [1] - wallupcenter_y, 2) < Math.pow (wallrad (1), 2) - 0.1) {
			start = true;
		}
		else if (Math.pow (helpballpos [0] - walldowncenter_x, 2) + Math.pow (helpballpos [1] - walldowncenter_y, 2) < Math.pow (wallrad (3), 2) - 0.1) {
			start = true;
		}
		screen.fill (black);
		pygame.draw.circle (screen, blue, [401, 401], 300);
		var c1 = newballpos (wallplayer1center_x, wallplayer1center_y, paddleradius, angle1);
		var c1_py = topygamecoords (c1 [0], c1 [1]);
		blitRotate (screen, paddle1, tuple ([c1_py [0], c1_py [1]]), tuple ([w1 / 2, h1 / 2]), angle_rot1);
		var x = paddle1.get_height ();
		if (math.sqrt (c1 [0] * c1 [0] + c1 [1] * c1 [1]) <= 0.66 || c1 [1] < 0) {
			if (pressed_w == true) {
				angle_rot1 += 3;
				angle1 += 0.008;
			}
		}
		if (math.sqrt (c1 [0] * c1 [0] + c1 [1] * c1 [1]) <= 0.8 || c1 [1] > 0) {
			if (pressed_s == true) {
				angle_rot1 -= 3;
				angle1 -= 0.008;
			}
		}
		paddle1 = pygame.transform.scale (paddle1, paddle_scaling (c1_py [0], c1_py [1]));
		var c2 = newballpos (wallplayer2center_x, wallplayer2center_y, -(paddleradius), angle2);
		var c2_py = topygamecoords (c2 [0], c2 [1]);
		blitRotate (screen, paddle2, tuple ([c2_py [0], c2_py [1]]), tuple ([w2 / 2, h2 / 2]), angle_rot2);
		var y = paddle2.get_height ();
		if (math.sqrt (c2 [0] * c2 [0] + c2 [1] * c2 [1]) <= 0.66 || c2 [1] < 0) {
			if (pressed_up == true) {
				angle_rot2 -= 3;
				angle2 -= 0.008;
			}
		}
		if (math.sqrt (c2 [0] * c2 [0] + c2 [1] * c2 [1]) <= 0.75 || c2 [1] > 0) {
			if (pressed_down == true) {
				angle_rot2 += 3;
				angle2 += 0.008;
			}
		}
		paddle2 = pygame.transform.scale (paddle2, paddle_scaling (c2_py [0], c2_py [1]));
		if (((c1_py [0] - paddle1.get_width () / 2) - ballradius <= nextintersection [0] && nextintersection [0] <= (c1_py [0] + paddle1.get_width () / 2) + ballradius) && ((c1_py [1] - paddle1.get_height () / 2) - ballradius <= nextintersection [1] && nextintersection [1] <= (c1_py [1] + paddle1.get_height () / 2) + ballradius) && Math.pow (ballpos [0] - nextintersection [0], 2) + Math.pow (ballpos [1] - nextintersection [1], 2) <= Math.pow (ballradius, 2)) {
			ballgeodesic (wall);
			movement = math.atan2 (solution [1] - ballgeodesiccenter_y, solution [0] - ballgeodesiccenter_x) / (2 * math.pi);
			if (ballgeodesicradius == 0) {
				var pseudomovement = movement + (direction * 0.001) / maxrad;
			}
			else {
				var pseudomovement = movement + (direction * 0.001) / ballgeodesicradius;
			}
			pseudopos = newballpos (ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius, pseudomovement);
			if (Math.pow (pseudopos [0] - wallplayer1center_x, 2) + Math.pow (pseudopos [1] - wallplayer1center_y, 2) < Math.pow (paddleradius, 2)) {
				direction *= -(1);
			}
			oldsolution = solution;
			findsolution2 ();
			if (wall == -(10)) {
				return true;
			}
			nextintersection = topygamecoords (solution [0], solution [1]);
		}
		if (((c2_py [0] + paddle2.get_width () / 2) + ballradius >= nextintersection [0] && nextintersection [0] >= (c2_py [0] - paddle2.get_width () / 2) - ballradius) && ((c2_py [1] - paddle2.get_height () / 2) - ballradius <= nextintersection [1] && nextintersection [1] <= (c2_py [1] + paddle2.get_height () / 2) + ballradius) && Math.pow (ballpos [0] - nextintersection [0], 2) + Math.pow (ballpos [1] - nextintersection [1], 2) <= Math.pow (ballradius, 2)) {
			ballgeodesic (wall);
			movement = math.atan2 (solution [1] - ballgeodesiccenter_y, solution [0] - ballgeodesiccenter_x) / (2 * math.pi);
			if (ballgeodesicradius == 0) {
				var pseudomovement = movement + (direction * 0.001) / maxrad;
			}
			else {
				var pseudomovement = movement + (direction * 0.001) / ballgeodesicradius;
			}
			pseudopos = newballpos (ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius, pseudomovement);
			if (Math.pow (pseudopos [0] - wallplayer2center_x, 2) + Math.pow (pseudopos [1] - wallplayer2center_y, 2) < Math.pow (paddleradius, 2)) {
				direction *= -(1);
			}
			oldsolution = solution;
			findsolution2 ();
			if (wall == -(10)) {
				return true;
			}
			nextintersection = topygamecoords (solution [0], solution [1]);
		}
		pygame.draw.circle (screen, grey, [topygamecoords (wallupcenter_x, wallupcenter_y) [0], topygamecoords (wallupcenter_x, wallupcenter_y) [1]], topygameradius (wallup._radius), 5);
		pygame.draw.circle (screen, grey, [topygamecoords (walldowncenter_x, walldowncenter_y) [0], topygamecoords (walldowncenter_x, walldowncenter_y) [1]], topygameradius (walldown._radius), 5);
		pygame.draw.circle (screen, red, [topygamecoords (wallplayer1center_x, wallplayer1center_y) [0], topygamecoords (wallplayer1center_x, wallplayer1center_y) [1]], topygameradius (wallplayer1._radius), 5);
		pygame.draw.circle (screen, turquoise, [topygamecoords (wallplayer2center_x, wallplayer2center_y) [0], topygamecoords (wallplayer2center_x, wallplayer2center_y) [1]], topygameradius (wallplayer2._radius), 5);
		pygame.draw.circle (screen, ball_colour, [ballpos [0], ballpos [1]], ballradius);
		pygame.draw.polygon (screen, black, [[0, 0], [0, 377], [377, 0]]);
		pygame.draw.polygon (screen, black, [[801, 0], [801 - 377, 0], [801, 377]]);
		pygame.draw.polygon (screen, black, [[0, 801], [0, 801 - 377], [377, 801]]);
		pygame.draw.polygon (screen, black, [[801, 801], [801 - 377, 801], [801, 801 - 377]]);
		show_score (360, 10);
		pygame.display.flip ();
		pygame.event.pump ();
		clock.tick (60);
		return false;
	}
};
export var main = function () {
	screen = setup (width, height);
	if (load_images) {
		var images = ['./paddle.jpg', './Gameoverbg.png'];
		pygame.display.setup (run, images);
	}
	else {
		pygame.display.setup (run);
	}
};
export var main2 = function () {
	screen = setup (width, height);
	var quit = false;
	while (!(quit)) {
		var quit = run ();
	}
};
if (__name__ == '__main__') {
	if (platform == 'js') {
		main ();
	}
	else if (platform == 'pc') {
		main2 ();
	}
}

//# sourceMappingURL=maingame.map