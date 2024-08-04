"use client"

import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/../../amplify/data/resource";
import clearCachesByServerAction from "@/actions/revalidate";

const client = generateClient<Schema>();

interface TodosListControlsProps {
    id: string;
}


const TodosListControls = ({ id }: TodosListControlsProps) => {

    const handleDelete = async () => {
        console.log("Delete Todo @", id)
        try {
            const { data: todos, errors } = await client.models.Todo.delete({id})

            if(errors){
                console.log(errors)
            }

            clearCachesByServerAction();

        } catch (error) {
            console.error("Error deleting todo", error);
        }
    }

    return (
        <div className="flex gap-2 ">

            <button onClick={handleDelete}>Delete</button>
            
        </div>
    )
}

export default TodosListControls