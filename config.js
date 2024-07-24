const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94757343778";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,+94757343778";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_20_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICA3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrWGJCK1U0Q3pkZkw4a3dJTURDS25BZ3NlNy94ajVseXFkR3NZVXc2SS9FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1QVY0ZlRZalRJU3kzZENHTWxGdy13XCIsXG4gIFwicGhvbmVJZFwiOiBcImNkZGRkM2E0LTI3MzUtNDc4MC1hNDg4LTY3MGE1ZjY1ZGZjZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAyNDgsXG4gICAgICA1MCxcbiAgICAgIDUxLFxuICAgICAgMTQ4LFxuICAgICAgMjIxLFxuICAgICAgMTAyLFxuICAgICAgMTM2LFxuICAgICAgMTQwLFxuICAgICAgMTA3LFxuICAgICAgMTg2LFxuICAgICAgMjE1LFxuICAgICAgMTg3LFxuICAgICAgMTE2LFxuICAgICAgODYsXG4gICAgICA0NCxcbiAgICAgIDIxOSxcbiAgICAgIDc1LFxuICAgICAgNjUsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICA0MSxcbiAgICAgIDE2NSxcbiAgICAgIDY3LFxuICAgICAgMTMzLFxuICAgICAgMjQ3LFxuICAgICAgMjAwLFxuICAgICAgMTcsXG4gICAgICAxMzgsXG4gICAgICAyMCxcbiAgICAgIDIxNSxcbiAgICAgIDEwNSxcbiAgICAgIDE4NCxcbiAgICAgIDAsXG4gICAgICAzMSxcbiAgICAgIDIxMyxcbiAgICAgIDY3LFxuICAgICAgMjA1LFxuICAgICAgMjMzLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVlNMVZGMkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU3MzQzNzc4OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Ly64LyS4LeE4LeS4Lat4LeU4LeA4Laa4LeK4Laa4LeP4La7IOC3hOC3kOC2muC3kuC2seC3iuC2giDgtrbgt4Tgt4rgt4Tgt4rqp4JcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG7igKJcXG5cXG4o8J2QgPCdkIPwnZCM8J2QiPCdkI0pXCIsXG4gICAgXCJsaWRcIjogXCI2NDQ2OTgwNzkyNDEyOjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tTWi81b0NFT3V0Z2JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNjQ1ckJaWUZoS1hmaEx0YStzYklDMWlZc3ZZS1I0a1RaSUJZYmdxbUYyRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyR3V6RlczQXhYU2JCbEQ1c3FiRyt2NzZpNmM5N0ZhZkJieWxJcDVhNXZMUFVZcTJBQ1JZYmtOL0ZWMCtxMS9qUk0vWmlUZTE3SElmb3RqeTU5K09BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2cFNZb0c3UzJuSnB2T1EySW9MK0pHRUZxSTJrU3BnSS9SbEhGR01zekVIZDFMZEh0OEM0NnRjTXhSKzVablp1bElvNWIyU1ZDYlN1a2U5SVFPdzVCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NzM0Mzc3ODozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3ODQwNDZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Dinu-MD",
  packname: process.env.PACK_NAME || "Dinu-MD",
  botname : process.env.BOT_NAME  || "Dinu-MD",
  ownername:process.env.OWNER_NAME|| "Dinu-MD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Dinu-MD"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
