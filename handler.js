const { getModule } = require("powercord/webpack");
const { getChannel } = getModule(["getChannel"], false);
const { getChannelId } = getModule(["getLastSelectedChannelId"], false);
const currentChannelID = getChannel(getChannelId()).id;


module.exports = class Handler {
    constructor(i_this) {
        this.cache = new Map();
        this.error = i_this.error.bind(i_this);
        this.settings = i_this.settings;
    }

    onCreate(event) {
        try {
            // filtering from https://github.com/Vendicated/PowercordWordNotifications/blob/main/handler.js#L65
            if (!event) return;
      
            const { message } = event;
            if (!message || !message.author || message.author.bot || !message.content || message.state === "SENDING") return;

            // handling the message :3
            let { id, content, guild_id, channel_id } = message;
            if (currentChannelID == channel_id) {
                if (!this.cache.get(id)) this.cache.set(id, message);
            }

        } catch (error) {
            console.error(error);
        }
    }
}