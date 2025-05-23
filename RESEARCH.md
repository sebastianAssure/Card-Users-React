# Casos de Uso: Componentes Controlados y No Controlados en React

## Componentes Controlados

Los componentes controlados son ideales cuando necesitas un control completo sobre los datos del formulario y su comportamiento. Algunos casos de uso comunes incluyen:

- **Formularios con validación en tiempo real:** Por ejemplo, formularios de registro o login que muestran mensajes de error mientras el usuario escribe.
- **Formularios que habilitan o deshabilitan botones según condiciones:** Como activar el botón de envío solo cuando todos los campos son válidos.
- **Sincronización con el estado global:** Cuando el formulario debe reflejar cambios en el estado de la aplicación o actualizar otros componentes dinámicamente.
- **Resetear campos desde el código:** Para limpiar el formulario o establecer valores predeterminados programáticamente.
- **Formularios complejos:** Que incluyen múltiples campos dependientes o cálculos en tiempo real basados en la entrada del usuario.

## Componentes No Controlados

Los componentes no controlados son útiles cuando la simplicidad y el rendimiento son prioritarios, o cuando integras código externo. Algunos ejemplos son:

- **Formularios simples:** Donde no se requiere validación inmediata ni sincronización con el estado.
- **Campos que se leen una sola vez:** Como inputs de carga de archivos o campos ocultos.
- **Integración con librerías o componentes de terceros:** Que no manejan el estado con React y utilizan referencias para acceder a sus valores.
- **Optimización de rendimiento:** Evitar re-renderizados frecuentes cuando no es necesario actualizar la interfaz con cada cambio.
- **Migración gradual a React:** Cuando parte del código es antiguo y usa manipulación directa del DOM.

---

En resumen, elige componentes controlados para formularios donde el control y la validación en tiempo real son fundamentales, y componentes no controlados para casos simples.
