import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button color="danger" onClick={() => console.log("clicked")}>
        Primary
      </Button>
    </div>
  );
}

export default App;
