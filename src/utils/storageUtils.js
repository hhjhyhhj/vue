//  数据存储的工具模快

export function saveTodos(todos){
  localStorage.setItem("todos_key",JSON.stringify(todos))
}

export function readTodos(todos){
  return JSON.parse(localStorage.getItem("todos_key") || '[]')
}