import React, { Component } from 'react';
import Layout from './../../../components/Layout';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import web3 from './../../../ethereum/web3';
import Campaign from './../../../ethereum/campaign';
import { Link, Router } from './../../../routes';

class RequestNew extends Component {
	state = {
		value: '',
		description: '',
		recipient: '',
		errorMessage: '',
		loading: false
	}

	static async getInitialProps(props) {
		const { address } = props.query;

		return { address };
	}

	 render() {
	 	return (
			<Layout>
				<h3>Create a request</h3>
				
				<Form onSubmit={ this.onSubmit } error={ !!this.errorMessage}>
					<Form.Field>
						<label htmlFor="">Description</label>
						<Input
							value={ this.state.description }
							onChange={ event => this.setState({ description: event.target.value })}
						 />
					</Form.Field>

					<Form.Field>
						<label htmlFor="">Value in Ether</label>
						<Input
							value={ this.state.value }
							onChange={ event => this.setState({ value: event.target.value })}
						 />
					</Form.Field>

					<Form.Field>
						<label htmlFor="">Recipient</label>
						<Input
							value={ this.state.recipient }
							onChange={ event => this.setState({ recipient: event.target.value })}
						 />
					</Form.Field>

				<Button primary>Create!</Button>
			</Form>
			</Layout>
	 	)
	 }
}

export default RequestNew;