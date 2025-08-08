# Configuración de Enlaces Externos - Redes Sociales

## 🎯 **Funcionalidad Implementada**

### **Enlaces de Redes Sociales**
Los enlaces de redes sociales en el Footer están configurados para abrir en **nuevas pestañas** sin salir del proyecto principal.

### **URLs Configuradas:**
- **Facebook**: `https://www.facebook.com`
- **Twitter**: `https://twitter.com`
- **Instagram**: `https://www.instagram.com`
- **LinkedIn**: `https://www.linkedin.com`

## 🔧 **Atributos Utilizados**

### **target="_blank"**
- Abre el enlace en una nueva pestaña/ventana
- Mantiene la página principal abierta

### **rel="noopener noreferrer"**
- **noopener**: Previene que la nueva página acceda a `window.opener`
- **noreferrer**: No envía información de referencia a la nueva página
- **Seguridad**: Protege contra ataques de phishing

### **aria-label**
- Proporciona información accesible para lectores de pantalla
- Indica que el enlace se abre en nueva pestaña

## 📱 **Experiencia de Usuario**

### **Ventajas:**
- ✅ Usuario no pierde la página principal
- ✅ Fácil regreso al sitio web
- ✅ Mejor experiencia de navegación
- ✅ Mantiene el contexto del proyecto

### **Indicadores Visuales:**
- Hover effects en los iconos
- Tooltips informativos
- Etiquetas ARIA para accesibilidad

## 🚀 **Implementación Técnica**

### **Footer Component:**
```jsx
<a
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Síguenos en ${social.name} (se abre en nueva pestaña)`}
  title={`Síguenos en ${social.name}`}
>
  <social.icon size={20} />
</a>
```

### **FooterLink Component:**
```jsx
const isExternalLink = href && (href.startsWith('http://') || href.startsWith('https://'));

<a
  href={href}
  {...(isExternalLink && {
    target: "_blank",
    rel: "noopener noreferrer"
  })}
>
```

## 📊 **SEO y Datos Estructurados**

### **Schema.org:**
Los enlaces de redes sociales están incluidos en los datos estructurados:

```json
{
  "sameAs": [
    "https://www.facebook.com/lexfirm.abogados",
    "https://twitter.com/lexfirm_legal",
    "https://www.instagram.com/lexfirm.abogados",
    "https://www.linkedin.com/company/lexfirm-abogados"
  ]
}
```

## 🔍 **Pruebas**

### **Para Verificar:**
1. Hacer clic en cualquier icono de red social
2. Verificar que se abre en nueva pestaña
3. Confirmar que la página principal permanece abierta
4. Probar con lectores de pantalla

### **Navegadores Soportados:**
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

**Nota**: Las URLs de redes sociales son ejemplos. Reemplazar con las URLs reales del bufete de abogados.
