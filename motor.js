// motor.js — El Motor del Barrio
// Célula: ______   Negocio: ______
//**Módulo perteneciente a Angel 
// (Definir los diccionarios y los primeros 24 valores de ejemplo)*/
const registros = [
  { persona: "Doña Rosa", categoria: "Granos",  dia: 1, valor: 23500 },
  { persona: "Don Pedro", categoria: "Aseo",    dia: 1, valor: 27400 },
  { persona: "Doña Rosa", categoria: "Lácteos", dia: 2, valor: 9600 }, 
  // ... completen hasta tener mínimo 24 registros
];

// ---------- NIVEL 1 · Datos ----------
//**Módulo general: Miércoles 17/Nov/2026 dejamos funcionando este apartado entre todos 
// (Definir los diccionarios y los primeros 24 valores de ejemplo)*/
function mostrarRegistro(registro) {
  // devuelve un texto: "Día 1 · Doña Rosa · Granos · $23500" 
}
function listarTodo(datos) {}

// ---------- NIVEL 2 · Reportes ----------
//**En este módulo nos vamos a repartir la construcción por funciones */
function totalGeneral(datos) {} //Ej: Lauren
function promedio(datos) {}     //Ej: Jhoimar
function registroMayor(datos) {} //Ej: Juan Cuartas
function filtrarPorCategoria(datos, categoria) {} //Ej: Angel
function totalesPorCategoria(datos) {} //Ej: Juan Cuartas

// ---------- NIVEL 3 · Set y Map ----------
//**Por definir el modelo de trabajo*/
function personasUnicas(datos) {}
function recurrentesLento(datos) {}
function recurrentesRapido(datos) {}
function categoriaEstrella(datos) {}
function parQueSuma(datos, objetivo) {}

// ---------- NIVEL 4 · Cola y pila ----------
const colaDeAtencion = [];
function llegar(persona) {}
function atender() {}

const historial = [];
function agregarRegistro(datos, registro) {}
function deshacer(datos) {}

// ---------- ZONA DE PRUEBAS ----------
console.log(mostrarRegistro(registros[0]));
console.log(totalGeneral(registros));
console.log(totalGeneral([])); // caso borde: arreglo vacío