const amqp = require("amqplib");
import {rabbitMQ} from './Micro';

// const rabbitSettings = {
// 	protocol: 'amqp',
// 	hostname: '172.17.0.2',
// 	port:5672,
// 	username: 'ndcontrerasr',
// 	password: "1234",
// 	vhost: '/',
// 	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
// // }
const rabbitSettings = {
	protocol: 'amqp',
	hostname: '172.20.0.2',
	port: 5672,
	username: 'grupo-2b',
	password: "123456789",
	vhost: '/',
	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
}
// const rabbitSettings = {
// 	protocol: 'amqp',
// 	hostname: '34.151.215.159',
// 	port: 5672,
// 	username: 'grupo-2b',
// 	password: "123456789",
// 	vhost: '/',
// 	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
// }
export let salida = false;

export async function RabbitMQ(persona){
    await connectP([{"idPersona": `${persona}`}]);
	return await connectC(`${persona}`);
	// await connectP([{"idPersona": `${persona}`}]);
	// await connectC(`${persona}`);
	// await connectP([{"idPersona": `${persona}`}]);
	// await connectC(`${persona}`);
	// return salida;
}

async function connectC(persona){
	const queue = 'direct';
	try {
		const conn = await amqp.connect(rabbitSettings);
		const channel = await conn.createChannel();
		const res = await channel.assertQueue(queue);
		console.log('entra');
		var p = await new Promise(async function(resolve, reject) {
			await channel.consume(queue, function(message) {
				let employee = JSON.parse(message.content.toString());
				if(employee.idPersona == persona){
					channel.ack(message);
					// salida = employee.volver;
					console.log('pasa');

					resolve(employee.volver);

				}
			});
		});
		channel.close()
		console.log('sale');
		console.log(p);
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