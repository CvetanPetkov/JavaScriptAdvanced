function processor(input) {
    let commandProcessor = (() => {
        let result = [];
        return {
            add: (newItem) => result.push(newItem),
            remove: (item) => result = result.filter(e => e != item),
            print: () => console.log(result.join(','))
        }
    })();

    for (let command of input) {
        let [cmd, val] = command.split(' ');
        commandProcessor[cmd](val);
    }
}
//processor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);