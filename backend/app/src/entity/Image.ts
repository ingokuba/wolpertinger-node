import {
  Table,
  Column,
  Model,
  AllowNull,
  NotEmpty,
  BelongsToMany,
  Unique
} from "sequelize-typescript";
import { Order } from "./Order";
import { ImageReference } from "./ImageReference";

@Table
export class Image extends Model<Image> {
  @Unique({ name: "Image_name_unique", msg: "Image name must be unique." })
  @NotEmpty({ msg: "Name of the image is mandatory." })
  @AllowNull(false)
  @Column
  name: string;

  @NotEmpty({ msg: "High resolution path has to be set." })
  @AllowNull(false)
  @Column
  high: string;

  @Column
  medium: string;

  @Column
  low: string;

  @BelongsToMany(() => Order, () => ImageReference)
  orders: Order[];
}
