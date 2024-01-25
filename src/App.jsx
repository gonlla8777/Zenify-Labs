import AppRouter from "./routes/AppRoutes";
import Navbar from "./page/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-neutral-800 w-auto  h-auto min-h-screen min-w-screen">
        <Navbar />
        <div className="justify-items-center text-center mx-auto">
          <AppRouter />
        </div>
      </div>
    </>
  );
}

export default App;
