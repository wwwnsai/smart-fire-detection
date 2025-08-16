import express from "express";
import webpush from "web-push";

const app = express();
app.use(express.json());

// VAPID keys (generate once and store securely)
webpush.setVapidDetails(
  "mailto:you@example.com",
  process.env.VAPID_PUBLIC!,
  process.env.VAPID_PRIVATE!
);

app.post("/send", async (req, res) => {
  const { subscription, title, body } = req.body;
  try {
    await webpush.sendNotification(subscription, JSON.stringify({ title, body }));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(4002, () => console.log("Notification service running on http://localhost:4002"));
