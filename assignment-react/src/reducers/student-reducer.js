import { NEW_STUDENT } from "../actions/types";

const initialState = {
  students: [
    {
      id: 1,
      sname: "Jeya",
      nic: "123456789V",
      dob: "2000-01-01",
      course:"Science"
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_STUDENT:
      return {
        ...state,
        students: state.students.concat(action.payload),
      };
    default:
      return state;
  }
}