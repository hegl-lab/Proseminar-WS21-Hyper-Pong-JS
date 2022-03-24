// Transcrypt'ed from Python, 2022-03-23 20:43:07
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Color as _Color} from './pyjsdl.pyjsobj.js';
var __name__ = 'pyjsdl.color';
export var __docformat__ = 'restructuredtext';
export var Color =  __class__ ('Color', [_Color], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var color = tuple ([].slice.apply (arguments).slice (1));
		var ln = __call__ (len, null, color);
		if (__eq__ (ln, 1)) {
			var _color = __getitem__ (color, 0);
			if (__call__ (isinstance, null, _color, tuple ([tuple, list, Color]))) {
				var ln = __call__ (len, null, _color);
			}
		}
		else {
			var _color = color;
		}
		if (__eq__ (ln, 4)) {
			var __left0__ = tuple ([__getitem__ (_color, 0), __getitem__ (_color, 1), __getitem__ (_color, 2), __getitem__ (_color, 3)]);
			self.r = __left0__ [0];
			self.g = __left0__ [1];
			self.b = __left0__ [2];
			self.a = __left0__ [3];
		}
		else if (__eq__ (ln, 3)) {
			var __left0__ = tuple ([__getitem__ (_color, 0), __getitem__ (_color, 1), __getitem__ (_color, 2), 255]);
			self.r = __left0__ [0];
			self.g = __left0__ [1];
			self.b = __left0__ [2];
			self.a = __left0__ [3];
		}
		else {
			if (__call__ (hasattr, null, _color, 'startswith') && (function () {
				var __accu0__ = _color;
				return __call__ (__accu0__.startswith, __accu0__, '#');
			}) ()) {
				var _color = __add__ ('0x', __getslice__ (_color, 1, null, 1));
			}
			var __left0__ = tuple ([__and__ (__rshift__ (_color, 16), 255), __and__ (__rshift__ (_color, 8), 255), __and__ (_color, 255), __and__ (__rshift__ (_color, 24), 255)]);
			self.r = __left0__ [0];
			self.g = __left0__ [1];
			self.b = __left0__ [2];
			self.a = __left0__ [3];
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		return 'rgba({}, {}, {}, {})'.format (self.r, self.g, self.b, self.a / 255.0);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return '({}, {}, {}, {})'.format (self.r, self.g, self.b, self.a);
	});},
	get __getitem__ () {return __get__ (this, function (self, index) {
		return dict ({0: self.r, 1: self.g, 2: self.b, 3: self.a}) [index];
	});},
	get __setitem__ () {return __get__ (this, function (self, index, val) {
		if (index == 0) {
			self.r = val;
		}
		else if (index == 1) {
			self.g = val;
		}
		else if (index == 2) {
			self.b = val;
		}
		else if (index == 3) {
			self.a = val;
		}
	});},
	get __iter__ () {return __get__ (this, function (self) {
		return py_iter ([self.r, self.g, self.b, self.a]);
	});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __len__ () {return __get__ (this, function (self) {
		return 4;
	});},
	get __eq__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, 'a')) {
			return self.r == other.r && self.g == other.g && self.b == other.b && self.a == other.a;
		}
		else if (len (other) == 4) {
			return self.a == other [3] && self.r == other [0] && self.g == other [1] && self.b == other [2];
		}
		else {
			return self.r == other [0] && self.g == other [1] && self.b == other [2];
		}
	});},
	get __ne__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, 'a')) {
			return self.r != other.r || self.g != other.g || self.b != other.b || self.a != other.a;
		}
		else if (len (other) == 4) {
			return self.a != other [3] || self.r != other [0] || self.g != other [1] || self.b != other [2];
		}
		else {
			return self.r != other [0] || self.g != other [1] || self.b != other [2];
		}
	});}
});

//# sourceMappingURL=pyjsdl.color.map