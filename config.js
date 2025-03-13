//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/o4f1bs.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/knhyh3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtMOXdscDZpYmhUbE9DL050Q1pZemVJTXg2U0F3VUN5VzVvRzZSQmVIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVJWQnpJV1VlOWVOemY2cUxoV2pWQXFjTTFaVHpyQmdhQkJ6dDF0K2Nnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRzNZbnkrUGVXWmNsMzhNcTJIYmFhMUFURkpDdFRJbGs5NWZzbCt6SlVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzaExCeDgyOTlDVGgwTWV0aVhrK080eFhFeFBUQXB0aWpSRE8rVnpBR2dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFMNGR0UEMvK2s2cy95MVJ4QnpXaU5EekNNRTMwcjQwWi9VazdHdElmazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNZVnk5L3hJTDM3MkJBd0k3c1dIenNMaG5GSHcyWVVGLy9RTDBseUdhWDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU55VlNoWHd2UUp1cGdoakFEbG1XNUlBUGFTeFA3ZDFkbUViKzk2S29GTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzZiWmFqOURRV0dYTmxaYjJRWlh3N3dJdGw5WE90TlNOcUVqaGJoZ0dnaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVpS3pHMklKLzZYb1o1N2NhRDhFNHdQMXQ0cWg1SGlXSDRNdXZ4QnpaKzZRemhRbHBUSjBlcVpoeFdKS0llWHJyVUR4d3lCWEwydGFCa0dOdE5wc0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6IjlYNE50OVpRSHhmcW5FektkdGNiV3V4aHRKMWJ6VFloVUhmc1dSN1RFaUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik94a2l2a0xzUk1DamRxS3d0SUt2QVEiLCJwaG9uZUlkIjoiYjFkNjI4ZTgtNDE3ZS00NzhkLTgyZmUtZWFhZjI4NzdhNmIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktzV1BXV3NHUlZoTHpYWDFGNFVQcE5pd01GRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnYThyM1VBS1cwei9RRFBuc1FvTE95a2s1bnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkI2RkM2OUIiLCJtZSI6eyJpZCI6IjI1NDExMjY5ODc0NTo1MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLXqda014HXnNa41rzXkCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHFzOEs4SEVMbTJ5YjRHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNHRUMnBFRlh3UWhwbjFmdFFMa2pIOFZGd3AzQzlmMjBqMGsrTm9tUHpCYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoib0hYZ3BueUJqZW1jSnY4TGNCaWRTamF4R0ExbmJMRmpNQ1oyUWM3MFZyV3loaHFlajhLZ0FFdmh2MlJCM1VrR29LWHFYNnVnY3p0dElkcXlOQ3BPQUE9PSIsImRldmljZVNpZ25hdHVyZSI6InZmbHBydjQrQzk0YlYrcXF3d3c5UldzTXFmWXVaMUpxK3dKdjk3YXo0T2c5Y1FUSW9qa2RydnUwS2ZoQmd1REVKTC8rZHdkcWozWGdybmFXYnBSZEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyNjk4NzQ1OjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVMVTlxUkJWOEVJYVo5WDdVQzVJeC9GUmNLZHd2WDl0STlKUGphSmo4d1gifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDE4MzkxNzV9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒🫅",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
