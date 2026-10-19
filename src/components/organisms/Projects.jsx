import { useState } from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';
import { GithubOutlined, CodeOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;

export const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Frutos Secos Velásquez',
      description: 'Plataforma web colaborativa para la venta y gestión de frutos secos.',
      image: 'https://placehold.co/600x400/ff4d4f/white?text=Frutos+Secos',
      repo: 'https://github.com/BrunoAAguileraV/Proyecto-Frutos-Secos-Velasquez-Aguilera-Vidal-010D'
    },
    {
      id: 2,
      title: 'Gestión Muebles Troncoso',
      description: 'Sistema de gestión digital diseñado para la empresa Muebles Troncoso.',
      image: 'https://placehold.co/600x400/1890ff/white?text=Muebles+Troncoso',
      repo: 'https://github.com/nashoppp/gestion-digital-troncoso'
    },
    {
      id: 3,
      title: 'Portafolio Personal',
      description: 'Mi portafolio interactivo desarrollado en React con Atomic Design.',
      image: 'https://placehold.co/600x400/52c41a/white?text=Mi+Portafolio',
      repo: 'https://github.com/OliverVidalC'
    }
  ]);

  return (
    <section id="proyectos" style={{ padding: '60px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        <CodeOutlined style={{ marginRight: '10px', color: '#ff4d4f' }} />
        Mis Proyectos
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {projects.map((project) => (
          <Col xs={24} sm={12} md={8} key={project.id}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.image} style={{ height: '200px', objectFit: 'cover' }} />}
              actions={[
                <Button type="primary" danger icon={<GithubOutlined />} href={project.repo} target="_blank">
                  Ver Repositorio
                </Button>
              ]}
              style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
            >
              <Meta title={project.title} description={project.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};