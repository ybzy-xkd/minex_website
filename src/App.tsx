import {BrowserRouter, useRoutes} from "react-router-dom";
import {Layout} from "antd";
import routers from "@/config/routers.tsx";

function AppRouters () {
  return useRoutes(routers)
}
function App() {

  return (
    <Layout>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </Layout>
  )
}

export default App
