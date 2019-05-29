import { Router } from "express";
import { Order } from "../entity/Order";
import Status = require("http-status-codes");

const router = Router();

/**
 * Get all visible orders.
 */
router.get("/", (req, res) => {
  Order.findAll({
    where: {
      visible: true
    }
  })
    .then(orders => {
      return res.status(Status.OK).send(orders);
    })
    .catch(errors => {
      return res.status(Status.BAD_REQUEST).send({ errors: errors });
    });
});

/**
 * Create new order.
 */
router.post("/", (req, res) => {
  const order = new Order(req.body);
  order
    .save()
    .then(order => {
      return res.status(Status.CREATED).send(order);
    })
    .catch(errors => {
      return res.status(Status.BAD_REQUEST).send({ errors: errors });
    });
});

export default router;
