import express from "express";

const router = express.Router();

router.post("/pay", (req, res) => {
  const success = Math.random() > 0.3;

  if (success) {
    res.json({ status: "SUCCESS", message: "Payment successful" });
  } else {
    res.json({ status: "FAILED", message: "Payment failed" });
  }
});

export default router;