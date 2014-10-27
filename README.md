###service.ontouchclick.jquery

##Description

service-ontouchclick.jquery is a lightweight (less than 1 kB minified) jQuery plugin that allows a developer to attach
a callback function to a DOM element; the callback is called when the user touches or clicks the element.

On devices where the user must click on an element the callback is invoked immediately when the 'click' event is occuring.

On touch devices the callback is triggered as soon as the 'touchend' event is coming up (the user releases the tap) or when the 'click' event
comes up, whatever occurs first. Depending on 'meta' settings in the webpage, the 'click' event might automatically fire 300ms after the user
makes a tap.
The above concept therefore also eliminates the use of double tap. If you want to have that then you have to consider an alternative approach (and
probably write the necessary javascript code for this.).

##Tutorial and Documentation

You can find the tutorial and API description at [code.cwwonline.be](http://code.cwwonline.be/jqueryservicesontouchclick).
