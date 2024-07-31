

/* import { cookieBasedClient } from "@/utils/amplify-utils";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import output from "@/../amplify_outputs.json";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api"; 
import { type Schema } from "@/../../amplify/data/resource";*/
import TodosCreateComponent from "@/components/TodosCreate";
import TodosListComponent from "@/components/TodosList";


/*Amplify.configure(output)
const client = generateClient<Schema>();*/


export default async function Home() {

  /* const {data: posts, errors} = await cookieBasedClient.models.Post.list({
    selectionSet: ["title", "id"],
    authMode: "iam"
  })

  console.log("[Get-Posts-List]: ", posts, errors); */

  /* const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([])

  function listTodos(){
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items])
    })
  }

  useEffect(() => {
    listTodos();
  }, [])

  console.log("[ToDoS]:", todos)

  function createTodo({key, content}:{key:string; content: string}){
    client.models.Todo.create({content, key})
  }  */

  return (
    <main>
      
      {/* <h1>List of All Titles</h1>

      <ul>
        {posts?.map((post, idx) => (
          <li key={idx}>{post.title}</li>
        ))}
      </ul> */}

     {/*  <h1>List of All Todos</h1> */}

      {/* <StorageManager
        path={"media/"}
        acceptedFileTypes={["image/*"]}
        maxFileCount={1}
        onUploadStart={({key}) => {
          const content = window.prompt("Todo content");
          if(!key || !content) return;
          createTodo({key, content}) ;
        }}
      /> */}

      <TodosListComponent />

      <TodosCreateComponent/>
      
    </main>
  );
}
