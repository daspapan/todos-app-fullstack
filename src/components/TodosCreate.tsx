"use client";

import { Alert, Button, Card } from '@aws-amplify/ui-react';
import React, { useState } from 'react'
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { createTodo } from '@/actions/actions';

const TodosCreateComponent = () => {

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

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

            <StorageManager
                path={"media/"}
                acceptedFileTypes={["image/*"]}
                maxFileCount={1}
                processFile={({file,key}) => {
                    const fileParts = key.split('.');
                    const ext = fileParts.pop();
                    return {file, key:`${Date.now()}${fileParts.join('.')}.${ext}`}
                }}
                onUploadStart={({key}) => {
                    const content = window.prompt("Todo content");
                    if(!key || !content) return;
                    createTodo({key, content}) ;
                }}
                components={{
                    Container({children}){
                        return <Card variation='elevated'>{children}</Card>
                    },
                    FilePicker({onClick}){
                        return <Button variation='primary' onClick={onClick}>Add Todo and Choose File for Upload</Button>
                    }
                }}
            />

        </Card>
        
    )
}

export default TodosCreateComponent