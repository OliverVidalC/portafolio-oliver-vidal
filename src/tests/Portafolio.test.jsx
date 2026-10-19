import { render, screen } from '@testing-library/react';
import { HeroProfile } from '../components/organisms/HeroProfile';
import { Projects } from '../components/organisms/Projects';
import { Contact } from '../components/organisms/Contact';

describe('Suite de Pruebas del Portafolio', () => {

  // Test 1: Valida el Organismo Principal (Presentación)
  it('1. Renderiza correctamente la presentación principal (HeroProfile)', () => {
    render(<HeroProfile />);
    expect(screen.getByText(/Hola, soy/i)).toBeInTheDocument();
    expect(screen.getByText(/Oliver Vidal/i)).toBeInTheDocument();
  });

  // Test 2: Valida el Organismo de Datos Dinámicos (Proyectos)
  it('2. Renderiza la sección de proyectos y sus tarjetas', () => {
    render(<Projects />);
    expect(screen.getByText(/Mis Proyectos/i)).toBeInTheDocument();
    expect(screen.getByText(/Frutos Secos Velásquez/i)).toBeInTheDocument();
  });

  // Test 3: Valida el componente del Formulario
  it('3. Renderiza el formulario de contacto con su botón de envío', () => {
    render(<Contact />);
    expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeInTheDocument();
  });

});