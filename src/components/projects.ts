class Projects extends HTMLElement{
    constructor(){ super() }
    connectedCallback(){
        this.innerHTML = `
        <div id="projects" class="projects-container">
            <p class="title">Projects.</p>
            <div class="project-card-list">
                <div class="card">
                    <a href="/ebisu.html"><p class="card-title">Ebisu</p>
                    <p class="card-description">Japanese food and beverage ordering website</p></a>
                </div>
                <div class="card">
                    <p class="card-title">SIMDES</p>
                    <p class="card-description">Village governance management system</p>
                </div>
                <div class="card">
                    <a href="/gadamaxima.html" target="_blank"><p class="card-title">Gadamaxima</p>
                    <p class="card-description">Security guard tracking management system</p></a>
                </div>
                <div class="card">
                    <a href="/socmedpay.html"><p class="card-title">SocmedPay</p>
                    <p class="card-description">Social media payment platform with e-money integration</p>
                    </a>
                </div>
                <div class="card">
                    <a href="https://github.com/dzakyf/mini-project" target="_blank"><p class="card-title">Personal Projects</p>
                    <p class="card-description">Collection of my personal projects</p></a>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("main-project", Projects)