import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/header";

function App() {
  const content = useRoutes(routes);
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <Header />
          {content}
        </div>
      </div>
    </>
  );
}

export default App;
