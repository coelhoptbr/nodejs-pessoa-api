import app from "./app";

const portaServidor = process.env.PORT || 3536;

app.listen(portaServidor, () => {
    console.log(`Servidor express escutando na porta ${portaServidor}`);
})