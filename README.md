
#Itunes Slider JS

##Example
[CodePen](http://codepen.io/D_Slike/full/QGyvQJ/)

##Last version connection link
```javascript
<script src="https://rawgit.com/DSlike/itunes-slider/master/itunesJSlider.js"></script>
```

##Using:
In JS code write
```javascript
$(document).ready(function(){
	$(".wrapper").iCarousel({
    'sensivity':'20',
    'motion':'true',
    'clickToFull':'true',
    'slidesMargin':'20',
    'start':'0'
  });
});
 ```

 Value | Explanation
 --- | ---
 sensivity|sensivity to mouse movements (0-100)
 motion|(true/false) will image change its position in response to movement of the mouse
 clockToFull|(true/false) will be image bigger on click
 slidesMargin|margin between images
 start|first slide when initialized

Connect the CSS file
```
<link href="https://rawgit.com/DSlike/itunes-slider/master/itunesJSlider.css">
```

***
