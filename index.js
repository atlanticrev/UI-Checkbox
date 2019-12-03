class UiCheckbox extends HTMLElement {

  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.init();
  }

  connectedCallback() {
    this.addEventListener('click', this.toggle);
  }

  init() {
    this.input = document.createElement('input');
    this.input.checked = this.dataset.checked ? true : false;
    this.appendChild(this.input);
  }

  check() {
    this.dataset.checked = 'true';
    this.input.checked = true;
  }

  uncheck() {
    delete this.dataset.checked;
    this.input.checked = false;
  }

  toggle() {
    if (this.dataset.checked) {
      this.uncheck();
    } else {
      this.check();
    }
  }

}

window.customElements.define('ui-checkbox', UiCheckbox);
