const amqp = require("amqplib");

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
	hostname: '35.231.248.171',
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