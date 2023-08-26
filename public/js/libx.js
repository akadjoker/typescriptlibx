"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _cartoon_woff = "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";
//const _cartoon_woff="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";
var _num_fonts = 0;
const allKeys = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'Enter', 'Escape', 'Backspace', 'Tab', 'Space', 'Shift', 'Control', 'Alt',
    'CapsLock', 'Meta', 'PageUp', 'PageDown', 'Home', 'End', 'Insert', 'Delete',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];
const KEY_A = 0;
const KEY_B = 1;
const KEY_C = 2;
const KEY_D = 3;
const KEY_E = 4;
const KEY_F = 5;
const KEY_G = 6;
const KEY_H = 7;
const KEY_I = 8;
const KEY_J = 9;
const KEY_K = 10;
const KEY_L = 11;
const KEY_M = 12;
const KEY_N = 13;
const KEY_O = 14;
const KEY_P = 15;
const KEY_Q = 16;
const KEY_R = 17;
const KEY_S = 18;
const KEY_T = 19;
const KEY_U = 20;
const KEY_V = 21;
const KEY_W = 22;
const KEY_X = 23;
const KEY_Y = 24;
const KEY_Z = 25;
const KEY_0 = 26;
const KEY_1 = 27;
const KEY_2 = 28;
const KEY_3 = 29;
const KEY_4 = 30;
const KEY_5 = 31;
const KEY_6 = 32;
const KEY_7 = 33;
const KEY_8 = 34;
const KEY_9 = 35;
const KEY_UP = 36;
const KEY_DOWN = 37;
const KEY_LEFT = 38;
const KEY_RIGHT = 39;
const KEY_ENTER = 40;
const KEY_ESCAPE = 41;
const KEY_BACKSPACE = 42;
const KEY_TAB = 43;
const KEY_SPACE = 44;
const KEY_SHIFT = 45;
const KEY_CONTROL = 46;
const KEY_ALT = 47;
let currentKeyState = [];
let previousKeyState = [];
let mouse;
let mousePressed;
let mouseReleased;
let mouseX;
let mouseY;
let mouseWheelDelta;
let keyIndex = {};
let canvas;
let font;
let gfx_started = false;
let SCREEN_W = 0;
let SCREEN_H = 0;
function log(string) {
    console.log(string);
}
function _error(string) {
    log("[ERROR] " + string);
    alert(string);
}
function get_key(key) {
    return keyIndex[key];
}
let _loopproc;
let _loader_init_time;
let _ready_proc;
let _bar_proc;
const _downloadables = [];
function _uberloop() {
    if (_loopproc)
        _loopproc();
    for (let i = 0; i < currentKeyState.length; i++) {
        previousKeyState[i] = currentKeyState[i];
    }
}
function time() {
    return performance.now();
}
function delayExample() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Início");
        yield new Promise(resolve => setTimeout(resolve, 2000)); // Aguarda 2 segundos
        console.log("Após 2 segundos");
        console.log("Fim");
    });
}
function _progress_check() {
    let num_assets = 0;
    let num_loaded = 0;
    for (let c = 0; c < _downloadables.length; c++) {
        num_assets++;
        if (_downloadables[c].type === "snd") {
            if (_downloadables[c].element.readyState >= _downloadables[c].element.HAVE_FUTURE_DATA) {
                _downloadables[c].ready = true;
            }
        }
        if (_downloadables[c].ready)
            num_loaded++;
    }
    if (_bar_proc)
        _bar_proc(num_assets / num_loaded);
    if (num_loaded < num_assets) {
        window.setTimeout(_progress_check, 100);
    }
    else {
        console.log("Loading complete! Took " +
            ((time() - _loader_init_time) / 1000).toFixed(1) +
            " seconds!");
        _ready_proc();
    }
}
function loop(procedure, speed) {
    _loopproc = procedure;
    const timer_id = window.setInterval(_uberloop, speed);
    console.log("Game loop initialised!");
}
/// @param progress loading progress in 0.0 - 1.0 range
function loading_bar(progress) {
    console.log("Loading progress: " + (progress * 100).toFixed(1) + "%");
    rectfill(canvas, 5, SCREEN_H - 55, SCREEN_W - 10, 50, makecol(0, 0, 0));
    rectfill(canvas, 10, SCREEN_H - 50, SCREEN_W - 20, 40, makecol(255, 255, 255));
    rectfill(canvas, 15, SCREEN_H - 45, SCREEN_W - 30, 30, makecol(0, 0, 0));
    rectfill(canvas, 20, SCREEN_H - 40, scaleclamp(progress, 0, 1, 0, (SCREEN_W - 40)), 20, makecol(255, 255, 255));
}
function ready(procedure, bar) {
    _loader_init_time = time();
    _ready_proc = procedure;
    console.log("Loader initialised!");
    if (bar)
        _bar_proc = bar;
    else
        _bar_proc = loading_bar;
    window.setTimeout(_progress_check, 100);
}
function SECS_TO_TIMER(secs) { return secs * 1000; }
function MSEC_TO_TIMER(msec) { return msec; }
function BPS_TO_TIMER(bps) { return 1000 / bps; }
function BPM_TO_TIMER(bpm) { return 60 * 1000 / bpm; }
function START() {
    window.addEventListener("load", main);
}
//input call backs
function _keyup(e) {
    let index = get_key(e.key);
    currentKeyState[index] = false;
}
function _keydown(e) {
    let index = get_key(e.key);
    currentKeyState[index] = true;
}
function _mouseup(e) {
}
function _mousedown(e) {
}
function _mousemove(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}
function _mousewheel(e) {
    mouseWheelDelta += e.deltaY;
}
function _touchstart(e) {
}
function _touchend(e) {
}
function _touchmove(e) {
}
function _touchcancel(e) {
}
function resizeCanvas(width, height) {
    width = width || window.innerWidth;
    height = height || window.innerHeight;
    const devicePixelRatio = window.devicePixelRatio || 1;
    const newWidth = Math.floor(width * devicePixelRatio);
    const newHeight = Math.floor(height * devicePixelRatio);
    canvas.canvas.width = newWidth;
    canvas.canvas.height = newHeight;
    canvas.canvas.style.width = width + "px";
    canvas.canvas.style.height = height + "px";
    canvas.w = newWidth;
    canvas.h = newHeight;
    SCREEN_W = newWidth;
    SCREEN_H = newHeight;
    canvas.context.scale(devicePixelRatio, devicePixelRatio);
}
function init_gfx(canvas_id, width, height) {
    let cv = document.getElementById(canvas_id);
    if (!cv) {
        _error("Can't find canvas with id " + canvas_id);
        return false;
    }
    let ctx = cv.getContext("2d");
    mouseX = 0;
    mouseY = 0;
    mouseWheelDelta = 0;
    allKeys.forEach((key, index) => {
        keyIndex[key] = index;
        currentKeyState[index] = false;
        previousKeyState[index] = false;
    });
    document.addEventListener('keyup', _keyup);
    document.addEventListener('keydown', _keydown);
    // let dpr = window.devicePixelRatio || 1;
    // width = width * dpr;
    // height = height * dpr;
    // cv.width = width;
    // cv.height = height;
    // SCREEN_W = width;
    // SCREEN_H = height;
    canvas = { w: width, h: height, canvas: cv, context: ctx, ready: true };
    // canvas.canvas.width = window.innerWidth * dpr
    // canvas.canvas.height = window.innerHeight * dpr
    // canvas.canvas.style.width = `${window.innerWidth}px`
    // canvas.canvas.style.height = `${window.innerHeight}px`
    // canvas.context.scale(dpr, dpr)
    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
        // canvas.canvas.width = window.innerWidth * dpr
        // canvas.canvas.height = window.innerHeight * dpr
        // canvas.canvas.style.width = `${window.innerWidth}px`
        // canvas.canvas.style.height = `${window.innerHeight}px`
        // //canvas.context.scale(dpr, dpr)
        // //   console.log("[WINDOW] Resize "+ width + " - " +height+" "+canvas.canvas.width+" - "+canvas.canvas.height);
    });
    canvas.canvas.addEventListener('mouseup', _mouseup);
    canvas.canvas.addEventListener('mousedown', _mousedown);
    canvas.canvas.addEventListener('mousemove', _mousemove);
    canvas.canvas.addEventListener('wheel', _mousewheel);
    canvas.canvas.addEventListener("touchstart", _touchstart);
    canvas.canvas.addEventListener("touchend", _touchend);
    canvas.canvas.addEventListener("touchcancel", _touchend);
    canvas.canvas.addEventListener("touchmove", _touchmove);
    gfx_started = true;
    font = load_base64_font(_cartoon_woff);
    log("Graphics mode set to " + SCREEN_W + " x " + SCREEN_H);
    return true;
}
//*************************************************************************
//INPUT
//*************************************************************************
function key_released(key) {
    let release = false;
    if (previousKeyState[key] === true && currentKeyState[key] === false) {
        release = true;
    }
    return release;
}
function key_pressed(key) {
    let press = false;
    if (previousKeyState[key] === false && currentKeyState[key] === true) {
        press = true;
    }
    return press;
}
function key_down(key) {
    return currentKeyState[key];
}
function key_up(key) {
    if (currentKeyState[key] === false) {
        return true;
    }
    else {
        return false;
    }
}
function mouse_wheel() {
    return mouseWheelDelta;
}
function mouse_x() {
    return mouseX;
}
function mouse_y() {
    return mouseY;
}
//*************************************************************************
//MATH
//*************************************************************************
const PI = 3.14159265;
const PI2 = 2 * 3.14159265;
const PI_2 = 3.14159265 / 2;
const PI_3 = 3.14159265 / 3;
const PI_4 = 3.14159265 / 4;
function SIN(r) { return Math.sin(r); }
function COS(r) { return Math.cos(r); }
function TAN(r) { return Math.tan(r); }
function ASIN(r) { return Math.asin(r); }
function ACOS(r) { return Math.acos(r); }
function ATAN(r) { return Math.atan(r); }
function ATAN2(y, x) { return Math.atan2(y, x); }
function SQRT(r) { return Math.sqrt(r); }
function FLOOR(r) { return Math.floor(r); }
function CEIL(r) { return Math.ceil(r); }
function ABS(r) { return Math.abs(r); }
function MIN(a, b) { return Math.min(a, b); }
function MAX(a, b) { return Math.max(a, b); }
function ROUND(r) { return Math.round(r); }
function SIGN(r) { return Math.sign(r); }
function EXP(r) { return Math.exp(r); }
function LOG(r) { return Math.log(r); }
function POW(a, b) { return Math.pow(a, b); }
function DEG(r) { return -r * 180.0 / PI; }
function RAD(degrees) { return (degrees * PI) / 180; }
function random(min, max) {
    return Math.random() * (max - min) + min;
}
function rand() {
    return Math.floor(65536 * Math.random());
}
function rand32() {
    return rand() | (rand() << 16);
}
function frand() {
    return Math.random();
}
function abs(a) {
    return a < 0 ? -a : a;
}
function distance_sq(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
function distance(x1, y1, x2, y2) {
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
}
function linedist(ex1, ey1, ex2, ey2, x, y) {
    var px = ex2 - ex1;
    var py = ey2 - ey1;
    var u = ((x - ex1) * px + (y - ey1) * py) / (px * px + py * py);
    if (u > 1)
        u = 1;
    else if (u < 0)
        u = 0;
    var dx = ex1 + u * px - x;
    var dy = ey1 + u * py - y;
    return Math.sqrt(dx * dx + dy * dy);
}
function lerp(from, to, progress) {
    return from + (to - from) * progress;
}
function sgn(a) {
    return a < 0 ? -1 : a > 0 ? 1 : 0;
}
function angle(x1, y1, x2, y2) {
    var a = DEG(Math.atan2(y2 - y1, x2 - x1));
    return a < 0 ? a + 360 : a;
}
function anglediff(a, b) {
    var diff = b - a;
    diff /= 360;
    diff = (diff - Math.floor(diff)) * 360;
    if (diff > 180) {
        diff -= 360;
    }
    return diff;
}
function clamp(value, min, max) {
    if (max > min) {
        if (value < min)
            return min;
        else if (value > max)
            return max;
        else
            return value;
    }
    else {
        if (value < max)
            return max;
        else if (value > min)
            return min;
        else
            return value;
    }
}
function scale(value, min, max, min2, max2) {
    return min2 + ((value - min) / (max - min)) * (max2 - min2);
}
function scaleclamp(value, min, max, min2, max2) {
    value = min2 + ((value - min) / (max - min)) * (max2 - min2);
    if (max2 > min2) {
        value = value < max2 ? value : max2;
        return value > min2 ? value : min2;
    }
    value = value < min2 ? value : min2;
    return value > max2 ? value : max2;
}
//****************************************************************************
//DRAWING
//****************************************************************************
function makecol(r, g, b, a) {
    a = typeof a !== 'undefined' ? a : 255;
    return (a << 24) | ((r & 0xff) << 16) | ((g & 0xff) << 8) | (b & 0xff);
}
function makecolf(r, g, b, a) {
    a = typeof a !== 'undefined' ? a : 1.0;
    return makecol(r * 255, g * 255, b * 255, a * 255);
}
function getr(colour) {
    return (colour >> 16) & 0xff;
}
function getg(colour) {
    return (colour >> 8) & 0xff;
}
function getb(colour) {
    return colour & 0xff;
}
function geta(colour) {
    return colour >>> 24;
}
function getrf(colour) {
    return ((colour >> 16) & 0xff) / 255.0;
}
function getgf(colour) {
    return ((colour >> 8) & 0xff) / 255.0;
}
function getbf(colour) {
    return (colour & 0xff) / 255.0;
}
function getaf(colour) {
    return (colour >>> 24) / 255.0;
}
function _fillstyle(bitmap, colour) {
    bitmap.context.fillStyle = 'rgba(' + getr(colour) + ',' + getg(colour) + ',' + getb(colour) + ',' + getaf(colour) + ')';
}
function _strokestyle(bitmap, colour, width) {
    if (!width)
        width = 1;
    bitmap.context.lineWidth = width;
    bitmap.context.strokeStyle = 'rgba(' + getr(colour) + ',' + getg(colour) + ',' + getb(colour) + ',' + getaf(colour) + ')';
}
function clear_graph(bmp) {
    bmp.context.clearRect(0, 0, bmp.canvas.width, bmp.canvas.height);
}
function fill_graph(bitmap, colour) {
    bitmap.context.clearRect(0, 0, bitmap.w, bitmap.h);
    _fillstyle(bitmap, colour);
    bitmap.context.fillRect(0, 0, bitmap.w, bitmap.h);
}
function line(bitmap, x1, y1, x2, y2, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _strokestyle(bitmap, colour, width);
    bitmap.context.beginPath();
    bitmap.context.moveTo(x1, y1);
    bitmap.context.lineTo(x2, y2);
    bitmap.context.stroke();
}
function vline(bitmap, x, y1, y2, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _fillstyle(bitmap, colour);
    bitmap.context.fillRect(x - width / 2, y1, width, y2 - y1);
}
function hline(bitmap, x1, y, x2, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _fillstyle(bitmap, colour);
    bitmap.context.fillRect(x1, y - width / 2, x2 - x1, width);
}
function triangle(bitmap, x1, y1, x2, y2, x3, y3, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _strokestyle(bitmap, colour, width);
    bitmap.context.beginPath();
    bitmap.context.moveTo(x1, y1);
    bitmap.context.lineTo(x2, y2);
    bitmap.context.lineTo(x3, y3);
    bitmap.context.closePath();
    bitmap.context.stroke();
}
function trianglefill(bitmap, x1, y1, x2, y2, x3, y3, colour) {
    _fillstyle(bitmap, colour);
    bitmap.context.beginPath();
    bitmap.context.moveTo(x1, y1);
    bitmap.context.lineTo(x2, y2);
    bitmap.context.lineTo(x3, y3);
    bitmap.context.closePath();
    bitmap.context.fill();
}
function polygon(bitmap, vertices, points, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _strokestyle(bitmap, colour, width);
    bitmap.context.beginPath();
    for (let c = 0; c < vertices; c++) {
        if (c)
            bitmap.context.lineTo(points[c * 2], points[c * 2 + 1]);
        else
            bitmap.context.moveTo(points[c * 2], points[c * 2 + 1]);
    }
    bitmap.context.closePath();
    bitmap.context.stroke();
}
function polygonfill(bitmap, vertices, points, colour) {
    _fillstyle(bitmap, colour);
    bitmap.context.beginPath();
    for (let c = 0; c < vertices; c++) {
        if (c)
            bitmap.context.lineTo(points[c * 2], points[c * 2 + 1]);
        else
            bitmap.context.moveTo(points[c * 2], points[c * 2 + 1]);
    }
    bitmap.context.closePath();
    bitmap.context.fill();
}
function rect(bitmap, x1, y1, w, h, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _strokestyle(bitmap, colour, width);
    bitmap.context.strokeRect(x1, y1, w, h);
}
function rectfill(bitmap, x1, y1, w, h, colour) {
    _fillstyle(bitmap, colour);
    bitmap.context.fillRect(x1, y1, w, h);
}
function circle(bitmap, x, y, radius, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _strokestyle(bitmap, colour, width);
    bitmap.context.beginPath();
    bitmap.context.arc(x, y, radius, 0, PI2);
    bitmap.context.stroke();
}
function circlefill(bitmap, x, y, radius, colour) {
    _fillstyle(bitmap, colour);
    bitmap.context.beginPath();
    bitmap.context.arc(x, y, radius, 0, PI2);
    bitmap.context.fill();
}
function arc(bitmap, x, y, ang1, ang2, r, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _strokestyle(bitmap, colour, width);
    bitmap.context.beginPath();
    if (ang1 > ang2) {
        bitmap.context.arc(x, y, r, RAD(ang1), RAD(ang2));
    }
    else {
        bitmap.context.arc(x, y, r, RAD(ang1), RAD(ang2));
    }
    bitmap.context.stroke();
}
function arcfill(bitmap, x, y, ang1, ang2, r, colour) {
    _fillstyle(bitmap, colour);
    bitmap.context.beginPath();
    if (ang1 > ang2) {
        bitmap.context.arc(x, y, r, RAD(ang1), RAD(ang2));
    }
    else {
        bitmap.context.arc(x, y, r, RAD(ang1), RAD(ang2));
    }
    bitmap.context.fill();
}
function ellipse(bitmap, x, y, rx, ry, colour, width) {
    width = typeof width !== 'undefined' ? width : 1;
    _strokestyle(bitmap, colour, width);
    bitmap.context.save();
    bitmap.context.translate(x, y);
    bitmap.context.scale(rx, ry);
    bitmap.context.beginPath();
    bitmap.context.arc(0, 0, 1, 0, PI2);
    bitmap.context.restore();
    bitmap.context.stroke();
}
function ellipsefill(bitmap, x, y, rx, ry, colour) {
    _fillstyle(bitmap, colour);
    bitmap.context.save();
    bitmap.context.translate(x, y);
    bitmap.context.scale(rx, ry);
    bitmap.context.beginPath();
    bitmap.context.arc(0, 0, 1, 0, PI2);
    bitmap.context.restore();
    bitmap.context.fill();
}
//*******************************************************************************
//GRAPH
//*******************************************************************************
function stretch_blit(source, dest, sx, sy, sw, sh, dx, dy, dw, dh) {
    dest.context.drawImage(source.canvas, sx, sy, sw, sh, dx, dy, dw, dh);
}
function draw_sprite(bmp, sprite, x, y) {
    bmp.context.drawImage(sprite.context.canvas, x - sprite.w / 2, y - sprite.h / 2);
}
function scaled_sprite(bmp, sprite, x, y, sx, sy) {
    sy = typeof sy !== 'undefined' ? sy : sx;
    const u = sx * sprite.w / 2;
    const v = sy * sprite.h / 2;
    bmp.context.save();
    bmp.context.translate(x - u, y - v);
    bmp.context.scale(sx, sy);
    bmp.context.drawImage(sprite.context.canvas, 0, 0);
    bmp.context.restore();
}
function rotate_sprite(bmp, sprite, x, y, angle) {
    const u = sprite.w / 2;
    const v = sprite.h / 2;
    bmp.context.save();
    bmp.context.translate(x, y);
    bmp.context.rotate(RAD(angle));
    bmp.context.translate(-u, -v);
    bmp.context.drawImage(sprite.context.canvas, 0, 0);
    bmp.context.restore();
}
function pivot_sprite(bmp, sprite, x, y, cx, cy, angle) {
    bmp.context.save();
    bmp.context.translate(x, y);
    bmp.context.rotate(RAD(angle));
    bmp.context.translate(-cx, -cy);
    bmp.context.drawImage(sprite.context.canvas, 0, 0);
    bmp.context.restore();
}
function rotate_scaled_sprite(bmp, sprite, x, y, angle, sx, sy) {
    sy = typeof sy !== 'undefined' ? sy : sx;
    const u = sx * sprite.w / 2;
    const v = sy * sprite.h / 2;
    bmp.context.save();
    bmp.context.translate(x, y);
    bmp.context.rotate(RAD(angle));
    bmp.context.translate(-u, -v);
    bmp.context.scale(sx, sy);
    bmp.context.drawImage(sprite.context.canvas, 0, 0);
    bmp.context.restore();
}
function pivot_scaled_sprite(bmp, sprite, x, y, cx, cy, angle, sx, sy) {
    sy = typeof sy !== 'undefined' ? sy : sx;
    const u = sx * cx;
    const v = sy * cy;
    bmp.context.save();
    bmp.context.translate(x, y);
    bmp.context.rotate(RAD(angle));
    bmp.context.translate(-u, -v);
    bmp.context.scale(sx, sy);
    bmp.context.drawImage(sprite.context.canvas, 0, 0);
    bmp.context.restore();
}
function blit(source, dest, sx, sy, dx, dy, w, h) {
    dest.context.drawImage(source.context.canvas, sx, sy, w, h, dx, dy, w, h);
}
function simple_blit(source, dest, x, y) {
    dest.context.drawImage(source.context.canvas, x, y);
}
function create_graph(width, height) {
    log("Creating graph at " + width + " x " + height + "!");
    var cv = document.createElement('canvas');
    cv.width = width;
    cv.height = height;
    var ctx = cv.getContext("2d");
    var bmp = { w: width, h: height, canvas: cv, context: ctx, ready: true, type: "bmp" };
    return bmp;
}
function load_graph(filename) {
    log("Loading graph " + filename + "...");
    var img = new Image();
    img.src = filename;
    var now = time();
    var cv = document.createElement('canvas');
    var ctx = cv.getContext("2d");
    var bmp = { canvas: cv, context: ctx, w: -1, h: -1, ready: false, type: "bmp" };
    _downloadables.push(bmp);
    img.onload = function () {
        log("Graph " + filename + " loaded, size: " + img.width + " x " + img.height + "!");
        bmp.canvas.width = img.width;
        bmp.canvas.height = img.height;
        if (bmp.context)
            bmp.context.drawImage(img, 0, 0);
        bmp.w = img.width;
        bmp.h = img.height;
        bmp.ready = true;
    };
    return bmp;
}
function load_sheet(filename, w, h) {
    log("Loading spritesheet " + filename + "...");
    var img = new Image();
    img.src = filename;
    var now = time();
    var cv = document.createElement('canvas');
    var ctx = cv.getContext("2d");
    var bmp = { canvas: cv, context: ctx, w: -1, h: -1, ready: false, type: "bmp" };
    var sheet = [];
    _downloadables.push(bmp);
    img.onload = function () {
        log("Sheet " + filename + " loaded, size: " + img.width + " x " + img.height + "!");
        bmp.canvas.width = img.width;
        bmp.canvas.height = img.height;
        bmp.context.drawImage(img, 0, 0);
        bmp.w = img.width;
        bmp.h = img.height;
        bmp.ready = true;
        var nx = Math.floor(bmp.w / w), ny = Math.floor(bmp.h / h);
        for (var y = 0; y < ny; y++) {
            for (var x = 0; x < nx; x++) {
                var frame = create_graph(w, h);
                blit(bmp, frame, x * w, y * h, 0, 0, w, h);
                sheet.push(frame);
            }
        }
        log("Created " + sheet.length + " frames, each is " + w + "x" + h + "!");
    };
    return sheet;
}
//*******************************************************************************
//SOUND
//*******************************************************************************
var _volume = 1.0;
var _samples = [];
/// Sets global volume
function set_volume(volume) {
    _volume = volume;
    for (var c = 0; c < _samples.length; c++) {
        //_samples[c].element.volume = _samples[c].volume*_volume;
    }
}
function get_volume() {
    return _volume;
}
function load_sample(filename) {
    var audio = document.createElement('audio');
    audio.src = filename;
    var sample = { element: audio, file: filename, volume: 1.0, ready: false, type: "snd" };
    _downloadables.push(sample);
    _samples.push(sample);
    log("Loading sample " + filename + "...");
    audio.onloadeddata = function () {
        if (!sample.ready) {
            sample.ready = true;
            log("Sample " + filename + " loaded!");
        }
    };
    return sample;
}
/// @param vol playback volume
/// @param freq speed, 1.0 is normal
/// @param loop loop or not to loop
function play_sample(sample, vol, freq, loop) {
    vol = typeof vol !== 'undefined' ? vol : 1.0;
    freq = typeof freq !== 'undefined' ? vol : 1.0;
    loop = typeof loop !== 'undefined' ? loop : false;
    adjust_sample(sample, vol, freq, loop);
    sample.element.currentTime = 0;
    sample.element.play();
}
/// Adjust sample during playback
/// Adjusts sample data Note how pan is left out, as it doesn't seem to have a js counterpart. freq will probably not work everywhere too!
/// @param sample sample 
/// @param vol playback volume
/// @param freq speed, 1.0 is normal
/// @param loop loop or not to loop
function adjust_sample(sample, vol, freq, loop) {
    vol = typeof vol !== 'undefined' ? vol : 1.0;
    freq = typeof freq !== 'undefined' ? vol : 1.0;
    loop = typeof loop !== 'undefined' ? loop : false;
    sample.volume = vol;
    sample.element.volume = sample.volume * vol;
    sample.element.loop = loop;
    sample.element.playbackRate = freq;
}
/// Stops playing
/// Also resets position.
function stop_sample(sample) {
    sample.element.pause();
    sample.element.currentTime = 0;
}
/// Pauses playing
/// Also doesn't reset position. Use play_sample() to resume.
function pause_sample(sample) {
    sample.element.pause();
}
//********************************************************************************
//TEXT
//********************************************************************************
//https://cloudconvert.com/ttf-to-woff
//https://www.fontspace.com/search?q=pixel
//https://hellogreg.github.io/woff2base/
function load_base64_font(data) {
    var s = document.createElement('style');
    var fontname = "font" + (_num_fonts++);
    s.id = fontname;
    s.type = "text/css";
    document.head.appendChild(s);
    s.textContent = "@font-face { font-family: " + fontname + "; src:url('data:application/font-woff;base64," + data + "') format('woff');}";
    return { element: s, file: "", name: fontname, size: 16, textAlign: "left", type: "fnt" };
}
function load_font(filename) {
    var s = document.createElement('style');
    var fontname = "font" + (_num_fonts++);
    s.id = fontname;
    s.type = "text/css";
    document.head.appendChild(s);
    s.textContent = "@font-face { font-family: " + fontname + "; src:url('" + filename + "');}";
    return { element: s, file: filename, size: 16, textAlign: "left", name: fontname, type: "fnt" };
}
function create_font(family) {
    var s = document.createElement('style');
    return { element: s, file: "", size: 16, textAlign: "left", name: family, type: "fnt" };
}
function text_width(s) {
    return canvas.context.measureText(s).width;
}
function print(bitmap, f, s, x, y, size, colour, align) {
    size = typeof size !== 'undefined' ? size : 16;
    colour = typeof colour !== 'undefined' ? colour : 0xFFFFFFFF;
    var textAlign = "left";
    align = typeof align !== 'undefined' ? align : 0;
    switch (align) {
        case 0:
            textAlign = "left";
            break;
        case 1:
            textAlign = "center";
            break;
        case 2:
            textAlign = "right";
            break;
    }
    bitmap.context.font = size.toFixed() + 'px ' + f.name;
    bitmap.context.textAlign = textAlign;
    _fillstyle(bitmap, colour);
    bitmap.context.fillText(s, x, y);
}
