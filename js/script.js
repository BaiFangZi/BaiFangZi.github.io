// declaraction of document.ready() function.
(function() {
	var ie = !!(window.attachEvent && !window.opera);
	var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
	var fn = [];
	var run = function() {
		for (var i = 0; i < fn.length; i++) fn[i]();
	};
	var d = document;
	d.ready = function(f) {
		if (!ie && !wk && d.addEventListener)
			return d.addEventListener('DOMContentLoaded', f, false);
		if (fn.push(f) > 1) return;
		if (ie)
			(function() {
				try {
					d.documentElement.doScroll('left');
					run();
				} catch (err) {
					setTimeout(arguments.callee, 0);
				}
			})();
		else if (wk)
			var t = setInterval(function() {
				if (/^(loaded|complete)$/.test(d.readyState))
					clearInterval(t), run();
			}, 0);
	};
})();
document.ready(
	function() {
		const qq = document.getElementsByClassName('link-item')[1]
		const email = document.getElementsByClassName('link-item')[2]
		if (qq && email) {
			qq.addEventListener('click', function(e) {
				if (e && e.preventDefault)
					e.preventDefault();
				else
					window.event.returnValue = false;
				document.getElementsByClassName('qq-img')[0].style.display = 'block'
				document.getElementsByClassName('email')[0].style.display = 'none'
			})
			qq.addEventListener('mouseleave', function() {
				document.getElementsByClassName('qq-img')[0].style.display = 'none'
			})
			email.addEventListener('click', function(e) {
				if (e && e.preventDefault)
					e.preventDefault();
				else
					window.event.returnValue = false;
				document.getElementsByClassName('qq-img')[0].style.display = 'none'
				document.getElementsByClassName('email')[0].style.display = 'block'
			})
			email.addEventListener('mouseleave', function(e) {
				document.getElementsByClassName('email')[0].style.display = 'none'
			})
		}
	}
)