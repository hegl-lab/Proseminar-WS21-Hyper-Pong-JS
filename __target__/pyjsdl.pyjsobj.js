// Transcrypt'ed from Python, 2022-03-23 20:43:07
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'pyjsdl.pyjsobj';
export var Element =  __class__ ('Element', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, element) {
		if (typeof element == 'undefined' || (element != null && element.hasOwnProperty ("__kwargtrans__"))) {;
			var element = null;
		};
		if (element !== null) {
			self._element = element;
		}
		else {
			self._element = null;
		}
	});},
	get _get_style () {return __get__ (this, function (self, attr) {
		return self._element.style;
	});},
	get _set_style () {return __get__ (this, function (self, attr, value) {
		self._element.style [attr] = value;
	});},
	get style () {return __get__ (this, function (self, attr) {
		// pass;
	});},
	get getElement () {return __get__ (this, function (self) {
		return self._element;
	});},
	get setElement () {return __get__ (this, function (self, element) {
		self._element = element;
	});},
	get setID () {return __get__ (this, function (self, id) {
		self._element.id = id;
	});},
	get getID () {return __get__ (this, function (self) {
		return self._element.id;
	});},
	get setSize () {return __get__ (this, function (self, width, height) {
		self.setWidth (width);
		self.setHeight (height);
	});},
	get setWidth () {return __get__ (this, function (self, width) {
		if (isinstance (width, str)) {
			self._element.style.width = width;
		}
		else {
			self._element.style.width = str (int (width)) + 'px';
		}
	});},
	get setHeight () {return __get__ (this, function (self, height) {
		if (isinstance (height, str)) {
			self._element.style ['min-height'] = height;
		}
		else {
			self._element.style ['min-height'] = str (int (height)) + 'px';
		}
	});},
	get getAttributes () {return __get__ (this, function (self) {
		return self._element.attributes;
	});},
	get getClientHeight () {return __get__ (this, function (self) {
		return self._element.clientHeight;
	});},
	get getClientLeft () {return __get__ (this, function (self) {
		return self._element.clientLeft;
	});},
	get getClientTop () {return __get__ (this, function (self) {
		return self._element.clientTop;
	});},
	get getClientWidth () {return __get__ (this, function (self) {
		return self._element.clientWidth;
	});},
	get getScrollHeight () {return __get__ (this, function (self) {
		return self._element.scrollHeight;
	});},
	get getScrollLeft () {return __get__ (this, function (self) {
		return self._element.scrollLeft;
	});},
	get getScrollTop () {return __get__ (this, function (self) {
		return self._element.scrollTop;
	});},
	get getScrollWidth () {return __get__ (this, function (self) {
		return self._element.scrollWidth;
	});},
	get addEventListener () {return __get__ (this, function (self, py_metatype, listener, useCapture) {
		self._element.addEventListener (py_metatype, listener, useCapture);
	});},
	get removeEventListener () {return __get__ (this, function (self, py_metatype, listener, useCapture) {
		self._element.removeEventListener (py_metatype, listener, useCapture);
	});},
	get getMouseWheelEventType () {return __get__ (this, function (self) {
		if (self._element !== null) {
			var element = self._element;
		}
		else {
			var element = document.createElement ('div');
		}
		if (hasattr (element, 'onwheel')) {
			var event_type = 'wheel';
		}
		else if (hasattr (element, 'onmousewheel')) {
			var event_type = 'mousewheel';
		}
		else {
			var event_type = 'DOMMouseScroll';
		}
		return event_type;
	});},
	get getAttribute () {return __get__ (this, function (self) {
		return self._element.getAttribute ();
	});},
	get setAttribute () {return __get__ (this, function (self, py_name, value) {
		self._element.setAttribute (py_name, value);
	});},
	get getBoundingClientRect () {return __get__ (this, function (self) {
		return self._element.getBoundingClientRect ();
	});},
	get appendChild () {return __get__ (this, function (self, el) {
		self._element.appendChild (el);
	});},
	get removeChild () {return __get__ (this, function (self, el) {
		self._element.removeChild (el);
	});},
	get getStyle () {return __get__ (this, function (self) {
		return self._element.style;
	});},
	get getTitle () {return __get__ (this, function (self) {
		return self._element.title;
	});},
	get setTitle () {return __get__ (this, function (self, text) {
		self._element.title = text;
	});},
	get focus () {return __get__ (this, function (self) {
		self._element.focus ();
	});},
	get blur () {return __get__ (this, function (self) {
		self._element.blur ();
	});},
	get click () {return __get__ (this, function (self) {
		self._element.click ();
	});}
});
Object.defineProperty (Element, 'style', property.call (Element, Element._get_style, Element._set_style));;
export var FocusElement =  __class__ ('FocusElement', [Element], {
	__module__: __name__,
	_event_type: null,
	get __init__ () {return __get__ (this, function (self) {
		Element.__init__ (self);
		self._sink_events = null;
	});},
	get addMouseListener () {return __get__ (this, function (self, obj) {
		var element = obj.getElement ();
		element.addEventListener ('mousemove', self.onMouseMove);
		element.addEventListener ('mousedown', self.onMouseDown);
		element.addEventListener ('mouseup', self.onMouseUp);
		element.addEventListener ('mouseenter', self.onMouseEnter);
		element.addEventListener ('mouseleave', self.onMouseLeave);
		if (hasattr (element, 'onwheel')) {
			element.addEventListener ('wheel', self.onMouseWheel);
		}
		else if (hasattr (element, 'onmousewheel')) {
			element.addEventListener ('mousewheel', self.onMouseWheel);
		}
		else {
			element.addEventListener ('DOMMouseScroll', self.onMouseWheel);
		}
	});},
	get addKeyboardListener () {return __get__ (this, function (self, obj) {
		var element = obj.getElement ();
		element.setAttribute ('tabindex', '0');
		element.addEventListener ('keydown', self.onKeyDown);
		element.addEventListener ('keyup', self.onKeyUp);
		element.addEventListener ('keypress', self.onKeyPress);
	});},
	get _addKeyboardListener () {return __get__ (this, function (self, obj) {
		var element = obj.getElement ();
		element.setAttribute ('tabindex', '0');
		element.addEventListener ('keydown', self._onKeyDown);
		element.addEventListener ('keyup', self._onKeyUp);
		element.addEventListener ('keypress', self._onKeyPress);
	});},
	get addKeyEventListener () {return __get__ (this, function (self, obj) {
		var element = obj.getElement ();
		element.setAttribute ('tabindex', '0');
		var listener = (function __lambda__ (event) {
			return self.onKeyEvent (event);
		});
		_listener [self.__name__] = listener;
		element.addEventListener ('keydown', listener);
	});},
	get removeKeyEventListener () {return __get__ (this, function (self, obj) {
		var element = obj.getElement ();
		var listener = _listener [self.__name__];
		element.removeEventListener ('keydown', listener);
		delete _listener [self.__name__];
	});},
	get addFocusListener () {return __get__ (this, function (self, obj) {
		var element = obj.getElement ();
		element.setAttribute ('tabindex', '0');
		element.addEventListener ('focus', self.onFocus);
		element.addEventListener ('blur', self.onBlur);
	});},
	get sinkEvents () {return __get__ (this, function (self, events) {
		self._sink_events = events;
	});},
	get onMouseMove () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onMouseDown () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onMouseUp () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onMouseEnter () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onMouseLeave () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onMouseWheel () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onKeyDown () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onKeyUp () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onKeyPress () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onTouchInitiate () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onTouchStart () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onTouchEnd () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onTouchMove () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onTouchCancel () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onFocus () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get onBlur () {return __get__ (this, function (self, event) {
		// pass;
	});},
	get focus () {return __get__ (this, function (self) {
		self._element.focus ();
	});},
	get blur () {return __get__ (this, function (self) {
		self._element.blur ();
	});}
});
export var _listener = dict ({});
export var HTML5Canvas =  __class__ ('HTML5Canvas', [FocusElement], {
	__module__: __name__,
	_identity: 0,
	get __init__ () {return __get__ (this, function (self, width, height) {
		FocusElement.__init__ (self);
		self._id = HTML5Canvas._identity;
		HTML5Canvas._identity++;
		self._canvas = document.createElement ('canvas');
		self._element = self._canvas;
		self._element.id = str (self._id);
		self._element.width = width;
		self._element.height = height;
		self.width = width;
		self.height = height;
		self._element.style.margin = '0px';
		self._element.style.padding = '0px';
		self._element.style ['vertical-align'] = 'bottom';
		self._element.style.id = str (self._id);
		self.canvas = self._element;
		self._ctx = self._element.getContext ('2d');
		self.impl = CanvasImpl (self._ctx);
	});},
	get resize () {return __get__ (this, function (self, width, height) {
		self.width = width;
		self.height = height;
	});},
	get drawImage () {return __get__ (this, function (self, image) {
		var args = tuple ([].slice.apply (arguments).slice (2));
		var ln = len (args);
		if (ln == 2) {
			self._ctx.drawImage (image, args [0], args [1]);
		}
		else if (ln == 4) {
			self._ctx.drawImage (image, args [0], args [1], args [2], args [3]);
		}
		else if (ln == 8) {
			self._ctx.drawImage (image, args [0], args [1], args [2], args [3], args [4], args [5], args [6], args [7]);
		}
	});},
	get fill () {return __get__ (this, function (self) {
		self._ctx.fill ();
	});},
	get setFillStyle () {return __get__ (this, function (self, style) {
		self._ctx.fillStyle = str (style);
	});},
	get fillRect () {return __get__ (this, function (self, x, y, width, height) {
		self._ctx.fillRect (x, y, width, height);
	});},
	get py_clear () {return __get__ (this, function (self) {
		self._ctx.py_clear ();
	});},
	get setLineWidth () {return __get__ (this, function (self, width) {
		self._ctx.lineWidth = width;
	});},
	get setStrokeStyle () {return __get__ (this, function (self, style) {
		self._ctx.strokeStyle = str (style);
	});},
	get strokeRect () {return __get__ (this, function (self, x, y, width, height) {
		self._ctx.strokeRect (x, y, width, height);
	});},
	get saveContext () {return __get__ (this, function (self) {
		self._ctx.save ();
	});},
	get restoreContext () {return __get__ (this, function (self) {
		self._ctx.restore ();
	});},
	get translate () {return __get__ (this, function (self, x, y) {
		self._ctx.translate (x, y);
	});},
	get scale () {return __get__ (this, function (self, x, y) {
		self._ctx.scale (x, y);
	});},
	get rotate () {return __get__ (this, function (self, angle) {
		self._ctx.rotate (angle);
	});},
	get transform () {return __get__ (this, function (self, m11, m12, m21, m22, dx, dy) {
		self._ctx.transform (m11, m12, m21, m22, dx, dy);
	});},
	get arc () {return __get__ (this, function (self, x, y, r, sAngle, eAngle, counterclockwise) {
		self._ctx.arc (x, y, r, sAngle, eAngle, counterclockwise);
	});},
	get beginPath () {return __get__ (this, function (self) {
		self._ctx.beginPath ();
	});},
	get closePath () {return __get__ (this, function (self) {
		self._ctx.closePath ();
	});},
	get moveTo () {return __get__ (this, function (self, x, y) {
		self._ctx.moveTo (x, y);
	});},
	get lineTo () {return __get__ (this, function (self, x, y) {
		self._ctx.lineTo (x, y);
	});},
	get stroke () {return __get__ (this, function (self) {
		self._ctx.stroke ();
	});},
	get setFont () {return __get__ (this, function (self, font) {
		self._ctx.font = font;
	});},
	get setTextAlign () {return __get__ (this, function (self, align) {
		self._ctx.textAlign = align;
	});},
	get setTextBaseline () {return __get__ (this, function (self, baseline) {
		self._ctx.textBaseline = baseline;
	});},
	get fillText () {return __get__ (this, function (self, text, x, y) {
		self._ctx.fillText (text, x, y);
	});},
	get strokeText () {return __get__ (this, function (self, text, x, y) {
		self._ctx.strokeText (text, x, y);
	});},
	get measureText () {return __get__ (this, function (self, text) {
		return self._ctx.measureText (text).width;
	});},
	get getImageData () {return __get__ (this, function (self, x, y, width, height) {
		return self._ctx.getImageData (x, y, width, height);
	});},
	get putImageData () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		if (len (args) == 3) {
			self._ctx.putImageData (args [0], args [1], args [2]);
		}
		else {
			self._ctx.putImageData (args [0], args [1], args [2], args [3], args [4], args [5], args [6]);
		}
	});},
	get getContext () {return __get__ (this, function (self, ctx_type, ctx_attr) {
		if (typeof ctx_type == 'undefined' || (ctx_type != null && ctx_type.hasOwnProperty ("__kwargtrans__"))) {;
			var ctx_type = '2d';
		};
		if (typeof ctx_attr == 'undefined' || (ctx_attr != null && ctx_attr.hasOwnProperty ("__kwargtrans__"))) {;
			var ctx_attr = null;
		};
		if (ctx_attr === null) {
			return self._element.getContext (ctx_type);
		}
		else {
			return self._element.getContext (ctx_type, ctx_attr);
		}
	});},
	get toDataURL () {return __get__ (this, function (self, img_type, enc_options) {
		if (typeof img_type == 'undefined' || (img_type != null && img_type.hasOwnProperty ("__kwargtrans__"))) {;
			var img_type = 'image/png';
		};
		if (typeof enc_options == 'undefined' || (enc_options != null && enc_options.hasOwnProperty ("__kwargtrans__"))) {;
			var enc_options = 0.92;
		};
		return self._element.toDataURL (img_type, enc_options);
	});},
	get toBlob () {return __get__ (this, function (self, callback, img_type, quality) {
		if (typeof img_type == 'undefined' || (img_type != null && img_type.hasOwnProperty ("__kwargtrans__"))) {;
			var img_type = 'image/png';
		};
		if (typeof quality == 'undefined' || (quality != null && quality.hasOwnProperty ("__kwargtrans__"))) {;
			var quality = 0.92;
		};
		return self._element.toBlob (callback, img_type, quality);
	});},
	get getElement () {return __get__ (this, function (self) {
		return self._element;
	});}
});
export var CanvasImpl =  __class__ ('CanvasImpl', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, ctx) {
		self.canvasContext = ctx;
	});}
});
export var Panel =  __class__ ('Panel', [Element], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._element = document.createElement ('div');
	});},
	get setID () {return __get__ (this, function (self, id) {
		self._element.id = id;
	});},
	get getID () {return __get__ (this, function (self) {
		return self._element.id;
	});},
	get appendChild () {return __get__ (this, function (self, element) {
		self._element.appendChild (element._element);
	});},
	get removeChild () {return __get__ (this, function (self, element) {
		self._element.removeChild (element._element);
	});},
	get append () {return __get__ (this, function (self, element) {
		self._element.appendChild (element._element);
	});},
	get add () {return __get__ (this, function (self, element) {
		self.append (element);
	});},
	get remove () {return __get__ (this, function (self, element) {
		self._element.removeChild (element._element);
	});}
});
export var RootPanel =  __class__ ('RootPanel', [Panel], {
	__module__: __name__,
	_id: null,
	get __init__ () {return __get__ (this, function (self) {
		if (self._id === null) {
			self._id = '__panel__';
		}
		self._element = document.getElementById (self._id);
	});},
	get _set_root_panel () {return __getcm__ (this, function (cls, id) {
		if (cls._id === null) {
			cls._id = id;
		}
	});},
	get setId () {return __get__ (this, function (self, id) {
		self._id = id;
	});},
	get getId () {return __get__ (this, function (self) {
		return self._id;
	});},
	get add () {return __get__ (this, function (self, element) {
		if (isinstance (element, Element)) {
			self._element.appendChild (element.getElement ());
		}
		else {
			self._element.appendChild (element);
		}
	});}
});
export var FocusPanel =  __class__ ('FocusPanel', [Panel], {
	__module__: __name__,
});
export var VerticalPanel =  __class__ ('VerticalPanel', [Panel], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		Panel.__init__ (self);
		self._element.style.display = 'flex';
		self._element.style ['flex-direction'] = 'column';
	});},
	get append () {return __get__ (this, function (self, element) {
		var el = element._element;
		el.display = 'inline-block';
		el.style.flex = '1';
		el.style.width = '100%';
		self._element.appendChild (el);
	});}
});
export var TextBox =  __class__ ('TextBox', [Element], {
	__module__: __name__,
	_type: 'input',
	get __init__ () {return __get__ (this, function (self) {
		Element.__init__ (self);
		self._element = document.createElement (self._type);
		self._element.style.display = 'inline-block';
		self._element.style.flex = '1';
		self._element.style.border = '1px solid rgb(118, 118, 118)';
		self._element.style.margin = '0px';
		self._element.style.padding = '0px';
	});},
	get _get_value () {return __get__ (this, function (self) {
		return self._element.value;
	});},
	get _set_value () {return __get__ (this, function (self, text) {
		self._element.value = text;
	});},
	get setVisible () {return __get__ (this, function (self, visible) {
		if (visible) {
			self._element.style.display = 'inline-block';
		}
		else {
			self._element.style.display = 'none';
		}
	});},
	get getVisible () {return __get__ (this, function (self) {
		if (self._element.style.display != 'none') {
			return true;
		}
		else {
			return false;
		}
	});},
	get getText () {return __get__ (this, function (self) {
		return self._element.value;
	});},
	get setText () {return __get__ (this, function (self, text) {
		self._element.value = text;
	});}
});
Object.defineProperty (TextBox, 'value', property.call (TextBox, TextBox._get_value, TextBox._set_value));;
export var TextArea =  __class__ ('TextArea', [TextBox], {
	__module__: __name__,
	_type: 'textarea',
	get __init__ () {return __get__ (this, function (self) {
		TextBox.__init__ (self);
		self._element.style.resize = 'vertical';
	});}
});
export var ImageLoader =  __class__ ('ImageLoader', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, imagelist, callback) {
		self.imagelist = imagelist;
		self.callback = callback;
		self.images = [];
		self.image_toload = len (self.imagelist);
		for (var image of self.imagelist) {
			self.load (image);
		}
	});},
	get load () {return __get__ (this, function (self, imageurl) {
		var image = new Image ();
		self.images.append (image);
		image.addEventListener ('load', self.loaded, false);
		image.src = imageurl;
	});},
	get loaded () {return __get__ (this, function (self) {
		self.image_toload--;
		if (!(self.image_toload)) {
			self.callback.onImagesLoaded (self.images);
		}
	});}
});
export var loadImages = function (imagelist, callback) {
	ImageLoader (imagelist, callback);
};
export var Color =  __class__ ('Color', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		// pass;
	});}
});
export var Audio =  __class__ ('Audio', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, sound_file) {
		self.element = document.createElement ('AUDIO');
		self.element.src = sound_file;
	});},
	get play () {return __get__ (this, function (self) {
		self.element.play ();
	});},
	get pause () {return __get__ (this, function (self) {
		self.element.pause ();
	});},
	get getCurrentTime () {return __get__ (this, function (self) {
		return self.element.currentTime;
	});},
	get setCurrentTime () {return __get__ (this, function (self, time) {
		self.element.currentTime = time;
	});},
	get isPaused () {return __get__ (this, function (self) {
		return self.element.paused;
	});},
	get getSrc () {return __get__ (this, function (self) {
		return self.element.src;
	});},
	get getVolume () {return __get__ (this, function (self) {
		return self.element.volume;
	});},
	get setVolume () {return __get__ (this, function (self, volume) {
		self.element.volume = volume;
	});},
	get getDuration () {return __get__ (this, function (self) {
		return self.element.duration;
	});}
});
export var DOM =  __class__ ('DOM', [object], {
	__module__: __name__,
	get eventGetCurrentEvent () {return function () {
		return Event ();
	};},
	get setStyleAttribute () {return function (element, attr, val) {
		element.style [attr] = val;
	};}
});
export var Event =  __class__ ('Event', [object], {
	__module__: __name__,
});
export var doc = function () {
	return document;
};
export var get_main_frame = function () {
	return document;
};
export var wnd = function () {
	return window;
};
export var requestAnimationFrameInit = function () {
	requestAnimationFramePolyfill ();
	return wnd ();
};
export var performanceNowInit = function () {
	performanceNowPolyfill ();
	return wnd ();
};
export var requestAnimationFramePolyfill = function () {
	
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	
	// MIT license
	
	(function() {
	    var lastTime = 0;
	    var vendors = ['ms', 'moz', 'webkit', 'o'];
	    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
	                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
	    }
	 
	    if (!window.requestAnimationFrame)
	        window.requestAnimationFrame = function(callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
	              timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	 
	    if (!window.cancelAnimationFrame)
	        window.cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
	}());
	    
};
export var performanceNowPolyfill = function () {
	
	// @license http://opensource.org/licenses/MIT
	// copyright Paul Irish 2015
	
	
	// Date.now() is supported everywhere except IE8. For IE8 we use the Date.now polyfill
	//   github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js
	// as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values
	
	// if you want values similar to what you'd get with real perf.now, place this towards the head of the page
	// but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed
	
	
	(function(){
	
	  if ("performance" in window == false) {
	      window.performance = {};
	  }
	  
	  Date.now = (Date.now || function () {  // thanks IE8
		  return new Date().getTime();
	  });
	
	  if ("now" in window.performance == false){
	    
	    var nowOffset = Date.now();
	    
	    if (performance.timing && performance.timing.navigationStart){
	      nowOffset = performance.timing.navigationStart
	    }
	
	    window.performance.now = function now(){
	      return Date.now() - nowOffset;
	    }
	  }
	
	})();
	    
};
export var fabs = Math.abs;

//# sourceMappingURL=pyjsdl.pyjsobj.map