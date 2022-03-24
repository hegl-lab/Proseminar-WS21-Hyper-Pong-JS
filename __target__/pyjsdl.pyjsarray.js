// Transcrypt'ed from Python, 2022-03-23 20:43:09
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ceil as _ceil, floor as _floor} from './math.js';
var __name__ = 'pyjsdl.pyjsarray';
export var TypedArray =  __class__ ('TypedArray', [object], {
	__module__: __name__,
	__obj: dict ({'Uint8ClampedArray': window.Uint8ClampedArray, 'Uint8Array': window.Uint8Array, 'Uint16Array': window.Uint16Array, 'Uint32Array': window.Uint32Array, 'Int8Array': window.Int8Array, 'Int16Array': window.Int16Array, 'Int32Array': window.Int32Array, 'Float32Array': window.Float32Array, 'Float64Array': window.Float64Array}),
	get __init__ () {return __get__ (this, function (self, data, offset, length, typedarray) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		if (typeof typedarray == 'undefined' || (typedarray != null && typedarray.hasOwnProperty ("__kwargtrans__"))) {;
			var typedarray = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
						case 'length': var length = __allkwargs0__ [__attrib0__]; break;
						case 'typedarray': var typedarray = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (data) {
			if (isinstance (data, int)) {
				self._data = new typedarray (data);
			}
			else if (isinstance (data, tuple ([list, tuple]))) {
				self._data = new typedarray (data);
			}
			else if (isinstance (data, TypedArray)) {
				self._data = new typedarray (data._data);
			}
			else if (offset === null && length === null) {
				self._data = new typedarray (data);
			}
			else {
				if (offset === null) {
					var offset = 0;
				}
				if (length === null) {
					self._data = new typedarray (data, offset);
				}
				else {
					self._data = new typedarray (data, offset, length);
				}
			}
		}
		else {
			self._data = null;
		}
	});},
	get _array () {return __get__ (this, function (self, array) {
		var typedarray = self.__class__ ();
		typedarray._data = array;
		return typedarray;
	});},
	get __str__ () {return __get__ (this, function (self) {
		return self._data.toString ();
	});},
	get __iter__ () {return __get__ (this, function* (self) {
		var index = 0;
		while (index < self._data.length) {
			yield __getitem__ (self, index);
			index++;
		}
		});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __getitem__ () {return __get__ (this, function (self, index) {
		return self._data [index];
	});},
	get __setitem__ () {return __get__ (this, function (self, index, value) {
		self._data [index] = value;
		return null;
	});},
	get __len__ () {return __get__ (this, function (self) {
		return self._data.length;
	});},
	get filter () {return __get__ (this, function (self, func) {
		return self._array (self._data.filter (func));
	});},
	get map () {return __get__ (this, function (self, func) {
		return self._array (self._data.map (func));
	});},
	get reduce () {return __get__ (this, function (self, func) {
		return self._array (self._data.reduce (func));
	});},
	get slice () {return __get__ (this, function (self, i, j) {
		return self._array (self._data.slice (i, j));
	});},
	get set () {return __get__ (this, function (self, data, offset) {
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = 0;
		};
		if (isinstance (data, tuple ([list, tuple]))) {
			self._data.set (data, offset);
		}
		else if (isinstance (data, TypedArray)) {
			self._data.set (data._data, offset);
		}
	});},
	get subarray () {return __get__ (this, function (self, begin, end) {
		if (typeof begin == 'undefined' || (begin != null && begin.hasOwnProperty ("__kwargtrans__"))) {;
			var begin = 0;
		};
		if (typeof end == 'undefined' || (end != null && end.hasOwnProperty ("__kwargtrans__"))) {;
			var end = null;
		};
		if (end === null) {
			var end = self._data.length;
		}
		var array = self._data.subarray (begin, end);
		var typedarray = self.__class__ ();
		typedarray._data = array;
		return typedarray;
	});},
	get getLength () {return __get__ (this, function (self) {
		return self._data.length;
	});},
	get getByteLength () {return __get__ (this, function (self) {
		return self._data.byteLength;
	});},
	get getBuffer () {return __get__ (this, function (self) {
		return self._data.buffer;
	});},
	get getByteOffset () {return __get__ (this, function (self) {
		return self._data.byteOffset;
	});},
	get getBytesPerElement () {return __get__ (this, function (self) {
		return self._data.BYTES_PER_ELEMENT;
	});},
	get getArray () {return __get__ (this, function (self) {
		return self._data;
	});},
	get setArray () {return __get__ (this, function (self, array) {
		self._data = array;
		return null;
	});}
});
export var Uint8ClampedArray =  __class__ ('Uint8ClampedArray', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Uint8ClampedArray'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Uint8Array =  __class__ ('Uint8Array', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Uint8Array'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Uint16Array =  __class__ ('Uint16Array', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Uint16Array'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Uint32Array =  __class__ ('Uint32Array', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Uint32Array'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Int8Array =  __class__ ('Int8Array', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Int8Array'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Int16Array =  __class__ ('Int16Array', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Int16Array'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Int32Array =  __class__ ('Int32Array', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Int32Array'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Float32Array =  __class__ ('Float32Array', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Float32Array'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Float64Array =  __class__ ('Float64Array', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		var typedarray = TypedArray.__obj ['Float64Array'];
		if (typedarray != null) {
			TypedArray.__init__ (self, data, offset, length, typedarray);
		}
		else {
			var __except0__ = NotImplementedError ('TypedArray data type not implemented');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var CanvasPixelArray =  __class__ ('CanvasPixelArray', [TypedArray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, data, offset, length) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = null;
		};
		TypedArray.__init__ (self, data, offset, length);
		self._superArray = null;
		self._superIndex = tuple ([0, 0]);
	});},
	get __iter__ () {return __get__ (this, function* (self) {
		if (!(self._superArray)) {
			TypedArray.__iter__ (self);
		}
		else {
			var index = self._superIndex [0];
			while (index < self._superIndex [1]) {
				yield self._superArray [index];
				index++;
			}
		}
		});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __getitem__ () {return __get__ (this, function (self, index) {
		if (!(self._superArray)) {
			return TypedArray.__getitem__ (self, index);
		}
		else {
			return self._superArray.__getitem__ (index + self._superIndex [0]);
		}
	});},
	get __setitem__ () {return __get__ (this, function (self, index, value) {
		if (!(self._superArray)) {
			TypedArray.__setitem__ (self, index, value);
		}
		else {
			self._superArray.__setitem__ (index + self._superIndex [0], value);
		}
		return null;
	});},
	get set () {return __get__ (this, function (self, data, offset) {
		if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
			var offset = 0;
		};
		if (!(self._superArray)) {
			for (var index = 0; index < len (data); index++) {
				__setitem__ (self, __add__ (index, offset), __getitem__ (data, index));
			}
		}
		else {
			self._superArray.set (data, offset + self._superIndex [0]);
		}
	});},
	get subarray () {return __get__ (this, function (self, begin, end) {
		if (typeof begin == 'undefined' || (begin != null && begin.hasOwnProperty ("__kwargtrans__"))) {;
			var begin = 0;
		};
		if (typeof end == 'undefined' || (end != null && end.hasOwnProperty ("__kwargtrans__"))) {;
			var end = null;
		};
		if (end === null) {
			var end = self._data.length;
		}
		var array = self.__class__ ();
		array._data = self._data;
		array._superArray = self;
		array._superIndex = tuple ([begin, end]);
		return array;
	});}
});
export var Ndarray =  __class__ ('Ndarray', [object], {
	__module__: __name__,
	__typedarray: dict ({'uint8c': Uint8ClampedArray, 'int8': Int8Array, 'uint8': Uint8Array, 'int16': Int16Array, 'uint16': Uint16Array, 'int32': Int32Array, 'uint32': Uint32Array, 'float32': Float32Array, 'float64': Float64Array}),
	__dtypes: dict ({'uint8c': 'uint8c', 'x': 'uint8c', 0: 'uint8c', 'int8': 'int8', 'b': 'int8', 4: 'int8', 'uint8': 'uint8', 'B': 'uint8', 1: 'uint8', 'int16': 'int16', 'h': 'int16', 5: 'int16', 'uint16': 'uint16', 'H': 'uint16', 2: 'uint16', 'int32': 'int32', 'i': 'int32', 6: 'int32', 'uint32': 'uint32', 'I': 'uint32', 3: 'uint32', 'float32': 'float32', 'f': 'float32', 7: 'float32', 'float64': 'float64', 'd': 'float64', 8: 'float64'}),
	get __init__ () {return __get__ (this, function (self, dim, dtype) {
		if (typeof dtype == 'undefined' || (dtype != null && dtype.hasOwnProperty ("__kwargtrans__"))) {;
			var dtype = 'float64';
		};
		self._dtype = self.__dtypes [dtype];
		var typedarray = self.__typedarray [self._dtype];
		if (isinstance (dim, tuple)) {
			var size = 1;
			for (var i of dim) {
				size *= i;
			}
			self._data = typedarray (size);
			self._shape = dim;
			var indices = [];
			for (var i of self._shape) {
				size /= i;
				indices.append (size);
			}
			self._indices = tuple (indices);
		}
		else if (isinstance (dim, int)) {
			self._data = typedarray (dim);
			self._shape = tuple ([dim]);
			self._indices = tuple ([self._shape [0]]);
		}
		else if (isinstance (dim, list)) {
			if (!(len (dim) > 0 && isinstance (dim [0], list))) {
				self._data = typedarray (dim);
				self._shape = tuple ([len (dim)]);
				self._indices = tuple ([self._shape [0]]);
			}
			else {
				var _dat = self._lflatten (dim);
				var _dim = self._lshape (dim);
				self._data = typedarray (list (_dat));
				self._shape = tuple ([len (self._data)]);
				self.setshape (tuple (list (_dim)));
			}
		}
		else {
			self._data = dim;
			self._shape = tuple ([len (dim)]);
			self._indices = tuple ([self._shape [0]]);
		}
	});},
	get getshape () {return __get__ (this, function (self) {
		return self._shape;
	});},
	get setshape () {return __get__ (this, function (self) {
		var dim = tuple ([].slice.apply (arguments).slice (1));
		if (isinstance (dim [0], tuple)) {
			var dim = dim [0];
		}
		var size = 1;
		for (var i of dim) {
			size *= i;
		}
		var array_size = 1;
		for (var i of self._shape) {
			array_size *= i;
		}
		if (size != array_size) {
			var __except0__ = py_TypeError ('array size cannot change');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._shape = dim;
		var indices = [];
		for (var i of self._shape) {
			size /= i;
			indices.append (size);
		}
		self._indices = tuple (indices);
		return null;
	});},
	get _get_shape () {return __get__ (this, function (self) {
		return self._shape;
	});},
	get _set_shape () {return __get__ (this, function (self, val) {
		self.setshape (val);
	});},
	get _lflatten () {return __get__ (this, function* (self, l) {
		for (var el of l) {
			if (isinstance (el, list)) {
				yield* self._lflatten (el);
			}
			else {
				yield el;
			}
		}
		});},
	get _lshape () {return __get__ (this, function* (self, l) {
		var _l = l;
		while (isinstance (_l, list)) {
			yield len (_l);
			var _l = _l [0];
		}
		});},
	get __getitem__ () {return __get__ (this, function (self, index) {
		if (isinstance (index, tuple ([list, tuple]))) {
			var __left0__ = tuple ([len (index), len (self._shape)]);
			var indexLn = __left0__ [0];
			var shapeLn = __left0__ [1];
			if (indexLn == shapeLn) {
				return __getitem__ (self._data, __call__ (sum, null, (function () {
					var __accu0__ = [];
					for (var i = 0; i < indexLn; i++) {
						(function () {
							var __accu1__ = __accu0__;
							return __call__ (__accu1__.append, __accu1__, __mul__ (__getitem__ (index, i), __getitem__ (self._indices, i)));
						}) ();
					}
					return __accu0__;
				}) ()));
			}
			else {
				var begin = sum ((function () {
					var __accu0__ = [];
					for (var i = 0; i < indexLn; i++) {
						__accu0__.append (index [i] * self._indices [i]);
					}
					return __accu0__;
				}) ());
				var end = begin + self._indices [indexLn - 1];
				var subarray = self._data.subarray (begin, end);
				var array = Ndarray (subarray, self._dtype);
				array._shape = self._shape.__getslice__ (indexLn, null, 1);
				array._indices = self._indices.__getslice__ (indexLn, null, 1);
				return array;
			}
		}
		else if (len (self._shape) == 1) {
			return __getitem__ (self._data, index);
		}
		else {
			var begin = index * self._indices [0];
			var end = begin + self._indices [0];
			var subarray = self._data.subarray (begin, end);
			var array = Ndarray (subarray, self._dtype);
			array._shape = self._shape.__getslice__ (1, null, 1);
			array._indices = self._indices.__getslice__ (1, null, 1);
			return array;
		}
	});},
	get __setitem__ () {return __get__ (this, function (self, index, value) {
		var unpack = function (obj, lst) {
			if (typeof lst == 'undefined' || (lst != null && lst.hasOwnProperty ("__kwargtrans__"))) {;
				var lst = null;
			};
			if (lst === null) {
				var lst = [];
			}
			for (var element of obj) {
				if (isinstance (element, tuple ([list, tuple]))) {
					unpack (element, lst);
				}
				else {
					lst.append (element);
				}
			}
			return lst;
		};
		if (isinstance (index, tuple ([list, tuple]))) {
			var __left0__ = tuple ([len (index), len (self._shape)]);
			var indexLn = __left0__ [0];
			var shapeLn = __left0__ [1];
			if (indexLn == shapeLn) {
				__setitem__ (self._data, __call__ (sum, null, (function () {
					var __accu0__ = [];
					for (var i = 0; i < indexLn; i++) {
						(function () {
							var __accu1__ = __accu0__;
							return __call__ (__accu1__.append, __accu1__, __mul__ (__getitem__ (index, i), __getitem__ (self._indices, i)));
						}) ();
					}
					return __accu0__;
				}) ()), value);
			}
			else {
				var begin = sum ((function () {
					var __accu0__ = [];
					for (var i = 0; i < indexLn; i++) {
						__accu0__.append (index [i] * self._indices [i]);
					}
					return __accu0__;
				}) ());
				var end = begin + self._indices [indexLn - 1];
				var subarray = self._data.subarray (begin, end);
				if (isinstance (value, Ndarray)) {
					var value = value._data;
				}
				else if (isinstance (value [0], tuple ([list, tuple]))) {
					var value = unpack (value);
				}
				subarray.set (value);
			}
		}
		else if (len (self._shape) == 1) {
			__setitem__ (self._data, index, value);
		}
		else {
			var begin = index * self._indices [0];
			var end = begin + self._indices [0];
			var subarray = self._data.subarray (begin, end);
			if (isinstance (value, Ndarray)) {
				var value = value._data;
			}
			else if (isinstance (value [0], tuple ([list, tuple]))) {
				var value = unpack (value);
			}
			subarray.set (value);
		}
		return null;
	});},
	get __getslice__ () {return __get__ (this, function (self, lower, upper) {
		var subarray = self._data.subarray (lower, upper);
		return Ndarray (subarray, self._dtype);
	});},
	get __setslice__ () {return __get__ (this, function (self, lower, upper, data) {
		var subarray = self._data.subarray (lower, upper);
		subarray.set (data);
		return null;
	});},
	get __iter__ () {return __get__ (this, function* (self) {
		if (len (self._shape) > 1) {
			var index = 0;
			while (index < self._shape [0]) {
				var begin = index * self._indices [0];
				var end = begin + self._indices [0];
				var subarray = self._data.subarray (begin, end);
				var array = Ndarray (subarray, self._dtype);
				array._shape = self._shape.__getslice__ (1, null, 1);
				array._indices = self._indices.__getslice__ (1, null, 1);
				yield array;
				index++;
			}
		}
		else {
			var index = 0;
			while (index < self._shape [0]) {
				yield __getitem__ (self._data, index);
				index++;
			}
		}
		});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get _array_dim () {return __get__ (this, function (self) {
		if (__in__ ('int', self._dtype)) {
			var vmax = len (str (max (self._data)));
			var vmin = len (str (min (self._data)));
			var vlen = dict ([[true, vmax], [false, vmin]]) [vmax > vmin];
		}
		else {
			var vlen = max ((function () {
				var __accu0__ = [];
				for (var v of self._data) {
					__accu0__.append (len ('{}'.format (round (v, 4))));
				}
				return py_iter (__accu0__);
			}) ());
		}
		return vlen;
	});},
	get _array_str () {return __get__ (this, function (self, array, vlen, vstr) {
		if (len (array._shape) == 1) {
			var s = [];
			if (__in__ ('int', self._dtype)) {
				for (var val of array) {
					var sv = '{}'.format (val);
					var sv = (function () {
						var __accu0__ = '{}{}';
						return __call__ (__accu0__.format, __accu0__, __mul__ (__sub__ (vlen, __call__ (len, null, sv)), ' '), sv);
					}) ();
					s.append (sv);
				}
			}
			else {
				for (var val of array) {
					var sv = '{}'.format (round (val, 4));
					if (!__in__ ('.', sv)) {
						var sv = '{}.0000'.format (sv);
					}
					var sv = (function () {
						var __accu0__ = '{}{}';
						return __call__ (__accu0__.format, __accu0__, __mul__ (__sub__ (vlen, __call__ (len, null, sv)), ' '), sv);
					}) ();
					s.append (sv);
				}
			}
			vstr.append ('[{}]'.format (' '.join (s)));
		}
		else {
			for (var [i, a] of enumerate (array)) {
				if (i == 0) {
					vstr.append ('[');
				}
				else {
					(function () {
						var __accu0__ = vstr;
						return __call__ (__accu0__.append, __accu0__, __mul__ (' ', __sub__ (__call__ (len, null, self._shape), __call__ (len, null, a._shape))));
					}) ();
				}
				self._array_str (a, vlen, vstr);
				if (i < len (array) - 1) {
					vstr.append ('\n');
				}
				else {
					if (__eq__ (__getitem__ (vstr, __neg__ (1)), ']\n')) {
						__setitem__ (vstr, __neg__ (1), ']');
					}
					if (array._shape != self._shape) {
						vstr.append (']\n');
					}
					else {
						vstr.append (']');
					}
				}
			}
		}
		return vstr;
	});},
	get __str__ () {return __get__ (this, function (self) {
		var vlen = self._array_dim ();
		var vstr = self._array_str (self, vlen, []);
		return ''.join (vstr);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		var s = str (self.tolist ());
		var sl = len (self._shape);
		for (var d = 1; d < sl; d++) {
			var s = (function () {
				var __accu0__ = s;
				return __call__ (__accu0__.py_replace, __accu0__, __add__ (' ', __mul__ ('[', d)), __add__ (__add__ ('\n', __mul__ (' ', __sub__ (__add__ (sl, 8), d))), __mul__ ('[', d)));
			}) ();
		}
		return 'Ndarray({}, dtype={})'.format (s, repr (self._dtype));
	});},
	get __len__ () {return __get__ (this, function (self) {
		return self._shape [0];
	});},
	get __lt__ () {return __get__ (this, function (self, other) {
		var ndarray = Ndarray (len (self._data), 'uint8');
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __lt__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __lt__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __le__ () {return __get__ (this, function (self, other) {
		var ndarray = Ndarray (self._shape, 'uint8');
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __le__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __le__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __eq__ () {return __get__ (this, function (self, other) {
		var ndarray = Ndarray (self._shape, 'uint8');
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __eq__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __eq__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __ne__ () {return __get__ (this, function (self, other) {
		var ndarray = Ndarray (self._shape, 'uint8');
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __ne__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __ne__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __gt__ () {return __get__ (this, function (self, other) {
		var ndarray = Ndarray (self._shape, 'uint8');
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __gt__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __gt__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __ge__ () {return __get__ (this, function (self, other) {
		var ndarray = Ndarray (self._shape, 'uint8');
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __ge__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __ge__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __add__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __add__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __add__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __sub__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __sub__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __sub__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __mul__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __mul__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __mul__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __div__ () {return __get__ (this, function (self, other) {
		return self.__truediv__ (other);
	});},
	get __truediv__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __truediv__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __truediv__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __floordiv__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __call__ (_floor, null, __truediv__ (__getitem__ (data, i), other)));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __call__ (_floor, null, __truediv__ (__getitem__ (data, i), __getitem__ (other_data, i))));
			}
		}
		return ndarray;
	});},
	get __divmod__ () {return __get__ (this, function (self, other) {
		return tuple ([self.__floordiv__ (other), self.__mod__ (other)]);
	});},
	get __mod__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __mod__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __mod__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __pow__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __pow__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __pow__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __neg__ () {return __get__ (this, function (self) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		for (var i = 0; i < len (data); i++) {
			__setitem__ (ndarray_data, i, __neg__ (__getitem__ (data, i)));
		}
		return ndarray;
	});},
	get __pos__ () {return __get__ (this, function (self) {
		var ndarray = self.copy ();
		return ndarray;
	});},
	get __abs__ () {return __get__ (this, function (self) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		for (var i = 0; i < len (data); i++) {
			if (data [i] < 0) {
				__setitem__ (ndarray_data, i, __neg__ (__getitem__ (data, i)));
			}
		}
		return ndarray;
	});},
	get __matmul__ () {return __get__ (this, function (self, other) {
		var _other = self._get_array (other);
		var x_dim = len (self._shape);
		var y_dim = len (_other._shape);
		if (x_dim != y_dim) {
			var __except0__ = ValueError ('incompatible array shapes for matmul');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (x_dim == 1) {
			if (self._shape [0] == _other._shape [0]) {
				var data = self._data;
				var other_data = _other._data;
				var result = 0;
				for (var i = 0; i < len (data); i++) {
					var result = __call__ (__iadd__, null, result, __mul__ (__getitem__ (data, i), __getitem__ (other_data, i)));
				}
				return result;
			}
			else {
				var __except0__ = ValueError ('incompatible array shapes for matmul');
				__except0__.__cause__ = null;
				throw __except0__;
			}
		}
		var xshape = self._shape.__getslice__ (-(2), null, 1);
		var yshape = _other._shape.__getslice__ (-(2), null, 1);
		if (xshape [1] == yshape [0]) {
			var m = xshape [1];
			var n = xshape [0];
			var p = yshape [1];
			var d = self._shape.__getslice__ (0, -(2), 1);
			var d_len = 1;
			for (var v of d) {
				d_len *= v;
			}
		}
		else {
			var __except0__ = ValueError ('incompatible array shapes for matmul');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var _data = self._data.__class__ ((d_len * n) * p);
		var array = Ndarray (_data, self._dtype);
		(function () {
			var __accu0__ = array;
			return __call__ (__accu0__.setshape, __accu0__, __call__ (tuple, null, __add__ (d, tuple ([n, p]))));
		}) ();
		if (__eq__ (x_dim, 2)) {
			var arrays = [tuple ([self, _other, array])];
		}
		else if (__eq__ (x_dim, 3)) {
			var arrays = (function () {
				var __accu0__ = [];
				for (var i = 0; i < __getitem__ (d, 0); i++) {
					(function () {
						var __accu1__ = __accu0__;
						return __call__ (__accu1__.append, __accu1__, tuple ([__getitem__ (self, i), __getitem__ (_other, i), __getitem__ (array, i)]));
					}) ();
				}
				return __accu0__;
			}) ();
		}
		else if (__eq__ (x_dim, 4)) {
			var arrays = (function () {
				var __accu0__ = [];
				var __iterable0__ = (function () {
					var __accu1__ = [];
					for (var i = 0; i < __getitem__ (d, 0); i++) {
						for (var j = 0; j < __getitem__ (d, 1); j++) {
							(function () {
								var __accu2__ = __accu1__;
								return __call__ (__accu2__.append, __accu2__, tuple ([i, j]));
							}) ();
						}
					}
					return __accu1__;
				}) ();
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var __left0__ = __getitem__ (__iterable0__, __index0__);
					var i = __left0__ [0];
					var j = __left0__ [1];
					(function () {
						var __accu1__ = __accu0__;
						return __call__ (__accu1__.append, __accu1__, tuple ([self.__getitem__ ([i, j]), _other.__getitem__ ([i, j]), array.__getitem__ ([i, j])]));
					}) ();
				}
				return __accu0__;
			}) ();
		}
		else if (__eq__ (x_dim, 5)) {
			var arrays = (function () {
				var __accu0__ = [];
				var __iterable0__ = (function () {
					var __accu1__ = [];
					for (var i = 0; i < __getitem__ (d, 0); i++) {
						for (var j = 0; j < __getitem__ (d, 1); j++) {
							for (var k = 0; k < __getitem__ (d, 2); k++) {
								(function () {
									var __accu2__ = __accu1__;
									return __call__ (__accu2__.append, __accu2__, tuple ([i, j, k]));
								}) ();
							}
						}
					}
					return __accu1__;
				}) ();
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var __left0__ = __getitem__ (__iterable0__, __index0__);
					var i = __left0__ [0];
					var j = __left0__ [1];
					var k = __left0__ [2];
					(function () {
						var __accu1__ = __accu0__;
						return __call__ (__accu1__.append, __accu1__, tuple ([self.__getitem__ ([i, j, k]), _other.__getitem__ ([i, j, k]), array.__getitem__ ([i, j, k])]));
					}) ();
				}
				return __accu0__;
			}) ();
		}
		else {
			var __except0__ = __call__ (ValueError, null, 'incompatible array shapes for matmul');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		for (var [_x, _y, _array] of arrays) {
			var _x_data = _x._data;
			var _y_data = _y._data;
			var _array_data = _array._data;
			for (var i = 0; i < n; i++) {
				for (var j = 0; j < p; j++) {
					var result = 0;
					for (var k = 0; k < m; k++) {
						var result = __call__ (__iadd__, null, result, __mul__ (__getitem__ (_x_data, __add__ (__mul__ (i, m), k)), __getitem__ (_y_data, __add__ (__mul__ (k, p), j))));
					}
					__setitem__ (_array_data, __add__ (__mul__ (i, p), j), result);
				}
			}
		}
		return array;
	});},
	get __iadd__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__iadd__, null, __getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__iadd__, null, __getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __isub__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__isub__, null, __getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__isub__, null, __getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __imul__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__imul__, null, __getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__imul__, null, __getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __idiv__ () {return __get__ (this, function (self, other) {
		return self.__itruediv__ (other);
	});},
	get __itruediv__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__idiv__, null, __getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__idiv__, null, __getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __ifloordiv__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (_floor, null, __truediv__ (__getitem__ (data, i), other)));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (_floor, null, __truediv__ (__getitem__ (data, i), __getitem__ (other_data, i))));
			}
		}
		return self;
	});},
	get __imod__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__imod__, null, __getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__imod__, null, __getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __ipow__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__ipow__, null, __getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __call__ (__ipow__, null, __getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __lshift__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __lshift__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __lshift__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __rshift__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __rshift__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __rshift__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __and__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __and__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __and__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __or__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __or__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __or__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __xor__ () {return __get__ (this, function (self, other) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __xor__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (ndarray_data, i, __xor__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return ndarray;
	});},
	get __ilshift__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __lshift__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __lshift__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __irshift__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __rshift__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __rshift__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __iand__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __and__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __and__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __ior__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __or__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __or__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __ixor__ () {return __get__ (this, function (self, other) {
		var data = self._data;
		if (!(hasattr (other, '__iter__'))) {
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __xor__ (__getitem__ (data, i), other));
			}
		}
		else {
			var other_data = self._get_data (other);
			for (var i = 0; i < len (data); i++) {
				__setitem__ (data, i, __xor__ (__getitem__ (data, i), __getitem__ (other_data, i)));
			}
		}
		return self;
	});},
	get __invert__ () {return __get__ (this, function (self) {
		var ndarray = self.empty ();
		var ndarray_data = ndarray._data;
		var data = self._data;
		for (var i = 0; i < len (data); i++) {
			__setitem__ (ndarray_data, i, ~(__getitem__ (data, i)));
		}
		return ndarray;
	});},
	get _get_data () {return __get__ (this, function (self, other) {
		if (!(isinstance (other, Ndarray))) {
			if (isinstance (other, list)) {
				var other = Ndarray (other, self._dtype);
			}
			else {
				var other = Ndarray (list (other), self._dtype);
			}
		}
		if (__ne__ (self._shape, other._shape)) {
			var __except0__ = __call__ (py_TypeError, null, 'array shapes are not compatible');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return other._data;
	});},
	get _get_array () {return __get__ (this, function (self, other) {
		if (!(isinstance (other, Ndarray))) {
			if (isinstance (other, list)) {
				var other = Ndarray (other, self._dtype);
			}
			else {
				var other = Ndarray (list (other), self._dtype);
			}
		}
		return other;
	});},
	get op () {return __get__ (this, function (self, operator, other) {
		return getattr (self, ('__' + operator) + '__') (other);
	});},
	get cmp () {return __get__ (this, function (self, operator, other) {
		return getattr (self, ('__' + operator) + '__') (other);
	});},
	get matmul () {return __get__ (this, function (self, other) {
		return self.__matmul__ (other);
	});},
	get reshape () {return __get__ (this, function (self, dim) {
		var size = 1;
		for (var i of dim) {
			size *= i;
		}
		var array_size = 1;
		for (var i of self._shape) {
			array_size *= i;
		}
		if (size != array_size) {
			var __except0__ = py_TypeError ('array size cannot change');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var subarray = self._data.subarray (0);
		var array = Ndarray (subarray);
		array._shape = dim;
		var indices = [];
		for (var i of array._shape) {
			size /= i;
			indices.append (size);
		}
		array._indices = tuple (indices);
		return array;
	});},
	get set () {return __get__ (this, function (self, data) {
		if (isinstance (data, tuple ([list, tuple]))) {
			if (isinstance (data [0], tuple ([list, tuple, TypedArray]))) {
				var data = (function () {
					var __accu0__ = [];
					for (var dat of data) {
						for (var value of dat) {
							__accu0__.append (value);
						}
					}
					return __accu0__;
				}) ();
			}
			var dataLn = len (data);
			var data = data.getArray ();
		}
		else if (isinstance (data, tuple ([Ndarray, TypedArray]))) {
			var data = data.getArray ();
			var dataLn = data.length;
		}
		else {
			for (var index = 0; index < self._data._data.length; index++) {
				self._data._data [index] = data;
			}
			return null;
		}
		if (dataLn == self._data._data.length) {
			for (var index = 0; index < self._data._data.length; index++) {
				self._data._data [index] = data [index];
			}
		}
		else {
			for (var index = 0; index < self._data._data.length; index++) {
				self._data._data [index] = data [__mod__ (index, dataLn)];
			}
		}
		return null;
	});},
	get fill () {return __get__ (this, function (self, value) {
		for (var index = 0; index < self._data._data.length; index++) {
			self._data._data [index] = value;
		}
		return null;
	});},
	get copy () {return __get__ (this, function (self) {
		var array = self._data.__class__ (self._data);
		var ndarray = Ndarray (array, self._dtype);
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		return ndarray;
	});},
	get empty () {return __get__ (this, function (self) {
		var ndarray = Ndarray (len (self._data), self._dtype);
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		return ndarray;
	});},
	get astype () {return __get__ (this, function (self, dtype) {
		var typedarray = self.__typedarray [self.__dtypes [dtype]];
		var array = typedarray (self._data);
		var ndarray = Ndarray (array, dtype);
		ndarray._shape = self._shape;
		ndarray._indices = self._indices;
		return ndarray;
	});},
	get view () {return __get__ (this, function (self) {
		var subarray = self._data.subarray (0);
		var array = Ndarray (subarray);
		array._shape = self._shape;
		array._indices = self._indices;
		return array;
	});},
	get swapaxes () {return __get__ (this, function (self, axis1, axis2) {
		var array = Ndarray (self._data, self._dtype);
		var shape = list (self._shape);
		var __left0__ = tuple ([shape [axis2], shape [axis1]]);
		shape [axis1] = __left0__ [0];
		shape [axis2] = __left0__ [1];
		array._shape = tuple (shape);
		var indices = list (self._indices);
		var __left0__ = tuple ([indices [axis2], indices [axis1]]);
		indices [axis1] = __left0__ [0];
		indices [axis2] = __left0__ [1];
		array._indices = tuple (indices);
		return array;
	});},
	get tolist () {return __get__ (this, function (self) {
		var to_list = function (array, l) {
			var _array = __getitem__ (array, 0);
			if (hasattr (_array, '__iter__')) {
				if (len (l) == 0) {
					var _l = l;
				}
				else {
					var l = [l];
					var _l = l [0];
				}
				for (var [i, a] of enumerate (array)) {
					_l.append ([]);
					to_list (a, _l [i]);
				}
			}
			else {
				l.extend ((function () {
					var __accu0__ = [];
					for (var v of array) {
						__accu0__.append (v);
					}
					return __accu0__;
				}) ());
			}
			return l;
		};
		return to_list (self, []);
	});},
	get getArray () {return __get__ (this, function (self) {
		return self._data.getArray ();
	});}
});
Object.defineProperty (Ndarray, 'shape', property.call (Ndarray, Ndarray._get_shape, Ndarray._set_shape));;
export var NP =  __class__ ('NP', [object], {
	__module__: __name__,
	get zeros () {return __get__ (this, function (self, size, dtype) {
		if (dtype == 'i') {
			var dtype = 3;
		}
		return Ndarray (size, dtype);
	});},
	get swapaxes () {return __get__ (this, function (self, array, axis1, axis2) {
		return array.swapaxes (axis1, axis2);
	});},
	get append () {return __get__ (this, function (self, array, py_values) {
		if (isinstance (py_values [0], tuple ([list, tuple, TypedArray]))) {
			var py_values = (function () {
				var __accu0__ = [];
				for (var dat of py_values) {
					for (var value of dat) {
						__accu0__.append (value);
					}
				}
				return __accu0__;
			}) ();
		}
		var newarray = Ndarray (len (array) + len (py_values), array._dtype);
		newarray._data.set (array._data);
		newarray._data.set (py_values, len (array));
		return newarray;
	});}
});
export var np = NP ();
export var ImageData =  __class__ ('ImageData', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, imagedata) {
		self._imagedata = imagedata;
		if (TypedArray.__obj ['Uint8ClampedArray'] != null) {
			self.data = Uint8ClampedArray ();
		}
		else {
			self.data = CanvasPixelArray ();
		}
		self.data._data = imagedata.data;
		self.width = imagedata.width;
		self.height = imagedata.height;
	});},
	get getImageData () {return __get__ (this, function (self) {
		return self._imagedata;
	});}
});
export var ImageMatrix =  __class__ ('ImageMatrix', [Ndarray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, imagedata) {
		self._imagedata = ImageData (imagedata);
		if (isinstance (self._imagedata.data, Uint8ClampedArray)) {
			Ndarray.__init__ (self, self._imagedata.data, 'uint8c');
		}
		else {
			Ndarray.__init__ (self, self._imagedata.data, 'uint8');
		}
		self.setshape (self._imagedata.height, self._imagedata.width, 4);
	});},
	get getWidth () {return __get__ (this, function (self) {
		return self._imagedata.width;
	});},
	get getHeight () {return __get__ (this, function (self) {
		return self._imagedata.height;
	});},
	get getPixel () {return __get__ (this, function (self, index) {
		var i = index [0] * self._indices [0] + index [1] * 4;
		return tuple ([__getitem__ (self._imagedata.data, i), __getitem__ (self._imagedata.data, __add__ (i, 1)), __getitem__ (self._imagedata.data, __add__ (i, 2)), __getitem__ (self._imagedata.data, __add__ (i, 3))]);
	});},
	get setPixel () {return __get__ (this, function (self, index, value) {
		var i = index [0] * self._indices [0] + index [1] * 4;
		var __left0__ = tuple ([__getitem__ (value, 0), __getitem__ (value, 1), __getitem__ (value, 2), __getitem__ (value, 3)]);
		__setitem__ (self._imagedata.data, i, __left0__ [0]);
		__setitem__ (self._imagedata.data, __add__ (i, 1), __left0__ [1]);
		__setitem__ (self._imagedata.data, __add__ (i, 2), __left0__ [2]);
		__setitem__ (self._imagedata.data, __add__ (i, 3), __left0__ [3]);
		return null;
	});},
	get getPixelRGB () {return __get__ (this, function (self, index) {
		var i = index [0] * self._indices [0] + index [1] * 4;
		return tuple ([__getitem__ (self._imagedata.data, i), __getitem__ (self._imagedata.data, __add__ (i, 1)), __getitem__ (self._imagedata.data, __add__ (i, 2))]);
	});},
	get setPixelRGB () {return __get__ (this, function (self, index, value) {
		var i = index [0] * self._indices [0] + index [1] * 4;
		var __left0__ = tuple ([__getitem__ (value, 0), __getitem__ (value, 1), __getitem__ (value, 2)]);
		__setitem__ (self._imagedata.data, i, __left0__ [0]);
		__setitem__ (self._imagedata.data, __add__ (i, 1), __left0__ [1]);
		__setitem__ (self._imagedata.data, __add__ (i, 2), __left0__ [2]);
		return null;
	});},
	get getPixelAlpha () {return __get__ (this, function (self, index) {
		var i = index [0] * self._indices [0] + index [1] * 4;
		return __getitem__ (self._imagedata.data, __add__ (i, 3));
	});},
	get setPixelAlpha () {return __get__ (this, function (self, index, value) {
		var i = index [0] * self._indices [0] + index [1] * 4;
		__setitem__ (self._imagedata.data, __add__ (i, 3), value);
		return null;
	});},
	get getPixelInteger () {return __get__ (this, function (self, index) {
		var i = index [0] * self._indices [0] + index [1] * 4;
		return __or__ (__or__ (__or__ (__lshift__ (__getitem__ (self._imagedata.data, i), 16), __lshift__ (__getitem__ (self._imagedata.data, __add__ (i, 1)), 8)), __getitem__ (self._imagedata.data, __add__ (i, 2))), __lshift__ (__getitem__ (self.imagedata.data, __add__ (i, 3)), 24));
	});},
	get setPixelInteger () {return __get__ (this, function (self, index, value) {
		var i = index [0] * self._indices [0] + index [1] * 4;
		var __left0__ = tuple ([__and__ (__rshift__ (value, 16), 255), __and__ (__rshift__ (value, 8), 255), __and__ (value, 255), __and__ (__rshift__ (value, 24), 255)]);
		__setitem__ (self._imagedata.data, i, __left0__ [0]);
		__setitem__ (self._imagedata.data, __add__ (i, 1), __left0__ [1]);
		__setitem__ (self._imagedata.data, __add__ (i, 2), __left0__ [2]);
		__setitem__ (self._imagedata.data, __add__ (i, 3), __left0__ [3]);
		return null;
	});},
	get getImageData () {return __get__ (this, function (self) {
		return self._imagedata.getImageData ();
	});}
});
export var BitSet =  __class__ ('BitSet', [object], {
	__module__: __name__,
	_bit: 8,
	_bitmask: null,
	__typedarray: Uint8Array,
	get __init__ () {return __get__ (this, function (self, width) {
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = null;
		};
		if (self._bitmask === null) {
			self._bitmask = dict ((function () {
				var __accu0__ = [];
				for (var i = self._bit - 1; i > -(1); i--) {
					__accu0__.append (tuple ([(self._bit - i) - 1, 1 << i]));
				}
				return __accu0__;
			}) ());
		}
		if (width) {
			self._width = abs (width);
		}
		else {
			self._width = self._bit;
		}
		self._data = self.__typedarray (_ceil (self._width / (self._bit * 1.0)));
	});},
	get __str__ () {return __get__ (this, function (self) {
		var v = dict ([[true, '1'], [false, '0']]);
		var s = [];
		for (var i = 0; i < self.size (); i++) {
			s.append (v [self.py_get (i)]);
			if (!(__mod__ (i + 1, 64))) {
				s.append ('\n');
			}
		}
		return ''.join (s);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		var setBit = [];
		for (var index = 0; index < self._width; index++) {
			if (self.py_get (index)) {
				setBit.append (str (index));
			}
		}
		return ('{' + ', '.join (setBit)) + '}';
	});},
	get __getitem__ () {return __get__ (this, function (self, index) {
		return self.py_get (index);
	});},
	get __setitem__ () {return __get__ (this, function (self, index, value) {
		self.set (index, value);
	});},
	get __len__ () {return __get__ (this, function (self) {
		for (var index of list (range (self._width - 1, -(1), -(1)))) {
			if (self.py_get (index)) {
				break;
			}
		}
		return index + 1;
	});},
	get __iter__ () {return __get__ (this, function* (self) {
		var index = 0;
		while (index < self._width) {
			yield self.py_get (index);
			index++;
		}
		});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get py_get () {return __get__ (this, function (self, index, toIndex) {
		if (typeof toIndex == 'undefined' || (toIndex != null && toIndex.hasOwnProperty ("__kwargtrans__"))) {;
			var toIndex = null;
		};
		if (index > self._width - 1) {
			if (!(toIndex)) {
				return false;
			}
			else {
				var size = toIndex - index;
				if (size > 0) {
					return self.__class__ (size);
				}
				else {
					return null;
				}
			}
		}
		if (toIndex === null) {
			return __call__ (bool, null, __and__ (__getitem__ (self._data, __call__ (int, null, __truediv__ (index, self._bit))), __getitem__ (self._bitmask, __mod__ (index, self._bit))));
		}
		else {
			var size = toIndex - index;
			if (size > 0) {
				var bitset = self.__class__ (size);
				var ix = 0;
				if (toIndex > self._width) {
					var toIndex = self._width;
				}
				for (var i = index; i < toIndex; i++) {
					(function () {
						var __accu0__ = bitset;
						return __call__ (__accu0__.set, __accu0__, ix, __call__ (bool, null, __and__ (__getitem__ (self._data, __call__ (int, null, __truediv__ (i, self._bit))), __getitem__ (self._bitmask, __mod__ (i, self._bit)))));
					}) ();
					ix++;
				}
				return bitset;
			}
			else {
				return null;
			}
		}
	});},
	get set () {return __get__ (this, function (self, index, value) {
		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
			var value = 1;
		};
		if (index > self._width - 1) {
			if (value) {
				self.resize (index + 1);
			}
			else {
				return ;
			}
		}
		if (value) {
			__setitem__ (self._data, __call__ (int, null, __truediv__ (index, self._bit)), __or__ (__getitem__ (self._data, __call__ (int, null, __truediv__ (index, self._bit))), __getitem__ (self._bitmask, __mod__ (index, self._bit))));
		}
		else {
			__setitem__ (self._data, __call__ (int, null, __truediv__ (index, self._bit)), __and__ (__getitem__ (self._data, __call__ (int, null, __truediv__ (index, self._bit))), ~(__getitem__ (self._bitmask, __mod__ (index, self._bit)))));
		}
		return null;
	});},
	get fill () {return __get__ (this, function (self, index, toIndex) {
		if (typeof index == 'undefined' || (index != null && index.hasOwnProperty ("__kwargtrans__"))) {;
			var index = null;
		};
		if (typeof toIndex == 'undefined' || (toIndex != null && toIndex.hasOwnProperty ("__kwargtrans__"))) {;
			var toIndex = null;
		};
		if (index === null && toIndex === null) {
			for (var i = 0; i < self._width; i++) {
				self.set (i, 1);
			}
		}
		else if (toIndex === null) {
			self.set (index, 1);
		}
		else {
			for (var i = index; i < toIndex; i++) {
				self.set (i, 1);
			}
		}
	});},
	get py_clear () {return __get__ (this, function (self, index, toIndex) {
		if (typeof index == 'undefined' || (index != null && index.hasOwnProperty ("__kwargtrans__"))) {;
			var index = null;
		};
		if (typeof toIndex == 'undefined' || (toIndex != null && toIndex.hasOwnProperty ("__kwargtrans__"))) {;
			var toIndex = null;
		};
		if (index === null) {
			for (var i = 0; i < len (self._data); i++) {
				__setitem__ (self._data, i, 0);
			}
		}
		else if (toIndex === null) {
			self.set (index, 0);
		}
		else if (index == 0 && toIndex == self._width) {
			for (var dat = 0; dat < len (self._data); dat++) {
				__setitem__ (self._data, dat, 0);
			}
		}
		else {
			for (var i = index; i < toIndex; i++) {
				self.set (i, 0);
			}
		}
	});},
	get flip () {return __get__ (this, function (self, index, toIndex) {
		if (typeof toIndex == 'undefined' || (toIndex != null && toIndex.hasOwnProperty ("__kwargtrans__"))) {;
			var toIndex = null;
		};
		if (toIndex === null) {
			self.set (index, !(self.py_get (index)));
		}
		else {
			if (toIndex > self._width) {
				self.resize (toIndex);
				var toIndex = self._width;
			}
			if (index == 0 && toIndex == self._width) {
				for (var dat = 0; dat < len (self._data); dat++) {
					__setitem__ (self._data, dat, ~(__getitem__ (self._data, dat)));
				}
			}
			else {
				for (var i = index; i < toIndex; i++) {
					self.set (i, !(self.py_get (i)));
				}
			}
		}
	});},
	get cardinality () {return __get__ (this, function (self) {
		var count = 0;
		for (var bit = 0; bit < self._width; bit++) {
			if (self.py_get (bit)) {
				count++;
			}
		}
		return count;
	});},
	get intersects () {return __get__ (this, function (self, bitset) {
		for (var dat = 0; dat < len (bitset._data); dat++) {
			var intersect = __and__ (__getitem__ (bitset._data, dat), __getitem__ (self._data, dat));
			if (intersect) {
				return true;
			}
		}
		return false;
	});},
	get andSet () {return __get__ (this, function (self, bitset) {
		var data = min (len (self._data), len (bitset._data));
		for (var dat = 0; dat < data; dat++) {
			__setitem__ (self._data, dat, __and__ (__getitem__ (self._data, dat), __getitem__ (bitset._data, dat)));
		}
	});},
	get orSet () {return __get__ (this, function (self, bitset) {
		var data = min (len (self._data), len (bitset._data));
		for (var dat = 0; dat < data; dat++) {
			__setitem__ (self._data, dat, __or__ (__getitem__ (self._data, dat), __getitem__ (bitset._data, dat)));
		}
	});},
	get xorSet () {return __get__ (this, function (self, bitset) {
		var data = min (len (self._data), len (bitset._data));
		for (var dat = 0; dat < data; dat++) {
			__setitem__ (self._data, dat, __xor__ (__getitem__ (self._data, dat), __getitem__ (bitset._data, dat)));
		}
	});},
	get resize () {return __get__ (this, function (self, width) {
		if (width > self._width) {
			self._width = width;
			if (self._width > len (self._data) * self._bit) {
				var array = self.__typedarray (_ceil (self._width / (self._bit * 1.0)));
				array.set (self._data);
				self._data = array;
			}
		}
		else if (width < self._width) {
			if (width < len (self)) {
				var width = len (self);
			}
			self._width = width;
			if (self._width <= len (self._data) * self._bit - self._bit) {
				var array = self.__typedarray (_ceil (self._width / (self._bit * 1.0)));
				array.set (self._data.subarray (0, _ceil (self._width / (self._bit * 1.0))));
				self._data = array;
			}
		}
	});},
	get size () {return __get__ (this, function (self) {
		return len (self._data) * self._bit;
	});},
	get isEmpty () {return __get__ (this, function (self) {
		for (var data of self._data) {
			if (data) {
				return false;
			}
		}
		return true;
	});},
	get clone () {return __get__ (this, function (self) {
		var new_bitset = self.__class__ (1);
		var data = self.__typedarray (self._data);
		new_bitset._data = data;
		new_bitset._width = self._width;
		return new_bitset;
	});}
});
export var BitSet16 =  __class__ ('BitSet16', [BitSet], {
	__module__: __name__,
	_bit: 16,
	_bitmask: null,
	__typedarray: Uint16Array,
	get __init__ () {return __get__ (this, function (self, width) {
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = null;
		};
		BitSet.__init__ (self, width);
	});}
});
export var BitSet32 =  __class__ ('BitSet32', [BitSet], {
	__module__: __name__,
	_bit: 32,
	_bitmask: null,
	__typedarray: Uint32Array,
	get __init__ () {return __get__ (this, function (self, width) {
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = null;
		};
		BitSet.__init__ (self, width);
	});}
});
export var typeOf = function (obj) {
	return typeof (obj);
};

//# sourceMappingURL=pyjsdl.pyjsarray.map