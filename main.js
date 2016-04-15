(function () {

	//Use our component
	let dpd = new Dropdown({
  	el: document.createElement('div'),
		template: 'DropdownTmpl',
  }, {
		title:'menu',
 	 	items: ['first', 'second'],
	});

	document.body.appendChild(dpd.el);
	dpd.render();


/*	let tml = TemplateEngine(DropdownTmpl.innerHTML, {
		title:'menu',
		items: ['first', 'second']
	});
	//console.log(tml);
	document.body.insertAdjacentHTML('beforeEnd' ,tml);
*/

	/*menu.on("open", function(value) {
  	console.log("open");
	});

	menu.on("select", function(value) {
		console.log("select", value.innerHTML);
	});*/

})();
