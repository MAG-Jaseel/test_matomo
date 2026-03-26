import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{ border: "2px solid green", color: "green" }}
          id="button-1"
        >
          Button with ID (id=button-1)
        </div>
        <div
          style={{ border: "2px solid green", color: "green" }}
          className="button-1"
        >
          Button with class name (class=button-1)
        </div>
        <div
          style={{ border: "2px solid green", color: "green" }}
          className="button-dummy"
        >
          Button with class name (class=button-dummy)
        </div>
      </div>
      <form
        style={{
          maxWidth: "500px",
          flexDirection: "column",
          gap: "10px",
          border: "2px solid blue",
          padding: "20px",
        }}
      >
        <input type="text" placeholder="Input 1" id="input-1" />
        <input type="text" placeholder="Input 2" id="input-2" />
        <input type="text" placeholder="Input 3" id="input-3" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
