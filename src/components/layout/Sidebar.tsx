import { Layout, Menu } from "antd";
import { adminPaths } from "../../routers/admin.routes";
import { siteBarItemsGenerator } from "../../utils";
import { facultyPaths } from "../../routers/faculty.routes";
import { studentPaths } from "../../routers/student.routes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice.";

const { Sider } = Layout;

const userRole = {
  SUPER_ADMIN: "superAdmin",
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

interface User {
  role: string;
}

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser) as User;

  let sidebarItems;

  switch (user!.role) {
    case userRole.SUPER_ADMIN:
      sidebarItems = siteBarItemsGenerator(adminPaths, userRole.SUPER_ADMIN);
      break;
    case userRole.ADMIN:
      sidebarItems = siteBarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = siteBarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = siteBarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
