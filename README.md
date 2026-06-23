# MOSSA Trainer Showcase

เว็บไซต์ Static สำหรับแสดงโปรไฟล์เทรนเนอร์และครูสอนว่ายน้ำในรูปแบบ 3D Interactive Showcase

- ใช้ HTML, CSS และ JavaScript ธรรมดา
- ไม่มีระบบหลังบ้าน ฐานข้อมูล หรือระบบล็อกอิน
- เปิด `index.html` ในเครื่องได้ทันที
- อัปโหลดขึ้น Netlify Free ได้
- รองรับ Drag, Swipe, 3D Center Card, Filter และ Profile Modal

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
        ├── hero-fitness-team.png
        ├── hero-swim-team.png
        ├── hero-fitness-team-v3.webp
        ├── hero-swim-team-v3.webp
        ├── mossa-logo-white.png
        ├── mossa-share.jpg
        ├── favicon.svg
        ├── swim-coach-01.jpg
        └── swim-coach-02.jpg ... swim-coach-18.jpg
```

เว็บไซต์ใช้งานรูปจากโฟลเดอร์ `assets/images/` เท่านั้น

ไฟล์ `.webp` ของภาพ Hero เป็นเวอร์ชันขนาดเล็กสำหรับช่วยให้มือถือเปิดหน้าเว็บได้เร็วขึ้น ส่วนไฟล์ `.png` ใช้เป็นภาพสำรองสำหรับเบราว์เซอร์

## เปิดดูเว็บไซต์ในเครื่อง

1. เปิดโฟลเดอร์ `MS`
2. ดับเบิลคลิก `index.html`
3. รีเฟรชหน้าเว็บหลังแก้ไฟล์หรือเปลี่ยนรูป

## วิธีเปลี่ยนรูป

1. เตรียมรูป JPG หรือ PNG
2. แนะนำรูปแนวตั้งอัตราส่วนประมาณ `3:4` หรือ `4:5`
3. นำรูปไปวางใน `assets/images/`
4. ตั้งชื่อให้ตรงกับค่า `image` ใน `script.js`

ตัวอย่าง:

```javascript
image: "assets/images/trainer-best.jpg",
```

วิธีที่ง่ายที่สุดคือใช้ชื่อเดิมและวางไฟล์ใหม่ทับไฟล์เก่า จากนั้นรีเฟรชหน้าเว็บ

### รูปจริงเทรนเนอร์ชุดปัจจุบัน

รูปจริงของเทรนเนอร์ถูกวางไว้ใน `assets/images/` แล้ว โดยใช้ชื่อไฟล์ตามนี้:

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

ถ้าต้องการเปลี่ยนรูปคนไหน ให้ทำไฟล์ใหม่เป็น JPG แนวตั้ง แล้ววางทับไฟล์ของคนนั้นใน `assets/images/` ด้วยชื่อเดิม ระบบจะเปลี่ยนทั้งการ์ด 3D, ผลลัพธ์ Matching Quiz และ Profile Modal อัตโนมัติ

รูปทีมเทรนเนอร์ด้าน Hero ใช้ไฟล์ `assets/images/hero-fitness-team-v3.webp` และมีไฟล์สำรองเป็น `assets/images/hero-fitness-team-v3.png`

โลโก้บนหัวเว็บและกล่องติดต่อใช้ไฟล์ `assets/images/mossa-logo-white.png`

รูป preview ตอนแชร์ลิงก์บน Facebook, LINE หรือแอปแชทต่าง ๆ ใช้ไฟล์ `assets/images/mossa-share.jpg` ขนาด `1200x630`

รูปครูว่ายน้ำใช้ชื่อ `swim-coach-01.jpg` ถึง `swim-coach-18.jpg`

## วิธีแก้ข้อมูลโปรไฟล์

ข้อมูลทั้งหมดอยู่ด้านบนของ `script.js` ใน array:

- `trainers` สำหรับเทรนเนอร์
- `swimCoaches` สำหรับครูสอนว่ายน้ำ

โครงสร้างข้อมูล:

```javascript
{
  name: "T.BEST",
  fullName: "WORASIT METHAKAWINTHORNKUI",
  role: "Combat & Fat Loss Specialist",
  category: "Class • Fat Loss",
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

ความหมายของข้อมูล:

- `name` ชื่อที่แสดง
- `fullName` ชื่อและนามสกุลจริง
- `role` ตำแหน่งหรือจุดเด่นหลัก
- `category` หมวดที่แสดงบนรูป
- `image` path ของรูป
- `shortDescription` คำอธิบายสั้นบนการ์ดและ Modal
- `education` วุฒิการศึกษา สาขา และสถาบัน
- `specialties` จุดเด่น
- `classes` คลาสที่สอน
- `certificates` ใบเซอร์หรือความเชี่ยวชาญ
- `suitableFor` เหมาะกับลูกค้าแบบไหน
- `filterCategories` หมวดสำหรับปุ่ม Filter

ค่าที่ใช้ใน `filterCategories`:

- `strength` สายเวท
- `class` สายคลาส
- `fatloss` สายลดไขมัน
- `swim` ครูว่ายน้ำ

## วิธีแก้ Matching Quiz

ระบบ Matching เป็น JavaScript แบบ Rule-based ไม่ใช้ API และไม่ส่งข้อมูลลูกค้าออกจากเครื่อง

ลูกค้าเลือกเป้าหมายได้มากกว่า 1 ข้อ ระบบจะค้นหาคำที่เกี่ยวข้องจากข้อมูลจริง 3 ส่วนของแต่ละโปรไฟล์:

- `certificates` ใบเซอร์หรือความเชี่ยวชาญ ให้น้ำหนักคะแนนมากที่สุด
- `specialties` จุดเด่นและความเชี่ยวชาญ
- `classes` คลาสหรือรูปแบบการสอน

ดังนั้นเวลาแก้ข้อมูลโปรไฟล์ ไม่ต้องเพิ่ม `tags` แยกอีกแล้ว ตัวอย่างเช่น:

```javascript
{
  name: "T.PLAM",
  specialties: ["Strength", "Recovery", "Movement"],
  classes: ["Strength", "Prehab & Rehab", "Olympic Weightlifting"],
  certificates: "Strength Training, Nutrition, Sports Massage",
}
```

รายการปุ่มเป้าหมายอยู่ในตัวแปร `matchingGoals` ภายใน `script.js`:

```javascript
{
  id: "strength-muscle",
  type: "fitness",
  label: "เพิ่มกล้ามเนื้อและความแข็งแรง",
  english: "Strength & Build Muscle",
  keywords: ["strength", "weightlifting", "bodypump", "แรงต้าน", "กล้ามเนื้อ"],
}
```

- `id` รหัสเป้าหมาย ห้ามซ้ำกัน
- `type` ใช้แยกกลุ่ม โดย `fitness` คือเทรนเนอร์ และ `swim` คือครูว่ายน้ำ
- `label` ข้อความภาษาไทยบนปุ่มและผลลัพธ์
- `english` ข้อความภาษาอังกฤษใต้ปุ่ม
- `keywords` คำที่ระบบนำไปค้นหาในใบเซอร์ ความเชี่ยวชาญ และคลาสที่สอน

เป้าหมายด้านฟิตเนสมี 10 แบบ:

- ลดไขมันและกระชับรูปร่าง
- เพิ่มกล้ามเนื้อและความแข็งแรง
- เริ่มออกกำลังกายอย่างถูกวิธี
- เข้าคลาสกลุ่ม สนุกและมีพลัง
- ฝึกมวยและคาร์ดิโอ
- เต้น คาร์ดิโอ และการเคลื่อนไหว
- เพิ่มความฟิต ความอึด และสมรรถภาพ
- เสริมแกนกลาง การทรงตัว และบุคลิก
- ฟื้นฟูร่างกายและเพิ่มความยืดหยุ่น
- เทรนส่วนตัวและวางโปรแกรมเฉพาะบุคคล

เป้าหมายด้านว่ายน้ำมี 10 แบบ:

- เด็กเริ่มเรียนว่ายน้ำ
- ผู้ใหญ่เริ่มเรียนว่ายน้ำ
- ลดความกลัวน้ำและสร้างความมั่นใจ
- ความปลอดภัยและทักษะเอาตัวรอด
- พัฒนาและแก้เทคนิคท่าว่าย
- ว่ายเพื่อสุขภาพ คาร์ดิโอ และความอึด
- เพิ่มความเร็วและสมรรถภาพการแข่งขัน
- เรียนส่วนตัวและแก้เฉพาะจุด
- เรียนเป็นคู่ กลุ่ม หรือครอบครัว
- ออกกำลังกายในน้ำแบบแรงกระแทกต่ำ

ถ้าต้องการเปลี่ยนเงื่อนไขของเป้าหมาย ให้แก้รายการ `keywords` ของเป้าหมายนั้น ระบบจะคำนวณและเรียงคะแนนใหม่อัตโนมัติ

เมื่อเลือกหลายเป้าหมาย ระบบจะเรียงคนที่ตรงครบหลายเป้าหมายก่อน แล้วจึงเปรียบเทียบคะแนนจากใบเซอร์ ความเชี่ยวชาญ และคลาสที่สอน ผลลัพธ์จะแสดงด้วยว่าตรงกี่ข้อจากจำนวนที่ลูกค้าเลือก

หน้า Quiz แยกเป็น 2 โหมด:

- `fitness` แสดงเฉพาะเป้าหมายด้านฟิตเนส และค้นหาเฉพาะใน array `trainers`
- `swim` แสดงเฉพาะเป้าหมายคอร์สว่ายน้ำ และค้นหาเฉพาะใน array `swimCoaches`

ข้อมูลของสองโหมดจะไม่ถูกนำมาจัดอันดับรวมกัน

## วิธีเพิ่มเทรนเนอร์ใหม่

1. เปิด `script.js`
2. คัดลอก object หนึ่งชุดภายใน array `trainers`
3. วางก่อน `];` ที่ปิด array
4. แก้ข้อมูลทุกช่อง
5. เพิ่มรูปใหม่ใน `assets/images/`
6. ตรวจว่าค่า `image` ตรงกับชื่อไฟล์จริง

ระบบจะสร้างการ์ด 3D และ Modal จากข้อมูลให้อัตโนมัติ ไม่ต้องเพิ่ม HTML

วิธีเพิ่มครูว่ายน้ำให้ทำแบบเดียวกันภายใน array `swimCoaches`

## วิธีแก้ข้อมูลติดต่อ

ข้อมูลติดต่ออยู่ใน `index.html`

ตัวอย่างลิงก์โทรศัพท์:

```html
<a href="tel:0946966179">094-696-6179</a>
```

- ข้อความระหว่าง `<a>...</a>` คือเบอร์ที่ลูกค้าเห็น
- ค่า `tel:` คือเบอร์ที่โทรศัพท์ใช้โทรออก ไม่ต้องใส่ขีด

ลิงก์เริ่มต้นจะเปิดหน้าค้นหา `MOSSA Sport Society` บน Facebook และ Google Maps เพื่อไม่ให้พาลูกค้าไปหน้าแรกเปล่า ๆ

เมื่อมี URL เพจและหมุดสถานที่จริงแล้ว ให้เปลี่ยนลิงก์ค้นหาใน `index.html` เป็นลิงก์จริงโดยตรง เพื่อให้ปุ่ม Facebook เปิดแชทได้ทันทีและแผนที่เปิดหมุดที่ถูกต้อง

## รายการข้อมูลที่ต้องยืนยันก่อนเผยแพร่

- `T.PLOY` และ `T.GIEW` ใช้ชื่อจริง `SAVITEE JATTRAKOOL` เหมือนกันตามข้อมูลที่ได้รับ ควรตรวจสอบว่าถูกต้องหรือไม่
- โปรไฟล์ครูว่ายน้ำ 18 คนยังเป็นข้อมูลจำลอง เมื่อเปลี่ยนเป็นข้อมูลจริงครบแล้ว ให้แก้ `swimProfilesAreDemo` ใน `script.js` เป็น `false`
- เปลี่ยนลิงก์ Facebook และ Google Maps จากหน้าค้นหาเป็น URL ทางการ
- หลังได้ URL Netlify จริง ควรเพิ่ม `<link rel="canonical">` และเปลี่ยน `og:image` เป็น URL เต็มของเว็บไซต์

เว็บไซต์จะแสดงคำเตือนใน Developer Console หากพบชื่อจริงซ้ำ หรือ `swimProfilesAreDemo` ยังเป็น `true` เพื่อช่วยป้องกันการเผยแพร่ข้อมูลตัวอย่างโดยไม่ตั้งใจ

## วิธีแก้ราคาคอร์ส

เปิด `index.html` แล้วค้นหาราคาปัจจุบัน เช่น `3,500` จากนั้นแก้ตัวเลขภายใน:

```html
<p class="price"><strong>3,500</strong> บาท</p>
```

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

เมื่อต้องการอัปเดต ให้เปิดเว็บไซต์เดิมใน Netlify ไปที่ `Deploys` แล้วลากโฟลเดอร์เวอร์ชันใหม่ไปวาง ลิงก์เดิมจะยังใช้งานต่อได้

## การทำ QR Code

นำลิงก์ Netlify ที่ Deploy แล้วไปสร้าง QR Code ห้ามใช้ path ในเครื่อง เช่น `C:\Users\...`

ก่อนพิมพ์ QR Code ควรทดสอบ:

1. สแกนจากโทรศัพท์อย่างน้อยสองเครื่อง
2. ทดลอง Drag หรือ Swipe การ์ด
3. เปิดและปิด Modal
4. ทดลองกดโทรศัพท์ Facebook และ Google Maps
