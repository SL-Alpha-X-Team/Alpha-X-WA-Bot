function successfullMessage(msg) {
    return "✅ *Alpha-X*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Alpha-X*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Alpha-X*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
