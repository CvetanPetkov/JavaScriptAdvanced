class MailBox {

    constructor() {
        this.messages = [];
    }

    addMessage(subject, text) {
        let newMessage = new Map();
        newMessage['subject'] = subject;
        newMessage['text'] = text;
        this.messages.push(newMessage);
        return this;
    }

    deleteAllMessages() {
        this.messages = [];
    }

    findBySubject(keyword) {
        let output = [];

        for (let message of this.messages) {
            let subject = message['subject'];
            if (subject.includes(keyword)) {
                let msg = {subject: message['subject'], text: message['text']};
                output.push(msg);
            }
        }

        return output;
    }

    get messageCount() {
        return this.messages.length;
    }

    toString() {
        let output = [];
        if (this.messageCount < 1) {
            return ' * (empty mailbox)';
        }
        else {

            for (let message of this.messages) {
                let line = ` * [${message['subject']}] ${message['text']}`;
                output.push(line);
            }
        }

        return output.join('\n');
    }
}

// let mb = new MailBox();
// console.log("Msg count: " + mb.messageCount);
// console.log('Messages:\n' + mb);
// mb.addMessage("meeting", "Let's meet at 17/11");
// mb.addMessage("beer", "Wanna drink beer tomorrow?");
// mb.addMessage("question", "How to solve this problem?");
// mb.addMessage("Sofia next week", "I am in Sofia next week.");
// console.log("Msg count: " + mb.messageCount);
// console.log('Messages:\n' + mb);
// console.log("Messages holding 'rakiya': " +
//     JSON.stringify(mb.findBySubject('rakiya')));
// console.log("Messages holding 'ee': " +
//     JSON.stringify(mb.findBySubject('ee')));

// mb.deleteAllMessages();
// console.log("Msg count: " + mb.messageCount);
// console.log('Messages:\n' + mb);
//
// console.log("New mailbox:\n" +
//     new MailBox()
//         .addMessage("Subj 1", "Msg 1")
//         .addMessage("Subj 2", "Msg 2")
//         .addMessage("Subj 3", "Msg 3")
//         .toString());
