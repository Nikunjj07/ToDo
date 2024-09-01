import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div className="input-div">


        <input className="title" id="title" type="text" placeholder="Title" onChange={function(e){
            setTitle(e.target.value)
        }}></input> <br />

        <input className="description" id="description" type="text" placeholder="Description" onChange={function(e){
            setDescription(e.target.value)
        }}></input> <br />

        <button className="add-todo-button" onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title ,
                    description: description
                }),
                headers: {
                    "Content-Type" : "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("ToDo added!")
                })
        }}>Add a ToDo</button>
    </div>
}