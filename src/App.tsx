import { useState } from "react";
import AlertBtn from "./components/AlertButton";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      {alertVisible && (
        <AlertBtn onClose={() => setAlertVisiblity(false)}>My alert</AlertBtn>
      )}
      <Button color="danger" onClick={() => setAlertVisiblity(true)}>
        Primary
      </Button>
    </div>
  );
}

export default App;
