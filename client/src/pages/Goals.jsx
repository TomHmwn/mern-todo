import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const deleteGoal = (id) => {
  fetch(`http://localhost:8889/api/goals/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const ShowGoals = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8889/api/goals")
      .then((res) => res.json())
      .then((goals) => setGoals(goals))
      .catch((err) => console.log(err));
  }, [goals]);
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 py-10">
      <div className="md:flex md:items-center md:justify-between mb-10">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card */}
        {goals.map((goal) => (
          <div className="flex-1 w-42 border-2 rounded-lg flex items-center justify-between" key={goal._id}>
            <p className="text-lg font-medium text-indigo-600">{goal.name}</p>
            <div className="flex px-2 space-x-2 flex-row justify-center">
              <Link to={`/edit/${goal._id}`} className="bg-amber-500 rounded-md p-2" href="#">
                edit
              </Link>
              <button className="bg-rose-500 rounded-md p-2" onClick={() => deleteGoal(goal._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/create" className="bg-green-500 rounded-md p-2" href="#">
          Create
        </Link>
      </div>
    </div>
  );
};

export default ShowGoals;
