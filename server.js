const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// ID de tu hoja de cálculo
const SPREADSHEET_ID = '1dyaM2nP72adYeJrdd1Ttz0RQxH7H_KqN_mRnamrOkD8';
// Rango de datos (ajustado para leer desde la fila 2 hasta la columna K)
const RANGE = 'Hoja 1!A2:K100';

app.get('/api/sheet', async (req, res) => {
  try {
    // Ruta al archivo de credenciales que ya tienes en el proyecto
    const keyPath = path.join(__dirname, 'secrets', 'service-account.json');

    if (!fs.existsSync(keyPath)) {
      throw new Error(`No se encuentra el archivo de credenciales en: ${keyPath}`);
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    // Devolvemos los valores crudos al frontend
    res.json({ values: response.data.values || [] });
  } catch (error) {
    console.error('Error en el servidor backend:', error);
    res.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});