import { Question } from '../core/models/quiz.model';

export const QUESTIONS: Question[] = [

  // ---------------------------------------------------------
  // CHAPTER 1: THE BEGINNING (จุดเริ่มต้นและการเตรียมตัว)
  // ---------------------------------------------------------
  {
    id: 1,
    text: {
      en: 'You\'re completely surrounded! Quick, what\'s your go-to weapon to bust out of this mess?',
      th: 'โดนศัตรูล้อมหมดแล้ว! วินาทีนี้อาวุธคู่กายที่คุณจะคว้ามาฟาดคืออะไร?'
    },
    choices: [
      { text: { en: 'A massive axe. One swing and they\'re flying!', th: 'ขวานยักษ์สิ ฟาดทีเดียววงแตก กระดูกกระจาย!' }, stat: 'STR' },
      { text: { en: 'Lightweight dual blades or a rapier. Float like a butterfly, sting like a bee.', th: 'ดาบคู่หรือเรเปียร์เบาๆ เน้นพริ้ว หลบเก่ง แทงยับ!' }, stat: 'AGI' },
      { text: { en: 'My trusty bow. I\'m stepping back and picking them off from afar.', th: 'ธนูคู่ใจ ขอถอยไปตั้งหลักแล้วสอยร่วงทีละตัว' }, stat: 'DEX' },
      { text: { en: 'My magic staff. Time to drop a massive AoE spell on their heads!', th: 'คทาเวทมนตร์ ขอร่ายเวทหมู่ตู้มเดียวหายวับทั้งดง!' }, stat: 'INT' }
    ]
  },
  {
    id: 2,
    text: {
      en: 'You\'re at a royal banquet and everyone\'s flexing their skills. What’s your biggest flex?',
      th: 'กลางงานเลี้ยงพระราชา ทุกคนกำลังขิงใส่กัน ถ้าต้องอวดจุดเด่นของตัวเอง คุณจะขิงเรื่องอะไร?'
    },
    choices: [
      { text: { en: 'My insane stamina! I can fight for days without breaking a sweat.', th: 'ความอึดขั้นสุด! สู้ข้ามวันข้ามคืนก็ยังไหว ไม่รู้จักคำว่าเหนื่อย' }, stat: 'STR' },
      { text: { en: 'My big brain. I know the weakness of literally every monster out there.', th: 'ความรู้แน่นๆ ประวัติศาสตร์ ไอเทม จุดอ่อนมอนสเตอร์... ถามมาตอบได้หมด!' }, stat: 'INT' },
      { text: { en: 'My crazy good intuition. I can always sense when things are about to go down.', th: 'สัมผัสที่หกสุดแม่นยำ ลางสังหรณ์ไม่เคยพลาด รู้ล่วงหน้าว่าอะไรจะเกิด' }, stat: 'WIS' },
      { text: { en: 'My natural charisma. People just naturally want to follow my lead.', th: 'เสน่ห์และออร่าผู้นำ! แค่เดินเข้างาน คนก็พร้อมจะทำตามคำสั่งแล้ว' }, stat: 'CHA' }
    ]
  },
  {
    id: 3,
    text: {
      en: 'The King just handed you a completely suicidal, save-the-world quest. How do you react?',
      th: 'พระราชาเพิ่งมอบหมายภารกิจกู้โลกที่ดูยังไงก็ไปตายชัดๆ คุณมีรีแอคชั่นยังไง?'
    },
    choices: [
      { text: { en: 'Take a knee and deliver a speech so epic the whole room gets chills.', th: 'คุกเข่ารับคำสั่งพร้อมกล่าวคำสาบานสุดเท่ เอาให้คนทั้งท้องพระโรงขนลุก!' }, stat: 'CHA' },
      { text: { en: 'Cross my arms. "For a job this risky, I need half the gold upfront."', th: 'กอดอกมองหน้า แล้วบอกว่า "งานเสี่ยงตายขนาดนี้ ขอเบิกค่าจ้างล่วงหน้าครึ่งนึง"' }, stat: 'STR' },
      { text: { en: 'Ask for library access. I need to research this before I commit to anything.', th: 'ขออนุญาตไปหมกตัวในห้องสมุดหลวงก่อนเลย ต้องหาข้อมูลเตรียมตัวให้ชัวร์' }, stat: 'INT' },
      { text: { en: 'Snatch the quest scroll and dash out before he even finishes talking.', th: 'คว้าใบเควสต์มาแล้วพุ่งตัวออกจากห้องโถงไปเลย ไม่ต้องพูดเยอะเจ็บคอ!' }, stat: 'AGI' }
    ]
  },
  {
    id: 4,
    text: {
      en: 'A shady merchant is trying to scam you with an overpriced magic item. How do you handle it?',
      th: 'พ่อค้าหน้าเลือดกำลังพยายามโก่งราคาไอเทมเวทมนตร์แพงเวอร์ๆ คุณจะจัดการยังไง?'
    },
    choices: [
      { text: { en: 'Smooth-talk and charm him until he literally halves the price.', th: 'ใช้สกิลคุยเก่ง หว่านล้อมบวกอ้อนนิดๆ จนยอมใจอ่อนลดราคาให้ครึ่งนึง' }, stat: 'CHA' },
      { text: { en: 'Point out a hidden flaw in the item and use it to force a heavy discount.', th: 'จับโป๊ะได้ว่าไอเทมมีตำหนิ เลยเอาความจริงมาขู่ให้เขายอมลดราคา' }, stat: 'WIS' },
      { text: { en: 'Keep him talking while I smoothly pocket it and leave a few cheap coins behind.', th: 'ชวนคุยเนียนๆ เบี่ยงเบนความสนใจ แล้วมือไวฉกของมาพร้อมวางเศษเงินทิ้งไว้' }, stat: 'AGI' },
      { text: { en: 'Slam the table hard and glare at him until he gives me a fair price.', th: 'ทุบโต๊ะดังปัง! จ้องหน้าเขม็ง แล้วบังคับให้บอกราคาที่ยุติธรรมมาเดี๋ยวนี้' }, stat: 'STR' }
    ]
  },
  {
    id: 5,
    text: {
      en: 'A drunk, arrogant noble challenges you to a duel at a fancy party. The whole room goes quiet.',
      th: 'ขุนนางขี้เมาหาเรื่องท้าดวลกลางงานปาร์ตี้หรู คนทั้งงานเงียบกริบและหันมามอง คุณจะเอาไง?'
    },
    choices: [
      { text: { en: 'Realize he\'s just drunk, drop a wise quote, and calmly walk away.', th: 'ปล่อยเบลอคนเมา พูดเตือนสติหล่อๆ ไปประโยคนึงแล้วเดินหนีไปเลย' }, stat: 'WIS' },
      { text: { en: 'Accept, then disarm him in half a second with a blindingly fast move.', th: 'รับคำท้า แล้วปัดดาบเขาหลุดมือกระเด็นไปไกลด้วยความไวแสง เอาให้อาย!' }, stat: 'DEX' },
      { text: { en: 'Laugh it off, buy him a top-tier drink, and turn the whole thing into a toast.', th: 'หัวเราะชิลๆ เลี้ยงเหล้าแพงๆ คืนแก้วนึง เปลี่ยนเรื่องบาดหมางให้เป็นงานฉลอง' }, stat: 'CHA' },
      { text: { en: 'Effortlessly dodge his sloppy attacks and do a backflip just to show off.', th: 'ยืนหลบการโจมตีเงอะงะของเขาแบบพริ้วๆ แถมนอกรอบตีลังกาโชว์ไปอีกที' }, stat: 'AGI' }
    ]
  },
  {
    id: 6,
    text: {
      en: 'Crooked city guards are demanding a massive "toll" to let you in, but you\'re broke.',
      th: 'ทหารยามกังฉินเรียกเก็บ "ค่าผ่านทาง" สุดแพง แต่คุณบักโกรกไม่มีเงินสักแดง จะผ่านไปยังไง?'
    },
    choices: [
      { text: { en: 'Crack my knuckles and look so intimidating they let me pass out of fear.', th: 'ยืนเบ่งกล้าม หักข้อนิ้วข่มขู่ จนยามกลัวหัวหดแล้วยอมเปิดทางให้เอง' }, stat: 'STR' },
      { text: { en: 'Smile, compliment them, and make up a sad story so they pity me and let me in.', th: 'ยิ้มหวาน ชมชุดเกราะยามเท่จัง แล้วแต่งเรื่องดราม่าเรียกน้ำตาจนยามเห็นใจ' }, stat: 'CHA' },
      { text: { en: 'Throw a rock to distract them and quietly slip through the gates.', th: 'โยนหินไปอีกทางสร้างความวุ่นวาย แล้วแอบย่องเนียนๆ ผ่านประตูไป' }, stat: 'AGI' },
      { text: { en: 'Calmly quote the kingdom\'s extortion laws and the harsh penalties they\'ll face.', th: 'งัดข้อกฎหมายอาณาจักรมาอ้างเป๊ะๆ พร้อมขู่กลับเรื่องโทษของการรีดไถ' }, stat: 'INT' }
    ]
  },

  // ---------------------------------------------------------
  // CHAPTER 2: THE WILDERNESS (การเดินทางและเผชิญหน้า)
  // ---------------------------------------------------------
  {
    id: 7,
    text: {
      en: 'After weeks of traveling, you finally hit a lively tavern. How are you spending the night?',
      th: 'หลังเดินทางสมบุกสมบันมานาน ในที่สุดก็เจอโรงเตี๊ยมคึกคักๆ คืนนี้คุณจะทำอะไร?'
    },
    choices: [
      { text: { en: 'Challenge the biggest guy there to an arm-wrestling match. Time to show off.', th: 'ท้าพี่เบิ้มที่ตัวใหญ่ที่สุดในร้านงัดข้อ โชว์ความแข็งแกร่งให้เป็นที่ประจักษ์!' }, stat: 'STR' },
      { text: { en: 'Join a high-stakes knife-throwing game. My aim is too good to lose.', th: 'ลงแข่งปามีดเดิมพันด้วยเงินก้อนโต มั่นใจว่าความแม่นยำนี้กินเรียบแน่นอน' }, stat: 'DEX' },
      { text: { en: 'Find a quiet corner with a warm drink and dive into a good book of magic lore.', th: 'หามุมเงียบๆ สั่งเครื่องดื่มอุ่นๆ แล้วนั่งอ่านหนังสือเวทมนตร์เล่มโปรด' }, stat: 'INT' },
      { text: { en: 'Grab a lute, jump on a table, and perform a legendary song for the whole crowd.', th: 'หยิบกีตาร์กระโดดขึ้นโต๊ะ ร้องเพลงเล่าวีรกรรมให้คนทั้งร้านฟังอย่างเมามันส์' }, stat: 'CHA' }
    ]
  },
  {
    id: 8,
    text: {
      en: 'You find a trapped wolf pup. The angry mother and her pack are watching from a hill.',
      th: 'เจอลูกหมาป่าติดกับดักพรานป่า โดยมีแม่หมาป่าและฝูงของมันจ้องเขม็งอยู่บนเนินเขา เอาไงดี?'
    },
    choices: [
      { text: { en: 'Crouch down, hum a soothing tune, and gently untangle the poor thing.', th: 'ค่อยๆ นั่งลง ร้องเพลงกล่อมเบาๆ ให้สัตว์ป่าสงบลง แล้วค่อยๆ แก้มัดให้' }, stat: 'WIS' },
      { text: { en: 'Whip out a knife and precisely snap the snare wire in a split second.', th: 'สะบัดข้อมือใช้มีดตัดลวดกับดักขาดฉับอย่างแม่นยำก่อนที่ลูกหมาจะทันขยับตัว' }, stat: 'DEX' },
      { text: { en: 'Speak softly and keep my hands visible to show the pack I\'m a friend.', th: 'พูดด้วยน้ำเสียงอ่อนโยนและยกมือขึ้นสองข้าง ส่งสัญญาณให้ฝูงรู้ว่าเรามาดี' }, stat: 'CHA' },
      { text: { en: 'Dodge the panicked pup\'s bites, pin it down quickly, and release the trap.', th: 'เอี้ยวตัวหลบลูกหมาที่แว้งกัดเพราะตกใจ แล้วล็อคตัวมันไว้แน่นๆ เพื่อปลดกับดัก' }, stat: 'AGI' }
    ]
  },
  {
    id: 9,
    text: {
      en: 'A bridge is broken, leaving a massive gap over a bottomless pit. How are you getting across?',
      th: 'สะพานขาด ขวางหน้าคือหุบเหวลึกที่มองไม่เห็นก้น คุณจะข้ามไปอีกฝั่งยังไง?'
    },
    choices: [
      { text: { en: 'Back up, get a running start, and just make a massive leap of faith!', th: 'ถอยหลังไปตั้งหลักไกลๆ แล้วสับตีนแตกกระโดดข้ามไปเลย!' }, stat: 'STR' },
      { text: { en: 'Keep my balance perfectly and just tightrope-walk across the one remaining rope.', th: 'กางแขนรักษาสมดุล แล้วเดินไต่เชือกเส้นเดียวที่เหลืออยู่ข้ามไปชิลๆ' }, stat: 'AGI' },
      { text: { en: 'Throw a grappling hook perfectly onto a sturdy rock and swing on over.', th: 'ปาตะขอเกี่ยวข้ามไปคล้องโขดหินฝั่งตรงข้ามให้แน่นเป๊ะ แล้วโหนสลิงข้ามไป' }, stat: 'DEX' },
      { text: { en: 'Cast a quick levitation spell and gracefully float my way across.', th: 'ร่ายมนตร์ควบคุมลม แล้วค่อยๆ ลอยตัวลอยข้ามเหวไปแบบสวยๆ' }, stat: 'INT' }
    ]
  },
  {
    id: 10,
    text: {
      en: 'You\'re sneaking through an enemy base when a guard dog spots you. It\'s about to bark!',
      th: 'กำลังย่องเบาเข้าค่ายศัตรู แต่ดันมีหมาเฝ้ายามหันมาเห็นและเตรียมเห่าซะงั้น!'
    },
    choices: [
      { text: { en: 'Freeze completely and use my aura to psychically soothe it back to sleep.', th: 'ยืนนิ่งๆ ส่งกระแสจิตแผ่ออร่าความสงบ กล่อมให้มันกลับไปนอนหลับปุ๋ย' }, stat: 'WIS' },
      { text: { en: 'Perfectly toss a piece of meat into some far bushes so it chases that instead.', th: 'ดีดชิ้นเนื้อไปตกที่พุ่มไม้ไกลๆ อย่างแม่นยำ เพื่อเบี่ยงเบนความสนใจมันทันที' }, stat: 'DEX' },
      { text: { en: 'Dash into the nearest shadows so fast it doesn\'t even know what it saw.', th: 'ใส่เกียร์หมา! พุ่งตัวหลบเข้าเงามืดด้วยความเร็วแสงก่อนที่มันจะทันอ้าปากเห่า' }, stat: 'AGI' },
      { text: { en: 'Tackle the huge dog to the ground and physically hold its jaws shut.', th: 'พุ่งเข้าล็อคคอหมายักษ์ กดลงพื้นและปิดปากมันไว้ด้วยแรงตบมหาศาล' }, stat: 'STR' }
    ]
  },
  {
    id: 11,
    text: {
      en: 'A massive, evil tree-monster (Treant) ambushes you, shaking the ground. Your first move?',
      th: 'ปีศาจต้นไม้ยักษ์โผล่มาซุ่มโจมตีจนแผ่นดินสั่นสะเทือน ปฏิกิริยาแรกของคุณคือ?'
    },
    choices: [
      { text: { en: 'Scream a battle cry and charge right at it to draw its aggro off my team.', th: 'แหกปากคำราม! แล้วพุ่งเข้าแทงก์ชนตรงๆ เพื่อดึงความสนใจปกป้องเพื่อน' }, stat: 'STR' },
      { text: { en: 'Scramble up the nearest safe tree to get the high ground and start sniping.', th: 'ไต่ขึ้นต้นไม้ที่ใกล้ที่สุดอย่างไว เพื่อหาจุดซุ่มยิงทำดาเมจจากมุมสูง' }, stat: 'DEX' },
      { text: { en: 'Instantly throw up a massive magic shield to protect the party and absorb the hit.', th: 'กางบาเรียเวทมนตร์ครอบเพื่อนทั้งปาร์ตี้ทันที เพื่อกันแรงกระแทกและช่วยฮีล' }, stat: 'WIS' },
      { text: { en: 'Start singing an ancient forest song, hoping to calm the beast\'s corrupted rage.', th: 'ร้องเพลงโบราณแห่งพงไพร เพื่อพยายามชำระล้างและเรียกสติปีศาจกลับมา' }, stat: 'CHA' }
    ]
  },

  // ---------------------------------------------------------
  // CHAPTER 3: THE DUNGEON (ไคลแมกซ์และปริศนา)
  // ---------------------------------------------------------
  {
    id: 12,
    text: {
      en: 'You just entered a dungeon that\'s pitch black. You literally can\'t see your hand. How do you lead?',
      th: 'เดินเข้ามาในดันเจี้ยนที่มืดตึ๊ดตื๋อ มองไม่เห็นแม้มือตัวเอง คุณจะนำทางเพื่อนยังไง?'
    },
    choices: [
      { text: { en: 'Cast a spell to create a glowing orb of light that floats above us.', th: 'เสกเวทสร้างลูกแก้วแสงสว่างจ้า ลอยเหนือหัวนำทางไปเลย สว่างไสว!' }, stat: 'INT' },
      { text: { en: 'Close my eyes, focus my senses, and navigate by feeling the air and hearing echoes.', th: 'หลับตา ตั้งสมาธิ ฟังเสียงหยดน้ำและสัมผัสกระแสลมเอาว่าควรเดินไปทางไหน' }, stat: 'WIS' },
      { text: { en: 'Take the lead, stepping incredibly softly and feeling for tripwires with my hands.', th: 'อาสาเดินนำหน้าสุด ย่องเบาๆ แล้วใช้ปลายนิ้วคลำหาเส้นลวดกับดักตามพื้น' }, stat: 'DEX' },
      { text: { en: 'Light the biggest torch I have and march forward. If anything jumps out, I hit it.', th: 'จุดคบเพลิงอันเบ้อเริ่ม ถือเดินนำหน้าแบบห้าวๆ ใครโผล่มาทุบยับ!' }, stat: 'STR' }
    ]
  },
  {
    id: 13,
    text: {
      en: 'A massive iron door blocks your way. You hear creepy whispers coming from the other side.',
      th: 'ประตูเหล็กบานยักษ์ขวางทางอยู่ แถมมีเสียงกระซิบหลอนๆ ดังมาจากข้างใน จะเปิดยังไงดี?'
    },
    choices: [
      { text: { en: 'Grip my weapon and just smash the hinges until the door completely breaks down.', th: 'กำอาวุธให้แน่น แล้วง้างฟาดใส่บานพับประตูสุดแรงจนมันพังทลายลงมา!' }, stat: 'STR' },
      { text: { en: 'Analyze the glowing runes on the metal and figure out the puzzle to unlock it.', th: 'สังเกตอักขระเวทมนตร์ที่สลักไว้ แล้วลองถอดรหัสเพื่อปลดล็อคอย่างผู้มีปัญญา' }, stat: 'INT' },
      { text: { en: 'Pull out my lockpick set and silently crack the mechanism without making a sound.', th: 'ควักอุปกรณ์สะเดาะกุญแจออกมา ค่อยๆ เขี่ยกลไกปลดล็อคแบบไร้เสียงสุดๆ' }, stat: 'AGI' },
      { text: { en: 'Close my eyes, connect with the creepy spirits, and politely ask them to let us pass.', th: 'หลับตา สื่อสารกับดวงวิญญาณแถวนั้น เพื่อขออนุญาตผ่านทางอย่างสันติ' }, stat: 'WIS' }
    ]
  },
  {
    id: 14,
    text: {
      en: 'Oh no, a trap! The room is filling with toxic sand, and the stop button is high up on the ceiling.',
      th: 'ซวยแล้ว เหยียบกับดัก! ห้องกำลังเต็มไปด้วยทรายพิษ แต่ปุ่มหยุดดันอยู่สูงลิบเลย ทำไงดี?'
    },
    choices: [
      { text: { en: 'Beg the earth spirits to harden the sand into a ramp so we can just walk up to it.', th: 'สวดอ้อนวอนภูตแห่งดิน ขอให้ทรายชะลอตัวและแข็งตัวกลายเป็นบันไดให้เดินขึ้นไป' }, stat: 'WIS' },
      { text: { en: 'Aim perfectly and throw a dagger straight up to hit the tiny ceiling button.', th: 'เล็งให้เป๊ะที่สุด แล้วปามีดสั้นขึ้นไปกระแทกปุ่มสวิตช์บนเพดานให้โดนจังๆ' }, stat: 'DEX' },
      { text: { en: 'Yell at everyone to quickly form a human pyramid so we can reach the top in time.', th: 'ตะโกนสั่งการเพื่อนๆ ให้รีบต่อตัวกันเป็นพีระมิดมนุษย์ ปีนขึ้นไปกดก่อนทรายจะท่วม!' }, stat: 'CHA' },
      { text: { en: 'Parkour my way up the falling sand and the walls to slap the switch myself.', th: 'อาศัยจังหวะทรายร่วง กระโดดไต่กำแพงรัวๆ แบบพาร์คัวร์ขึ้นไปกดสวิตช์เองเลย' }, stat: 'AGI' }
    ]
  },
  {
    id: 15,
    text: {
      en: 'Your best friend just triggered a dart trap and collapsed from poison. You have seconds to act!',
      th: 'เพื่อนสนิทเผลอโดนลูกดอกอาบพิษร้ายแรงเล่นงานจนล้มพับ คุณมีเวลาแค่ไม่กี่วินาที!'
    },
    choices: [
      { text: { en: 'Look around for local herbs and quickly grind them into an emergency healing paste.', th: 'กวาดสายตามองหาสมุนไพรแถวนั้น เด็ดมาบดผสมเป็นยาพอกถอนพิษแบบฉุกเฉิน' }, stat: 'WIS' },
      { text: { en: 'Quickly hit their pressure points to stop the blood flow and halt the venom.', th: 'จิ้มสกัดจุดตามเส้นประสาทเพื่อนด้วยความไวแสง ใช้วิชาสกัดการไหลเวียนของพิษไว้ก่อน' }, stat: 'AGI' },
      { text: { en: 'Analyze the poison on the dart and instantly mix the exact chemical antidote.', th: 'วิเคราะห์คราบพิษที่ลูกดอก แล้วรีบผสมสารเคมีต้านพิษจากขวดทดลองในกระเป๋า' }, stat: 'INT' },
      { text: { en: 'Grab a scalpel and perform an insanely precise emergency surgery to cut out the poison.', th: 'หยิบมีดผ่าตัดฉุกเฉิน เฉือนเนื้อตายส่วนที่โดนพิษออกไปอย่างแม่นยำก่อนมันจะลาม' }, stat: 'DEX' }
    ]
  },
  {
    id: 16,
    text: {
      en: 'A ghost guarding an ancient library won\'t take money. It wants "rare insight" to let you pass.',
      th: 'ผีเฝ้าหอสมุดไม่รับสินบน มันขอ "ความรู้แจ้งที่หาได้ยาก" เป็นค่าผ่านทาง คุณจะเอาอะไรไปแลก?'
    },
    choices: [
      { text: { en: 'Drop a super deep philosophical thought about life and death that blows its mind.', th: 'พูดปรัชญาล้ำลึกเกี่ยวกับการเวียนว่ายตายเกิดของมนุษย์ จนผีต้องหยุดคิดตาม' }, stat: 'WIS' },
      { text: { en: 'Distract it with an impossible magic trick, making it confused while I slip right past.', th: 'โชว์มายากลสลับของด้วยมือไวขั้นเทพ หลอกให้วิญญาณงงแล้วเราแอบเดินเนียนๆ ผ่านไป' }, stat: 'DEX' },
      { text: { en: 'Recite a beautiful, heartbreaking poem about its past life that moves the ghost to tears.', th: 'ท่องบทกวีสุดเศร้าเกี่ยวกับชีวิตในอดีตของมัน จนวิญญาณซาบซึ้งและร้องไห้ออกมา' }, stat: 'CHA' },
      { text: { en: 'Look at the crazy complex math puzzle on the door and just solve it out loud.', th: 'ถอดรหัสปริศนาคณิตศาสตร์หลายมิติที่สลักบนกำแพง แล้วอธิบายวิธีแก้ให้มันฟัง' }, stat: 'INT' }
    ]
  },
  {
    id: 17,
    text: {
      en: 'A massive dragon has you pinned down. It laughs and asks, "Give me one good reason I shouldn\'t eat you right now."',
      th: 'มังกรยักษ์จับคุณกดลงกับพื้น มันหัวเราะแล้วถามว่า "ทำไมข้าถึงไม่ควรกินเจ้าซะตอนนี้เลยล่ะ?"'
    },
    choices: [
      { text: { en: '"Eating me is just a snack. But sparing me means you get a friend to talk to forever."', th: '"กินข้าไปก็อิ่มแค่มื้อเดียว แต่เก็บข้าไว้คุยแก้เหงา ท่านจะได้เพื่อนไปตลอดกาลนะ"' }, stat: 'WIS' },
      { text: { en: 'Bounce a smoke bomb off the ceiling and slide into a tiny crack while it\'s blinded.', th: 'ปาระเบิดควันอัดเพดาน อาศัยจังหวะมันเผลอหลับตา สไลด์ตัวหนีเข้าซอกหินอย่างไว!' }, stat: 'DEX' },
      { text: { en: 'Look right into its eyes, compliment how majestic it is, and offer to work for it.', th: 'จ้องตามันแล้วทำใจดีสู้เสือ ชมว่าเกล็ดมันสวยจัง แล้วเสนอตัวเป็นโฆษกประจำตัวให้มันเลย' }, stat: 'CHA' },
      { text: { en: 'Start quoting ancient dragon laws of parley. Legally, it *has* to listen to me now.', th: 'งัดกฎหมายสนธิสัญญามังกรโบราณมาอ้าง อธิบายตามหลักการจนมันต้องยอมปล่อย' }, stat: 'INT' }
    ]
  },

  // ---------------------------------------------------------
  // CHAPTER 4: THE LEGACY (บทสรุป)
  // ---------------------------------------------------------
  {
    id: 18,
    text: {
      en: 'The adventure is over. Years from now, how do you want the world to remember you?',
      th: 'ในที่สุดการผจญภัยก็จบลง คุณอยากให้คนรุ่นหลังจดจำคุณในฐานะอะไร?'
    },
    choices: [
      { text: { en: 'An unstoppable champion who was strong enough to move mountains and save the world.', th: 'ยอดนักรบไร้พ่าย ผู้มีพละกำลังสั่นสะเทือนปฐพีและปกป้องอาณาจักรนี้ไว้!' }, stat: 'STR' },
      { text: { en: 'The ultimate genius. The one whose spells and writings basically built modern society.', th: 'มหาปราชญ์ผู้รอบรู้ ผู้คิดค้นคัมภีร์เวทมนตร์ที่เป็นรากฐานของโลกยุคใหม่' }, stat: 'INT' },
      { text: { en: 'A total legend. I want my adventures to be sung in taverns for hundreds of years.', th: 'ตำนานสุดโรแมนติก ที่ถูกเล่าขานผ่านบทเพลงฮิตตามร้านเหล้าไปตลอดกาล' }, stat: 'CHA' },
      { text: { en: 'I don\'t want fame. I just want to fade into the shadows like a ghost who protected them.', th: 'ไม่อยากถูกจดจำหรอก ขอเป็นแค่วิญญาณไร้ตัวตนที่คอยแอบปกป้องทุกคนอยู่เงียบๆ ดีกว่า' }, stat: 'AGI' }
    ]
  }
];