import { useState } from "react";

const Community = () => {
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div>
      COMMUNITY{" "}
      <button
        onClick={() => alert("Hello: Agent-Ellianor")}
        style={{ margin: "15px" }}
      >
        Press Me
      </button>
    </div>
  );
};

export default Community;
