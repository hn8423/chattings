import { Socket } from 'socket.io';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatsGateway {
  // private logger = new Logger('chat');

  // constructor() {
  //   this.logger.log('constructor');
  // }

  // afterInit() {
  //   this.logger.log('init');
  // }

  // handleDisconnect(@ConnectedSocket() socket: Socket) {
  //   this.logger.log(`disconnected : ${socket.id} ${socket.nsp.name}`);
  // }

  // handleConnection(@ConnectedSocket() socket: Socket) {
  //   this.logger.log(`connected : ${socket.id} ${socket.nsp.name}`);
  // }

  @SubscribeMessage('user_name')
  handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket,
  ) {
    console.log(username);
    console.log(socket.id);

    socket.emit('hello_user', 'hello' + username);

    // // username db에 적재
    // socket.broadcast.emit('user_connected', username);
    // return username;
    return 'hello hyunin';
  }
}
