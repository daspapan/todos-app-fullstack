import { createPost, createTodo } from '@/actions/actions'
import TodosCreateComponent from '@/components/TodosCreate'
import React from 'react'
import { text } from 'stream/consumers'

const AddTodosPage = () => {
    return (
        <>
        
            {/* <div>
                
                <form action={createPost} className='p-4 flex flex-col items-center gap-4'>

                    <input 
                        id="title" 
                        type="text" 
                        name="title" 
                        placeholder='Title' 
                        className='border border-gray-200 text-gray-900 block p-2 rounded-lg'/>

                    <button type="submit" className='text-white bg-teal-600 rounded p-4'>
                        Submit
                    </button>

                </form> 
            </div> */}

            <TodosCreateComponent/>
            
        </>
    )
}

export default AddTodosPage