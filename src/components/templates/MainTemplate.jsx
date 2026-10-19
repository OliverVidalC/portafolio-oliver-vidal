import { Layout } from 'antd';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

const { Content } = Layout;

export const MainTemplate = ({ children }) => {
  return (
    <Layout style={{ background: '#fafafa', minHeight: '100vh' }}>
      <Navbar />
      <Content style={{ padding: '0 10%', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};