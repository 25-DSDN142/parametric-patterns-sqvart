//your parameter variables go here!
let rect_x= 35;
let rect_y= 0;
let rect_width  = 300;
let rect_height = 20;
let circle_width = 25;
let circle_height= 25;
let rect_color= 1

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if (rect_color==1){ 
    stroke(255, 0, 0)
    fill(255, 0, 0)}  
    else {stroke(0, 255, 0)
      fill(0, 0, 0)
    }
 
  rectMode(CENTER);
  translate(100, 100)
  //draw_symbol()
  draw_customshape()
}

function draw_symbol(){
    push()
  rotate(90)
  rect(rect_x+10, rect_y, rect_width, rect_height)
  pop()
  push()
  rotate(210)
  rect(rect_x, rect_y, rect_width, rect_height)
  pop()
  push()
  rotate(330)
  rect(rect_x, rect_y, rect_width, rect_height)
  pop()
  circle(0, 0, circle_height)
  
}

function draw_customshape(){
  translate(-85, -100)
  fill(0, 255, 0)
  beginShape();
  vertex(0, 28.87);
  vertex(50, 0);
  vertex(86.6, 21.14);
  vertex(123.2, 0);
  vertex(173.2, 28.87);
  vertex(123.2, 57.74);
  vertex(86, 78.87);
  vertex(50, 57.74);
  vertex(0, 28.87);
  endShape(CLOSE);
}
