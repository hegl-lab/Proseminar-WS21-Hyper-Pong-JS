// Transcrypt'ed from Python, 2022-03-23 20:43:11
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {atan2, cos, floor, pi, sin, sqrt} from './math.js';
var __name__ = 'pyjsdl.vector';
export var Vector2 =  __class__ ('Vector2', [object], {
	__module__: __name__,
	__slots__: ['_x', '_y'],
	get __init__ () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		var l = len (args);
		if (l == 2) {
			self._x = float (args [0]);
			self._y = float (args [1]);
		}
		else if (l == 1) {
			if (isinstance (args [0], tuple ([int, float]))) {
				self._x = float (args [0]);
				self._y = float (args [0]);
			}
			else {
				self._x = __call__ (float, null, __getitem__ (__getitem__ (args, 0), 0));
				self._y = __call__ (float, null, __getitem__ (__getitem__ (args, 0), 1));
			}
		}
		else if (len (kwargs.py_keys ()) > 0) {
			if (__in__ ('x', kwargs.py_keys ()) && __in__ ('y', kwargs.py_keys ())) {
				self._x = float (kwargs ['x']);
				self._y = float (kwargs ['y']);
			}
			else if (__in__ ('x', kwargs.py_keys ())) {
				self._x = float (kwargs ['x']);
				self._y = float (kwargs ['x']);
			}
			else {
				self._x = float (kwargs ['y']);
				self._y = float (kwargs ['y']);
			}
		}
		else {
			self._x = 0.0;
			self._y = 0.0;
		}
	});},
	get _get_x () {return __get__ (this, function (self) {
		return self._x;
	});},
	get _set_x () {return __get__ (this, function (self, val) {
		try {
			self._x = float (val);
		}
		catch (__except0__) {
			if (isinstance (__except0__, ValueError)) {
				var __except1__ = py_TypeError ('float is required');
				__except1__.__cause__ = null;
				throw __except1__;
			}
			else {
				throw __except0__;
			}
		}
	});},
	get x () {return __get__ (this, x.deleter (function (self) {
		var __except0__ = py_TypeError ('Cannot delete the x attribute');
		__except0__.__cause__ = null;
		throw __except0__;
	}));},
	get _get_y () {return __get__ (this, function (self) {
		return self._y;
	});},
	get _set_y () {return __get__ (this, function (self, val) {
		try {
			self._y = float (val);
		}
		catch (__except0__) {
			if (isinstance (__except0__, ValueError)) {
				var __except1__ = py_TypeError ('float is required');
				__except1__.__cause__ = null;
				throw __except1__;
			}
			else {
				throw __except0__;
			}
		}
	});},
	get y () {return __get__ (this, y.deleter (function (self) {
		var __except0__ = py_TypeError ('Cannot delete the y attribute');
		__except0__.__cause__ = null;
		throw __except0__;
	}));},
	get __str__ () {return __get__ (this, function (self) {
		return '[{}, {}]'.format (self._x, self._y);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return '<{}({}, {})>'.format (self.__class__.__name__, self._x, self._y);
	});},
	get __getitem__ () {return __get__ (this, function (self, index) {
		if (__in__ (index, tuple ([0, -(2)]))) {
			return self._x;
		}
		else if (__in__ (index, tuple ([1, -(1)]))) {
			return self._y;
		}
		else if (isinstance (index, slice)) {
			return [self._x, self._y] [index];
		}
		else {
			var __except0__ = IndexError;
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __setitem__ () {return __get__ (this, function (self, index, val) {
		if (index == 0) {
			try {
				self._x = float (val);
			}
			catch (__except0__) {
				if (isinstance (__except0__, ValueError)) {
					var __except1__ = py_TypeError;
					__except1__.__cause__ = null;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		}
		else if (index == 1) {
			try {
				self._y = float (val);
			}
			catch (__except0__) {
				if (isinstance (__except0__, ValueError)) {
					var __except1__ = py_TypeError;
					__except1__.__cause__ = null;
					throw __except1__;
				}
				else {
					throw __except0__;
				}
			}
		}
		else if (isinstance (index, slice)) {
			var l = [self._x, self._y];
			l [index] = val;
			if (len (l) != 2) {
				var __except0__ = ValueError;
				__except0__.__cause__ = null;
				throw __except0__;
			}
			self._x = float (l [0]);
			self._y = float (l [1]);
		}
		else {
			var __except0__ = IndexError;
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __delitem__ () {return __get__ (this, function (self, index) {
		var __except0__ = py_TypeError ('Deletion of vector components is not supported');
		__except0__.__cause__ = null;
		throw __except0__;
	});},
	get __getslice__ () {return __get__ (this, function (self, start, stop) {
		return [self._x, self._y].__getslice__ (start, stop, 1);
	});},
	get __setslice__ () {return __get__ (this, function (self, lower, upper, val) {
		var l = [self._x, self._y];
		l.__setslice__ (lower, upper, null, val);
		if (len (l) != 2) {
			var __except0__ = ValueError;
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._x = float (l [0]);
		self._y = float (l [1]);
	});},
	get __iter__ () {return __get__ (this, function* (self) {
		for (var val of tuple ([self._x, self._y])) {
			yield val;
		}
		});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __len__ () {return __get__ (this, function (self) {
		return 2;
	});},
	get __bool__ () {return __get__ (this, function (self) {
		return bool (self._x || self._y);
	});},
	get __nonzero__ () {return __get__ (this, function (self) {
		return bool (self._x || self._y);
	});},
	get dot () {return __get__ (this, function (self, vector) {
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		return self._x * vector_x + self._y * vector_y;
	});},
	get cross () {return __get__ (this, function (self, vector) {
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		return self._x * vector_y - self._y * vector_x;
	});},
	get magnitude () {return __get__ (this, function (self) {
		return sqrt (Math.pow (self._x, 2) + Math.pow (self._y, 2));
	});},
	get magnitude_squared () {return __get__ (this, function (self) {
		return Math.pow (self._x, 2) + Math.pow (self._y, 2);
	});},
	get length () {return __get__ (this, function (self) {
		return sqrt (Math.pow (self._x, 2) + Math.pow (self._y, 2));
	});},
	get length_squared () {return __get__ (this, function (self) {
		return Math.pow (self._x, 2) + Math.pow (self._y, 2);
	});},
	get normalize () {return __get__ (this, function (self) {
		var mag = self.magnitude ();
		if (mag == 0) {
			var __except0__ = ValueError ('Cannot normalize vector of zero length');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return Vector2 (self._x / mag, self._y / mag);
	});},
	get normalize_ip () {return __get__ (this, function (self) {
		var mag = self.magnitude ();
		if (mag == 0) {
			var __except0__ = ValueError ('Cannot normalize vector of zero length');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._x /= mag;
		self._y /= mag;
		return null;
	});},
	get is_normalized () {return __get__ (this, function (self) {
		return self.magnitude () == 1;
	});},
	get scale_to_length () {return __get__ (this, function (self, length) {
		var mag = self.magnitude ();
		if (mag == 0) {
			var __except0__ = ValueError ('Cannot scale vector of zero length');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._x = (self._x / mag) * length;
		self._y = (self._y / mag) * length;
		return null;
	});},
	get reflect () {return __get__ (this, function (self, vector) {
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		var vn = self._x * vector_x + self._y * vector_y;
		var nn = vector_x * vector_x + vector_y * vector_y;
		if (nn == 0) {
			var __except0__ = ValueError ('Cannot reflect from normal of zero length');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var c = (2 * vn) / nn;
		return Vector2 (self._x - vector_x * c, self._y - vector_y * c);
	});},
	get reflect_ip () {return __get__ (this, function (self, vector) {
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		var vn = self._x * vector_x + self._y * vector_y;
		var nn = vector_x * vector_x + vector_y * vector_y;
		if (nn == 0) {
			var __except0__ = ValueError ('Cannot reflect from normal of zero length');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var c = (2 * vn) / nn;
		self._x -= vector_x * c;
		self._y -= vector_y * c;
		return null;
	});},
	get distance_to () {return __get__ (this, function (self, vector) {
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		return sqrt (Math.pow (self._x - vector_x, 2) + Math.pow (self._y - vector_y, 2));
	});},
	get distance_squared_to () {return __get__ (this, function (self, vector) {
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		return Math.pow (self._x - vector_x, 2) + Math.pow (self._y - vector_y, 2);
	});},
	get lerp () {return __get__ (this, function (self, vector, t) {
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		if (t < 0.0 || t > 1.0) {
			var __except0__ = ValueError ('Argument t must be in range 0 to 1');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return Vector2 (self._x * (1 - t) + vector_x * t, self._y * (1 - t) + vector_y * t);
	});},
	get slerp () {return __get__ (this, function (self, vector, t) {
		if (t < -(1.0) || t > 1.0) {
			var __except0__ = ValueError ('Argument t must be in range -1 to 1');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (!(hasattr (vector, '__iter__')) || len (vector) != 2) {
			var __except0__ = py_TypeError ('The first argument must be a vector');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		var smag = sqrt (Math.pow (self._x, 2) + Math.pow (self._y, 2));
		var vmag = sqrt (Math.pow (vector_x, 2) + Math.pow (vector_y, 2));
		if (smag == 0 || vmag == 0) {
			var __except0__ = ValueError ('Cannot use slerp with zero-vector');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var sx = self._x / smag;
		var sy = self._y / smag;
		var vx = vector_x / vmag;
		var vy = vector_y / vmag;
		var theta = atan2 (vy, vx) - atan2 (sy, sx);
		var _theta = abs (theta);
		if (_theta - pi > 1e-06) {
			theta -= (2 * pi) * (theta / _theta);
		}
		else if ((-(1e-06) < _theta - pi && _theta - pi < 1e-06)) {
			var __except0__ = ValueError ('Cannot use slerp on 180 degrees');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (t < 0.0) {
			var t = -(t);
			theta -= (2 * pi) * (theta / abs (theta));
		}
		var sin_theta = sin (theta);
		if (sin_theta) {
			var a = sin ((1.0 - t) * theta) / sin_theta;
			var b = sin (t * theta) / sin_theta;
		}
		else {
			var a = 1.0;
			var b = 0.0;
		}
		var v = Vector2 (sx * a + vx * b, sy * a + vy * b);
		var smag = (1.0 - t) * smag + t * vmag;
		v.x *= smag;
		v.y *= smag;
		return v;
	});},
	get elementwise () {return __get__ (this, function (self) {
		return VectorElementwiseProxy (self._x, self._y);
	});},
	get rotate () {return __get__ (this, function (self, angle) {
		var rad = (angle / 180.0) * pi;
		var c = round (cos (rad), 6);
		var s = round (sin (rad), 6);
		return Vector2 (c * self._x - s * self._y, s * self._x + c * self._y);
	});},
	get rotate_rad () {return __get__ (this, function (self, angle) {
		var c = cos (angle);
		var s = sin (angle);
		return Vector2 (c * self._x - s * self._y, s * self._x + c * self._y);
	});},
	get rotate_ip () {return __get__ (this, function (self, angle) {
		var r = (angle / 180.0) * pi;
		var c = round (cos (r), 6);
		var s = round (sin (r), 6);
		var x = self._x;
		var y = self._y;
		self._x = c * x - s * y;
		self._y = s * x + c * y;
		return null;
	});},
	get rotate_ip_rad () {return __get__ (this, function (self, angle) {
		var c = cos (angle);
		var s = sin (angle);
		var x = self._x;
		var y = self._y;
		self._x = c * x - s * y;
		self._y = s * x + c * y;
		return null;
	});},
	get angle_to () {return __get__ (this, function (self, vector) {
		var vector_x = __getitem__ (vector, 0);
		var vector_y = __getitem__ (vector, 1);
		return (atan2 (vector_y, vector_x) - atan2 (self._y, self._x)) * (180.0 / pi);
	});},
	get as_polar () {return __get__ (this, function (self) {
		var r = self.magnitude ();
		var phi = atan2 (self._y, self._x) * (180.0 / pi);
		return tuple ([r, phi]);
	});},
	get from_polar () {return __get__ (this, function (self, coordinate) {
		if (len (coordinate) != 2) {
			var __except0__ = py_TypeError ('coodinate must be of length 2');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var r = coordinate [0];
		var phi = coordinate [1] * (pi / 180.0);
		self._x = round (r * cos (phi), 6);
		self._y = round (r * sin (phi), 6);
		return null;
	});},
	get py_update () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		var l = len (args);
		if (l == 2) {
			self._x = float (args [0]);
			self._y = float (args [1]);
		}
		else if (l == 1) {
			if (isinstance (args [0], tuple ([int, float]))) {
				self._x = float (args [0]);
				self._y = float (args [0]);
			}
			else {
				self._x = __call__ (float, null, __getitem__ (__getitem__ (args, 0), 0));
				self._y = __call__ (float, null, __getitem__ (__getitem__ (args, 0), 1));
			}
		}
		else if (len (kwargs.py_keys ()) > 0) {
			if (__in__ ('x', kwargs.py_keys ()) && __in__ ('y', kwargs.py_keys ())) {
				self._x = float (kwargs ['x']);
				self._y = float (kwargs ['y']);
			}
			else if (__in__ ('x', kwargs.py_keys ())) {
				self._x = float (kwargs ['x']);
				self._y = float (kwargs ['x']);
			}
			else {
				self._x = float (kwargs ['y']);
				self._y = float (kwargs ['y']);
			}
		}
		else {
			self._x = 0.0;
			self._y = 0.0;
		}
	});},
	get __pos__ () {return __get__ (this, function (self) {
		return Vector2 (self._x, self._y);
	});},
	get __neg__ () {return __get__ (this, function (self) {
		return Vector2 (-(self._x), -(self._y));
	});},
	get __add__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x + other_x, self._y + other_y);
		}
		else {
			return Vector2 (self._x + other, self._y + other);
		}
	});},
	get __sub__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x - other_x, self._y - other_y);
		}
		else {
			return Vector2 (self._x - other, self._y - other);
		}
	});},
	get __mul__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			if (!(isinstance (other, VectorElementwiseProxy))) {
				return self._x * other_x + self._y * other_y;
			}
			else {
				return Vector2 (self._x * other_x, self._y * other_y);
			}
		}
		else {
			return Vector2 (self._x * other, self._y * other);
		}
	});},
	get __div__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x / other_x, self._y / other_y);
		}
		else {
			return Vector2 (self._x / other, self._y / other);
		}
	});},
	get __truediv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x / other_x, self._y / other_y);
		}
		else {
			return Vector2 (self._x / other, self._y / other);
		}
	});},
	get __floordiv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (floor (self._x / other_x), floor (self._y / other_y));
		}
		else {
			return Vector2 (floor (self._x / other), floor (self._y / other));
		}
	});},
	get __eq__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			if (len (other) == 2) {
				var other_x = __getitem__ (other, 0);
				var other_y = __getitem__ (other, 1);
				return abs (self._x - other_x) < 1e-06 && abs (self._y - other_y) < 1e-06;
			}
			else {
				return false;
			}
		}
		else {
			return abs (self._x - other) < 1e-06 && abs (self._y - other) < 1e-06;
		}
	});},
	get __ne__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			if (len (other) == 2) {
				var other_x = __getitem__ (other, 0);
				var other_y = __getitem__ (other, 1);
				return abs (self._x - other_x) > 1e-06 || abs (self._y - other_y) > 1e-06;
			}
			else {
				return true;
			}
		}
		else {
			return abs (self._x - other) > 1e-06 || abs (self._y - other) > 1e-06;
		}
	});},
	get __gt__ () {return __get__ (this, function (self, other) {
		if (!(isinstance (other, VectorElementwiseProxy))) {
			var msg = 'This operation is not supported by vectors';
			var __except0__ = py_TypeError (msg);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return other.__lt__ (self);
	});},
	get __ge__ () {return __get__ (this, function (self, other) {
		if (!(isinstance (other, VectorElementwiseProxy))) {
			var msg = 'This operation is not supported by vectors';
			var __except0__ = py_TypeError (msg);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return other.__le__ (self);
	});},
	get __lt__ () {return __get__ (this, function (self, other) {
		if (!(isinstance (other, VectorElementwiseProxy))) {
			var msg = 'This operation is not supported by vectors';
			var __except0__ = py_TypeError (msg);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return other.__gt__ (self);
	});},
	get __le__ () {return __get__ (this, function (self, other) {
		if (!(isinstance (other, VectorElementwiseProxy))) {
			var msg = 'This operation is not supported by vectors';
			var __except0__ = py_TypeError (msg);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return other.__ge__ (self);
	});},
	get __radd__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x + other_x, self._y + other_y);
		}
		else {
			return Vector2 (self._x + other, self._y + other);
		}
	});},
	get __rsub__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (other_x - self._x, other_y - self._y);
		}
		else {
			return Vector2 (other - self._x, other - self._y);
		}
	});},
	get __rmul__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			if (!(isinstance (other, VectorElementwiseProxy))) {
				return self._x * other_x + self._y * other_y;
			}
			else {
				return Vector2 (self._x * other_x, self._y * other_y);
			}
		}
		else {
			return Vector2 (self._x * other, self._y * other);
		}
	});},
	get __rdiv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (other_x / self._x, other_y / self._y);
		}
		else {
			return Vector2 (other / self._x, other / self._y);
		}
	});},
	get __rtruediv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (other_x / self._x, other_y / self._y);
		}
		else {
			return Vector2 (other / self._x, other / self._y);
		}
	});},
	get __rfloordiv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (floor (other_x / self._x), floor (other_y / self._y));
		}
		else {
			return Vector2 (floor (other / self._x), floor (other / self._y));
		}
	});},
	get __iadd__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			self._x += other_x;
			self._y += other_y;
		}
		else {
			self._x += other;
			self._y += other;
		}
		return self;
	});},
	get __isub__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			self._x -= other_x;
			self._y -= other_y;
		}
		else {
			self._x -= other;
			self._y -= other;
		}
		return self;
	});},
	get __imul__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			self._x *= other_x;
			self._y *= other_y;
		}
		else {
			self._x *= other;
			self._y *= other;
		}
		return self;
	});},
	get __idiv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			self._x /= other_x;
			self._y /= other_y;
		}
		else {
			self._x /= other;
			self._y /= other;
		}
		return self;
	});},
	get __itruediv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			self._x /= other_x;
			self._y /= other_y;
		}
		else {
			self._x /= other;
			self._y /= other;
		}
		return self;
	});},
	get __ifloordiv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			self._x = float (floor (self._x / other_x));
			self._y = float (floor (self._y / other_y));
		}
		else {
			self._x = float (floor (self._x / other));
			self._y = float (floor (self._y / other));
		}
		return self;
	});}
});
Object.defineProperty (Vector2, 'y', property.call (Vector2, Vector2._get_y, Vector2._set_y));
Object.defineProperty (Vector2, 'x', property.call (Vector2, Vector2._get_x, Vector2._set_x));;
export var VectorElementwiseProxy =  __class__ ('VectorElementwiseProxy', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y) {
		self._x = x;
		self._y = y;
	});},
	get __getitem__ () {return __get__ (this, function (self, index) {
		if (__in__ (index, tuple ([0, -(2)]))) {
			return self._x;
		}
		else if (__in__ (index, tuple ([1, -(1)]))) {
			return self._y;
		}
	});},
	get __iter__ () {return __get__ (this, function* (self) {
		for (var val of tuple ([self._x, self._y])) {
			yield val;
		}
		});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __len__ () {return __get__ (this, function (self) {
		return 2;
	});},
	get __bool__ () {return __get__ (this, function (self) {
		return bool (self._x || self._y);
	});},
	get __nonzero__ () {return __get__ (this, function (self) {
		return bool (self._x || self._y);
	});},
	get __pos__ () {return __get__ (this, function (self) {
		return Vector2 (self._x, self._y);
	});},
	get __neg__ () {return __get__ (this, function (self) {
		return Vector2 (-(self._x), -(self._y));
	});},
	get __abs__ () {return __get__ (this, function (self) {
		return tuple ([abs (self._x), abs (self._y)]);
	});},
	get __add__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x + other_x, self._y + other_y);
		}
		else {
			return Vector2 (self._x + other, self._y + other);
		}
	});},
	get __sub__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x - other_x, self._y - other_y);
		}
		else {
			return Vector2 (self._x - other, self._y - other);
		}
	});},
	get __mul__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x * other_x, self._y * other_y);
		}
		else {
			return Vector2 (self._x * other, self._y * other);
		}
	});},
	get __div__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x / other_x, self._y / other_y);
		}
		else {
			return Vector2 (self._x / other, self._y / other);
		}
	});},
	get __truediv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x / other_x, self._y / other_y);
		}
		else {
			return Vector2 (self._x / other, self._y / other);
		}
	});},
	get __floordiv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (floor (self._x / other_x), floor (self._y / other_y));
		}
		else {
			return Vector2 (floor (self._x / other), floor (self._y / other));
		}
	});},
	get __pow__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			if (__mod__ (other_x, 1) && self._x < 0 || __mod__ (other_y, 1) && self._y < 0) {
				var __except0__ = ValueError ('negative number cannot be raised to a fractional power');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			return Vector2 (Math.pow (self._x, other_x), Math.pow (self._y, other_y));
		}
		else {
			if (__mod__ (other, 1) && (self._x < 0 || self._y < 0)) {
				var __except0__ = ValueError ('negative number cannot be raised to a fractional power');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			return Vector2 (Math.pow (self._x, other), Math.pow (self._y, other));
		}
	});},
	get __mod__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (__mod__ (self._x, other_x), __mod__ (self._y, other_y));
		}
		else {
			return Vector2 (__mod__ (self._x, other), __mod__ (self._y, other));
		}
	});},
	get __eq__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			if (len (other) == 2) {
				var other_x = __getitem__ (other, 0);
				var other_y = __getitem__ (other, 1);
				return abs (self._x - other_x) < 1e-06 && abs (self._y - other_y) < 1e-06;
			}
			else {
				return false;
			}
		}
		else {
			return abs (self._x - other) < 1e-06 && abs (self._y - other) < 1e-06;
		}
	});},
	get __ne__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			if (len (other) == 2) {
				var other_x = __getitem__ (other, 0);
				var other_y = __getitem__ (other, 1);
				return abs (self._x - other_x) > 1e-06 || abs (self._y - other_y) > 1e-06;
			}
			else {
				return true;
			}
		}
		else {
			return abs (self._x - other) > 1e-06 || abs (self._y - other) > 1e-06;
		}
	});},
	get __gt__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return bool (self._x > other_x && self._y > other_y);
		}
		else {
			return bool (self._x > other && self._y > other);
		}
	});},
	get __ge__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return bool (self._x >= other_x && self._y >= other_y);
		}
		else {
			return bool (self._x >= other && self._y >= other);
		}
	});},
	get __lt__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return bool (self._x < other_x && self._y < other_y);
		}
		else {
			return bool (self._x < other && self._y < other);
		}
	});},
	get __le__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return bool (self._x <= other_x && self._y <= other_y);
		}
		else {
			return bool (self._x <= other && self._y <= other);
		}
	});},
	get __radd__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x + other_x, self._y + other_y);
		}
		else {
			return Vector2 (self._x + other, self._y + other);
		}
	});},
	get __rsub__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (other_x - self._x, other_y - self._y);
		}
		else {
			return Vector2 (other - self._x, other - self._y);
		}
	});},
	get __rmul__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (self._x * other_x, self._y * other_y);
		}
		else {
			return Vector2 (self._x * other, self._y * other);
		}
	});},
	get __rdiv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (other_x / self._x, other_y / self._y);
		}
		else {
			return Vector2 (other / self._x, other / self._y);
		}
	});},
	get __rtruediv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (other_x / self._x, other_y / self._y);
		}
		else {
			return Vector2 (other / self._x, other / self._y);
		}
	});},
	get __rfloordiv__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (floor (other_x / self._x), floor (other_y / self._y));
		}
		else {
			return Vector2 (floor (other / self._x), floor (other / self._y));
		}
	});},
	get __rpow__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			if (other_x < 0 && __mod__ (self._x, 1) || other_y < 0 && __mod__ (self._y, 1)) {
				var __except0__ = ValueError ('negative number cannot be raised to a fractional power');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			return Vector2 (Math.pow (other_x, self._x), Math.pow (other_y, self._y));
		}
		else {
			if (other < 0 && (__mod__ (self._x, 1) || __mod__ (self._y, 1))) {
				var __except0__ = ValueError ('negative number cannot be raised to a fractional power');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			return Vector2 (Math.pow (other, self._x), Math.pow (other, self._y));
		}
	});},
	get __rmod__ () {return __get__ (this, function (self, other) {
		if (hasattr (other, '__iter__')) {
			var other_x = __getitem__ (other, 0);
			var other_y = __getitem__ (other, 1);
			return Vector2 (__mod__ (other_x, self._x), __mod__ (other_y, self._y));
		}
		else {
			return Vector2 (__mod__ (other, self._x), __mod__ (other, self._y));
		}
	});}
});

//# sourceMappingURL=pyjsdl.vector.map