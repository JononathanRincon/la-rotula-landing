export const pesosServer = (n: number) => '$' + n.toLocaleString('es-CO').replace(/,/g, '.');
