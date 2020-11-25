const { Plugin } = require('powercord/entities');
let output = ""

module.exports = class Emojify extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'emojify',
      description: 'Emojify Text',
      usage: '{c} [text to emojify]',
      executor: (args) => {
        output = ""
        args = args.join(" ").split("")
        args.forEach(char => {
            switch(char){
              case "0": output += ":zero:";   break
              case "1": output += ":one:";    break
              case "2": output += ":two:";    break
              case "3": output += ":three:";  break
              case "4": output += ":four:";   break
              case "5": output += ":five:";   break
              case "6": output += ":six:";    break
              case "7": output += ":seven:";  break
              case "8": output += ":eight:";  break
              case "9": output += ":nine:";   break
              case " ": output += " ";        break
              default: output += `:regional_indicator_${char.toLowerCase()}:`
            }
            });
      return{
        send: true,
        result: output
      }
      }
    })
  }
  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('emojify');
  }
};
