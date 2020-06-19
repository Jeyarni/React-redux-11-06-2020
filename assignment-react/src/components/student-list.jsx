import React, { Component } from "react";
import StudentForm from "./studentform";
import { connect } from "react-redux";
import { Card, Table } from "antd";

export class StudentList extends Component {
  render() {
    const dataSource = [];
    this.props.students.map((obj) => {
      dataSource.push({
        key: obj.id,
        id: obj.id,
        name: obj.sname,
        nic: obj.nic,
        dob: obj.dob,
        course: obj.course,
      });
    });

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "NIC",
        dataIndex: "nic",
        key: "nic",
      },
      {
        title: "DOB",
        dataIndex: "dob",
        key: "dob",
      },
      {
        title: "Course",
        dataIndex: "course",
        key: "course",
      }
    ];
    return (
      <>
        <br />
        <StudentForm />
        <br />
        <div align="center">
          <Card size="large" title="Student List" style={{ width: "60%" }}>
            <Table dataSource={dataSource} columns={columns} />
          </Card>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  students: state.studentStore.students,
});
export default connect(mapStateToProps, null)(StudentList);
