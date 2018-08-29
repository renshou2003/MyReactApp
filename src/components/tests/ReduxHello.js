import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, Modal } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
class ReduxHello extends Component {
	handleSelectChange = (value) => {
		console.log(value);
		this.props.form.setFieldsValue({
			userName: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
      console.log(err);
      const { getFieldDecorator } = this.props.form;
			if (!err) {
				Modal.info({
					title: 'This is an info message',
					content: (
						<Form>
							<FormItem>
								{getFieldDecorator('userName1', {
									rules: [ { required: true, message: 'Please input your username!' } ]
								})(
									<Input
										prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder="enter your name"
									/>
								)}
							</FormItem>
						</Form>
					),
          okText: '知道了'
          
				});
			} else {
				var arra = [];
				Object.keys(err).map((key) => err[key].errors.map((e) => arra.push(e.message)));
				Modal.error({
					title: 'This is an error message',
					content: arra.join(','),
					okText: '知道了'
				});
			}
		});
	};
	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

		// Only show error after a field is touched.
		const userNameError = isFieldTouched('userName') && getFieldError('userName');
		const passwordError = isFieldTouched('password') && getFieldError('password');

		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
						{getFieldDecorator('userName', {
							rules: [ { required: true, message: 'Please input your username!' } ]
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="enter your name"
							/>
						)}
					</FormItem>
					<FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
						{getFieldDecorator('like', {
							rules: [ { required: true, message: 'Please input your username!' } ]
						})(
							<Select
								placeholder="Select a option and change input text above"
								onChange={this.handleSelectChange}
							>
								<Option value="male">male</Option>
								<Option value="female">female</Option>
							</Select>
						)}
					</FormItem>
					<FormItem wrapperCol={{ span: 12, offset: 5 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}

export default Form.create()(ReduxHello);
