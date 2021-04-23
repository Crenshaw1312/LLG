
const { React } = require('powercord/webpack')
const { SwitchItem } = require('powercord/components/settings')
module.exports = class Settings extends React.PureComponent {

	constructor(props) {
		super(props);
	}

    render() {
		const { getSetting, toggleSetting } = this.props
        return <>
            <SwitchItem
                note="Weather or not to add a command to log recent messages in current channel"
                value={getSetting('logCurrentCommand', false)}
                onChange={() => toggleSetting('logCurrentCOmmand')}
            >Export Command</SwitchItem>
        </>
    }
}
