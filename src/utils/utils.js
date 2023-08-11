export const priceFormat = (price) => {
    const defFormat = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    });

    return defFormat.format(price)
}