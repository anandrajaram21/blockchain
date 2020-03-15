import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x2c629A9f6e2EA8Be13e188F95Ef357FF2674c259'
);

export default instance;