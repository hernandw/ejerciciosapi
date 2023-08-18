const varTexto = document.getElementById('texto')



const getDatos = async () => {
    const res = await  fetch('tareas.txt')
    const data =  await res.text()
varTexto.innerHTML = data
}





