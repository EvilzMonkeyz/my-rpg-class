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
      en: { name: 'Heavy Armor & Broadsword', url: 'https://www.amazon.com/s?k=knight+sword' },
      th: { name: 'เกราะหนัก และ ดาบใหญ่', url: 'https://shopee.co.th/search?keyword=ดาบของเล่น' }
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
      en: { name: 'Arcane Staff & Spellbook', url: 'https://www.amazon.com/s?k=magic+staff' },
      th: { name: 'คทาเวทมนตร์ และ สมุดคาถา', url: 'https://shopee.co.th/search?keyword=คทาเวทมนตร์' }
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
      en: { name: 'Twin Daggers & Stealth Cloak', url: 'https://www.amazon.com/s?k=daggers' },
      th: { name: 'มีดคู่ และ ผ้าคลุมพรางตัว', url: 'https://shopee.co.th/search?keyword=มีดสั้น' }
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
      en: { name: 'Holy Relic & Vestments', url: 'https://www.amazon.com/s?k=holy+relic' },
      th: { name: 'วัตถุศักดิ์สิทธิ์ และ เสื้อคลุมนักบวช', url: 'https://shopee.co.th/search?keyword=สร้อยกางเขน' }
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
      en: { name: 'Longbow & Quiver', url: 'https://www.amazon.com/s?k=longbow' },
      th: { name: 'ธนูยาว และ ซองใส่ลูกธนู', url: 'https://shopee.co.th/search?keyword=ธนู' }
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
      en: { name: 'Lute & Fancy Hat', url: 'https://www.amazon.com/s?k=lute+instrument' },
      th: { name: 'พิณ และ หมวกสุดหรู', url: 'https://shopee.co.th/search?keyword=พิณ' }
    }
  }
];
