(function () {
	//Use our component


	let els = document.querySelectorAll('.js-dropdown');
	let instances = [];
	[].forEach.call(els, el => {
		let dpd = new Dropdown({
		 el: el
	 })
		instances.push(dpd);
	});

	/*menu.on("open", function(value) {
  	console.log("open");
	});

	menu.on("select", function(value) {
		console.log("select", value.innerHTML);
	});*/

})();
