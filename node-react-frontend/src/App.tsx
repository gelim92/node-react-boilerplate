import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <Button type="primary" icon={<PlusOutlined />}>
        Hello Antd
      </Button>
    </div>
  );
}

export default App;
