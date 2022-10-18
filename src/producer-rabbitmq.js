const amqp = require("amqplib");

const rabbitSettings = {
	protocol: 'amqp',
	hostname: 'localhost',
	port:5672,
	username: 'admin',
	password: "local23",
	vhost: '/',
	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
}

connect();

async function connect(persona){
	
	const queue = 'employees';
	console.log(persona)

	try {
		const conn = await amqp.connect(rabbitSettings);
		console.log('connection created ..');

		const channel = await conn.createChannel();
		console.log('Channel Created..');

		const res = await channel.assertQueue(queue);
		console.log('Queue Created..');

		for(var msg in student) {
			await channel.sendToQueue(queue, Buffer.from(JSON.stringify(student[msg])));
			console.log(`Message sent to queue ${queue}`);
		}
	} catch(err) {
		// statements
		console.error(`Error -> ${err}`);
	}
}