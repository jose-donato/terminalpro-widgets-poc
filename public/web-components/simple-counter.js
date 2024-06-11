class SimpleCounter extends HTMLElement {
	constructor() {
		super();
		this.count = 0;
		this.attachShadow({ mode: "open" });
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.render();
		this.addEventListeners();
	}

	addEventListeners() {
		this.shadowRoot
			.querySelector("#increment")
			.addEventListener("click", this.increment);
		this.shadowRoot
			.querySelector("#decrement")
			.addEventListener("click", this.decrement);
	}

	removeEventListeners() {
		this.shadowRoot
			.querySelector("#increment")
			.removeEventListener("click", this.increment);
		this.shadowRoot
			.querySelector("#decrement")
			.removeEventListener("click", this.decrement);
	}

	connectedCallback() {
		this.addEventListeners();
	}

	disconnectedCallback() {
		this.removeEventListeners();
	}

	increment() {
		this.count++;
		this.render();
	}

	decrement() {
		this.count--;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
                    <style>
                        div { text-align: center; margin: 20px; }
                        button { margin: 5px; }
                    </style>
                    <div>
                        <button id="decrement">-</button>
                        <span>${this.count}</span>
                        <button id="increment">+</button>
                    </div>
                `;
	}
}

customElements.define("simple-counter", SimpleCounter);
