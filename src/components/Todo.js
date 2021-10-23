function Todo() {
  return (
    <div className="shadow-lg rounded-lg bg-white p-5 m-4 flex items-center justify-between">
      <h2 className="text-lg">Hello there</h2>
      <div className="actions">
        <button className="ml-2 py-2 px-4 text-sm text-white shadow-lg bg-blue-500 rounded-lg">Edit</button>
        <button className="ml-2 py-2 px-4 text-sm text-white shadow-lg bg-blue-700 rounded-lg">Delete</button>
      </div>
    </div>
  );
}

export default Todo;