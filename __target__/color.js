// Transcrypt'ed from Python, 2022-03-23 20:43:13
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'color';
export var Color =  __class__ ('Color', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, red, green, blue, opacity) {
		if (typeof red == 'undefined' || (red != null && red.hasOwnProperty ("__kwargtrans__"))) {;
			var red = 0;
		};
		if (typeof green == 'undefined' || (green != null && green.hasOwnProperty ("__kwargtrans__"))) {;
			var green = 0;
		};
		if (typeof blue == 'undefined' || (blue != null && blue.hasOwnProperty ("__kwargtrans__"))) {;
			var blue = 0;
		};
		if (typeof opacity == 'undefined' || (opacity != null && opacity.hasOwnProperty ("__kwargtrans__"))) {;
			var opacity = 1.0;
		};
		if (red < 0 || red > 255) {
			var __except0__ = ValueError ('Red value is not in range 0...255.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (green < 0 || green > 255) {
			var __except0__ = ValueError ('Green value is not in range 0...255.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (blue < 0 || blue > 255) {
			var __except0__ = ValueError ('Blue value is not in range 0...255.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (opacity < 0 || opacity > 1) {
			var __except0__ = ValueError ('Opacity value is not in range 0...1.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._red = red;
		self._green = green;
		self._blue = blue;
		self._opacity = opacity;
	});},
	get __mod__ () {return __get__ (this, function (self, opacity_factor) {
		if (opacity_factor < 0.0 || opacity_factor > 1.0) {
			var __except0__ = ValueError ('Opacity factor has to be between 0.0 and 1.0.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return Color (self._red, self._green, self._blue, self._opacity * opacity_factor);
	});},
	get getOpacity () {return __get__ (this, function (self) {
		return self._opacity;
	});}
});
export var Black = Color (0, 0, 0, 1);
export var White = Color (255, 255, 255, 1);
export var Gray = Color (190, 190, 190, 1);
export var DarkGray = Color (196, 196, 196, 1);
export var LightGray = Color (211, 211, 211, 1);
export var Red = Color (255, 0, 0, 1);
export var Lime = Color (0, 255, 0, 1);
export var Green = Color (0, 139, 0, 1);
export var Blue = Color (0, 0, 255, 1);
export var Yellow = Color (255, 255, 0, 1);
export var Cyan = Color (0, 255, 255, 1);
export var Magenta = Color (255, 0, 255, 1);
export var NoFill = Color (0, 0, 0, 0);

//# sourceMappingURL=color.map