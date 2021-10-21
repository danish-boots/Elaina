function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  this.sendContact(m.chat, '6285808936396', 'Heroku Run', m)
  this.sendContact(m.chat, '6285895774939', 'DanishGanz', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
