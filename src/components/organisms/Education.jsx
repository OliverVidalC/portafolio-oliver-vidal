import { Typography, Timeline } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const Education = () => {
  return (
    <section id="estudios" style={{ padding: '60px 0', background: '#fff', borderRadius: '15px', marginTop: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        <BookOutlined style={{ marginRight: '10px', color: '#1890ff' }} />
        Educación
      </Title>
      
      <Timeline 
        mode="left"
        items={[
          {
            color: '#1890ff',
            children: (
              <>
                <Title level={4} style={{ margin: 0 }}>Analista Programador</Title>
                <Text type="secondary">Duoc UC • 2025 - Presente</Text>
                <p style={{ marginTop: '5px' }}>Formación en desarrollo de software, algoritmos, bases de datos y arquitectura web.</p>
              </>
            ),
          },
          {
            color: 'green',
            children: (
              <>
                <Title level={4} style={{ margin: 0 }}>Educación Media</Title>
                <Text type="secondary">Liceo Santa María Del Trabajo • 2013 - 2016</Text>
              </>
            ),
          },
          {
            color: 'orange',
            children: (
              <>
                <Title level={4} style={{ margin: 0 }}>Educación Media (Inicio)</Title>
                <Text type="secondary">Liceo Industrial de Cerrillos • 2011 - 2013</Text>
              </>
            ),
          },
          {
            color: 'gray',
            children: (
              <>
                <Title level={4} style={{ margin: 0 }}>Educación Básica</Title>
                <Text type="secondary">Colegio Halley • 2002 - 2011</Text>
              </>
            ),
          }
        ]}
      />
    </section>
  );
};