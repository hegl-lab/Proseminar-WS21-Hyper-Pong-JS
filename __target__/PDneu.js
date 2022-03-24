// Transcrypt'ed from Python, 2022-03-23 20:43:13
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {absNew, complexNew} from './complex_new.js';
import {atan2, pi, sqrt} from './math.js';
import {Color, NoFill} from './color.js';
var __name__ = 'PDneu';
export var isNearZero = function (z, eps) {
	if (typeof eps == 'undefined' || (eps != null && eps.hasOwnProperty ("__kwargtrans__"))) {;
		var eps = 1e-08;
	};
	return abs (z) < eps;
};
export var isApproxReal = function (z, eps) {
	if (typeof eps == 'undefined' || (eps != null && eps.hasOwnProperty ("__kwargtrans__"))) {;
		var eps = 1e-08;
	};
	if (py_typeof (z) === int || py_typeof (z) === float) {
		return true;
	}
	if (py_typeof (z) === complexNew) {
		return abs (z.imag) < eps;
	}
	else if (py_typeof (z) === PDPoint) {
		return abs (z.getImagPart ()) < eps;
	}
	else {
		var __except0__ = py_TypeError ();
		__except0__.__cause__ = null;
		throw __except0__;
	}
};
export var arg = function (z) {
	if (py_typeof (z) === int || py_typeof (z) === float) {
		return 0.0;
	}
	if (py_typeof (z) === complexNew) {
		return atan2 (z.imag, z.real);
	}
	else if (py_typeof (z) === PDPoint) {
		return z.getArgument ();
	}
	else {
		var __except0__ = py_TypeError ();
		__except0__.__cause__ = null;
		throw __except0__;
	}
};
export var mod2pi = function (phi, symmetric) {
	if (typeof symmetric == 'undefined' || (symmetric != null && symmetric.hasOwnProperty ("__kwargtrans__"))) {;
		var symmetric = true;
	};
	while (phi >= 2 * pi) {
		phi -= 2 * pi;
	}
	while (phi < 0) {
		phi += 2 * pi;
	}
	if (symmetric) {
		if (phi >= pi) {
			phi -= 2 * pi;
		}
	}
	return phi;
};
export var PDObject =  __class__ ('PDObject', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._uid = null;
	});},
	get getID () {return __get__ (this, function (self) {
		if (self._uid == null) {
			var __except0__ = py_TypeError ('The ID of the point was not set yet.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else {
			return self._uid;
		}
	});},
	get setID () {return __get__ (this, function (self, uid) {
		self._uid;
	});}
});
export var PDPoint =  __class__ ('PDPoint', [PDObject], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, point, color, size) {
		if (typeof color == 'undefined' || (color != null && color.hasOwnProperty ("__kwargtrans__"))) {;
			var color = Color ();
		};
		if (typeof size == 'undefined' || (size != null && size.hasOwnProperty ("__kwargtrans__"))) {;
			var size = 0.01;
		};
		self._point = point;
		self._radius = sqrt (point.real * point.real + point.imag * point.imag);
		self._argument = arg (point);
		self._color = color;
		self._size = size;
	});},
	get __eq__ () {return __get__ (this, function (self, other) {
		if (py_typeof (other) === complexNew) {
			return isNearZero (abs (self._point - other));
		}
		else if (py_typeof (other) === PDPoint) {
			return isNearZero (abs (self._point - other.getComplex ()));
		}
		else {
			var __except0__ = py_TypeError ();
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __add__ () {return __get__ (this, function (self, other) {
		if (py_typeof (other) === complexNew) {
			return PDPoint (self._point.__add__ (other));
		}
		else if (py_typeof (other) === PDPoint) {
			return PDPoint (self._point.__add__ (other.getComplex ()));
		}
		else {
			var __except0__ = py_TypeError ();
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __sub__ () {return __get__ (this, function (self, other) {
		if (py_typeof (other) === complexNew) {
			return PDPoint (self._point.__sub__ (other));
		}
		else if (py_typeof (other) === PDPoint) {
			return PDPoint (self._point.__sub__ (other.getComplex ()));
		}
		else {
			var __except0__ = py_TypeError ();
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __mul__ () {return __get__ (this, function (self, other) {
		if (py_typeof (other) === complexNew) {
			return PDPoint (self._point * other);
		}
		else if (py_typeof (other) === float || py_typeof (other) === int) {
			return PDPoint (self._point.mult_real (other));
		}
		else if (py_typeof (other) === PDPoint) {
			return PDPoint (self._point * other.getComplex ());
		}
		else {
			var __except0__ = py_TypeError ();
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __truediv__ () {return __get__ (this, function (self, other) {
		if (py_typeof (other) === complexNew || py_typeof (other) === float || py_typeof (other) === int) {
			return PDPoint (self._point / other);
		}
		else if (py_typeof (other) === PDPoint) {
			return PDPoint (self._point / other.getComplex ());
		}
		else {
			var __except0__ = py_TypeError ();
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __abs__ () {return __get__ (this, function (self) {
		return abs (self._point);
	});},
	get getInversion () {return __get__ (this, function (self) {
		if (self.isZero ()) {
			var __except0__ = ArithmeticError ('Cannot invert point 0+0j.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else {
			return PDPoint (self._point.divide_real (self._point.get_arg () * self._point.get_arg ()));
		}
	});},
	get getNormalization () {return __get__ (this, function (self) {
		if (self.isZero ()) {
			var __except0__ = ArithmeticError ('Cannot normalize point 0+0j.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else {
			return PDPoint (complexNew (self._point.real / self._point.get_arg (), self._point.imag / self._point.get_arg ()));
		}
	});},
	get scale_with_real () {return __get__ (this, function (self, this_x) {
		return PDPoint (self._point.mult_real (this_x));
	});},
	get getRealPart () {return __get__ (this, function (self) {
		return self._point.real;
	});},
	get getImagPart () {return __get__ (this, function (self) {
		return self._point.imag;
	});},
	get getCartesic () {return __get__ (this, function (self) {
		return tuple ([self.getRealPart (), self.getImagPart ()]);
	});},
	get getComplex () {return __get__ (this, function (self) {
		return self._point;
	});},
	get getRadius () {return __get__ (this, function (self) {
		return self._radius;
	});},
	get getArgument () {return __get__ (this, function (self) {
		return self._argument;
	});},
	get getPolar () {return __get__ (this, function (self) {
		return tuple ([self.getRadius (), self.getArgument ()]);
	});},
	get isIdeal () {return __get__ (this, function (self) {
		return isNearZero (abs (1.0 - self._radius));
	});},
	get isZero () {return __get__ (this, function (self) {
		return isNearZero (self._radius);
	});},
	get isOnPD () {return __get__ (this, function (self) {
		return self._radius <= 1.0 || self.isIdeal ();
	});},
	get conjugate () {return __get__ (this, function (self) {
		return PDPoint (__conj__ (self._point));
	});}
});
export var PDGeodesic =  __class__ ('PDGeodesic', [PDObject], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, point1, point2, edge_color, fill_color, width) {
		if (typeof edge_color == 'undefined' || (edge_color != null && edge_color.hasOwnProperty ("__kwargtrans__"))) {;
			var edge_color = Color ();
		};
		if (typeof fill_color == 'undefined' || (fill_color != null && fill_color.hasOwnProperty ("__kwargtrans__"))) {;
			var fill_color = NoFill;
		};
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = 0.0;
		};
		if (point1 == point2) {
			var __except0__ = ValueError ('Points for defining a geodesic cannot be equal.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (width < 0) {
			var __except0__ = ValueError ('Width of geodesic cannot be negative.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._point1 = point1;
		self._point2 = point2;
		self._width = width;
		self._edge_color = edge_color;
		self._fill_color = fill_color;
		self.__calculate ();
		self.__isdiameter ();
	});},
	get __isdiameter () {return __get__ (this, function (self) {
		var P = self._point1.getComplex ();
		var Q = self._point2.getComplex ();
		var Q_arg = Q.get_arg ();
		if (self._point1.isZero () == true) {
			return true;
		}
		else if (abs ((Q.real * P.imag - Q.imag * P.real) / Q_arg) < 1e-08) {
			return true;
		}
		else {
			return false;
		}
	});},
	get __calculate () {return __get__ (this, function (self) {
		if (self.__isdiameter ()) {
			self._isArc = false;
			self._center = PDPoint (complexNew (0.0, 0.0));
			self._radius = 0.0;
		}
		else {
			self._isArc = true;
			var P = self._point1;
			var Q = self._point2;
			var Pinv = P.getInversion ();
			var Qinv = Q.getInversion ();
			var M = PDPoint (complexNew (0.5 * (P.getRealPart () + Pinv.getRealPart ()), 0.5 * (P.getImagPart () + Pinv.getImagPart ())));
			var N = PDPoint (complexNew (0.5 * (Q.getRealPart () + Qinv.getRealPart ()), 0.5 * (Q.getImagPart () + Qinv.getImagPart ())));
			var m_dir = PDPoint (complexNew (Pinv.getRealPart () - P.getRealPart (), Pinv.getImagPart () - P.getImagPart ())).getNormalization ();
			var m_dir = PDPoint (complexNew (-(m_dir.getImagPart ()), m_dir.getRealPart ()));
			var n_dir = PDPoint (complexNew (Qinv.getRealPart () - Q.getRealPart (), Qinv.getImagPart () - Q.getImagPart ())).getNormalization ();
			var n_dir = PDPoint (complexNew (-(n_dir.getImagPart ()), n_dir.getRealPart ()));
			var X = N.__sub__ (M);
			var t = (-(n_dir.getImagPart ()) * X.getRealPart () + n_dir.getRealPart () * X.getImagPart ()) / (-(n_dir.getImagPart ()) * m_dir.getRealPart () + n_dir.getRealPart () * m_dir.getImagPart ());
			self._center = M.__add__ (m_dir.scale_with_real (t));
			var temp1 = P.__sub__ (self._center);
			self._radius = temp1.getRadius ();
		}
	});}
});

//# sourceMappingURL=PDneu.map