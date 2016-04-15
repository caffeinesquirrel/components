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
			document.body.addEventListener('click', this._openEvent);
		}

		/**
		 * Remove classname dropdown_open to element
		 */
		close () {
			this.el.classList.remove('dropdown_open');
			this.trigger("close");
			document.body.removeEventListener('click', this._openEvent);
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
				let els = this._getAllDropDowns();
				let clickInDrop = false;

				[].forEach.call(els, el => {
					if (el.contains(event.target)) {
						clickInDrop = true;
					}
				});

				if (!clickInDrop) {
					[].forEach.call(els, el => {
						el.classList.remove('dropdown_open');
					});
				}
		}

		_getAllDropDowns() {
			return document.documentElement.querySelectorAll('.js-dropdown');
		}

		isOpen () {
			return this.el.classList.contains('dropdown_open');
		}

		_initEvents () {
			this._openEvent = this._onBodyClick.bind(this);
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
