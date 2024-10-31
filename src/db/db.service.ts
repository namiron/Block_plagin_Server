import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DbService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  // get account() {
  //   return this.account;
  // }

  // get blockList() {
  //   return this.blockList;
  // }
  // get blockItem() {
  //   return this.blockItem;
  // }

  // get blockItemType() {
  //   return this.blockItemType;
  // }
}
