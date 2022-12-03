const amqp = require("amqplib");
import {rabbitMQ, pass} from './Micro';

const rabbitSettings = {
	protocol: 'amqp',
	hostname: rabbitMQ,
	port: 5672,
	username: 'grupo-2b',
	password: pass,
	vhost: '/',
	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
}

export async function RabbitMQ(){
    await connectP();
	await connectC();
}

async function connectC(){
	const queue = 'direct';
	try {
		const conn = await amqp.connect(rabbitSettings);
		const channel = await conn.createChannel();
		const res = await channel.assertQueue(queue);
	} catch(err) {
		console.error(`Error -> ${err}`);
	}
}

async function connectP() {
	const queue = 'employees';
	try {
		const conn = await amqp.connect(rabbitSettings);
		const channel = await conn.createChannel();
		const res = await channel.assertQueue(queue);
	} catch(err) {
		console.error(`Error -> ${err}`);
	}
}