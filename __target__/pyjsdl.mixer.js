// Transcrypt'ed from Python, 2022-03-23 20:43:11
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as Const from './pyjsdl.constants.js';
import * as env from './pyjsdl.env.js';
import {Time} from './pyjsdl.time.js';
import {Audio} from './pyjsdl.pyjsobj.js';
var __name__ = 'pyjsdl.mixer';
export var __docformat__ = 'restructuredtext';
export var Mixer =  __class__ ('Mixer', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		Sound._mixer = self;
		Channel._mixer = self;
		self.Sound = Sound;
		self.Channel = self._get_channel;
		self._channel_max = 8;
		self._channels = dict ({});
		self._channel_available = (function () {
			var __accu0__ = [];
			for (var id = self._channel_max - 1; id > -(1); id--) {
				__accu0__.append (id);
			}
			return __accu0__;
		}) ();
		self._channel_active = [];
		self._channel_reserved = [];
		self._channel_reserved_num = 0;
		self._channel_process = set ();
		self._channel_process_end = set ();
		for (var id = 0; id < self._channel_max; id++) {
			self._get_channel (id);
		}
		self.music = Music ();
		self._time = Time ();
		self._timerid = 0;
		self._processing = false;
		self._active = false;
		self._initialized = true;
	});},
	get init () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		if (!(self._initialized)) {
			self._initialized = true;
		}
		return null;
	});},
	get pre_init () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		self.init ();
		return null;
	});},
	get quit () {return __get__ (this, function (self) {
		self.music._channel.stop ();
		self.stop ();
		self._initialized = false;
		return null;
	});},
	get get_init () {return __get__ (this, function (self) {
		if (self._initialized) {
			return self._initialized;
		}
		else {
			return null;
		}
	});},
	get stop () {return __get__ (this, function (self) {
		for (var id of self._channel_active) {
			if (id > -(1)) {
				self._channels [id].stop ();
			}
		}
		return null;
	});},
	get fadeout () {return __get__ (this, function (self, time) {
		for (var id of self._channel_active) {
			if (id > -(1)) {
				self._channels [id].fadeout (time);
			}
		}
		return null;
	});},
	get pause () {return __get__ (this, function (self) {
		for (var id of self._channel_active) {
			if (id > -(1)) {
				self._channels [id].pause ();
			}
		}
		return null;
	});},
	get unpause () {return __get__ (this, function (self) {
		for (var id of self._channel_active) {
			if (id > -(1)) {
				self._channels [id].unpause ();
			}
		}
		return null;
	});},
	get set_num_channels () {return __get__ (this, function (self, count) {
		if (count >= self._channel_max) {
			for (var id = self._channel_max; id < count; id++) {
				self._get_channel (id);
				self._channel_available.insert (0, id);
			}
			self._channel_max = count;
		}
		else if (count >= 0) {
			for (var id = count; id < self._channel_max; id++) {
				if (__in__ (str (id), self._channels.py_keys ())) {
					if (self._channels [id] !== null) {
						self._channels [id].stop ();
					}
					delete self._channels [id];
				}
				if (__in__ (id, self._channel_available)) {
					self._channel_available.remove (id);
				}
			}
			self._channel_max = count;
		}
		return null;
	});},
	get get_num_channels () {return __get__ (this, function (self) {
		return self._channel_max;
	});},
	get set_reserved () {return __get__ (this, function (self, count) {
		if (count > self._channel_max) {
			var count = self._channel_max;
		}
		else if (count < 0) {
			var count = 0;
		}
		self._channel_reserved_num = count;
		self._channel_reserved = [];
		for (var id = 0; id < self._channel_reserved_num; id++) {
			self._channel_reserved.append (id);
			if (__in__ (id, self._channel_available)) {
				self._channel_available.remove (id);
			}
		}
		return null;
	});},
	get find_channel () {return __get__ (this, function (self, force) {
		if (typeof force == 'undefined' || (force != null && force.hasOwnProperty ("__kwargtrans__"))) {;
			var force = false;
		};
		if (len (self._channel_available) > 0) {
			var id = self._channel_available.py_pop ();
			self._channel_available.insert (0, id);
			return self._channels [id];
		}
		if (self._channel_reserved_num) {
			if (len (self._channel_reserved) > 0) {
				var id = self._channel_reserved.py_pop ();
				self._channel_reserved.insert (0, id);
				return self._channels [id];
			}
		}
		if (!(force)) {
			return null;
		}
		var longest = null;
		var longest_reserved = null;
		for (var id of self._channel_active) {
			if (id > self._channel_reserved_num - 1) {
				var longest = id;
				break;
			}
			else if (id > -(1)) {
				if (longest_reserved === null) {
					var longest_reserved = id;
				}
			}
		}
		if (longest !== null) {
			var channel = longest;
		}
		else if (longest_reserved !== null) {
			var channel = longest_reserved;
		}
		else {
			var channel = 0;
		}
		return self._channels [channel];
	});},
	get get_busy () {return __get__ (this, function (self) {
		for (var id of self._channel_active) {
			if (id > -(1)) {
				if (self._channels [id]._active) {
					return true;
				}
			}
		}
		return false;
	});},
	get _process () {return __get__ (this, function (self, id) {
		self._channel_process.add (id);
		if (!(self._processing)) {
			self._processing = true;
			self._timerid = self._time.set_interval (self, 10);
		}
	});},
	get run () {return __get__ (this, function (self) {
		if (self._active) {
			for (var id of self._channel_process) {
				var complete = self._channels [id]._process ();
				if (complete) {
					self._channel_process_end.add (id);
				}
			}
			if (len (self._channel_process_end) > 0) {
				for (var i = 0; i < len (self._channel_process_end); i++) {
					var id = self._channel_process_end.py_pop ();
					self._channel_process.discard (id);
				}
				if (len (self._channel_process) == 0) {
					self._processing = false;
					self._time.clear_interval (self._timerid);
				}
			}
		}
		else {
			if (len (self._channel_process) > 0) {
				for (var i = 0; i < len (self._channel_process); i++) {
					self._channel_process.py_pop ();
				}
			}
			self._processing = false;
			self._time.clear_interval (self._timerid);
		}
	});},
	get _activate_channel () {return __get__ (this, function (self, id) {
		if (id > self._channel_reserved_num - 1) {
			self._channel_available.remove (id);
		}
		else if (id > -(1)) {
			self._channel_reserved.remove (id);
		}
		self._channel_active.append (id);
		self._active = true;
	});},
	get _deactivate_channel () {return __get__ (this, function (self, id) {
		self._channel_active.remove (id);
		if (len (self._channel_active) == 0) {
			self._active = false;
		}
	});},
	get _restore_channel () {return __get__ (this, function (self, id) {
		if (id > self._channel_reserved_num - 1) {
			self._channel_available.append (id);
		}
		else if (id > -(1)) {
			self._channel_reserved.append (id);
		}
	});},
	get _retrieve_channel () {return __get__ (this, function (self) {
		if (len (self._channel_available) > 0) {
			var id = self._channel_available.py_pop ();
			self._channel_active.append (id);
			self._active = true;
			return self._channels [id];
		}
		else {
			return null;
		}
	});},
	get _get_channel () {return __get__ (this, function (self, id) {
		if (__in__ (str (id), self._channels.py_keys ())) {
			return self._channels [id];
		}
		else {
			return Channel (id);
		}
	});},
	get _register_channel () {return __get__ (this, function (self, channel) {
		var id = channel._id;
		if (id < self._channel_max) {
			self._channels [id] = channel;
		}
		else {
			var __except0__ = AttributeError ('Channel not available.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});}
});
export var Sound =  __class__ ('Sound', [object], {
	__module__: __name__,
	_id: 0,
	_mixer: null,
	get __init__ () {return __get__ (this, function (self, sound_file, id) {
		if (typeof id == 'undefined' || (id != null && id.hasOwnProperty ("__kwargtrans__"))) {;
			var id = null;
		};
		if (id === null) {
			self._id = Sound._id;
			Sound._id++;
		}
		else {
			self._id = id;
		}
		if (isinstance (sound_file, str)) {
			self._sound_object = Audio (sound_file.py_replace ('\\', '/'));
		}
		else {
			self._sound_object = sound_file;
		}
		self._sound_objects = [];
		self._sound_objects.append (self._sound_object);
		self._channel = null;
		self._volume = 1.0;
	});},
	get play () {return __get__ (this, function (self, loops, maxtime, fade_ms) {
		if (typeof loops == 'undefined' || (loops != null && loops.hasOwnProperty ("__kwargtrans__"))) {;
			var loops = 0;
		};
		if (typeof maxtime == 'undefined' || (maxtime != null && maxtime.hasOwnProperty ("__kwargtrans__"))) {;
			var maxtime = 0;
		};
		if (typeof fade_ms == 'undefined' || (fade_ms != null && fade_ms.hasOwnProperty ("__kwargtrans__"))) {;
			var fade_ms = 0;
		};
		self._channel = self._mixer._retrieve_channel ();
		if (self._channel) {
			self._channel._play (self, loops, maxtime, fade_ms);
		}
		return self._channel;
	});},
	get stop () {return __get__ (this, function (self) {
		var channels = self._mixer._channels;
		for (var id of self._mixer._channel_active) {
			if (id > -(1)) {
				try {
					if (channels [id]._sound._id == self._id) {
						channels [id].stop ();
					}
				}
				catch (__except0__) {
					if (isinstance (__except0__, AttributeError)) {
						continue;
					}
					else {
						throw __except0__;
					}
				}
			}
		}
		return null;
	});},
	get fadeout () {return __get__ (this, function (self, time) {
		var channels = self._mixer._channels;
		for (var id of self._mixer._channel_active) {
			if (id > -(1)) {
				try {
					if (channels [id]._sound._id == self._id) {
						channels [id].fadeout (time);
					}
				}
				catch (__except0__) {
					if (isinstance (__except0__, AttributeError)) {
						continue;
					}
					else {
						throw __except0__;
					}
				}
			}
		}
		return null;
	});},
	get set_volume () {return __get__ (this, function (self, volume) {
		if (volume < 0.0) {
			var volume = 0.0;
		}
		else if (volume > 1.0) {
			var volume = 1.0;
		}
		self._volume = volume;
		return null;
	});},
	get get_volume () {return __get__ (this, function (self) {
		return self._volume;
	});},
	get get_num_channels () {return __get__ (this, function (self) {
		var channels = self._mixer._channels;
		var channel = 0;
		for (var id of self._mixer._channel_active) {
			if (id > -(1)) {
				try {
					if (channels [id]._sound._id == self._id) {
						channel++;
					}
				}
				catch (__except0__) {
					if (isinstance (__except0__, AttributeError)) {
						continue;
					}
					else {
						throw __except0__;
					}
				}
			}
		}
		return channel;
	});},
	get get_length () {return __get__ (this, function (self) {
		return self._sound_object.getDuration ();
	});},
	get get_sound_object () {return __get__ (this, function (self) {
		if (len (self._sound_objects) > 0) {
			var sound_object = self._sound_objects.py_pop ();
		}
		else {
			var sound_object = Audio (self._sound_object.getSrc ());
		}
		return sound_object;
	});}
});
export var Channel =  __class__ ('Channel', [object], {
	__module__: __name__,
	_mixer: null,
	get __init__ () {return __get__ (this, function (self, id) {
		self._id = id;
		self._sound = null;
		self._sound_object = null;
		self._active = false;
		self._pause = false;
		self._loops = 0;
		self._volume = 1.0;
		self._lvolume = 1.0;
		self._rvolume = 1.0;
		self._queue = null;
		self._endevent = null;
		self._time = 0;
		self._maxtime = 0;
		self._fadein = 0;
		self._fadeout = 0;
		self._dvol = 1.0;
		self._timerid = 0;
		self._mixer._register_channel (self);
		self._ended_handler = (function __lambda__ (event) {
			return self._onended (event);
		});
	});},
	get _set_sound () {return __get__ (this, function (self, sound) {
		self._sound = sound;
		self._sound_object = self._sound.get_sound_object ();
		self._sound_object.element.onended = self._ended_handler;
	});},
	get _reset_sound () {return __get__ (this, function (self) {
		self._active = false;
		var restart = !(self._pause);
		if (!(self._sound)) {
			return ;
		}
		self._sound_object.element.pause ();
		self._sound_object.element.currentTime = 0;
		if (restart) {
			self._sound_object.play ();
		}
		self._active = true;
	});},
	get play () {return __get__ (this, function (self, sound, loops, maxtime, fade_ms) {
		if (typeof loops == 'undefined' || (loops != null && loops.hasOwnProperty ("__kwargtrans__"))) {;
			var loops = 0;
		};
		if (typeof maxtime == 'undefined' || (maxtime != null && maxtime.hasOwnProperty ("__kwargtrans__"))) {;
			var maxtime = 0;
		};
		if (typeof fade_ms == 'undefined' || (fade_ms != null && fade_ms.hasOwnProperty ("__kwargtrans__"))) {;
			var fade_ms = 0;
		};
		if (self._sound) {
			var volume = self._volume;
			self.stop ();
			self._volume = volume;
		}
		self._set_sound (sound);
		self._mixer._activate_channel (self._id);
		self._loops = loops;
		if (maxtime) {
			self._maxtime = maxtime / 1000.0;
			self._timerid = self._mixer._time.set_timeout (self, maxtime);
		}
		if (fade_ms) {
			self._fadein = fade_ms / 1000.0;
			self._mixer._process (self._id);
			self._sound_object.element.volume = 0.01;
		}
		else {
			self._sound_object.element.volume = self._volume * self._sound._volume;
		}
		self._sound_object.element.play ();
		if (self._sound_object.element.paused) {
			self.stop ();
		}
		else {
			self._active = true;
		}
		return null;
	});},
	get _play () {return __get__ (this, function (self, sound, loops, maxtime, fade_ms) {
		self._set_sound (sound);
		self._loops = loops;
		if (maxtime) {
			self._maxtime = maxtime / 1000.0;
			self._timerid = self._mixer._time.set_timeout (self, maxtime);
		}
		if (fade_ms) {
			self._fadein = fade_ms / 1000.0;
			self._mixer._process (self._id);
			self._sound_object.element.volume = 0.01;
		}
		else {
			self._sound_object.element.volume = self._volume * self._sound._volume;
		}
		self._sound_object.element.play ();
		if (self._sound_object.element.paused) {
			self.stop ();
		}
		else {
			self._active = true;
		}
		return null;
	});},
	get _replay () {return __get__ (this, function (self) {
		self._sound_object.element.volume = self._volume * self._sound._volume;
		self._sound_object.element.play ();
		if (self._sound_object.element.paused) {
			self.stop ();
		}
		else {
			self._active = true;
		}
	});},
	get _process () {return __get__ (this, function (self) {
		if (self._active) {
			var complete = false;
		}
		else {
			var complete = true;
			return complete;
		}
		self._time = self._sound_object.element.currentTime;
		var complete = false;
		if (self._fadein) {
			if (self._time < self._fadein) {
				self._dvol = self._time / self._fadein;
				self._sound_object.element.volume = (self._volume * self._sound._volume) * self._dvol;
			}
			else {
				self._fadein = 0;
				var complete = true;
				self._sound_object.element.volume = self._volume * self._sound._volume;
			}
		}
		else if (self._fadeout) {
			if (self._time < self._fadeout) {
				self._dvol = 1.0 - self._time / self._fadeout;
				self._sound_object.element.volume = (self._volume * self._sound._volume) * self._dvol;
			}
			else {
				self._fadeout = 0;
				var complete = true;
				self._dvol = 0.01;
				self._sound_object.element.volume = (self._volume * self._sound._volume) * self._dvol;
				self._loops = 0;
				self._onended ();
			}
		}
		return complete;
	});},
	get run () {return __get__ (this, function (self) {
		var time = self._sound_object.element.currentTime;
		if (self._maxtime) {
			if (time > self._maxtime) {
				self._maxtime = 0;
				self._loops = 0;
				self.stop ();
			}
			else {
				self._timerid = self._mixer._time.set_timeout (self, 10);
			}
		}
	});},
	get _onended () {return __get__ (this, function (self, event) {
		if (!(self._loops)) {
			if (!(self._queue)) {
				self.stop ();
			}
			else {
				self.play (self._queue);
			}
		}
		else {
			if (self._loops > 0) {
				self._loops--;
			}
			self._replay ();
		}
	});},
	get stop () {return __get__ (this, function (self) {
		if (self._sound) {
			self._active = false;
			self._mixer._deactivate_channel (self._id);
			self._sound_object.element.onended = null;
			self._sound_object.element.pause ();
			self._sound_object.element.currentTime = 0;
			self._sound._sound_objects.append (self._sound_object);
			self._sound = null;
			self._sound_object = null;
			self._queue = null;
			self._pause = false;
			self._loops = 0;
			if (self._maxtime) {
				self._mixer._time.clear_timeout (self._timerid);
				self._maxtime = 0;
			}
			self._fadein = 0;
			self._fadeout = 0;
			self._volume = 1.0;
			self._lvolume = 1.0;
			self._rvolume = 1.0;
			self._mixer._restore_channel (self._id);
			if (self._endevent !== null) {
				env.event.post (self._endevent);
			}
		}
		return null;
	});},
	get pause () {return __get__ (this, function (self) {
		if (self._sound) {
			if (!(self._pause)) {
				self._sound_object.pause ();
				self._pause = true;
			}
		}
		return null;
	});},
	get unpause () {return __get__ (this, function (self) {
		if (self._sound) {
			if (self._pause) {
				self._sound_object.play ();
				self._pause = false;
			}
		}
		return null;
	});},
	get fadeout () {return __get__ (this, function (self, time) {
		if (self._sound) {
			self._fadeout = self._sound_object.element.currentTime + time / 1000.0;
			self._mixer._process (self._id);
		}
		return null;
	});},
	get set_volume () {return __get__ (this, function (self, volume) {
		if (volume < 0.0) {
			var volume = 0.0;
		}
		else if (volume > 1.0) {
			var volume = 1.0;
		}
		self._volume = volume;
		if (self._active) {
			self._sound_object.element.volume = self._volume * self._sound._volume;
		}
		return null;
	});},
	get get_volume () {return __get__ (this, function (self) {
		return self._volume;
	});},
	get get_busy () {return __get__ (this, function (self) {
		return self._active;
	});},
	get get_sound () {return __get__ (this, function (self) {
		return self._sound;
	});},
	get queue () {return __get__ (this, function (self, sound) {
		if (!(self._sound)) {
			self.play (sound);
		}
		else {
			self._queue = sound;
		}
	});},
	get get_queue () {return __get__ (this, function (self) {
		return self._queue;
	});},
	get set_endevent () {return __get__ (this, function (self, eventType) {
		if (typeof eventType == 'undefined' || (eventType != null && eventType.hasOwnProperty ("__kwargtrans__"))) {;
			var eventType = null;
		};
		if (eventType !== null) {
			if (self._endevent === null || self._endevent.py_metatype != eventType) {
				self._endevent = env.event.Event (eventType);
			}
		}
		else {
			self._endevent = null;
		}
	});},
	get get_endevent () {return __get__ (this, function (self) {
		if (self._endevent !== null) {
			return self._endevent.py_metatype;
		}
		else {
			return Const.NOEVENT;
		}
	});}
});
export var Music =  __class__ ('Music', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._channel = Channel (-(1));
		self._sound = null;
		self._queue = null;
		self._volume = 1.0;
	});},
	get load () {return __get__ (this, function (self, sound_file) {
		if (self._channel.get_busy ()) {
			self._channel.stop ();
		}
		self._sound = Sound (sound_file);
		return null;
	});},
	get unload () {return __get__ (this, function (self) {
		self._channel.stop ();
		self._sound = null;
		return null;
	});},
	get play () {return __get__ (this, function (self, loops, maxtime, fade_ms) {
		if (typeof loops == 'undefined' || (loops != null && loops.hasOwnProperty ("__kwargtrans__"))) {;
			var loops = 0;
		};
		if (typeof maxtime == 'undefined' || (maxtime != null && maxtime.hasOwnProperty ("__kwargtrans__"))) {;
			var maxtime = 0;
		};
		if (typeof fade_ms == 'undefined' || (fade_ms != null && fade_ms.hasOwnProperty ("__kwargtrans__"))) {;
			var fade_ms = 0;
		};
		self._channel.set_volume (self._volume);
		self._channel.play (self._sound, loops, maxtime, fade_ms);
		if (self._queue) {
			self._channel.queue (self._queue);
			self._sound = self._queue;
			self._queue = null;
		}
		return null;
	});},
	get rewind () {return __get__ (this, function (self) {
		if (self._channel.get_busy ()) {
			self._channel._reset_sound ();
		}
	});},
	get stop () {return __get__ (this, function (self) {
		self._channel.stop ();
		return null;
	});},
	get pause () {return __get__ (this, function (self) {
		self._channel.pause ();
		return null;
	});},
	get unpause () {return __get__ (this, function (self) {
		self._channel.unpause ();
		return null;
	});},
	get fadeout () {return __get__ (this, function (self, time) {
		self._channel.fadeout (time);
		return null;
	});},
	get set_volume () {return __get__ (this, function (self, volume) {
		if (volume < 0.0) {
			var volume = 0.0;
		}
		else if (volume > 1.0) {
			var volume = 1.0;
		}
		self._volume = volume;
		if (self._channel.get_busy ()) {
			self._channel.set_volume (volume);
		}
		return null;
	});},
	get get_volume () {return __get__ (this, function (self) {
		return self._volume;
	});},
	get get_busy () {return __get__ (this, function (self) {
		return self._channel.get_busy ();
	});},
	get queue () {return __get__ (this, function (self, sound_file) {
		if (!(self._sound)) {
			return null;
		}
		if (!(self._channel.get_busy ())) {
			self._queue = Sound (sound_file);
		}
		else {
			self._sound = Sound (sound_file);
			self._channel.queue (self._sound);
		}
	});},
	get set_endevent () {return __get__ (this, function (self, eventType) {
		if (typeof eventType == 'undefined' || (eventType != null && eventType.hasOwnProperty ("__kwargtrans__"))) {;
			var eventType = null;
		};
		self._channel.set_endevent (eventType);
		return null;
	});},
	get get_endevent () {return __get__ (this, function (self) {
		return self._channel.get_endevent ();
	});}
});

//# sourceMappingURL=pyjsdl.mixer.map