const { getModule } = require("powercord/webpack");
const { getChannel } = getModule(["getChannel"], false);
const { getChannelId } = getModule(["getLastSelectedChannelId"], false);
const currentChannelID = getChannel(getChannelId());


module.exports = class Handler {
    constructor(i_this) {
        this.cache = new Map();
        this.error = i_this.error.bind(i_this);
        this.settings = i_this.settings;
    }

    onCreate(event) {
        const { message } = event
        let { id, content, guild_id, channel_id } = message;
        if (currentChannelID == channel_id) console.log(message);
    }
}