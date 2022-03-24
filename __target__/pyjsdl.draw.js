// Transcrypt'ed from Python, 2022-03-23 20:43:11
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Color} from './pyjsdl.color.js';
import {Rect} from './pyjsdl.rect.js';
import {pi as _pi} from './math.js';
var __name__ = 'pyjsdl.draw';
export var __docformat__ = 'restructuredtext';
export var __doc__ = 'Draw shapes';
export var _return_rect = true;
export var rect = function (surface, color, rect, width) {
	if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
		var width = 0;
	};
	if (hasattr (rect, 'width')) {
		var _rect = rect;
	}
	else {
		var _rect = Rect (rect);
	}
	if (width) {
		surface.setLineWidth (width);
		if (surface._stroke_style != color) {
			surface._stroke_style = color;
			if (hasattr (color, 'a')) {
				surface.setStrokeStyle (color);
			}
			else {
				surface.setStrokeStyle (Color (color));
			}
		}
		surface.strokeRect (_rect.x, _rect.y, _rect.width, _rect.height);
	}
	else {
		if (surface._fill_style != color) {
			surface._fill_style = color;
			if (hasattr (color, 'a')) {
				surface.setFillStyle (color);
			}
			else {
				surface.setFillStyle (Color (color));
			}
		}
		surface.fillRect (_rect.x, _rect.y, _rect.width, _rect.height);
	}
	if (!(_return_rect)) {
		return null;
	}
	if (surface._display) {
		return surface._display._surface_rect.clip (_rect);
	}
	else {
		return surface.get_rect ().clip (_rect);
	}
};
export var circle = function (surface, color, position, radius, width) {
	if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
		var width = 0;
	};
	surface.beginPath ();
	surface.arc (position [0], position [1], radius, 0, 2 * _pi, false);
	if (width) {
		surface.setLineWidth (width);
		if (surface._stroke_style != color) {
			surface._stroke_style = color;
			if (hasattr (color, 'a')) {
				surface.setStrokeStyle (color);
			}
			else {
				surface.setStrokeStyle (Color (color));
			}
		}
		surface.stroke ();
	}
	else {
		if (surface._fill_style != color) {
			surface._fill_style = color;
			if (hasattr (color, 'a')) {
				surface.setFillStyle (color);
			}
			else {
				surface.setFillStyle (Color (color));
			}
		}
		surface.fill ();
	}
	if (!(_return_rect)) {
		return null;
	}
	if (surface._display) {
		return surface._display._surface_rect.clip (Rect (position [0] - radius, position [1] - radius, 2 * radius, 2 * radius));
	}
	else {
		return surface.get_rect ().clip (Rect (position [0] - radius, position [1] - radius, 2 * radius, 2 * radius));
	}
};
export var ellipse = function (surface, color, rect, width) {
	if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
		var width = 0;
	};
	if (hasattr (rect, 'width')) {
		var _rect = rect;
	}
	else {
		var _rect = Rect (rect);
	}
	surface.saveContext ();
	surface.translate (_rect.x + int (_rect.width / 2), _rect.y + int (_rect.height / 2));
	if (_rect.width >= _rect.height) {
		surface.scale (_rect.width / (_rect.height * 1.0), 1);
		var radius = int (_rect.height / 2);
	}
	else {
		surface.scale (1, _rect.height / (_rect.width * 1.0));
		var radius = int (_rect.width / 2);
	}
	surface.beginPath ();
	surface.arc (0, 0, radius, 0, 2 * _pi, false);
	if (width) {
		surface.setLineWidth (width);
		if (surface._stroke_style != color) {
			surface._stroke_style = color;
			if (hasattr (color, 'a')) {
				surface.setStrokeStyle (color);
			}
			else {
				surface.setStrokeStyle (Color (color));
			}
		}
		surface.stroke ();
	}
	else {
		if (surface._fill_style != color) {
			surface._fill_style = color;
			if (hasattr (color, 'a')) {
				surface.setFillStyle (color);
			}
			else {
				surface.setFillStyle (Color (color));
			}
		}
		surface.fill ();
	}
	surface.restoreContext ();
	if (!(_return_rect)) {
		return null;
	}
	if (surface._display) {
		return surface._display._surface_rect.clip (_rect);
	}
	else {
		return surface.get_rect ().clip (_rect);
	}
};
export var arc = function (surface, color, rect, start_angle, stop_angle, width) {
	if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
		var width = 1;
	};
	if (hasattr (rect, 'width')) {
		var _rect = rect;
	}
	else {
		var _rect = Rect (rect);
	}
	if (_rect.width == _rect.height) {
		surface.beginPath ();
		surface.arc (_rect.x + int (_rect.width / 2), _rect.y + int (_rect.height / 2), int (_rect.width / 2), -(start_angle), -(stop_angle), true);
		if (width) {
			surface.setLineWidth (width);
			if (surface._stroke_style != color) {
				surface._stroke_style = color;
				if (hasattr (color, 'a')) {
					surface.setStrokeStyle (color);
				}
				else {
					surface.setStrokeStyle (Color (color));
				}
			}
			surface.stroke ();
		}
		else {
			surface.closePath ();
			if (surface._fill_style != color) {
				surface._fill_style = color;
				if (hasattr (color, 'a')) {
					surface.setFillStyle (color);
				}
				else {
					surface.setFillStyle (Color (color));
				}
			}
			surface.fill ();
		}
	}
	else {
		surface.saveContext ();
		surface.translate (_rect.x + int (_rect.width / 2), _rect.y + int (_rect.height / 2));
		if (_rect.width >= _rect.height) {
			surface.scale (_rect.width / (_rect.height * 1.0), 1);
			var radius = int (_rect.height / 2);
		}
		else {
			surface.scale (1, _rect.height / (_rect.width * 1.0));
			var radius = int (_rect.width / 2);
		}
		surface.beginPath ();
		surface.arc (0, 0, radius, -(start_angle), -(stop_angle), true);
		if (width) {
			surface.setLineWidth (width);
			if (surface._stroke_style != color) {
				surface._stroke_style = color;
				if (hasattr (color, 'a')) {
					surface.setStrokeStyle (color);
				}
				else {
					surface.setStrokeStyle (Color (color));
				}
			}
			surface.stroke ();
		}
		else {
			surface.closePath ();
			if (surface._fill_style != color) {
				surface._fill_style = color;
				if (hasattr (color, 'a')) {
					surface.setFillStyle (color);
				}
				else {
					surface.setFillStyle (Color (color));
				}
			}
			surface.fill ();
		}
		surface.restoreContext ();
	}
	if (!(_return_rect)) {
		return null;
	}
	if (surface._display) {
		return surface._display._surface_rect.clip (_rect);
	}
	else {
		return surface.get_rect ().clip (_rect);
	}
};
export var polygon = function (surface, color, pointlist, width) {
	if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
		var width = 0;
	};
	surface.beginPath ();
	surface.moveTo (...pointlist [0]);
	for (var point of pointlist.__getslice__ (1, null, 1)) {
		surface.lineTo (...point);
	}
	surface.closePath ();
	if (width) {
		surface.setLineWidth (width);
		if (surface._stroke_style != color) {
			surface._stroke_style = color;
			if (hasattr (color, 'a')) {
				surface.setStrokeStyle (color);
			}
			else {
				surface.setStrokeStyle (Color (color));
			}
		}
		surface.stroke ();
	}
	else {
		if (surface._fill_style != color) {
			surface._fill_style = color;
			if (hasattr (color, 'a')) {
				surface.setFillStyle (color);
			}
			else {
				surface.setFillStyle (Color (color));
			}
		}
		surface.fill ();
	}
	if (!(_return_rect)) {
		return null;
	}
	var xpts = (function () {
		var __accu0__ = [];
		for (var pt of pointlist) {
			__accu0__.append (pt [0]);
		}
		return __accu0__;
	}) ();
	var ypts = (function () {
		var __accu0__ = [];
		for (var pt of pointlist) {
			__accu0__.append (pt [1]);
		}
		return __accu0__;
	}) ();
	var __left0__ = tuple ([min (xpts), max (xpts)]);
	var xmin = __left0__ [0];
	var xmax = __left0__ [1];
	var __left0__ = tuple ([min (ypts), max (ypts)]);
	var ymin = __left0__ [0];
	var ymax = __left0__ [1];
	if (surface._display) {
		return surface._display._surface_rect.clip (Rect (xmin, ymin, (xmax - xmin) + 1, (ymax - ymin) + 1));
	}
	else {
		return surface.get_rect ().clip (Rect (xmin, ymin, (xmax - xmin) + 1, (ymax - ymin) + 1));
	}
};
export var line = function (surface, color, point1, point2, width) {
	if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
		var width = 1;
	};
	surface.beginPath ();
	surface.moveTo (...point1);
	surface.lineTo (...point2);
	surface.setLineWidth (width);
	if (surface._stroke_style != color) {
		surface._stroke_style = color;
		if (hasattr (color, 'a')) {
			surface.setStrokeStyle (color);
		}
		else {
			surface.setStrokeStyle (Color (color));
		}
	}
	surface.stroke ();
	if (!(_return_rect)) {
		return null;
	}
	var xpts = (function () {
		var __accu0__ = [];
		for (var pt of tuple ([point1, point2])) {
			__accu0__.append (pt [0]);
		}
		return __accu0__;
	}) ();
	var ypts = (function () {
		var __accu0__ = [];
		for (var pt of tuple ([point1, point2])) {
			__accu0__.append (pt [1]);
		}
		return __accu0__;
	}) ();
	var __left0__ = tuple ([min (xpts), max (xpts)]);
	var xmin = __left0__ [0];
	var xmax = __left0__ [1];
	var __left0__ = tuple ([min (ypts), max (ypts)]);
	var ymin = __left0__ [0];
	var ymax = __left0__ [1];
	if (surface._display) {
		return surface._display._surface_rect.clip (Rect (xmin, ymin, (xmax - xmin) + 1, (ymax - ymin) + 1));
	}
	else {
		return surface.get_rect ().clip (Rect (xmin, ymin, (xmax - xmin) + 1, (ymax - ymin) + 1));
	}
};
export var lines = function (surface, color, closed, pointlist, width) {
	if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
		var width = 1;
	};
	surface.beginPath ();
	surface.moveTo (...pointlist [0]);
	for (var point of pointlist.__getslice__ (1, null, 1)) {
		surface.lineTo (...point);
	}
	if (closed) {
		surface.closePath ();
	}
	surface.setLineWidth (width);
	if (surface._stroke_style != color) {
		surface._stroke_style = color;
		if (hasattr (color, 'a')) {
			surface.setStrokeStyle (color);
		}
		else {
			surface.setStrokeStyle (Color (color));
		}
	}
	surface.stroke ();
	if (!(_return_rect)) {
		return null;
	}
	var xpts = (function () {
		var __accu0__ = [];
		for (var pt of pointlist) {
			__accu0__.append (pt [0]);
		}
		return __accu0__;
	}) ();
	var ypts = (function () {
		var __accu0__ = [];
		for (var pt of pointlist) {
			__accu0__.append (pt [1]);
		}
		return __accu0__;
	}) ();
	var __left0__ = tuple ([min (xpts), max (xpts)]);
	var xmin = __left0__ [0];
	var xmax = __left0__ [1];
	var __left0__ = tuple ([min (ypts), max (ypts)]);
	var ymin = __left0__ [0];
	var ymax = __left0__ [1];
	if (surface._display) {
		return surface._display._surface_rect.clip (Rect (xmin, ymin, (xmax - xmin) + 1, (ymax - ymin) + 1));
	}
	else {
		return surface.get_rect ().clip (Rect (xmin, ymin, (xmax - xmin) + 1, (ymax - ymin) + 1));
	}
};
export var aaline = function (surface, color, point1, point2, blend) {
	if (typeof blend == 'undefined' || (blend != null && blend.hasOwnProperty ("__kwargtrans__"))) {;
		var blend = 1;
	};
	var rect = line (surface, color, point1, point2, blend);
	return rect;
};
export var aalines = function (surface, color, closed, pointlist, blend) {
	if (typeof blend == 'undefined' || (blend != null && blend.hasOwnProperty ("__kwargtrans__"))) {;
		var blend = 1;
	};
	var rect = lines (surface, color, closed, pointlist, blend);
	return rect;
};
export var bounding_rect_return = function (setting) {
	_return_rect = setting;
};
export var _set_return = function () {
	var args = tuple ([].slice.apply (arguments).slice (0));
	var msg = 'set_return depreciated, use bounding_rect_return';
	print (msg);
	var __except0__ = Exception (msg);
	__except0__.__cause__ = null;
	throw __except0__;
};
export var set_return = _set_return;

//# sourceMappingURL=pyjsdl.draw.map