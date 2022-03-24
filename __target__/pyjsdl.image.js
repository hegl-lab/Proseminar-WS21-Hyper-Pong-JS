// Transcrypt'ed from Python, 2022-03-23 20:43:12
var pyjsdl = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_pyjsdl__ from './pyjsdl.js';
__nest__ (pyjsdl, '', __module_pyjsdl__);
import * as env from './pyjsdl.env.js';
import {Surf, Surface} from './pyjsdl.surface.js';
import {os} from './pyjsdl.pylib.js';
var __name__ = 'pyjsdl.image';
export var __docformat__ = 'restructuredtext';
export var Image =  __class__ ('Image', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.images = null;
	});},
	get load () {return __get__ (this, function (self, img_file, namehint) {
		if (typeof namehint == 'undefined' || (namehint != null && namehint.hasOwnProperty ("__kwargtrans__"))) {;
			var namehint = null;
		};
		if (!(namehint)) {
			var image = self.get_image (img_file);
		}
		else {
			var image = self.get_image (namehint);
		}
		var surface = self.convert_image (image);
		return surface;
	});},
	get get_image () {return __get__ (this, function (self, img_file) {
		if (self.images === null) {
			self.images = dict ({});
			for (var img of env.canvas.images.py_keys ()) {
				self.images [os.path.normpath (img)] = env.canvas.images [img];
			}
		}
		var img_file = os.path.normpath (img_file);
		try {
			var image = self.images [img_file];
		}
		catch (__except0__) {
			if (isinstance (__except0__, KeyError)) {
				var __except1__ = pyjsdl.error ('Failed to retrieve image file {}'.format (img_file));
				__except1__.__cause__ = null;
				throw __except1__;
			}
			else {
				throw __except0__;
			}
		}
		return image;
	});},
	get convert_image () {return __get__ (this, function (self, image) {
		if (env.canvas._isCanvas) {
			var surface = Surface (tuple ([image.width, image.height]));
			surface.drawImage (image, 0, 0);
		}
		else {
			var surface = Surf (image);
		}
		return surface;
	});}
});

//# sourceMappingURL=pyjsdl.image.map