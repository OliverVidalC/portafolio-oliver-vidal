import { Typography, Timeline } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const Experience = () => {
  return (
    <section id="experiencia" style={{ padding: '60px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        <LaptopOutlined style={{ marginRight: '10px', color: '#ff4d4f' }} />
        Experiencia Laboral
      </Title>
      
      <Timeline 
        mode="alternate"
        items={[
          {
            color: '#ff4d4f',
            children: (
              <div style={{ textAlign: 'left' }}>
                <Title level={4} style={{ margin: 0 }}>Operario de Producción</Title>
                <Text type="secondary">Visopack • 2020 - 2024</Text>
                <p style={{ marginTop: '10px' }}>Trabajo en equipo, cumplimiento de metas de producción y adaptación a procesos industriales.</p>
              </div>
            ),
          },
          {
            color: 'blue',
            children: (
              <div style={{ textAlign: 'right' }}>
                <Title level={4} style={{ margin: 0 }}>Peoneta</Title>
                <Text type="secondary">Áridos El Eucalipto • 2017 - 2020</Text>
                <p style={{ marginTop: '10px' }}>Logística, distribución y trabajo físico bajo presión.</p>
              </div>
            ),
          }
        ]}
      />
    </section>
  );
};