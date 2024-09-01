export function Todos({todos}){
    
    return <div>
        {todos.map((todo)=>{
            function buttonCompleteStatus(){
                console.log(todo.completed)
                fetch("http://localhost:3000/completed",{
                    method: "PUT",
                    body: JSON.stringify({
                        id : todo._id
                    }),
                    headers: {
                        "Content-Type" : "application/json"
                    }
                })
                console.log("clicked")
            }
            return <div className="output-div">
                <div className="text-output">
                    <h1 className="title-output">{todo.title}</h1>
                    <p className="description-output">{todo.description}</p>
                </div>
                <div className="complete-button-div">
                    <button className="complete-button" onClick={buttonCompleteStatus}>{todo.completed == true ? "Completed":"Mark as Complete"}</button>
                </div>
            </div>
        })}
    </div>
}