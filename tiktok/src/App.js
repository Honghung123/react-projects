import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes as routes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";
import { Fragment } from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        // Neu khong co layout(undefined) thi su dung default layout
                        // Neu lay = null thi khong su dung layout
                        // Neu khac null thi su dung layout do
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
