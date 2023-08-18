const btn = document.querySelector('.btn')
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const imagen = document.querySelector('#foto')

const urlApi = 'https://randomuser.me/api/'

const getDatos = async () => {
    try {
       const response = await fetch(urlApi);
       const data = await response.json();
       console.log(data);
       console.log(data.results[1].email);

       nombre.innerHTML = data.results[1].name.first;
       email.innerHTML = data.results[1].email;
       imagen.src = data.results[1].picture.large; 
    } catch (error) {
        alert('No se pudo obtener los datos')
    }
}

btn.addEventListener('click', getDatos)