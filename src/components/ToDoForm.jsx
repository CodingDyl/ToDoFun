import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
const ToDoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="add-task" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input
                 type="text"
                 placeholder='Update your item' 
                 className="in-task" 
                 value={input} 
                 name="text"
                 ref={inputRef}
                 onChange={handleChange}/>
                <Button 
                variant='contained' 
                class="btn-task" 
                type='submit'
                >
                    Update
                </Button>
                </>
            ) : ( 
            <>
            <input type="text" placeholder='Add a item' className="in-task" value={input} name="text" ref={inputRef} onChange={handleChange}/>
            <Button variant='contained' class="btn-task" type='submit'>Add Task</Button>
            </>
            )}
        </form>
    )

}

export default ToDoForm;