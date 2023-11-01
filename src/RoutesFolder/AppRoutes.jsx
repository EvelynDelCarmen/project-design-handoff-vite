// AppRoutes.jsx
import { Route, Routes } from "react-router-dom";
import PageOne from "../Pages/PageOne";
import PageTwo from "../Pages/PageTwo"; // Import PageTwo with default export

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/page-two" element={<PageTwo />} />
        </Routes>
    );
};

