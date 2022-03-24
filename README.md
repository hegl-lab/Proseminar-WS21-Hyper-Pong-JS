# hyper-pong-js

This is javascript version of the python game written by a group of students in the winter semester of 2021, at HEGL. Their code can be found in the following [github repository](https://github.com/hegl-lab/proseminar-wise21-game). 

The original python code relied heavily on the [pygame](https://www.pygame.org/news) package. Conveniently, the [pyjsdl-ts](https://gatc.ca/projects/pyjsdl-ts/) project provides and alternate implementation of this package, that can be used together with a transcription software like [transcrypt](https://www.transcrypt.org).

After substianial rewrites of the original python code (no dependencies allowed on e.g. scipy, and some other difference between how python and javascript works), this resulted in an automatic generation of javascript code, which can then be easily bound into a html page. During the rewrite, to get rid of the scipy dependencies, the intersection functionality of the [hyperbolic](https://pypi.org/project/hyperbolic/) package was taken as a substitute.

The code still runs in python (just execute "python maingame.py"), just a few lines of code in the beginning need to be commented out, because transcrypt cannot work with it.

A running website version of this javascript code can be found [here](http://hyper-pong.hegl.mathi.uni-heidelberg.de). To learn more about the creation of the original python code, read this [blog post](https://hegl.mathi.uni-heidelberg.de/hyperbolic-ping-pong-game/).

### Details on javascript generation
The code was tested under the following version:
- python: 3.6.13
- pyjsdl-ts: 0.25
- transcrypt: 3.7.16

Basically, get the pyjsdl-ts code from the following [github repository](https://github.com/jggatc/pyjsdl-ts). Then add the folder named "pyjsdl" to the root directory of this project. Make sure, that the marked lines in the beginning of maingame.py are commented out. Then run the following command:

    `transcrypt -n -m maingame.py`
  
in the root directory of this project. The -n flag prevents minification of the javascript code, and -m ensures that maps are created (without which some javascript issues occurred on the website).
