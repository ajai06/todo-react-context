import React from 'react';
import { useForm } from 'react-hook-form';

import { useTodoDispatch } from '../../context/todoContext';

const AddTodo = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const todoDispatch = useTodoDispatch();

    const addTask = (data) => {
        todoDispatch({ type: "add", task: data.taskItem, id: Math.floor(Math.random() * 100) })
        reset()
    }

    return (
        <>
            <div className="col-6 m-auto mt-5">
                <form onSubmit={handleSubmit(addTask)}>

                    <div className='row'>

                        <div className="col-auto">
                            <label htmlFor="todo-input" className="visually-hidden">Task Name</label>
                            <input {...register("taskItem", { required: true })} type="text"
                                className="form-control mb-2" id="todo-input" placeholder="Add your task here"
                            />
                            {
                                errors?.taskItem && <span className='text-danger'>Please enter your task name</span>

                            }
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-dark mb-3">Add</button>
                        </div>
                    </div>

                </form>
            </div>
        </>

    )
}

export default AddTodo