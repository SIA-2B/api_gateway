const amqp = require("amqplib");

const rabbitSettings = {
	protocol: 'amqp',
	hostname: '172.17.0.5',
	port:5672,
	username: 'admin',
	password: "local23",
	vhost: '/',
	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
}

export async function connect(persona){
	
	const queue = 'employees';
	console.log(persona)

	try {
		const conn = await amqp.connect(rabbitSettings);
		console.log('connection created ..');

		const channel = await conn.createChannel();
		console.log('Channel Created..');

		const res = await channel.assertQueue(queue);
		console.log('Queue Created..');

		//Envio de personas
		for(var msg in persona) {
			await channel.sendToQueue(queue, Buffer.from(JSON.stringify(persona[msg])));
			console.log(`Message sent to queue ${queue}`);
		}
	} catch(err) {
		// statements
		console.error(`Error -> ${err}`);
	}
}
