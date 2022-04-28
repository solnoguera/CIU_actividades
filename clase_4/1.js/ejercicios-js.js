// Variables
// Declara las variables a, b y c en tu consola. Asignales un número a cada una.
var a;
var b;
var c;
a = 1;
b = 2;
c = 3;
// Declara la variable d y asígnale el valor de la suma de a,b y c.
var d = a + b + c
// Asigna a 'a' el valor de b. Ahora cambia el valor de b. Cuál piensas que es el valor de a? (Piénsalo /// antes de fijarte en la consola)
a = b 
b = 5
// Estoy segura de que el valor de a va a ser 2, lo que valia b antes de que lo modificara.
console.log(a)

//Mensaje con variables
/* Declara, por lo menos 5 variables como 'nombre', 'edad', 'cumple', 'ciudad', 'ocupacion', etc. y dales un valor tipo string que contenga información sobre vos mismo. Usa console.log para escribir un párrafo sobre vos usando las variables que creaste para insertar la información correspondiente. */
var nombre = "Sol"
var edad = "21"
var cumple = "22 de mayo"
var ciudad = "San miguel"
var ocupacion = "Desarrollo de Software"
var mensaje = `Hola! Mi nombre es ${nombre}, tengo ${edad} años, vivo en la ciudad de ${ciudad}.
Actualmente me dedico al ${ocupacion}, es mi pasion y quiero seguir aprendiendo todos los dias :)`
console.log(mensaje)

//Escapando Strings
console.log(' \"What\'s wrong with the pudding?\", she\'d say with a smile.')
console.log("I\'d often think\' * \"to myself, \"Well, what\'s the worst wrong that could go wrong?\". I guess\" * \"now we know...")