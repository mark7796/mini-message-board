const {Router} = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Hello there!",
        user: "Obi-wan Kenobi",
        added: new Date()
    },
    {
        text: "General Kenobi!",
        user: "General Grievous",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages});
});
indexRouter.get("/new", (req, res) => {
    res.render("form");
});
indexRouter.post("/new", (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({text: messageText, user: messageUser, added: new Date()});
    res.redirect("/");
});
indexRouter.get("/message/:messageIndex", (req, res) => {
    messageIndex = parseInt(req.params.messageIndex);
    if (!isNaN(messageIndex) && messageIndex >= 0 && messageIndex < messages.length) {
        res.render("detailMessage", {
            messageIndex: messageIndex,
            messages: messages
        });
    } else {
        res.status(404).send("Message not found");
    }
});

module.exports = indexRouter;