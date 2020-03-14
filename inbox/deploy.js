const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
	'analyst enroll range easy tiny excite original spoon album float phone slab',
	'https://rinkeby.infura.io/v3/0d6a6602df4440e397763eb9d15788aa'
);
const web3 = new Web3(provider)

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0])

	const result = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data: bytecode, arguments: ['Hi there!'] })
	.send({ gas: '1000000', from: accounts[0] });

	console.log('Contract deployed to', result.options.address);
}

deploy();