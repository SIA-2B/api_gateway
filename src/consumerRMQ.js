const amqp = require("amqplib");

// const rabbitSettings = {
// 	protocol: 'amqp',
// 	hostname: '172.17.0.3',
// 	port:5672,
// 	username: 'ndcontrerasr',
// 	password: "1234",
// 	vhost: '/',
// 	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
// }

const rabbitSettings = {
	protocol: 'amqp',
	hostname: '34.151.199.132',
	port: 5672,
	username: 'grupo-2b',
	password: "123456789",
	vhost: '/',
	authMechanism: ['PLAIN', 'AMQPLAIN','EXTERNAL']
}

export async function connectC(persona){
	
	const queue = 'direct';
	let salida = false;
	console.log(persona)
	try {
		const conn = await amqp.connect(rabbitSettings);
		console.log('connection created ..');

		const channel = await conn.createChannel();
		console.log('Channel Created..');

		const res = await channel.assertQueue(queue);
		console.log('Queue Created..');
		
		await channel.consume(queue, message => {
			let employee = JSON.parse(message.content.toString());
			// console.log(`Received employee ${employee.student_id}`);
			console.log(employee);
			console.log(employee.idPersona, " | ", persona, " - ", employee.idPersona == persona)
			if(employee.idPersona == persona){
				salida = employee.volver;
				console.log(typeof salida, salida);
				channel.ack(message);
			}
		})
		return salida;
	} catch(err) {
		// statements
		console.error(`Error -> ${err}`);
	}
}