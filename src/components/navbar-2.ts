import githubLogo from '/github-dark.svg'
import linkedinLogo from '/linkedin-dark.svg'

class Navbar2 extends HTMLElement{
    constructor(){ super() }
    
    connectedCallback(){
        this.innerHTML= `
        <nav>
        <a href="/">
            <div class="nav-button">
                <p>Home</p>
            </div>
        </a>
            <div class="nav-button">
            <a href="https://github.com/dzakyf" target="_blank">
                <img src="${githubLogo}" class="nav-icon logo" alt="Github logo" />
            </a>
            </div>
            <div class="nav-button">
            <a href="https://www.linkedin.com/in/dzaky-fauzan-78370a209" target="_blank">
                <img src="${linkedinLogo}" class="nav-icon logo" alt="LinkedIn logo" />
            </a>
            </div>
        </nav>
        `   
    }
}

customElements.define("navigation-bar-2", Navbar2)