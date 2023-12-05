export let cuentas=[
    {
        tipo: "corriente", // "ahorro"
        importe: 500,
        tipoMoneda: "dolar", // "euro", // "dolar",
        plazoFijo: [{
        estado: "activo", // "inactivo"
        importe: 100,
        fechaCreacion: "2020-01-01",
        plazo: 30, // en dias
        }],
        },
        {
            tipo: "ahorro", // "ahorro"
            importe: 700,
            tipoMoneda: "dolar", // "euro", // "dolar",
            plazoFijo: [{
            estado: "activo", // "inactivo"
            importe: 100,
            fechaCreacion: "2020-01-01",
            plazo: 25, // en dias
            }],
            },
            {
                tipo: "ahorro", // "ahorro"
                importe: 900,
                tipoMoneda: "euro", // "euro", // "dolar",
                plazoFijo: [{
                estado: "activo", // "inactivo"
                importe: 100,
                fechaCreacion: "2022-01-01",
                plazo: 120, // en dias
                }],
                },
                {
                    tipo: "ahorro", // "ahorro"
                    importe: 900,
                    tipoMoneda: "peso", // "euro", // "dolar",
                    plazoFijo: [{
                    estado: "activo", // "inactivo"
                    importe: 60000,
                    fechaCreacion: "2022-01-01",
                    plazo: 180, // en dias
                    }],
                    },
]