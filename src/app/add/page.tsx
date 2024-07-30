import { createPost, createTodo } from '@/actions/actions'
import React from 'react'
import { text } from 'stream/consumers'

const AddPostPage = () => {
    return (
        <div>
            
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
        </div>
    )
}

export default AddPostPage