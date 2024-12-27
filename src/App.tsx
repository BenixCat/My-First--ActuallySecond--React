import AlertBtn from "./components/AlertButton";
function App() {
  return (
    <div>
      <AlertBtn color="danger" onClick={() => console.log("clicked")}>
        Primary
      </AlertBtn>
    </div>
  );
}

export default App;
