import React from 'react';
import style from '../containers/App.css';
import uuid from 'uuid';
import Title from '../components/Title';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: '455'
            }, {
            id: 2,
                text: '221'
            }, {
            id: 3,
                text: '144'
                }
            ],
            title: 'Todo List'
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }

    render() {
        return ( <div className = {style.TodoApp} >
            <Title title={this.state.title} numberOfTasks={this.state.data.length} /></div>
        );
    }
}

export default App;