import accent from '/accent.png'

class Content extends HTMLElement{
    constructor(){ super() }
    connectedCallback(){
        this.innerHTML = `
            <div class="content">
                <img src="${accent}" class="accent"></img>
                <div class="rectangle"></div>
                <div class="content-text">
                    <p class="content-callout"><span style="font-size:40px;">I'm a</span> <br/></p>
                    <p class="content-callout">Software engineer;</p>
                    <p>Hello! my name is dzaky. A developer based in Indonesia. <br/>For 2 years I've helped companies build frontend for their needs. </p>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("main-content", Content)