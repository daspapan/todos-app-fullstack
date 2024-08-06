"use client"

import React, { useEffect, useState } from 'react'
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/../../amplify/data/resource";
import { listAllTodos } from '@/actions/actions';

const client = generateClient<Schema>();

import { cookieBasedClient } from "@/utils/amplify-utils"
import { Flex, Text } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { Key } from 'aws-cdk-lib/aws-kms';
import TodosListControls from './TodosListControls';

const TodosListComponent = () => {

    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([])

    async function listTodos(){
        /*client.models.Todo.observeQuery().subscribe({
          next: (data) => setTodos([...data.items])
        }) */

        const { data: todos, errors } = await client.models.Todo.list()
        if(errors){
            console.log(errors)
        }
        setTodos([...todos])
    }

    useEffect(() => {
        listTodos();
    }, [])
    
    // console.log("[ToDoS]:", todos)


    return (
        <div className="max-w-screen-lg mx-auto mt-20">

            <h2>List of All Todos</h2>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <div className="mt-4 flex gap-4 pb-5 snap-x overflow-x-auto">
                {/* <!-- Band 1 --> */}
                {todos?.map((todo) => (

                    
                    <div key={todo.id} className="min-w-[80%] md:min-w-[40%]">
                        {/* <div style={{"background-image: url('/band1.jpg');"}} className="h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20"></div> */}

                        {todo.key ? (
                            <StorageImage
                                path={todo.key}
                                alt={todo.content || ""}
                                width={"80px"}
                                height={"80px"}
                                className="h-80 w-full snap-center rounded-xl bg-cover shadow-md shadow-black/20 border-red-500 "
                            />
                        ) : null}

                        <h5 className="mt-2">{todo.content}</h5>
                        <h6>{todo.createdAt}</h6>
                        <TodosListControls id={todo.id}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodosListComponent