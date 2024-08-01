"use client"

import React, { useEffect, useState } from 'react'
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/../../amplify/data/resource";
import { listAllTodos } from '@/actions/actions';

const client = generateClient<Schema>();

import { cookieBasedClient } from "@/utils/amplify-utils"
import { Flex, Text } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';

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
    
    console.log("[ToDoS]:", todos)


    return (
        <div>
            <h1>List of All Todos</h1>
            
            <ul>
                {todos?.map((todo, idx) => (
                    <li key={idx}>
                        <Flex justifyContent={"space-between"}>
                            <Text>{todo.content}</Text>

                            {todo.key ? (
                                <StorageImage
                                    path={todo.key}
                                    alt={todo.content || ""}
                                    width={"100px"}
                                />
                            ) : null}

                        </Flex>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodosListComponent