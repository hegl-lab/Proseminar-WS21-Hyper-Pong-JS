// Transcrypt'ed from Python, 2022-03-23 20:43:09
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {performanceNowInit} from './pyjsdl.pyjsobj.js';
import * as env from './pyjsdl.env.js';
var __name__ = 'pyjsdl.time';
export var __docformat__ = 'restructuredtext';
export var Clock =  __class__ ('Clock', [object], {
	__module__: __name__,
	_wnd: null,
	get __init__ () {return __get__ (this, function (self) {
		self._time = self.time ();
		self._time_init = self._time;
		self._time_diff = 0;
		self._framerate = 0;
	});},
	get get_time () {return __get__ (this, function (self) {
		return self._time_diff;
	});},
	get tick () {return __get__ (this, function (self, framerate) {
		if (typeof framerate == 'undefined' || (framerate != null && framerate.hasOwnProperty ("__kwargtrans__"))) {;
			var framerate = 0;
		};
		if (self._framerate != framerate && !(env.canvas._pause)) {
			self._framerate = framerate;
			if (framerate) {
				env.canvas._framerate = 1000.0 / framerate;
			}
			else {
				env.canvas._framerate = 0.0;
			}
		}
		self._time = self.time ();
		self._time_diff = self._time - self._time_init;
		self._time_init = self._time;
		return self._time_diff;
	});},
	get tick_busy_loop () {return __get__ (this, function (self, framerate) {
		if (typeof framerate == 'undefined' || (framerate != null && framerate.hasOwnProperty ("__kwargtrans__"))) {;
			var framerate = 0;
		};
		return self.tick (framerate);
	});},
	get get_fps () {return __get__ (this, function (self) {
		if (!(env.canvas._pause)) {
			return 1000.0 / env.canvas._frametime;
		}
		else {
			return 0.0;
		}
	});},
	get time () {return __get__ (this, function (self) {
		return self._wnd.performance.now ();
	});}
});
export var Time =  __class__ ('Time', [object], {
	__module__: __name__,
	_wnd: null,
	get __init__ () {return __get__ (this, function (self) {
		self.Clock = Clock;
		Time._wnd = performanceNowInit ();
		Clock._wnd = Time._wnd;
		self._time_init = self.time ();
		self._framerate = 0;
		self._timers = dict ({});
		self.run = (function __lambda__ () {
			return self.wait ();
		});
	});},
	get get_ticks () {return __get__ (this, function (self) {
		return self.time () - self._time_init;
	});},
	get delay () {return __get__ (this, function (self, time) {
		var start = self.time ();
		while (true) {
			if (self.time () - start > time) {
				return self.time () - start;
			}
		}
	});},
	get wait () {return __get__ (this, function (self, time) {
		if (typeof time == 'undefined' || (time != null && time.hasOwnProperty ("__kwargtrans__"))) {;
			var time = 0;
		};
		if (time) {
			if (!(env.canvas._pause)) {
				self._framerate = env.canvas._framerate;
				env.canvas._framerate = time * 10;
				env.canvas._pause = true;
				self.set_timeout (self, time);
			}
		}
		else if (env.canvas._pause) {
			env.canvas._framerate = self._framerate;
			env.canvas._rendertime = self.time ();
			env.canvas._pause = false;
		}
		return time;
	});},
	get set_timer () {return __get__ (this, function (self, event, time, once) {
		if (typeof once == 'undefined' || (once != null && once.hasOwnProperty ("__kwargtrans__"))) {;
			var once = false;
		};
		if (event.py_metatype) {
			var eventType = event.py_metatype;
			if (!__in__ (str (eventType), self._timers.py_keys ())) {
				self._timers [eventType] = _EventTimer (event);
			}
		}
		else {
			var eventType = event;
			if (!__in__ (str (eventType), self._timers.py_keys ())) {
				var evt = env.event.Event (eventType);
				self._timers [eventType] = _EventTimer (evt);
			}
		}
		var repeat = !(once);
		self._timers [eventType].set_timer (time, repeat);
	});},
	get _stop_timers () {return __get__ (this, function (self) {
		for (var eventType of self._timers.py_keys ()) {
			self._timers [eventType].set_timer (0, false);
		}
	});},
	get time () {return __get__ (this, function (self) {
		return self._wnd.performance.now ();
	});},
	get set_timeout () {return __get__ (this, function (self, obj, time) {
		var run = (function __lambda__ () {
			return obj.run ();
		});
		var id = window.setTimeout (run, time);
		return id;
	});},
	get clear_timeout () {return __get__ (this, function (self, id) {
		window.clearTimeout (id);
		return null;
	});},
	get set_interval () {return __get__ (this, function (self, obj, time) {
		var run = (function __lambda__ () {
			return obj.run ();
		});
		var id = window.setInterval (run, time);
		return id;
	});},
	get clear_interval () {return __get__ (this, function (self, id) {
		window.clearInterval (id);
		return null;
	});}
});
export var _EventTimer =  __class__ ('_EventTimer', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.timer = null;
		self.time = 0;
		self.repeat = true;
	});},
	get set_timer () {return __get__ (this, function (self, time, repeat) {
		if (self.timer) {
			self.repeat = false;
			self.clear_timeout ();
		}
		if (time) {
			self.time = time;
			self.repeat = repeat;
			self.set_timeout ();
		}
	});},
	get set_timeout () {return __get__ (this, function (self) {
		var run = (function __lambda__ () {
			return self.run ();
		});
		var timer = window.setTimeout (run, self.time);
		self.timer = timer;
	});},
	get clear_timeout () {return __get__ (this, function (self) {
		window.clearTimeout (self.timer);
		self.timer = null;
	});},
	get run () {return __get__ (this, function (self) {
		env.event.post (self.event);
		if (self.repeat) {
			self.set_timeout ();
		}
	});}
});

//# sourceMappingURL=pyjsdl.time.map