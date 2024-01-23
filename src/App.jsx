import { useEffect, useState } from "react";
import UsePaginatedFetch from "./usePaginatedFetch";
import Card from "./components/card";

const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";

function App() {
  const [loading, data] = UsePaginatedFetch(url, 3);
  const [page, setPage] = useState(1);
  const [programmers, setProgrammers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setProgrammers(data[page - 1]);
  }, [loading]);

  return <div className="container pt-3">
    {loading ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-border"></div>
      </div>
    ):(
      <div className="row d-flex justify-content-center">
        {programmers.map(({id,...programmer})=>{
          return(
            <div className="col-3" key={id}>
              <Card {...programmer}/>
            </div>
          )
        })}
      </div>
    )}
  </div>;
}

export default App;
