import { Typography, Form, Input, Button, Card, message } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Datos enviados:', values);
    message.success('¡Mensaje enviado con éxito! Me contactaré pronto.');
    form.resetFields();
  };

  return (
    <section id="contacto" style={{ padding: '60px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        <MailOutlined style={{ marginRight: '10px', color: '#ff4d4f' }} />
        Contacto
      </Title>
      <Card style={{ maxWidth: 600, margin: '0 auto', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="nombre" label="Nombre" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
            <Input placeholder="Tu nombre" size="large" />
          </Form.Item>
          <Form.Item name="email" label="Correo Electrónico" rules={[
            { required: true, message: 'Por favor ingresa tu correo' },
            { type: 'email', message: 'Ingresa un correo válido' }
          ]}>
            <Input placeholder="tu@correo.com" size="large" />
          </Form.Item>
          <Form.Item name="mensaje" label="Mensaje" rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}>
            <Input.TextArea rows={4} placeholder="¿En qué te puedo ayudar?" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" danger htmlType="submit" size="large" block>Enviar Mensaje</Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Paragraph type="secondary">También puedes encontrarme en:</Paragraph>
          <Button type="link" icon={<GithubOutlined />} href="https://github.com/OliverVidalC" target="_blank" size="large">GitHub</Button>
          <Button type="link" icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/oliver-vidal-cornejo-ba6281445/" target="_blank" size="large">LinkedIn</Button>
        </div>
      </Card>
    </section>
  );
};