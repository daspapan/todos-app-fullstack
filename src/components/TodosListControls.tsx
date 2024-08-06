"use client"

import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/../../amplify/data/resource";
import clearCachesByServerAction from "@/actions/revalidate";
import { remove, StorageError } from "aws-amplify/storage";



const client = generateClient<Schema>();

interface TodosListControlsProps {
    id: string;
}


const TodosListControls = ({ id }: TodosListControlsProps) => {

    const handleDelete = async () => {
        // console.log("Delete Todo @", id)
        try {
            const { data: todo, errors } = await client.models.Todo.delete({id})

            if(errors){
                console.log(errors)
            }

            await remove({path: todo?.key || ""})
            console.log("This is Todo when delete", todo?.key)

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