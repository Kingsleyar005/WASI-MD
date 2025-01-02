const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://github.com/wasixd/WASI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/wasixd/WASI-MD/blob/main/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923192173398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1000,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923135673658,923192173398";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923135673658,923192173398";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923135673658,923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5SZ01ueFQwelN2bmh4eEdkUWlBTHQ1OW9CUmU5V0tOL0VuUmtRc0hFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWx6anRNMWkvNFBjNUdEOEI0SnU1S1ltZzFHTEwzYVRKc0pOb1BkQk9Taz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSnNqRHNZYzZyNVVPRlpEbzlxeFRLc3lrb0l2S04zd04rL1lENDF2NG1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQzJhVGFuUkYxZ2pXOFZtWjR4Rk1rZ3FMN2RUNFhUci9KRXRoQ29ldWxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHTXNpVkVoa284U2MwR3VvdjB6Q0RIUG5LZEZiZ3EyVk1oZnhxaXZRbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJwNW5KYzhBOHhHMFE3Q1NIVG5pMGNxcmk0OUhKMWJWNnBSSm1VTjRSeGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUw2VUExWTlIcTZNZ09VWEJmWDg4cW5wNW9tTlRaUXJtU0RMd1JhNGRtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEV2VnpSNVRka1BudGJNUDQ1OXlwazZGMWc2aUQxNjZPRnFVTkcxSkhHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJGc0dTNEtVWXRHeWR6cGlzcXZ6dkkwZi9MV1V6TTEwSTBGYnc3Y2V5dFAwWFdLdFEyRW0ya0ZtVkxmWlJrMjJTT1ZQV2d0ZG56THBTSWdvL1lLakFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiJDQTRaMzZiWllJQmNvZlQ2NTB5OVA2NkJFVWFSTm0yMkZFSklPMGZRMDNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3Zk5JNVVhV1I3eU5acXBwV2VqN3FBIiwicGhvbmVJZCI6IjExOTZmY2I4LWNhYWMtNDZkOC1iNjYwLWYxNTZiM2ZjMzJkNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsQXp2WThUVTV2YjQ5dlB1Ym5PVnhzaUsreXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU13dGo4QVBJTVVsdytaeUF4OVFlWFByUmlNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVOM002WVQxIiwibWUiOnsiaWQiOiI5NDc3OTg1OTk5ODo2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZkNxRUlRbkxMWHV3WVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVaDJJTHRxZCtOdEFJVTJ4NDZGczd6UW5FTkhRd0F4SWdaVzZhUXBCV0FzPSIsImFjY291bnRTaWduYXR1cmUiOiJuYUladlNLbkRtQmtOV2Z4ZmhHaVJYWXMwbDhZa0tBbDg0WjFCMEwwV0p0RStCeWRST28ycnNVYkliK1hmY2NtUmZYbnhoTmdvSVJldFJ1UWVDaUdDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNDRySTVrc1ZMZlEvMFhNYTlmeVFHYmVWeUloT0NDZWh2RmVHcGdpNTVIVXcwcDExVzRER3FVL0pVNXorK0VTUEJ3UllmbXI3OTMvUjhKbFNMUHpiQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3OTg1OTk5ODo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZJZGlDN2FuZmpiUUNGTnNlT2hiTzgwSnhEUjBNQU1TSUdWdW1rS1FWZ0wifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU3NzY1NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ09OIn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 T H E King🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "Eranda ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Blood Demon",
  ownername:process.env.OWNER_NAME|| "It's Eranda",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
