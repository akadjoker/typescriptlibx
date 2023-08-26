# typescriptlibx
An Allegro-inspired TypeScript library that provides a collection of functions and objects for creating graphics and handling sound in game development.

Features

    Bitmap Objects: Functions for working with bitmap objects, including creation, file loading, and drawing primitives.
    Graphics Modes: Features for configuring graphics modes, setting up the canvas, and managing the screen.
    Drawing Primitives: Functions for drawing basic shapes such as lines, rectangles, circles, and triangles.
    Blitting and Sprites: Functions for drawing and manipulating sprites, including rotation and scaling.
    Text Output: Features for rendering text onto bitmaps.
    Sound Routines: Functions for handling sound samples, including loading and playback.

Usage

Here are some examples of how you can use the library's features:

typescript

import { set_gfx_mode, create_bitmap, line, load_sample, play_sample } from 'your-library';

// Set up graphics mode
set_gfx_mode('canvas-id', 800, 600);

// Create a bitmap
const bitmap = create_bitmap(800, 600);

// Draw a line on the bitmap
line(bitmap, 100, 100, 300, 300, '#FF0000', 2);

// Load and play a sound sample
const sample = load_sample('sample.wav');
play_sample(sample, 0.5, 440, true);

API:


SECS_TO_TIMER
MSEC_TO_TIMER
BPS_TO_TIMER
BPM_TO_TIMER

init_gfx

key_released
key_pressed
key_down
key_up
mouse_wheel
mouse_x
mouse_y

SIN
COS
TAN
ASIN
ACOS
ATAN
ATAN2
SQRT
FLOOR
CEIL
ABS
MIN
MAX
ROUND
SIGN
EXP
LOG
POW
DEG
RAD

random
rand
rand32
frand
distance_sq
distance
linedist
lerp
sgn
angle
anglediff
clamp
scale
scaleclamp

makecol
makecolf
getr
getg
getb
geta
getrf
getgf
getbf
getaf



clear_graph
fill_graph
line
vline
hline
triangle
trianglefill
polygon
polygonfill
rect
rectfill
circle
circlefill
arc
arcfill
ellipse
ellipsefill
stretch_blit
draw_sprite
scaled_sprite
rotate_sprite
pivot_sprite
rotate_scaled_sprite
pivot_scaled_sprite
blit
simple_blit

create_graph
load_graph
load_sheet


set_volume
get_volume
load_sample
play_sample
adjust_sample
stop_sample
pause_sample

load_font
create_font
text_width
print
