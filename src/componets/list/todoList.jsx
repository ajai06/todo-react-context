import React from 'react';

import { useTodoState, useTodoDispatch } from '../../context/todoContext';

const TodoList = () => {

    const todos = useTodoState();
    const todoDispatch = useTodoDispatch()

    const doneTask = (id) => {
        todoDispatch({ type: "done", id: id })
    }

    const undoTask = (id) => {
        todoDispatch({ type: "undo", id: id })
    }

    const removeTask = (id) => {
        todoDispatch({ type: "remove", id: id })
    }

    return (
        <>
            <div className="col-8 m-auto mt-3">
                <h3>Tasks</h3>
                <ul className='m-auto border'>
                    {
                        todos.tasks.length > 0 ? todos.tasks.map((todo, i) => (
                            <li key={todo.taskId} className={"my-3 row " + (todo.isCompleted && ' text-decoration-line-through')}>
                                <span className='col-8'>{i + 1}. {todo.taskName}</span>
                                <span className='col-4'>
                                    {
                                        todo.isCompleted
                                            ? <button className='btn btn-sm btn-primary' onClick={() => undoTask(todo.taskId)}>Undo</button>
                                            : <button className='btn btn-sm btn-success' onClick={() => doneTask(todo.taskId)}>Done</button>
                                    }
                                    <button className='btn btn-sm btn-danger mx-2' onClick={() => removeTask(todo.taskId)}>Remove</button>
                                </span>
                            </li>
                        )) : <div className='m-5 text-center'>No records found</div>
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoList