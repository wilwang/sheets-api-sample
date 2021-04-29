const {google} = require('googleapis');

const sheetId = '1zLdYZ7lvNHBrdiomd9W1KFJ5i4imNDNTuGE1l3Lp0rQ'

const main = async function() {
    const auth = await google.auth.getClient({
        scopes: [
            "https://www.googleapis.com/auth/spreadsheets"
        ]
    });
    const sheetsAPI = google.sheets({version: 'v4', auth});
    const timestamp = new Date()
    const values = [
        ['Current Timestamp', timestamp],
        ['SheetId', sheetId]
    ]
    const body = {
        values: values
    }
    const response = await sheetsAPI.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: 'A1',
        valueInputOption: 'RAW',
        resource: body
    })
    return response
}

main().then(console.log).catch(console.error)