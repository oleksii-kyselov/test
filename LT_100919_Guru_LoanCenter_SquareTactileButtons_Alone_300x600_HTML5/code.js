var tl = TweenLite;
var tcells = [];
var tcellbgs = [];
var labels = [];
for (var i = 1; i <= 10; i++) {
	tcells.push(window['tcell' + i]);
	tcellbgs.push(window['tcellbg' + i]);
	labels.push(window['label' + i]);
}

// intro animations
// first run
tl.to(banner, 0.5, { opacity: 1, ease: Power0.easeNone });
tl.to(text1, 1, { opacity: 1, ease: Power0.easeNone, delay: 0.1 });
tl.to(text2, 1, { opacity: 1, ease: Power0.easeNone, delay: 0.3 });
tl.to(circle1, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 0.5 });
tl.to(circle2, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 0.6 });
tl.to(circle3, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 0.7 });
tl.to(circle4, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 0.8 });
tl.to(circle5, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 0.9 });
tl.to(circle6, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 1.0 });
tl.to(circle7, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 1.1 });
tl.to(circle8, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 1.2 });
tl.to(circle9, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 1.3 });
tl.to(circle10, 0.6, {autoAlpha:1, ease: Power2.easeIn, delay: 1.4, onComplete: autoMouseover});
tl.to(cta, 0.4, { opacity: 1, bottom: 49, ease: Back.easeOut, delay: 1 });
tl.to(ctatext, 0.55, { opacity: 1, left:0, ease: Power4.easeOut, delay: 1.1 });
tl.to(arrow, 0.55, { opacity: 1, right: 42, ease: Power4.easeOut, delay: 1.1 });
tl.to(cta, 0.05, { height:64, ease:Power0.easeNone, delay:2 });
tl.to(ctatopbg, 0.05, { backgroundColor:'#44ace6', ease:Power0.easeNone, delay:2 });
tl.to(cta, 0.05, { height:59, ease:Power0.easeNone, delay:3.2 });
tl.to(ctatopbg, 0.05, { backgroundColor:'#2f86d4', ease:Power0.easeNone, delay:3.2 });
tl.to(shine, 1, { left: 280, ease: Power0.easeNone, delay: 1.9 });
tl.set(shine, { left: -280, delay: 5.6 });

tl.to(shine, 1, { left: 280, ease: Power0.easeNone, delay: 8 });
tl.set(shine, { left: -280, delay: 9 });

tl.to(shine, 1, { left: 280, ease: Power0.easeNone, delay: 14 });

// main hit clickTAG functions
function hitClick() {
    window.open(clickTag, '_blank'); 
}

function hitOver() {
    tl.to(ctatopbg, 0.05, { backgroundColor:'#44ace6', ease:Power0.easeNone });
    tl.to(cta, 0.05, { height:64, ease:Power0.easeNone });
}

function hitOut() {
    tl.to(ctatopbg, 0.05, { backgroundColor:'#2f86d4', ease:Power0.easeNone });
    tl.to(cta, 0.05, { height:59, ease:Power0.easeNone });
}

hit.addEventListener('mouseover', hitOver, false);
hit.addEventListener('mouseout', hitOut, false);
hit.addEventListener('click', hitClick, false);
loanstable.addEventListener('click', hitClick, false);

// retreive selected button's value
function getTcellValue(e) {
	switch(e.id) {
    case "circle1":
        return '5000';
        break;
    case "circle2":
        return '10000';
        break;
    case "circle3":
        return '25000';
        break;
    case "circle4":
        return '50000';
        break;
    case "circle5":
        return '75000';
        break;
    case "circle6":
        return '100000';
        break;
    case "circle7":
        return '150000';
        break;
    case "circle8":
        return '200000';
        break;
    case "circle9":
        return '250000';
        break;
    case "circle10":
        return '300000';
        break;
    default:
        return '';
	}
}

// alternate hitClick for button selection
function hitClickAlt() {
	var value = getTcellValue(this);
	var separator = clickTag.indexOf('?') > -1 ? '&' : '?';
    window.open(clickTag + separator + 'requested-loan-amount=' + value + '&desired-loan-amount=' + value + '&loan-amount=' + value + '&amount=' + value, '_blank');
}

var twn;
var rollovers = [circle_rollover1, circle_rollover2, circle_rollover3, circle_rollover4, circle_rollover5, circle_rollover6, circle_rollover7, circle_rollover8, circle_rollover9, circle_rollover10];
var circles = [circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8, circle9, circle10];

function rolloverCell(index, animate) {
	var item = rollovers[index];	
	if (animate) {	
		twn = tl.to(item, 0.2, { opacity: 1, ease: Power0.easeNone});			
	} else {
        item.style.opacity = '1';
	}	
}

function rolloutCell(index, animate) {
	var item = rollovers[index];   
	if (twn) {
		twn.kill();
		twn = null;
	} 
	if (animate) {
		twn = tl.to(item, 0.2, { opacity: 0, ease: Power0.easeNone})
	} else {
        item.style.opacity = '0';
    }
}

var i = 0;
var j=-1;
var st;
function autoMouseover() {
    st = setTimeout(function () {  
        if (j >= 0)rolloutCell(j,true);
        if (i < rollovers.length) {
            rolloverCell(i, true); 
        }
        i++;j++;
        if (i <= rollovers.length) {            
         autoMouseover();             
        }
   }, 1100);
}

/* set mouseovers for buttons */
circles.forEach(function(item, index) {
	item.addEventListener('mouseover', function() {
		rolloutCell(0, false);
		rolloutCell(1, false);
		rolloutCell(2, false);
		rolloutCell(3, false);
		rolloutCell(4, false);
		rolloutCell(5, false);
		rolloutCell(6, false);
		rolloutCell(7, false);
		rolloutCell(8, false);
		rolloutCell(9, false);
        clearTimeout(st);
		rolloverCell(index);
	}, false);
	item.addEventListener('mouseout', function() {
		rolloutCell(index);
	}, false);
    item.addEventListener('click', hitClickAlt);
});