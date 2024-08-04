"use client";

import { Alert, Button, Card, TextField } from '@aws-amplify/ui-react';
import React, { useState } from 'react'
import { StorageImage, StorageManager } from '@aws-amplify/ui-react-storage';
import { createTodo } from '@/actions/actions';

const TodosCreateComponent = () => {

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [prevUploadImage, setPrevUploadImage] = useState<string | undefined>("");
    const [content, setContent] = useState<string>("")

    const handleSuccess = () => {
        console.log("Product created successfully.");
        setIsSuccess(true);
        setIsError(false);
    };

    const handleError = () => {
        console.log("There was an error creating the product.");
        setIsError(true);
        setIsSuccess(false);
    };

    const createTodoHandler = () => {
        const key = prevUploadImage;
        if(!key || !content) return;
        createTodo({key, content}) ;
    }

    return (
        
        <Card>
            {isError && (
                <Alert variation='error' isDismissible={true}>
                    There was an error during creation of Todo item.
                </Alert>
            )}

            {isSuccess && (
                <Alert variation='success' isDismissible={true}>
                    Todo item created successfully.
                </Alert>
            )}

            <TextField
                label="Content"
                value={content}
                onChange={(e) => {
                  let { value } = e.target;
                  setContent(value)
                }}
            ></TextField>

            {prevUploadImage && <StorageImage path={prevUploadImage} alt={prevUploadImage} width={"100px"}/>}

            {prevUploadImage && (
                <Button onClick={() => setPrevUploadImage(undefined)}>Remove Image</Button>
            )}

            <StorageManager
                path={"media/"}
                acceptedFileTypes={["image/*"]}
                maxFileCount={1}
                processFile={({file,key}) => {
                    const fileParts = key.split('.');
                    const ext = fileParts.pop();
                    return {file, key:`${Date.now()}${fileParts.join('.')}.${ext}`}
                }}
                /* onUploadStart={({key}) => {
                    const content = window.prompt("Todo content");
                    if(!key || !content) return;
                    createTodo({key, content}) ;
                }} */
                components={{
                    /* Container({children}){
                        return <Card variation='elevated'>{children}</Card>
                    }, */
                    FilePicker({onClick}){
                        return <button onClick={onClick}>Choose File for Upload</button>
                    }
                }}
                onUploadSuccess={({key}) => {
                    setPrevUploadImage(key)
                }}
                onFileRemove={({key}) => {
                    setPrevUploadImage(undefined)
                }}
            />

            <button type="submit" onClick={() => createTodoHandler()}>Submit</button>

        </Card>
        
    )
}

export default TodosCreateComponent