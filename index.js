const { Plugin } = require('powercord/entities');
const { FluxDispatcher } = require('powercord/webpack')

const Handler = require("./handler")
const Settings = require("./Settings")

module.exports = class LLG extends Plugin {

    viewDelete(data) {
        return
    }

    async startPlugin() {
        // setup
        this.handler = new Handler(this);
        this.onCreate = this.handler.onCreate.bind(this.handler);
        
        // settings
        powercord.api.settings.registerSettings("LLG", {
            category: this.entityID,
            label: "Let's Log That",
            render: Settings
          });

        // subbie wubbies
        FluxDispatcher.subscribe("MESSAGE_CREATE", this.onCreate)

    }

    pluginWillUnload() {
        FluxDispatcher.unsubscribe("MESSAGE_CREATE", this.onCreate)
        powercord.api.settings.unregisterSettings('LLG')
        console.log("bye!");
    }

}