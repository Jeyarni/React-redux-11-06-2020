import React, { Component } from "react";
import { connect } from "react-redux";
import { NEW_STUDENT } from "../actions/types";
import { Form, Input, Card, Button, Space, Select } from "antd";

const { Option } = Select;
export class StudentForm extends Component {
  state = {
    id: 2,
    sname: "",
    nic: "",
    dob: "",
    course: "",
  };

  handleSubmit = (obj) => {
    let aId = this.state.id;
    obj = { ...obj, id: aId };
    this.props.addStudent(obj);
    this.setState({
      id: aId + 1,
    });
  };

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChanges = (value) => {
    this.setState({
      course: value,
    });
  };

  render() {
    return (
      <div align="center">
        <Card
          size="large"
          title="Student Registration"
          style={{ width: "60%" }}
        >
          <Form>
            <div>
              <Space align="center">
                <Input
                  placeholder="Student Name"
                  type="text"
                  name="sname"
                  onChange={this.handlechange} style={{ width: 300 }}
                />
                <Input
                  placeholder="NIC"
                  type="text"
                  name="nic"
                  onChange={this.handlechange} style={{ width: 300 }}
                />
              </Space>
            </div>
            <br />
            <div>
              <Space align="center">
                <Input type="date" name="dob" onChange={this.handlechange} style={{ width: 300 }}/>

                <Select
                  name="course"
                  defaultValue="Science"
                  style={{ width: 300 }}
                  onChange={this.handleChanges}
                >
                  <Option value="Science">Science</Option>
                  <Option value="Art">Art</Option>
                  <Option value="Com">Com</Option>
                </Select>
              </Space>
            </div>
            <br />
            <Button
              type="primary"
              onClick={() => this.handleSubmit(this.state)}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
const mapDispachToProps = (dispatch) => {
  return {
    addStudent: (obj) => dispatch({ type: NEW_STUDENT, payload: obj }),
  };
};
export default connect(null, mapDispachToProps)(StudentForm);
