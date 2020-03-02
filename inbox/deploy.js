const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
	'invite vocal search dinosaur amount sister next excess yard toy melt uniform',
	'https://rinkeby.infura.io/v3/176a25afde1a4d7aaadc5d9de52cd1e0'
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