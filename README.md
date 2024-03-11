# workshop-task--0-

### workshop task 0 notes:
- looked up specific rgb codes for different colours that i wanted so it was customised
    - https://www.rapidtables.com/web/color/RGB_Color.html
- i wanted to experiment with quadrilaterals
    - struggled to figure out which number coordinated with which point on the shape but with some tiral and error i managed to figure it out with help from the auto-refresh feature
    - as the quadrilateral is different to the rectangle i used in the tutorial, i had to get some help from chat gpt to see how to effectively move the whole quadrilateral as one
    - once it was displyed to me i was able to understand where my reaasoning went wrong and each point had to move individually
    - i then decided i wanted the shape to change directions based on when it hits the edge of the canvas - to do this i looked at the coding train’s video on the bouncing ball
    - that tutorial got me halfway there and by finding another tutorial on youtube from  channel called “mindforcode” i was able to work it so the shape was travelling diagonally and bouncing off of 3/4 sides
    - i was having trouble however getting it to bounce off of the roof of the canvas as y value was never going to allow the shape to reach the top
    - so instead of y being smaller than 0, i had to change it so the shape would change the direction when y + 350 < 200. this allowed the shape to travel higher freely and hit the top of the canvas easily
