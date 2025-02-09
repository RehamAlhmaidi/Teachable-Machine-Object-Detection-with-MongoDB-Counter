const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// إعداد الاتصال بـ MongoDB
mongoose.connect('mongodb://localhost:27017/detection-counter', { useNewUrlParser: true, useUnifiedTopology: true });

const counterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);

app.use(bodyParser.json());

// تحديث العداد
app.post('/updateCounter', async (req, res) => {
    const { count } = req.body;
    let counter = await Counter.findOne();
    if (!counter) {
        counter = new Counter();
    }
    counter.count = count;
    await counter.save();
    res.sendStatus(200);
});

// إعادة تعيين العداد
app.post('/resetCounter', async (req, res) => {
    let counter = await Counter.findOne();
    if (counter) {
        counter.count = 0;
        await counter.save();
    }
    res.sendStatus(200);
});

// الحصول على العداد
app.get('/getCounter', async (req, res) => {
    const counter = await Counter.findOne();
    res.json({ count: counter ? counter.count : 0 });
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
