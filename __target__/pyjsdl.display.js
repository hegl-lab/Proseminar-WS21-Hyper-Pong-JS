// Transcrypt'ed from Python, 2022-03-23 20:43:12
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Event, RootPanel, TextArea, TextBox, VerticalPanel, loadImages, requestAnimationFrameInit} from './pyjsdl.pyjsobj.js';
import * as env from './pyjsdl.env.js';
import {Time} from './pyjsdl.time.js';
import {Rect} from './pyjsdl.rect.js';
import {Surface} from './pyjsdl.surface.js';
var __name__ = 'pyjsdl.display';
export var __docformat__ = 'restructuredtext';
export var _canvas = null;
export var _ctx = null;
export var _img = null;
export var _wnd = null;
export var Canvas =  __class__ ('Canvas', [Surface], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, size, buffered) {
		Surface.__init__ (self, size);
		if (isinstance (buffered, bool)) {
			self._bufferedimage = buffered;
		}
		else {
			self._bufferedimage = true;
		}
		try {
			if (self.impl.canvasContext) {
				self._isCanvas = true;
			}
		}
		catch (__except0__) {
			self._isCanvas = false;
			self._bufferedimage = false;
		}
		if (self._bufferedimage) {
			self.surface = Surface (size);
		}
		else {
			self.surface = self;
		}
		self.images = dict ({});
		self.image_list = [];
		self.callback = null;
		self.time = Time ();
		self.event = env.event;
		self.addMouseListener (self);
		self.addKeyEventListener (self);
		self.sinkEvents (((((((Event.ONMOUSEDOWN | Event.ONMOUSEUP) | Event.ONMOUSEMOVE) | Event.ONMOUSEOUT) | Event.ONMOUSEWHEEL) | Event.ONKEYDOWN) | Event.ONKEYPRESS) | Event.ONKEYUP);
		self.onContextMenu = null;
		self.preventContextMenu ();
		self.evt = self.event.eventObj;
		self.modKey = self.event.modKey;
		self.specialKey = self.event.specialKey;
		self.modKeyCode = self.event.modKeyCode;
		self.specialKeyCode = self.event.specialKeyCode;
		self.keyRepeat = self.event.keyRepeat;
		self.keyHeld = self.event.keyHeld;
		self.mouse_entered = true;
		self.event._initiate_touch_listener (self);
		self._touch_callback = self.event.touchlistener.callback;
		self._rect_list = [];
		self._rect_len = 0;
		self._rect_num = 0;
		self._framerate = 0;
		self._frametime = 0;
		self._rendertime = self.time.time ();
		self._pause = false;
		self._canvas_init ();
		self.run = null;
		self.initialized = false;
	});},
	get _canvas_init () {return __get__ (this, function (self) {
		_canvas = self;
		_ctx = self.impl.canvasContext;
		_img = self.surface.canvas;
		_wnd = requestAnimationFrameInit ();
	});},
	get onMouseMove () {return __get__ (this, function (self, event) {
		if (__in__ (event.type, self.event.events)) {
			if (!(self.mouse_entered)) {
				self.event.mouseMovePre ['x'] = self.event.mouseMove ['x'];
				self.event.mouseMovePre ['y'] = self.event.mouseMove ['y'];
			}
			else {
				self.event.mouseMovePre ['x'] = event.clientX;
				self.event.mouseMovePre ['y'] = event.clientY;
				self.mouse_entered = false;
			}
			self.event._updateQueue (self.evt [event.type] (event));
		}
		self.event.mouseMove ['x'] = event.clientX;
		self.event.mouseMove ['y'] = event.clientY;
	});},
	get onMouseDown () {return __get__ (this, function (self, event) {
		if (__in__ (event.type, self.event.events)) {
			self.event._updateQueue (self.evt [event.type] (event));
		}
		self.event.mousePress [event.button] = true;
	});},
	get onMouseUp () {return __get__ (this, function (self, event) {
		if (__in__ (event.type, self.event.events)) {
			self.event._updateQueue (self.evt [event.type] (event));
		}
		self.event.mousePress [event.button] = false;
	});},
	get onMouseEnter () {return __get__ (this, function (self, sender) {
		self.mouse_entered = true;
	});},
	get onMouseLeave () {return __get__ (this, function (self, event) {
		self.event.mousePress [0] = false;
		self.event.mousePress [1] = false;
		self.event.mousePress [2] = false;
		self.event.mouseMove ['x'] = -(1);
		self.event.mouseMove ['y'] = -(1);
		self.event.mouseMoveRel ['x'] = null;
		self.event.mouseMoveRel ['y'] = null;
		for (var keycode of self.modKeyCode) {
			if (self.event.keyPress [keycode]) {
				self.event.keyPress [keycode] = false;
			}
		}
	});},
	get onMouseWheel () {return __get__ (this, function (self, event) {
		if (__in__ (event.type, self.event.events)) {
			self.event._updateQueue (self.evt [event.type] (event));
		}
		event.preventDefault ();
	});},
	get onKeyEvent () {return __get__ (this, function (self, event) {
		self.removeKeyEventListener (self);
		if (event.key && event.code) {
			self.addKeyboardListener (self);
			self.onKeyDown (event);
		}
		else {
			self.event._set_key_event ();
			self._addKeyboardListener (self);
			self._onKeyDown (event);
		}
	});},
	get onKeyDown () {return __get__ (this, function (self, event) {
		if (__in__ (event.key, self.modKey)) {
			self.event.keyPress [self.modKey [event.key]] = true;
		}
		if (__in__ (event.type, self.event.events)) {
			if (!(self._isPaused (event.key))) {
				self.event._updateQueue (self.evt [event.type] (event));
			}
		}
		event.preventDefault ();
	});},
	get onKeyUp () {return __get__ (this, function (self, event) {
		if (__in__ (event.key, self.modKey)) {
			self.event.keyPress [self.modKey [event.key]] = false;
		}
		if (__in__ (event.key, self.keyHeld)) {
			self.keyHeld [event.key] ['pressed'] = false;
		}
		if (__in__ (event.type, self.event.events)) {
			self.event._updateQueue (self.evt [event.type] (event));
		}
	});},
	get _onKeyDown () {return __get__ (this, function (self, event) {
		var keycode = event.which || event.keyCode || 0;
		if (__in__ (keycode, self.modKeyCode)) {
			self.event.keyPress [keycode] = true;
		}
		if (__in__ (event.type, self.event.events)) {
			if (!(self._isPaused (event.keyCode))) {
				self.event.keyCode = keycode;
				if (__in__ (keycode, self.specialKeyCode)) {
					self.event._updateQueue (self.evt [event.type] (event));
					event.preventDefault ();
				}
			}
			else {
				event.preventDefault ();
			}
		}
	});},
	get _onKeyUp () {return __get__ (this, function (self, event) {
		var keycode = event.which || event.keyCode || 0;
		if (__in__ (keycode, self.modKeyCode)) {
			self.event.keyPress [keycode] = false;
		}
		if (__in__ (keycode, self.keyHeld)) {
			self.keyHeld [keycode] ['pressed'] = false;
		}
		if (__in__ (event.type, self.event.events)) {
			self.event._updateQueue (self.evt [event.type] (event));
		}
	});},
	get _onKeyPress () {return __get__ (this, function (self, event) {
		if (__in__ (event.type, self.event.events)) {
			var keycode = event.which || event.keyCode || 0;
			self.event.keyPressCode [self.event.keyCode] = keycode;
			self.event._updateQueue (self.evt [event.type] (event));
		}
		event.preventDefault ();
	});},
	get _isPaused () {return __get__ (this, function (self, keycode) {
		if (!__in__ (keycode, self.keyHeld)) {
			self.keyHeld [keycode] = dict ({'pressed': false, 'delay': false, 'time': 0});
		}
		var key = self.keyHeld [keycode];
		if (!(key ['pressed'])) {
			key ['pressed'] = true;
			var paused = false;
			if (self.keyRepeat [0]) {
				key ['delay'] = true;
				key ['time'] = self.time.time ();
			}
		}
		else {
			var paused = true;
			if (self.keyRepeat [0]) {
				var time = self.time.time ();
				if (key ['delay']) {
					if (time - key ['time'] > self.keyRepeat [0]) {
						key ['time'] = time;
						key ['delay'] = false;
						var paused = false;
					}
				}
				else if (time - key ['time'] > self.keyRepeat [1]) {
					key ['time'] = time;
					var paused = false;
				}
			}
		}
		return paused;
	});},
	get onTouchInitiate () {return __get__ (this, function (self, event) {
		self.event.touchlistener.activate ();
		for (var callback of self._touch_callback) {
			if (hasattr (callback, 'onTouchInitiate')) {
				callback.onTouchInitiate (event);
			}
		}
		self.onTouchStart (event);
	});},
	get onTouchStart () {return __get__ (this, function (self, event) {
		for (var callback of self._touch_callback) {
			callback.onTouchStart (event);
		}
	});},
	get onTouchEnd () {return __get__ (this, function (self, event) {
		for (var callback of self._touch_callback) {
			callback.onTouchEnd (event);
		}
	});},
	get onTouchMove () {return __get__ (this, function (self, event) {
		for (var callback of self._touch_callback) {
			callback.onTouchMove (event);
		}
	});},
	get onTouchCancel () {return __get__ (this, function (self, event) {
		for (var callback of self._touch_callback) {
			callback.onTouchCancel (event);
		}
	});},
	get preventContextMenu () {return __get__ (this, function (self, setting) {
		if (typeof setting == 'undefined' || (setting != null && setting.hasOwnProperty ("__kwargtrans__"))) {;
			var setting = true;
		};
		if (setting) {
			if (self.onContextMenu) {
				return ;
			}
			var element = self.getElement ();
			self.onContextMenu = (function __lambda__ (event) {
				return event.preventDefault ();
			});
			element.addEventListener ('contextmenu', self.onContextMenu);
		}
		else {
			if (!(self.onContextMenu)) {
				return ;
			}
			var element = self.getElement ();
			element.removeEventListener ('contextmenu', self.onContextMenu);
			self.onContextMenu = null;
		}
	});},
	get resize () {return __get__ (this, function (self, width, height) {
		Surface.resize (self, width, height);
		if (self._bufferedimage) {
			self.surface.resize (width, height);
		}
		self.surface._display._surface_rect = self.surface.get_rect ();
	});},
	get set_callback () {return __get__ (this, function (self, cb) {
		if (!(hasattr (cb, 'run'))) {
			self.callback = Callback (cb);
		}
		else {
			self.callback = cb;
		}
	});},
	get load_images () {return __get__ (this, function (self, images) {
		if (len (images) > 0) {
			var image_list = [];
			for (var image of images) {
				if (isinstance (image, str)) {
					image_list.append (image);
					self.image_list.append (image);
				}
				else {
					var py_name = image [0];
					if (isinstance (image [1], str)) {
						var data = image [1];
					}
					else {
						var __except0__ = py_TypeError ('provide image in base64-encoded data');
						__except0__.__cause__ = null;
						throw __except0__;
					}
					if (!(data.startswith ('data:'))) {
						var ext = py_name.strip ().py_split ('.').reverse () [0];
						var data = 'data:{};base64,{}'.format (ext, data);
					}
					image_list.append (data);
					self.image_list.append (py_name);
				}
			}
			loadImages (image_list, self);
		}
		else {
			self.start ();
		}
	});},
	get onImagesLoaded () {return __get__ (this, function (self, images) {
		for (var [i, image] of enumerate (self.image_list)) {
			self.images [image] = images [i];
		}
		self.start ();
	});},
	get start () {return __get__ (this, function (self) {
		if (!(self.initialized)) {
			self.initialized = true;
			_wnd.requestAnimationFrame (run);
			self.run = self._run;
		}
	});},
	get stop () {return __get__ (this, function (self) {
		run = (function __lambda__ (ts) {
			return null;
		});
		self.run = (function __lambda__ () {
			return null;
		});
	});},
	get _get_rect () {return __get__ (this, function (self) {
		if (self._rect_num < self._rect_len) {
			return self._rect_list [self._rect_num];
		}
		else {
			self._rect_list.append (Rect (0, 0, 0, 0));
			self._rect_len++;
			return self._rect_list [self._rect_num];
		}
	});},
	get py_update () {return __get__ (this, function (self, timestamp) {
		if (!(self._framerate)) {
			self._frametime = timestamp - self._rendertime;
			self.run ();
		}
		else {
			self._frametime += timestamp - self._rendertime;
			if (self._frametime > self._framerate) {
				self.run ();
				self._frametime = 0;
			}
		}
		self._rendertime = timestamp;
	});},
	get render () {return __get__ (this, function (self) {
		while (self._rect_num) {
			var rect = self._rect_list [self._rect_num - 1];
			var __left0__ = tuple ([rect.x, rect.y, rect.width, rect.height]);
			var x = __left0__ [0];
			var y = __left0__ [1];
			var width = __left0__ [2];
			var height = __left0__ [3];
			_ctx.drawImage (_img, x, y, width, height, x, y, width, height);
			self._rect_num--;
		}
	});},
	get _run () {return __get__ (this, function (self) {
		self.callback.run ();
	});}
});
export var run = function (timestamp) {
	_wnd.requestAnimationFrame (run);
	_canvas.py_update (timestamp);
	_canvas.render ();
};
export var Callback =  __class__ ('Callback', [object], {
	__module__: __name__,
	__slots__: ['run'],
	get __init__ () {return __get__ (this, function (self, cb) {
		self.run = cb;
	});}
});
export var Display =  __class__ ('Display', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._initialized = false;
		self.init ();
	});},
	get init () {return __get__ (this, function (self) {
		if (!(self._initialized)) {
			self.id = '';
			self.canvas = null;
			self.icon = null;
			self._image_list = [];
			self._nonimplemented_methods ();
			self._initialized = true;
		}
	});},
	get set_mode () {return __get__ (this, function (self, size, buffered) {
		if (typeof buffered == 'undefined' || (buffered != null && buffered.hasOwnProperty ("__kwargtrans__"))) {;
			var buffered = true;
		};
		var args = tuple ([].slice.apply (arguments).slice (3));
		self.canvas = Canvas (size, buffered);
		env.set_env ('canvas', self.canvas);
		self.frame = document.body;
		env.set_env ('frame', self.frame);
		var panel = RootPanel ();
		panel.add (self.canvas);
		self.panel = panel;
		self.vpanel = null;
		self.textbox = null;
		self.textarea = null;
		self.Textbox = Textbox;
		self.Textarea = Textarea;
		self.surface = self.canvas.surface;
		self.surface._display = self;
		self._surface_rect = self.surface.get_rect ();
		if (!(self.canvas._bufferedimage)) {
			self.flip = (function __lambda__ () {
				return null;
			});
			self.py_update = (function __lambda__ () {
				var arg = tuple ([].slice.apply (arguments).slice (0));
				return null;
			});
		}
		return self.surface;
	});},
	get setup () {return __get__ (this, function (self, callback, images) {
		if (typeof images == 'undefined' || (images != null && images.hasOwnProperty ("__kwargtrans__"))) {;
			var images = null;
		};
		self.canvas.set_callback (callback);
		var image_list = [];
		if (len (self._image_list) > 0) {
			image_list.extend (self._image_list);
			self._image_list.__setslice__ (0, null, null, []);
		}
		if (len (images) > 0) {
			image_list.extend (images);
		}
		self.canvas.load_images (image_list);
	});},
	get set_callback () {return __get__ (this, function (self, callback) {
		if (self.canvas.initialized) {
			self.canvas.set_callback (callback);
		}
		else {
			self.setup (callback);
		}
	});},
	get setup_images () {return __get__ (this, function (self, images) {
		if (isinstance (images, str)) {
			var images = [images];
		}
		self._image_list.extend (images);
	});},
	get textbox_init () {return __get__ (this, function (self) {
		if (!(self.textbox)) {
			self.textbox = Textbox ();
			self.textarea = Textarea ();
		}
	});},
	get is_canvas () {return __get__ (this, function (self) {
		return self.canvas._isCanvas;
	});},
	get get_surface () {return __get__ (this, function (self) {
		return self.surface;
	});},
	get get_canvas () {return __get__ (this, function (self) {
		return self.canvas;
	});},
	get set_panel () {return __get__ (this, function (self, id) {
		RootPanel._set_root_panel (id);
		return null;
	});},
	get get_panel () {return __get__ (this, function (self) {
		return self.panel;
	});},
	get get_vpanel () {return __get__ (this, function (self) {
		if (!(self.vpanel)) {
			self.vpanel = VerticalPanel ();
			RootPanel ().add (self.vpanel);
		}
		return self.vpanel;
	});},
	get getAbsoluteLeft () {return __get__ (this, function (self) {
		return self.canvas.getAbsoluteLeft ();
	});},
	get getAbsoluteTop () {return __get__ (this, function (self) {
		return self.canvas.getAbsoluteTop ();
	});},
	get getScrollLeft () {return __get__ (this, function (self) {
		return self.frame.scrollLeft;
	});},
	get getScrollTop () {return __get__ (this, function (self) {
		return self.frame.scrollTop;
	});},
	get quit () {return __get__ (this, function (self) {
		self._initialized = false;
		return null;
	});},
	get get_init () {return __get__ (this, function (self) {
		return self._initialized;
	});},
	get get_active () {return __get__ (this, function (self) {
		if (hasattr (self, 'canvas')) {
			return true;
		}
		else {
			return false;
		}
	});},
	get set_caption () {return __get__ (this, function (self, text) {
		self.id = text;
		if (self.canvas) {
			self.canvas.setID (self.id);
		}
		return null;
	});},
	get get_caption () {return __get__ (this, function (self) {
		if (self.canvas) {
			return self.canvas.getID ();
		}
		else {
			return self.id;
		}
	});},
	get _nonimplemented_methods () {return __get__ (this, function (self) {
		self.set_icon = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
	});},
	get flip () {return __get__ (this, function (self) {
		self.canvas.impl.canvasContext.drawImage (self.surface.canvas, 0, 0);
		return null;
	});},
	get py_update () {return __get__ (this, function (self, rect_list) {
		if (typeof rect_list == 'undefined' || (rect_list != null && rect_list.hasOwnProperty ("__kwargtrans__"))) {;
			var rect_list = null;
		};
		if (hasattr (rect_list, 'append')) {
			_update (self.canvas, rect_list);
		}
		else if (rect_list) {
			_update (self.canvas, [rect_list]);
		}
		else {
			self.flip ();
		}
		return null;
	});}
});
export var _update = function (canvas, rect_list) {
	for (var rect of rect_list) {
		if (hasattr (rect, 'width')) {
			if (rect.width > 0 && rect.height > 0) {
				var repaint_rect = canvas._get_rect ();
				repaint_rect.x = rect.x;
				repaint_rect.y = rect.y;
				repaint_rect.width = rect.width;
				repaint_rect.height = rect.height;
				canvas._rect_num++;
			}
		}
		else if (rect) {
			if (rect [2] > 0 && rect [3] > 0) {
				var repaint_rect = canvas._get_rect ();
				repaint_rect.x = rect [0];
				repaint_rect.y = rect [1];
				repaint_rect.width = rect [2];
				repaint_rect.height = rect [3];
				canvas._rect_num++;
			}
		}
	}
};
export var Textbox =  __class__ ('Textbox', [TextBox], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, size, panel) {
		if (typeof size == 'undefined' || (size != null && size.hasOwnProperty ("__kwargtrans__"))) {;
			var size = null;
		};
		if (typeof panel == 'undefined' || (panel != null && panel.hasOwnProperty ("__kwargtrans__"))) {;
			var panel = null;
		};
		TextBox.__init__ (self);
		if (size === null) {
			var __left0__ = tuple (['100%', '20px']);
			self.width = __left0__ [0];
			self.height = __left0__ [1];
			self.setSize (self.width, self.height);
		}
		else {
			var __left0__ = tuple ([int (size [0]), int (size [1])]);
			self.width = __left0__ [0];
			self.height = __left0__ [1];
			self.setSize (str (self.width) + 'px', str (self.height) + 'px');
		}
		self.setVisible (false);
		if (panel) {
			panel.add (self);
		}
		else if (env.canvas.surface._display.vpanel !== null) {
			env.canvas.surface._display.vpanel.add (self);
		}
		else {
			var panel = VerticalPanel ();
			env.canvas.surface._display.vpanel = panel;
			panel._element.style.width = str (env.canvas.surface.width - 2) + 'px';
			RootPanel ().add (panel);
			panel.add (self);
		}
	});},
	get resize () {return __get__ (this, function (self, width, height) {
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = null;
		};
		if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
			var height = null;
		};
		if (!(width || height)) {
			var __left0__ = tuple (['100%', '20px']);
			self.width = __left0__ [0];
			self.height = __left0__ [1];
			self.setSize (self.width, self.height);
		}
		else {
			if (width) {
				self.width = int (width);
			}
			if (height) {
				self.height = int (height);
			}
			self.setSize (str (self.width) + 'px', str (self.height) + 'px');
		}
	});},
	get toggle () {return __get__ (this, function (self, visible) {
		if (typeof visible == 'undefined' || (visible != null && visible.hasOwnProperty ("__kwargtrans__"))) {;
			var visible = null;
		};
		if (visible) {
			self.setVisible (visible);
		}
		else {
			self.setVisible (!(self.getVisible ()));
		}
	});}
});
export var Textarea =  __class__ ('Textarea', [TextArea], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, size, panel) {
		if (typeof size == 'undefined' || (size != null && size.hasOwnProperty ("__kwargtrans__"))) {;
			var size = null;
		};
		if (typeof panel == 'undefined' || (panel != null && panel.hasOwnProperty ("__kwargtrans__"))) {;
			var panel = null;
		};
		TextArea.__init__ (self);
		if (size === null) {
			var __left0__ = tuple (['100%', str (int (env.canvas.surface.height / 2)) + 'px']);
			self.width = __left0__ [0];
			self.height = __left0__ [1];
			self.setSize (self.width, self.height);
		}
		else {
			var __left0__ = tuple ([int (size [0]), int (size [1])]);
			self.width = __left0__ [0];
			self.height = __left0__ [1];
			self.setSize (str (self.width) + 'px', str (self.height) + 'px');
		}
		self.setVisible (false);
		if (panel) {
			panel.add (self);
		}
		else if (env.canvas.surface._display.vpanel !== null) {
			env.canvas.surface._display.vpanel.add (self);
		}
		else {
			var panel = VerticalPanel ();
			env.canvas.surface._display.vpanel = panel;
			panel._element.style.width = str (env.canvas.surface.width - 2) + 'px';
			RootPanel ().add (panel);
			panel.add (self);
		}
	});},
	get resize () {return __get__ (this, function (self, width, height) {
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = null;
		};
		if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
			var height = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'width': var width = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(width || height)) {
			var __left0__ = tuple (['100%', str (int (env.canvas.surface.height / 2)) + 'px']);
			self.width = __left0__ [0];
			self.height = __left0__ [1];
			self.setSize (self.width, self.height);
		}
		else {
			if (width) {
				self.width = int (width);
			}
			if (height) {
				self.height = int (height);
			}
			self.setSize (str (self.width) + 'px', str (self.height) + 'px');
		}
	});},
	get toggle () {return __get__ (this, function (self, visible) {
		if (typeof visible == 'undefined' || (visible != null && visible.hasOwnProperty ("__kwargtrans__"))) {;
			var visible = null;
		};
		if (visible) {
			self.setVisible (visible);
		}
		else {
			self.setVisible (!(self.getVisible ()));
		}
	});}
});

//# sourceMappingURL=pyjsdl.display.map