document.documentElement.classList.add("js");

const trainers = [
  {
    name: "T.BEST",
    fullName: "WORASIT METHAKAWINTHORNKUI",
    role: "Combat & Fat Loss Specialist",
    category: "Strength • Class • Fat Loss",
    image: "assets/images/trainer-best.jpg",
    shortDescription: "ลดน้ำหนัก เบิร์นไขมัน เพิ่มความแข็งแรง และฝึกมวยอย่างเป็นระบบ",
    education: "วิทยาศาสตรบัณฑิต สาขาวิทยาศาสตร์การกีฬาและการออกกำลังกาย มหาวิทยาลัยบูรพา",
    specialties: ["Weight Loss", "Fat Loss", "Strength", "Boxing", "Lower Back Care", "Youth Exercise", "Lifeguard"],
    classes: ["Body Combat Les Mills", "Body Pump Les Mills", "Fatburn Extreme", "Thai Boxing", "Tabata", "Bike", "Stretching"],
    certificates: "Personal Trainer Certification (PESA) • Functional Fusion Training • Weight Loss Specialist • Training Clients with Lower Back Pain • Youth Exercise Essentials • Life Saving and Water Rescue / Lifeguard Training • Certificate of 150-hour Thai Medical Massage for Health. • Thai massage and stretching, specialized in 7 areas. • Traditional Thai massage for health. • SPORT MASSAGE TRAINING (fit.)",
    suitableFor: "ลูกค้าที่ต้องการลดน้ำหนัก เบิร์นไขมัน ฟิตหุ่น เพิ่มความแข็งแรง ฝึกมวย ดูแลอาการหลังล่าง หรือเด็กและวัยรุ่นที่เริ่มออกกำลังกาย",
    filterCategories: ["strength", "class", "fatloss"],
  },
  {
    name: "T.GIG",
    fullName: "KANOKPORN THAMMASIRI",
    role: "Strength & Body Shape Coach",
    category: "Strength • Class • Fat Loss",
    image: "assets/images/trainer-gig.jpg",
    shortDescription: "สร้างความแข็งแรง เผาผลาญ ปั้นหุ่น และเริ่มออกกำลังกายอย่างมั่นใจ",
    education: "วิทยาศาสตรบัณฑิต สาขาวิทยาศาสตร์การกีฬา มหาวิทยาลัยมหิดล",
    specialties: ["Strength", "Fat Loss", "Body Shape", "Lower Back Pain", "Beginner"],
    classes: ["Body Combat Les Mills", "Body Pump Les Mills", "Fatburn Extreme", "Piloxing"],
    certificates: "Personal Trainer (Fit Thailand) • Training Clients with Lower Back Pain • Youth Exercise Essentials",
    suitableFor: "ลูกค้าที่ต้องการสร้างความแข็งแรง เผาผลาญ ปั้นหุ่น ดูแลหลังล่าง หรือเริ่มต้นออกกำลังกายแบบมีคนดูแล",
    filterCategories: ["strength", "class", "fatloss"],
  },
  {
    name: "T.PLAM",
    fullName: "KITTASIN NAKCHINWONG",
    role: "Strength & Recovery Coach",
    category: "Strength • Rehab • Nutrition",
    image: "assets/images/trainer-plam.jpg",
    shortDescription: "เพิ่มกล้ามเนื้อ ฟื้นฟู ปรับท่าทาง ดูแลโภชนาการ และนวดสปอร์ต",
    education: "วิทยาศาสตรบัณฑิต สาขาวิทยาศาสตร์การกีฬาและการออกกำลังกาย มหาวิทยาลัยเกษตรศาสตร์",
    specialties: ["Advanced Strength", "Prehab & Rehab", "Olympic Weightlifting", "Nutrition", "Sports Massage", "Myofascial Release", "Myofascial Cupping"],
    classes: ["Body Combat Les Mills", "Body Pump Les Mills", "Fatburn Extreme", "Pound", "Piloxing"],
    certificates: "Advanced Muscle Strength • Prehab & Rehab Specialist • Olympic Weightlifting • Nutrition Specialist • Youth Exercise Essentials • Thai Massage • Sports Massage • Myofascial Release • Aroma Therapy Massage • Myofascial Cupping Therapy",
    suitableFor: "ลูกค้าที่ต้องการเพิ่มกล้ามเนื้อ ฟื้นฟูร่างกาย ปรับท่าทาง แก้จุดอ่อน ยกเวทจริงจัง ดูแลโภชนาการ หรือนวดสปอร์ต",
    filterCategories: ["strength", "class", "fatloss"],
  },
  {
    name: "T.PLOY",
    fullName: "SAVITEE JATTRAKOOL",
    role: "Body Shape & Dance Fitness Coach",
    category: "Strength • Class • Rehab",
    image: "assets/images/trainer-ploy.jpg",
    shortDescription: "ปั้นหุ่น เวทเทรนนิ่ง คลาสเต้น และออกกำลังกายอย่างปลอดภัย",
    education: "วิทยาศาสตรบัณฑิต สาขาวิทยาศาสตร์การกีฬาและการออกกำลังกาย สถาบันการพลศึกษา วิทยาเขตชลบุรี",
    specialties: ["Body Shape", "Strength", "Dance Cardio", "Prehab & Rehab", "Exercise Safety", "CPR"],
    classes: ["Body Pump Les Mills", "Body Jam Les Mills", "Urbanize", "Zumba", "Bike"],
    certificates: "การปฐมพยาบาลเบื้องต้นและการช่วยชีวิตขั้นพื้นฐาน (CPR) • Prehab & Rehab Specialist",
    suitableFor: "ลูกค้าที่ต้องการปั้นหุ่น เวทเทรนนิ่ง คลาสเต้น คาร์ดิโอสนุก ฟื้นฟูพื้นฐาน หรือออกกำลังกายแบบปลอดภัย",
    filterCategories: ["strength", "class", "fatloss"],
  },
  {
    name: "T.SMART",
    fullName: "TEERAPONG JANTHAHARN",
    role: "Systematic Fitness & Nutrition Coach",
    category: "Strength • Class • Fat Loss",
    image: "assets/images/trainer-smart.jpg",
    shortDescription: "ลดไขมัน เพิ่มกล้ามเนื้อ ดูแลโภชนาการ วิ่ง และเทรนแบบเป็นระบบ",
    education: "คณะวิทยาศาสตร์การกีฬา สาขาวิชากีฬาศึกษาและบริหารจัดการกีฬา",
    specialties: ["Fat Loss", "Strength", "Nutrition", "Running", "Sports Massage", "Group Fitness"],
    classes: ["Body Pump Les Mills", "Body Combat Les Mills", "Fatburn Extreme"],
    certificates: "Exercise Instructional Program • Nutrition Mastercourse • Youth Exercise Essentials • Runner (R2) Training with Sports Science (S2) 5 Day • Sports Massage • Group Exercise Fitness Management",
    suitableFor: "ลูกค้าที่ต้องการลดไขมัน เพิ่มกล้ามเนื้อ ดูแลโภชนาการ พัฒนาการวิ่ง นวดสปอร์ต เข้าคลาสกลุ่ม หรือเทรนแบบเป็นระบบ",
    filterCategories: ["strength", "class", "fatloss"],
  },
  {
    name: "T.GIEW",
    fullName: "SAVITEE JATTRAKOOL",
    role: "Dance Cardio Coach",
    category: "Class • Fat Loss",
    image: "assets/images/trainer-giew.jpg",
    shortDescription: "เต้นออกกำลังกาย คาร์ดิโอ ลดไขมัน และสร้างความมั่นใจผ่านเสียงเพลง",
    education: "วิทยาศาสตรบัณฑิต สาขาวิทยาศาสตร์การกีฬาและการออกกำลังกาย มหาวิทยาลัยเกษตรศาสตร์",
    specialties: ["Dance Fitness", "Cardio", "Fat Loss", "Confidence", "Nutrition", "Swimming Fundamentals"],
    classes: ["Body Jam Les Mills", "Body Combat Les Mills", "Step Aerobic", "K-Pop Fitness", "Aerobic Dance", "Zumba Basic Step 1", "Urbanize", "Pound Pro"],
    certificates: "Nutrition Masterclass • อบรมหลักสูตรผู้ฝึกกีฬาว่ายน้ำ Level 1",
    suitableFor: "ลูกค้าที่ต้องการเต้นออกกำลังกาย คาร์ดิโอ ลดไขมัน ความสนุก เพิ่มความมั่นใจ หรือเรียนว่ายน้ำพื้นฐาน",
    filterCategories: ["class", "fatloss"],
  },
  {
    name: "T.TAGOR",
    fullName: "APIRUK WONGSRI",
    role: "Boxing & Functional Training Coach",
    category: "Strength • Class • Fat Loss",
    image: "assets/images/trainer-tagor.jpg",
    shortDescription: "เวทเทรนนิ่ง เพิ่มความแข็งแรง ฟื้นฟูกล้ามเนื้อ และฝึก Circuit, Boxing, HIIT, Core",
    education: "วิทยาศาสตรบัณฑิต สาขาวิทยาศาสตร์การกีฬาและการออกกำลังกาย สถาบันการพลศึกษา วิทยาเขตชลบุรี",
    specialties: ["Weight Training", "Strength", "Sports Massage", "Therapeutic Massage", "Circuit", "Boxing", "HIIT", "Core"],
    classes: ["Body Combat Les Mills", "Boxing", "Circuit Training", "Tabata", "CX Ball"],
    certificates: "Sports Massage Course • Therapeutic Massage • Apply Traditional Thai Massage • Youth Exercise Essentials",
    suitableFor: "ลูกค้าที่ต้องการเวทเทรนนิ่ง เพิ่มความแข็งแรง ฟื้นฟูกล้ามเนื้อ หรือนวดเพื่อคลายตึง รวมถึงฝึก Circuit, Boxing, HIIT, Core",
    filterCategories: ["strength", "class", "fatloss"],
  },
  {
    name: "T.AI",
    fullName: "ALONGKORN KAEWMAT",
    role: "Tone & Functional Training Coach",
    category: "Strength • Fat Loss",
    image: "assets/images/trainer-ai.jpg",
    shortDescription: "กระชับหุ่น เน้นหน้าท้อง ก้นและขา พร้อมการฝึก Tabata แบบเข้มข้น",
    education: "ปริญญาตรี สาขาวิทยาศาสตร์การกีฬาและการออกกำลังกาย มหาวิทยาลัยราชภัฏอุดรธานี",
    specialties: ["Body Tone", "Core", "Abs", "Lower Body", "Tabata", "Functional Training"],
    classes: ["Fitwork", "Tabata", "Core Abs", "Butt & Leg"],
    certificates: "ยังไม่มีข้อมูลใบรับรองเพิ่มเติม",
    suitableFor: "ลูกค้าที่ต้องการกระชับหุ่น เล่นหน้าท้อง เน้นก้นและขา ฝึก Tabata ฟังก์ชันนอลเทรนนิ่ง หรือออกกำลังกายแบบเข้มข้น",
    filterCategories: ["strength", "fatloss"],
  },
];

const swimCoaches = [
  {
    name: "ครูเอ",
    role: "Beginner Specialist",
    category: "Swim Coach",
    image: "assets/images/swim-coach-01.jpg",
    shortDescription: "พื้นฐานว่ายน้ำแบบเป็นขั้นตอนและสร้างความมั่นใจในน้ำ",
    specialties: ["Beginner", "Confidence", "Foundation"],
    classes: ["ผู้เริ่มต้น", "ผู้ใหญ่", "พื้นฐาน"],
    certificates: "การลอยตัว การหายใจ และท่าฟรีสไตล์พื้นฐาน",
    suitableFor: "ผู้เริ่มต้นและผู้ใหญ่ที่อยากว่ายน้ำเป็น",
    filterCategories: ["swim"],
  },
  {
    name: "ครูบี",
    role: "Kids Swim Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-02.jpg",
    shortDescription: "เรียนสนุก ปลอดภัย และสร้างความคุ้นเคยกับน้ำ",
    specialties: ["Kids", "Safety", "Fun Learning"],
    classes: ["เด็ก", "Water Safety", "สนุก"],
    certificates: "การสอนเด็กเล็กและทักษะความปลอดภัยทางน้ำ",
    suitableFor: "เด็กที่เริ่มเรียนว่ายน้ำเป็นครั้งแรก",
    filterCategories: ["swim"],
  },
  {
    name: "ครูซี",
    role: "Stroke Technique Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-03.jpg",
    shortDescription: "ปรับรายละเอียดท่าว่ายให้ลื่นไหลและใช้แรงอย่างมีประสิทธิภาพ",
    specialties: ["Technique", "Efficiency", "Stroke"],
    classes: ["เทคนิค", "ท่าว่าย", "พัฒนา"],
    certificates: "Freestyle, Backstroke และ Stroke Correction",
    suitableFor: "ผู้ที่ว่ายได้แล้วและต้องการพัฒนาเทคนิค",
    filterCategories: ["swim"],
  },
  {
    name: "ครูดรีม",
    role: "Confidence Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-04.jpg",
    shortDescription: "สอนใจเย็น ลดความกลัวน้ำ และค่อย ๆ สร้างความมั่นใจ",
    specialties: ["Confidence", "Gentle", "Personal"],
    classes: ["กลัวน้ำ", "ใจเย็น", "พื้นฐาน"],
    certificates: "Water Confidence และการฝึกแบบรายบุคคล",
    suitableFor: "เด็กหรือผู้ใหญ่ที่ยังกลัวน้ำ",
    filterCategories: ["swim"],
  },
  {
    name: "ครูฟิล์ม",
    role: "Endurance Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-05.jpg",
    shortDescription: "เพิ่มระยะทาง ความอึด และควบคุมจังหวะหายใจ",
    specialties: ["Endurance", "Breathing", "Fitness"],
    classes: ["Endurance", "Breathing", "Fitness"],
    certificates: "Swim Conditioning และ Endurance Programming",
    suitableFor: "ผู้ที่ต้องการว่ายเพื่อออกกำลังกายจริงจัง",
    filterCategories: ["swim"],
  },
  {
    name: "ครูเกรซ",
    role: "Adult Beginner Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-06.jpg",
    shortDescription: "เริ่มจากศูนย์แบบส่วนตัวและเป็นระบบ",
    specialties: ["Adult", "Private", "Foundation"],
    classes: ["ผู้ใหญ่", "1:1", "มั่นใจ"],
    certificates: "Adult Learn-to-Swim และ Basic Water Skills",
    suitableFor: "ผู้ใหญ่ที่ไม่เคยเรียนว่ายน้ำ",
    filterCategories: ["swim"],
  },
  {
    name: "ครูฮัท",
    role: "Water Safety Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-07.jpg",
    shortDescription: "เน้นทักษะเอาตัวรอดและความปลอดภัยในน้ำ",
    specialties: ["Safety", "Survival", "Family"],
    classes: ["Safety", "เด็ก", "ครอบครัว"],
    certificates: "Water Survival, Floating และ Emergency Skills",
    suitableFor: "ครอบครัวและเด็กที่ต้องการพื้นฐานความปลอดภัย",
    filterCategories: ["swim"],
  },
  {
    name: "ครูไอซ์",
    role: "Kids Fun Learning Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-08.jpg",
    shortDescription: "เรียนรู้ผ่านเกมและกิจกรรมที่เหมาะกับเด็กเล็ก",
    specialties: ["Kids", "Games", "Development"],
    classes: ["เด็กเล็ก", "เกม", "พื้นฐาน"],
    certificates: "Play-based Swimming และ Child Development",
    suitableFor: "เด็กเล็กที่ต้องการบรรยากาศการเรียนสนุก",
    filterCategories: ["swim"],
  },
  {
    name: "ครูเจ",
    role: "Performance Swim Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-09.jpg",
    shortDescription: "ฝึกจริงจังเพื่อเพิ่มความเร็วและประสิทธิภาพ",
    specialties: ["Speed", "Performance", "Technique"],
    classes: ["Speed", "Performance", "Technique"],
    certificates: "Competitive Technique, Starts และ Turns",
    suitableFor: "ผู้เรียนที่ต้องการยกระดับความเร็ว",
    filterCategories: ["swim"],
  },
  {
    name: "ครูขิม",
    role: "Gentle Coaching Specialist",
    category: "Swim Coach",
    image: "assets/images/swim-coach-10.jpg",
    shortDescription: "ดูแลใกล้ชิดและปรับตามจังหวะของผู้เรียน",
    specialties: ["Gentle", "Personal", "All Ages"],
    classes: ["ใจเย็น", "ทุกวัย", "ส่วนตัว"],
    certificates: "Personalized Coaching และ Confidence Building",
    suitableFor: "ผู้เรียนที่ต้องการความใจเย็นเป็นพิเศษ",
    filterCategories: ["swim"],
  },
  {
    name: "ครูลีโอ",
    role: "Fitness Swimming Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-11.jpg",
    shortDescription: "ใช้การว่ายน้ำเพื่อเพิ่มความแข็งแรงและคาร์ดิโอ",
    specialties: ["Fitness", "Cardio", "Strength"],
    classes: ["Fitness", "Cardio", "ผู้ใหญ่"],
    certificates: "Aquatic Fitness และ Swim Workout Design",
    suitableFor: "คนที่อยากว่ายน้ำเพื่อสุขภาพ",
    filterCategories: ["swim"],
  },
  {
    name: "ครูเมย์",
    role: "Family Swim Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-12.jpg",
    shortDescription: "เรียนร่วมกันได้ทั้งพี่น้อง เพื่อน และครอบครัว",
    specialties: ["Family", "Group", "Multi-level"],
    classes: ["ครอบครัว", "กลุ่ม", "ทุกวัย"],
    certificates: "Small Group Teaching และ Multi-level Coaching",
    suitableFor: "ครอบครัวหรือกลุ่มเพื่อนที่อยากเรียนพร้อมกัน",
    filterCategories: ["swim"],
  },
  {
    name: "ครูนัท",
    role: "Foundation Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-13.jpg",
    shortDescription: "ปูพื้นฐานลอยตัว เตะขา และหายใจให้แน่น",
    specialties: ["Foundation", "Body Position", "Breathing"],
    classes: ["พื้นฐาน", "ลอยตัว", "หายใจ"],
    certificates: "Body Position, Kick และ Breathing Control",
    suitableFor: "ผู้เริ่มต้นที่ต้องการพื้นฐานละเอียด",
    filterCategories: ["swim"],
  },
  {
    name: "ครูโอ๊ต",
    role: "Technique Analyst",
    category: "Swim Coach",
    image: "assets/images/swim-coach-14.jpg",
    shortDescription: "วิเคราะห์และแก้ท่าว่ายเป็นรายจุด",
    specialties: ["Analysis", "Correction", "Technique"],
    classes: ["วิเคราะห์ท่า", "เทคนิค", "พัฒนา"],
    certificates: "Stroke Analysis และ Individual Correction",
    suitableFor: "ผู้ที่ติดปัญหาท่าว่ายเฉพาะจุด",
    filterCategories: ["swim"],
  },
  {
    name: "ครูแพรว",
    role: "Happy Kids Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-15.jpg",
    shortDescription: "คลาสเด็กพลังบวก สนุก และมีกำลังใจตลอดการเรียน",
    specialties: ["Kids", "Motivation", "Energy"],
    classes: ["เด็ก", "สนุก", "กำลังใจ"],
    certificates: "Kids Motivation และ Progressive Skill Games",
    suitableFor: "เด็กที่ชอบการเรียนแบบมีพลัง",
    filterCategories: ["swim"],
  },
  {
    name: "ครูคิว",
    role: "Aqua Recovery Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-16.jpg",
    shortDescription: "เคลื่อนไหวในน้ำอย่างนุ่มนวลและค่อยเป็นค่อยไป",
    specialties: ["Recovery", "Low Impact", "Mobility"],
    classes: ["Recovery", "เบาแรง", "Mobility"],
    certificates: "Low-impact Aquatic Movement และ Mobility",
    suitableFor: "ผู้ที่อยากเริ่มเคลื่อนไหวแบบแรงกระแทกต่ำ",
    filterCategories: ["swim"],
  },
  {
    name: "ครูโรส",
    role: "Stroke Improvement Coach",
    category: "Swim Coach",
    image: "assets/images/swim-coach-17.jpg",
    shortDescription: "พัฒนาฟรีสไตล์ กรรเชียง และกบให้ดีขึ้น",
    specialties: ["Multi-stroke", "Drills", "Improvement"],
    classes: ["Freestyle", "Backstroke", "Breaststroke"],
    certificates: "Multi-stroke Development และ Technique Drills",
    suitableFor: "ผู้เรียนระดับกลางที่อยากพัฒนาหลายท่า",
    filterCategories: ["swim"],
  },
  {
    name: "ครูสมชาย",
    role: "Senior Swim Mentor",
    category: "Swim Coach",
    image: "assets/images/swim-coach-18.jpg",
    shortDescription: "ประสบการณ์สูง สอนละเอียดและเป็นระบบ",
    specialties: ["Experience", "Mentoring", "Long-term"],
    classes: ["ทุกวัย", "ประสบการณ์", "เป็นระบบ"],
    certificates: "Fundamentals, Technique และ Long-term Skill Development",
    suitableFor: "ทุกวัยที่ต้องการครูผู้มีประสบการณ์",
    filterCategories: ["swim"],
  },
];

const profiles = { fitness: trainers, swim: swimCoaches };
const swimProfilesAreDemo = true;

function auditProfileContent() {
  const names = new Map();
  trainers.forEach((person) => {
    if (!person.fullName) return;
    const key = person.fullName.trim().toLocaleLowerCase("en");
    names.set(key, [...(names.get(key) || []), person.name]);
  });

  const duplicateNames = [...names.entries()].filter(([, profileNames]) => profileNames.length > 1);
  if (duplicateNames.length) {
    console.warn(
      "MOSSA content check: พบชื่อจริงซ้ำ กรุณาตรวจสอบก่อนเผยแพร่",
      duplicateNames.map(([fullName, profileNames]) => ({ fullName, profiles: profileNames }))
    );
  }

  if (swimProfilesAreDemo) {
    console.warn(
      `MOSSA content check: โปรไฟล์ครูว่ายน้ำ ${swimCoaches.length} รายการยังเป็นข้อมูลจำลอง กรุณาเปลี่ยนข้อมูลจริงก่อนเผยแพร่`
    );
  }
}

auditProfileContent();
const matchingGoals = [
  {
    id: "fat-loss-shape",
    type: "fitness",
    label: "ลดไขมันและกระชับรูปร่าง",
    english: "Fat Loss & Body Shape",
    keywords: ["weight loss", "fat loss", "fatburn", "cardio", "conditioning", "tabata", "hiit", "body tone", "circuit"],
  },
  {
    id: "strength-muscle",
    type: "fitness",
    label: "เพิ่มกล้ามเนื้อและความแข็งแรง",
    english: "Strength & Build Muscle",
    keywords: ["strength", "weightlifting", "bodypump", "แรงต้าน", "กล้ามเนื้อ"],
  },
  {
    id: "fitness-beginner",
    type: "fitness",
    label: "เริ่มออกกำลังกายอย่างถูกวิธี",
    english: "Fitness Beginner",
    keywords: ["beginner", "youth exercise", "foundation", "balance", "core stability", "movement"],
  },
  {
    id: "group-fitness",
    type: "fitness",
    label: "เข้าคลาสกลุ่ม สนุกและมีพลัง",
    english: "Group Fitness",
    keywords: ["group fitness", "group energy", "คลาสกลุ่ม", "bodycombat", "bodypump", "bodyjam", "zumba", "step", "dance", "circuit"],
  },
  {
    id: "boxing-combat",
    type: "fitness",
    label: "ฝึกมวยและคาร์ดิโอ",
    english: "Boxing & Combat",
    keywords: ["thai boxing", "bodycombat", "combat"],
  },
  {
    id: "dance-cardio",
    type: "fitness",
    label: "เต้น คาร์ดิโอ และการเคลื่อนไหว",
    english: "Dance Cardio",
    keywords: ["dance", "zumba", "bodyjam", "step", "coordination", "cardio choreography"],
  },
  {
    id: "athletic-performance",
    type: "fitness",
    label: "เพิ่มความฟิต ความอึด และสมรรถภาพ",
    english: "Athletic Performance",
    keywords: ["performance", "speed", "agility", "conditioning", "hiit", "endurance", "high intensity"],
  },
  {
    id: "core-balance",
    type: "fitness",
    label: "เสริมแกนกลาง การทรงตัว และบุคลิก",
    english: "Core & Balance",
    keywords: ["core", "abs", "balance", "fitball", "core stability", "body tone"],
  },
  {
    id: "recovery-mobility",
    type: "fitness",
    label: "ฟื้นฟูร่างกายและเพิ่มความยืดหยุ่น",
    english: "Recovery & Mobility",
    keywords: ["prehab", "rehab", "recovery", "lower back pain", "sports massage", "mobility", "stretching", "movement"],
  },
  {
    id: "personal-program",
    type: "fitness",
    label: "เทรนส่วนตัวและวางโปรแกรมเฉพาะบุคคล",
    english: "Personal Training",
    keywords: ["personal trainer", "personal", "personalized", "1:1", "individual", "วางโปรแกรม"],
  },
  {
    id: "kids-learn-swim",
    type: "swim",
    label: "เด็กเริ่มเรียนว่ายน้ำ",
    english: "Kids Learn to Swim",
    keywords: ["kids", "child", "เด็ก", "play-based", "fun learning", "games", "child development"],
  },
  {
    id: "adult-swim-beginner",
    type: "swim",
    label: "ผู้ใหญ่เริ่มเรียนว่ายน้ำ",
    english: "Adult Beginner",
    keywords: ["adult", "ผู้ใหญ่", "adult learn-to-swim", "basic water", "foundation", "beginner"],
  },
  {
    id: "water-confidence",
    type: "swim",
    label: "ลดความกลัวน้ำและสร้างความมั่นใจ",
    english: "Water Confidence",
    keywords: ["confidence", "กลัวน้ำ", "gentle", "ใจเย็น", "confidence building", "มั่นใจ"],
  },
  {
    id: "water-safety",
    type: "swim",
    label: "ความปลอดภัยและทักษะเอาตัวรอด",
    english: "Water Safety & Survival",
    keywords: ["water safety", "safety", "survival", "emergency", "floating", "เอาตัวรอด"],
  },
  {
    id: "stroke-technique",
    type: "swim",
    label: "พัฒนาและแก้เทคนิคท่าว่าย",
    english: "Stroke Technique",
    keywords: ["technique", "stroke", "analysis", "correction", "freestyle", "backstroke", "breaststroke", "drills"],
  },
  {
    id: "swim-fitness-endurance",
    type: "swim",
    label: "ว่ายเพื่อสุขภาพ คาร์ดิโอ และความอึด",
    english: "Fitness & Endurance",
    keywords: ["fitness", "endurance", "conditioning", "cardio", "workout", "breathing"],
  },
  {
    id: "swim-speed-performance",
    type: "swim",
    label: "เพิ่มความเร็วและสมรรถภาพการแข่งขัน",
    english: "Speed & Performance",
    keywords: ["speed", "performance", "competitive", "starts", "turns"],
  },
  {
    id: "private-swim",
    type: "swim",
    label: "เรียนส่วนตัวและแก้เฉพาะจุด",
    english: "Private Coaching",
    keywords: ["private", "personal", "1:1", "individual", "personalized", "ส่วนตัว"],
  },
  {
    id: "family-group-swim",
    type: "swim",
    label: "เรียนเป็นคู่ กลุ่ม หรือครอบครัว",
    english: "Family & Group",
    keywords: ["family", "group", "multi-level", "ครอบครัว", "กลุ่ม", "ทุกวัย", "small group"],
  },
  {
    id: "aqua-recovery",
    type: "swim",
    label: "ออกกำลังกายในน้ำแบบแรงกระแทกต่ำ",
    english: "Aqua Recovery",
    keywords: ["recovery", "low impact", "low-impact", "mobility", "เบาแรง", "aquatic movement"],
  },
];
const matchingGoalMap = new Map(matchingGoals.map((goal) => [goal.id, goal]));
const matchingSelections = {
  fitness: new Set(),
  swim: new Set(),
};
let activeMatchingType = "fitness";
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const backToTopButton = document.querySelector(".back-to-top");
const filterButtons = document.querySelectorAll(".filter-button");
const filterStatus = document.querySelector("#filter-status");
const modal = document.querySelector("#profile-modal");
const modalDialog = modal.querySelector(".modal-dialog");
const yearElement = document.querySelector("#current-year");
const matchingQuizSection = document.querySelector("#matching-quiz");
const matchingGoalsContainer = document.querySelector("#matching-goals");
const matchingTypeButtons = document.querySelectorAll("[data-matching-type]");
const matchingGoalHeading = document.querySelector("#quiz-goal-heading");
const matchingSubmitButton = document.querySelector("#run-matching");
const matchingResetButton = document.querySelector("#reset-matching");
const matchingSelectedCount = document.querySelector("#quiz-selected-count");
const matchingMessage = document.querySelector("#quiz-message");
const matchingResults = document.querySelector("#matching-results");
const matchingResultsGrid = document.querySelector("#matching-results-grid");
const matchingResultsTitle = document.querySelector("#matching-results-title");
const matchingSummary = document.querySelector("#matching-summary");
const showcaseStates = new Map();
let lastFocusedElement = null;

function createProfileCard(person, type, index) {
  const card = document.createElement("article");
  card.className = "carousel-profile-card";
  card.dataset.profileType = type;
  card.dataset.profileIndex = index;
  card.dataset.categories = person.filterCategories.join(" ");
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `เปิดโปรไฟล์ ${person.name}`);
  card.innerHTML = `
    <div class="carousel-card-image">
      <div class="card-light-beam" aria-hidden="true"></div>
      <img src="${person.image}" alt="${person.name}" width="512" height="512" loading="lazy" decoding="async" draggable="false">
      <span class="carousel-card-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="carousel-card-category">${person.category}</span>
    </div>
    <div class="carousel-card-content">
      <small>${person.role}</small>
      <h3>${person.name}</h3>
      <p>${person.shortDescription}</p>
      <div class="carousel-card-tags">${person.specialties.slice(0, 3).map((item) => `<span>${item}</span>`).join("")}</div>
      <span class="view-profile">ดูโปรไฟล์เต็ม <i aria-hidden="true">↗</i></span>
    </div>
  `;
  return card;
}

function renderProfiles() {
  Object.entries(profiles).forEach(([type, people]) => {
    const track = document.querySelector(`[data-profile-track="${type}"]`);
    people.forEach((person, index) => track.appendChild(createProfileCard(person, type, index)));
  });
}

function openModal(person, trigger) {
  lastFocusedElement = trigger;
  modal.querySelector("#modal-image").src = person.image;
  modal.querySelector("#modal-image").alt = person.name;
  modal.querySelector("#modal-category").textContent = person.category;
  modal.querySelector("#modal-role").textContent = person.role;
  modal.querySelector("#modal-name").textContent = person.name;
  const fullNameElement = modal.querySelector("#modal-full-name");
  fullNameElement.textContent = person.fullName || "";
  fullNameElement.hidden = !person.fullName;
  modal.querySelector("#modal-highlight").textContent = person.shortDescription;
  const educationDetail = modal.querySelector("#modal-education-detail");
  educationDetail.hidden = !person.education;
  modal.querySelector("#modal-education").textContent = person.education || "";
  modal.querySelector("#modal-specialties").innerHTML = person.specialties.map((item) => `<span>${item}</span>`).join("");
  modal.querySelector("#modal-classes").innerHTML = person.classes.map((item) => `<span>${item}</span>`).join("");
  modal.querySelector("#modal-certificates").textContent = person.certificates;
  modal.querySelector("#modal-match").textContent = person.suitableFor;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => modal.querySelector(".modal-close").focus({ preventScroll: true }));
  });
}

function closeModal() {
  if (!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

function renderMatchingGoals() {
  const goals = matchingGoals.filter((goal) => goal.type === activeMatchingType);
  matchingGoalsContainer.innerHTML = goals.map((goal) => `
    <button class="quiz-goal-chip" type="button" role="checkbox" data-matching-goal="${goal.id}" aria-checked="false">
      <span class="quiz-goal-check" aria-hidden="true"></span>
      <span>
        <strong>${goal.label}</strong>
        <small>${goal.english}</small>
      </span>
    </button>
  `).join("");
}

function updateMatchingSelection() {
  const selectedGoals = matchingSelections[activeMatchingType];
  matchingGoalsContainer.querySelectorAll("[data-matching-goal]").forEach((button) => {
    const selected = selectedGoals.has(button.dataset.matchingGoal);
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-checked", String(selected));
  });

  matchingSelectedCount.textContent = selectedGoals.size
    ? `เลือกแล้ว ${selectedGoals.size} เป้าหมาย`
    : "ยังไม่ได้เลือก";
  matchingSubmitButton.disabled = selectedGoals.size === 0;
  matchingSubmitButton.firstChild.textContent = activeMatchingType === "fitness"
    ? "ค้นหาเทรนเนอร์ที่เหมาะกับฉัน "
    : "ค้นหาครูว่ายน้ำที่เหมาะกับฉัน ";
  matchingMessage.textContent = selectedGoals.size
    ? "เลือกได้หลายข้อ ระบบจะหาคนที่ครอบคลุมเป้าหมายของคุณมากที่สุด"
    : "เลือกเป้าหมายที่ต้องการอย่างน้อย 1 ข้อเพื่อเริ่มค้นหา";
}

function setMatchingType(type) {
  if (!profiles[type] || type === activeMatchingType) return;
  activeMatchingType = type;
  matchingQuizSection.dataset.activeMatchingType = type;

  matchingTypeButtons.forEach((button) => {
    const active = button.dataset.matchingType === type;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  matchingGoalHeading.textContent = type === "fitness"
    ? "เป้าหมายด้านฟิตเนสของคุณคืออะไร?"
    : "คุณกำลังมองหาคอร์สว่ายน้ำแบบไหน?";
  matchingGoalsContainer.setAttribute(
    "aria-label",
    type === "fitness" ? "เลือกเป้าหมายด้านฟิตเนส" : "เลือกเป้าหมายคอร์สว่ายน้ำ"
  );
  matchingResultsTitle.textContent = type === "fitness"
    ? "เทรนเนอร์ที่เราแนะนำสำหรับคุณ"
    : "ครูว่ายน้ำที่เราแนะนำสำหรับคุณ";

  renderMatchingGoals();
  updateMatchingSelection();
  matchingResults.hidden = true;
  matchingResultsGrid.replaceChildren();
  matchingSummary.textContent = "";
}

function getMatchingProfiles() {
  const selectedGoals = Array.from(matchingSelections[activeMatchingType])
    .map((goalId) => matchingGoalMap.get(goalId))
    .filter(Boolean);
  if (!selectedGoals.length) return [];

  return profiles[activeMatchingType]
    .map((person, index) => ({ person, type: activeMatchingType, index }))
    .map((profile) => {
      const certificateText = profile.person.certificates.toLocaleLowerCase("th");
      const goalMatches = selectedGoals.map((goal) => {
        const certificateKeywords = goal.keywords.filter((keyword) => certificateText.includes(keyword));
        const specialtyMatches = profile.person.specialties.filter((item) => {
          const text = item.toLocaleLowerCase("th");
          return goal.keywords.some((keyword) => text.includes(keyword));
        });
        const classMatches = profile.person.classes.filter((item) => {
          const text = item.toLocaleLowerCase("th");
          return goal.keywords.some((keyword) => text.includes(keyword));
        });
        const sourceCount = Number(certificateKeywords.length > 0)
          + Number(specialtyMatches.length > 0)
          + Number(classMatches.length > 0);
        const score = Number(certificateKeywords.length > 0) * 5
          + specialtyMatches.length * 4
          + classMatches.length * 3
          + sourceCount * 2;

        return {
          goal,
          score,
          certificateMatched: certificateKeywords.length > 0,
          specialties: specialtyMatches,
          classes: classMatches,
        };
      }).filter((match) => match.score > 0);

      const score = goalMatches.reduce((total, match) => total + match.score, 0);
      const coverage = goalMatches.length / selectedGoals.length;
      const specialtyEvidence = [...new Set(goalMatches.flatMap((match) => match.specialties))];
      const classEvidence = [...new Set(goalMatches.flatMap((match) => match.classes))];

      return {
        ...profile,
        selectedGoals,
        matchedGoals: goalMatches.map((match) => match.goal),
        matchedGoalCount: goalMatches.length,
        score,
        coverage,
        matchPercent: Math.min(
          98,
          Math.round((coverage * 70) + Math.min(28, (score / selectedGoals.length) * 1.5))
        ),
        evidence: {
          certificate: goalMatches.some((match) => match.certificateMatched)
            ? profile.person.certificates
            : "",
          specialties: specialtyEvidence,
          classes: classEvidence,
        },
      };
    })
    .filter((profile) => profile.matchedGoalCount > 0)
    .sort((a, b) => (
      b.coverage - a.coverage
      || b.score - a.score
      || a.person.name.localeCompare(b.person.name, "th")
    ));
}

function matchingReason(profile) {
  const evidence = [];
  if (profile.evidence.certificate) {
    evidence.push(`ใบเซอร์: ${profile.evidence.certificate}`);
  }
  if (profile.evidence.specialties.length) {
    evidence.push(`ความเชี่ยวชาญ: ${profile.evidence.specialties.join(", ")}`);
  }
  if (profile.evidence.classes.length) {
    evidence.push(`คลาสที่สอน: ${profile.evidence.classes.join(", ")}`);
  }
  return evidence.join(" • ");
}

function createMatchingResultCard(profile, rank) {
  const recommendation = rank === 0
    ? '<span class="matching-best-badge">แนะนำที่สุด</span>'
    : `<span class="matching-rank">อันดับ ${rank + 1}</span>`;
  const profileType = profile.type === "fitness" ? "FITNESS TRAINER" : "SWIM COACH";

  return `
    <article class="matching-result-card${rank === 0 ? " is-best-match" : ""}" style="--result-delay: ${rank * 55}ms">
      <div class="matching-result-visual">
        <img src="${profile.person.image}" alt="${profile.person.name}" width="512" height="512" loading="lazy" decoding="async">
        <span class="matching-profile-type">${profileType}</span>
        <div class="matching-score">
          <strong>${profile.matchPercent}%</strong>
          <span>ตรง ${profile.matchedGoalCount}/${profile.selectedGoals.length} เป้าหมาย</span>
        </div>
      </div>
      <div class="matching-result-content">
        <div class="matching-result-topline">
          ${recommendation}
          <span>${profile.person.category}</span>
        </div>
        <p class="matching-result-role">${profile.person.role}</p>
        <h4>${profile.person.name}</h4>
        <div class="matching-result-goals">
          <span>เป้าหมายที่ตรงกัน:</span>
          <div>${profile.matchedGoals.map((goal) => `<strong>${goal.label}</strong>`).join("")}</div>
        </div>
        <p class="matching-result-reason"><strong>เหตุผลที่แนะนำ:</strong> ${matchingReason(profile)}</p>
        <div class="matching-result-actions">
          <button class="button button-primary" type="button" data-match-profile="${profile.type}" data-match-index="${profile.index}">
            ดูโปรไฟล์เต็ม
          </button>
          <a class="button button-outline" href="#contact">สอบถามข้อมูลเพิ่มเติม</a>
        </div>
      </div>
    </article>
  `;
}

function renderMatchingResults(matches) {
  matchingResults.hidden = false;

  if (!matches.length) {
    matchingSummary.textContent = "ยังไม่มีผลลัพธ์ที่ตรงโดยตรง";
    matchingResultsGrid.innerHTML = `
      <div class="matching-empty">
        <span aria-hidden="true">?</span>
        <h4>ยังไม่พบคนที่ตรงเป้าหมายนี้โดยตรง</h4>
        <p>แนะนำให้ทักแชทเพื่อให้ทีมงานช่วยแนะนำเพิ่มเติม</p>
        <a class="button button-primary" href="#contact">สอบถามทีม MOSSA</a>
      </div>
    `;
    return;
  }

  const visibleMatches = matches.slice(0, 6);
  const selectedCount = matchingSelections[activeMatchingType].size;
  matchingSummary.textContent = `เลือก ${selectedCount} เป้าหมาย จัดอันดับจากความครอบคลุม ใบเซอร์ ความเชี่ยวชาญ และคลาสที่สอน`;
  matchingResultsGrid.innerHTML = visibleMatches.map(createMatchingResultCard).join("");
}

function runMatchingQuiz() {
  const selectedGoals = matchingSelections[activeMatchingType];
  if (!selectedGoals.size) {
    matchingMessage.textContent = "กรุณาเลือกเป้าหมายอย่างน้อย 1 ข้อก่อนค้นหา";
    return;
  }

  const matches = getMatchingProfiles();
  renderMatchingResults(matches);
  matchingMessage.textContent = "จัดอันดับจากข้อมูลใบเซอร์ ความเชี่ยวชาญ และคลาสที่สอนเรียบร้อยแล้ว";
  requestAnimationFrame(() => matchingResults.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function resetMatchingQuiz() {
  matchingSelections[activeMatchingType].clear();
  updateMatchingSelection();
  matchingResults.hidden = true;
  matchingResultsGrid.replaceChildren();
  matchingSummary.textContent = "";
}

function visibleCards(track) {
  return Array.from(track.querySelectorAll(".carousel-profile-card:not(.is-hidden)"));
}

function cardScrollPosition(track, card) {
  return card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
}

function refreshShowcaseMetrics(track) {
  const state = showcaseStates.get(track);
  if (!state) return;

  state.metrics = visibleCards(track).map((card) => ({
    card,
    center: card.offsetLeft + card.offsetWidth / 2,
    width: card.offsetWidth,
  }));
  state.values.clear();
}

function nearestCard(track, projectedScroll = track.scrollLeft) {
  const state = showcaseStates.get(track);
  if (!state?.metrics.length) refreshShowcaseMetrics(track);

  const metrics = state?.metrics ?? [];
  const targetCenter = projectedScroll + track.clientWidth / 2;
  return metrics.reduce((nearest, metric) => {
    const distance = Math.abs(metric.center - targetCenter);
    return !nearest || distance < nearest.distance ? { card: metric.card, distance } : nearest;
  }, null)?.card;
}

function updateShowcase(track) {
  const state = showcaseStates.get(track);
  if (!state?.metrics.length) refreshShowcaseMetrics(track);
  if (!state.metrics.length) return;

  const viewportCenter = track.scrollLeft + track.clientWidth / 2;
  let activeCard = state.metrics[0].card;
  let closestDistance = Infinity;

  state.metrics.forEach(({ card, center, width }) => {
    const rawOffset = (center - viewportCenter) / Math.max(width * 0.9, 1);
    const offset = Math.max(-2.75, Math.min(2.75, rawOffset));
    const distance = Math.min(2.75, Math.abs(offset));
    const previous = state.values.get(card);

    if (!previous || Math.abs(previous.offset - offset) > 0.012) {
      card.style.setProperty("--offset", offset.toFixed(3));
      card.style.setProperty("--distance", distance.toFixed(3));
      state.values.set(card, { offset, distance });
    }

    if (Math.abs(rawOffset) < closestDistance) {
      closestDistance = Math.abs(rawOffset);
      activeCard = card;
    }
  });

  if (state.activeCard !== activeCard) {
    state.activeCard?.classList.remove("is-active");
    state.activeCard?.setAttribute("aria-current", "false");
    activeCard.classList.add("is-active");
    activeCard.setAttribute("aria-current", "true");
    state.activeCard = activeCard;

    const type = activeCard.dataset.profileType;
    const person = profiles[type][Number(activeCard.dataset.profileIndex)];
    document.querySelector(`[data-active-name="${type}"]`)?.replaceChildren(document.createTextNode(person.name));
  }
}

function requestShowcaseUpdate(track) {
  const state = showcaseStates.get(track);
  if (state.frame) return;
  state.frame = requestAnimationFrame(() => {
    state.frame = 0;
    updateShowcase(track);
  });
}

function stopScrollAnimation(track) {
  const state = showcaseStates.get(track);
  if (!state?.animationFrame) return;
  cancelAnimationFrame(state.animationFrame);
  state.animationFrame = 0;
  state.animating = false;
}

function snapToCard(track, card, behavior = "smooth") {
  if (!card) return;
  const state = showcaseStates.get(track);
  const target = cardScrollPosition(track, card);

  stopScrollAnimation(track);
  if (behavior === "auto" || Math.abs(target - track.scrollLeft) < 1) {
    track.scrollLeft = target;
    requestShowcaseUpdate(track);
    window.clearTimeout(state.interactionTimer);
    state.interactionTimer = window.setTimeout(() => {
      if (!state.pointerDown && !state.animating) track.classList.remove("is-interacting");
    }, 70);
    return;
  }

  const start = track.scrollLeft;
  const distance = target - start;
  const duration = Math.min(430, Math.max(240, Math.abs(distance) * 0.7));
  const startTime = performance.now();
  state.animating = true;
  track.classList.add("is-interacting");

  const animate = (now) => {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 4);
    track.scrollLeft = start + distance * eased;

    if (progress < 1) {
      state.animationFrame = requestAnimationFrame(animate);
      return;
    }

    state.animationFrame = 0;
    state.animating = false;
    track.scrollLeft = target;
    requestShowcaseUpdate(track);
    window.setTimeout(() => {
      if (!state.pointerDown && !state.animating) track.classList.remove("is-interacting");
    }, 70);
  };

  state.animationFrame = requestAnimationFrame(animate);
}

function setupShowcase(track) {
  const state = {
    pointerDown: false,
    dragging: false,
    activePointerId: null,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    frame: 0,
    dragFrame: 0,
    pendingScrollLeft: 0,
    animationFrame: 0,
    animating: false,
    settleTimer: 0,
    interactionTimer: 0,
    metrics: [],
    values: new Map(),
    activeCard: null,
  };
  showcaseStates.set(track, state);

  track.addEventListener("scroll", () => {
    requestShowcaseUpdate(track);
    if (state.pointerDown || state.animating) return;

    track.classList.add("is-interacting");
    window.clearTimeout(state.interactionTimer);
    state.interactionTimer = window.setTimeout(() => {
      const nearest = nearestCard(track);
      if (!nearest || Math.abs(cardScrollPosition(track, nearest) - track.scrollLeft) < 1) {
        track.classList.remove("is-interacting");
        return;
      }
      snapToCard(track, nearest);
    }, 140);
  }, { passive: true });

  track.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;

    stopScrollAnimation(track);
    window.clearTimeout(state.settleTimer);
    window.clearTimeout(state.interactionTimer);
    state.pointerDown = true;
    state.dragging = false;
    state.activePointerId = event.pointerId;
    state.startX = event.clientX;
    state.startY = event.clientY;
    state.lastX = event.clientX;
    state.lastTime = performance.now();
    state.velocity = 0;
    state.pendingScrollLeft = track.scrollLeft;
  });

  track.addEventListener("pointermove", (event) => {
    if (!state.pointerDown || event.pointerId !== state.activePointerId) return;

    const totalX = event.clientX - state.startX;
    const totalY = event.clientY - state.startY;
    if (!state.dragging) {
      if (Math.abs(totalY) > 9 && Math.abs(totalY) > Math.abs(totalX)) {
        state.pointerDown = false;
        state.activePointerId = null;
        return;
      }
      if (Math.abs(totalX) < 7 || Math.abs(totalX) <= Math.abs(totalY) * 1.08) return;

      state.dragging = true;
      track.classList.add("dragging", "is-interacting");
      track.setPointerCapture(event.pointerId);
    }

    const now = performance.now();
    const deltaX = event.clientX - state.lastX;
    const deltaTime = Math.max(now - state.lastTime, 1);
    const currentVelocity = deltaX / deltaTime;
    state.velocity = state.velocity * 0.72 + currentVelocity * 0.28;
    state.pendingScrollLeft -= deltaX;

    if (!state.dragFrame) {
      state.dragFrame = requestAnimationFrame(() => {
        state.dragFrame = 0;
        track.scrollLeft = state.pendingScrollLeft;
      });
    }

    state.lastX = event.clientX;
    state.lastTime = now;
    event.preventDefault();
  }, { passive: false });

  const releasePointer = (event) => {
    if (!state.pointerDown || event.pointerId !== state.activePointerId) return;
    state.pointerDown = false;
    state.activePointerId = null;

    if (state.dragFrame) {
      cancelAnimationFrame(state.dragFrame);
      state.dragFrame = 0;
      track.scrollLeft = state.pendingScrollLeft;
    }

    if (state.dragging) {
      const projectedScroll = track.scrollLeft - state.velocity * 260;
      track.dataset.justDragged = "true";
      window.setTimeout(() => delete track.dataset.justDragged, 240);
      snapToCard(track, nearestCard(track, projectedScroll));
    } else {
      track.classList.remove("is-interacting");
    }

    state.dragging = false;
    track.classList.remove("dragging");
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
  };

  track.addEventListener("pointerup", releasePointer);
  track.addEventListener("pointercancel", releasePointer);
  track.addEventListener("lostpointercapture", (event) => {
    if (event.target !== track || state.animating) return;
    state.pointerDown = false;
    state.activePointerId = null;
    state.dragging = false;
    track.classList.remove("dragging", "is-interacting");
  });

  requestAnimationFrame(() => {
    refreshShowcaseMetrics(track);
    track.scrollLeft = 0;
    updateShowcase(track);
  });
}

renderMatchingGoals();
updateMatchingSelection();
renderProfiles();
document.querySelectorAll(".profile-carousel").forEach(setupShowcase);

matchingTypeButtons.forEach((button) => {
  button.addEventListener("click", () => setMatchingType(button.dataset.matchingType));
});

matchingGoalsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-matching-goal]");
  if (!button) return;

  const selectedGoals = matchingSelections[activeMatchingType];
  const goalId = button.dataset.matchingGoal;
  if (selectedGoals.has(goalId)) {
    selectedGoals.delete(goalId);
  } else {
    selectedGoals.add(goalId);
  }
  updateMatchingSelection();
  matchingResults.hidden = true;
  matchingResultsGrid.replaceChildren();
  matchingSummary.textContent = "";
});

matchingSubmitButton.addEventListener("click", runMatchingQuiz);
matchingResetButton.addEventListener("click", resetMatchingQuiz);
matchingResultsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-match-profile]");
  if (!button) return;
  const person = profiles[button.dataset.matchProfile][Number(button.dataset.matchIndex)];
  openModal(person, button);
});

document.querySelectorAll(".carousel-profile-card").forEach((card) => {
  const activate = () => {
    const track = card.closest(".profile-carousel");
    if (track.dataset.justDragged === "true") return;
    const person = profiles[card.dataset.profileType][Number(card.dataset.profileIndex)];
    openModal(person, card);
  };
  card.addEventListener("click", activate);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate();
    }
  });
});

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const track = document.getElementById(button.dataset.trackTarget);
    const cards = visibleCards(track);
    const activeIndex = Math.max(0, cards.findIndex((card) => card.classList.contains("is-active")));
    const direction = button.dataset.scroll === "next" ? 1 : -1;
    const targetIndex = Math.max(0, Math.min(cards.length - 1, activeIndex + direction));
    snapToCard(track, cards[targetIndex]);
  });
});

modal.querySelectorAll("[data-modal-close]").forEach((element) => element.addEventListener("click", closeModal));
modal.querySelector("[data-modal-contact]").addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
  if (event.key === "Tab" && modal.classList.contains("open")) {
    const focusable = Array.from(modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!modal.contains(document.activeElement)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

function closeMenu() {
  menuToggle.classList.remove("active");
  primaryNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "เปิดเมนู");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "ปิดเมนู" : "เปิดเมนู");
  document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll(".primary-nav a").forEach((link) => link.addEventListener("click", closeMenu));

function updateScrollControls() {
  header.classList.toggle("scrolled", window.scrollY > 24);
  backToTopButton.classList.toggle("visible", window.scrollY > 520);
}

window.addEventListener("scroll", updateScrollControls, { passive: true });
updateScrollControls();
backToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const filterLabels = {
  all: "โปรไฟล์ทั้งหมด",
  strength: "สายเวท / Strength",
  class: "สายคลาส",
  fatloss: "สายลดไขมัน",
  swim: "ครูว่ายน้ำ",
};

function applyProfileFilter(filter) {
  let visibleCount = 0;
  document.querySelectorAll(".carousel-profile-card").forEach((card) => {
    const visible = filter === "all" || card.dataset.categories.split(" ").includes(filter);
    card.classList.toggle("is-hidden", !visible);
    card.setAttribute("aria-hidden", String(!visible));
    if (visible) visibleCount += 1;
  });

  document.querySelectorAll("[data-carousel-section]").forEach((section) => {
    const track = section.querySelector(".profile-carousel");
    const cards = visibleCards(track);
    section.classList.toggle("is-hidden", cards.length === 0);
    if (cards.length) {
      requestAnimationFrame(() => {
        refreshShowcaseMetrics(track);
        snapToCard(track, cards[0], "auto");
        updateShowcase(track);
      });
    }
  });

  filterStatus.textContent = `${filterLabels[filter]}: พบ ${visibleCount} โปรไฟล์`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    applyProfileFilter(button.dataset.filter);

    const targetSection = button.dataset.filter === "swim"
      ? document.querySelector("#swim-coaches")
      : document.querySelector("#fitness-trainers");
    requestAnimationFrame(() => targetSection.scrollIntoView({ behavior: "smooth", block: "start" }));
  });
});

let resizeFrame = 0;
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000) closeMenu();
  if (resizeFrame) cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    resizeFrame = 0;
    document.querySelectorAll(".profile-carousel").forEach((track) => {
      const activeCard = showcaseStates.get(track)?.activeCard;
      refreshShowcaseMetrics(track);
      snapToCard(track, activeCard, "auto");
      updateShowcase(track);
    });
  });
});

applyProfileFilter("all");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -25px" }
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

yearElement.textContent = new Date().getFullYear();
