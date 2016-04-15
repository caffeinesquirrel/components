(function () {
	'use strict';

	class Dropdown {
		constructor (options, data) {
			this.container = options.container;
			this._template = document.getElementById(options.template).innerHTML;
			this.data = data;
			this.render.call(this);
			this._initEvents();

			for(var key in EventMixin) {
  			this[key] = EventMixin[key];
			}
		}

		render () {
			this.container.insertAdjacentHTML('beforeEnd', TemplateEngine(this._template, this.data) );
			this.el = this.container.lastElementChild;
		}
		/**
		 * Add classname dropdown_open to element
		 */
		open () {
			this.el.classList.add('dropdown_open');
		  this.trigger("open");
			document.addEventListener('click', this._documentClick);
		}

		/**
		 * Remove classname dropdown_open to element
		 */
		close () {
			this.el.classList.remove('dropdown_open');
			this.trigger("close");
			document.removeEventListener('click', this._documentClick);
		}

		/**
		 * Open or close?
		 */
		toggle () {
			if (this.isOpen()) {
				this.close();
			} else {
				this.open();
			}
		}

		_onBodyClick(event) {
			let clickInDrop = event.target.closest(".js-dropdown");
			if (!clickInDrop) {
				let els = document.documentElement.querySelectorAll('.js-dropdown');
				[].forEach.call(els, el => {
						el.classList.remove('dropdown_open');
				});
			}
		}

		isOpen () {
			return this.el.classList.contains('dropdown_open');
		}

		_initEvents () {
			this._documentClick = this._onBodyClick.bind(this);
		  this.el.addEventListener('click', this._onClick.bind(this));
		}

		_onClick (event) {
			if (event.target.classList.contains('dropdown__item')) {
				event.preventDefault();
				this._onItemClick(event);
			} else {
				this.toggle();
			}
		}

		_onItemClick (event) {
			var itemHtml = event.target.innerHTML;
			this.el.querySelector('.js-title').innerHTML = itemHtml;
			this.trigger("select", event.target);
			this.close() ;
		}
	}

	//EXPORT
	window.Dropdown = Dropdown;

})();
