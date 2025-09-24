// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js

// Estado en memoria
const amigos = [];

// Referencias a elementos del DOM
const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Renderiza la lista de amigos
function renderLista() {
  lista.innerHTML = '';
  amigos.forEach((nombre, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${nombre}`;
    lista.appendChild(li);
  });
}

// Limpia el resultado del sorteo
function limpiarResultado() {
  resultado.innerHTML = '';
}

// Agrega un amigo desde el input con validación
function agregarAmigo() {
  const nombre = (input.value || '').trim();
  if (!nombre) {
    alert('Por favor, escribe un nombre válido.');
    input.focus();
    return;
  }
  amigos.push(nombre);
  input.value = '';
  limpiarResultado();
  renderLista();
  input.focus();
}

// Sortea un amigo aleatoriamente y lo muestra
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre antes de sortear.');
    input.focus();
    return;
  }
  const idx = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[idx];

  // Mostrar resultado (como <li> para respetar el marcado existente)
  resultado.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `🎉 El amigo secreto es: ${ganador}`;
  resultado.appendChild(li);
}

// Atajo: Enter para agregar
document.addEventListener('DOMContentLoaded', () => {
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
});

// Exponer funciones al ámbito global para los onclick del HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
