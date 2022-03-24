// Transcrypt'ed from Python, 2022-03-23 20:43:08
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Dict} from './pyjsdl.util.js';
import * as mask from './pyjsdl.mask.js';
import {rectPool} from './pyjsdl.rect.js';
var __name__ = 'pyjsdl.sprite';
export var __docformat__ = 'restructuredtext';
export var id = function (obj) {
	return obj._identity;
};
export var Sprite =  __class__ ('Sprite', [object], {
	__module__: __name__,
	_identity: 0,
	get __init__ () {return __get__ (this, function (self) {
		var groups = tuple ([].slice.apply (arguments).slice (1));
		self._identity = Sprite._identity;
		Sprite._identity++;
		self._groups = dict ();
		if (len (groups) > 0) {
			self.add (...groups);
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		var s = '<{}(in {} groups)>';
		return s.format (self.__class__.__name__, len (self._groups));
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.__str__ ();
	});},
	get add () {return __get__ (this, function (self) {
		var groups = tuple ([].slice.apply (arguments).slice (1));
		for (var group of groups) {
			if (hasattr (group, '_sprites')) {
				group.add (self);
			}
			else {
				self.add (...group);
			}
		}
		return null;
	});},
	get remove () {return __get__ (this, function (self) {
		var groups = tuple ([].slice.apply (arguments).slice (1));
		for (var group of groups) {
			if (hasattr (group, '_sprites')) {
				group.remove (self);
			}
			else {
				self.remove (...group);
			}
		}
		return null;
	});},
	get kill () {return __get__ (this, function (self) {
		for (var group of list (self._groups.py_values ())) {
			group.remove (self);
		}
		return null;
	});},
	get alive () {return __get__ (this, function (self) {
		if (len (self._groups.py_keys ()) > 0) {
			return true;
		}
		else {
			return false;
		}
	});},
	get groups () {return __get__ (this, function (self) {
		return list (self._groups.py_values ());
	});},
	get py_update () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		// pass;
	});}
});
export var DirtySprite =  __class__ ('DirtySprite', [Sprite], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var groups = tuple ([].slice.apply (arguments).slice (1));
		Sprite.__init__ (self, ...groups);
	});}
});
export var Group =  __class__ ('Group', [object], {
	__module__: __name__,
	_identity: 0,
	get __init__ () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		self._identity = Group._identity;
		Group._identity++;
		self._sprites = dict ();
		if (len (sprites) > 0) {
			self.add (...sprites);
		}
		self._clear_active = false;
		self._sprites_drawn = dict ();
	});},
	get __str__ () {return __get__ (this, function (self) {
		var s = '<{}({} sprites)>';
		return s.format (self.__class__.__name__, len (self._sprites));
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return self.__str__ ();
	});},
	get __iter__ () {return __get__ (this, function (self) {
		return py_iter (self._sprites.py_values ());
	});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get __contains__ () {return __get__ (this, function (self, sprite) {
		return __in__ (str (id (sprite)), self._sprites.py_keys ());
	});},
	get __len__ () {return __get__ (this, function (self) {
		return len (self._sprites.py_keys ());
	});},
	get sprites () {return __get__ (this, function (self) {
		return list (self._sprites.py_values ());
	});},
	get copy () {return __get__ (this, function (self) {
		var newgroup = self.__class__ ();
		newgroup._sprites = self._sprites.copy ();
		return newgroup;
	});},
	get add () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		for (var sprite of sprites) {
			if (hasattr (sprite, '_groups')) {
				var spriteID = id (sprite);
				if (!__in__ (str (spriteID), self._sprites.py_keys ())) {
					self._sprites [spriteID] = sprite;
					sprite._groups [id (self)] = self;
				}
			}
			else {
				self.add (...sprite);
			}
		}
		return null;
	});},
	get remove () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		for (var sprite of sprites) {
			if (hasattr (sprite, '_groups')) {
				var spriteID = id (sprite);
				if (__in__ (str (spriteID), self._sprites.py_keys ())) {
					delete self._sprites [spriteID];
					delete sprite._groups [id (self)];
				}
			}
			else {
				self.remove (...sprite);
			}
		}
		return null;
	});},
	get has () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		for (var sprite of sprites) {
			if (hasattr (sprite, '_groups')) {
				if (!__in__ (str (id (sprite)), self._sprites.py_keys ())) {
					return false;
				}
			}
			else if (!(self.has (...sprite))) {
				return false;
			}
		}
		return true;
	});},
	get draw () {return __get__ (this, function (self, surface) {
		surface._blits ((function () {
			var __accu0__ = [];
			for (var sprite of self) {
				__accu0__.append (tuple ([sprite.image, sprite.rect]));
			}
			return __accu0__;
		}) ());
		if (self._clear_active) {
			rectPool.extend (list (self._sprites_drawn.py_values ()));
			self._sprites_drawn.py_clear ();
			for (var sprite of self._sprites.py_keys ()) {
				self._sprites_drawn [sprite] = rectPool.copy (self._sprites [sprite].rect);
			}
		}
		return null;
	});},
	get py_clear () {return __get__ (this, function (self, surface, background) {
		self._clear_active = true;
		if (hasattr (background, 'width')) {
			surface._blit_clear (background, self._sprites_drawn.py_values ());
		}
		else {
			for (var sprite of self._sprites_drawn.py_keys ()) {
				background (surface, self._sprites_drawn [sprite]);
			}
		}
	});},
	get empty () {return __get__ (this, function (self) {
		for (var sprite of self._sprites.py_values ()) {
			delete sprite._groups [id (self)];
		}
		self._sprites.py_clear ();
		return null;
	});},
	get py_update () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		for (var sprite of list (self._sprites.py_values ())) {
			sprite.py_update (...args);
		}
		return null;
	});}
});
export var RenderPlain =  __class__ ('RenderPlain', [Group], {
	__module__: __name__,
});
export var RenderClear =  __class__ ('RenderClear', [Group], {
	__module__: __name__,
});
export var GroupSingle =  __class__ ('GroupSingle', [Group], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, sprite) {
		if (typeof sprite == 'undefined' || (sprite != null && sprite.hasOwnProperty ("__kwargtrans__"))) {;
			var sprite = null;
		};
		if (sprite) {
			Group.__init__ (self, sprite);
		}
		else {
			Group.__init__ (self);
		}
	});},
	get __getattr__ () {return __get__ (this, function (self, attr) {
		if (attr == 'sprite') {
			if (len (self._sprites.py_keys ()) > 0) {
				return list (self._sprites.py_values ()) [0];
			}
			else {
				return null;
			}
		}
	});},
	get add () {return __get__ (this, function (self, sprite) {
		self.empty ();
		self._sprites [id (sprite)] = sprite;
		sprite._groups [id (self)] = self;
		return null;
	});},
	get py_update () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		if (len (self._sprites.py_keys ()) > 0) {
			list (self._sprites.py_values ()) [0].py_update (...args);
		}
		return null;
	});}
});
export var RenderUpdates =  __class__ ('RenderUpdates', [Group], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		Group.__init__ (self, ...sprites);
		self.changed_areas = [];
	});},
	get draw () {return __get__ (this, function (self, surface) {
		surface._blits ((function () {
			var __accu0__ = [];
			for (var sprite of self) {
				__accu0__.append (tuple ([sprite.image, sprite.rect]));
			}
			return __accu0__;
		}) ());
		if (self._clear_active) {
			rectPool.extend (self.changed_areas);
			self.changed_areas.__setslice__ (0, null, null, []);
			for (var sprite of self._sprites.py_keys ()) {
				if (__in__ (sprite, self._sprites_drawn.py_keys ())) {
					if (self._sprites_drawn [sprite].intersects (self._sprites [sprite].rect)) {
						self._sprites_drawn [sprite].union_ip (self._sprites [sprite].rect);
					}
					else {
						self.changed_areas.append (rectPool.copy (self._sprites [sprite].rect));
					}
				}
				else {
					self.changed_areas.append (rectPool.copy (self._sprites [sprite].rect));
				}
			}
			self.changed_areas.extend (list (self._sprites_drawn.py_values ()));
			self._sprites_drawn.py_clear ();
			for (var sprite of self._sprites.py_keys ()) {
				self._sprites_drawn [sprite] = rectPool.copy (self._sprites [sprite].rect);
			}
		}
		else {
			rectPool.extend (self.changed_areas);
			self.changed_areas.__setslice__ (0, null, null, []);
			self.changed_areas.extend ((function () {
				var __accu0__ = [];
				for (var sprite of self._sprites.py_values ()) {
					__accu0__.append (rectPool.copy (sprite.rect));
				}
				return __accu0__;
			}) ());
		}
		return self.changed_areas;
	});}
});
export var OrderedUpdates =  __class__ ('OrderedUpdates', [RenderUpdates], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		self._orderedsprites = [];
		RenderUpdates.__init__ (self, ...sprites);
	});},
	get __iter__ () {return __get__ (this, function (self) {
		return py_iter (self._orderedsprites);
	});},
	[Symbol.iterator] () {return this.__iter__ ()},
	get sprites () {return __get__ (this, function (self) {
		return self._orderedsprites.__getslice__ (0, null, 1);
	});},
	get copy () {return __get__ (this, function (self) {
		var newgroup = RenderUpdates.copy (self);
		newgroup._orderedsprites = self._orderedsprites.__getslice__ (0, null, 1);
		return newgroup;
	});},
	get add () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		for (var sprite of sprites) {
			if (hasattr (sprite, '_groups')) {
				var spriteID = id (sprite);
				if (!__in__ (str (spriteID), self._sprites.py_keys ())) {
					self._sprites [spriteID] = sprite;
					sprite._groups [id (self)] = self;
					self._orderedsprites.append (sprite);
				}
			}
			else {
				self.add (...sprite);
			}
		}
		return null;
	});},
	get remove () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		for (var sprite of sprites) {
			if (hasattr (sprite, '_groups')) {
				var spriteID = id (sprite);
				if (__in__ (str (spriteID), self._sprites.py_keys ())) {
					delete self._sprites [spriteID];
					delete sprite._groups [id (self)];
					self._orderedsprites.remove (sprite);
				}
			}
			else {
				self.remove (...sprite);
			}
		}
		return null;
	});},
	get empty () {return __get__ (this, function (self) {
		self._orderedsprites.__setslice__ (0, null, null, []);
		RenderUpdates.empty (self);
	});}
});
export var LayeredUpdates =  __class__ ('LayeredUpdates', [OrderedUpdates], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var sprites = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var sprites = tuple ();
		}
		self._layer = dict ({});
		self._layers = [];
		if (!__in__ ('default_layer', kwargs.py_keys ())) {
			self._default_layer = 0;
		}
		else {
			self._default_layer = kwargs ['default_layer'];
		}
		if (!__in__ ('layer', kwargs.py_keys ())) {
			self._override_layer = null;
		}
		else {
			self._override_layer = kwargs ['layer'];
		}
		OrderedUpdates.__init__ (self, ...sprites);
	});},
	get copy () {return __get__ (this, function (self) {
		var newgroup = OrderedUpdates.copy (self);
		for (var layer of self._layer) {
			var layer_data = dict ({});
			layer_data ['sprite'] = set ();
			for (var spriteID of self._layer [layer] ['sprite']) {
				layer_data ['sprite'].add (spriteID);
			}
			layer_data ['index'] = self._layer [layer] ['index'].__getslice__ (0, null, 1);
			newgroup._layer [layer] = layer_data;
		}
		newgroup._layers = self._layers.__getslice__ (0, null, 1);
		newgroup._default_layer = self._default_layer;
		return newgroup;
	});},
	get add () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var sprites = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var sprites = tuple ();
		}
		if (__in__ ('layer', kwargs.py_keys ())) {
			self._override_layer = kwargs ['layer'];
		}
		for (var sprite of sprites) {
			if (hasattr (sprite, '_groups')) {
				var spriteID = id (sprite);
				if (!__in__ (str (spriteID), self._sprites.py_keys ())) {
					self._sprites [spriteID] = sprite;
					sprite._groups [id (self)] = self;
					if (self._override_layer !== null) {
						var layer = self._override_layer;
					}
					else if (hasattr (sprite, '_layer')) {
						var layer = sprite._layer;
					}
					else {
						var layer = self._default_layer;
					}
					if (!__in__ (str (layer), self._layer.py_keys ())) {
						self._add_layer (layer);
					}
					self._layer [layer] ['sprite'].add (spriteID);
					var i = self._layer [layer] ['index'] [1];
					self._orderedsprites.insert (i, sprite);
					self._layer [layer] ['index'] [1]++;
					var index = self._layers.index (layer);
					while (index < len (self._layers) - 1) {
						index++;
						var _layer = self._layers [index];
						self._layer [_layer] ['index'] [0]++;
						self._layer [_layer] ['index'] [1]++;
					}
				}
			}
			else {
				if (self._override_layer !== null) {
					kwargs ['layer'] = self._override_layer;
				}
				self.add (...sprite, __kwargtrans__ (kwargs));
			}
		}
		self._override_layer = null;
		return null;
	});},
	get _add_layer () {return __get__ (this, function (self, layer) {
		self._layers.append (layer);
		self._layers.py_sort ();
		var index = self._layers.index (layer);
		if (index > 0) {
			var _layer = self._layers [index - 1];
			var i = self._layer [_layer] ['index'] [1];
		}
		else {
			var i = 0;
		}
		self._layer [layer] = dict ({'sprite': set (), 'index': [i, i]});
	});},
	get remove () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		for (var sprite of sprites) {
			if (hasattr (sprite, '_groups')) {
				var spriteID = id (sprite);
				if (__in__ (str (spriteID), self._sprites.py_keys ())) {
					delete self._sprites [spriteID];
					delete sprite._groups [id (self)];
					for (var layer of self._layers) {
						if (__in__ (spriteID, self._layer [layer] ['sprite'])) {
							break;
						}
					}
					self._layer [layer] ['sprite'].remove (spriteID);
					self._layer [layer] ['index'] [1]--;
					var index = self._layers.index (layer);
					while (index < len (self._layers) - 1) {
						index++;
						var _layer = self._layers [index];
						self._layer [_layer] ['index'] [0]--;
						self._layer [_layer] ['index'] [1]--;
					}
					if (self._layer [layer] ['index'] [0] == self._layer [layer] ['index'] [1]) {
						delete self._layer [layer];
						self._layers.remove (layer);
					}
					self._orderedsprites.remove (sprite);
				}
			}
			else {
				self.remove (...sprite);
			}
		}
		return null;
	});},
	get empty () {return __get__ (this, function (self) {
		self._layers.__setslice__ (0, null, null, []);
		self._layer.py_clear ();
		OrderedUpdates.empty (self);
	});},
	get get_sprites_at () {return __get__ (this, function (self, position) {
		var colliding_sprites = [];
		for (var sprite of self._orderedsprites) {
			if (sprite.rect.collidepoint (position)) {
				colliding_sprites.append (sprite);
			}
		}
		return colliding_sprites;
	});},
	get get_sprite () {return __get__ (this, function (self, index) {
		return self._orderedsprites [index];
	});},
	get remove_sprites_of_layer () {return __get__ (this, function (self, layer) {
		var __left0__ = self._layer [layer] ['index'];
		var i = __left0__ [0];
		var j = __left0__ [1];
		var sprites = self._orderedsprites.__getslice__ (i, j, 1);
		for (var sprite of sprites) {
			self.remove (sprite);
		}
		return sprites;
	});},
	get layers () {return __get__ (this, function (self) {
		return self._layers.__getslice__ (0, null, 1);
	});},
	get change_layer () {return __get__ (this, function (self, sprite, new_layer) {
		self.remove (sprite);
		self.add (sprite, __kwargtrans__ ({layer: new_layer}));
		return null;
	});},
	get get_layer_of_sprite () {return __get__ (this, function (self, sprite) {
		for (var layer of self._layers) {
			if (__in__ (id (sprite), self._layer [layer] ['sprite'])) {
				return layer;
			}
		}
	});},
	get get_top_layer () {return __get__ (this, function (self) {
		var top = len (self._layers) - 1;
		return self._layers [top];
	});},
	get get_bottom_layer () {return __get__ (this, function (self) {
		return self._layers [0];
	});},
	get move_to_front () {return __get__ (this, function (self, sprite) {
		self.remove (sprite);
		var top = len (self._layers) - 1;
		self.add (sprite, __kwargtrans__ ({layer: self._layers [top]}));
		return null;
	});},
	get move_to_back () {return __get__ (this, function (self, sprite) {
		var new_layer = self._layers [0] - 1;
		self.remove (sprite);
		self.add (sprite, __kwargtrans__ ({layer: new_layer}));
		return null;
	});},
	get get_top_sprite () {return __get__ (this, function (self) {
		var top = len (self._orderedsprites) - 1;
		return self._orderedsprites [top];
	});},
	get get_sprites_from_layer () {return __get__ (this, function (self, layer) {
		var __left0__ = self._layer [layer] ['index'];
		var i = __left0__ [0];
		var j = __left0__ [1];
		return self._orderedsprites.__getslice__ (i, j, 1);
	});},
	get switch_layer () {return __get__ (this, function (self, layer1, layer2) {
		var sprites1 = self.remove_sprites_of_layer (layer1);
		var sprites2 = self.remove_sprites_of_layer (layer2);
		self.add (sprites1, __kwargtrans__ ({layer: layer2}));
		self.add (sprites2, __kwargtrans__ ({layer: layer1}));
	});}
});
export var LayeredDirty =  __class__ ('LayeredDirty', [LayeredUpdates], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var sprites = tuple ([].slice.apply (arguments).slice (1));
		LayeredUpdates (self, ...sprites);
	});}
});
export var spritecollide = function (sprite, group, dokill, collided) {
	if (typeof collided == 'undefined' || (collided != null && collided.hasOwnProperty ("__kwargtrans__"))) {;
		var collided = null;
	};
	var collide = [];
	var collision = false;
	for (var _sprite of group) {
		if (sprite.rect.intersects (_sprite.rect)) {
			if (collided) {
				if (!(collided (sprite, _sprite))) {
					continue;
				}
			}
			collide.append (_sprite);
			var collision = true;
		}
	}
	if (collision && dokill) {
		for (var _sprite of collide) {
			_sprite.kill ();
		}
	}
	return collide;
};
export var collide_rect = function (sprite1, sprite2) {
	return sprite1.rect.intersects (sprite2.rect);
};
export var collide_rect_ratio = function (ratio) {
	var obj = _collide_rect_ratio (ratio);
	return (function __lambda__ (sprite1, sprite2) {
		return obj.__call__ (sprite1, sprite2);
	});
};
export var _collide_rect_ratio =  __class__ ('_collide_rect_ratio', [object], {
	__module__: __name__,
	__slots__: ['ratio'],
	get __init__ () {return __get__ (this, function (self, ratio) {
		self.ratio = ratio;
	});},
	get __call__ () {return __get__ (this, function (self, sprite1, sprite2) {
		var r = sprite1.rect;
		var x = r.width * self.ratio - r.width;
		var y = r.height * self.ratio - r.height;
		var r1 = rectPool.py_get (r.x - int (x * 0.5), r.y - int (y * 0.5), r.width + int (x), r.height + int (y));
		var r = sprite2.rect;
		var x = r.width * self.ratio - r.width;
		var y = r.height * self.ratio - r.height;
		var r2 = rectPool.py_get (r.x - int (x * 0.5), r.y - int (y * 0.5), r.width + int (x), r.height + int (y));
		var collide = r1.intersects (r2);
		rectPool.extend (tuple ([r1, r2]));
		return collide;
	});}
});
export var collide_circle = function (sprite1, sprite2) {
	if (hasattr (sprite1, 'radius')) {
		var radius1 = sprite1.radius;
	}
	else {
		var radius1 = Math.pow (Math.pow (sprite1.rect.width, 2) + Math.pow (sprite1.rect.height, 2), 0.5) * 0.5;
	}
	if (hasattr (sprite2, 'radius')) {
		var radius2 = sprite2.radius;
	}
	else {
		var radius2 = Math.pow (Math.pow (sprite2.rect.width, 2) + Math.pow (sprite2.rect.height, 2), 0.5) * 0.5;
	}
	var sx1 = sprite1.rect.x + int (sprite1.rect.width * 0.5);
	var sy1 = sprite1.rect.y + int (sprite1.rect.height * 0.5);
	var sx2 = sprite2.rect.x + int (sprite2.rect.width * 0.5);
	var sy2 = sprite2.rect.y + int (sprite2.rect.height * 0.5);
	return Math.pow (sx1 - sx2, 2) + Math.pow (sy1 - sy2, 2) < Math.pow (radius1, 2) + Math.pow (radius2, 2);
};
export var collide_circle_ratio = function (ratio) {
	var obj = _collide_circle_ratio (ratio);
	return (function __lambda__ (sprite1, sprite2) {
		return obj.__call__ (sprite1, sprite2);
	});
};
export var _collide_circle_ratio =  __class__ ('_collide_circle_ratio', [object], {
	__module__: __name__,
	__slots__: ['ratio'],
	get __init__ () {return __get__ (this, function (self, ratio) {
		self.ratio = ratio;
	});},
	get __call__ () {return __get__ (this, function (self, sprite1, sprite2) {
		if (hasattr (sprite1, 'radius')) {
			var radius1 = sprite1.radius * self.ratio;
		}
		else {
			var radius1 = (Math.pow (Math.pow (sprite1.rect.width, 2) + Math.pow (sprite1.rect.height, 2), 0.5) * 0.5) * self.ratio;
		}
		if (hasattr (sprite2, 'radius')) {
			var radius2 = sprite2.radius * self.ratio;
		}
		else {
			var radius2 = (Math.pow (Math.pow (sprite2.rect.width, 2) + Math.pow (sprite2.rect.height, 2), 0.5) * 0.5) * self.ratio;
		}
		var sx1 = sprite1.rect.x + int (sprite1.rect.width * 0.5);
		var sy1 = sprite1.rect.y + int (sprite1.rect.height * 0.5);
		var sx2 = sprite2.rect.x + int (sprite2.rect.width * 0.5);
		var sy2 = sprite2.rect.y + int (sprite2.rect.height * 0.5);
		return Math.pow (sx1 - sx2, 2) + Math.pow (sy1 - sy2, 2) < Math.pow (radius1, 2) + Math.pow (radius2, 2);
	});}
});
export var collide_mask = function (sprite1, sprite2) {
	if (hasattr (sprite1, 'mask')) {
		var mask1 = sprite1.mask;
	}
	else {
		var mask1 = mask.from_surface (sprite1.image);
	}
	if (hasattr (sprite2, 'mask')) {
		var mask2 = sprite2.mask;
	}
	else {
		var mask2 = mask.from_surface (sprite2.image);
	}
	if (mask1.overlap (mask2, tuple ([sprite2.rect.x - sprite1.rect.x, sprite2.rect.y - sprite1.rect.y]))) {
		return true;
	}
	else {
		return false;
	}
};
export var groupcollide = function (group1, group2, dokill1, dokill2) {
	var collide = Dict ();
	var collision = false;
	for (var sprite1 of group1) {
		for (var sprite2 of group2) {
			if (sprite1.rect.intersects (sprite2.rect)) {
				if (!__in__ (sprite1, collide.py_keys ())) {
					collide.py_setdefault (sprite1, []);
				}
				collide.py_get (sprite1).append (sprite2);
				var collision = true;
			}
		}
	}
	if (collision) {
		if (dokill1) {
			for (var sprite1 of collide.py_keys ()) {
				sprite1.kill ();
			}
		}
		if (dokill2) {
			for (var sprite1 of collide.py_keys ()) {
				for (var sprite2 of collide.py_get (sprite1)) {
					sprite2.kill ();
				}
			}
		}
	}
	return collide;
};
export var spritecollideany = function (sprite, group) {
	for (var _sprite of group) {
		if (sprite.rect.intersects (_sprite.rect)) {
			return true;
		}
	}
	return false;
};

//# sourceMappingURL=pyjsdl.sprite.map