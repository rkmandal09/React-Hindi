import { useState } from "react";

const Notes = () => {
  const [form, setForm] = useState("");
  const [details, setDtails] = useState("");
  const [task, setTask] = useState([]);

  const FormHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ form, details });
    setTask(copyTask);
    setForm("");
    setDtails("");
  };

  const noteDelete = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="bg-black min-h-screen text-white ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 bg-black">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <div className=" rounded-lg shadow-lg p-6 border-2 border-gray-500">
              <h2 className="text-2xl font-bold mb-6">Add New Note</h2>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  FormHandler(e);
                }}
              >
                {/* Title */}
                <div>
                  <label className="block mb-2 font-medium">Title</label>

                  <input
                    spellCheck={false}
                    type="text"
                    placeholder="Enter title"
                    value={form}
                    onChange={(e) => {
                      setForm(e.target.value);
                    }}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block mb-2 font-medium">Description</label>

                  <textarea
                    rows="6"
                    placeholder="Write your note..."
                    value={details}
                    spellCheck={false}
                    className="w-full resize-none border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                      setDtails(e.target.value);
                    }}
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-white text-black font-bold w-full px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition active:scale-95"
                >
                  Save Note
                </button>
              </form>
            </div>
          </div>

          {/* Recent Notes */}
          <div className="w-full lg:w-1/2 rounded-lg border-2 border-gray-500 shadow-lg p-6">
            <div className=" w-full h-full ">
              <h2 className="text-2xl font-bold mb-6">Recent Notes</h2>
              <div className="flex flex-wrap gap-4">
                {task.map((elam, idx) => {
                  return (
                    <div
                      key={idx}
                      className=" flex justify-between flex-col items-start bg-slate-100 w-40 rounded-2xl p-4 relative bg-cover bg-center  h-52"
                    >
                      <div>
                        <h3 className="leading-tight text-xl font-bold text-black ">
                          {elam.form}
                        </h3>
                        <p className="leading-tight pt-2 font-medium text-gray-500 ">
                          {elam.details}
                        </p>
                      </div>
                      <button
                        className=" w-full active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                        onClick={() => {
                          noteDelete(idx);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;

// export default App;
