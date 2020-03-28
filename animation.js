class Animation {
    constructor() {
        this.presentation = document.getElementById('presentation');
        this.skills = document.getElementById('skills');
        this.browse = document.getElementById('browse')
        this.presentation.addEventListener('click', this.click.bind(this))
        this.skills.addEventListener('click', this.click.bind(this))

    }
    click() {
        this.browse = document.getElementById('browse').style.display ="block";
        this.browse.classList.add("animation");
        console.log('succes');
        setTimeout(function() { this.browse.classList.remove("animation"); }, 3000);


    }
}

let start = new Animation();