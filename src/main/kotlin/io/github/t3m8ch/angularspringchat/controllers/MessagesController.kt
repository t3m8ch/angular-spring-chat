package io.github.t3m8ch.angularspringchat.controllers

import io.github.t3m8ch.angularspringchat.models.MessageModel
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller

@Controller
class MessagesController {
    @MessageMapping("/message")
    @SendTo("/topic/messages")
    fun sendMessage(message: MessageModel): MessageModel {
        return message
    }
}
