import {
  Table,
  Column,
  Model,
  AllowNull,
  Unique,
  ForeignKey,
  IsInt,
  Min,
  Max
} from "sequelize-typescript";
import { Image } from "./Image";
import { Order } from "./Order";

@Table
export class ImageReference extends Model<ImageReference> {
  @Unique({
    name: "ImageReference_image_unique",
    msg: "Image is referenced more than once."
  })
  @AllowNull(false)
  @ForeignKey(() => Image)
  @Column
  imageId: number;

  @Unique({
    name: "ImageReference_image_unique",
    msg: "Image is referenced more than once."
  })
  @AllowNull(false)
  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @Min(1)
  @Max(6)
  @AllowNull(false)
  @IsInt
  @Column
  level: number;
}
