import React from "react";
import Brain from "./Brain";

export default function Table(props) {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div>
      <h1>Brains</h1>
      <table className="table-outer">
        <thead>
          <tr>
            <th>Name</th>
            <th>Year of birth</th>
            <th>Children</th>
            {width < 900 ? null : <th>Profession</th>}
          </tr>
        </thead>
        <tbody>
          {props.brains.map((brain) => {
            return (
              <Brain
                key={brain.Id}
                id={brain.Id}
                name={brain.Name}
                birthYear={brain.YearOfBirth}
                numChildren={brain.NumChildren}
                profession={brain.Profession}
                width={width}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
