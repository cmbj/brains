import axios from "axios";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import Table from "./Table";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [brains, setBrains] = React.useState([]);

  React.useEffect(() => {
    const brainsURL = "http://assignment.siteimprove.com/api/persons";
    axios.get(brainsURL).then((response) => {
      setBrains(response.data);
      setTimeout(() => setIsLoading(false), 3000);
    });
  }, []);

  return isLoading ? (
    <LoadingSpinner className="loading-spinner" />
  ) : (
    <Table brains={brains} />
  );
}
