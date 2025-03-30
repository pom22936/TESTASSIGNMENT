import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from './Assignments/assignmentOne/Home';
import HomeTest2 from './Assignments/assignmentTwo/HomeTest2';

const { Header, Content, Footer } = Layout;

const items = [
  {
    label: 'AssignmentOne',
    key: '1',
  },
  {
    label: 'AssignmentTwo',
    key: '2',
  }
]

const Styles= {
  NewBody: {
    minHeight: '100vh',
  }
}

const App: React.FC = () => {
  const [SelectedKeys, setSelectedKeys] = React.useState<string>('1')
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={Styles.NewBody}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[SelectedKeys]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(e) => {
            setSelectedKeys(e.key);
          }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}
        items={[
          {
            title: SelectedKeys === '1' ? 'AssignmentOne' : 'AssignmentTwo',
          }
        ]}
      />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 750,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {SelectedKeys === '1' ? <Home /> : null}
          {SelectedKeys === '2' ? <HomeTest2 /> : null}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;