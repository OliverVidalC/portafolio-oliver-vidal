import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const Navbar = () => {
  const menuItems = [
    { key: 'personal', label: <a href="#personal">Inicio</a> },
    { key: 'experiencia', label: <a href="#experiencia">Experiencia</a> },
    { key: 'estudios', label: <a href="#estudios">Educación</a> },
    { key: 'proyectos', label: <a href="#proyectos">Proyectos</a> },
    { key: 'contacto', label: <a href="#contacto">Contacto</a> },
  ];

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center', padding: '0 50px' }}>
      <div style={{ color: '#ff4d4f', fontWeight: '900', fontSize: '1.5rem', marginRight: 'auto', letterSpacing: '1px' }}>
       Oliver Desarrollador
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['personal']} items={menuItems} style={{ minWidth: '400px', background: 'transparent' }} />
    </Header>
  );
};