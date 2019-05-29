import {
  Table,
  Column,
  Model,
  AllowNull,
  Unique,
  Length,
  IsUrl,
  ForeignKey,
  Default,
  BelongsToMany,
  BelongsTo
} from "sequelize-typescript";
import { Token } from "./Token";
import { ImageReference } from "./ImageReference";
import { Image } from "./Image";

@Table
export class Order extends Model<Order> {
  @Unique({ name: "Order_orderer_unique", msg: "Orderer name must be unique." })
  @AllowNull(false)
  @Length({
    min: 3,
    max: 100,
    msg: "Name has to be between 3 and 100 letters long."
  })
  @Column
  orderer: string;

  @AllowNull(false)
  @Default(false)
  @Column
  visible: boolean;

  @Length({
    max: 512,
    msg: "Comment must have a length under 512."
  })
  @Column
  comment: string;

  @IsUrl
  @Column
  url: string;

  @Unique({
    name: "Order_configuration_unique",
    msg: "This configuration has already been created."
  })
  @Column
  configuration: string;

  @BelongsToMany(() => Image, () => ImageReference)
  images: ImageReference[];

  @Unique({
    name: "Order_token_unique",
    msg: "A token can only be referenced once."
  })
  @AllowNull(false)
  @ForeignKey(() => Token)
  @Column
  tokenId: number;

  @BelongsTo(() => Token)
  token: Token;
}
