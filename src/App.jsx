import * as React from "react";
import Model from "../src/components/body-highlight/src/component/Model";
import "./styles.css";

const data = [
    {
        name: "Bench Press",
        muscles: ["chest", "triceps", "front-deltoids"]
    },
    {
        name: "Tricep Pushdown",
        muscles: ["triceps"]
    }
];

export default function App(){
    const handleClick = (exercise) => {
        const {
            muscle,
            stats
        } = exercise;
        console.log(stats)
        alert(
            `You clicked the ${muscle}! You've worked out this muscle 
            times through the following exercises:`
          );
    };

    return (
        <div className="App">
          <Model data={data} onClick={handleClick} />
          <Model
            type="posterior"
            data={data}
            highlightedColors={["#e65a5a", "#db2f2f"]}
            onClick={handleClick}
          />
        </div>
      );
}