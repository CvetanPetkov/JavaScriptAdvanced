function processCommands(input) {
    let commandProcessor = (function() {
        let result = '';
        return {
            append: (text) => result += text,
            removeStart: (count) => result = result.slice(count),
            removeEnd: (count) => result = result.slice(0, result.length - count),
            print: () => console.log(result)
        }
    })();

    for (let command of input) {
        let [commandName, value] = command.split(' ');
        commandProcessor[commandName](value);
    }
}
processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);