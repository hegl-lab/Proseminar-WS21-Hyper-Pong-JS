// Transcrypt'ed from Python, 2022-03-23 20:43:13
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {atan2, sqrt} from './math.js';
var __name__ = 'complex_new';
export var complexNew =  __class__ ('complexNew', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y) {
		self.real = x;
		self.imag = y;
		self._arg = sqrt (x * x + y * y);
		self._phase = atan2 (y, x);
	});},
	get __add__ () {return __get__ (this, function (self, other) {
		return complexNew (self.real + other.real, self.imag + other.imag);
	});},
	get __sub__ () {return __get__ (this, function (self, other) {
		return complexNew (self.real - other.real, self.imag - other.imag);
	});},
	get __mul__ () {return __get__ (this, function (self, other) {
		return complexNew (self.real * other.real - self.imag * other.imag, self.real * other.imag + self.imag * other.real);
	});},
	get __truediv__ () {return __get__ (this, function (self, other) {
		return complexNew ((self.real * other.real + self.imag * other.imag) / self._arg, (self.real * other.imag - self.imag * other.real) / self._arg);
	});},
	get __abs__ () {return __get__ (this, function (self) {
		return self._arg;
	});},
	get conjugate () {return __get__ (this, function (self) {
		return complexNew (self.real, -(self.imag));
	});},
	get get_arg () {return __get__ (this, function (self) {
		return self._arg;
	});},
	get get_phase () {return __get__ (this, function (self) {
		return self._phase;
	});},
	get divide_real () {return __get__ (this, function (self, x) {
		return complexNew (self.real / x, self.imag / x);
	});},
	get mult_real () {return __get__ (this, function (self, x) {
		return complexNew (self.real * x, self.imag * x);
	});}
});
export var absNew = function (z) {
	return z.get_arg ();
};

//# sourceMappingURL=complex_new.map