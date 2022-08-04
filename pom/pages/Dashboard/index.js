import "antd/dist/antd.css";
import { Breadcrumb, Menu } from "antd";

import { UserOutlined } from "@ant-design/icons";

import { Typography } from "antd";
const { Title } = Typography;
import { Layout, Avatar } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
const { Header, Footer, Sider, Content } = Layout;
import Icons from "antd/lib/image/PreviewGroup";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";

const index = () => {
  return (
    <Layout style={{ color: "white" }}>
      <Header style={{ color: "white", padding: "10px" }}>
        <Avatar
          style={{ float: "right" }}
          size="large"
          icon={<UserOutlined />}
        />

        <Title style={{ color: "white" }} level={2}>
          DASHBOARD
        </Title>
      </Header>

      <Layout>
        <Sider style={{ background: "grey" }}>
          <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
            <Menu.Item key="Dashboard">Dashboard</Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icons type="mail"></Icons>
                  <span>Navigate</span>
                </span>
              }
            >
              <Menu.ItemGroup key="About us" title="Place">
                <Menu.Item key="location1">Location 1</Menu.Item>
                <Menu.Item key="location2">Location 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout style={{ color: "white" }}>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                color: "black",
                background: "#fff",
                padding: 24,
                minHeight: 500,
              }}
            >
              CONTENT
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default index;
