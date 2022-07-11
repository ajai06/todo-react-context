

export const initialState = {
    tasks: []
}

export const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case "add":
            return {
                tasks: [...state.tasks, { taskName: action.task, isCompleted: false, taskId: action.id }]
            }
        case "done":
            let arr = [...state.tasks];
            arr.find(task => task.taskId === action.id).isCompleted = true;
            return {
                tasks: arr
            }
        case "undo":
            let tasks = [...state.tasks];
            tasks.find(task => task.taskId === action.id).isCompleted = false;
            return {
                tasks: tasks
            }
        case "remove":
            return {
                tasks: state.tasks.filter(item => item.taskId !== action.id)
            }
        default: return initialState

    }
}