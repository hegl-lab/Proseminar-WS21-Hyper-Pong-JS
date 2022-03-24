// Transcrypt'ed from Python, 2022-03-23 20:43:09
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as env from './pyjsdl.env.js';
import {Rect} from './pyjsdl.rect.js';
import {Time} from './pyjsdl.time.js';
var __name__ = 'pyjsdl.util';
export var Timer =  __class__ ('Timer', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, log, log_length) {
		if (typeof log == 'undefined' || (log != null && log.hasOwnProperty ("__kwargtrans__"))) {;
			var log = 'console';
		};
		if (typeof log_length == 'undefined' || (log_length != null && log_length.hasOwnProperty ("__kwargtrans__"))) {;
			var log_length = 5;
		};
		self.time = Time ();
		self.time_i = self.get_time ();
		self.dtime = [];
		self.number = 0;
		self.log = null;
		self.log_list = null;
		self.log_num = 0;
		self.log_scroll = true;
		self.set_log (log, log_length);
	});},
	get get_time () {return __get__ (this, function (self) {
		return self.time.time ();
	});},
	get set_time () {return __get__ (this, function (self) {
		self.time_i = self.get_time ();
	});},
	get lap_time () {return __get__ (this, function (self, time_i, time_f, number, print_result) {
		if (typeof time_i == 'undefined' || (time_i != null && time_i.hasOwnProperty ("__kwargtrans__"))) {;
			var time_i = null;
		};
		if (typeof time_f == 'undefined' || (time_f != null && time_f.hasOwnProperty ("__kwargtrans__"))) {;
			var time_f = null;
		};
		if (typeof number == 'undefined' || (number != null && number.hasOwnProperty ("__kwargtrans__"))) {;
			var number = 100;
		};
		if (typeof print_result == 'undefined' || (print_result != null && print_result.hasOwnProperty ("__kwargtrans__"))) {;
			var print_result = true;
		};
		if (time_i === null) {
			var time_i = self.time_i;
		}
		if (time_f === null) {
			var time_f = self.get_time ();
		}
		self.dtime.append (time_f - time_i);
		self.number++;
		if (self.number >= number) {
			var t_ave = sum (self.dtime) / number;
			self.dtime = [];
			self.number = 0;
			if (print_result) {
				if (self.log_type == 'console') {
					self.log_num++;
					var entry = 'Time {}: {}'.format (self.log_num, t_ave);
					print (entry);
				}
				else {
					self.log_num++;
					var entry = 'Time {}: {}'.format (self.log_num, t_ave);
					self.print_log (entry);
				}
			}
			return t_ave;
		}
	});},
	get set_log () {return __get__ (this, function (self, log, log_length) {
		if (typeof log_length == 'undefined' || (log_length != null && log_length.hasOwnProperty ("__kwargtrans__"))) {;
			var log_length = 5;
		};
		if (__in__ (log, tuple (['console', 'textarea']))) {
			self.log_type = log;
			if (log == 'textarea') {
				if (!(self.log)) {
					var size = tuple ([env.canvas.surface.width - 5, 102]);
					self.log = env.canvas.surface._display.Textarea (size);
					self.log.setReadonly (true);
					self.log.addMouseListener (self);
					self.onMouseUp = (function __lambda__ (sender, x, y) {
						return null;
					});
					self.onMouseMove = (function __lambda__ (sender, x, y) {
						return null;
					});
					self.onMouseEnter = (function __lambda__ (sender) {
						return null;
					});
					self.log_list = (function () {
						var __accu0__ = [];
						for (var i = 0; i < log_length; i++) {
							__accu0__.append ('');
						}
						return __accu0__;
					}) ();
				}
				self.log.toggle (true);
			}
			else if (self.log) {
				self.log.toggle (false);
				self.log_list = [];
			}
		}
	});},
	get onMouseDown () {return __get__ (this, function (self, sender, x, y) {
		self.log_scroll = false;
	});},
	get onMouseLeave () {return __get__ (this, function (self, sender) {
		self.log_scroll = true;
	});},
	get print_log () {return __get__ (this, function (self, text) {
		if (self.log_type == 'console') {
			print (text);
		}
		else {
			self.log_list.py_pop (0);
			self.log_list.append (text + '\n');
			var text = ''.join (self.log_list);
			self.log.setText (text);
			if (self.log_scroll) {
				self.log.setCursorPos (len (text));
			}
		}
	});}
});
export var PyjsMode =  __class__ ('PyjsMode', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.getattr_call = (function () {
			var __accu0__ = self;
			return __call__ (__accu0__.test_getattr, __accu0__);
		}) ();
		self.eq_call = (function () {
			var __accu0__ = self;
			return __call__ (__accu0__.test_eq, __accu0__);
		}) ();
		var __left0__ = (function () {
			var __accu0__ = self;
			return __call__ (__accu0__.test_mode, __accu0__);
		}) ();
		self.strict = __left0__ [0];
		self.optimized = __left0__ [1];
	});},
	get test_mode () {return __get__ (this, function (self) {
		if (self.getattr_call && self.eq_call) {
			return tuple ([true, false]);
		}
		else {
			return tuple ([false, true]);
		}
	});},
	get test_getattr () {return __get__ (this, function (self) {
		return __eq__ (__call__ (Rect, null, 0, 0, 20, 20).center, tuple ([10, 10]));
	});},
	get test_eq () {return __get__ (this, function (self) {
		return __eq__ (__call__ (Rect, null, 0, 0, 20, 20), __call__ (Rect, null, 0, 0, 20, 20));
	});}
});
env.set_env ('pyjs_mode', PyjsMode ());
export var call = function (obj, func, args) {
	if (typeof args == 'undefined' || (args != null && args.hasOwnProperty ("__kwargtrans__"))) {;
		var args = tuple ([]);
	};
	return func.apply(obj, args);
};
export var id = function (obj) {
	return obj._identity;
};
export var Dict =  __class__ ('Dict', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._dk = dict ({});
		self._dv = dict ({});
	});},
	get __str__ () {return __get__ (this, function (self) {
		var s = (function () {
			var __accu0__ = [];
			for (var [k, v] of self.py_items ()) {
				__accu0__.append ('{}: {}'.format (k, v));
			}
			return __accu0__;
		}) ();
		return '{{}}'.format (', '.join (s));
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.__str__ ();
	});},
	get __iter__ () {return __get__ (this, function* (self) {
		for (var k of self._dk.py_keys ()) {
			yield self._dk [k];
		}
		});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __getitem__ () {return __get__ (this, function (self, key) {
		return self._dv [id (key)];
	});},
	get __setitem__ () {return __get__ (this, function (self, key, val) {
		self._dk [id (key)] = key;
		self._dv [id (key)] = val;
	});},
	get py_get () {return __get__ (this, function (self, key) {
		return self.__getitem__ (key);
	});},
	get py_setdefault () {return __get__ (this, function (self, key, val) {
		if (typeof val == 'undefined' || (val != null && val.hasOwnProperty ("__kwargtrans__"))) {;
			var val = null;
		};
		self.__setitem__ (key, val);
	});},
	get py_keys () {return __get__ (this, function (self) {
		return self._dk.py_values ();
	});},
	get py_values () {return __get__ (this, function (self) {
		return self._dv.py_values ();
	});},
	get py_items () {return __get__ (this, function* (self) {
		for (var k of self._dk.py_keys ()) {
			yield tuple ([self._dk [k], self._dv [k]]);
		}
		});}
});

//# sourceMappingURL=pyjsdl.util.map