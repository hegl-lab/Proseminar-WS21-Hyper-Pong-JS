from math import sqrt, atan2

class complexNew:

    # new class for complex numbers, to circumvent issues with transcrypt

    def __init__(self, x, y):
        self.real = x
        self.imag = y
        self._arg = sqrt(x*x + y*y)
        self._phase = atan2(y, x)

    def __add__(self, other):
        return complexNew(self.real + other.real, self.imag + other.imag)

    def __sub__(self, other):
        return complexNew(self.real - other.real, self.imag - other.imag)

    def __mul__(self, other):
        return complexNew(self.real * other.real - self.imag * other.imag, self.real * other.imag + self.imag * other.real)

    def __truediv__(self, other):
        return complexNew((self.real * other.real + self.imag * other.imag) / self._arg, (self.real * other.imag - self.imag * other.real) / self._arg)

    def __abs__(self):
        return self._arg

    def conjugate(self):
        return complexNew(self.real, -self.imag)

    def get_arg(self):
        return self._arg

    def get_phase(self):
        return self._phase

    def divide_real(self, x):
        return complexNew(self.real / x, self.imag / x)

    def mult_real(self, x):
        return complexNew(self.real * x, self.imag * x)

def absNew(z : complexNew):
    return z.get_arg()
