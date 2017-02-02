// JavaScript Document

/* Dropdown Menu Show */
function showMenu() {
	$(this).removeClass("drop-collapsed");
	$(this).addClass("open");
}

/* Dropdown Menu hide */
function hideMenu(){
	$(this).removeClass("open");
	var $dropdown = $(".dropdown");

	$dropdown.each(function () {
		$(this).addClass("drop-collapsed");
	});
}
/* Stat Counter */
function count($this){
	var current = parseInt($this.html(), 10);
	current = current + 1; /* Where 50 is increment */	
	$this.html(++current);
	if(current > $this.data('count')){
		$this.html($this.data('count'));
	} else {    
		setTimeout(function(){count($this)}, 50);
	}
}

function progressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 1500).html(percent + "%&nbsp;");
}     