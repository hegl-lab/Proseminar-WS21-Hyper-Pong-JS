// Transcrypt'ed from Python, 2022-03-23 20:43:07
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'pyjsdl.pylib';
export var join = function (a) {
	var p = tuple ([].slice.apply (arguments).slice (1));
	var sep = _get_sep (a);
	var path = a;
	try {
		if (!(p)) {
			path.__getslice__ (0, 0, 1) + sep;
		}
		for (var b of p) {
			if (b.startswith (sep)) {
				var path = b;
			}
			else if (!(path) || path.endswith (sep)) {
				path += b;
			}
			else {
				path += sep + b;
			}
		}
	}
	catch (__except0__) {
		if (isinstance (__except0__, tuple ([py_TypeError, AttributeError, BytesWarning]))) {
			_check_arg_types ('join', a, ...p);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else {
			throw __except0__;
		}
	}
	return path;
};
export var normpath = function (path) {
	if (isinstance (path, bytes)) {
		var sep = bytes ('/');
		var empty = bytes ('');
		var dot = bytes ('.');
		var dotdot = bytes ('..');
	}
	else {
		var sep = '/';
		var empty = '';
		var dot = '.';
		var dotdot = '..';
	}
	if (path == empty) {
		return dot;
	}
	var initial_slashes = path.startswith (sep);
	if (initial_slashes && path.startswith (sep * 2) && !(path.startswith (sep * 3))) {
		var initial_slashes = 2;
	}
	var comps = path.py_split (sep);
	var new_comps = [];
	for (var comp of comps) {
		if (__in__ (comp, tuple ([empty, dot]))) {
			continue;
		}
		if (comp != dotdot || !(initial_slashes) && !(new_comps) || new_comps && new_comps [-(1)] == dotdot) {
			new_comps.append (comp);
		}
		else if (new_comps) {
			new_comps.py_pop ();
		}
	}
	var comps = new_comps;
	var path = sep.join (comps);
	if (initial_slashes) {
		var path = sep * initial_slashes + path;
	}
	return path || dot;
};
export var _get_sep = function (path) {
	if (isinstance (path, bytes)) {
		return bytes ('/');
	}
	else {
		return '/';
	}
};
export var _check_arg_types = function (funcname) {
	var args = tuple ([].slice.apply (arguments).slice (1));
	var __left0__ = false;
	var hasstr = __left0__;
	var hasbytes = __left0__;
	for (var s of args) {
		if (isinstance (s, str)) {
			var hasstr = true;
		}
		else if (isinstance (s, bytes)) {
			var hasbytes = true;
		}
		else {
			var __except0__ = py_TypeError (__mod__ ('%s() argument must be str or bytes, not %r', tuple ([funcname, s.__class__.__name__])));
			__except0__.__cause__ = null;
			throw __except0__;
		}
	}
	if (hasstr && hasbytes) {
		var __except0__ = py_TypeError ("Can't mix strings and bytes in path components");
		__except0__.__cause__ = null;
		throw __except0__;
	}
};
export var Mod =  __class__ ('Mod', [object], {
	__module__: __name__,
});
export var os = Mod ();
export var path = Mod ();
path.join = join;
path.normpath = normpath;
os.path = path;

//# sourceMappingURL=pyjsdl.pylib.map