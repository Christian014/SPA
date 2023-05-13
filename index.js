buttonHome = document.querySelector('.home').addEventListener('click', route)
buttonUniverse = document.querySelector('.universe').addEventListener('click', route)
buttonExplorer = document.querySelector('.explorer').addEventListener('click', route)


const routes = {
    "/":"/pages/home.html",
    "/universo":"./pages/universo.html",
    "/explorer":"./pages/explorer.html",
}

function route(event){
    event = event || window.event
    event.preventDefault() 
    handle()

    window.history.pushState({}, "", event.target.href)

}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] 

    fetch(route)
    .then(data => data.text())
    .then(html => {
    document.querySelector('#app').innerHTML = html
    })
        
}

handle()
