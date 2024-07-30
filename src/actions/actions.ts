"use server"

import { cookieBasedClient } from "@/utils/amplify-utils"
import { redirect } from "next/navigation";
import { uuid } from 'uuidv4';

export async function createTodo(formData: FormData){
    const {data:todo, errors} = await cookieBasedClient.models.Todo.create({
        content: formData.get("title")?.toString() || ""
    })

    console.log("[Create-Todo]", todo);
    console.log("[Create-Todo-Error]", errors);

    redirect("/")
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