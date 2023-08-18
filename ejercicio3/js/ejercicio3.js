const btn = document.querySelector('.btn')
const usuario = document.querySelector('#user')

const urlApi = 'https://jsonplaceholder.typicode.com/users'

const getData = async() => {
    try {
        const res = await fetch(urlApi);
        const data = await res.json();
        
let html = ''
data.map((user) => {
    html += `
    <div class="card">
    <p>${user.id}</p>
    <p>${user.name}</p>
    <p>${user.email}</p>
    </div>`
})
usuario.innerHTML = html




    } catch (error) {
        alert('No se pudo obtener los datos')
    }
        
    }
btn.addEventListener('click', getData)