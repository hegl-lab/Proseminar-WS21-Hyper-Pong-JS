from color import Color, NoFill
#from array import array
from math import pi, atan2, sqrt
#import os, sys
#import numpy as np
from complex_new import *



def isNearZero(z, eps : float = 1.0e-8):
    return (abs(z) < eps)


def isApproxReal(z, eps : float = 1.0e-8):
    if type(z) is int or type(z) is float:
        return True
    if type(z) is complexNew:
        return (abs(z.imag) < eps)
    elif type(z) is PDPoint:
        return (abs(z.getImagPart()) < eps)
    else:
        raise TypeError()

def arg(z):
    if type(z) is int or type(z) is float:
        return 0.0
    if type(z) is complexNew:
        return atan2(z.imag, z.real)
    elif type(z) is PDPoint:
        return z.getArgument()
    else:
        raise TypeError()

# symmetric == True:  returns phi % 2pi in [-pi, pi)
# symmetric == False: returns phi % 2pi in [0, 2*pi)
def mod2pi(phi : float, symmetric : bool = True):

    while phi >= 2*pi:
        phi -= 2*pi
    while phi < 0:
        phi += 2*pi

    if symmetric:
        if phi >= pi:
            phi -= 2*pi

    return phi

class PDObject:

    # Unique ID to be able to identify the object
    # self._uid : int

    def __init__(self):
        self._uid = None

    # returns self._id
    def getID(self):
        if self._uid == None:
            raise TypeError("The ID of the point was not set yet.")
        else:
            return self._uid

    # sets self._uid to uid
    def setID(self, uid : int):
        self._uid

class PDPoint(PDObject):

    # Member variables

    # self._point : complex

    # self._radius : float
    # self._argument : float

    # self._color : Color
    # self._size : float

    def __init__(self, point : complexNew, color : Color = Color(), size : float = 0.01):

        self._point = point

        self._radius = sqrt(point.real*point.real + point.imag*point.imag)
        self._argument = arg(point)

        self._color = color
        self._size = size

    def __eq__(self, other):
        if type(other) is complexNew:
            return isNearZero(abs(self._point - other))
        elif type(other) is PDPoint:
            return isNearZero(abs(self._point - other.getComplex()))
        else:
            raise TypeError()

    def __add__(self, other):
        if type(other) is complexNew:
            return PDPoint(self._point.__add__(other))
        elif type(other) is PDPoint:
            return PDPoint(self._point.__add__(other.getComplex()))
        else:
            raise TypeError()

    def __sub__(self, other):
        if type(other) is complexNew:
            return PDPoint(self._point.__sub__(other))
        elif type(other) is PDPoint:
            return PDPoint(self._point.__sub__(other.getComplex()))
        else:
            raise TypeError()

    def __mul__(self, other):
        if type(other) is complexNew:
            return PDPoint(self._point * other)
        elif type(other) is float or type(other) is int:
            return PDPoint(self._point.mult_real(other))
        elif type(other) is PDPoint:
            return PDPoint(self._point * other.getComplex())
        else:
            raise TypeError()

    def __truediv__(self, other):
        if type(other) is complexNew or type(other) is float or type(other) is int:
            return PDPoint(self._point / other)
        elif type(other) is PDPoint:
            return PDPoint(self._point / other.getComplex())
        else:
            raise TypeError()

    def __abs__(self):
        return abs(self._point)


    # Calculates inverson at unit circle
    def getInversion(self):
        if self.isZero():
            raise ArithmeticError("Cannot invert point 0+0j.")
        else:
            return PDPoint(self._point.divide_real(self._point.get_arg() * self._point.get_arg()))

    # Normalizes the point (returns point with same argument but radius = 1)
    def getNormalization(self):
        if self.isZero():
            raise ArithmeticError("Cannot normalize point 0+0j.")
        else:
            return PDPoint(complexNew(self._point.real / self._point.get_arg(), self._point.imag / self._point.get_arg()))

    def scale_with_real(self, this_x):
        return PDPoint(self._point.mult_real(this_x))

    def getRealPart(self):
        return self._point.real

    def getImagPart(self):
        return self._point.imag

    def getCartesic(self):
        return self.getRealPart(), self.getImagPart()

    def getComplex(self):
        return self._point

    def getRadius(self):
        return self._radius

    def getArgument(self):
        return self._argument

    def getPolar(self):
        return self.getRadius(), self.getArgument()

    def isIdeal(self):
        return isNearZero(abs(1.0 - self._radius))

    def isZero(self):
        return isNearZero(self._radius)

    def isOnPD(self):
        return (self._radius <= 1.0 or self.isIdeal())

    def conjugate(self):
        return PDPoint(self._point.conjugate())

class PDGeodesic(PDObject):

     #Member variables

    #self._point1 : PDPoint
    #self._point2 : PDPoint

    #self._isArc : bool
    #self._center : PDPoint #[0+0j if diameter]
    #self._radius : float #[0 if diameter]

    #self._width : float #(0...inf)
    #self._edge_color : Color
    #self._fill_color : Color

    def __init__(self, point1 : PDPoint, point2 : PDPoint, edge_color : Color = Color(), fill_color : Color = NoFill, width : float = 0.0):

        if point1 == point2:
            raise ValueError("Points for defining a geodesic cannot be equal.")

        if width < 0:
            raise ValueError("Width of geodesic cannot be negative.")

        self._point1 = point1
        self._point2 = point2

        self._width = width
        self._edge_color = edge_color
        self._fill_color = fill_color

        self.__calculate()
        self.__isdiameter()

    def __isdiameter(self):
        P = self._point1.getComplex()
        Q = self._point2.getComplex()
        Q_arg = Q.get_arg()
        if self._point1.isZero()== True:
            return True
        elif abs((Q.real * P.imag - Q.imag * P.real) / Q_arg) < 1.0e-8:
            return True
        else:
            return False

    def __calculate(self):

            if self.__isdiameter():
                self._isArc = False
                self._center = PDPoint(complexNew(0.0,0.0))
                self._radius = 0.0
            else:

                self._isArc = True

            # see: https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model#Lines

                P = self._point1
                Q = self._point2

                Pinv = P.getInversion()
                Qinv = Q.getInversion()

                M = PDPoint(complexNew(0.5*(P.getRealPart() + Pinv.getRealPart()),0.5*(P.getImagPart() + Pinv.getImagPart())))
                N = PDPoint(complexNew(0.5*(Q.getRealPart() + Qinv.getRealPart()),0.5*(Q.getImagPart() + Qinv.getImagPart())))

            # calculate normalized direction "vectors" of the perpendiculars
                m_dir = PDPoint(complexNew(Pinv.getRealPart() - P.getRealPart(),Pinv.getImagPart() - P.getImagPart())).getNormalization()
                m_dir = PDPoint(complexNew(- m_dir.getImagPart(), m_dir.getRealPart()))
                n_dir = PDPoint(complexNew(Qinv.getRealPart() - Q.getRealPart(),Qinv.getImagPart() - Q.getImagPart())).getNormalization()
                n_dir = PDPoint(complexNew(- n_dir.getImagPart(), n_dir.getRealPart()))

            # find intersection of m : M + m_dir * t and n : N + n_dir * s

                X=N.__sub__(M)
                t=(-n_dir.getImagPart()*X.getRealPart()+n_dir.getRealPart()*X.getImagPart())/(-n_dir.getImagPart()*m_dir.getRealPart()+n_dir.getRealPart()*m_dir.getImagPart())

                self._center = M.__add__(m_dir.scale_with_real(t))
                temp1 = P.__sub__(self._center)
                self._radius = temp1.getRadius()
