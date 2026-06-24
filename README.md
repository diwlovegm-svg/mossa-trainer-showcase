# MOSSA Trainer Showcase

Static Website สำหรับแสดงโปรไฟล์เทรนเนอร์ MOSSA Sport Society ในรูปแบบ 3D Interactive Showcase

- ใช้ HTML, CSS และ JavaScript ธรรมดา
- ไม่มีระบบหลังบ้าน ฐานข้อมูล หรือระบบล็อกอิน
- เปิด `index.html` ในเครื่องได้ทันที
- Deploy ขึ้น Netlify Free หรือ GitHub Pages ได้
- รองรับ Drag, Swipe, 3D Center Card, Filter, Matching Quiz และ Profile Modal

## โครงสร้างไฟล์

```text
MS/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── trainer-best.jpg
        ├── trainer-gig.jpg
        ├── trainer-plam.jpg
        ├── trainer-ploy.jpg
        ├── trainer-smart.jpg
        ├── trainer-giew.jpg
        ├── trainer-tagor.jpg
        ├── trainer-ai.jpg
        ├── mossa-logo-white.png
        ├── mossa-share.jpg
        └── favicon.svg
```

## เปิดดูเว็บไซต์ในเครื่อง

1. เปิดโฟลเดอร์ `MS`
2. ดับเบิลคลิก `index.html`
3. รีเฟรชหน้าเว็บหลังแก้ไฟล์หรือเปลี่ยนรูป

## วิธีเปลี่ยนรูปเทรนเนอร์

รูปเทรนเนอร์อยู่ใน `assets/images/`

| เทรนเนอร์ | ไฟล์รูปที่เว็บใช้ |
| --- | --- |
| T.BEST | `assets/images/trainer-best.jpg` |
| T.GIG | `assets/images/trainer-gig.jpg` |
| T.PLAM | `assets/images/trainer-plam.jpg` |
| T.PLOY | `assets/images/trainer-ploy.jpg` |
| T.SMART | `assets/images/trainer-smart.jpg` |
| T.GIEW | `assets/images/trainer-giew.jpg` |
| T.TAGOR | `assets/images/trainer-tagor.jpg` |
| T.AI | `assets/images/trainer-ai.jpg` |

วิธีที่ง่ายที่สุดคือทำรูปใหม่เป็น JPG แล้ววางทับไฟล์เดิมด้วยชื่อเดิม จากนั้นรีเฟรชหน้าเว็บ

## วิธีแก้ข้อมูลโปรไฟล์

ข้อมูลเทรนเนอร์ทั้งหมดอยู่ใน `script.js` ที่ array `trainers`

```javascript
{
  name: "T.BEST",
  fullName: "WORASIT METHAKAWINTHORNKUI",
  role: "Combat & Fat Loss Specialist",
  category: "Strength • Class • Fat Loss",
  image: "assets/images/trainer-best.jpg",
  shortDescription: "ข้อความสั้นที่แสดงบนการ์ด",
  education: "วุฒิการศึกษาและมหาวิทยาลัย",
  specialties: ["Combat", "Fat Loss", "Conditioning"],
  classes: ["Thai Boxing", "BODYCOMBAT", "TABATA"],
  certificates: "ใบเซอร์และความเชี่ยวชาญ",
  suitableFor: "ลูกค้าที่เหมาะกับเทรนเนอร์คนนี้",
  filterCategories: ["class", "fatloss"],
}
```

ค่าที่ใช้ใน `filterCategories`:

- `strength` สายเวท
- `class` สายคลาส
- `fatloss` สายลดไขมัน

## วิธีแก้ Matching Quiz

ระบบ Matching เป็น JavaScript แบบ Rule-based ไม่ใช้ API และไม่ส่งข้อมูลลูกค้าออกจากเครื่อง

ลูกค้าเลือกเป้าหมายได้มากกว่า 1 ข้อ ระบบจะค้นหาคำที่เกี่ยวข้องจากข้อมูลจริง 3 ส่วนของแต่ละโปรไฟล์:

- `certificates` ใบเซอร์หรือความเชี่ยวชาญ
- `specialties` จุดเด่นและความเชี่ยวชาญ
- `classes` คลาสหรือรูปแบบการสอน

รายการปุ่มเป้าหมายอยู่ในตัวแปร `matchingGoals` ภายใน `script.js`

```javascript
{
  id: "strength-muscle",
  type: "fitness",
  label: "เพิ่มกล้ามเนื้อและความแข็งแรง",
  english: "Strength & Build Muscle",
  keywords: ["strength", "weightlifting", "bodypump", "แรงต้าน", "กล้ามเนื้อ"],
}
```

ถ้าต้องการเปลี่ยนเงื่อนไขของเป้าหมาย ให้แก้รายการ `keywords` ของเป้าหมายนั้น ระบบจะคำนวณและเรียงคะแนนใหม่อัตโนมัติ

## วิธีเพิ่มเทรนเนอร์ใหม่

1. เปิด `script.js`
2. คัดลอก object หนึ่งชุดภายใน array `trainers`
3. วางก่อน `];` ที่ปิด array
4. แก้ข้อมูลทุกช่อง
5. เพิ่มรูปใหม่ใน `assets/images/`
6. ตรวจว่าค่า `image` ตรงกับชื่อไฟล์จริง

ระบบจะสร้างการ์ด 3D, ผล Matching Quiz และ Modal จากข้อมูลให้อัตโนมัติ ไม่ต้องเพิ่ม HTML

## วิธีแก้ข้อมูลติดต่อ

ข้อมูลติดต่ออยู่ใน `index.html`

ตัวอย่างลิงก์โทรศัพท์:

```html
<a href="tel:0946966179">094-696-6179</a>
```

- ข้อความระหว่าง `<a>...</a>` คือเบอร์ที่ลูกค้าเห็น
- ค่า `tel:` คือเบอร์ที่โทรศัพท์ใช้โทรออก ไม่ต้องใส่ขีด

## วิธีอัปโหลดขึ้น Netlify Free

1. ตรวจข้อมูล รูป เบอร์โทร Facebook และ Google Maps
2. เปิด [Netlify](https://app.netlify.com/)
3. สมัครสมาชิกหรือเข้าสู่ระบบ
4. ไปที่ `Sites`
5. เลือก `Add new site`
6. เลือก `Deploy manually`
7. ลากโฟลเดอร์ `MS` ทั้งโฟลเดอร์ไปวาง
8. รอจน Deploy เสร็จ
9. เปิดลิงก์ `.netlify.app` และทดสอบบนมือถือ

## การทำ QR Code

นำลิงก์เว็บไซต์ที่ Deploy แล้วไปสร้าง QR Code ห้ามใช้ path ในเครื่อง เช่น `C:\Users\...`

ก่อนพิมพ์ QR Code ควรทดสอบ:

- เปิดลิงก์จากมือถือผ่านอินเทอร์เน็ตจริง
- กด Matching Quiz
- กดดูโปรไฟล์เต็ม
- กดปุ่มโทรและ Facebook
