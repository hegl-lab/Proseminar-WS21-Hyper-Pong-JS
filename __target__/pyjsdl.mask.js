// Transcrypt'ed from Python, 2022-03-23 20:43:09
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Color} from './pyjsdl.color.js';
import {BitSet} from './pyjsdl.pyjsarray.js';
var __name__ = 'pyjsdl.mask';
export var __docformat__ = 'restructuredtext';
export var from_surface = function (surface, threshold) {
	if (typeof threshold == 'undefined' || (threshold != null && threshold.hasOwnProperty ("__kwargtrans__"))) {;
		var threshold = 127;
	};
	var mask = Mask (tuple ([surface.width, surface.height]));
	if (!(mask.bit)) {
		return null;
	}
	var pixels = surface.getImageData (0, 0, surface.width, surface.height);
	var __left0__ = tuple ([surface.width * 4, surface.height]);
	var width = __left0__ [0];
	var height = __left0__ [1];
	for (var y = 0; y < height; y++) {
		var xpix = 0;
		var i = y * width + 3;
		for (var x = 0; x < width; x += 4) {
			if (surface._getPixel (pixels, i + x) > threshold) {
				mask.set_at (tuple ([xpix, y]));
			}
			xpix++;
		}
	}
	return mask;
};
export var from_threshold = function (surface, color, threshold) {
	if (typeof threshold == 'undefined' || (threshold != null && threshold.hasOwnProperty ("__kwargtrans__"))) {;
		var threshold = tuple ([0, 0, 0, 255]);
	};
	var mask = Mask (tuple ([surface.width, surface.height]));
	if (!(mask.bit)) {
		return null;
	}
	var pixels = surface.getImageData (0, 0, surface.width, surface.height);
	if (threshold == tuple ([0, 0, 0, 255])) {
		var color = Color (color);
		var __left0__ = tuple ([surface.width * 4, surface.height]);
		var width = __left0__ [0];
		var height = __left0__ [1];
		for (var y = 0; y < height; y++) {
			var xpix = 0;
			var i = y * width;
			for (var x = 0; x < width; x += 4) {
				var ix = i + x;
				if (surface._getPixel (pixels, ix) == color.r && surface._getPixel (pixels, ix + 1) == color.g && surface._getPixel (pixels, ix + 2) == color.b && surface._getPixel (pixels, ix + 3) >= threshold [3]) {
					mask.set_at (tuple ([xpix, y]));
				}
				xpix++;
			}
		}
	}
	else {
		var color = Color (color);
		var col = dict ({});
		col ['r1'] = (color.r - threshold [0]) - 1;
		col ['r2'] = (color.r + threshold [0]) + 1;
		col ['g1'] = (color.g - threshold [1]) - 1;
		col ['g2'] = (color.g + threshold [1]) + 1;
		col ['b1'] = (color.b - threshold [2]) - 1;
		col ['b2'] = (color.b + threshold [2]) + 1;
		col ['a'] = threshold [3] - 1;
		var __left0__ = tuple ([surface.width * 4, surface.height]);
		var width = __left0__ [0];
		var height = __left0__ [1];
		for (var y = 0; y < height; y++) {
			var xpix = 0;
			var i = y * width;
			for (var x = 0; x < width; x += 4) {
				var ix = i + x;
				if ((col ['r1'] < surface._getPixel (pixels, ix) && surface._getPixel (pixels, ix) < col ['r2']) && (col ['g1'] < surface._getPixel (pixels, ix + 1) && surface._getPixel (pixels, ix + 1) < col ['g2']) && (col ['b1'] < surface._getPixel (pixels, ix + 2) && surface._getPixel (pixels, ix + 2) < col ['b2']) && surface._getPixel (pixels, ix + 3) > col ['a']) {
					mask.set_at (tuple ([xpix, y]));
				}
				xpix++;
			}
		}
	}
	return mask;
};
export var Mask =  __class__ ('Mask', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, size) {
		self.width = int (size [0]);
		self.height = int (size [1]);
		self.bit = [];
		for (var bitset = 0; bitset < self.height; bitset++) {
			self.bit.append (BitSet (self.width));
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		return self.toString ();
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return '{}({})'.format (self.__class__, repr (self.__dict__));
	});},
	get get_size () {return __get__ (this, function (self) {
		return tuple ([self.width, self.height]);
	});},
	get get_at () {return __get__ (this, function (self, pos) {
		return self.bit [pos [1]].py_get (pos [0]);
	});},
	get set_at () {return __get__ (this, function (self, pos, value) {
		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
			var value = 1;
		};
		self.bit [pos [1]].set (pos [0], value);
		return null;
	});},
	get fill () {return __get__ (this, function (self) {
		for (var bitset of self.bit) {
			bitset.fill ();
		}
		return null;
	});},
	get py_clear () {return __get__ (this, function (self) {
		for (var bitset of self.bit) {
			bitset.py_clear ();
		}
		return null;
	});},
	get invert () {return __get__ (this, function (self) {
		for (var bitset of self.bit) {
			bitset.flip (0, self.width);
		}
		return null;
	});},
	get count () {return __get__ (this, function (self) {
		var true_bits = 0;
		for (var bitset of self.bit) {
			true_bits += bitset.cardinality ();
		}
		return true_bits;
	});},
	get overlap () {return __get__ (this, function (self, mask, offset) {
		if (offset [0] > 0) {
			var x1 = offset [0];
			var x2 = 0;
		}
		else {
			var x1 = 0;
			var x2 = -(offset [0]);
		}
		if (offset [1] > 0) {
			var y1 = offset [1];
			var y2 = 0;
		}
		else {
			var y1 = 0;
			var y2 = -(offset [1]);
		}
		var w = min (self.width - x1, mask.width - x2);
		var h = min (self.height - y1, mask.height - y2);
		if (w > 0 && h > 0) {
			for (var y = 0; y < h; y++) {
				if (self.bit [y1 + y].py_get (x1, x1 + w).intersects (mask.bit [y2 + y].py_get (x2, x2 + w))) {
					return true;
				}
			}
		}
		return null;
	});},
	get toString () {return __get__ (this, function (self, bit) {
		if (typeof bit == 'undefined' || (bit != null && bit.hasOwnProperty ("__kwargtrans__"))) {;
			var bit = tuple (['1', '0']);
		};
		var cbit = dict ([[true, bit [0]], [false, bit [1]]]);
		var cbitset = [];
		for (var bitset of self.bit) {
			cbitset.append ('\n');
			cbitset.extend ((function () {
				var __accu0__ = [];
				for (var i = 0; i < self.width; i++) {
					__accu0__.append (cbit [bitset.py_get (i)]);
				}
				return __accu0__;
			}) ());
		}
		var bitstr = ''.join (cbitset);
		return bitstr;
	});}
});

//# sourceMappingURL=pyjsdl.mask.map