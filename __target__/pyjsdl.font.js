// Transcrypt'ed from Python, 2022-03-23 20:43:10
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {HTML5Canvas} from './pyjsdl.pyjsobj.js';
import {Color} from './pyjsdl.color.js';
import {Surface} from './pyjsdl.surface.js';
import {ceil as _ceil} from './math.js';
var __name__ = 'pyjsdl.font';
export var __docformat__ = 'restructuredtext';
export var _initialized = false;
export var _surf = null;
export var init = function () {
	if (_initialized) {
		return ;
	}
	try {
		HTML5Canvas._identity = -(1);
		_surf = HTML5Canvas (1, 1);
		_surf.measureText ('x');
	}
	catch (__except0__) {
		_surf = null;
	}
	_initialized = true;
};
init ();
export var quit = function () {
	_surf = null;
	_initialized = false;
};
export var get_init = function () {
	return _initialized;
};
export var get_default_font = function () {
	return Font._font [0];
};
export var get_fonts = function () {
	return Font._font;
};
export var match_font = function (py_name) {
	var fallback = false;
	var font = (function () {
		var __accu0__ = [];
		for (var fn of py_name.py_split (',')) {
			__accu0__.append (fn.strip ().lower ());
		}
		return __accu0__;
	}) ();
	for (var [i, fn] of enumerate (font)) {
		if (__in__ (fn, Font._font)) {
			var fallback = true;
			continue;
		}
		else {
			var f = ''.join ((function () {
				var __accu0__ = [];
				for (var c of fn) {
					if (c.isalnum ()) {
						__accu0__.append (c);
					}
				}
				return py_iter (__accu0__);
			}) ());
			if (__in__ (f, Font._font_alt)) {
				font [i] = Font._font [Font._font_alt [f]];
				var fallback = true;
			}
		}
	}
	if (!(fallback)) {
		font.append (Font._font [0]);
	}
	var font = ','.join (font);
	return font;
};
export var Font =  __class__ ('Font', [object], {
	__module__: __name__,
	_font: ['arial', 'bitstream vera sans', 'bitstream vera serif', 'book antiqua', 'comic sans ms', 'courier new', 'courier', 'dejavu sans', 'dejavu sans mono', 'dejavu serif', 'freesans', 'garamond', 'georgia', 'helvetica', 'impact', 'liberation sans', 'liberation serif', 'lucida console', 'lucida serif', 'nimbus mono l', 'nimbus roman no9 l', 'nimbus sans l', 'palatino', 'times new roman', 'times', 'tahoma', 'verdana', 'cursive', 'monospace', 'sans-serif', 'serif'],
	_font_alt: dict ({'arial': 0, 'bitstreamverasans': 1, 'bitstreamveraserif': 2, 'bookantiqua': 3, 'comicsansms': 4, 'couriernew': 5, 'courier': 6, 'dejavusans': 7, 'dejavusansmono': 8, 'dejavuserif': 9, 'freesans': 10, 'garamond': 11, 'georgia': 12, 'helvetica': 13, 'impact': 14, 'liberationsans': 15, 'liberationserif': 16, 'lucidaconsole': 17, 'lucidaserif': 18, 'nimbusmonol': 19, 'nimbusromanno9l': 20, 'nimbussansl': 21, 'palatino': 22, 'timesnewroman': 23, 'times': 24, 'tahoma': 25, 'verdana': 26, 'cursive': 27, 'monospace': 28, 'sansserif': 29, 'serif': 30}),
	_font_family: [['arial', 'helvetica', 'liberation sans', 'nimbus sans l', 'freesans', 'tahoma', 'sans-serif'], ['verdana', 'bitstream vera sans', 'dejavu sans', 'sans-serif'], ['impact', 'sans-serif'], ['comic sans ms', 'cursive', 'sans-serif'], ['courier new', 'courier', 'lucida console', 'dejavu sans mono', 'monospace'], ['times new roman', 'times', 'liberation serif', 'nimbus roman no9 l', 'serif'], ['garamond', 'book antiqua', 'palatino', 'liberation serif', 'nimbus roman no9 l', 'serif'], ['georgia', 'bitstream vera serif', 'lucida serif', 'liberation serif', 'dejavu serif', 'serif']],
	get __init__ () {return __get__ (this, function (self, py_name, size) {
		if (!(_initialized)) {
			init ();
		}
		if (!(py_name)) {
			var font = [Font._font [0]];
		}
		else {
			var font = (function () {
				var __accu0__ = [];
				for (var fn of py_name.py_split (',')) {
					__accu0__.append (fn.strip ().lower ());
				}
				return __accu0__;
			}) ();
		}
		var load_custom_font = false;
		var fallback = null;
		for (var [i, fn] of enumerate (font)) {
			if (__in__ ('.', fn)) {
				var fn = fn.py_split ('.') [0];
				font [i] = fn;
				var load_custom_font = true;
			}
			if (__in__ (fn, Font._font)) {
				if (!(fallback)) {
					var fallback = fn;
				}
			}
			else {
				var f = ''.join ((function () {
					var __accu0__ = [];
					for (var c of fn) {
						if (c.isalnum ()) {
							__accu0__.append (c);
						}
					}
					return py_iter (__accu0__);
				}) ());
				if (__in__ (f, Font._font_alt)) {
					font [i] = Font._font [Font._font_alt [f]];
					if (!(fallback)) {
						var fallback = font [i];
					}
				}
			}
		}
		if (fallback) {
			for (var ff of Font._font_family) {
				if (__in__ (fallback, ff)) {
					font.extend ((function () {
						var __accu0__ = [];
						for (var f of ff) {
							if (!__in__ (f, font)) {
								__accu0__.append (f);
							}
						}
						return py_iter (__accu0__);
					}) ());
					break;
				}
			}
		}
		else {
			font.extend (Font._font_family [0]);
		}
		self.fontname = ','.join (font);
		self.fontsize = size;
		self.bold = '';
		self.italic = '';
		self.fontstyle = (self.bold + ' ') + self.italic;
		self.underline = false;
		self.char_size = null;
		if (load_custom_font) {
			self.render ('x');
		}
		self._nonimplemented_methods ();
	});},
	get __str__ () {return __get__ (this, function (self) {
		return '{}({})'.format (self.__class__, self.__dict__);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return '{}({})'.format (self.__class__, self.__dict__);
	});},
	get render () {return __get__ (this, function (self, text, antialias, color, background, surface) {
		if (typeof antialias == 'undefined' || (antialias != null && antialias.hasOwnProperty ("__kwargtrans__"))) {;
			var antialias = true;
		};
		if (typeof color == 'undefined' || (color != null && color.hasOwnProperty ("__kwargtrans__"))) {;
			var color = tuple ([0, 0, 0]);
		};
		if (typeof background == 'undefined' || (background != null && background.hasOwnProperty ("__kwargtrans__"))) {;
			var background = null;
		};
		if (typeof surface == 'undefined' || (surface != null && surface.hasOwnProperty ("__kwargtrans__"))) {;
			var surface = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'text': var text = __allkwargs0__ [__attrib0__]; break;
						case 'antialias': var antialias = __allkwargs0__ [__attrib0__]; break;
						case 'color': var color = __allkwargs0__ [__attrib0__]; break;
						case 'background': var background = __allkwargs0__ [__attrib0__]; break;
						case 'surface': var surface = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(surface)) {
			var __left0__ = self.size (text);
			var w = __left0__ [0];
			var h = __left0__ [1];
			var surf = Surface (tuple ([w, h]));
		}
		else {
			var surf = surface;
			var __left0__ = tuple ([surface.width, surface.height]);
			var w = __left0__ [0];
			var h = __left0__ [1];
		}
		if (background) {
			surf.setFillStyle (Color (background));
			surf.fillRect (0, 0, w, h);
		}
		surf.setFont ('{} {}px {}'.format (self.fontstyle, self.fontsize, self.fontname));
		surf.setFillStyle (Color (color));
		surf.setTextAlign ('center');
		surf.setTextBaseline ('middle');
		surf.fillText (text, w / 2, h / 2);
		if (self.underline) {
			surf.setLineWidth (self.fontsize / 20);
			surf.setStrokeStyle (Color (color));
			surf.beginPath ();
			surf.moveTo (0, h * 0.85);
			surf.lineTo (w, h * 0.85);
			surf.stroke ();
		}
		return surf;
	});},
	get size () {return __get__ (this, function (self, text) {
		if (_surf) {
			_surf.setFont ('{} {}px {}'.format (self.fontstyle, self.fontsize, self.fontname));
			var x = _surf.measureText (text);
		}
		else {
			var x = self._size_estimate (text);
		}
		if (x < 1) {
			var x = 1;
		}
		var y = int (self.fontsize * 1.2);
		return tuple ([x, y]);
	});},
	get _size_estimate () {return __get__ (this, function (self, text) {
		if (typeof text == 'undefined' || (text != null && text.hasOwnProperty ("__kwargtrans__"))) {;
			var text = null;
		};
		if (!(self.char_size)) {
			self.char_size = self._get_char_size ();
		}
		self.fontname = ','.join (Font._font_family [0]);
		self.fontstyle = '';
		var size = [];
		for (var char of text) {
			try {
				size.append (self.char_size [char] * self.fontsize);
			}
			catch (__except0__) {
				if (isinstance (__except0__, KeyError)) {
					size.append (self.char_size ['x'] * self.fontsize);
				}
				else {
					throw __except0__;
				}
			}
		}
		var x = _ceil (sum (size));
		return x;
	});},
	get set_underline () {return __get__ (this, function (self, setting) {
		if (typeof setting == 'undefined' || (setting != null && setting.hasOwnProperty ("__kwargtrans__"))) {;
			var setting = true;
		};
		self.underline = setting;
	});},
	get get_underline () {return __get__ (this, function (self) {
		return self.underline;
	});},
	get set_bold () {return __get__ (this, function (self, setting) {
		if (typeof setting == 'undefined' || (setting != null && setting.hasOwnProperty ("__kwargtrans__"))) {;
			var setting = true;
		};
		self.bold = dict ([[true, 'bold'], [false, '']]) [setting];
		self.fontstyle = (self.bold + ' ') + self.italic;
	});},
	get get_bold () {return __get__ (this, function (self) {
		if (self.bold) {
			return true;
		}
		else {
			return false;
		}
	});},
	get set_italic () {return __get__ (this, function (self, setting) {
		if (typeof setting == 'undefined' || (setting != null && setting.hasOwnProperty ("__kwargtrans__"))) {;
			var setting = true;
		};
		self.italic = dict ([[true, 'italic'], [false, '']]) [setting];
		self.fontstyle = (self.bold + ' ') + self.italic;
	});},
	get get_italic () {return __get__ (this, function (self) {
		if (self.italic) {
			return true;
		}
		else {
			return false;
		}
	});},
	get get_linesize () {return __get__ (this, function (self) {
		return int (self.fontsize * 1.2);
	});},
	get _nonimplemented_methods () {return __get__ (this, function (self) {
		self.metrics = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return [];
		});
		self.get_height = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return 0;
		});
		self.get_ascent = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return 0;
		});
		self.get_descent = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return 0;
		});
	});},
	get _get_char_size () {return __get__ (this, function (self, font) {
		if (typeof font == 'undefined' || (font != null && font.hasOwnProperty ("__kwargtrans__"))) {;
			var font = null;
		};
		if (!(font)) {
			return dict ({'a': 0.6, 'b': 0.6, 'c': 0.5, 'd': 0.6, 'e': 0.6, 'f': 0.3, 'g': 0.6, 'h': 0.6, 'i': 0.2, 'j': 0.2, 'k': 0.5, 'l': 0.2, 'm': 0.8, 'n': 0.6, 'o': 0.6, 'p': 0.6, 'q': 0.6, 'r': 0.3, 's': 0.5, 't': 0.3, 'u': 0.6, 'v': 0.5, 'w': 0.7, 'x': 0.5, 'y': 0.5, 'z': 0.5, 'A': 0.7, 'B': 0.7, 'C': 0.7, 'D': 0.7, 'E': 0.7, 'F': 0.6, 'G': 0.8, 'H': 0.7, 'I': 0.3, 'J': 0.5, 'K': 0.7, 'L': 0.6, 'M': 0.8, 'N': 0.7, 'O': 0.8, 'P': 0.7, 'Q': 0.8, 'R': 0.7, 'S': 0.7, 'T': 0.6, 'U': 0.7, 'V': 0.7, 'W': 0.9, 'X': 0.7, 'Y': 0.7, 'Z': 0.6, '0': 0.6, '1': 0.6, '2': 0.6, '3': 0.6, '4': 0.6, '5': 0.6, '6': 0.6, '7': 0.6, '8': 0.6, '9': 0.6, '.': 0.3, ',': 0.3, ':': 0.3, ';': 0.3, '?': 0.6, '~': 0.6, '!': 0.3, '@': 1, '#': 0.6, '$': 0.6, '%': 0.9, '^': 0.5, '&': 0.7, '=': 0.6, '+': 0.6, '-': 0.3, '*': 0.4, '/': 0.3, '\\': 0.3, '_': 0.6, '<': 0.6, '>': 0.6, '(': 0.3, ')': 0.3, '{': 0.3, '}': 0.3, '[': 0.3, ']': 0.3, "'": 0.2, '"': 0.4, ' ': 0.3});
		}
		else {
			var fontsize = 10;
			_surf.setFont ('{}px {}'.format (fontsize, font));
			var char_size = dict ({});
			for (var char of 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;?~!@#$%^&=+-*/\\_<>(){}[]\'" ') {
				char_size [char] = float (_surf.measureText (char) / fontsize);
			}
			return char_size;
		}
	});}
});
export var SysFont =  __class__ ('SysFont', [Font], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, py_name, size, bold, italic) {
		if (typeof bold == 'undefined' || (bold != null && bold.hasOwnProperty ("__kwargtrans__"))) {;
			var bold = false;
		};
		if (typeof italic == 'undefined' || (italic != null && italic.hasOwnProperty ("__kwargtrans__"))) {;
			var italic = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
						case 'size': var size = __allkwargs0__ [__attrib0__]; break;
						case 'bold': var bold = __allkwargs0__ [__attrib0__]; break;
						case 'italic': var italic = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		Font.__init__ (self, py_name, size);
		self.bold = dict ([[true, 'bold'], [false, '']]) [bold];
		self.italic = dict ([[true, 'italic'], [false, '']]) [bold];
		self.fontstyle = (self.bold + ' ') + self.italic;
	});}
});

//# sourceMappingURL=pyjsdl.font.map