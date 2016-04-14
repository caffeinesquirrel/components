(function () {
	//Use our component

	let menu = new Dropdown({
		el: document.querySelector('.js-dropdown')
	});

	menu.on("open", function(value) {
  	console.log("open");
	});

	menu.on("select", function(value) {
		console.log("select", value.innerHTML);
	});



	console.dir(menu);
})();
