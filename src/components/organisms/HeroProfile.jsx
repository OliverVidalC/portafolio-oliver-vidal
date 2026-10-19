import { Typography, Button, Row, Col, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const HeroProfile = () => {
  return (
    <section id="personal" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '50px 0' }}>
      <Row justify="space-between" align="middle" style={{ width: '100%' }}>
        <Col xs={24} md={12} style={{ paddingRight: '40px' }}>
          <Title level={4} style={{ color: '#ff4d4f', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Desarrollador Fullstack
          </Title>
          <Title level={1} style={{ fontSize: '4rem', margin: 0, lineHeight: '1.1' }}>
            Hola, soy <br /> Oliver Vidal
          </Title>
          <Paragraph style={{ fontSize: '1.2rem', color: '#555', marginTop: '20px', maxWidth: '500px' }}>
            Transformo ideas en experiencias web rápidas, escalables y visualmente atractivas. Apasionado por el código limpio y la creación de interfaces modernas.
          </Paragraph>
          <Space size="large" style={{ marginTop: '20px' }}>
            <Button type="primary" danger size="large" shape="round" icon={<RocketOutlined />} href="#proyectos">
              Ver mis proyectos
            </Button>
            <Space size="middle">
              {/* Enlaces reales de Oliver */}
              <Button shape="circle" size="large" icon={<GithubOutlined />} href="https://github.com/OliverVidalC" target="_blank" />
              <Button shape="circle" size="large" icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/oliver-vidal-cornejo-ba6281445/" target="_blank" />
            </Space>
          </Space>
        </Col>
        
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" 
            alt="Avatar por defecto" 
            style={{ width: '100%', maxWidth: '400px', borderRadius: '50%', border: '8px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover', aspectRatio: '1/1' }}
          />
        </Col>
      </Row>
    </section>
  );
};