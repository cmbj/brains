import React from "react";
import axios from "axios";

export default function BrainChildren(props) {
  const [brainsChildren, setBrainsChildren] = React.useState([]);

  React.useEffect(() => {
    const brainsChildrenURL =
      "http://assignment.siteimprove.com/api/persondetails/" + props.id;
    axios.get(brainsChildrenURL).then((response) => {
      setBrainsChildren(response.data);
    });
  }, [props.id]);

  if (brainsChildren.length === 0) {
    return null;
  } else {
    return (
      <td colSpan={4}>
        <table className="table-inner">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year of birth</th>
              <th>Mother</th>
            </tr>
          </thead>
          <tbody>
            {brainsChildren.map((child) => {
              return (
                <tr>
                  <td>{child.Name}</td>
                  <td>{child.YearOfBirth}</td>
                  <td>{child.Mother}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </td>
    );
  }
}
