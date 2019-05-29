import {
  Table,
  Column,
  Model,
  AllowNull,
  Unique,
  HasOne
} from "sequelize-typescript";
import { Order } from "./Order";

@Table
export class Token extends Model<Token> {
  @Unique({ name: "Token_value_unique", msg: "Token has to be unique." })
  @AllowNull(false)
  @Column
  value: string;

  @HasOne(() => Order)
  order: Order;
}
