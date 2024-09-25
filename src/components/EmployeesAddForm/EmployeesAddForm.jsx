import {Component} from 'react';
import styled from 'styled-components';

const StyledAddForm = styled.div`
    margin-top: 30px;
    padding: 25px;
    background-color: #293241;
    border-radius: 4px;
    box-shadow: 0 13px 30px rgba(0, 0, 0, 0.5);
    color: #E3E4E6;
    form {
        margin-top: 20px;
        input {
            width: 350px;
            margin-right: 20px;
        }
    }
`;

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        if (name.length < 2 || !salary) return;
        this.props.onAdd(name, salary);
        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {
        return (
            <StyledAddForm className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="What's his name?"
                           name="name"
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="Salary in $?"
                           name="salary"
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">
                        Add
                    </button>
                </form>
            </StyledAddForm>
        );
    }
}

export default EmployeesAddForm;