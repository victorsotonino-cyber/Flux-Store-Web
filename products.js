/*
 * FLUX STORE — configuración del catálogo
 * Edita los precios en USD y vuelve a subir este archivo a GitHub.
 * En precios fijos usa price: null hasta que quieras publicar un importe.
 * Para Robux, robuxPer100 es el precio del paquete de 100 Robux.
 * Para boosters, boosterUnitPrice es el precio de UN booster.
 */
window.FLUX_STORE_CONFIG = {
  brand: "FLUX STORE",
  currency: "USD",
  discordInvite: "https://discord.gg/fluxstore",
  // Pon aquí el enlace DIRECTO a tu canal de tickets si tu servidor lo permite.
  // Si se deja vacío, el botón abre la invitación al servidor.
  ticketChannelUrl: "",
  prices: {
    youtubePremium: null,
    hboMax: null,
    disneyPlus: null,
    minecraftPremium: null,
    nitroBasic: null,
    nitroProcode: null,
    nitro3Months: null,
    boosterUnitPrice: null,
    robuxPer100: null,
    serverPromotion: null
  }
};
