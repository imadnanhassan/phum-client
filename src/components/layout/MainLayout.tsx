
import {  Layout } from "antd";
const { Header, Content } = Layout;
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function MainLayout() {
  return (
    <div>
      <Layout style={{ height: "100%" }}>
        <Sidebar />
        <Layout>
          <Header>
            {/* <Button onClick={handleLogout}>Logout</Button>{" "} */}
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
