import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
	// We are in the browser

	web3 = new Web3(window.web3.currentProvider);
	
} else {
	// We are in the server OR the user is not running metamask

	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/0d6a6602df4440e397763eb9d15788aa'
	);

	web3 = new Web3(provider);
}

export default web3;