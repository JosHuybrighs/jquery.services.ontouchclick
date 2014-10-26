/*! jQuery ontouchclick plugin. MIT License. */

/* ontouchclick() is a jQuery plugin derived from similar plugins that are published on GitHub
 * but are missing some key features.
 * 
 * This plugin allows you to assign events to all touch/click events while ensuring the events are 
 * correctly fired and also don’t fire twice.
 * 
 * Usage:
 * 
 *  Without arguments:
 *  $('button').onTouchclick(function(e) {
 *     // Do whathever needs to be done.
 *	});
 * With arguments:
 *  $('button').onTouchclick({ eventData: value }, function(e) {
 *     var id = e.data.eventData; // Get passed 'value'.
 *     // Do whathever needs to be done.
 *	});
 * 
 **/

jQuery.fn.ontouchclick = function (arg1, arg2) {

    var callback = (arg2 == undefined) ? arg1 : arg2;
    var eventData = (arg2 == undefined) ? null : arg1;
    var lastTouched = 0;
    var eventsCount = { ts: 0, tm: 0, te: 0, cl: 0 };

    return $(this).on('touchstart touchmove touchend click', function (e) {
        e.preventDefault();
		e.stopPropagation();
        var handle = false;
        if (e.type == 'touchstart') {
            ++eventsCount.ts;
            $(this).addClass('touchStart');
            lastTouched = (new Date()).getMilliseconds();
        }
        else if (e.type == 'touchmove') {
            ++eventsCount.tm;
        }
        else if (e.type == 'touchend') {
            ++eventsCount.te;
            var msSinceTouch = (new Date()).getMilliseconds() - lastTouched;
            handle = true;
        }
        else {
            ++eventsCount.cl;
            handle = true;
        }
        $(this).removeClass('touchStart');
        if (handle) {
            if (e.handled != true) {
                if (eventData != null) {
                    e.data = new Object();
                    for (var k in eventData) {
                        e.data[k] = eventData[k];
                    }
                }
                callback.call(this, e);
                e.handled = true;
			}
		}
    });

};