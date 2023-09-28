import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Campaign from "./pages/campaign";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/campaign/:id",
            element: <Campaign />,
        },
    ]);
    return (
        <div className="App">
            <Header />
            <main className="mt-10">
                <RouterProvider router={router} />
            </main>
        </div>
    );
}

export default App;
