const { Plugin } = require('powercord/entities');
let out = ""
module.exports = class Emojify extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'emojify',
      description: 'Emojify Text',
      usage: '{c} [text to emojify]',
      executor: (args) => {
        out = ""
        args = args.join(" ").split("")
        args.forEach(char => {
            switch(char){
              case "0": out += ":zero:";   break
              case "1": out += ":one:";    break
              case "2": out += ":two:";    break
              case "3": out += ":three:";  break
              case "4": out += ":four:";   break
              case "5": out += ":five:";   break
              case "6": out += ":six:";    break
              case "7": out += ":seven:";  break
              case "8": out += ":eight:";  break
              case "9": out += ":nine:";   break
              case " ": out += " ";        break
              case "#": out += ":hash:";   break
              case "|": out += ":clock6:"; break
              case "'": case "`": out += ":clock12:"; break
              case ",": out += ":clock630:"; break
              case "~": out += ":wavy_dash"; break
              case "-": out += ":no_entry:"; break
              case "/": out += ":probing_cane:"; break
              case "(": out += ":waning_crescent_moon:"; break
              case ")": out += ":waxing_crescent_moon:"; break
              case "$": out += ":heavy_dollar_sign:"; break
              case "+": out += ":heavy_plus_sign:"; break
              case "^": out += ":arrow_up_small:"; break
              case "<": out += ":arrow_backward:"; break
              case ">": out += ":arrow_forward:"; break
              case "*": out += ":asterisk:"; break
              case "!": out += ":grey_exclamation:"; break
              case "?": out += ":grey_question:"; break
              default: char.match(/[a-z]|[A-Z]/) ? out += `:regional_indicator_${char.toLowerCase()}:` : console.log("invalid character!")
            }
          });
      return{
        send: true,
        result: out
      }
    }
  })
  }
  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('emojify');
  }
};