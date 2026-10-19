# Portafolio Personal - Oliver Vidal 

Proyecto de portafolio web interactivo desarrollado como Single Page Application (SPA). Construido aplicando la metodología estricta de Atomic Design para asegurar componentes escalables y código limpio.

## Tecnologías y Herramientas
- **React (Vite):** Framework principal.
- **Ant Design:** Librería de componentes UI para mantener consistencia visual.
- **Vitest & Testing Library:** Suite de pruebas automatizadas.
- **React Hook Form:** Manejo y validación del estado del formulario.

## Arquitectura (Atomic Design)
El código fuente está estructurado siguiendo jerarquías de componentes:
- `atoms/`: Componentes base e indivisibles.
- `molecules/`: Uniones simples de átomos.
- `organisms/`: Secciones complejas (Navbar, HeroProfile, Formulario).
- `templates/`: Esqueleto visual de la aplicación.
- `pages/`: Vista principal (Home) que renderiza el template.

## Instrucciones de Instalación Local

Sigue estos comandos en tu terminal para levantar el proyecto en tu computador:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/OliverVidalC/portafolio-oliver-vidal.git](https://github.com/OliverVidalC/portafolio-oliver-vidal.git)


Entrar al directorio del proyecto:
cd mi-portafolio

Instalar las dependencias:
npm install


Levantar el servidor de desarrollo:
npm run dev

## Pruebas Automatizadas (Testing)
El proyecto cuenta con una suite de pruebas unitarias que validan el correcto renderizado de los organismos y el formulario para ejecutarlas, corre el siguiente comando:

npm run test