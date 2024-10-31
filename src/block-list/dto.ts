import { ApiProperty } from '@nestjs/swagger';
import { BlockItemType } from '@prisma/client';
import { IsIn, IsOptional } from 'class-validator';

export class BlockItemDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  blockListId: number;
  @ApiProperty({
    enum: [BlockItemType.KeyWord, BlockItemType.Website],
  })
  type: BlockItemType;
  @ApiProperty()
  data: string;
  @ApiProperty()
  createAt: Date;
}
export class BlockListDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  ownerId: number;
  @ApiProperty({ type: [BlockItemDto] })
  items: BlockItemDto[];
}

export class BlockListQueryDto{
  @ApiProperty({required:false})
  @IsOptional()
  q?:string
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: [BlockItemType.KeyWord, BlockItemType.Website],
  })
  @IsIn([BlockItemType.KeyWord, BlockItemType.Website])
  type: BlockItemType;
  @ApiProperty()
  data: string;
}
