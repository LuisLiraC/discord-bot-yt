import { GuildMember, PartialGuildMember, TextChannel } from "discord.js";
import { getChannelById } from "../utils/discordUtils";
import Dispatcher from "./Dispatcher";

class BotDispatcher extends Dispatcher {
  welcome(member: GuildMember | PartialGuildMember) {
    try {
      const channel = getChannelById(member, this.channels.welcome)

      if (!channel) return

      const message = `Hola <@${member}>, bienvenido`

      channel instanceof TextChannel && channel.send(message)
    } catch (error) {
      console.log(error)
    }
  }
}

export default BotDispatcher