import { Link } from "react-router-dom";

function WorkoutCard(props) {
  return (
    <>
      <div className="container mx-auto mt-4">
        <Link
          key={props._id}
          to="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            <strong>Repeats:</strong> {props.reps}
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            <strong>Load (kg):</strong> {props.load}
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            <strong>Created at:</strong> {props.createdAt}
          </p>
        </Link>
      </div>
    </>
  );
}

export default WorkoutCard;
