
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./RoutesFolder/AppRoutes";


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;

