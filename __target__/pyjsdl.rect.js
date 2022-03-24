// Transcrypt'ed from Python, 2022-03-23 20:43:08
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'pyjsdl.rect';
export var __docformat__ = 'restructuredtext';
export var Rect =  __class__ ('Rect', [object], {
	__module__: __name__,
	__slots__: ['_x', '_y', '_width', '_height'],
	get __init__ () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		if (__eq__ (__call__ (len, null, args), 1)) {
			var arg = __getitem__ (args, 0);
		}
		else {
			var arg = args;
		}
		var ln = __call__ (len, null, arg);
		if (__eq__ (ln, 4)) {
			var __left0__ = tuple ([__getitem__ (arg, 0), __getitem__ (arg, 1), __getitem__ (arg, 2), __getitem__ (arg, 3)]);
			var x = __left0__ [0];
			var y = __left0__ [1];
			var width = __left0__ [2];
			var height = __left0__ [3];
		}
		else if (__eq__ (ln, 2)) {
			var __left0__ = tuple ([__getitem__ (__getitem__ (arg, 0), 0), __getitem__ (__getitem__ (arg, 0), 1), __getitem__ (__getitem__ (arg, 1), 0), __getitem__ (__getitem__ (arg, 1), 1)]);
			var x = __left0__ [0];
			var y = __left0__ [1];
			var width = __left0__ [2];
			var height = __left0__ [3];
		}
		else {
			if (__call__ (hasattr, null, arg, 'rect')) {
				var arg = arg.rect;
			}
			var __left0__ = tuple ([arg.x, arg.y, arg.width, arg.height]);
			var x = __left0__ [0];
			var y = __left0__ [1];
			var width = __left0__ [2];
			var height = __left0__ [3];
		}
		self._x = __call__ (int, null, x);
		self._y = __call__ (int, null, y);
		self._width = __call__ (int, null, width);
		self._height = __call__ (int, null, height);
	});},
	get __str__ () {return __get__ (this, function (self) {
		return '<rect({}, {}, {}, {})>'.format (self.x, self.y, self.width, self.height);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return '{}({}, {}, {}, {})'.format (self.__class__.__name__, self.x, self.y, self.width, self.height);
	});},
	get __getitem__ () {return __get__ (this, function (self, key) {
		return getattr (self, tuple (['x', 'y', 'width', 'height']) [key]);
	});},
	get __setitem__ () {return __get__ (this, function (self, key, val) {
		setattr (self, tuple (['x', 'y', 'width', 'height']) [key], val);
	});},
	get __iter__ () {return __get__ (this, function (self) {
		return py_iter ([self.x, self.y, self.width, self.height]);
	});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __len__ () {return __get__ (this, function (self) {
		return 4;
	});},
	get __bool__ () {return __get__ (this, function (self) {
		return self.width && self.height;
	});},
	get __nonzero__ () {return __get__ (this, function (self) {
		return self.width && self.height;
	});},
	get __eq__ () {return __get__ (this, function (self, other) {
		return self.x == other.x && self.y == other.y && self.width == other.width && self.height == other.height;
	});},
	get __ne__ () {return __get__ (this, function (self, other) {
		return self.x != other.x || self.y != other.y || self.width != other.width || self.height != other.height;
	});},
	get setLocation () {return __get__ (this, function (self, x, y) {
		self._x = int (x);
		self._y = int (y);
		return null;
	});},
	get setSize () {return __get__ (this, function (self, w, h) {
		self._width = int (w);
		self._height = int (h);
		return null;
	});},
	get copy () {return __get__ (this, function (self) {
		return Rect (self.x, self.y, self.width, self.height);
	});},
	get move () {return __get__ (this, function (self) {
		var offset = tuple ([].slice.apply (arguments).slice (1));
		if (len (offset) == 2) {
			var __left0__ = offset;
			var x = __left0__ [0];
			var y = __left0__ [1];
		}
		else {
			var __left0__ = offset [0];
			var x = __left0__ [0];
			var y = __left0__ [1];
		}
		return Rect (self.x + x, self.y + y, self.width, self.height);
	});},
	get move_ip () {return __get__ (this, function (self) {
		var offset = tuple ([].slice.apply (arguments).slice (1));
		if (len (offset) == 2) {
			var __left0__ = offset;
			var x = __left0__ [0];
			var y = __left0__ [1];
		}
		else {
			var __left0__ = offset [0];
			var x = __left0__ [0];
			var y = __left0__ [1];
		}
		self.setLocation (self.x + x, self.y + y);
		return null;
	});},
	get inflate () {return __get__ (this, function (self) {
		var offset = tuple ([].slice.apply (arguments).slice (1));
		if (len (offset) == 2) {
			var __left0__ = offset;
			var x = __left0__ [0];
			var y = __left0__ [1];
		}
		else {
			var __left0__ = offset [0];
			var x = __left0__ [0];
			var y = __left0__ [1];
		}
		return Rect (self.x - Math.floor (x / 2), self.y - Math.floor (y / 2), self.width + x, self.height + y);
	});},
	get inflate_ip () {return __get__ (this, function (self) {
		var offset = tuple ([].slice.apply (arguments).slice (1));
		if (len (offset) == 2) {
			var __left0__ = offset;
			var x = __left0__ [0];
			var y = __left0__ [1];
		}
		else {
			var __left0__ = offset [0];
			var x = __left0__ [0];
			var y = __left0__ [1];
		}
		self.setSize (self.width + x, self.height + y);
		self.setLocation (self.x - Math.floor (x / 2), self.y - Math.floor (y / 2));
		return null;
	});},
	get clip () {return __get__ (this, function (self, rect) {
		if (!(self.intersects (rect))) {
			return Rect (0, 0, 0, 0);
		}
		else {
			var x = (self.x > rect.x ? self.x : rect.x);
			var y = (self.y > rect.y ? self.y : rect.y);
			var s = self.x + self.width;
			var r = rect.x + rect.width;
			var w = (s < r ? s : r) - x;
			var s = self.y + self.height;
			var r = rect.y + rect.height;
			var h = (s < r ? s : r) - y;
			return Rect (x, y, w, h);
		}
	});},
	get intersection () {return __get__ (this, function (self, rect) {
		return self.clip (rect);
	});},
	get contains () {return __get__ (this, function (self, rect) {
		return self.x <= rect.x && self.x + self.width >= rect.x + rect.width && self.y <= rect.y && self.y + self.height >= rect.y + rect.height;
	});},
	get intersects () {return __get__ (this, function (self, rect) {
		return self.x < rect.x + rect.width && rect.x < self.x + self.width && self.y < rect.y + rect.height && rect.y < self.y + self.height;
	});},
	get union () {return __get__ (this, function (self, rect) {
		var x = (self.x < rect.x ? self.x : rect.x);
		var y = (self.y < rect.y ? self.y : rect.y);
		var s = self.x + self.width;
		var r = rect.x + rect.width;
		var w = (s > r ? s : r) - x;
		var s = self.y + self.height;
		var r = rect.y + rect.height;
		var h = (s > r ? s : r) - y;
		return Rect (x, y, w, h);
	});},
	get union_ip () {return __get__ (this, function (self, rect) {
		var x = (self.x < rect.x ? self.x : rect.x);
		var y = (self.y < rect.y ? self.y : rect.y);
		var s = self.x + self.width;
		var r = rect.x + rect.width;
		var w = (s > r ? s : r) - x;
		var s = self.y + self.height;
		var r = rect.y + rect.height;
		var h = (s > r ? s : r) - y;
		self.x = x;
		self.y = y;
		self.width = w;
		self.height = h;
		return null;
	});},
	get unionall () {return __get__ (this, function (self, rect_list) {
		var x1 = self.x;
		var y1 = self.y;
		var x2 = self.x + self.width;
		var y2 = self.y + self.height;
		for (var r of rect_list) {
			if (r.x < x1) {
				var x1 = r.x;
			}
			if (r.y < y1) {
				var y1 = r.y;
			}
			var rx2 = r.x + r.width;
			if (rx2 > x2) {
				var x2 = rx2;
			}
			var ry2 = r.y + r.height;
			if (ry2 > y2) {
				var y2 = ry2;
			}
		}
		return Rect (x1, y1, x2 - x1, y2 - y1);
	});},
	get unionall_ip () {return __get__ (this, function (self, rect_list) {
		var x1 = self.x;
		var y1 = self.y;
		var x2 = self.x + self.width;
		var y2 = self.y + self.height;
		for (var r of rect_list) {
			if (r.x < x1) {
				var x1 = r.x;
			}
			if (r.y < y1) {
				var y1 = r.y;
			}
			var rx2 = r.x + r.width;
			if (rx2 > x2) {
				var x2 = rx2;
			}
			var ry2 = r.y + r.height;
			if (ry2 > y2) {
				var y2 = ry2;
			}
		}
		self.x = x1;
		self.y = y1;
		self.width = x2 - x1;
		self.height = y2 - y1;
		return null;
	});},
	get clamp () {return __get__ (this, function (self, rect) {
		if (self.width < rect.width) {
			if (self.x < rect.x) {
				var x = rect.x;
			}
			else if (self.x + self.width > rect.x + rect.width) {
				var x = (rect.x + rect.width) - self.width;
			}
			else {
				var x = self.x;
			}
		}
		else {
			var x = rect.x - int ((self.width - rect.width) / 2);
		}
		if (self.height < rect.height) {
			if (self.y < rect.y) {
				var y = rect.y;
			}
			else if (self.y + self.height > rect.y + rect.height) {
				var y = (rect.y + rect.height) - self.height;
			}
			else {
				var y = self.y;
			}
		}
		else {
			var y = rect.y - int ((self.height - rect.height) / 2);
		}
		return Rect (x, y, self.width, self.height);
	});},
	get clamp_ip () {return __get__ (this, function (self, rect) {
		if (self.width < rect.width) {
			if (self.x < rect.x) {
				var x = rect.x;
			}
			else if (self.x + self.width > rect.x + rect.width) {
				var x = (rect.x + rect.width) - self.width;
			}
			else {
				var x = self.x;
			}
		}
		else {
			var x = rect.x - int ((self.width - rect.width) / 2);
		}
		if (self.height < rect.height) {
			if (self.y < rect.y) {
				var y = rect.y;
			}
			else if (self.y + self.height > rect.y + rect.height) {
				var y = (rect.y + rect.height) - self.height;
			}
			else {
				var y = self.y;
			}
		}
		else {
			var y = rect.y - int ((self.height - rect.height) / 2);
		}
		self.setLocation (x, y);
		return null;
	});},
	get set () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		if (len (args) == 1) {
			var arg = args [0];
		}
		else {
			var arg = args;
		}
		var ln = len (arg);
		if (ln == 4) {
			var __left0__ = tuple ([arg [0], arg [1], arg [2], arg [3]]);
			var x = __left0__ [0];
			var y = __left0__ [1];
			var width = __left0__ [2];
			var height = __left0__ [3];
		}
		else if (ln == 2) {
			var __left0__ = tuple ([arg [0] [0], arg [0] [1], arg [1] [0], arg [1] [1]]);
			var x = __left0__ [0];
			var y = __left0__ [1];
			var width = __left0__ [2];
			var height = __left0__ [3];
		}
		else {
			if (hasattr (arg, 'rect')) {
				var arg = arg.rect;
			}
			var __left0__ = tuple ([arg.x, arg.y, arg.width, arg.height]);
			var x = __left0__ [0];
			var y = __left0__ [1];
			var width = __left0__ [2];
			var height = __left0__ [3];
		}
		self._x = int (x);
		self._y = int (y);
		self._width = int (width);
		self._height = int (height);
	});},
	get collidepoint () {return __get__ (this, function (self) {
		var point = tuple ([].slice.apply (arguments).slice (1));
		if (len (point) == 2) {
			return (self.x <= point [0] && point [0] < self.x + self.width) && (self.y <= point [1] && point [1] < self.y + self.height);
		}
		else {
			return (self.x <= point [0] [0] && point [0] [0] < self.x + self.width) && (self.y <= point [0] [1] && point [0] [1] < self.y + self.height);
		}
	});},
	get colliderect () {return __get__ (this, function (self, rect) {
		return self.intersects (rect);
	});},
	get collidelist () {return __get__ (this, function (self, rects) {
		for (var [i, rect] of enumerate (rects)) {
			if (self.intersects (rect)) {
				return i;
			}
		}
		return -(1);
	});},
	get collidelistall () {return __get__ (this, function (self, rects) {
		var collided = [];
		for (var [i, rect] of enumerate (rects)) {
			if (self.colliderect (rect)) {
				collided.append (i);
			}
		}
		return collided;
	});},
	get collidedict () {return __get__ (this, function (self, rects) {
		for (var rect of rects.py_keys ()) {
			if (self.colliderect (rects [rect])) {
				return tuple ([rect, rects [rect]]);
			}
		}
		return null;
	});},
	get collidedictall () {return __get__ (this, function (self, rects) {
		var collided = [];
		for (var rect of rects.py_keys ()) {
			if (self.colliderect (rects [rect])) {
				collided.append (tuple ([rect, rects [rect]]));
			}
		}
		return collided;
	});},
	get _get_x () {return __get__ (this, function (self) {
		return self._x;
	});},
	get _get_y () {return __get__ (this, function (self) {
		return self._y;
	});},
	get _get_width () {return __get__ (this, function (self) {
		return self._width;
	});},
	get _get_height () {return __get__ (this, function (self) {
		return self._height;
	});},
	get _get_center () {return __get__ (this, function (self) {
		return tuple ([self.x + Math.floor (self.width / 2), self.y + Math.floor (self.height / 2)]);
	});},
	get _get_centerx () {return __get__ (this, function (self) {
		return self.x + Math.floor (self.width / 2);
	});},
	get _get_centery () {return __get__ (this, function (self) {
		return self.y + Math.floor (self.height / 2);
	});},
	get _get_top () {return __get__ (this, function (self) {
		return self.y;
	});},
	get _get_left () {return __get__ (this, function (self) {
		return self.x;
	});},
	get _get_bottom () {return __get__ (this, function (self) {
		return self.y + self.height;
	});},
	get _get_right () {return __get__ (this, function (self) {
		return self.x + self.width;
	});},
	get _get_topleft () {return __get__ (this, function (self) {
		return tuple ([self.x, self.y]);
	});},
	get _get_bottomleft () {return __get__ (this, function (self) {
		return tuple ([self.x, self.y + self.height]);
	});},
	get _get_topright () {return __get__ (this, function (self) {
		return tuple ([self.x + self.width, self.y]);
	});},
	get _get_bottomright () {return __get__ (this, function (self) {
		return tuple ([self.x + self.width, self.y + self.height]);
	});},
	get _get_midtop () {return __get__ (this, function (self) {
		return tuple ([self.x + Math.floor (self.width / 2), self.y]);
	});},
	get _get_midleft () {return __get__ (this, function (self) {
		return tuple ([self.x, self.y + Math.floor (self.height / 2)]);
	});},
	get _get_midbottom () {return __get__ (this, function (self) {
		return tuple ([self.x + Math.floor (self.width / 2), self.y + self.height]);
	});},
	get _get_midright () {return __get__ (this, function (self) {
		return tuple ([self.x + self.width, self.y + Math.floor (self.height / 2)]);
	});},
	get _get_size () {return __get__ (this, function (self) {
		return tuple ([self.width, self.height]);
	});},
	get _get_w () {return __get__ (this, function (self) {
		return self.width;
	});},
	get _get_h () {return __get__ (this, function (self) {
		return self.height;
	});},
	get _set_x () {return __get__ (this, function (self, val) {
		self._x = int (val);
	});},
	get _set_y () {return __get__ (this, function (self, val) {
		self._y = int (val);
	});},
	get _set_width () {return __get__ (this, function (self, val) {
		self._width = int (val);
	});},
	get _set_height () {return __get__ (this, function (self, val) {
		self._height = int (val);
	});},
	get _set_center () {return __get__ (this, function (self, val) {
		self.setLocation (val [0] - Math.floor (self.width / 2), val [1] - Math.floor (self.height / 2));
	});},
	get _set_centerx () {return __get__ (this, function (self, val) {
		self.setLocation (val - Math.floor (self.width / 2), self.y);
	});},
	get _set_centery () {return __get__ (this, function (self, val) {
		self.setLocation (self.x, val - Math.floor (self.height / 2));
	});},
	get _set_top () {return __get__ (this, function (self, val) {
		self.setLocation (self.x, val);
	});},
	get _set_left () {return __get__ (this, function (self, val) {
		self.setLocation (val, self.y);
	});},
	get _set_bottom () {return __get__ (this, function (self, val) {
		self.setLocation (self.x, val - self.height);
	});},
	get _set_right () {return __get__ (this, function (self, val) {
		self.setLocation (val - self.width, self.y);
	});},
	get _set_topleft () {return __get__ (this, function (self, val) {
		self.setLocation (val [0], val [1]);
	});},
	get _set_bottomleft () {return __get__ (this, function (self, val) {
		self.setLocation (val [0], val [1] - self.height);
	});},
	get _set_topright () {return __get__ (this, function (self, val) {
		self.setLocation (val [0] - self.width, val [1]);
	});},
	get _set_bottomright () {return __get__ (this, function (self, val) {
		self.setLocation (val [0] - self.width, val [1] - self.height);
	});},
	get _set_midtop () {return __get__ (this, function (self, val) {
		self.setLocation (val [0] - Math.floor (self.width / 2), val [1]);
	});},
	get _set_midleft () {return __get__ (this, function (self, val) {
		self.setLocation (val [0], val [1] - Math.floor (self.height / 2));
	});},
	get _set_midbottom () {return __get__ (this, function (self, val) {
		self.setLocation (val [0] - Math.floor (self.width / 2), val [1] - self.height);
	});},
	get _set_midright () {return __get__ (this, function (self, val) {
		self.setLocation (val [0] - self.width, val [1] - Math.floor (self.height / 2));
	});},
	get _set_size () {return __get__ (this, function (self, val) {
		self.setSize (val [0], val [1]);
	});},
	get _set_w () {return __get__ (this, function (self, val) {
		self.setSize (val, self.height);
	});},
	get _set_h () {return __get__ (this, function (self, val) {
		self.setSize (self.width, val);
	});}
});
Object.defineProperty (Rect, 'h', property.call (Rect, Rect._get_h, Rect._set_h));
Object.defineProperty (Rect, 'w', property.call (Rect, Rect._get_w, Rect._set_w));
Object.defineProperty (Rect, 'size', property.call (Rect, Rect._get_size, Rect._set_size));
Object.defineProperty (Rect, 'midright', property.call (Rect, Rect._get_midright, Rect._set_midright));
Object.defineProperty (Rect, 'midbottom', property.call (Rect, Rect._get_midbottom, Rect._set_midbottom));
Object.defineProperty (Rect, 'midleft', property.call (Rect, Rect._get_midleft, Rect._set_midleft));
Object.defineProperty (Rect, 'midtop', property.call (Rect, Rect._get_midtop, Rect._set_midtop));
Object.defineProperty (Rect, 'bottomright', property.call (Rect, Rect._get_bottomright, Rect._set_bottomright));
Object.defineProperty (Rect, 'topright', property.call (Rect, Rect._get_topright, Rect._set_topright));
Object.defineProperty (Rect, 'bottomleft', property.call (Rect, Rect._get_bottomleft, Rect._set_bottomleft));
Object.defineProperty (Rect, 'topleft', property.call (Rect, Rect._get_topleft, Rect._set_topleft));
Object.defineProperty (Rect, 'right', property.call (Rect, Rect._get_right, Rect._set_right));
Object.defineProperty (Rect, 'bottom', property.call (Rect, Rect._get_bottom, Rect._set_bottom));
Object.defineProperty (Rect, 'left', property.call (Rect, Rect._get_left, Rect._set_left));
Object.defineProperty (Rect, 'top', property.call (Rect, Rect._get_top, Rect._set_top));
Object.defineProperty (Rect, 'centery', property.call (Rect, Rect._get_centery, Rect._set_centery));
Object.defineProperty (Rect, 'centerx', property.call (Rect, Rect._get_centerx, Rect._set_centerx));
Object.defineProperty (Rect, 'center', property.call (Rect, Rect._get_center, Rect._set_center));
Object.defineProperty (Rect, 'height', property.call (Rect, Rect._get_height, Rect._set_height));
Object.defineProperty (Rect, 'width', property.call (Rect, Rect._get_width, Rect._set_width));
Object.defineProperty (Rect, 'y', property.call (Rect, Rect._get_y, Rect._set_y));
Object.defineProperty (Rect, 'x', property.call (Rect, Rect._get_x, Rect._set_x));;
export var RectPool =  __class__ ('RectPool', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._l = [];
		self.add = self.append;
		self.addAll = self.extend;
	});},
	get append () {return __get__ (this, function (self, item) {
		self._l.append (item);
	});},
	get extend () {return __get__ (this, function (self, lst) {
		self._l.extend (lst);
	});},
	get py_get () {return __get__ (this, function (self, x, y, width, height) {
		if (len (self._l) > 0) {
			var rect = self._l.py_pop ();
			rect.x = x;
			rect.y = y;
			rect.width = width;
			rect.height = height;
			return rect;
		}
		else {
			return Rect (x, y, width, height);
		}
	});},
	get copy () {return __get__ (this, function (self, r) {
		if (len (self._l) > 0) {
			var rect = self._l.py_pop ();
			rect.x = r.x;
			rect.y = r.y;
			rect.width = r.width;
			rect.height = r.height;
			return rect;
		}
		else {
			return Rect (r.x, r.y, r.width, r.height);
		}
	});}
});
export var rectPool = RectPool ();

//# sourceMappingURL=pyjsdl.rect.map