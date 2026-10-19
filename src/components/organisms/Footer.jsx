import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter style={{ textAlign: 'center', background: '#001529', padding: '24px 50px', marginTop: '40px' }}>
      <Text style={{ color: '#fff', display: 'block' }}>
        © {currentYear} Oliver Vidal. Todos los derechos reservados.
      </Text>
      <Text style={{ color: '#8c8c8c', fontSize: '0.9rem' }}>
        Desarrollado con React y Ant Design
      </Text>
    </AntFooter>
  );
};