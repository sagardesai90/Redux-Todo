import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    handleChange = (el) => {
        this.setState({task: el.target.value});
    }

    newTask = () => {
        this.props.addTask(this.state.task);
        this.setState({task: ''});
    }

    render() {
        return (
            <div className="task">
                <input name="task" type="text" value={this.state.task} 
                    onChange={this.handleChange}/>
                <button className="submit-btn" onClick={() => this.props.dispatchAddTask(this.state.task)}>Add</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return { dispatchAddTask: (inputValue) => dispatch(addTask(inputValue)) };
}
export default connect(null, mapDispatchToProps)(NewTask);