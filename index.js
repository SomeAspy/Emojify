const { Plugin } = require('powercord/entities');

module.exports = class Mock extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'mock',
      description: 'Mock a user...',
      usage: '{c} [text to mock]',
      executor: (args) => ({
        //var args = "test one two THREE 98778"
args = args.split("")
console.log(args)
var output = ""
args.forEach(char => {
    if(char == "1") {
        output = output + ":one:"
    }
    else if(char == "2") {
        output = output + ":two:"
    }
    else if(char == "3") {
        output = output + ":three:"
    }
    else if(char == "4") {
        output = output + ":four:"
    }
    else if(char == "5") {
        output = output + ":five:"
    }
    else if(char == "6") {
        output = output + ":six:"
    }
    else if(char == "7") {
        output = output + ":seven:"
    }
    else if(char == "8") {
        output = output + ":eight:"
    }
    else if(char == "9") {
        output = output + ":nine:"
    }
    else if(char == " ") {
        output = output + ""
    }
    
    else if (isNaN(parseInt(char))){
        output= output + ":regional_indicator_" + char.toLowerCase() + ":"
    }
})
//console.log(output)
        send: true,
        result: output
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('mock');
  }
};
