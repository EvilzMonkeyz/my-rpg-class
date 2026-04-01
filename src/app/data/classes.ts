import { RPGClass } from '../core/models/quiz.model';

export const CLASSES: RPGClass[] = [
  {
    id: 'knight',
    name: {
      en: 'Knight',
      th: 'อัศวิน'
    },
    description: {
      en: 'A brave warrior who relies on immense strength to overpower foes.',
      th: 'นักรบผู้กล้าหาญที่พึ่งพาพละกำลังมหาศาลในการกำราบศัตรู'
    },
    primaryStat: 'STR',
    gearRecommendation: {
      // สายบวกแนวหน้า เน้นการกดปุ่มรัวๆ ทนทานต่อการกระแทกเวลาหัวร้อน
      en: { description: 'The frontline needs reliable gear! Upgrade to a mechanical keyboard built to withstand your heaviest combos and fastest strikes.', name: 'Mechanical Gaming Keyboard (Linear Switch)', url: 'https://www.amazon.com/s?k=linear+mechanical+gaming+keyboard' },
      th: { description: 'สายแทงก์แนวหน้าที่ต้องรับแรงกระแทก! นิ้วของคุณก็ต้องพร้อมรัวปุ่มสาดคอมโบเช่นกัน อัปเกรดคีย์บอร์ดที่อึดถึกทนพร้อมลุยทุกสมรภูมิ', name: 'คีย์บอร์ดเกมมิ่ง Mechanical (Linear Switch)', url: 'https://shopee.co.th/search?keyword=mechanical%20keyboard%20linear' }
    }
  },
  {
    id: 'mage',
    name: {
      en: 'Mage',
      th: 'จอมเวท'
    },
    description: {
      en: 'A brilliant scholar wielding the arcane forces of the universe.',
      th: 'นักปราชญ์ผู้ปราดเปรื่องที่ควบคุมพลังเวทมนตร์แห่งจักรวาล'
    },
    primaryStat: 'INT',
    gearRecommendation: {
      // สายวางแผน วิเคราะห์ข้อมูล ต้องการพื้นที่หน้าจอเยอะๆ เพื่อเปิดหลายหน้าต่าง
      en: { description: 'A true scholar sees the whole battlefield! Expand your vision and manage multiple spellbooks (tabs) seamlessly with an ultrawide monitor.', name: 'Ultrawide Monitor for Multitasking', url: 'https://www.amazon.com/s?k=ultrawide+monitor' },
      th: { description: 'วิสัยทัศน์ที่กว้างไกลคืออาวุธของจอมปราชญ์! ขยายขอบเขตการมองเห็นและจัดการแท็บข้อมูลคาถามหาศาลของคุณด้วยจอภาพระดับเทพ', name: 'จอมอนิเตอร์ Ultrawide สำหรับการวางแผน', url: 'https://shopee.co.th/search?keyword=ultrawide%20monitor' }
    }
  },
  {
    id: 'rogue',
    name: {
      en: 'Rogue',
      th: 'โจร'
    },
    description: {
      en: 'A swift and cunning assassin who strikes from the shadows.',
      th: 'นักฆ่าผู้รวดเร็วและเจ้าเล่ห์ที่จู่โจมจากเงามืด'
    },
    primaryStat: 'AGI',
    gearRecommendation: {
      // สายลอบสังหาร เน้นความคล่องตัวขั้นสุด เคลื่อนไหวไร้แรงเสียดทาน
      en: { description: 'Speed is survival! Strike from the shadows with frictionless, ultra-lightweight precision that keeps you one step ahead.', name: 'Ultra-lightweight Wireless Gaming Mouse', url: 'https://www.amazon.com/s?k=superlight+gaming+mouse' },
      th: { description: 'ความว่องไวคือชีวิต! สะบัดเมาส์ได้พริ้วไหวไร้แรงเสียดทาน ให้ทุกการเคลื่อนไหวของคุณเงียบเชียบและเฉียบขาดราวกับเงา', name: 'เมาส์เกมมิ่งไร้สายน้ำหนักเบาพิเศษ', url: 'https://shopee.co.th/search?keyword=เมาส์เกมมิ่งน้ำหนักเบา' }
    }
  },
  {
    id: 'cleric',
    name: {
      en: 'Cleric',
      th: 'นักบวช'
    },
    description: {
      en: 'A wise healer devoted to protecting allies and banishing evil.',
      th: 'ผู้รักษาผู้ชาญฉลาดที่อุทิศตนเพื่อปกป้องพันธมิตรและขจัดความชั่วร้าย'
    },
    primaryStat: 'WIS',
    gearRecommendation: {
      // สายซัพพอร์ต ใส่ใจสุขภาพทั้งในเกมและนอกเกม ต้องนั่งดูแลปาร์ตี้นานๆ
      en: { description: 'You heal the party, but who heals you? Cast a permanent protection buff on your posture with this ergonomic essential.', name: 'Ergonomic Gaming Chair', url: 'https://www.amazon.com/s?k=ergonomic+gaming+chair' },
      th: { description: 'ฮีลเพื่อนในปาร์ตี้มาเยอะแล้ว อย่าลืมฮีลหลังตัวเองด้วย! นี่คือไอเทมบัฟพลังป้องกันหลังสำหรับการลงดันเจี้ยนแบบมาราธอน', name: 'เก้าอี้เพื่อสุขภาพ Ergonomic', url: 'https://shopee.co.th/search?keyword=เก้าอี้เพื่อสุขภาพ' }
    }
  },
  {
    id: 'ranger',
    name: {
      en: 'Ranger',
      th: 'พรานป่า'
    },
    description: {
      en: 'A master of the wilderness with unparalleled accuracy and dexterity.',
      th: 'ปรมาจารย์แห่งป่าที่มีความแม่นยำและความคล่องแคล่วหาตัวจับยาก'
    },
    primaryStat: 'DEX',
    gearRecommendation: {
      // สายความแม่นยำสูง เล็งเป้าพลาดไม่ได้แม้แต่มิลลิเมตรเดียว
      en: { description: 'Absolute accuracy requires a steady foundation. Control every micro-adjustment perfectly with an extended gaming surface.', name: 'Premium Extended Gaming Mousepad', url: 'https://www.amazon.com/s?k=extended+gaming+mousepad' },
      th: { description: 'สายตาที่เฉียบคมต้องมาพร้อมความนิ่ง! ควบคุมการลากเมาส์เล็งเป้าให้แม่นยำระดับมิลลิเมตรด้วยพื้นที่อาณาเขตที่กว้างขวาง', name: 'แผ่นรองเมาส์เกมมิ่งขนาดใหญ่แบบ Control', url: 'https://shopee.co.th/search?keyword=แผ่นรองเมาส์เกมมิ่ง' }
    }
  },
  {
    id: 'bard',
    name: {
      en: 'Bard',
      th: 'นักกวี'
    },
    description: {
      en: 'A charismatic performer who inspires friends and manipulates foes.',
      th: 'นักแสดงผู้มีเสน่ห์ที่สร้างแรงบันดาลใจให้เพื่อนและหลอกล่อศัตรู'
    },
    primaryStat: 'CHA',
    gearRecommendation: {
      // สายเข้าสังคม พูดคุยสวมบทบาท หรือสตรีมมิ่ง เสน่ห์อยู่ที่เสียง
      en: { description: 'Your voice is the party\'s best buff! Ensure your legendary tales and vital calls are heard with crystal-clear, studio-quality sound.', name: 'Professional Condenser Microphone', url: 'https://www.amazon.com/s?k=streaming+microphone' },
      th: { description: 'เสียงของคุณคือบัฟที่ดีที่สุดของปาร์ตี้! ส่งต่อพลังใจและวาทศิลป์สุดคูลของคุณให้ดังกังวานทะลุจอด้วยอุปกรณ์ระดับโปร', name: 'ไมโครโฟน Condenser สำหรับสตรีมมิ่ง', url: 'https://shopee.co.th/search?keyword=ไมโครโฟนสตรีมมิ่ง' }
    }
  }
];