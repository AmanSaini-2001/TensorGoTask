const express = require('express');
const router = express.Router();

router.post('/invoice-reminder', (req, res) => {
  // Trigger automation for past-due invoice reminders
  // Example: const result = automationModule.triggerReminder(req.body.invoiceId);
  // res.json(result);
});

module.exports = router;
