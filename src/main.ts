
function draw() 
{
    clear_graph(canvas);
    
    line(canvas, 0, 0, canvas.w, canvas.h, 0xFFFFFFFF);
    rect(canvas, 0, 0, 100, 100, 0xFF0000FF);
    rectfill(canvas, 100, 100, 200, 200, 0xFF00FF00);
    circle(canvas, 300, 300, 50, 0xFFFF0000);
    circlefill(canvas, mouse_x(), mouse_y(), 50, 0xFF00FFFF);

    print(canvas,font, "Hello World ! 1 2 3 4 5", 1, 400,16);

    
    
}

function update(delta:number) 
{
    
}
 


function main() 
{
  init_gfx("canvas", window.innerWidth, window.innerHeight);
  const FPS= 60;
  let fps = FPS;
  let delay = 1000 / fps;
  let lastTime = 0;


  ready(function () 
  {
    loop(function () 
    {
      var delta = time() - lastTime;
      if (delta >= delay) 
      {
         update(delta);
         draw();
         lastTime = time();
      }
    }, BPS_TO_TIMER(60));
  });
  return 0;
}
START();