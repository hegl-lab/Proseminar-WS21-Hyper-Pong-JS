// Transcrypt'ed from Python, 2022-03-23 20:43:07
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ACTIVEEVENT, DOUBLEBUF, FULLSCREEN, HWACCEL, HWPALETTE, HWSURFACE, KEYDOWN, KEYUP, KMOD_ALT, KMOD_CAPS, KMOD_CTRL, KMOD_LALT, KMOD_LCTRL, KMOD_LMETA, KMOD_LSHIFT, KMOD_META, KMOD_MODE, KMOD_NONE, KMOD_NUM, KMOD_RALT, KMOD_RCTRL, KMOD_RMETA, KMOD_RSHIFT, KMOD_SHIFT, K_0, K_1, K_2, K_3, K_4, K_5, K_6, K_7, K_8, K_9, K_ALT, K_AMPERSAND, K_ASTERISK, K_AT, K_BACKQUOTE, K_BACKSLASH, K_BACKSPACE, K_BREAK, K_CAPSLOCK, K_CARET, K_CLEAR, K_COLON, K_COMMA, K_CTRL, K_DELETE, K_DOLLAR, K_DOWN, K_END, K_EQUALS, K_ESCAPE, K_EURO, K_EXCLAIM, K_F1, K_F10, K_F11, K_F12, K_F13, K_F14, K_F15, K_F2, K_F3, K_F4, K_F5, K_F6, K_F7, K_F8, K_F9, K_GREATER, K_HASH, K_HELP, K_HOME, K_INSERT, K_KP0, K_KP1, K_KP2, K_KP3, K_KP4, K_KP5, K_KP6, K_KP7, K_KP8, K_KP9, K_KP_DIVIDE, K_KP_ENTER, K_KP_EQUALS, K_KP_MINUS, K_KP_MULTIPLY, K_KP_PERIOD, K_KP_PLUS, K_LALT, K_LCTRL, K_LEFT, K_LEFTBRACKET, K_LEFTPAREN, K_LESS, K_LMETA, K_LSHIFT, K_LSUPER, K_MENU, K_MINUS, K_MODE, K_NUMLOCK, K_PAGEDOWN, K_PAGEUP, K_PAUSE, K_PERIOD, K_PLUS, K_POWER, K_PRINT, K_QUESTION, K_QUOTE, K_QUOTEDBL, K_RALT, K_RCTRL, K_RETURN, K_RIGHT, K_RIGHTBRACKET, K_RIGHTPAREN, K_RMETA, K_RSHIFT, K_RSUPER, K_SCROLLLOCK, K_SCROLLOCK, K_SEMICOLON, K_SHIFT, K_SLASH, K_SPACE, K_SYSREQ, K_TAB, K_UNDERSCORE, K_UNKNOWN, K_UP, K_a, K_b, K_c, K_d, K_e, K_f, K_g, K_h, K_i, K_j, K_k, K_l, K_m, K_n, K_o, K_p, K_q, K_r, K_s, K_t, K_u, K_v, K_w, K_x, K_y, K_z, MOUSEBUTTONDOWN, MOUSEBUTTONUP, MOUSEMOTION, NOEVENT, NOFRAME, NUMEVENTS, OPENGL, QUIT, RESIZABLE, RLEACCEL, RLEACCELOK, SRCALPHA, SRCCOLORKEY, SWSURFACE, SYSWMEVENT, USEREVENT} from './pyjsdl.constants.js';
import * as cursors from './pyjsdl.cursors.js';
import * as sprite from './pyjsdl.sprite.js';
import * as font from './pyjsdl.font.js';
import * as mask from './pyjsdl.mask.js';
import * as surfarray from './pyjsdl.surfarray.js';
import * as surface from './pyjsdl.surface.js';
import * as transform from './pyjsdl.transform.js';
import * as draw from './pyjsdl.draw.js';
import {Vector2} from './pyjsdl.vector.js';
import {Time} from './pyjsdl.time.js';
import {Mixer} from './pyjsdl.mixer.js';
import {Color} from './pyjsdl.color.js';
import {Mouse} from './pyjsdl.mouse.js';
import {Key} from './pyjsdl.key.js';
import {Event} from './pyjsdl.event.js';
import {Image} from './pyjsdl.image.js';
import {Rect} from './pyjsdl.rect.js';
import {Surface} from './pyjsdl.surface.js';
import {Display} from './pyjsdl.display.js';
import * as util from './pyjsdl.util.js';
import * as env from './pyjsdl.env.js';
export {RLEACCEL, K_QUESTION, K_SCROLLLOCK, K_CTRL, K_j, Surface, K_F2, NUMEVENTS, K_d, DOUBLEBUF, K_k, K_KP1, K_TAB, K_PRINT, K_SYSREQ, OPENGL, K_KP9, K_UNDERSCORE, KMOD_RALT, K_INSERT, K_LESS, K_9, K_KP8, font, K_F12, K_ALT, K_c, env, Mixer, K_RIGHT, K_LSHIFT, K_PAUSE, K_PAGEUP, K_6, K_LEFTBRACKET, KEYUP, K_COMMA, K_v, K_KP3, KMOD_SHIFT, K_LALT, sprite, FULLSCREEN, K_COLON, K_NUMLOCK, NOFRAME, K_BACKSPACE, K_SCROLLOCK, K_MENU, Mouse, K_KP7, K_l, K_EURO, K_a, K_F15, SRCCOLORKEY, KMOD_NUM, K_MINUS, SRCALPHA, K_f, draw, KMOD_RMETA, K_SHIFT, K_PAGEDOWN, K_POWER, surface, K_i, Time, K_LEFTPAREN, K_F10, util, K_KP0, K_HELP, K_LCTRL, K_KP_PERIOD, K_BREAK, K_CAPSLOCK, SWSURFACE, K_KP2, K_KP_MINUS, KEYDOWN, ACTIVEEVENT, K_ESCAPE, K_SPACE, K_w, MOUSEMOTION, RLEACCELOK, KMOD_ALT, K_m, MOUSEBUTTONDOWN, K_g, HWACCEL, KMOD_LALT, K_5, KMOD_CAPS, KMOD_RCTRL, K_CARET, K_KP_DIVIDE, cursors, K_LSUPER, Vector2, KMOD_META, K_RALT, K_o, K_SEMICOLON, K_u, K_PERIOD, USEREVENT, K_KP5, RESIZABLE, K_x, K_r, K_7, K_AMPERSAND, K_RSHIFT, K_b, KMOD_RSHIFT, HWPALETTE, K_GREATER, K_h, K_CLEAR, K_2, K_8, surfarray, K_q, K_QUOTE, KMOD_LMETA, K_4, Key, K_AT, K_HOME, K_F13, K_KP_MULTIPLY, K_KP_PLUS, K_DELETE, K_DOWN, KMOD_LCTRL, QUIT, K_3, K_UNKNOWN, transform, K_PLUS, K_z, Color, K_F5, K_F8, K_F6, K_KP_ENTER, K_F11, SYSWMEVENT, K_e, K_RCTRL, K_EQUALS, Event, K_RETURN, K_RMETA, K_F9, NOEVENT, mask, K_LEFT, K_SLASH, HWSURFACE, K_HASH, K_F7, Image, K_y, K_UP, K_EXCLAIM, K_F4, K_LMETA, K_DOLLAR, K_ASTERISK, K_BACKQUOTE, KMOD_CTRL, KMOD_NONE, K_KP6, KMOD_LSHIFT, MOUSEBUTTONUP, KMOD_MODE, Rect, Display, K_s, K_RSUPER, K_0, K_MODE, K_END, K_F14, K_F1, K_p, K_n, K_BACKSLASH, K_1, K_KP4, K_QUOTEDBL, K_KP_EQUALS, K_RIGHTBRACKET, K_RIGHTPAREN, K_F3, K_t};
var __name__ = 'pyjsdl';
var __left0__ = null;
export var time = __left0__;
export var display = __left0__;
export var image = __left0__;
export var event = __left0__;
export var key = __left0__;
export var mouse = __left0__;
export var mixer = __left0__;
export var _initialized = false;
export var init = function () {
	if (_initialized) {
		return ;
	}
	else {
		_initialized = true;
	}
	event = Event ();
	env.set_env ('event', event);
	time = Time ();
	display = Display ();
	image = Image ();
	mixer = Mixer ();
	mouse = Mouse ();
	key = Key ();
};
init ();
export var setup = function (callback, images) {
	if (typeof images == 'undefined' || (images != null && images.hasOwnProperty ("__kwargtrans__"))) {;
		var images = null;
	};
	display.setup (callback, images);
};
export var set_callback = function (callback) {
	display.set_callback (callback);
};
export var setup_images = function (images) {
	display.set_images (images);
};
export var quit = function () {
	var canvas = display.get_canvas ();
	canvas.stop ();
	mixer.quit ();
	time._stop_timers ();
};
export var error =  __class__ ('error', [Exception], {
	__module__: __name__,
});
export var bounding_rect_return = function (setting) {
	surface.bounding_rect_return (setting);
	draw.bounding_rect_return (setting);
};

//# sourceMappingURL=pyjsdl.map