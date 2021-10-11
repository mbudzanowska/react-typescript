interface IProps {
  items: {
    id: string;
    text: string;
  }[];
}

const TodoList: React.FC<IProps> = ({ items }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
