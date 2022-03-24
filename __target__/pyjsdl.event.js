// Transcrypt'ed from Python, 2022-03-23 20:43:12
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as Const from './pyjsdl.constants.js';
import * as key from './pyjsdl.key.js';
import * as env from './pyjsdl.env.js';
var __name__ = 'pyjsdl.event';
export var __docformat__ = 'restructuredtext';
export var Event =  __class__ ('Event', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.eventQueue = (function () {
			var __accu0__ = [];
			for (var i = 0; i < 256; i++) {
				__accu0__.append (null);
			}
			return __accu0__;
		}) ();
		self.eventNum = 0;
		self.eventQueueTmp = (function () {
			var __accu0__ = [];
			for (var i = 0; i < 256; i++) {
				__accu0__.append (null);
			}
			return __accu0__;
		}) ();
		self.eventNumTmp = 0;
		self.queueLock = false;
		self.queueAccess = false;
		self.queue = [];
		self.queueNil = [];
		self.queueTmp = [];
		self.mousePress = dict ({0: false, 1: false, 2: false});
		self.mouseMove = dict ({'x': -(1), 'y': -(1)});
		self.mouseMovePre = dict ({'x': 0, 'y': 0});
		self.mouseMoveRel = dict ({'x': null, 'y': null});
		self.keyPress = dict ([[Const.K_ALT, false], [Const.K_CTRL, false], [Const.K_SHIFT, false]]);
		self.keyMod = dict ([[Const.K_ALT, dict ([[true, Const.KMOD_ALT], [false, 0]])], [Const.K_CTRL, dict ([[true, Const.KMOD_CTRL], [false, 0]])], [Const.K_SHIFT, dict ([[true, Const.KMOD_SHIFT], [false, 0]])]]);
		self.eventName = dict ([[Const.MOUSEMOTION, 'MouseMotion'], [Const.MOUSEBUTTONDOWN, 'MouseButtonDown'], [Const.MOUSEBUTTONUP, 'MouseButtonUp'], [Const.KEYDOWN, 'KeyDown'], [Const.KEYUP, 'KeyUp'], ['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']]);
		self.eventType = [Const.MOUSEMOTION, Const.MOUSEBUTTONDOWN, Const.MOUSEBUTTONUP, Const.KEYDOWN, Const.KEYUP, 'mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup'];
		self.events = set (self.eventType);
		self.eventTypes = dict ([[Const.MOUSEMOTION, set ([Const.MOUSEMOTION, 'mousemove'])], [Const.MOUSEBUTTONDOWN, set ([Const.MOUSEBUTTONDOWN, 'mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll'])], [Const.MOUSEBUTTONUP, set ([Const.MOUSEBUTTONUP, 'mouseup'])], [Const.KEYDOWN, set ([Const.KEYDOWN, 'keydown', 'keypress'])], [Const.KEYUP, set ([Const.KEYUP, 'keyup'])]]);
		self.eventObj = dict ({'mousedown': MouseDownEvent, 'mouseup': MouseUpEvent, 'wheel': MouseWheelEvent, 'mousewheel': MouseWheelEvent, 'DOMMouseScroll': _MouseWheelEvent, 'mousemove': MouseMoveEvent, 'keydown': KeyDownEvent, 'keyup': KeyUpEvent});
		self.modKey = key._modKey;
		self.specialKey = key._specialKey;
		self.modKeyCode = key._modKeyCode;
		self.specialKeyCode = key._specialKeyCode;
		self.touchlistener = null;
		self.keyRepeat = [0, 0];
		self.keyHeld = dict ({});
		self.keyCode = 0;
		self.keyPressCode = dict ({});
		self.Event = UserEvent;
		self._nonimplemented_methods ();
	});},
	get _lock () {return __get__ (this, function (self) {
		self.queueLock = true;
	});},
	get _unlock () {return __get__ (this, function (self) {
		self.queueLock = false;
	});},
	get _updateQueue () {return __get__ (this, function (self, event) {
		self.queueAccess = true;
		if (!(self.queueLock)) {
			if (self.eventNumTmp) {
				self._appendMerge ();
			}
			self._append (event);
		}
		else {
			self._appendTmp (event);
		}
		self.queueAccess = false;
	});},
	get _append () {return __get__ (this, function (self, event) {
		if (self.eventNum < 255) {
			self.eventQueue [self.eventNum] = event;
			self.eventNum++;
		}
	});},
	get _appendTmp () {return __get__ (this, function (self, event) {
		if (self.eventNumTmp < 255) {
			self.eventQueueTmp [self.eventNumTmp] = event;
			self.eventNumTmp++;
		}
	});},
	get _appendMerge () {return __get__ (this, function (self) {
		for (var i = 0; i < self.eventNumTmp; i++) {
			self._append (self.eventQueueTmp [i]);
			self.eventQueueTmp [i] = null;
		}
		self.eventNumTmp = 0;
	});},
	get pump () {return __get__ (this, function (self) {
		if (self.eventNum > 250) {
			self._lock ();
			self._pump ();
			self._unlock ();
		}
		return null;
	});},
	get _pump () {return __get__ (this, function (self) {
		var queue = self.eventQueue.__getslice__ (50, self.eventNum, 1);
		self.eventNum -= 50;
		for (var i = 0; i < self.eventNum; i++) {
			self.eventQueue [i] = queue [i];
		}
	});},
	get py_get () {return __get__ (this, function (self, eventType) {
		if (typeof eventType == 'undefined' || (eventType != null && eventType.hasOwnProperty ("__kwargtrans__"))) {;
			var eventType = null;
		};
		if (!(self.eventNum)) {
			return self.queueNil;
		}
		self._lock ();
		if (!(eventType)) {
			self.queue = self.eventQueue.__getslice__ (0, self.eventNum, 1);
			self.eventNum = 0;
		}
		else {
			self.queue = [];
			if (isinstance (eventType, tuple ([tuple, list]))) {
				for (var i = 0; i < self.eventNum; i++) {
					if (!__in__ (self.eventQueue [i].py_metatype, eventType)) {
						self.queueTmp.append (self.eventQueue [i]);
					}
					else {
						self.queue.append (self.eventQueue [i]);
					}
				}
			}
			else {
				for (var i = 0; i < self.eventNum; i++) {
					if (self.eventQueue [i].py_metatype != eventType) {
						self.queueTmp.append (self.eventQueue [i]);
					}
					else {
						self.queue.append (self.eventQueue [i]);
					}
				}
			}
			if (len (self.queueTmp) == 0) {
				self.eventNum = 0;
			}
			else {
				self.eventNum = len (self.queueTmp);
				for (var i = 0; i < self.eventNum; i++) {
					self.eventQueue [i] = self.queueTmp [i];
				}
				self.queueTmp.__setslice__ (0, null, null, []);
			}
			if (self.eventNum > 250) {
				self._pump ();
			}
		}
		self._unlock ();
		return self.queue;
	});},
	get poll () {return __get__ (this, function (self) {
		self._lock ();
		if (self.eventNum) {
			var evt = self.eventQueue.py_pop (0);
			self.eventNum--;
			self.eventQueue.append (null);
			if (self.eventNum > 250) {
				self._pump ();
			}
		}
		else {
			var evt = self.Event (Const.NOEVENT);
		}
		self._unlock ();
		return evt;
	});},
	get wait () {return __get__ (this, function (self) {
		while (true) {
			if (self.eventNum) {
				self._lock ();
				var evt = self.eventQueue.py_pop (0);
				self.eventNum--;
				self.eventQueue.append (null);
				if (self.eventNum > 250) {
					self._pump ();
				}
				self._unlock ();
				return evt;
			}
			else {
				self._unlock ();
				return null;
			}
		}
	});},
	get peek () {return __get__ (this, function (self, eventType) {
		if (typeof eventType == 'undefined' || (eventType != null && eventType.hasOwnProperty ("__kwargtrans__"))) {;
			var eventType = null;
		};
		if (!(self.eventNum)) {
			return false;
		}
		else if (eventType === null) {
			return true;
		}
		self._lock ();
		var evt = (function () {
			var __accu0__ = [];
			for (var event of self.eventQueue.__getslice__ (0, self.eventNum, 1)) {
				__accu0__.append (event.py_metatype);
			}
			return __accu0__;
		}) ();
		if (self.eventNum > 250) {
			self._pump ();
		}
		self._unlock ();
		if (isinstance (eventType, tuple ([tuple, list]))) {
			for (var evtType of eventType) {
				if (__in__ (evtType, evt)) {
					return true;
				}
			}
		}
		else if (__in__ (eventType, evt)) {
			return true;
		}
		return false;
	});},
	get py_clear () {return __get__ (this, function (self, eventType) {
		if (typeof eventType == 'undefined' || (eventType != null && eventType.hasOwnProperty ("__kwargtrans__"))) {;
			var eventType = null;
		};
		if (!(self.eventNum)) {
			return null;
		}
		self._lock ();
		if (eventType === null) {
			self.eventNum = 0;
		}
		else {
			if (isinstance (eventType, tuple ([tuple, list]))) {
				for (var i = 0; i < self.eventNum; i++) {
					if (!__in__ (self.eventQueue [i].py_metatype, eventType)) {
						self.queueTmp.append (self.eventQueue [i]);
					}
				}
			}
			else {
				for (var i = 0; i < self.eventNum; i++) {
					if (self.eventQueue [i].py_metatype != eventType) {
						self.queueTmp.append (self.eventQueue [i]);
					}
				}
			}
			if (len (self.queueTmp) == 0) {
				self.eventNum = 0;
			}
			else {
				self.eventNum = len (self.queueTmp);
				for (var i = 0; i < self.eventNum; i++) {
					self.eventQueue [i] = self.queueTmp [i];
				}
				self.queueTmp.__setslice__ (0, null, null, []);
			}
			if (self.eventNum > 250) {
				self._pump ();
			}
		}
		self._unlock ();
		return null;
	});},
	get event_name () {return __get__ (this, function (self, eventType) {
		if (__in__ (str (eventType), self.eventName.py_keys ())) {
			return self.eventName [eventType];
		}
		else {
			return null;
		}
	});},
	get set_blocked () {return __get__ (this, function (self, eventType) {
		if (eventType !== null) {
			if (isinstance (eventType, tuple ([tuple, list]))) {
				for (var evtType of eventType) {
					self.events = self.events.difference (self.eventTypes [evtType]);
				}
			}
			else {
				self.events = self.events.difference (self.eventTypes [eventType]);
			}
		}
		else {
			self.events = set (self.eventType);
		}
		return null;
	});},
	get set_allowed () {return __get__ (this, function (self, eventType) {
		if (eventType !== null) {
			if (isinstance (eventType, tuple ([tuple, list]))) {
				for (var evtType of eventType) {
					self.events = self.events.union (self.eventTypes [evtType]);
				}
			}
			else {
				self.events = self.events.union (self.eventTypes [eventType]);
			}
		}
		else {
			self.events.py_clear ();
		}
		return null;
	});},
	get get_blocked () {return __get__ (this, function (self, eventType) {
		if (!__in__ (eventType, self.events)) {
			return true;
		}
		else {
			return false;
		}
	});},
	get post () {return __get__ (this, function (self, event) {
		self._lock ();
		if (__in__ (event.py_metatype, self.events)) {
			self._append (event);
		}
		self._unlock ();
		return null;
	});},
	get _set_key_event () {return __get__ (this, function (self) {
		self.eventObj ['keydown'] = _KeyDownEvent;
		self.eventObj ['keyup'] = _KeyUpEvent;
		self.eventObj ['keypress'] = _KeyPressEvent;
	});},
	get _initiate_touch_listener () {return __get__ (this, function (self, canvas) {
		self.touchlistener = TouchListener (canvas);
		return null;
	});},
	get _register_event () {return __get__ (this, function (self, eventType) {
		if (!__in__ (str (eventType), self.eventTypes.py_keys ())) {
			self.eventTypes [eventType] = eventType;
			self.eventName [eventType] = 'UserEvent';
			self.eventType.append (eventType);
			self.events = self.events.union (set ([eventType]));
		}
	});},
	get _nonimplemented_methods () {return __get__ (this, function (self) {
		self.set_grab = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.get_grab = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return false;
		});
	});}
});
export var UserEvent =  __class__ ('UserEvent', [object], {
	__module__: __name__,
	__slots__: ['type', 'attr'],
	get __init__ () {return __get__ (this, function (self, eventType) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'eventType': var eventType = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		if (len (args) > 0) {
			var attr = args [0];
		}
		else {
			var attr = kwargs;
		}
		self.py_metatype = eventType;
		self.attr = attr;
		env.event._register_event (eventType);
	});},
	get __str__ () {return __get__ (this, function (self) {
		return self.toString ();
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.toString ();
	});},
	get __getattr__ () {return __get__ (this, function (self, attr) {
		if (__in__ (attr, self.attr.py_keys ())) {
			return self.attr [attr];
		}
		else {
			var __except0__ = AttributeError ("'Event' object has no attribute '{}'".format (attr));
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __setattr__ () {return __get__ (this, function (self, attr, value) {
		self.attr [attr] = value;
	});},
	get toString () {return __get__ (this, function (self) {
		var event_name = env.event.event_name (self.py_metatype);
		return '<Event({}-{} {})>'.format (self.py_metatype, event_name, repr (self.attr));
	});}
});
export var JEvent =  __class__ ('JEvent', [object], {
	__module__: __name__,
	__slots__: [],
	get __str__ () {return __get__ (this, function (self) {
		return self.toString ();
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.toString ();
	});},
	get toString () {return __get__ (this, function (self) {
		var event_name = self._eventName [self.py_metatype];
		var attr = dict ({});
		for (var py_name of self.__slots__.__getslice__ (1, -(1), 1)) {
			attr [py_name] = getattr (self, py_name);
		}
		return '<Event({}-{} {})>'.format (self.py_metatype, event_name, repr (attr));
	});},
	get getEvent () {return __get__ (this, function (self) {
		return self.event;
	});}
});
export var MouseEvent =  __class__ ('MouseEvent', [JEvent], {
	__module__: __name__,
	_types: dict ({'mousemove': Const.MOUSEMOTION, 'mousedown': Const.MOUSEBUTTONDOWN, 'mouseup': Const.MOUSEBUTTONUP, 'wheel': Const.MOUSEBUTTONDOWN, 'mousewheel': Const.MOUSEBUTTONDOWN, 'DOMMouseScroll': Const.MOUSEBUTTONDOWN}),
	_eventName: dict ([[Const.MOUSEMOTION, 'MouseMotion'], [Const.MOUSEBUTTONDOWN, 'MouseButtonDown'], [Const.MOUSEBUTTONUP, 'MouseButtonUp']]),
	__slots__: []
});
export var MouseDownEvent =  __class__ ('MouseDownEvent', [MouseEvent], {
	__module__: __name__,
	__slots__: ['type', 'button', 'pos', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		self.button = event.button + 1;
		var r = env.canvas.getBoundingClientRect ();
		self.pos = tuple ([event.clientX - round (r.left), event.clientY - round (r.top)]);
	});}
});
export var MouseUpEvent =  __class__ ('MouseUpEvent', [MouseEvent], {
	__module__: __name__,
	__slots__: ['type', 'button', 'pos', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		self.button = event.button + 1;
		var r = env.canvas.getBoundingClientRect ();
		self.pos = tuple ([event.clientX - round (r.left), event.clientY - round (r.top)]);
	});}
});
export var MouseWheelEvent =  __class__ ('MouseWheelEvent', [MouseEvent], {
	__module__: __name__,
	__slots__: ['type', 'button', 'pos', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		if (event.deltaY < 0) {
			self.button = 4;
		}
		else {
			self.button = 5;
		}
		var r = env.canvas.getBoundingClientRect ();
		self.pos = tuple ([event.clientX - round (r.left), event.clientY - round (r.top)]);
	});}
});
export var _MouseWheelEvent =  __class__ ('_MouseWheelEvent', [MouseEvent], {
	__module__: __name__,
	__slots__: ['type', 'button', 'pos', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		if (event.detail < 0) {
			self.button = 4;
		}
		else {
			self.button = 5;
		}
		var r = env.canvas.getBoundingClientRect ();
		self.pos = tuple ([event.clientX - round (r.left), event.clientY - round (r.top)]);
	});}
});
export var MouseMoveEvent =  __class__ ('MouseMoveEvent', [MouseEvent], {
	__module__: __name__,
	__slots__: ['type', 'buttons', 'pos', 'rel', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		self.buttons = tuple ([bool (event.buttons & 1), bool (event.buttons & 4), bool (event.buttons & 2)]);
		var r = env.canvas.getBoundingClientRect ();
		self.pos = tuple ([event.clientX - round (r.left), event.clientY - round (r.top)]);
		self.rel = tuple ([event.clientX - env.event.mouseMovePre ['x'], event.clientY - env.event.mouseMovePre ['y']]);
	});}
});
export var KeyEvent =  __class__ ('KeyEvent', [JEvent], {
	__module__: __name__,
	_types: dict ({'keydown': Const.KEYDOWN, 'keyup': Const.KEYUP, 'keypress': Const.KEYDOWN}),
	_eventName: dict ([[Const.KEYDOWN, 'KeyDown'], [Const.KEYUP, 'KeyUp']]),
	_code: key._code,
	_specialKey: key._specialKey,
	_specialKeyCode: key._specialKeyCode,
	__slots__: []
});
export var KeyDownEvent =  __class__ ('KeyDownEvent', [KeyEvent], {
	__module__: __name__,
	__slots__: ['type', 'key', 'mod', 'unicode', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		if (__in__ (event.key, self._specialKey)) {
			self.key = self._specialKey [event.key];
			if (__in__ (self.key, tuple ([9, 13]))) {
				self.unicode = chr (self.key);
			}
			else {
				self.unicode = '';
			}
		}
		else {
			if (__in__ (event.code, self._code)) {
				self.key = self._code [event.code];
			}
			else {
				self.key = event.code;
			}
			self.unicode = event.key;
		}
		self.mod = (event.altKey * Const.KMOD_ALT | event.ctrlKey * Const.KMOD_CTRL) | event.shiftKey * Const.KMOD_SHIFT;
	});}
});
export var KeyUpEvent =  __class__ ('KeyUpEvent', [KeyEvent], {
	__module__: __name__,
	__slots__: ['type', 'key', 'mod', 'unicode', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		if (__in__ (event.key, self._specialKey)) {
			self.key = self._specialKey [event.key];
			if (__in__ (self.key, tuple ([9, 13]))) {
				self.unicode = chr (self.key);
			}
			else {
				self.unicode = '';
			}
		}
		else {
			if (__in__ (event.code, self._code)) {
				self.key = self._code [event.code];
			}
			else {
				self.key = event.code;
			}
			self.unicode = event.key;
		}
		self.mod = (event.altKey * Const.KMOD_ALT | event.ctrlKey * Const.KMOD_CTRL) | event.shiftKey * Const.KMOD_SHIFT;
	});}
});
export var _KeyDownEvent =  __class__ ('_KeyDownEvent', [KeyEvent], {
	__module__: __name__,
	__slots__: ['type', 'key', 'mod', 'unicode', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		var keycode = event.which || event.keyCode || 0;
		self.key = self._specialKeyCode [keycode];
		if (__in__ (self.key, tuple ([9, 13]))) {
			self.unicode = chr (self.key);
		}
		else {
			self.unicode = '';
		}
		self.mod = (event.altKey * Const.KMOD_ALT | event.ctrlKey * Const.KMOD_CTRL) | event.shiftKey * Const.KMOD_SHIFT;
	});}
});
export var _KeyUpEvent =  __class__ ('_KeyUpEvent', [KeyEvent], {
	__module__: __name__,
	__slots__: ['type', 'key', 'mod', 'unicode', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		var keycode = event.which || event.keyCode || 0;
		self.py_metatype = self._types [event.type];
		if (__in__ (keycode, self._specialKeyCode)) {
			self.key = self._specialKeyCode [keycode];
			if (__in__ (keycode, tuple ([9, 13]))) {
				self.unicode = chr (keycode);
			}
			else {
				self.unicode = '';
			}
		}
		else if (__in__ (keycode, env.event.keyPressCode)) {
			var _keycode = env.event.keyPressCode [keycode];
			self.key = _keycode;
			if ((65 <= _keycode && _keycode <= 90)) {
				self.unicode = chr (_keycode + 32);
			}
			else {
				self.unicode = chr (_keycode);
			}
		}
		else if ((65 <= keycode && keycode <= 90)) {
			self.key = keycode + 32;
			self.unicode = chr (keycode + 32);
		}
		else {
			self.key = keycode;
			self.unicode = chr (keycode);
		}
		self.mod = (event.altKey * Const.KMOD_ALT | event.ctrlKey * Const.KMOD_CTRL) | event.shiftKey * Const.KMOD_SHIFT;
	});}
});
export var _KeyPressEvent =  __class__ ('_KeyPressEvent', [KeyEvent], {
	__module__: __name__,
	__slots__: ['type', 'key', 'mod', 'unicode', 'event'],
	get __init__ () {return __get__ (this, function (self, event) {
		self.event = event;
		self.py_metatype = self._types [event.type];
		var keycode = event.which || event.keyCode || 0;
		self.key = keycode;
		if ((65 <= keycode && keycode <= 90)) {
			self.unicode = chr (keycode + 32);
		}
		else {
			self.unicode = chr (keycode);
		}
		self.mod = (event.altKey * Const.KMOD_ALT | event.ctrlKey * Const.KMOD_CTRL) | event.shiftKey * Const.KMOD_SHIFT;
	});}
});
export var TouchListener =  __class__ ('TouchListener', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, canvas) {
		_canvas = canvas;
		self.element = canvas.getElement ();
		self.element.addEventListener ('touchstart', _touch_detect);
		self.active = false;
		self.callback = [];
	});},
	get activate () {return __get__ (this, function (self) {
		self.element.removeEventListener ('touchstart', _touch_detect);
		self.element.addEventListener ('touchstart', _touch_start);
		self.element.addEventListener ('touchend', _touch_end);
		self.element.addEventListener ('touchmove', _touch_move);
		self.element.addEventListener ('touchcancel', _touch_cancel);
		self.active = true;
	});},
	get add_callback () {return __get__ (this, function (self, callback) {
		self.callback.append (callback);
		return null;
	});},
	get is_active () {return __get__ (this, function (self) {
		return self.active;
	});}
});
export var _canvas = null;
export var _touch_detect = function (event) {
	_canvas.onTouchInitiate (event);
};
export var _touch_start = function (event) {
	_canvas.onTouchStart (event);
};
export var _touch_end = function (event) {
	_canvas.onTouchEnd (event);
};
export var _touch_move = function (event) {
	_canvas.onTouchMove (event);
};
export var _touch_cancel = function (event) {
	_canvas.onTouchCancel (event);
};

//# sourceMappingURL=pyjsdl.event.map