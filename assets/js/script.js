// script.js
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Mostrar mensaje del usuario
  addMessage(userMessage, "user");

  // Respuesta automática del bot
  setTimeout(() => {
    const botResponse = getBotResponse(userMessage);
    addMessage(botResponse, "bot");
  }, 500);

  userInput.value = ""; // Limpiar input
}

function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.className = `message ${sender}`;
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // Desplazar al final
}

function getBotResponse(input) {
  // Respuestas simples basadas en el input
  const responses = {
    hola: "¡Hola! ¿En qué puedo ayudarte?",
    servicios: "Puedo actuar en cortometrajes, videos musicales y largometrajes. Además puedo ofrecerte servicio para narrar mejor las historias",
    actuación: "Hice un trabajo en un videoclip llamado Un Accidente. También estuve en una película que aun está en producción",
    narración: "Dí ideas por todo el mundo para mejorar las series, peliculas y clips que salían al mercado entre 2022 hasta el momento. Fué una experiencia muy loca salida de ciencia ficción pero fué tan real que me dejó traumada. No sabes cuento. Después de esto, voy a necesitar una buena terapia. Ya tengo un tic en el ojo.",
    adiós: "¡Hasta luego! Espero verte pronto. O no, tal vez necesite anteojos o una mejor conexion a la red",
    actua: "Quieres que actue? Pues pagame primero wey, necesito comer...ojalá pudiera vivir del aire solamente, es gratis...hasta que nos empiecen a cobrar por Os en el H2...tal vez venga un mago que nos quite el aire",
    canta: "mi mi mi mi...mi alfajor cuesta 10 centavos...se me cayó en una zanja ayer! está sin abrir, pero no encuentroooo la llaaveee para ver si lo puedo saaacaaaaaar...llama! al cerrajero! llama! por favoooor! llama! al cerrajeeeero! rápido, que quiero el alfajooooooor!!!",
    pelea: "que? quieres pelear? aquí? ahora? en esta parte del mundo? en esta parte del sistema solar? en esta parte de la via lactea? en esta parte del universo? no, no precalenté. Me voy a esguinzar de nuevo. Esperame un tantito",
    santa: "Me parece que escribiste mal y pusiste satan. Te recomiendo práctica de escritura y un diccionario. Imaginate si invocas a los dioses la proxima vez. va a ser un CAOS",
wednesday: "Ah, es tu dia de suerte. Debe estar durmiendo la pobre, estuvo decapitando cucarachas en el jardín. Las vendió como chocolates crocantes a unos chicos del barrio en vacaciones. Hubo 3 internaciones y 1 de ellos empezó a cantar sobre un alfajor",
enid: "Hola? s, soy yo. No puedo atenderte, estoy ocupada haciendome la manicura. Dejame un mensaje y te llamo cuando termine de pintarme las uñas. Chau!",
pip: "Hola Soy Pip, estoy resolviendo un misterio...cómo hacer la tarea de matemáticas sin que me explote la cabeza. Si tienes alguna pista, por favor, avísame. Gracias!",
cobra: "Kai ya fué a cobrar, por favor, no lo molestes. Está enojado porque le dijeron que no podía comerse el alfajor que encontró en la zanja. No le digas que lo tiré yo, por favor. No quiero que me mate a golpes",
ciega: "cita a ciegas? No gracias, apenas puedo viendo",
boluda: "Se ha comunicado con el 0800 boluda, en este momento no puede atenderla porque está boludeando con una naranja. Por favor, comuniquese más tarde después de su crisis existencia. Para emergencias, llore desconosoladamente y la atenderemos con prioridad",
geriatrico: "Disculpe, estoy tratando de resolver...este rompecabezas sin que...se me pierda una pieza...ya se me perdió otra",
perrito: "Guau, son el pancho, el perro salchicha que vende panchos en la bahia de san borombon",
mindfullnes: "Recuerde estar presente aunque quieran asesinarlo, piense en lo valioso de su vida y en lo mucho que le falta por hacer. Si no puede, piense en el alfajor que se le cayó en la zanja y en cómo va a hacer para sacarlo sin llave. Tenga mucho cuidado con los cuervos", 
fine: "Hola, si me ven le suplico que me dejen en paz, gracias!",
ruby: "Hola, Soy Ruby Rose, no me descontinuaron todavia, sigo aquí, en el limbo, esperando a que me den un papel en una serie de superhéroes. Si me ven, por favor, avisenme. Gracias!",
weiss: "Hola, Soy Weiss Schnee, mi padre está muerto, no sé donde está mi madre ni mi hermano, ni mi hermana...pero estoy feliz, de alguna manera increiblemente inexplicable",
blake: "...oh! una moneda!...la voy a ahorrar para mi proximo libro...",
yang: "Hola, Soy Yang Xiao Long, mi brazo es un arma, mi madre es una renegada de la ley, mi padre es docente medio retirado, mi hermana es la lider del equipo y mi novia es una medio-gata. No sé cómo llegué a ser tan normal",
sapphire: "Hola, no escribieron mi historia pero se la cuento. Nací en lo que ahora se conoce como el siglo XVI en un lugar que ahora se llama Francia. Mi madre era una bruja y mi padre un caballero. Me criaron en un bosque y me enseñaron a cazar y a sobrevivir. Un día, un dragón me secuestró y me llevo a una tierra perdida, que resultó ser como Argentina en el siglo XXI. Ahí conocí a una chica llamada Ruby y a partir de ahí, mi vida cambió para siempre. Me dijo que me junte con una banda de KPOP y que las ayudara a subir de rating. Todo salió bien, hasta que una loca le golpeo con una botella a la otra loca y la otra loca voló por el aire después de un electroshock. La loca que quedó se subio a una montaña rusa y se escapó. No las volvi a ver. Fin...No fué tan asi. Ahora estoy en un geriátrico, esperando a que me den la medicación. No sé si me la van a dar o si me van a dar un alfajor. No sé si me van a dar un alfajor con la medicación. No sé si me van a dar la medicación con el alfajor. No sé si me van a dar la medicación y el alfajor. No sé si me van a dar la medicación y el alfajor con la medicación. No sé si me van a dar el alfajor y la medicación. Me dijeron que si les revelo la ubicación del alfajor me dejan ir. Yo no voy a develar ese secreto. Pertenezco a una organización muy importante que está tratando de cambiar el mundo, se llama 'Enter-Team-End'. No puedo traicionarlos. No puedo traicionar a mi gente. No puedo traicionar a mi alfajor. No puedo traicionar a mi medicación. No puedo traicionar a mi geriátrico. No puedo traicionar a mi geriátrico con mi medicación. No puedo traicionar a mi geriátrico con mi alfajor. No puedo traicionar a mi geriátrico con mi alfajor y mi medicación. No puedo traicionar a mi geriátrico con mi medicación y mi alfajor. Simplemente no puedo",
experiencia: "Vivir es toda una experiencia. Hasta hacer este chatbot es muy divertido. Aguante Copilot!",
netflix: "Está ahi, juntando nuestro dinero en pala, con una pala grande de oro solido y muchos soldados de plomo. Explotará en algún momento? Se lanzará al espacio? quién sabe...sólo el tiempo lo dirá",
dineyplus: "Siempre estoy ahi para alegrarte las tardes, amargarte las noches y vaciar tus bolsillos. Gracias por tu preferencia",
hbo: "H te veo",
amazon: "A mazon que se para, se le niega toda existencia...perdon pero no era asi el dicho, era a maxon que se para, se le dan todos los tributo...no podemos hacer eso...pues entonces cancele mi suscripción",
hoyts: "me encantan tu asientos! son tan cómodos que me quedo dormida en la mitad de la película. Gracias por tu servicio",
dragon: "en rojo por favor, gracias. Si si, en rojo, el negro es de alguien más.",
diablo: "mejor déjala, ya la chupó el diablo",
casa: "Take me home, to the place I belong, West Virginia...with a green tea, take me home, country road",
unicornio: "Bueno, malo o multimillonario? Depende, no? Todo es posible!...es un mundo de posibilidades, lleno de sueños y de arcoiris...hasta que el gobierno te quita toooodas las esperanzas y te la llena de impuestos. Sabias palabras mias y de homero simpsons",
bart: "Yo te quiero, gracias por haberle dado tanto al mundo sin pedir nada a cambio, salvo existir, como todos los demás",
bye: "bye"
};

  return responses[input.toLowerCase()] || "Lo siento, no entiendo esa pregunta.";
}