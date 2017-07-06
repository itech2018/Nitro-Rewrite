const Discord = require("discord.js")
const { TOKEN } = require("../../config.js")

const ShardingManager = new Discord.ShardingManager("./modules/tag/bot.js", { totalShards: 1, token: TOKEN })
ShardingManager.spawn()