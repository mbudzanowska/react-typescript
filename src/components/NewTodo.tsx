import { useRef } from "react";

interface IProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<IProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input ref={textInputRef} type="text" id="todo-text" />
      </div>
      <button onClick={onSubmitClick} type="submit">
        ADD TODO
      </button>
    </form>
  );
};

export default NewTodo;
