import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'https://pichael.org',
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const apiKey = 'BA3825EFCD35B8CF4F48E58C9216E034';

app.get('/api/resolveVanityUrl/:vanityUrl', async (req, res) => {
    const vanityUrl = req.params.vanityUrl;
    const response = await fetch(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&vanityurl=${vanityUrl}`);
    const data = await response.json();
    res.json(data);
});

app.get('/api/getPlayerSummaries/:steamId', async (req, res) => {
    const steamId = req.params.steamId;
    const response = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`);
    const data = await response.json();
    res.json(data);
});

app.get('/api/getOwnedGames/:steamId', async (req, res) => {
    const steamId = req.params.steamId;
    const response = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`);
    const data = await response.json();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
