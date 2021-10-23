import Todo from "../components/Todo";

function TodoPage() {
  return (
    <div className="">
      <h1 className="text-lg text-white font-bold uppercase bg-blue-300 h-14 flex items-center p-4">
        My todos
      </h1>
      <div className="flex flex-col bg-blue-300">
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}
export default TodoPage;
