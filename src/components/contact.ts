class Contact extends HTMLElement{
    constructor() { super() }
    connectedCallback(){
        this.innerHTML = `
        <div id="contact" class="contact">
            <p class="title">Contact.</p>
            <p>dzakyf.work@gmail.com</p>
        </div>
        `
    }
}

customElements.define("contact-me", Contact)