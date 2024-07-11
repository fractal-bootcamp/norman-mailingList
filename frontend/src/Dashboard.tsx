import ManageList from "./ManageList";
import BrowseLists from "./BrowseLists";
import { useState } from "react";
import { UserButton } from "@clerk/clerk-react";

const Dashboard = () => {
  const [selectedList, setSelectedList] = useState(null);
  if (!selectedList) {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#99582A",
        }}
      >
        <BrowseLists setSelectedList={setSelectedList}></BrowseLists>
        <div
          style={{
            width: "50vw",
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "black" }}>No list selected</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            width: "5%",
          }}
        >
          <div style={{ transform: "scale(2)", paddingTop: "40px" }}>
            <UserButton></UserButton>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#99582A",
        }}
      >
        <BrowseLists setSelectedList={setSelectedList}></BrowseLists>
        <ManageList selectedList={selectedList}></ManageList>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            width: "5%",
          }}
        >
          <div style={{ transform: "scale(2)", paddingTop: "40px" }}>
            <UserButton></UserButton>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
