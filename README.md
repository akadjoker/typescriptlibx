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
