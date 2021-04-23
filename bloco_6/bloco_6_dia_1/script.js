let states = document.querySelector('#estado');
const todosEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',  'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']

function addEstados() {
  for (let index = 0; index < todosEstados.length; index += 1) {
    let options = states.appendChild(document.createElement('option'));
    options.innerText = todosEstados[index]
  }
}



// function preventDefault() {
// let body = document.querySelector('body')
// let div = body.appendChild(document.createElement('div'))
// let paragraph = div.appendChild(document.createElement('p'));

// paragraph.innerText = document.querySelector('form').value

// }

// preventDefault();
addEstados();