import React from "react";
import { Layout, Card, Row, Col, Statistic, List, Avatar } from "antd";
import {
  UserOutlined,
  CarOutlined,
  DollarOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const { Header, Content, Footer } = Layout;

// Mock Data
const activeDrivers = 45;
const completedRides = 1200;
const revenue = 78000;
const notifications = [
  "Driver John completed 50 rides this week.",
  "Revenue target exceeded by 15%.",
  "New feedback received from Rider Sarah.",
];

// Revenue Data for Chart
const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 12000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 15000 },
  { month: "May", revenue: 20000 },
  { month: "June", revenue: 20000 },
  { month: "July", revenue: 20000 },
  { month: "Aug", revenue: 18000 },
  { month: "Sept", revenue: 18000 },
  { month: "Oct", revenue: 24000 },
  { month: "Nov", revenue: 22000 },
  { month: "Dec", revenue: 22000 },
];

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          backgroundColor: "#001529",
          color: "#fff",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        System Dashboard
      </Header>

      {/* Content */}
      <Content style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          {/* Active Drivers */}
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Active Drivers"
                value={activeDrivers}
                prefix={<UserOutlined />}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>
          {/* Completed Rides */}
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Completed Rides"
                value={completedRides}
                prefix={<CarOutlined />}
                valueStyle={{ color: "#1890ff" }}
              />
            </Card>
          </Col>
          {/* Revenue */}
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Revenue (USD)"
                value={revenue}
                prefix={<DollarOutlined />}
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          {/* Notifications */}
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Notifications"
                value={notifications.length}
                prefix={<BellOutlined />}
              />
            </Card>
          </Col>
        </Row>

        {/* Revenue Bar Chart */}
        <Row style={{ marginTop: "20px" }}>
          <Col span={24}>
            <Card title="Revenue Overview">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#1890ff" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Notification List */}
        <Row style={{ marginTop: "20px" }}>
          <Col span={24}>
            <Card title="Recent Notifications">
              <List
                itemLayout="horizontal"
                dataSource={notifications}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar icon={<BellOutlined />} />}
                      title={item}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        Dashboard ©2024 Created with Ant Design
      </Footer>
    </Layout>
  );
};

export default Dashboard;