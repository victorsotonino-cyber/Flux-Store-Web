# FLUX STORE Web

Web estática responsive de catálogo digital. Se puede publicar en GitHub Pages o Render Static Sites.

## Incluye
- Diseño responsive, en español, con tema violeta/lila, degradados suaves y tarjetas visuales de productos.
- Catálogo con búsqueda y filtros por categoría.
- Fichas de producto con detalle y modal de compra.
- Selector de 2–24 boosters con cálculo en vivo por booster.
- Selector de 100–10.000 Robux con paso de 100 y cálculo por cada 100 Robux.
- Los precios se configuran desde `products.js`.
- Botones que llevan al servidor de Discord para consultar y abrir ticket manualmente.
- Producto de cuentas de terceros marcado como no disponible; opción de promoción legítima en lugar de venta de miembros falsos/bot.

## Configurar precios
Edita `products.js`. Los importes están en USD. Por ejemplo:

```js
prices: {
  youtubePremium: 4.99,
  hboMax: 3.50,
  disneyPlus: 3.99,
  minecraftPremium: 12.00,
  nitroBasic: 2.99,
  nitroProcode: 5.00,
  nitro3Months: 14.00,
  boosterUnitPrice: 3.00,
  robuxPer100: 1.25,
  serverPromotion: 5.00
}
```

Los valores anteriores son SOLO un ejemplo para mostrar el formato: no son recomendaciones ni precios de mercado. Sustitúyelos por tus precios reales o deja `null` para mostrar “Consultar precio”.

- `boosterUnitPrice`: importe por **un** booster; el selector calcula `cantidad × precio por booster`.
- `robuxPer100`: importe por **100 Robux**; el selector calcula `cantidad / 100 × precio por 100 Robux`.
- Para cambiar la moneda, modifica `currency` en `products.js` (por ejemplo `USD`, `EUR`).

## Discord y tickets
En `products.js`:
- `discordInvite`: invitación al servidor.
- `ticketChannelUrl`: opcional. Añade un enlace directo si tienes un canal o flujo de tickets adecuado. Si queda vacío, el botón abre la invitación al servidor.

La web no puede crear un ticket de Discord por sí sola. Para creación automática hace falta integrar un bot/backend con permisos y un endpoint seguro.

## Publicar en GitHub Pages
1. Crea un repositorio público llamado `Flux-Store-Web`.
2. Sube `index.html`, `products.js`, `README.md` y la carpeta `assets/` a la raíz (branch `main`).
3. Ve a Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)` → Save.
4. GitHub mostrará la URL publicada en Settings → Pages.

## Publicar en Render
Crea un **Static Site** desde este repositorio. No necesita build command; usa `index.html` como contenido de la raíz / publish directory `.` según la configuración disponible.

## Imágenes de productos
Las tarjetas utilizan logotipos SVG de marca mediante `cdn.simpleicons.org` para YouTube, Max, Disney+, Minecraft, Discord y Roblox. Requieren conexión a Internet; si falla una imagen, la tarjeta muestra un icono de respaldo.

## Nota de seguridad
La página no procesa pagos, no guarda información personal ni solicita contraseñas. Confirma disponibilidad y el precio final por Discord antes de cobrar. Para pagos reales, integra un proveedor autorizado con un backend seguro.
