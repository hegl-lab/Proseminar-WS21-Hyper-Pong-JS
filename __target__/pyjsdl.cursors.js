// Transcrypt'ed from Python, 2022-03-23 20:43:07
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as Const from './pyjsdl.constants.js';
import {Color} from './pyjsdl.color.js';
import {Surface} from './pyjsdl.surface.js';
var __name__ = 'pyjsdl.cursors';
var __left0__ = tuple ([]);
export var arrow = __left0__;
export var diamond = __left0__;
export var broken_x = __left0__;
export var tri_left = __left0__;
export var tri_right = __left0__;
export var compile = function (strings, black, white, xor) {
	if (typeof black == 'undefined' || (black != null && black.hasOwnProperty ("__kwargtrans__"))) {;
		var black = 'X';
	};
	if (typeof white == 'undefined' || (white != null && white.hasOwnProperty ("__kwargtrans__"))) {;
		var white = '.';
	};
	if (typeof xor == 'undefined' || (xor != null && xor.hasOwnProperty ("__kwargtrans__"))) {;
		var xor = 'o';
	};
	var data = [];
	var mask = [];
	var dbit = dict ([[black, 1], [white, 0], [xor, 1]]);
	var mbit = dict ([[black, 1], [white, 1], [xor, 0]]);
	var string = ''.join (strings);
	for (var i = 0; i < len (string); i += 8) {
		var s = string.__getslice__ (i, i + 8, 1);
		var __left0__ = 0;
		var db = __left0__;
		var mb = __left0__;
		if (s != '        ') {
			for (var j = 0; j < 8; j++) {
				var c = s [j];
				if (c == ' ') {
					continue;
				}
				if (dbit [c]) {
					db |= 1 << 7 - j;
				}
				if (mbit [c]) {
					mb |= 1 << 7 - j;
				}
			}
		}
		data.append (int (db));
		mask.append (int (mb));
	}
	return tuple ([tuple (data), tuple (mask)]);
};
export var create_cursor = function (size, data, mask) {
	var surface = Surface (size, Const.SRCALPHA);
	var black = Color (0, 0, 0, 255);
	var white = Color (255, 255, 255, 255);
	var __left0__ = 0;
	var x = __left0__;
	var y = __left0__;
	for (var i = 0; i < len (data); i++) {
		if (data [i] || mask [i]) {
			for (var j = 0; j < 8; j++) {
				if (data [i] & 1 << 7 - j) {
					surface.setFillStyle (black);
					surface.fillRect (x + j, y, 1, 1);
				}
				else if (mask [i] & 1 << 7 - j) {
					surface.setFillStyle (white);
					surface.fillRect (x + j, y, 1, 1);
				}
			}
		}
		x += 8;
		if (x >= size [0]) {
			var x = 0;
			y++;
		}
	}
	return surface;
};
export var get_cursor_types = function () {
	var types = ['default', 'auto', 'none', 'context-menu', 'help', 'pointer', 'progress', 'wait', 'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'e-resize', 'n-resize', 'ne-resize', 'nw-resize', 's-resize', 'se-resize', 'sw-resize', 'w-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'zoom-in', 'zoom-out', 'grab', 'grabbing'];
	return types;
};

//# sourceMappingURL=pyjsdl.cursors.map