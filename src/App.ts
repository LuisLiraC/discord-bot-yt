import { Client, Message } from 'discord.js'

class App {
  private client: Client
  private token: string

  constructor(token: string) {
    this.client = new Client()
    this.token = token
  }

  start() {
    this.client.login(this.token)
    this.initialize()
  }

  initialize() {
    this.client.on('ready', () => console.log('Bot ready'))
    this.client.on('message', (message: Message) => {
      if (message.author.bot) return

      message.reply('Hola!')
    })
  }
}

export default App
