const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active'
}

const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop'
    document.querySelector('aside').className = '';
}

document.getElementById("Menu-btn").onclick = e => {
    e.preventDefault();
    openMenu();
}

document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}

document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}

var all_projects =  [...document.querySelectorAll("aside a")]

all_projects.forEach(project => 
    project.onclick = e =>{
        closeMenu();
    }
)