// Función para formatear el precio como moneda
export default function formatCurrency (value) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
  }).format(value);
};
