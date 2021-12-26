import React from "react";
import BrainChildren from "./BrainChildren";
import LoadingSpinner from "./LoadingSpinner";

export default function Brain(props) {
  const [isLoadingRow, setIsLoadingRow] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  React.useEffect(() => {
    if (props.id === 1) {
      setIsLoadingRow(true);
      setTimeout(() => setIsLoadingRow(false), 3000);
    }
  }, [props.id]);

  const imgClassname = isCollapsed ? "arrow-img" : "arrow-img-rotate";

  const Button = () => {
    return (
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {props.numChildren}
        <img
          src="../images/arrow-down.svg"
          alt="arrow-img"
          className={imgClassname}
        />
      </button>
    );
  };

  return isLoadingRow ? (
    <tr>
      <td colSpan={4}>
        <LoadingSpinner className="loading-spinner loading-spinner-row" />
      </td>
    </tr>
  ) : (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.birthYear}</td>
        <td>{props.numChildren === 0 ? 0 : <Button />}</td>
        {props.width < 900 ? null : <td>{props.profession}</td>}
      </tr>
      <tr>{isCollapsed ? null : <BrainChildren id={props.id} />}</tr>
    </>
  );
}
