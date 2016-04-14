(function () {
	'use strict';

	class Dropdown {
		constructor (options) {
			this.el = options.el;
			this._initEvents();

			for(var key in EventMixin) {
  			this[key] = EventMixin[key];
			}
		}

		/**
		 * Add classname dropdown_open to element
		 */
		open () {
			this.el.classList.add('dropdown_open');
		  this.trigger("open");
		}

		/**
		 * Remove classname dropdown_open to element
		 */
		close () {
			this.el.classList.remove('dropdown_open');
			this.trigger("close");
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

		isOpen () {
			return this.el.classList.contains('dropdown_open');
		}

		_initEvents () {
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
