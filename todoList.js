function TodoList() {
    const [todos, setTodos] = React.useState({ title: '', list: [], isComplete:[], })
    const { title, list, isEdit} = todos

    let updateToList = (event) => {
        
        setTodos({
            ...todos,
            title: event.target.value,
        })
        // console.log('inside update()',todos);
    }
    let addToList = (event) => {
        event.preventDefault()
        todos.list.push(title),
        todos.isComplete.push(false)
            setTodos({
                ...todos,
                title: '',
            })
        console.log('After refresh', todos)
    }
    let removeFromList = (data) => {
        // console.log(data);
        list.splice(data, 1)
        todos.isComplete.splice(data,1)
        setTodos({
            ...todos
        })
    }
    let markDone=(index)=>{
        todos.isComplete[index]=!todos.isComplete[index];
        setTodos({
            ...todos,
        })
    }
    // let editList = (data) => {
    //     // console.log(data);
    //     setTodos({
    //         ...todos,
    //         title: list[data],
    //         isEdit: !isEdit
    //     }, () => { list.splice(data, 1) })
    // }
    return <div className='content'>
        <h1>TO-DO LIST</h1>
        <form>
        <input type='text' value={todos.title} onChange={(event) => { updateToList(event) }}></input>
        <button className='btn' id='addBtn' onClick={addToList}>Add</button>
        </form>
        <div className='List'>
            <ul >
                {
                    console.log('content', todos),
                    list.map((item, index) => {
                        return <li key={index} className={todos.isComplete[index]?'doneBtn':null}><div className='item'>{item}</div><button className='btn' id='doneBtn' onClick={()=>markDone(index)} >&#10003;</button><button className='btn' id='delBtn' onClick={() => removeFromList(index)}>X</button></li>
                    })
                }
            </ul>
        </div>
    </div>
}
ReactDOM.render(<TodoList />, document.getElementById('container'))