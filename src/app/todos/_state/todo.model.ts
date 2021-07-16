export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export function createTodo(title: string) {
  return {
    id: '',
    title,
    completed: false
  } as Todo;
}