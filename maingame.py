import math
import random
from complex_new import *

platform = None

################################################################################
# If you want to execute in python, use this section. Comment out for transcrypt
# import os, sys
# try:
#     import pygame
#     platform = 'pc'
# except ImportError:
#     sys.exit()
################################################################################

from PDneu import *

if platform is None:
    import pyjsdl as pygame     ###
    from pyjsdl.pylib import os
    platform = 'js'

load_images = True
load_images_pygame = True

#add sound
#sound = pygame.mixer.Sound('meow.mp3')

# colours used
orange  = ( 200, 140, 0)
turquoise = (0,206,209)
grey = (112, 128, 144)
red     = ( 153, 0, 0)
green   = ( 0, 153, 0)
blue = ( 72, 61, 139)
black = ( 0, 0, 0)
white   = ( 255, 255, 255)

width = 801
height = 801

#keeps track of the scores
score_value_player1 = 0
score_value_player2 = 0


ball_colour = white
movement = 0
direction = 1

#paddle information
angle1 = 0
angle_rot1 = 0

angle2 = 0
angle_rot2 = 0

#1 (see def ballgeodesic)
wallup_p1 = PDPoint(complexNew(0.7,0.5))
wallup_p2 = PDPoint(complexNew(-0.7,0.5))
wallup = PDGeodesic(wallup_p1, wallup_p2)
wallupcenter = wallup._center.getComplex()
wallupcenter_x = wallupcenter.real
wallupcenter_y = wallupcenter.imag
wallupradius = wallup._radius

#2
wallplayer2_p1 = PDPoint(complexNew(0.7,0.5))
wallplayer2_p2 = PDPoint(complexNew(0.7,-0.5))
wallplayer2 = PDGeodesic(wallplayer2_p1, wallplayer2_p2)
wallplayer2center = wallplayer2._center.getComplex()
wallplayer2center_x = wallplayer2center.real
wallplayer2center_y = wallplayer2center.imag
wallplayer2radius = wallplayer2._radius

#3
walldown_p1 = PDPoint(complexNew(0.7,-0.5))
walldown_p2 = PDPoint(complexNew(-0.7,-0.5))
walldown = PDGeodesic(walldown_p1, walldown_p2)
walldowncenter = walldown._center.getComplex()
walldowncenter_x = walldowncenter.real
walldowncenter_y = walldowncenter.imag
walldownradius = walldown._radius

#4
wallplayer1_p1 = PDPoint(complexNew(-0.7,0.5))
wallplayer1_p2 = PDPoint(complexNew(-0.7,-0.5))
wallplayer1 = PDGeodesic(wallplayer1_p1, wallplayer1_p2)
wallplayer1center = wallplayer1._center.getComplex()
wallplayer1center_x = wallplayer1center.real
wallplayer1center_y = wallplayer1center.imag
wallplayer1radius = wallplayer1._radius

wallradius = 0
wallcenter = (0,0)
paddleradius = math.sqrt(0.6)

#Creating first geodesic
ballgeodesiccenter_x = 0
ballgeodesiccenter_y = 0
ballgeodesicradius = 0

maxrad = 10
#needed to find next ballgeodesic
helppoint_x = 0
helppoint_y = 0
solution = (0,0)
oldsolution = (0,0)

#needed to find correct direction
pseudopos = (0,0)

# shows wether the ball will be reset or not
start = True

# Initialize global variables
w1 = 0
w2 = 0
h1 = 0
h2 = 0
nextintersection = (0,0)
wall = 1
helpballpos = [0.0,0.0]

win = 5
quit = False

pressed_r = False
pressed_esc = False
pressed_w = False
pressed_s = False
pressed_up = False
pressed_down = False

if platform is None: # gives issues with regular python, but needed in javascript
    font_normal, font_small = 0
    clock, paddle1, paddle2, end_background = 0
    m_tangent, b_tangent = 0

def setup(x=500,y=500):
    global w1, w2, h1, h2
    global font_normal, font_small
    global clock, paddle1, paddle2, end_background
    # initialising pygame

    pygame.init()
    #pygame.mixer.init()

    font_normal = pygame.font.Font('pixChicago.ttf', 32)
    font_small = pygame.font.Font('pixChicago.ttf', 25)
    # open window
    screen = pygame.display.set_mode((x, y))

    # title
    pygame.display.set_caption("Ping Pong")

    # screen update
    clock = pygame.time.Clock()

    return screen

# This function was mostly taken from the hyperbolic package
def circ_inter_circ(r1, cx1, cy1, r2, cx2, cy2):
    ''' Returns two points of intersection of the circles as well as a code for
        the number of intersections:
         -1: infinite intersections
         0: zero intersections
         1: one intersection
         2: two intersections
        Inputs are for the two circles: radius, x coordinate of center, y
            coordinate of center
    '''
    swap = r1 > r2
    if swap:  # Ensure that circ1 is smaller
        r1, r2 = r2, r1
        cx1, cx2 = cx2, cx1
        cy1, cy2 = cy2, cy1

    # Initialize output
    ix1 = 0.0
    iy1 = 0.0
    ix2 = 0.0
    iy2 = 0.0

    # Center-to-center distance
    dx, dy = cx1 - cx2, cy1 - cy2
    d = math.sqrt(dx**2 + dy**2)
    # Check if circles are the same (infinite intersections)
    if isNearZero(d) and isNearZero(r1-r2):
        return -1, ix1, iy1, ix2, iy2
    # Check if circles are concentric (no intersection)
    if isNearZero(d):
        return 0, ix1, iy1, ix2, iy2
    # Check for single intersection
    if isNearZero(r1+r2-d) or isNearZero(r2-r1-d):
        ix1 = (dx / d) * r2 + cx2
        iy1 = (dy / d) * r2 + cy2
        return 1, ix1, iy1, ix2, iy2
    # Check if small circle fully contained or separate (no intersection)
    if d+r1 < r2 or r1+r2 < d:
        return 0, ix1, iy1, ix2, iy2
    # Calculate two intersections
    t = (r1**2 - d**2 - r2**2) / (-2 * d * r2)  # Law of cosines
    if t > 1: t = 1
    elif t < -1: t = -1
    diffRad = math.acos(t)
    centerRad = math.atan2(dy, dx)
    ix1 = cx2 + r2 * math.cos(centerRad-diffRad)
    iy1 = cy2 + r2 * math.sin(centerRad-diffRad)
    ix2 = cx2 + r2 * math.cos(centerRad+diffRad)
    iy2 = cy2 + r2 * math.sin(centerRad+diffRad)
    if swap:
        return 2, ix1, iy1, ix2, iy2
    else:
        return 2, ix2, iy2, ix1, iy1

# This function was mostly taken from the hyperbolic package
def circ_inter_line(r, cx, cy, m, b):
    ''' Returns two points of intersection of the circle and lineas well as a
        code for the number of intersections:
         0: zero intersections
         1: one intersection
         2: two intersections
        Inputs are a circle and a line: radius, x coordinate of center, y
            coordinate of center, then line in the format m, b for m*x+b
            representation
    '''
    # Choose as the two points that represent the line: (0, c), (1,c+m)
    ldx = 1.0
    ldy = m
    #ldx, ldy = line.x2-line.x1, line.y2-line.y1
    # if util.nearZero(ldx) and util.nearZero(ldy):
    #     raise InsufficientPrecision()
    #cx, cy, r = circ.cx, circ.cy, circ.r
    x1, y1, x2, y2 = -cx, b-cy, 1.0-cx, b+m-cy
    # Calculate angles and minimum distance from circle center to line
    lineRad = math.atan2(ldy, ldx)
    pRad = math.atan2(y1, x1)
    pMag = math.sqrt(x1**2 + y1**2)
    d = pMag * math.sin(pRad - lineRad)
    negate = d < 0
    if negate: d = -d
    # Initialize output
    ix1 = 0.0
    iy1 = 0.0
    ix2 = 0.0
    iy2 = 0.0

    # Check for single intersection (tangent line)
    if isNearZero(d - r):
        ix, iy = -r*math.sin(lineRad), r*math.cos(lineRad)
        if negate:
            ix, iy = -ix, -iy
        ix1 = cx+ix
        iy1 = cy+iy
        return 1, ix1, iy1, ix2, iy2
    # Check if line is separate from circle (no intersection)
    if d > r:
        return 0, ix1, iy1, ix2, iy2
    # Calculate two intersections
    diffRad = math.acos(d / r)
    ix1, iy1 = -r*math.sin(lineRad-diffRad), r*math.cos(lineRad-diffRad)
    ix2, iy2 = -r*math.sin(lineRad+diffRad), r*math.cos(lineRad+diffRad)
    if negate:
        ix1, iy1, ix2, iy2 = -ix1, -iy1, -ix2, -iy2

    return 2, cx+ix1, cy+iy1, cx+ix2, cy+iy2

#function to change current ballgeodesic
def ballgeodesic(wall):
    global ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius
    global wallupcenter_x, wallupcenter_y, walldowncenter_x, walldowncenter_y
    global wallplayer1center_x, wallplayer1center_y, wallplayer2center_x, wallplayer2center_y
    global helppoint_x, helppoint_y
    global solution
    #see numeration of walls
    if wall == 1:
        helppoint(solution[0], solution[1], wallupcenter_x, wallupcenter_y)
    elif wall == 2:
        helppoint(solution[0], solution[1], wallplayer2center_x, wallplayer2center_y)
    elif wall == 3:
        helppoint(solution[0], solution[1], walldowncenter_x, walldowncenter_y)
    elif wall == 4:
        helppoint(solution[0], solution[1], wallplayer1center_x, wallplayer1center_y)
    else:
        print("ERROR input must be in the set of {1,2,3,4}")
    p1 = xy_to_PD(solution[0],solution[1])
    p2 = xy_to_PD(helppoint_x,helppoint_y)
    g = PDGeodesic(p1,p2)
    center = g._center.getComplex()
    ballgeodesiccenter_x = center.real
    ballgeodesiccenter_y = center.imag
    ballgeodesicradius = g._radius

#calculates a ball radius depending on the distance to the center
def ball_radius(x,y):
    if math.sqrt(x**2 + y**2) >= 1:
        return 0
    else:
        return 15*(1-(x**2 + y**2))

#originPos is position of the mid point in the rectangle (not using cords just general length of the rectangle)
#pos is the postion the origin is supposed to have
def blitRotate(surf, image, pos, originPos, angle):
    # offset from pivot to center
    image_rect = image.get_rect(topleft = (pos[0] - originPos[0], pos[1]-originPos[1]))
    offset_center_to_pivot = (pos[0] - image_rect.center[0], pos[1] - image_rect.center[1])

    # rotated offset from pivot to center
    angle_rad = -angle * math.pi / 180.0
    rotated_offset = (offset_center_to_pivot[0] * math.cos(angle_rad) - offset_center_to_pivot[1] * math.sin(angle_rad), offset_center_to_pivot[0] * math.sin(angle_rad) + offset_center_to_pivot[1] * math.cos(angle_rad))

    # rotated image center
    rotated_image_center = (pos[0] - rotated_offset[0], pos[1] - rotated_offset[1])

    # get a rotated image
    rotated_image = pygame.transform.rotate(image, angle)
    rotated_image_rect = rotated_image.get_rect(center = rotated_image_center)

    # rotate and blit the image
    surf.blit(rotated_image, rotated_image_rect)

#calculates the hyperbolic distance
def distance(z0,z1):
    z_diff = z0.__sub__(z1)
    z_diff_abs = z_diff.get_arg()
    z0_abs = z0.get_arg()
    z1_abs = z1.get_arg()
    this_dist = math.acosh(1+2*(z_diff_abs * z_diff_abs)/((1-z0_abs*z0_abs)*(1-z1_abs*z1_abs)))
    return abs(this_dist)

#we need to find the wall of the nextintersection
def findsolution2():
    global wall, oldsolution, solution
    solutions = [None, None, None, None]

    n, sol_x, sol_y = sol_wallupintersection()
    if n < 1:
        solutions[0] = None
    else:
        solutions[0] = (sol_x, sol_y)

    n, sol_x, sol_y = sol_wallplayer2intersection()
    if n < 1:
        solutions[1] = None
    else:
        solutions[1] = (sol_x, sol_y)

    n, sol_x, sol_y = sol_walldownintersection()
    if n < 1:
        solutions[2] = None
    else:
        solutions[2] = (sol_x, sol_y)

    n, sol_x, sol_y = sol_wallplayer1intersection()
    if n < 1:
        solutions[3] = None
    else:
        solutions[3] = (sol_x, sol_y)

    if solutions[0] is None and solutions[1] is None and solutions[2] is None and solutions[3] is None:
        solution = (0.0,0.0) #somehow RuntimeError gives error with javascript
        wall = -10
        pygame.quit()
    else:
        min = None
        j = 0
        for i in range(4):
            if solutions[i] is None:
                continue
            else:
                # complexNew(solutions[i][0], solutions[i][1]).get_arg() <= 0.8:
                dist = distance(complexNew(oldsolution[0], oldsolution[1]), complexNew(solutions[i][0], solutions[i][1]))

                if min == None:
                    if dist > 1.0e-15 and complexNew(solutions[i][0], solutions[i][1]).get_arg() <= 0.8:
                        min = dist
                        j = i
                else:
                    if dist < min and dist > 1.0e-15 and complexNew(solutions[i][0], solutions[i][1]).get_arg() <= 0.8:
                        min = dist
                        j = i
            wall = j+1
            solution = solutions[j]
        if min == None:
            solution = (0.0,0.0) #somehow RuntimeError gives error with javascript
            wall = -10
            pygame.quit()

#creates the text for game over screen
def game_over_text(win):
    global font_normal, font_small
    global score_value_player1, score_value_player2
    global width, height, screen
    over_text2 = font_normal.render(str(score_value_player1) + " : " + str(score_value_player2), True, white)
    over_text3 = font_small.render("Press R to restart or Esc to exit the game.", True, white)
    if score_value_player1 == win:
        over_text1 = font_normal.render("Player 1 won!", True, white)
    if score_value_player2 == win:
        over_text1 = font_normal.render("Player 2 won!", True, white)
    over_text1_rect = over_text1.get_rect(center=(width/2, height/4))
    over_text2_rect = over_text2.get_rect(center=(width/2, height/3))
    over_text3_rect = over_text3.get_rect(center=(width/2, 3*height/4))
    screen.blit(over_text1, over_text1_rect)
    screen.blit(over_text2, over_text2_rect)
    screen.blit(over_text3, over_text3_rect)


#helppoint used to find next geodesic: Build perpendicular line to tangent of the circle trough intersection
#point of wall geodesic with old ball geodesic, move this tangent along the perpendicular and find helppoint as
#reflection of the intersection of tangent and old geodesic along the perpendicular.
def helppoint(solution_x, solution_y, center_x, center_y):
    global helppoint_x, helppoint_y, b_tangent, m_tangent
    global wallupcenter_x, wallupcenter_y, walldowncenter_x, walldowncenter_y
    global wallplayer1center_x, wallplayer1center_y, wallplayer2center_x, wallplayer2center_y
    if center_x - solution_x != 0 and center_y - solution_y != 0:
        n = (center_y - solution_y)/(center_x - solution_x) #orthogonal
        b_orthogonal = solution_y - n*solution_x
        m_tangent = 1/n #tangent

        if center_x == walldowncenter_x and center_y == walldowncenter_y :
            b_tangent = solution_y - m_tangent*solution_x + 0.0001
        elif center_x == wallupcenter_x and center_y == wallupcenter_y :
            b_tangent = solution_y - m_tangent*solution_x - 0.0001
        elif center_x == wallplayer1center_x and center_y == wallplayer1center_y :
            b_tangent = solution_y - m_tangent*solution_x - 0.0001
        elif center_x == wallplayer2center_x and center_y == wallplayer2center_y :
            b_tangent = solution_y - m_tangent*solution_x + 0.0001

        #helpsolve = opt.fsolve(helptangent, (solution_x,solution_y))
        temp_n, temp_sol_x, temp_sol_y = sol_helptangent();
        if temp_n < 1:
            raise RuntimeError()
        else:
            helpsolve = (temp_sol_x, temp_sol_y)

        orthintersect_y = m_tangent*(b_orthogonal - b_tangent)/(m_tangent - n) + b_tangent
        orthintersect_x = (b_orthogonal - b_tangent)/(m_tangent - n)
        helppoint_y = 2*orthintersect_y - helpsolve[1]
        helppoint_x = 2*orthintersect_x - helpsolve[0]

    elif center_y - solution_y == 0:
            if center_x == wallplayer1center_x and center_y == wallplayer1center_y :
                helppoint_x = solution_x + 0.001
                helppoint_y = solution_y + 0.001
            elif center_x == wallplayer2center_x and center_y == wallplayer2center_y :
                helppoint_x = solution_x - 0.001
                helppoint_y = solution_y - 0.001
            else:
                print("Something went very wrong.")
    elif center_x - solution_x == 0:
            if center_x == walldowncenter_x and center_y == walldowncenter_y :
                helppoint_y = solution_y + 0.001
                helppoint_x = solution_x - 0.001
            elif center_x == wallupcenter_x and center_y == wallupcenter_y :
                helppoint_y = solution_y - 0.001
                helppoint_x = solution_x + 0.001
            else:
                print("Something went very wrong.")

# Calls circ_inter_line() with the correct parameters, and then for two intersections
# points which one is in the Poincare disc (edge cases are not considered, should
# never occur in this context)
def sol_helptangent():
    global m_tangent, b_tangent
    global ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius

    n_inter, sol_x1, sol_y1, sol_x2, sol_y2 = circ_inter_line(ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y, m_tangent, b_tangent)

    if n_inter == 2:
        if math.sqrt(sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0:
            return n_inter, sol_x1, sol_y1
        else:
            return n_inter, sol_x2, sol_y2
    else:
        return n_inter, sol_x1, sol_y1

#calculates the new ball position to make the ball move smoothly
def newballpos(center_x, center_y, radius, t):
    newballpos = [center_x + radius*math.cos(2*math.pi*t), center_y + radius*math.sin(2*math.pi*t)]
    return newballpos

#creates a new geodesic depending on two points
def newgeodesic(x1, y1, x2, y2):
    global ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius
    p1 = xy_to_PD(x1, y1)
    p2 = xy_to_PD(x2, y2)
    g = PDGeodesic(p1,p2)
    center = g._center.getComplex()
    ballgeodesiccenter_x = center.real
    ballgeodesiccenter_y = center.imag
    ballgeodesicradius = g._radius

#making the paddle get smaller depending on the distance to the center
def paddle_scaling(x,y):
    if math.sqrt((x- 401)**2 + (y - 401)**2) >=300:
        return (0,0)
    else:
        return (round(16-(16*math.sqrt((x - 401)**2 + (y- 401)**2)/300)), round(90-(90*math.sqrt((x-401)**2 + (y-401)**2)/300)))

#makes a PD point and finds the fitting (x,y) point
def PD_to_xy(point):
    x = point.getReal()
    y = point.getImag()
    return (x,y)

#chooses a new start geodesic when ball restarts it's pseudo random because it chooses randomly out of 10 possible geodesics
def pseudorand():
    #x = random.randint(1,2)
    global movement, direction, wall, solution, oldsolution
    x = random.randint(1,10)
    if x == 1:
        newgeodesic(0.3, 0.4, 0.45, 0.2)
        movement = 0.60
        direction = 1
        wall = 2
        n, sol_x, sol_y = sol_wallplayer2intersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(wallplayer2intersection, (0.1,1) )
        oldsolution = solution
    if x == 2:
        newgeodesic(-0.0662, 0.2629, 0.2868, 0.0756)
        movement = -0.3475
        direction = 1
        wall = 2
        n, sol_x, sol_y = sol_wallplayer2intersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(wallplayer2intersection, (0.1,1) )
        oldsolution = solution
    if x == 3:
        newgeodesic(-0.12, -0.11, -0.45, -0.2)
        movement = 0.275
        direction = 1
        wall = 4
        n, sol_x, sol_y = sol_wallplayer1intersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(wallplayer1intersection, (0.1,1))
        oldsolution = solution
    if x == 4:
        newgeodesic(-0.05, 0.22, -0.3, -0.5)
        movement = -0.04
        direction = -1
        wall = 3
        n, sol_x, sol_y = sol_walldownintersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(walldownintersection, (0.1,1))
        oldsolution = solution
    if x == 5:
        newgeodesic(0.4473, -0.2192, 0.1314, -0.1148)
        movement = -0.8
        direction = -1
        wall = 2
        n, sol_x, sol_y = sol_wallplayer2intersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(wallplayer2intersection, (0.1,1))
        oldsolution = solution
    if x == 6:
        newgeodesic(0.252, -0.0883, 0.265, -0.089)
        movement = 0.249
        direction = -1
        wall = 2
        n, sol_x, sol_y = sol_wallplayer2intersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(wallplayer2intersection, (0.1,1))
        oldsolution = solution
    if x == 7:
        newgeodesic(-0.2275, 0.2389, 0.029, -0.249)
        movement = 0.075
        direction = -1
        wall = 3
        n, sol_x, sol_y = sol_walldownintersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(walldownintersection, (0.1, 1))
        oldsolution = solution
    if x == 8:
        newgeodesic(-0.2937, -0.1265, -0.2555, 0.2046)
        movement = 0.0096
        direction = -1
        wall = 3
        n, sol_x, sol_y = sol_walldownintersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(walldownintersection, (0.1, 1))
        oldsolution = solution
    if x == 9:
        newgeodesic(-0.1683, -0.2514, -0.0005, -0.1368)
        movement = 0.3551
        direction = -1
        wall = 3
        n, sol_x, sol_y = sol_walldownintersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(walldownintersection, (0.1, 1))
        oldsolution = solution
    if x == 10:
        newgeodesic(-0.497, -0.088, -0.398, -0.163)
        movement = 0.1
        direction = 1
        wall = 4
        n, sol_x, sol_y = sol_wallplayer1intersection()
        solution = (sol_x, sol_y)
        #solution = opt.fsolve(wallplayer1intersection, (0.1, 1))
        oldsolution = solution

#shows current score of player 1 and player 2
def show_score(x, y):
    global font_normal, score_value_player1, score_value_player2, screen
    score = font_normal.render(str(score_value_player1) + " : " + str(score_value_player2), True, (255, 255, 255))
    screen.blit(score, (x, y))

#function to calculate normal coordinates into pygame coordinates
def topygamecoords(xcord, ycord):
    point = [round(401 + xcord*300), round(401 - ycord*300)]
    return point

#function to calculate radius into pygame radius
def topygameradius(radius):
    return 300*radius

# Calls circ_inter_circ() with the correct parameters, and then for two intersections
# points which one is in the Poincare disc (edge cases are not considered, should
# never occur in this context)
def sol_walldownintersection():
    global walldowncenter_x, walldowncenter_y, walldownradius
    global ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius

    n_inter, sol_x1, sol_y1, sol_x2, sol_y2 = circ_inter_circ(walldownradius, walldowncenter_x, walldowncenter_y, ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y)

    if n_inter == 2:
        if math.sqrt(sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0:
            return n_inter, sol_x1, sol_y1
        else:
            return n_inter, sol_x2, sol_y2
    else:
        return n_inter, sol_x1, sol_y1


# Calls circ_inter_circ() with the correct parameters, and then for two intersections
# points which one is in the Poincare disc (edge cases are not considered, should
# never occur in this context)
def sol_wallplayer1intersection():
    global wallplayer1center_x, wallplayer1center_y, paddleradius
    global ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius

    n_inter, sol_x1, sol_y1, sol_x2, sol_y2 = circ_inter_circ(paddleradius, wallplayer1center_x, wallplayer1center_y, ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y)

    if n_inter == 2:
        if math.sqrt(sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0:
            return n_inter, sol_x1, sol_y1
        else:
            return n_inter, sol_x2, sol_y2
    else:
        return n_inter, sol_x1, sol_y1


# Calls circ_inter_circ() with the correct parameters, and then for two intersections
# points which one is in the Poincare disc (edge cases are not considered, should
# never occur in this context)
def sol_wallplayer2intersection():
    global wallplayer2center_x, wallplayer2center_y, paddleradius
    global ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius

    n_inter, sol_x1, sol_y1, sol_x2, sol_y2 = circ_inter_circ(paddleradius, wallplayer2center_x, wallplayer2center_y, ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y)

    if n_inter == 2:
        if math.sqrt(sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0:
            return n_inter, sol_x1, sol_y1
        else:
            return n_inter, sol_x2, sol_y2
    else:
        return n_inter, sol_x1, sol_y1

# Calls circ_inter_circ() with the correct parameters, and then for two intersections
# points which one is in the Poincare disc (edge cases are not considered, should
# never occur in this context)
def sol_wallupintersection():
    global wallupcenter_x, wallupcenter_y, wallupradius
    global ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius

    n_inter, sol_x1, sol_y1, sol_x2, sol_y2 = circ_inter_circ(wallupradius, wallupcenter_x, wallupcenter_y, ballgeodesicradius, ballgeodesiccenter_x, ballgeodesiccenter_y)

    if n_inter == 2:
        if math.sqrt(sol_x1 * sol_x1 + sol_y1 * sol_y1) < 1.0:
            return n_inter, sol_x1, sol_y1
        else:
            return n_inter, sol_x2, sol_y2
    else:
        return n_inter, sol_x1, sol_y1

#gives out the wallradius of the desired wall
def wallrad(wall):
    global wallupradius, wallplayer2radius, walldownradius, wallplayer1radius
    global wallradius
    if(wall == 1): wallradius = wallupradius
    if(wall == 2): wallradius = wallplayer2radius
    if(wall == 3): wallradius = walldownradius
    if(wall == 4): wallradius = wallplayer1radius
    return(wallradius)

#converts (x,y) coordinates into a PD point
def xy_to_PD(x,y):
    z = PDPoint(complexNew(x,y))
    return(z)

# loop of main programm
def run():      #pyjsdl: callback function

    global score_value_player1, score_value_player2, start
    global oldsolution, solution, movement, direction, maxrad
    global ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius
    global wallupcenter_x, wallupcenter_y, walldowncenter_x, walldowncenter_y
    global wallplayer1center_x, wallplayer1center_y, wallplayer2center_x, wallplayer2center_y
    global pseudopos, screen, blue, black, grey, red, turquoise
    global angle1, angle_rot1, angle2, angle_rot2
    global paddleradius, w1, w2, h1, h2
    global paddle1, paddle2, ball_colour
    global wallup, walldown, wallplayer1, wallplayer2
    global clock, end_background
    global nextintersection
    global wallradius, wall
    global width, height

    global helpballpos

    global quit, win, load_images_pygame
    global pressed_r, pressed_esc, pressed_w, pressed_s, pressed_up, pressed_down


    if quit == True:
        pygame.quit()
        return True

    if load_images_pygame == True:
        load_images_pygame = False

        temp_image = pygame.image.load('Gameoverbg.png')
        end_background = pygame.transform.scale(temp_image, (width, height))

        paddle1 = pygame.image.load('paddle.jpg')
        paddle1 = pygame.transform.scale(paddle1, (8,50))
        paddle2 = pygame.image.load('paddle.jpg')
        paddle2 = pygame.transform.scale(paddle2, (8,50))
        #otherwise we'll get a background for the image
        paddle1.set_colorkey((0,0,0))
        paddle2.set_colorkey((0,0,0))

        w1, h1 = paddle1.get_size()
        w2, h2 = paddle2.get_size()

    #check if an action has taken place and makes it possible to quit game when game over
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            return True
        elif event.type == pygame.KEYDOWN: # key pressed
            if event.key == pygame.K_r:
                pressed_r = True
            elif event.key == pygame.K_ESCAPE:
                pressed_esc = True
            elif event.key == pygame.K_w:
                pressed_w = True
            elif event.key == pygame.K_s:
                pressed_s = True
            elif event.key == pygame.K_UP:
                pressed_up = True
            elif event.key == pygame.K_DOWN:
                pressed_down = True
        elif event.type == pygame.KEYUP: # key released
            if event.key == pygame.K_r:
                pressed_r = False
            elif event.key == pygame.K_ESCAPE:
                pressed_esc = False
            elif event.key == pygame.K_w:
                pressed_w = False
            elif event.key == pygame.K_s:
                pressed_s = False
            elif event.key == pygame.K_UP:
                pressed_up = False
            elif event.key == pygame.K_DOWN:
                pressed_down = False

    #makes the game run until a player has won
    if score_value_player1 >= win or score_value_player2 >= win:
            #this part creates the game over screen
            screen.fill(black)
            screen.blit(end_background, (0,0))
            game_over_text(win)
            pygame.display.flip()

            #restart
            if pressed_r == True:
                pressed_r = False
                score_value_player1 = 0
                score_value_player2 = 0
                start = True
                pressed_r = False
                return False
            elif pressed_esc == True:
                pressed_esc = False
                quit = True
                screen.fill(black)
                pygame.display.flip()
                pygame.quit()
                return True

            # set refreshing time
            clock.tick(60)#normal 60
            return False

    else:
        if pressed_esc == True:
            pressed_esc = False
            quit = True
            screen.fill(black)
            pygame.display.flip()
            pygame.quit()
            return True

        # integrate game logic here
        if start == True:
            pseudorand() #creates a new pseudo random geodesic
            nextintersection = topygamecoords(solution[0], solution[1])
            start = False

        helpballpos = newballpos(ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius, movement)
        if ballgeodesicradius == 0:
            movement += direction * 0.001*((score_value_player1 + score_value_player2)/4 + 1)/maxrad
        else:
            movement +=  direction * 0.001*((score_value_player1 + score_value_player2)/4 + 1)/ballgeodesicradius
        ballpos = topygamecoords(helpballpos[0], helpballpos[1])
        ballradius = ball_radius(helpballpos[0], helpballpos[1])
        #makes the ball switch geodesics when hitting a wall
        if (ballpos[0] - nextintersection[0])**2 + (ballpos[1] - nextintersection[1])**2 <= ballradius**2 and (wall == 1 or wall == 3):
            if wall == 1:
                wall_x = wallupcenter_x
                wall_y = wallupcenter_y
                wallradius = wallrad(wall)
            if wall == 3:
                wall_x = walldowncenter_x
                wall_y = walldowncenter_y
                wallradius = wallrad(wall)
            #sound.play()
            ballgeodesic(wall)
            movement = math.atan2(solution[1]- ballgeodesiccenter_y, solution[0] - ballgeodesiccenter_x)/(2*math.pi)
            if ballgeodesicradius == 0:
                pseudomovement = movement + direction * 0.001/maxrad
            else:
                pseudomovement = movement + direction * 0.001/ballgeodesicradius
            pseudopos = newballpos(ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius, pseudomovement)
            if (pseudopos[0] - wall_x)**2 + (pseudopos[1]-wall_y)**2 < wallradius**2:
                direction *= -1
            oldsolution = solution
            findsolution2()
            if wall == -10: # error occurred in findsolution2()
                return True
            nextintersection = topygamecoords(solution[0],solution[1])
        elif (helpballpos[0] - wallplayer2center_x)**2 + (helpballpos[1] - wallplayer2center_y)**2 <= wallrad(2)**2 and wall == 2:
            score_value_player1 += 1
            start = True
        elif (helpballpos[0] - wallplayer1center_x)**2 + (helpballpos[1] - wallplayer1center_y)**2 <= wallrad(4)**2 and wall == 4:
            score_value_player2 += 1
            start = True
        elif (helpballpos[0] - wallupcenter_x)**2 + (helpballpos[1] - wallupcenter_y)**2 < wallrad(1)**2 - 0.1:
            start = True
        elif (helpballpos[0] - walldowncenter_x)**2 + (helpballpos[1] - walldowncenter_y)**2 < wallrad(3)**2 - 0.1:
            start = True
        # delete gamefield
        screen.fill(black)

        # draw gamefield and figures
        pygame.draw.circle(screen, blue, [401,401],300)

        #paddles
        #move paddle of player 1
        c1=newballpos(wallplayer1center_x,wallplayer1center_y, paddleradius,angle1)
        c1_py = topygamecoords(c1[0], c1[1])
        blitRotate(screen, paddle1, (c1_py[0],c1_py[1]), (w1/2,h1/2), angle_rot1)

        x = paddle1.get_height()
        if math.sqrt(c1[0]*c1[0] + c1[1]*c1[1]) <= 0.66 or c1[1] < 0:
            if pressed_w == True:
                angle_rot1 += 3
                angle1 += 0.008

        if math.sqrt(c1[0]*c1[0] + c1[1]*c1[1]) <= 0.8 or c1[1] > 0:
            if pressed_s == True:
                angle_rot1 -= 3
                angle1 -= 0.008

        paddle1 = pygame.transform.scale(paddle1, paddle_scaling(c1_py[0],c1_py[1]))

        #move paddle of player 2
        c2=newballpos(wallplayer2center_x, wallplayer2center_y, -paddleradius, angle2)
        c2_py = topygamecoords(c2[0], c2[1])
        blitRotate(screen, paddle2, (c2_py[0],c2_py[1]), (w2/2,h2/2), angle_rot2)

        y = paddle2.get_height()
        if math.sqrt(c2[0]*c2[0] + c2[1]*c2[1]) <= 0.66 or c2[1] < 0:
            if pressed_up == True:
                angle_rot2 -= 3
                angle2 -= 0.008

        if math.sqrt(c2[0]*c2[0] + c2[1]*c2[1]) <= 0.75 or c2[1] > 0:
            if pressed_down == True:
                angle_rot2 += 3
                angle2 += 0.008

        paddle2 = pygame.transform.scale(paddle2, paddle_scaling(c2_py[0],c2_py[1]))

        #ball bounces of paddle 1
        #1.8 is the radius of the paddle geodesic
        if c1_py[0] - paddle1.get_width()/2 - ballradius <= nextintersection[0] <= c1_py[0] + paddle1.get_width()/2 + ballradius and c1_py[1] - paddle1.get_height()/2 - ballradius <= nextintersection[1] <= c1_py[1] + paddle1.get_height()/2 + ballradius and (ballpos[0] - nextintersection[0])**2 + (ballpos[1] - nextintersection[1])**2 <= ballradius**2:
            #sound.play()
            ballgeodesic(wall)
            movement = math.atan2(solution[1]- ballgeodesiccenter_y, solution[0] - ballgeodesiccenter_x)/(2*math.pi)
            if ballgeodesicradius == 0:
                pseudomovement = movement + direction * 0.001/maxrad
            else:
                pseudomovement = movement + direction * 0.001/ballgeodesicradius
            pseudopos = newballpos(ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius, pseudomovement)
            if (pseudopos[0] - wallplayer1center_x)**2 + (pseudopos[1] - wallplayer1center_y)**2 < paddleradius**2:
                direction *= -1
            oldsolution = solution
            findsolution2()
            if wall == -10: # error occurred in findsolution2()
                return True
            nextintersection = topygamecoords(solution[0],solution[1])

        #ball bounces of paddle 2
        #1.8 is the radius of the paddle geodesic
        if c2_py[0] + paddle2.get_width()/2 + ballradius >= nextintersection[0] >= c2_py[0] - paddle2.get_width()/2 - ballradius and c2_py[1] - paddle2.get_height()/2 - ballradius <= nextintersection[1] <= c2_py[1] + paddle2.get_height()/2 + ballradius and (ballpos[0] - nextintersection[0])**2 + (ballpos[1] - nextintersection[1])**2 <= ballradius**2:
        #sound.play()
            ballgeodesic(wall)
            movement = math.atan2(solution[1]- ballgeodesiccenter_y, solution[0] - ballgeodesiccenter_x)/(2*math.pi)
            if ballgeodesicradius == 0:
                pseudomovement = movement + direction * 0.001/maxrad
            else:
                pseudomovement = movement + direction * 0.001/ballgeodesicradius
            pseudopos = newballpos(ballgeodesiccenter_x, ballgeodesiccenter_y, ballgeodesicradius, pseudomovement)
            if (pseudopos[0] - wallplayer2center_x)**2 + (pseudopos[1] - wallplayer2center_y)**2 < paddleradius**2:
                direction *= -1
            oldsolution = solution
            findsolution2()
            if wall == -10: # error occurred in findsolution2()
                return True
            nextintersection = topygamecoords(solution[0],solution[1])

        #these variables are for debugging purposes
        #help = topygamecoords(helppoint_x, helppoint_y)
        #sol  = topygamecoords(solution[0], solution[1])
        #pseudo = topygamecoords(pseudopos[0], pseudopos[1])
        # draw gamefield and figures
        pygame.draw.circle(screen, grey,[topygamecoords(wallupcenter_x,wallupcenter_y)[0],topygamecoords(wallupcenter_x,wallupcenter_y)[1]],topygameradius(wallup._radius),5)
        pygame.draw.circle(screen, grey,[topygamecoords(walldowncenter_x,walldowncenter_y)[0],topygamecoords(walldowncenter_x,walldowncenter_y)[1]],topygameradius(walldown._radius),5)
        pygame.draw.circle(screen, red,[topygamecoords(wallplayer1center_x,wallplayer1center_y)[0],topygamecoords(wallplayer1center_x,wallplayer1center_y)[1]],topygameradius(wallplayer1._radius),5)
        pygame.draw.circle(screen, turquoise,[topygamecoords(wallplayer2center_x,wallplayer2center_y)[0],topygamecoords(wallplayer2center_x,wallplayer2center_y)[1]],topygameradius(wallplayer2._radius),5)
        pygame.draw.circle(screen, ball_colour, [ballpos[0], ballpos[1]], ballradius)
        #the following drawings are for debugging purposes
        #pygame.draw.circle(screen, black,[topygamecoords(ballgeodesiccenter_x, ballgeodesiccenter_y)[0],topygamecoords(ballgeodesiccenter_x,ballgeodesiccenter_y)[1]],topygameradius(ballgeodesicradius),5)
        #pygame.draw.circle(screen, red, [help[0], help[1]], 10)
        #pygame.draw.circle(screen, blue, [pseudo[0], pseudo[1]], 10)
        #pygame.draw.circle(screen, green, [sol[0], sol[1]], 10)
        pygame.draw.polygon(screen, black, [[0,0],[0,377],[377,0]])
        pygame.draw.polygon(screen, black, [[801,0],[801-377,0],[801,377]])
        pygame.draw.polygon(screen, black, [[0,801],[0,801-377],[377,801]])
        pygame.draw.polygon(screen, black, [[801,801],[801-377,801],[801,801-377]])

        show_score(360, 10)
        # refresh Window
        pygame.display.flip()
        pygame.event.pump() # process event queue
        # set refreshing time
        clock.tick(60)#normal 60

        return False


def main(): # javascript main function
    global screen
    screen = setup(width, height)
    if load_images:     ###
        images = ['./paddle.jpg', './Gameoverbg.png']
        pygame.display.setup(run, images)
    else:
        pygame.display.setup(run)
    #pyjsdl: setup run callback function and image preloading


def main2(): # python main function
    global screen
    screen = setup(width, height)
    quit = False
    while not quit:     #pyjsdl: callback replaces loop
        quit = run()

if __name__ == '__main__':
    if platform == 'js':
        main()
    elif platform == 'pc':
        main2()
