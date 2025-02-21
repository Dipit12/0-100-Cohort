import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {userData ? <Card name={userData.name} email={userData.email} /> : <p>Loading...</p>}
    </div>
  );
}

function Card({ name, email }) {
  return (
    <div style={{ height: "100px", width: "200px", backgroundColor: "salmon", padding: "10px" }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default App;
