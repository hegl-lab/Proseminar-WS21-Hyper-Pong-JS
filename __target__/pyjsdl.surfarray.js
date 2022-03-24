// Transcrypt'ed from Python, 2022-03-23 20:43:10
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ImageMatrix} from './pyjsdl.pyjsarray.js';
import {ImageData} from './pyjsdl.pyjsarray.js';
import {Uint32Array} from './pyjsdl.pyjsarray.js';
import {Uint8Array} from './pyjsdl.pyjsarray.js';
import {Uint8ClampedArray} from './pyjsdl.pyjsarray.js';
import {Ndarray} from './pyjsdl.pyjsarray.js';
import {Surface} from './pyjsdl.surface.js';
var __name__ = 'pyjsdl.surfarray';
export var __docformat__ = 'restructuredtext';
export var __doc__ = 'Surface pixel manipulation';
export var array = function (surface) {
	var imagedata = surface.getImageData (0, 0, surface.width, surface.height);
	return ImageMatrix (imagedata);
};
export var array2d = function (surface, copydata) {
	if (typeof copydata == 'undefined' || (copydata != null && copydata.hasOwnProperty ("__kwargtrans__"))) {;
		var copydata = false;
	};
	var imagedata = surface.getImageData (0, 0, surface.width, surface.height);
	if (!(copydata)) {
		return ImageMatrixInteger (imagedata);
	}
	else {
		return ImageInteger (imagedata);
	}
};
export var array3d = function (surface, copydata) {
	if (typeof copydata == 'undefined' || (copydata != null && copydata.hasOwnProperty ("__kwargtrans__"))) {;
		var copydata = false;
	};
	var imagedata = surface.getImageData (0, 0, surface.width, surface.height);
	if (!(copydata)) {
		return ImageMatrixRGB (imagedata);
	}
	else {
		return ImageRGB (imagedata);
	}
};
export var array_alpha = function (surface, copydata) {
	if (typeof copydata == 'undefined' || (copydata != null && copydata.hasOwnProperty ("__kwargtrans__"))) {;
		var copydata = false;
	};
	var imagedata = surface.getImageData (0, 0, surface.width, surface.height);
	if (!(copydata)) {
		return ImageMatrixAlpha (imagedata);
	}
	else {
		return ImageAlpha (imagedata);
	}
};
export var make_surface = function (array) {
	var surface = Surface (tuple ([array._imagedata.width, array._imagedata.height]));
	blit_array (surface, array);
	return surface;
};
export var blit_array = function (surface, array) {
	try {
		var imagedata = array.getImageData ();
	}
	catch (__except0__) {
		if (isinstance (__except0__, py_TypeError)) {
			var imagedata = surface.getImageData (0, 0, surface.width, surface.height);
			if (len (array._shape) == 2) {
				var array2d = ImageMatrix (imagedata);
				for (var y = 0; y < array2d.getHeight (); y++) {
					for (var x = 0; x < array2d.getWidth (); x++) {
						var value = array.__getitem__ ([x, y]);
						array2d.__setitem__ ([y, x], tuple ([__and__ (__rshift__ (value, 16), 255), __and__ (__rshift__ (value, 8), 255), __and__ (value, 255), 255]));
					}
				}
				var imagedata = array2d.getImageData ();
			}
			else {
				imagedata.data.set (array.getArray ());
			}
		}
		else {
			throw __except0__;
		}
	}
	surface.putImageData (imagedata, 0, 0, 0, 0, surface.width, surface.height);
	return null;
};
export var use_arraytype = (function __lambda__ () {
	var arg = tuple ([].slice.apply (arguments).slice (0));
	return null;
});
export var ImageMatrixRGB =  __class__ ('ImageMatrixRGB', [ImageMatrix], {
	__module__: __name__,
	get __getitem__ () {return __get__ (this, function (self, index) {
		var index = list (index);
		var __left0__ = tuple ([index [1], index [0]]);
		index [0] = __left0__ [0];
		index [1] = __left0__ [1];
		var index = tuple (index);
		return ImageMatrix.__getitem__ (self, index);
	});},
	get __setitem__ () {return __get__ (this, function (self, index, value) {
		var index = list (index);
		var __left0__ = tuple ([index [1], index [0]]);
		index [0] = __left0__ [0];
		index [1] = __left0__ [1];
		var index = tuple (index);
		ImageMatrix.__setitem__ (self, index, value);
		return null;
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.__str__ ();
	});}
});
export var ImageRGB =  __class__ ('ImageRGB', [Ndarray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, imagedata) {
		self._imagedata = ImageData (imagedata);
		var array = Ndarray (self._imagedata.data);
		array.setshape (self._imagedata.height, self._imagedata.width, 4);
		try {
			var data = Uint8ClampedArray ((self._imagedata.height * self._imagedata.width) * 3);
		}
		catch (__except0__) {
			if (isinstance (__except0__, NotImplementedError)) {
				var data = Uint8Array ((self._imagedata.height * self._imagedata.width) * 3);
			}
			else {
				throw __except0__;
			}
		}
		var index = 0;
		for (var x = 0; x < self._imagedata.width; x++) {
			for (var y = 0; y < self._imagedata.height; y++) {
				for (var i = 0; i < 3; i++) {
					__setitem__ (data, index, array.__getitem__ ([y, x, i]));
					index++;
				}
			}
		}
		try {
			Ndarray.__init__ (self, data, 'uint8c');
		}
		catch (__except0__) {
			if (isinstance (__except0__, NotImplementedError)) {
				Ndarray.__init__ (self, data, 'uint8');
			}
			else {
				throw __except0__;
			}
		}
		self.setshape (self._imagedata.width, self._imagedata.height, 3);
	});},
	get getImageData () {return __get__ (this, function (self) {
		var index = 0;
		for (var x = 0; x < self._imagedata.height; x++) {
			for (var y = 0; y < self._imagedata.width; y++) {
				for (var i = 0; i < 3; i++) {
					__setitem__ (self._imagedata.data, __add__ (index, i), self.__getitem__ ([y, x, i]));
				}
				var index = __call__ (__iadd__, null, index, 4);
			}
		}
		return (function () {
			var __accu0__ = self._imagedata;
			return __call__ (__accu0__.getImageData, __accu0__);
		}) ();
	});}
});
export var ImageMatrixAlpha =  __class__ ('ImageMatrixAlpha', [ImageMatrix], {
	__module__: __name__,
	get __getitem__ () {return __get__ (this, function (self, index) {
		return ImageMatrix.__getitem__ (self, tuple ([index [1], index [0], 3]));
	});},
	get __setitem__ () {return __get__ (this, function (self, index, value) {
		ImageMatrix.__setitem__ (self, tuple ([index [1], index [0], 3]), value);
		return null;
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.__str__ ();
	});}
});
export var ImageAlpha =  __class__ ('ImageAlpha', [Ndarray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, imagedata) {
		self._imagedata = ImageData (imagedata);
		var array = Ndarray (self._imagedata.data);
		array.setshape (self._imagedata.height, self._imagedata.width, 4);
		try {
			var data = Uint8ClampedArray (self._imagedata.height * self._imagedata.width);
		}
		catch (__except0__) {
			if (isinstance (__except0__, NotImplementedError)) {
				var data = Uint8Array (self._imagedata.height * self._imagedata.width);
			}
			else {
				throw __except0__;
			}
		}
		var index = 0;
		for (var x = 0; x < self._imagedata.width; x++) {
			for (var y = 0; y < self._imagedata.height; y++) {
				__setitem__ (data, index, array.__getitem__ ([y, x, 3]));
				index++;
			}
		}
		try {
			Ndarray.__init__ (self, data, 'uint8c');
		}
		catch (__except0__) {
			if (isinstance (__except0__, NotImplementedError)) {
				Ndarray.__init__ (self, data, 'uint8');
			}
			else {
				throw __except0__;
			}
		}
		self.setshape (self._imagedata.width, self._imagedata.height);
	});},
	get getImageData () {return __get__ (this, function (self) {
		var index = 0;
		for (var x = 0; x < self._imagedata.height; x++) {
			for (var y = 0; y < self._imagedata.width; y++) {
				__setitem__ (self._imagedata.data, __add__ (index, 3), self.__getitem__ ([y, x]));
				var index = __call__ (__iadd__, null, index, 4);
			}
		}
		return (function () {
			var __accu0__ = self._imagedata;
			return __call__ (__accu0__.getImageData, __accu0__);
		}) ();
	});}
});
export var ImageMatrixInteger =  __class__ ('ImageMatrixInteger', [ImageMatrix], {
	__module__: __name__,
	get __getitem__ () {return __get__ (this, function (self, index) {
		var value = ImageMatrix.__getitem__ (self, tuple ([index [1], index [0]]));
		return __or__ (__or__ (__or__ (__lshift__ (__getitem__ (value, 0), 16), __lshift__ (__getitem__ (value, 1), 8)), __getitem__ (value, 2)), __lshift__ (__getitem__ (value, 3), 24));
	});},
	get __setitem__ () {return __get__ (this, function (self, index, value) {
		(function () {
			var __accu0__ = ImageMatrix;
			return __call__ (__accu0__.__setitem__, __accu0__, self, tuple ([__getitem__ (index, 1), __getitem__ (index, 0)]), tuple ([__and__ (__rshift__ (value, 16), 255), __and__ (__rshift__ (value, 8), 255), __and__ (value, 255), __and__ (__rshift__ (value, 24), 255)]));
		}) ();
		return null;
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.__str__ ();
	});}
});
export var ImageInteger =  __class__ ('ImageInteger', [Ndarray], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, imagedata) {
		self._imagedata = ImageData (imagedata);
		var array = Ndarray (self._imagedata.data);
		array.setshape (self._imagedata.height, self._imagedata.width, 4);
		var data = Uint32Array (self._imagedata.height * self._imagedata.width);
		var index = 0;
		for (var x = 0; x < self._imagedata.width; x++) {
			for (var y = 0; y < self._imagedata.height; y++) {
				__setitem__ (data, index, __or__ (__or__ (__or__ (__lshift__ (array.__getitem__ ([y, x, 0]), 16), __lshift__ (array.__getitem__ ([y, x, 1]), 8)), array.__getitem__ ([y, x, 2])), __lshift__ (array.__getitem__ ([y, x, 3]), 24)));
				index++;
			}
		}
		Ndarray.__init__ (self, data, 'uint32');
		self.setshape (self._imagedata.width, self._imagedata.height);
	});},
	get getImageData () {return __get__ (this, function (self) {
		var index = 0;
		for (var x = 0; x < self._imagedata.height; x++) {
			for (var y = 0; y < self._imagedata.width; y++) {
				var dat = self.__getitem__ ([y, x]);
				__setitem__ (self._imagedata.data, index, __and__ (__rshift__ (dat, 16), 255));
				__setitem__ (self._imagedata.data, __add__ (index, 1), __and__ (__rshift__ (dat, 8), 255));
				__setitem__ (self._imagedata.data, __add__ (index, 2), __and__ (dat, 255));
				__setitem__ (self._imagedata.data, __add__ (index, 3), __and__ (__rshift__ (dat, 24), 255));
				var index = __call__ (__iadd__, null, index, 4);
			}
		}
		return (function () {
			var __accu0__ = self._imagedata;
			return __call__ (__accu0__.getImageData, __accu0__);
		}) ();
	});}
});

//# sourceMappingURL=pyjsdl.surfarray.map