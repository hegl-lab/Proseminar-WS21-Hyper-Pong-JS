// Transcrypt'ed from Python, 2022-03-23 20:43:11
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Surface} from './pyjsdl.surface.js';
import {fabs as _fabs} from './pyjsdl.pyjsobj.js';
import {ceil as _ceil, cos as _cos, pi as _pi, sin as _sin} from './math.js';
var __name__ = 'pyjsdl.transform';
export var __docformat__ = 'restructuredtext';
export var __doc__ = 'Surface transformation';
export var _deg_rad = _pi / 180.0;
export var rotate = function (surface, angle) {
	if (!(angle)) {
		return surface.copy ();
	}
	var theta = angle * _deg_rad;
	var width_i = surface.get_width ();
	var height_i = surface.get_height ();
	var cos_theta = _fabs (_cos (theta));
	var sin_theta = _fabs (_sin (theta));
	var width_f = int (width_i * cos_theta + height_i * sin_theta);
	var height_f = int (width_i * sin_theta + height_i * cos_theta);
	var surf = Surface (tuple ([width_f, height_f]));
	surf.saveContext ();
	surf.translate (width_f / 2.0, height_f / 2.0);
	surf.rotate (-(theta));
	surf.drawImage (surface.canvas, -(width_i) / 2, -(height_i) / 2);
	surf.restoreContext ();
	return surf;
};
export var rotozoom = function (surface, angle, size) {
	if (!(angle)) {
		var width = int (surface.get_width () * size);
		var height = int (surface.get_height () * size);
		return scale (surface, tuple ([width, height]));
	}
	var theta = angle * _deg_rad;
	var width_i = int (surface.get_width () * size);
	var height_i = int (surface.get_height () * size);
	var cos_theta = _fabs (_cos (theta));
	var sin_theta = _fabs (_sin (theta));
	var width_f = int (_ceil (width_i * cos_theta + height_i * sin_theta));
	if (__mod__ (width_f, 2)) {
		width_f++;
	}
	var height_f = int (_ceil (width_i * sin_theta + height_i * cos_theta));
	if (__mod__ (height_f, 2)) {
		height_f++;
	}
	var surf = Surface (tuple ([width_f, height_f]));
	surf.saveContext ();
	surf.translate (width_f / 2.0, height_f / 2.0);
	surf.rotate (-(theta));
	surf.drawImage (surface.canvas, 0, 0, surface.get_width (), surface.get_height (), -(width_i) / 2, -(height_i) / 2, width_i, height_i);
	surf.restoreContext ();
	return surf;
};
export var scale = function (surface, size, dest) {
	if (typeof dest == 'undefined' || (dest != null && dest.hasOwnProperty ("__kwargtrans__"))) {;
		var dest = null;
	};
	if (!(dest)) {
		var surf = Surface (size);
	}
	else {
		var surf = dest;
	}
	surf.drawImage (surface.canvas, 0, 0, surface.get_width (), surface.get_height (), 0, 0, size [0], size [1]);
	return surf;
};
export var smoothscale = function (surface, size) {
	return scale (surface, size);
};
export var scale2x = function (surface, dest) {
	if (typeof dest == 'undefined' || (dest != null && dest.hasOwnProperty ("__kwargtrans__"))) {;
		var dest = null;
	};
	return scale (surface, tuple ([surface.get_width () * 2, surface.get_height () * 2]), dest);
};
export var flip = function (surface, xbool, ybool) {
	if (typeof xbool == 'undefined' || (xbool != null && xbool.hasOwnProperty ("__kwargtrans__"))) {;
		var xbool = true;
	};
	if (typeof ybool == 'undefined' || (ybool != null && ybool.hasOwnProperty ("__kwargtrans__"))) {;
		var ybool = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'surface': var surface = __allkwargs0__ [__attrib0__]; break;
					case 'xbool': var xbool = __allkwargs0__ [__attrib0__]; break;
					case 'ybool': var ybool = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var surf = Surface (tuple ([surface.get_width (), surface.get_height ()]));
	surf.saveContext ();
	if (xbool && ybool) {
		surf.translate (surface.get_width (), surface.get_height ());
		surf.scale (-(1), -(1));
	}
	else if (xbool) {
		surf.translate (surface.get_width (), 0);
		surf.scale (-(1), 1);
	}
	else if (ybool) {
		surf.translate (0, surface.get_height ());
		surf.scale (1, -(1));
	}
	surf.drawImage (surface.canvas, 0, 0);
	surf.restoreContext ();
	return surf;
};

//# sourceMappingURL=pyjsdl.transform.map