{\rtf1\ansi\ansicpg936\cocoartf1561\cocoasubrtf200
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var x=100;\
var y=100;\
var x= -43;\
var y= 35;\
var bunnyx=-156;\
var bunnyy=64;\
var frogx = 98;\
var frogy = 346;\
var z = random(1,5);\
var a = random(1,5);\
var q = random(1,5);\
background(255, 255, 255);\
draw = function() \{\
    fill(255, 255, 255);\
    background(255, 255, 255);\
    noStroke();\
    fill(0, 46, 82);\
    quad(x+122,y+54,x+83,y+53,x+45,y+87,x+153,y+86);\
    fill(250, 232, 200);\
    ellipse(x+103,y+2,77,106);//head\
    fill(247, 217, 140);\
    arc (x+99,y+67,25,30,70,243);//neck\
    arc (x+108,y+68,23,33,-61,110);\
    fill(255, 255, 255);\
    ellipse(x+80,y-8,21,8);//left eye\
    ellipse(x+118,y-8,21,8);//right eye\
    fill(0, 0, 0);\
    ellipse(x+80,y-8,8,7);//left pupil\
    fill(0,0,0);\
    ellipse(x+118,y-8,8,7);//right pupil\
    fill(242, 210, 155);\
    arc(x+100,y-1,238,27,90,94);//nose\
    fill(230, 85, 49);\
    arc(x+99,y+27,26,9,8,166);//mouth\
    fill(66, 58, 58);\
    arc(x+81,y-17,22,-5,18,179);//left eyebrow\
    arc(x+120,y-17,22,-5,18,179);//right eyebrow\
    stroke(0,0,0);\
    fill(45, 90, 224);\
    arc(x+103,y-24,69,66,177,358);\
    arc(x+101,y-26,69,27,175,354);\
    fill(166, 10, 250);\
    text("B",x+72,y-33,124,134);\
    fill(48, 209, 217);\
    text("R",x+79,y-33,124,134);\
    fill(242, 236, 48);\
    text("O",x+87,y-33,124,134);\
    fill(94, 230, 85);\
    text("O",x+97,y-33,124,134);\
    fill(237, 100, 3);\
    text("K",x+108,y-33,124,134);\
    fill(250, 15, 219);\
    text("L",x+115,y-33,124,134);\
    fill(255, 0, 0);\
    text("Y",x+120,y-33,124,134);\
    fill(72, 242, 211);\
    text("N",x+127,y-33,124,134);\
    fill(255, 255, 255);\
    text("NY",x+92,y-50,262,142);\
    fill(250, 232, 200);\
    arc(x+64,y+3,13,30,82,282);//left ear\
    arc(x+142,y+3,13,30,269,465);//right ear\
    fill(0, 46, 82);\
    quad(x+153,y+158,x+154,y+87,x+45,y+87,x+45,y+159);//body\
    noStroke();\
    fill(247, 217, 140);\
    triangle(x+103,y+84,x+118,y+53,x+86,y+54);\
    x=x+z;\
    \
fill(255, 255, 255);\
stroke(0, 0, 0);\
ellipse(bunnyx+175, bunnyy+118, 30, 60);  // left ear\
ellipse(bunnyx+223, bunnyy+118, 30, 60);  // right ear\
\
ellipse(bunnyx+200, bunnyy+170, 75, 75);    // face\
\
fill(0, 0, 0);\
ellipse(bunnyx+180, bunnyy+160, 5, 5);  // left eye\
ellipse(bunnyx+220, bunnyy+160,5 ,5);  // right eye\
\
line(bunnyx+180, bunnyy+190, bunnyx+220, bunnyy+190);   // mouth\
\
noFill();\
rect(bunnyx+185, bunnyy+190, 15, 10); // left tooth\
rect(bunnyx+200, bunnyy+190, 15, 10); // right tooth\
bunnyx=bunnyx+a;\
noStroke();\
fill(30, 204, 91); // a nice froggy green!\
ellipse(frogx, frogy, 200, 100); // face\
ellipse(frogx - 50, frogy - 50, 40, 40); // left eye socket\
ellipse(frogx + 50, frogy - 50, 40, 40); // right eye socket\
fill(255, 255, 255); // for the whites of the eyes!\
ellipse(frogx - 50, frogy - 50, 30, 30); // left eyeball\
ellipse(frogx + 50, frogy - 50, 30, 30); // right eyeball\
fill(0, 0, 0);\
ellipse(frogx,frogy,90,50);\
fill(0, 0, 0);\
rect(frogx-55,frogy-55,10,10);\
rect(frogx+45,frogy-56,10,10);\
frogx=frogx+q;\
 \};}