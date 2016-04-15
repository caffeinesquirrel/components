(function () {

	//Use our component
	[1,2,3,4].forEach(num => {
		let dpd = new Dropdown({
	  	container: document.body,
			template: 'DropdownTmpl',
	  }, {
			title:'menu'+num,
	 	 	items: ['first', 'second'],
		});
		dpd.on("select", function(value) {
			console.log("select", value.innerHTML);
		});
	});
})();
