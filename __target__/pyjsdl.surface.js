// Transcrypt'ed from Python, 2022-03-23 20:43:08
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Color} from './pyjsdl.color.js';
import {Rect, rectPool} from './pyjsdl.rect.js';
import {HTML5Canvas} from './pyjsdl.pyjsobj.js';
var __name__ = 'pyjsdl.surface';
export var __docformat__ = 'restructuredtext';
export var _return_rect = true;
export var Surface =  __class__ ('Surface', [HTML5Canvas], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, size) {
		var args = tuple ([].slice.apply (arguments).slice (2));
		self.width = int (size [0]);
		self.height = int (size [1]);
		HTML5Canvas.__init__ (self, self.width, self.height);
		HTML5Canvas.resize (self, self.width, self.height);
		self._display = null;
		self._super_surface = null;
		self._offset = tuple ([0, 0]);
		self._colorkey = null;
		self._stroke_style = null;
		self._fill_style = null;
		self._nonimplemented_methods ();
	});},
	get __str__ () {return __get__ (this, function (self) {
		var s = '<{}({}x{})>';
		return s.format (self.__class__.__name__, self.width, self.height);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.__str__ ();
	});},
	get get_size () {return __get__ (this, function (self) {
		return tuple ([self.width, self.height]);
	});},
	get get_width () {return __get__ (this, function (self) {
		return self.width;
	});},
	get get_height () {return __get__ (this, function (self) {
		return self.height;
	});},
	get resize () {return __get__ (this, function (self, width, height) {
		self.width = int (width);
		self.height = int (height);
		HTML5Canvas.resize (self, self.width, self.height);
	});},
	get get_rect () {return __get__ (this, function (self) {
		var attr = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: attr [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete attr.__kwargtrans__;
			}
		}
		else {
		}
		var rect = Rect (0, 0, self.width, self.height);
		for (var key of attr.py_keys ()) {
			setattr (rect, key, attr [key]);
		}
		return rect;
	});},
	get copy () {return __get__ (this, function (self) {
		var surface = Surface (tuple ([self.width, self.height]));
		surface.drawImage (self.canvas, 0, 0);
		return surface;
	});},
	get subsurface () {return __get__ (this, function (self, rect) {
		if (__in__ (rect, tuple (['t', 'f']))) {
			if (!(self._super_surface)) {
				return ;
			}
			if (rect == 't') {
				self.drawImage (self._super_surface.canvas, self._offset [0], self._offset [1], self.width, self.height, 0, 0, self.width, self.height);
			}
			else {
				self._super_surface.drawImage (self.canvas, self._offset [0], self._offset [1]);
			}
			return ;
		}
		if (hasattr (rect, 'width')) {
			var _rect = rect;
		}
		else {
			var _rect = Rect (rect);
		}
		var surf_rect = self.get_rect ();
		if (!(surf_rect.contains (_rect))) {
			var __except0__ = ValueError ('subsurface outside surface area');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var surface = self.getSubimage (_rect.x, _rect.y, _rect.width, _rect.height);
		surface._super_surface = self;
		surface._offset = tuple ([_rect.x, _rect.y]);
		surface._colorkey = self._colorkey;
		return surface;
	});},
	get getSubimage () {return __get__ (this, function (self, x, y, width, height) {
		var surface = Surface (tuple ([width, height]));
		surface.drawImage (self.canvas, x, y, width, height, 0, 0, width, height);
		return surface;
	});},
	get blit () {return __get__ (this, function (self, surface, position, area) {
		if (typeof area == 'undefined' || (area != null && area.hasOwnProperty ("__kwargtrans__"))) {;
			var area = null;
		};
		if (!(_return_rect)) {
			if (!(area)) {
				(function () {
					var __accu0__ = self._ctx;
					return __call__ (__accu0__.drawImage, __accu0__, surface.canvas, __getitem__ (position, 0), __getitem__ (position, 1));
				}) ();
			}
			else {
				(function () {
					var __accu0__ = self._ctx;
					return __call__ (__accu0__.drawImage, __accu0__, surface.canvas, __getitem__ (area, 0), __getitem__ (area, 1), __getitem__ (area, 2), __getitem__ (area, 3), __getitem__ (position, 0), __getitem__ (position, 1), __getitem__ (area, 2), __getitem__ (area, 3));
				}) ();
			}
			return null;
		}
		if (!(area)) {
			var rect = (function () {
				var __accu0__ = rectPool;
				return __call__ (__accu0__.py_get, __accu0__, __getitem__ (position, 0), __getitem__ (position, 1), surface.width, surface.height);
			}) ();
			(function () {
				var __accu0__ = self._ctx;
				return __call__ (__accu0__.drawImage, __accu0__, surface.canvas, rect.x, rect.y);
			}) ();
		}
		else {
			var rect = (function () {
				var __accu0__ = rectPool;
				return __call__ (__accu0__.py_get, __accu0__, __getitem__ (position, 0), __getitem__ (position, 1), __getitem__ (area, 2), __getitem__ (area, 3));
			}) ();
			(function () {
				var __accu0__ = self._ctx;
				return __call__ (__accu0__.drawImage, __accu0__, surface.canvas, __getitem__ (area, 0), __getitem__ (area, 1), __getitem__ (area, 2), __getitem__ (area, 3), rect.x, rect.y, __getitem__ (area, 2), __getitem__ (area, 3));
			}) ();
		}
		if (self._display) {
			var surface_rect = self._display._surface_rect;
		}
		else {
			var surface_rect = (function () {
				var __accu0__ = self;
				return __call__ (__accu0__.get_rect, __accu0__);
			}) ();
		}
		var changed_rect = (function () {
			var __accu0__ = surface_rect;
			return __call__ (__accu0__.clip, __accu0__, rect);
		}) ();
		(function () {
			var __accu0__ = rectPool;
			return __call__ (__accu0__.append, __accu0__, rect);
		}) ();
		return changed_rect;
	});},
	get _blits () {return __get__ (this, function (self, surfaces) {
		var ctx = self.impl.canvasContext;
		for (var [surface, rect] of surfaces) {
			ctx.drawImage (surface.canvas, rect.x, rect.y);
		}
	});},
	get _blit_clear () {return __get__ (this, function (self, surface, rect_list) {
		var ctx = self.impl.canvasContext;
		for (var r of rect_list) {
			ctx.drawImage (surface.canvas, r.x, r.y, r.width, r.height, r.x, r.y, r.width, r.height);
		}
	});},
	get set_colorkey () {return __get__ (this, function (self, color, flags) {
		if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {;
			var flags = null;
		};
		if (self._colorkey) {
			self.replace_color (tuple ([0, 0, 0, 0]), self._colorkey);
			self._colorkey = null;
		}
		if (color) {
			self._colorkey = Color (color);
			self.replace_color (self._colorkey);
		}
		return null;
	});},
	get get_colorkey () {return __get__ (this, function (self) {
		if (self._colorkey) {
			return tuple ([self._colorkey.r, self._colorkey.g, self._colorkey.b, self._colorkey.a]);
		}
		else {
			return null;
		}
	});},
	get _getPixel () {return __get__ (this, function (self, imagedata, index) {
		return imagedata.data [index];
	});},
	get _setPixel () {return __get__ (this, function (self, imagedata, index, dat) {
		imagedata.data [index] = dat;
		return ;
	});},
	get replace_color () {return __get__ (this, function (self, color, new_color) {
		if (typeof new_color == 'undefined' || (new_color != null && new_color.hasOwnProperty ("__kwargtrans__"))) {;
			var new_color = null;
		};
		var pixels = self.getImageData (0, 0, self.width, self.height);
		if (hasattr (color, 'a')) {
			var color1 = color;
		}
		else {
			var color1 = Color (color);
		}
		if (new_color === null) {
			var alpha_zero = true;
		}
		else {
			if (hasattr (new_color, 'a')) {
				var color2 = new_color;
			}
			else {
				var color2 = Color (new_color);
			}
			var alpha_zero = false;
		}
		if (alpha_zero) {
			var __left0__ = tuple ([color1.r, color1.g, color1.b, color1.a]);
			var r1 = __left0__ [0];
			var g1 = __left0__ [1];
			var b1 = __left0__ [2];
			var a1 = __left0__ [3];
			var a2 = 0;
			for (var i = 0; i < len (pixels.data); i += 4) {
				if (self._getPixel (pixels, i) == r1 && self._getPixel (pixels, i + 1) == g1 && self._getPixel (pixels, i + 2) == b1 && self._getPixel (pixels, i + 3) == a1) {
					self._setPixel (pixels, i + 3, a2);
				}
			}
		}
		else {
			var __left0__ = tuple ([color1.r, color1.g, color1.b, color1.a]);
			var r1 = __left0__ [0];
			var g1 = __left0__ [1];
			var b1 = __left0__ [2];
			var a1 = __left0__ [3];
			var __left0__ = tuple ([color2.r, color2.g, color2.b, color2.a]);
			var r2 = __left0__ [0];
			var g2 = __left0__ [1];
			var b2 = __left0__ [2];
			var a2 = __left0__ [3];
			for (var i = 0; i < len (pixels.data); i += 4) {
				if (self._getPixel (pixels, i) == r1 && self._getPixel (pixels, i + 1) == g1 && self._getPixel (pixels, i + 2) == b1 && self._getPixel (pixels, i + 3) == a1) {
					self._setPixel (pixels, i, r2);
					self._setPixel (pixels, i + 1, g2);
					self._setPixel (pixels, i + 2, b2);
					self._setPixel (pixels, i + 3, a2);
				}
			}
		}
		self.putImageData (pixels, 0, 0, 0, 0, self.width, self.height);
		return null;
	});},
	get get_at () {return __get__ (this, function (self, pos) {
		var pixel = self.getImageData (pos [0], pos [1], 1, 1);
		return Color ((function () {
			var __accu0__ = [];
			for (var i of tuple ([0, 1, 2, 3])) {
				__accu0__.append (self._getPixel (pixel, i));
			}
			return __accu0__;
		}) ());
	});},
	get set_at () {return __get__ (this, function (self, pos, color) {
		if (self._fill_style != color) {
			self._fill_style = color;
			if (hasattr (color, 'a')) {
				var _color = color;
			}
			else {
				var _color = Color (color);
			}
			self.setFillStyle (_color);
		}
		self.fillRect (pos [0], pos [1], 1, 1);
		return null;
	});},
	get fill () {return __get__ (this, function (self, color, rect) {
		if (typeof color == 'undefined' || (color != null && color.hasOwnProperty ("__kwargtrans__"))) {;
			var color = null;
		};
		if (typeof rect == 'undefined' || (rect != null && rect.hasOwnProperty ("__kwargtrans__"))) {;
			var rect = null;
		};
		if (color === null) {
			HTML5Canvas.fill (self);
			return ;
		}
		if (self._fill_style != color) {
			self._fill_style = color;
			if (hasattr (color, 'a')) {
				self.setFillStyle (color);
			}
			else {
				self.setFillStyle (Color (color));
			}
		}
		if (!(_return_rect)) {
			if (rect === null) {
				self.fillRect (0, 0, self.width, self.height);
			}
			else {
				self.fillRect (rect [0], rect [1], rect [2], rect [3]);
			}
			return null;
		}
		if (rect === null) {
			var _rect = Rect (0, 0, self.width, self.height);
			self.fillRect (_rect.x, _rect.y, _rect.width, _rect.height);
		}
		else {
			if (self._display) {
				if (hasattr (rect, 'width')) {
					var _rect = self._display._surface_rect.clip (rect);
				}
				else {
					var _rect_ = rectPool.py_get (rect [0], rect [1], rect [2], rect [3]);
					var _rect = self._display._surface_rect.clip (_rect_);
					rectPool.append (_rect_);
				}
			}
			else {
				var surface_rect = rectPool.py_get (0, 0, self.width, self.height);
				if (hasattr (rect, 'width')) {
					var _rect = surface_rect.clip (rect);
				}
				else {
					var _rect_ = rectPool.py_get (rect [0], rect [1], rect [2], rect [3]);
					var _rect = surface_rect.clip (_rect_);
					rectPool.append (_rect_);
				}
				rectPool.append (surface_rect);
			}
			if (_rect.width && _rect.height) {
				self.fillRect (_rect.x, _rect.y, _rect.width, _rect.height);
			}
		}
		return _rect;
	});},
	get get_parent () {return __get__ (this, function (self) {
		return self._super_surface;
	});},
	get get_offset () {return __get__ (this, function (self) {
		return self._offset;
	});},
	get toDataURL () {return __get__ (this, function (self, datatype) {
		if (typeof datatype == 'undefined' || (datatype != null && datatype.hasOwnProperty ("__kwargtrans__"))) {;
			var datatype = null;
		};
		if (!(datatype)) {
			return self.canvas.toDataURL ();
		}
		else {
			return self.canvas.toDataURL (datatype);
		}
	});},
	get _nonimplemented_methods () {return __get__ (this, function (self) {
		self.convert = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return self;
		});
		self.convert_alpha = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return self;
		});
		self.set_alpha = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.get_alpha = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.lock = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.unlock = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.mustlock = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return false;
		});
		self.get_locked = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return false;
		});
		self.get_locks = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return tuple ([]);
		});
	});}
});
export var Surf =  __class__ ('Surf', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, image) {
		self.canvas = image;
		var __left0__ = tuple ([self.canvas.width, self.canvas.height]);
		self.width = __left0__ [0];
		self.height = __left0__ [1];
		self._nonimplemented_methods ();
	});},
	get get_size () {return __get__ (this, function (self) {
		return tuple ([self.width, self.height]);
	});},
	get get_width () {return __get__ (this, function (self) {
		return self.width;
	});},
	get get_height () {return __get__ (this, function (self) {
		return self.height;
	});},
	get _nonimplemented_methods () {return __get__ (this, function (self) {
		self.convert = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return self;
		});
		self.convert_alpha = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return self;
		});
		self.set_alpha = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.get_alpha = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.lock = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.unlock = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.mustlock = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return false;
		});
		self.get_locked = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return false;
		});
		self.get_locks = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return tuple ([]);
		});
	});}
});
export var IndexSizeError =  __class__ ('IndexSizeError', [Exception], {
	__module__: __name__,
});
export var bounding_rect_return = function (setting) {
	_return_rect = setting;
};

//# sourceMappingURL=pyjsdl.surface.map