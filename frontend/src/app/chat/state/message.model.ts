import { guid } from '@datorama/akita';

export interface CreateMessageDTO {
  text: string;
  userNickname: string;
}

export type MessageModel = {
  id: string;
  text: string;
  userNickname: string;
};

export function createMessage({ text, userNickname }: CreateMessageDTO): MessageModel {
  return { id: guid(), text, userNickname };
}
