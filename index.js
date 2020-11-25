const { Plugin } = require('powercord/entities');
var output = ""

module.exports = class Emojify extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'emojify',
      description: 'Emojify Text',
      usage: '{c} [text to emojify]',
      executor: (args) => {
        args = args.join(" ").split("");
        args.forEach(char => {
            if(char == "1") {output += ":one:"} //will eventually updated switch case
                else if(char == "0") {output += ":zero:"}
                else if(char == "2") {output += ":two:"}
                else if(char == "3") {output += ":three:"}
                else if(char == "4") {output += ":four:"}
                else if(char == "5") {output += ":five:"}
                else if(char == "6") {output += ":six:"}
                else if(char == "7") {output += ":seven:"}
                else if(char == "8") {output += ":eight:"}
                else if(char == "9") {output += ":nine:"}
                else if(char == " ") {output += " "}
                else if (isNaN(parseInt(char))){output += ":regional_indicator_" + char.toLowerCase() + ":"}
                else(console.log("invalid character!"))
            }),
        send: true,
        result: output
      }
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('emojify');
  }
};
