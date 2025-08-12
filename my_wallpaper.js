//your parameter variables go here!
let rect_y= 0;
let rect_width  = 300;
let rect_height = 20;
let circle_width = 25;
let circle_height= 25;

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 347.12 ;
  pWallpaper.grid_settings.cell_height = 301 ;
  pWallpaper.grid_settings.row_offset  = 173.5;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  rectMode(CENTER);
  //draw_symbol()
  noStroke()
  fill(239, 169, 10)
  draw_custom1()
  fill(238, 144, 11)
  draw_custom2()
  fill(237, 119, 12)
  draw_custom3()
  fill(238, 144, 11)
  draw_custom5()
  fill(239, 169, 10)
  draw_custom6()
  fill(237, 119, 12)
  draw_custom7()
}



function draw_custom1(){
  beginShape();
  vertex(260.16, 150.83);
  vertex(173.92, 200.62);
  vertex(173.56, 200.83);
  vertex(173.2, 200.62);
  vertex(86.96, 150.83);
  vertex(87.32, 150.62);
  vertex(173.56, 100.83);
  vertex(259.8, 150.62);
  vertex(260.16, 150.83);
  endShape(CLOSE);
}

function draw_custom2(){
  beginShape();
  vertex(260.16, 150.83);
  vertex(260.16, 250.83);
  vertex(173.56, 300.83);
  vertex(173.56, 200.83);
  vertex(173.92, 200.62);
  vertex(260.16, 150.83);
  endShape(CLOSE);
}

function draw_custom3(){
  beginShape();
  vertex(173.56, 200.83);
  vertex(173.56, 300.83);
  vertex(86.96, 250.83);
  vertex(86.96, 150.83);
  vertex(173.2, 200.62);
  vertex(173.56, 200.83);
  endShape(CLOSE);
}


function draw_custom5(){
  beginShape();
  vertex(173.56, 0)
  vertex(173.56, 100.83)
  vertex(87.32, 150.62)
  vertex(86.96, 150.83)
  vertex(86.96, 250.41)
  vertex(0, 300.62)
  vertex(0, 100.21)
  vertex(173.56, 0)
  endShape(CLOSE)
}

function draw_custom6(){
  beginShape();
  vertex(347.12, 300.62)
  vertex(173.56, 400.83)
  vertex(0, 300.62)
  vertex(86.96, 250.41)
  vertex(86.96, 250.83)
  vertex(173.56, 300.83)
  vertex(260.16, 250.83)
  vertex(260.16, 250.41)
  vertex(347.12, 300.62)
  endShape(CLOSE)
}



function draw_custom7(){
  beginShape();
  vertex(347.12, 100.21)
  vertex(347.12, 300.62)
  vertex(260.16, 250.41)
  vertex(260.16, 150.83)
  vertex(259.8, 150.62)
  vertex(173.56, 100.83)
  vertex(173.56, 0)
  vertex(347.12, 100.21)
  endShape(CLOSE)
}





























