
import React from "react";

import TodosCreateComponent from "@/components/TodosCreate";

export default async function Home() {

  return (
    
    <main>

      <h1>List of All Todos</h1>

      <TodosCreateComponent />
      
    </main>
  );
}
