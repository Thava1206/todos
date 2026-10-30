export function createTodo(title,priority) {
    return {
        id: crypto.randomUUID(),
        title,
        priority: Number(priority),
        done: false
    };
}