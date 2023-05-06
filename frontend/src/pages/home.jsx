import { useEffect, useState } from "react";
import WorkoutCard from "../components/workout-card";
import WorkoutForm from "../components/workout-form";

function Home(params) {
  const [workouts, setWorkouts] = useState([]); // [state, setState
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const data = await res.json();

      if (res.ok) {
        setWorkouts(data);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      <div id="home">
        <h1 className="text-3xl ">Home</h1>
        <div id="workout-form">
          <WorkoutForm />
        </div>

        <div id="workouts" className="container mx-auto  mt-6">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Workouts
          </h5>
          <div className="grid grid-cols-4 gap-4">
            {workouts.map((workout) => {
              return (
                <>
                  <WorkoutCard
                    key={workout._id}
                    title={workout.title}
                    reps={workout.reps}
                    load={workout.load}
                    createdAt={workout.createdAt}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
