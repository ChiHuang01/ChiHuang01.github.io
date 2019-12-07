// JavaScript Document

// Wrap every letter in a span
//var textWrapper = document.querySelector('.ml3');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// Wrap every letter in a span

//***following code is for "Hi there"***///
// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml3 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

// Wrap every letter in a span
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml3 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

//***following is the rotating text of "do you know" ***//
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 200;

  if (this.isDeleting) { delta /= 2.5; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};


///*this makes it so that once the page is loaded, the text starts playing*///
  function start() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }

  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

window.onload = setTimeout(start, 4000);



//**scroll activated animination***//
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

///***Check if it's time to start the animation.***///
function checkAnimation() {
    var $elem = $('.animated-image');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation()});




///***Below is the code for the graph***//
// Plotly.d3.csv("https://raw.githubusercontent.com/ChiHuang01/ChiHuang01.github.io/master/PUI%20Final%20Website/data/pui_website_data.csv", function(err, rows){})

// var trace1 = {
//   x: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
//   y: [647258, 639784, 630227, 637077, 623788, 621553, 590364, 576250, 564708, 549928, 550996, 552830],
//   type: 'scatter', 
//   name: 'All',
// };


// var trace2 = {
//   x: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
//   y: [391401, 386361, 403308, 403543, 392316, 390155, 394698, 401051, 391440, 373571, 360867, 358363],
//   type: 'scatter',
//   name: 'Sheltered',
// };

// var trace3 = {
//   x: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
//   y: [255857, 253423, 226919, 233534, 231472, 231398, 195666, 175399, 173268, 176357, 190129, 194467],
//   type: 'scatter',
//   name: 'Unsheltered',
// };

// var data = [trace1, trace2, trace3];

// var layout = {
//   title: {
//     text:'Estimates of People Experiencing Homelessness in the U.S.',
//     font: {
//       family: 'Courier New, monospace',
//       size: 24
//     },
//     xref: 'paper',
//     x: 0.20,
//   },
//   xaxis: {
//     title: {
//       text: 'Year',
//       font: {
//         family: 'Courier New, monospace',
//         size: 18,
//         color: '#7f7f7f'
//       }
//     },
//   },
//   yaxis: {
//     title: {
//       text: 'Number of People',
//       font: {
//         family: 'Courier New, monospace',
//         size: 18,
//         color: '#7f7f7f'
//       }
//     }
//   }
// };

// Plotly.newPlot('myDiv', data, layout); {showSendToCloud: true};
