import React from "react";
import { Form, Select, Input, Button } from 'antd';

const { Option } = Select;

class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="Username">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input placeholder={"Choose a username that you like!"}/>)}
        </Form.Item>
        <Form.Item label="Chatroom">
          {getFieldDecorator('room', {
            rules: [{ required: true, message: 'Please select your chatroom!' }],
          })(
            <Select
              placeholder="Pick a chatroom here!"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedApp = Form.create({ name: 'coordinated' })(App);
export default WrappedApp;
