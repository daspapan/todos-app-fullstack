"use server"

import { cookieBasedClient } from "@/utils/amplify-utils"
import { redirect } from "next/navigation";
import { uuid } from 'uuidv4';
import { type Schema } from "@/../../amplify/data/resource";

export async function listAllTodos():Promise<Array<Schema["Todo"]["type"]>>{
    const {data:todos, errors} = await cookieBasedClient.models.Todo.list()
    return todos
}

export async function createTodo({key, content}:{key:string; content: string}){
    console.log("[Key, Content]", key, content)

    const {data:todo, errors} = await cookieBasedClient.models.Todo.create({content, key})

    if(errors !== undefined){
        console.log("[Create-Todo-Error]", errors);
    }else{
        console.log("[Create-Todo]", todo)
    }

    // redirect("/")
}


export async function createPost(formData: FormData){
    const {data:post, errors} = await cookieBasedClient.models.Post.create({
        postId: uuid(),
        title: `POST: ${formData.get("title")?.toString() || ""}`
    })

    if(errors !== undefined){
        console.log("[Create-Post-Error]", errors);
    }
    console.log("[Create-Post]", post)

    redirect("/")
}