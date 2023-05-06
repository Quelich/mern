import { useEffect, useState } from "react";
import WorkoutCard from "../components/workout-card";
import WorkoutForm from "../components/workout-form";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function Home(params) {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      <div id="home">
        <div id="workout-form">
          <WorkoutForm />
        </div>

        <div id="workouts" className="container mx-auto mb-10  mt-6">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Workouts
          </h5>
          <div className="grid grid-cols-4 gap-4">
            {workouts.map((workout) => {
              return (
                <>
                  <WorkoutCard workout={workout} />
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
