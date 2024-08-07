export default [
	{
		sector: "Devolución",
		agent: "Alfonso Casajus",
		messages: [
			{
				sender: { name: "Alfonso Casajus", type: "agent" },
				message: "Bienvenido!! ¿En que podemos ayudarte?",
				time: "17:00"
			},
			{
				sender: { type: "customer" },
				message: "Quiero devolver un producto",
				time: "17:23"
			},
			{
				sender: { type: "customer" },
				message: "Vino fallado",
				time: "17:23"
			},
			{
				sender: { name: "Alfonso Casajus", type: "agent" },
				message: "Claro, te pido una foto del producto y la factura de compra",
				time: "17:25"
			},
			{
				sender: { type: "customer" },
				message: "No te preocupes, ya esta. Gracias!",
				time: "17:26"
			}
		]
	},
	{
		sector: "Asistencia",
		agent: "Nicolás",
		messages: [
			{
				sender: { name: "Nicolás", type: "agent" },
				message: "¡Hola! ¿En qué puedo ayudarte hoy?",
				time: "09:00"
			},
			{
				sender: { type: "customer" },
				message: "Tengo una pregunta sobre el estado de mi pedido.",
				time: "09:05"
			},
			{
				sender: { name: "Nicolás", type: "agent" },
				message:
					"Claro, ¿puedes proporcionarme el número de pedido, por favor?",
				time: "09:06"
			},
			{
				sender: { type: "customer" },
				message: "Sí, es el 123456789.",
				time: "09:07"
			},
			{
				sender: { name: "Nicolás", type: "agent" },
				message: "Gracias, déjame verificarlo un momento.",
				time: "09:08"
			},
			{
				sender: { name: "Nicolás", type: "agent" },
				message: "Tu pedido está en camino y debería llegar en dos días.",
				time: "09:10"
			},
			{
				sender: { type: "customer" },
				message: "¡Perfecto, muchas gracias!",
				time: "09:11"
			}
		]
	},
	{
		sector: "Asistencia",
		agent: "Lucia",
		messages: [
			{
				sender: { name: "Lucia", type: "agent" },
				message: "¡Hola! ¿En qué puedo asistirte?",
				time: "14:00"
			},
			{
				sender: { type: "customer" },
				message: "Necesito cambiar la dirección de entrega de mi pedido.",
				time: "14:02"
			},
			{
				sender: { name: "Lucia", type: "agent" },
				message:
					"Entiendo. Por favor, proporcióname el número de pedido y la nueva dirección.",
				time: "14:04"
			},
			{
				sender: { type: "customer" },
				message:
					"El número de pedido es 987654321. La nueva dirección es Calle Falsa 123.",
				time: "14:05"
			},
			{
				sender: { name: "Lucia", type: "agent" },
				message:
					"Gracias. Hemos actualizado la dirección de entrega de tu pedido.",
				time: "14:07"
			},
			{
				sender: { type: "customer" },
				message: "¡Muchas gracias por tu ayuda!",
				time: "14:08"
			}
		]
	}
];
