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
  pWallpaper.grid_settings.cell_width  = 197;
  pWallpaper.grid_settings.cell_height = 170;
  pWallpaper.grid_settings.row_offset  = 99;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  rectMode(CENTER);
  //draw_symbol()
  stroke(255, 255, 255)
  fill(176, 47, 13)
  draw_custom1()
  stroke(255, 255, 255)
  fill(206, 58, 15)
  draw_custom2()
  stroke(255, 255, 255)
  fill(235, 69, 17)
  draw_custom3()
  fill(153, 33, 10)
  draw_hex()
}



function draw_custom1(){
  beginShape();
  vertex(1.73, 29.29);
  vertex(51.64, .48);
  vertex(99.99, 28.39);
  vertex(148.36, .48);
  vertex(198.27, 29.29);
  vertex(148.36, 58.11);
  vertex(99.99, 86.04);
  vertex(51.64, 58.11);
  vertex(1.73, 29.29);
  endShape(CLOSE);
}

function draw_custom2(){
  beginShape();
  vertex(99.98, 199.52);
  vertex(50.08, 170.69);
  vertex(50.08, 114.87);
  vertex(1.72, 86.93);
  vertex(1.71, 29.31);
  vertex(51.63, 58.12);
  vertex(100, 86.04);
  vertex(99.99, 141.88);
  vertex(99.98, 199.52);
  endShape(CLOSE);
}

function draw_custom3(){
  beginShape();
  vertex(100.02, 199.51);
  vertex(149.92, 170.68);
  vertex(149.92, 114.86);
  vertex(198.28, 86.92);
  vertex(198.29, 29.3);
  vertex(148.37, 58.11);
  vertex(100, 86.03);
  vertex(100.01, 141.87);
  vertex(100.02, 199.51);
  endShape(CLOSE);
}


function draw_hex(){
  beginShape();
  vertex(246.92, 170.87)
  vertex(246.92, 114.86)
  vertex(197.42, 86.86)
  vertex(149.92, 114.86)
  vertex(149.92, 170.87)
  vertex(198.42, 198.87)
  vertex(246.92, 170.87)
  endShape(CLOSE)
}








