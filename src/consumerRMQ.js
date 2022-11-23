const amqp = require("amqplib");
import {rabbitMQ} from './Micro';

const rabbitSettings = {
	protocol: 'amqp',
	hostname: rabbitMQ,
	port: 5672,
	username: 'grupo-2b',
	password: "123456789",
	vhost: '/',
	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
}

export async function RabbitMQ(persona){
    await connectP([{"idPersona": `${persona}`}]);
	return await connectC(`${persona}`);
}

async function connectC(persona){
	const queue = 'direct';
	try {
		const conn = await amqp.connect(rabbitSettings);
		const channel = await conn.createChannel();
		const res = await channel.assertQueue(queue);

		var p = await new Promise(async function(resolve, reject) {
			await channel.consume(queue, function(message) {
				let employee = JSON.parse(message.content.toString());
				if(employee.idPersona == persona){
					channel.ack(message);
					resolve(employee.volver);
				}
			});
		});
		channel.close()
		return p;
	} catch(err) {
		console.error(`Error -> ${err}`);
	}
}

async function connectP(persona) {
	const queue = 'employees';

	try {
		const conn = await amqp.connect(rabbitSettings);
		const channel = await conn.createChannel();
		const res = await channel.assertQueue(queue);
		for(var msg in persona) {
			await channel.sendToQueue(queue, Buffer.from(JSON.stringify(persona[msg])));
		}
	} catch(err) {
		console.error(`Error -> ${err}`);
	}
}