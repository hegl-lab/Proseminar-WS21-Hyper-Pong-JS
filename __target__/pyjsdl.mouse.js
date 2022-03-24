// Transcrypt'ed from Python, 2022-03-23 20:43:12
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {DOM} from './pyjsdl.pyjsobj.js';
import * as cursors from './pyjsdl.cursors.js';
import * as env from './pyjsdl.env.js';
var __name__ = 'pyjsdl.mouse';
export var __docformat__ = 'restructuredtext';
export var Mouse =  __class__ ('Mouse', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.mousePress = env.event.mousePress;
		self.mouseMove = env.event.mouseMove;
		self.mouseMoveRel = env.event.mouseMoveRel;
		self._cursorVisible = true;
		self._cursor = 'default';
		self._nonimplemented_methods ();
	});},
	get get_pressed () {return __get__ (this, function (self) {
		return tuple ([self.mousePress [0], self.mousePress [1], self.mousePress [2]]);
	});},
	get get_pos () {return __get__ (this, function (self) {
		if (self.mouseMove ['x'] != -(1)) {
			var r = env.canvas.getBoundingClientRect ();
			return tuple ([self.mouseMove ['x'] - round (r.left), self.mouseMove ['y'] - round (r.top)]);
		}
		else {
			return tuple ([self.mouseMove ['x'], self.mouseMove ['y']]);
		}
	});},
	get get_rel () {return __get__ (this, function (self) {
		try {
			var rel = tuple ([self.mouseMove ['x'] - self.mouseMoveRel ['x'], self.mouseMove ['y'] - self.mouseMoveRel ['y']]);
			var __left0__ = tuple ([self.mouseMove ['x'], self.mouseMove ['y']]);
			self.mouseMoveRel ['x'] = __left0__ [0];
			self.mouseMoveRel ['y'] = __left0__ [1];
		}
		catch (__except0__) {
			if (isinstance (__except0__, py_TypeError)) {
				var rel = tuple ([0, 0]);
				if (self.mouseMove ['x'] != -(1)) {
					var __left0__ = tuple ([self.mouseMove ['x'], self.mouseMove ['y']]);
					self.mouseMoveRel ['x'] = __left0__ [0];
					self.mouseMoveRel ['y'] = __left0__ [1];
				}
			}
			else {
				throw __except0__;
			}
		}
		return rel;
	});},
	get set_visible () {return __get__ (this, function (self, visible) {
		var visible_pre = self._cursorVisible;
		if (visible) {
			DOM.setStyleAttribute (env.canvas.getElement (), 'cursor', self._cursor);
			self._cursorVisible = true;
		}
		else {
			DOM.setStyleAttribute (env.canvas.getElement (), 'cursor', 'none');
			self._cursorVisible = false;
		}
		return visible_pre;
	});},
	get set_cursor () {return __get__ (this, function (self) {
		var cursor = tuple ([].slice.apply (arguments).slice (1));
		var args = len (cursor);
		if (args == 1) {
			self._cursor = cursor [0];
		}
		else if (__in__ (args, tuple ([2, 3]))) {
			if (isinstance (cursor [0], str)) {
				var url = cursor [0];
			}
			else {
				var url = cursor [0].toDataURL ();
			}
			var hotspot = cursor [1];
			if (args == 2) {
				var fallback = 'default';
			}
			else {
				var fallback = cursor [2];
			}
			self._cursor = 'url({}) {} {}, {}'.format (url, hotspot [0], hotspot [1], fallback);
		}
		else if (__in__ (args, tuple ([4, 5]))) {
			var size = cursor [0];
			var hotspot = cursor [1];
			var data = cursor [2];
			var mask = cursor [3];
			if (args == 4) {
				var fallback = 'default';
			}
			else {
				var fallback = cursor [4];
			}
			var surface = cursors.create_cursor (size, data, mask);
			var url = surface.toDataURL ();
			self._cursor = 'url({}) {} {}, {}'.format (url, hotspot [0], hotspot [1], fallback);
		}
		else {
			self._cursor = 'default';
		}
		if (self._cursorVisible) {
			DOM.setStyleAttribute (env.canvas.getElement (), 'cursor', self._cursor);
		}
	});},
	get get_cursor () {return __get__ (this, function (self) {
		return self._cursor;
	});},
	get _nonimplemented_methods () {return __get__ (this, function (self) {
		self.set_pos = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return null;
		});
		self.get_focused = (function __lambda__ () {
			var arg = tuple ([].slice.apply (arguments).slice (0));
			return true;
		});
	});}
});

//# sourceMappingURL=pyjsdl.mouse.map