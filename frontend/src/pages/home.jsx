import { useEffect, useState } from "react";
import WorkoutCard from "../components/workout-card";

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
        <div id="workouts">
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
    </>
  );
}

export default Home;
