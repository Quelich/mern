import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutCard({ workout }) {
  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    }
  };
  return (
    <>
      <div id="workout-card" className="container mx-auto mt-4">
        <div
          key={workout._id}
          className="block max-w-md pl-4 pr-4 pt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {workout.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <strong>Repeats:</strong> {workout.reps}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <strong>Load (kg):</strong> {workout.load}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <strong>Created at:</strong> {workout.createdAt}
          </p>
          <button
            onClick={handleDelete}
            type="button"
            class="text-white max-w-sm mt-4 mx-auto bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default WorkoutCard;
