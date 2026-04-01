import { Question } from '../core/models/quiz.model';

export const QUESTIONS: Question[] = [

  // ---------------------------------------------------------
  // CHAPTER 1: THE BEGINNING (จุดเริ่มต้นและการเตรียมตัว)
  // ---------------------------------------------------------
  {
    id: 1,
    text: {
      en: 'As a seasoned adventurer, your choice of weaponry defines your combat style. When surrounded by foes, what is the core tool you depend on?',
      th: 'ในฐานะนักผจญภัยที่มากประสบการณ์ อาวุธที่คุณเลือกจะเป็นตัวกำหนดสไตล์การต่อสู้ของคุณ เมื่อถูกล้อมรอบด้วยศัตรู เครื่องมือหลักที่คุณพึ่งพาคืออะไร?'
    },
    choices: [
      { text: { en: 'A massive, two-handed battleaxe capable of cleaving through armor and bone in a single, unyielding swing.', th: 'ขวานรบสองมือขนาดมหึมาที่สามารถผ่าชุดเกราะและกระดูกให้ขาดสะบั้นได้ในการเหวี่ยงเพียงครั้งเดียวที่ไม่มีใครต้านทานได้' }, stat: 'STR' },
      { text: { en: 'A lightweight, perfectly balanced rapier that allows for blindingly fast thrusts and elegant, evasive footwork.', th: 'ดาบเรียวยาวน้ำหนักเบาที่สมดุลอย่างสมบูรณ์แบบ ซึ่งช่วยให้สามารถแทงได้เร็วอย่างไม่น่าเชื่อและมีการหลบหลีกที่สง่างาม' }, stat: 'AGI' },
      { text: { en: 'A finely crafted composite longbow, stringing specialized arrows to strike deadly targets from the shadows.', th: 'ธนูยาวแบบประกอบขึ้นมาอย่างประณีต พร้อมกับลูกธนูชนิดพิเศษเพื่อโจมตีเป้าหมายที่ร้ายแรงจากเงามืด' }, stat: 'DEX' },
      { text: { en: 'An ancient staff glowing with arcane energy, capable of unleashing elemental devastation upon the entire battlefield.', th: 'คทาโบราณที่เรืองแสงด้วยพลังเวทมนตร์ลึกลับ ซึ่งสามารถปลดปล่อยความพินาศของธาตุต่างๆลงบนสนามรบทั้งหมดได้' }, stat: 'INT' }
    ]
  },
  {
    id: 2,
    text: {
      en: 'Every hero has a defining trait that shapes their destiny. If you were forced to boast at a king’s feast, what is your true, unparalleled advantage?',
      th: 'ฮีโร่ทุกคนมีลักษณะเด่นที่เป็นตัวกำหนดโชคชะตาของพวกเขา หากคุณถูกบังคับให้โอ้อวดในงานเลี้ยงของกษัตริย์ ข้อได้เปรียบที่แท้จริงและไม่มีใครเทียบได้ของคุณคืออะไร?'
    },
    choices: [
      { text: { en: 'My unstoppable physical endurance; I can fight for days without food, sleep, or succumbing to fatal wounds.', th: 'ความอดทนทางร่างกายที่ไม่มีใครหยุดยั้งได้ของฉัน ฉันสามารถต่อสู้ได้เป็นวันๆโดยไม่ต้องกิน ไม่ต้องนอน หรือยอมพ่ายแพ้ต่อบาดแผลฉกรรจ์' }, stat: 'STR' },
      { text: { en: 'My vast, encyclopedic knowledge of history, arcane mysteries, and the structural weaknesses of every monster known.', th: 'ความรู้สารานุกรมอันกว้างขวางของฉันเกี่ยวกับประวัติศาสตร์ ความลับทางเวทมนตร์ และจุดอ่อนทางโครงสร้างของสัตว์ประหลาดทุกตัวที่เป็นที่รู้จัก' }, stat: 'INT' },
      { text: { en: 'My unwavering spiritual connection; I am closely guided by divine entities and intuitively sense incoming evil.', th: 'การเชื่อมต่อทางจิตวิญญาณที่ไม่สั่นคลอนของฉัน ฉันได้รับการนำทางอย่างใกล้ชิดจากสิ่งศักดิ์สิทธิ์และสัมผัสได้ถึงความชั่วร้ายที่กำลังเข้ามาโดยสัญชาตญาณ' }, stat: 'WIS' },
      { text: { en: 'My magnetic ability to inspire others; my mere presence emboldens terrified men and brings hope to desperate situations.', th: 'ความสามารถดึงดูดใจของฉันในการสร้างแรงบันดาลใจให้ผู้อื่น เพียงแค่มีฉันอยู่ก็ทำให้คนที่กำลังหวาดกลัวกล้าหาญขึ้นมา และนำความหวังมาสู่สถานการณ์ที่สิ้นหวังได้' }, stat: 'CHA' }
    ]
  },
  {
    id: 3,
    text: {
      en: 'A powerful monarch summons you and proposes an incredibly perilous, continent-spanning quest. In the throne room, you confidently reply by...',
      th: 'กษัตริย์ผู้ทรงอำนาจเรียกตัวคุณเข้าพบและเสนอภารกิจที่อันตรายสุดขีดซึ่งครอบคลุมทั่วทั้งทวีป ในห้องโถงบัลลังก์ คุณตอบกลับอย่างมั่นใจโดย...'
    },
    choices: [
      { text: { en: 'Elegantly dropping to one knee, offering a beautifully worded oath of fealty that leaves the entire court in awe.', th: 'คุกเข่าลงข้างหนึ่งอย่างสง่างาม กล่าวคำสาบานแห่งความจงรักภักดีด้วยถ้อยคำที่ไพเราะงดงาม ซึ่งทำให้ทั้งราชสำนักถึงกับตกตะลึง' }, stat: 'CHA' },
      { text: { en: 'Crossing my arms and firmly demanding half of the royal treasury upfront before I even consider risking my neck.', th: 'กอดอกยืนกรานเรียกร้องค่าจ้างครึ่งหนึ่งของคลังสมบัติล่วงหน้า ก่อนที่จะยอมเอาชีวิตไปเสี่ยง' }, stat: 'STR' },
      { text: { en: 'Requesting access to the royal archives to cross-reference maps, historical texts, and planetary alignments first.', th: 'ขอเข้าถึงหอจดหมายเหตุของราชวงศ์เพื่อตรวจสอบข้อมูล ข้ามข้อมูลแผนที่ ข้อความในประวัติศาสตร์ และการเรียงตัวของดาวเคราะห์ก่อน' }, stat: 'INT' },
      { text: { en: 'Accepting the parchment before the king finishes speaking, and turning to leave before anyone can even blink.', th: 'รับม้วนกระดาษมาก่อนที่กษัตริย์จะตรัสจบ และหันหลังกลับเพื่อออกไปก่อนที่ใครจะทันได้กะพริบตา' }, stat: 'AGI' }
    ]
  },
  {
    id: 4,
    text: {
      en: 'A shady merchant in the grand bazaar is trying to sell you a magical artifact, but the price is outrageously high. How do you handle the negotiation?',
      th: 'พ่อค้าที่มีลับลมคมในในตลาดนัดขนาดใหญ่กำลังพยายามขายวัตถุเวทมนตร์ให้คุณ แต่ราคานั้นแพงหูฉี่ คุณจะจัดการกับการเจรจาต่อรองอย่างไร?'
    },
    choices: [
      { text: { en: 'Engage in a drawn-out battle of wits, using compliments, veiled promises, and smooth talking to drop the price by half.', th: 'พูดคุยชิงไหวชิงพริบอย่างยาวนาน โดยใช้คำชม คำสัญญาแอบแฝง และคำพูดที่ลื่นไหลเพื่อลดราคาลงครึ่งหนึ่ง' }, stat: 'CHA' },
      { text: { en: 'Sense the subtle aura of the item, realize it’s partially defective, and sternly confront him with the truth to force a discount.', th: 'สัมผัสถึงออร่าแฝงของไอเท็ม ตระหนักว่ามันมีตำหนิบางส่วน และเผชิญหน้ากับเขาด้วยความจริงอย่างเข้มงวดเพื่อบังคับให้ลดราคา' }, stat: 'WIS' },
      { text: { en: 'Keep him entirely distracted with a conversation while I subtly palm the artifact and leave a fraction of the gold in its place.', th: 'เบี่ยงเบนความสนใจของเขาด้วยการสนทนาทั้งหมด ในขณะที่ฉันแอบหยิบวัตถุนั้นมาอย่างแนบเนียน และทิ้งเศษทองจำนวนหนึ่งไว้แทน' }, stat: 'AGI' },
      { text: { en: 'Slam my hand hard on his wooden stall, cracking the surface, and demand he give me a reasonable price immediately.', th: 'ทุบมือลงบนแผงไม้อย่างแรงจนพื้นผิวแตกร้าว และเรียกร้องให้เขาลดราคาให้ฉันในระดับที่สมเหตุสมผลเดี๋ยวนี้' }, stat: 'STR' }
    ]
  },
  {
    id: 5,
    text: {
      en: 'An arrogant noble aggressively challenges you to a duel at a grand masquerade ball after a spilled drink. The crowd goes silent.',
      th: 'ขุนนางผู้เย่อหยิ่งท้าดวลคุณอย่างก้าวร้าวในงานเต้นรำสวมหน้ากากอันยิ่งใหญ่หลังจากทำเครื่องดื่มหก ฝูงชนเงียบกริบ'
    },
    choices: [
      { text: { en: 'Notice he is heavily intoxicated, gently redirect his anger with a philosophical proverb, and calmly walk away without bloodshed.', th: 'สังเกตเห็นว่าเขากำลังเมาหนัก จึงเบี่ยงเบนความโกรธของเขาอย่างนุ่มนวลด้วยสุภาษิตเชิงปรัชญา และเดินจากไปอย่างใจเย็นโดยไม่มีการนองเลือด' }, stat: 'WIS' },
      { text: { en: 'Accept the duel, then flawlessly disarm him with a blindingly fast parry that sends his rapier flying across the ballroom.', th: 'ยอมรับการดวล จากนั้นก็ปลดอาวุธเขาอย่างไร้ที่ติด้วยการปัดป้องที่เร็วปานสายฟ้าแลบจนดาบของเขากระเด็นข้ามห้องโถงไป' }, stat: 'DEX' },
      { text: { en: 'Laugh charmingly, buy him another extremely expensive glass of wine, and turn the tense moment into a toast with the cheering crowd.', th: 'หัวเราะอย่างมีเสน่ห์ ซื้อไวน์แก้วใหม่ที่แพงมากๆให้เขา และเปลี่ยนช่วงเวลาตึงเครียดให้กลายเป็นการชนแก้วดื่มฉลองร่วมกับฝูงชนที่กำลังส่งเสียงเชียร์' }, stat: 'CHA' },
      { text: { en: 'Sidestep his clumsy initial lunge entirely, performing a perfect backflip to humiliate him while untouched.', th: 'ก้าวหลบการพุ่งโจมตีอันเงอะงะของเขาอย่างหมดจด พร้อมตีลังกากลับหลังอย่างสมบูรณ์แบบเพื่อหยามเกียรติเขาโดยไม่ถูกแตะต้องแม้แต่ปลายผม' }, stat: 'AGI' }
    ]
  },
  {
    id: 6,
    text: {
      en: 'The city guard detains your party at the gates, demanding an exorbitant "toll" that is clearly a bribe. Your coin purse is nearly empty. How do you resolve this situation?',
      th: 'ทหารยามของเมืองหยุดปาร์ตี้ของคุณไว้ที่ประตูเมือง โดยเรียกร้อง "ค่าผ่านทาง" ที่สูงลิ่วซึ่งเห็นได้ชัดว่าเป็นการติดสินบน กระเป๋าเงินของคุณแทบจะว่างเปล่า คุณจะแก้ไขสถานการณ์นี้อย่างไร?'
    },
    choices: [
      { text: { en: 'Step forward, crack my knuckles, and physically intimidate the guards until they back down out of sheer terror.', th: 'ก้าวไปข้างหน้า หักข้อนิ้ว และข่มขู่ยามด้วยท่าทีคุกคามจนกว่าพวกเขาจะยอมถอยด้วยความหวาดกลัวสุดขีด' }, stat: 'STR' },
      { text: { en: 'Flash a charismatic smile, compliment the captain\'s armor, and spin a tragic, believable tale to earn their pity.', th: 'ยิ้มอย่างมีเสน่ห์ ชื่นชมชุดเกราะของหัวหน้ายาม และแต่งเรื่องเล่าที่น่าเศร้าและสมจริงเพื่อให้พวกเขาเห็นใจ' }, stat: 'CHA' },
      { text: { en: 'Create a minor distraction nearby and slip through the open gates unnoticed while the guards investigate.', th: 'สร้างความวุ่นวายเล็กน้อยบริเวณใกล้เคียงและแอบผ่านประตูที่เปิดอยู่โดยไม่มีใครสังเกตเห็นขณะที่ยามไปตรวจสอบ' }, stat: 'AGI' },
      { text: { en: 'Calmly cite the kingdom\'s exact legal statutes and point out the severe penalties for extorting royal citizens.', th: 'อ้างถึงกฎหมายที่ถูกต้องของอาณาจักรอย่างใจเย็น และชี้ให้เห็นถึงบทลงโทษที่รุนแรงในการกรรโชกทรัพย์ประชาชนของกษัตริย์' }, stat: 'INT' }
    ]
  },

  // ---------------------------------------------------------
  // CHAPTER 2: THE WILDERNESS (การเดินทางและเผชิญหน้า)
  // ---------------------------------------------------------
  {
    id: 7,
    text: {
      en: 'After a long, grueling journey, you finally have a night to yourself at the bustling Golden Boar Tavern. How do you choose to spend your evening?',
      th: 'หลังจากการเดินทางที่ยาวนานและเหน็ดเหนื่อย ในที่สุดคุณก็มีเวลาพักผ่อนในค่ำคืนหนึ่งที่โรงเตี๊ยมหมูป่าทองคำที่แสนคึกคัก คุณเลือกที่จะใช้เวลายามเย็นของคุณอย่างไร?'
    },
    choices: [
      { text: { en: 'Challenge the largest patron in the room to an arm-wrestling contest, slamming my fist on the table to show dominance.', th: 'ท้าทายลูกค้าตัวใหญ่ที่สุดในร้านเพื่องัดข้อ โดยทุบกำปั้นลงบนโต๊ะเพื่อแสดงความเหนือกว่า' }, stat: 'STR' },
      { text: { en: 'Participate in a high-stakes knife-throwing game, relying on my perfect hand-eye coordination to win a pile of gold.', th: 'เข้าร่วมการแข่งขันปามีดที่มีเดิมพันสูง โดยพึ่งพาการทำงานประสานกันของสายตาและมือที่สมบูรณ์แบบเพื่อคว้าเงินก้อนโต' }, stat: 'DEX' },
      { text: { en: 'Retreat to a quiet, dimly lit corner with a dusty tome, eager to lose myself in tales of forgotten history and magic.', th: 'หลบไปที่มุมเงียบๆและมีแสงสลัวพร้อมกับหนังสือเก่าๆฝุ่นเขรอะ เพื่อดำดิ่งลงไปในเรื่องราวของประวัติศาสตร์และเวทมนตร์ที่ถูกลืม' }, stat: 'INT' },
      { text: { en: 'Take an instrument from the wall, stand on a table, and regale the entire tavern with an epic ballad of our recent triumphs.', th: 'หยิบเครื่องดนตรีจากผนัง ยืนบนโต๊ะ และให้ความบันเทิงกับคนทั้งโรงเตี๊ยมด้วยบทเพลงมหากาพย์เกี่ยวกับชัยชนะล่าสุดของเรา' }, stat: 'CHA' }
    ]
  },
  {
    id: 8,
    text: {
      en: 'You find a wounded wolf pup caught in a cruel hunter\'s snare in the frozen tundra. The pack is watching you suspiciously from the snowy ridge.',
      th: 'คุณพบลูกหมาป่าที่บาดเจ็บติดอยู่ในกับดักของนายพรานใจร้ายในทุ่งน้ำแข็ง ฝูงของมันกำลังจ้องมองคุณด้วยความระแวงจากสันเขาที่ปกคลุมด้วยหิมะ'
    },
    choices: [
      { text: { en: 'Approach slowly, lower my gaze to show non-aggression, and hum a calming forest tone before delicately untangling the snare.', th: 'เข้าใกล้ตัวช้าๆ ลดสายตาลงเพื่อแสดงว่าไม่เป็นศัตรู และฮัมเพลงทำนองป่าที่ผ่อนคลายก่อนจะแก้กับดักอย่างประณีต' }, stat: 'WIS' },
      { text: { en: 'Quickly and precisely slice the snare wire with a single flick of my wrist before the pup even realizes what happened.', th: 'ใช้การสะบัดข้อมือเพียงครั้งเดียวเพื่อตัดลวดกับดักอย่างรวดเร็วและแม่นยำก่อนที่ลูกหมาป่าจะทันรู้ตัวด้วยซ้ำ' }, stat: 'DEX' },
      { text: { en: 'Speak in a firm but soothing voice, gesturing to the watching pack that I bear them no ill will as I free their young.', th: 'พูดด้วยน้ำเสียงที่หนักแน่นแต่อ่อนโยน พร้อมกับส่งสัญญาณให้ฝูงที่เฝ้าดูอยู่รู้ว่าฉันไม่ได้มีเจตนาร้ายขณะที่ปล่อยลูกของพวกมัน' }, stat: 'CHA' },
      { text: { en: 'Dodge past the snarling pup\'s defensive snaps, using my reflexes to pin it safely down while I release the trap.', th: 'หลบการกัดเพื่อป้องกันตัวของลูกหมาป่าที่กำลังขู่คำราม โดยใช้ปฏิกิริยาตอบสนองเพื่อกดมันลงอย่างปลอดภัยในขณะที่ฉันปลดกับดัก' }, stat: 'AGI' }
    ]
  },
  {
    id: 9,
    text: {
      en: 'Your path is completely blocked by a collapsed bridge spanning a seemingly bottomless chasm. The wind howls violently. What is your method for crossing?',
      th: 'เส้นทางของคุณถูกขวางกั้นอย่างสมบูรณ์โดยสะพานที่พังทลาย ซึ่งทอดข้ามเหวลึกที่ดูเหมือนจะไม่มีก้นเหว เสียงลมพัดกรรโชกแรง คุณมีวิธีข้ามไปได้อย่างไร?'
    },
    choices: [
      { text: { en: 'Back up, focus my leg strength, and take a massive, gravity-defying running leap directly across the wide gap.', th: 'ถอยหลัง รวบรวมพลังที่ขา และพุ่งกระโดดวิ่งข้ามช่องว่างขนาดใหญ่นั้นเพื่อเอาชนะแรงโน้มถ่วง' }, stat: 'STR' },
      { text: { en: 'Nimblly walk across the single, swaying rope that remains connected, keeping my arms perfectly balanced.', th: 'เดินข้ามเชือกเส้นเดียวที่ยังคงเชื่อมต่ออยู่ซึ่งแกว่งไปมาอย่างคล่องแคล่ว โดยรักษาสมดุลของแขนอย่างสมบูรณ์แบบ' }, stat: 'AGI' },
      { text: { en: 'Throw a grappling hook with absolute precision to latch onto a sturdy gargoyle on the other side, then swing across.', th: 'ขว้างตะขอเกี่ยวด้วยความแม่นยำขั้นสุดเพื่อเกาะกับรูปปั้นการ์กอยล์ที่แข็งแรงบนอีกฝั่ง แล้วแกว่งตัวข้ามไป' }, stat: 'DEX' },
      { text: { en: 'Read an incantation to manipulate the air currents around me, allowing me to safely levitate over the abyss.', th: 'ร่ายเวทมนตร์เพื่อควบคุมกระแสลมรอบตัวฉัน ช่วยให้ฉันลอยข้ามหุบเหวไปได้อย่างปลอดภัย' }, stat: 'INT' }
    ]
  },
  {
    id: 10,
    text: {
      en: 'While attempting to sneak across a warlord\'s sleeping camp, an alert guard dog suddenly spots you and begins to bark loudly.',
      th: 'ขณะที่พยายามแอบผ่านค่ายที่หลับใหลของขุนศึก สุนัขเฝ้ายามที่ตื่นตัวตัวหนึ่งก็สังเกตเห็นคุณและเริ่มเห่าเสียงดัง'
    },
    choices: [
      { text: { en: 'Hold absolutely still, focus my aura to exude profound calmness, and telepathically soothe the animal back to sleep.', th: 'ยืนนิ่งสนิท รวบรวมออร่าของฉันเพื่อแผ่ความสงบอย่างลึกซึ้ง และปลอบประโลมสัตว์ตัวนั้นให้กลับไปหลับทางกระแสจิต' }, stat: 'WIS' },
      { text: { en: 'Flick a heavy piece of dried meat precisely into the thick bushes far away to instantly redirect its noise and attention.', th: 'ดีดเนื้อแห้งชิ้นหนักๆเข้าไปในพุ่มไม้หนาทึบที่อยู่ไกลออกไปอย่างแม่นยำ เพื่อเปลี่ยนทิศทางเสียงและความสนใจของมันในทันที' }, stat: 'DEX' },
      { text: { en: 'Sprint into the dark tree line with blinding speed before any groggy mercenaries can even crawl out of their tents.', th: 'วิ่งสปรินต์เข้าไปในแนวต้นไม้ที่มืดมิดด้วยความเร็วแสง ก่อนที่ทหารรับจ้างที่กำลังงัวเงียจะทันคลานออกมาจากเต็นท์ด้วยซ้ำ' }, stat: 'AGI' },
      { text: { en: 'Grapple the massive war hound to the ground instantly, clamping its jaw shut with sheer muscular strength until it submits.', th: 'พุ่งเข้าจับสุนัขสงครามร่างยักษ์กดลงกับพื้นทันที โดยใช้พละกำลังของกล้ามเนื้อล้วนๆบีบขากรรไกรของมันไว้จนกว่ามันจะยอมจำนน' }, stat: 'STR' }
    ]
  },
  {
    id: 11,
    text: {
      en: 'While traveling through the Whispering Woods, your party is ambushed by a towering, corrupted Treant. The beast roars, causing the ground to shake. What is your immediate reaction in combat?',
      th: 'ขณะเดินทางผ่านป่ากระซิบ ปาร์ตี้ของคุณถูกซุ่มโจมตีโดยทรีแอนท์ยักษ์ที่ถูกครอบงำด้วยความมืด สัตว์ร้ายคำรามจนแผ่นดินสั่นสะเทือน ปฏิกิริยาตอบสนองแรกของคุณในการต่อสู้คืออะไร?'
    },
    choices: [
      { text: { en: 'Let out a fierce battle cry and charge head-on to draw its aggression and protect my companions.', th: 'เปล่งเสียงร้องคำรามอย่างดุเดือดและพุ่งเข้าชนตรงๆเพื่อดึงความสนใจและปกป้องเพื่อนร่วมทางของฉัน' }, stat: 'STR' },
      { text: { en: 'Quickly scale the nearest tree to gain the high ground and rain down precise, deadly projectiles from afar.', th: 'ปีนขึ้นต้นไม้ที่ใกล้ที่สุดอย่างรวดเร็วเพื่อให้ได้เปรียบทางความสูงและระดมยิงขีปนาวุธที่แม่นยำและร้ายแรงจากระยะไกล' }, stat: 'DEX' },
      { text: { en: 'Immediately cast a wide protective barrier over the party to absorb the incoming shockwave and heal any injuries.', th: 'ร่ายบาเรียป้องกันขนาดใหญ่ครอบคลุมปาร์ตี้ทันทีเพื่อดูดซับแรงกระแทกและรักษาอาการบาดเจ็บ' }, stat: 'WIS' },
      { text: { en: 'Sing an ancient, soothing melody that resonates with the forest, attempting to calm the corrupted beast\'s rage.', th: 'ร้องเพลงทำนองโบราณอันเงียบสงบที่สอดคล้องกับผืนป่า เพื่อพยายามสงบความเกรี้ยวกราดของสัตว์ร้ายที่ถูกครอบงำ' }, stat: 'CHA' }
    ]
  },

  // ---------------------------------------------------------
  // CHAPTER 3: THE DUNGEON (ไคลแมกซ์และปริศนา)
  // ---------------------------------------------------------
  {
    id: 12,
    text: {
      en: 'Your quest leads you to the entrance of a pitch-black, sunless subterranean cavern. Visibility is zero. How do you safely lead the expedition forward?',
      th: 'ภารกิจของคุณนำพาคุณไปถึงปากทางเข้าถ้ำใต้ดินที่มืดมิดไร้แสงอาทิตย์ ทัศนวิสัยเป็นศูนย์ คุณจะนำคณะสำรวจเดินหน้าต่อไปอย่างปลอดภัยได้อย่างไร?'
    },
    choices: [
      { text: { en: 'Mutter an incantation to summon a glowing orb of pure magical light that floats above your head, illuminating the abyss.', th: 'ร่ายคาถาเพื่ออัญเชิญลูกแก้วแสงเวทมนตร์บริสุทธิ์ที่สว่างไสวให้ลอยอยู่เหนือหัวของคุณ เพื่อส่องสว่างหุบเหวลึก' }, stat: 'INT' },
      { text: { en: 'Close my eyes, plant my feet on the stone, and rely on sensing minute shifts in air currents and echoing water drops.', th: 'หลับตาลง วางเท้าให้มั่นบนหิน และพึ่งพาการสัมผัสการเปลี่ยนแปลงเล็กๆน้อยๆของกระแสลมและเสียงหยดน้ำที่สะท้อนมา' }, stat: 'WIS' },
      { text: { en: 'Take point, stepping incredibly lightly and using my sensitive fingertips to feel the walls and floor for concealed tripwires.', th: 'เป็นคนนำทาง โดยก้าวเท้าอย่างแผ่วเบาอย่างเหลือเชื่อ และใช้ปลายนิ้วที่อ่อนไหวสัมผัสกำแพงและพื้นเพื่อหาเส้นลวดกับดักที่ซ่อนอยู่' }, stat: 'DEX' },
      { text: { en: 'Light a massive wooden torch and boldly march forward, ready to smash any creature foolish enough to jump out.', th: 'จุดคบเพลิงไม้ขนาดใหญ่และเดินหน้าต่อไปอย่างกล้าหาญ พร้อมที่จะทุบทำลายสิ่งมีชีวิตใดๆก็ตามที่โง่พอจะกระโจนออกมา' }, stat: 'STR' }
    ]
  },
  {
    id: 13,
    text: {
      en: 'Deep within the Ruined Bastion, you discover an ornate, heavy iron door sealed by ancient mechanisms. You can hear faint, menacing whispers echoing from the other side. How do you bypass this obstacle?',
      th: 'ลึกลงไปในป้อมปราการที่พังทลาย คุณพบประตูล็อคเหล็กขนาดใหญ่ที่ถูกปิดผนึกด้วยกลไกโบราณ คุณได้ยินเสียงกระซิบอันน่าสะพรึงกลัวดังก้องมาจากอีกฝั่ง คุณจะผ่านอุปสรรคนี้ไปได้อย่างไร?'
    },
    choices: [
      { text: { en: 'Grip my weapon with both hands and smash the hinges with overwhelming force until the door gives way.', th: 'จับอาวุธด้วยสองมือและทุบบานพับด้วยพละกำลังมหาศาลจนกว่าประตูจะพังทลายลง' }, stat: 'STR' },
      { text: { en: 'Carefully study the runes etched into the metal to decipher the magical sequence required to unlock it safely.', th: 'ศึกษารูนที่สลักไว้บนโลหะอย่างระมัดระวังเพื่อถอดรหัสลำดับเวทมนตร์ที่ใช้ในการปลดล็อคอย่างปลอดภัย' }, stat: 'INT' },
      { text: { en: 'Pull out my lockpicking kit and meticulously disarm the internal tumblers without making a single sound.', th: 'หยิบชุดสะเดาะกุญแจออกมาและจัดการปลดสลักภายในอย่างพิถีพิถันโดยไม่ให้เกิดเสียงแม้แต่น้อย' }, stat: 'AGI' },
      { text: { en: 'Close my eyes, attune my senses to the lingering spirits around the door, and humbly ask them for safe passage.', th: 'หลับตาลง ปรับประสาทสัมผัสให้เข้ากับวิญญาณที่วนเวียนอยู่รอบประตู และขอร้องพวกเขาอย่างนอบน้อมเพื่อขอทางผ่าน' }, stat: 'WIS' }
    ]
  },
  {
    id: 14,
    text: {
      en: 'A labyrinth\'s corridor begins filling with toxic sand. The mechanism to open the escape door is on the ceiling, far out of reach.',
      th: 'ทางเดินของเขาวงกตเริ่มเต็มไปด้วยทรายพิษ กลไกในการเปิดประตูหนีภัยอยู่บนเพดานและอยู่ไกลเกินเอื้อม'
    },
    choices: [
      { text: { en: 'Connect to the earth elementals within the sand, whispering an ancient plea to slow the flow and harden the surface for a ramp.', th: 'เชื่อมต่อกับภูตแห่งดินในทราย และกระซิบคำวิงวอนโบราณเพื่อชะลอการไหลและทำให้พื้นผิวแข็งตัวเป็นทางลาด' }, stat: 'WIS' },
      { text: { en: 'Throw a perfectly balanced dagger to hit the microscopic pressure plate of the ceiling mechanism precisely from below.', th: 'ขว้างมีดสั้นที่สมดุลอย่างสมบูรณ์แบบเพื่อโจมตีแผ่นตราชูขนาดเล็กของกลไกบนเพดานจากเบื้องล่างอย่างแม่นยำ' }, stat: 'DEX' },
      { text: { en: 'Command the party with unyielding authority, organizing a rapid, systematic human pyramid to reach the mechanism before the sand rises.', th: 'ใช้วาทศิลป์และความเป็นผู้นำสั่งการอย่างเด็ดขาด ให้ทุกคนในปาร์ตี้ต่อตัวกันขึ้นไปจนถึงสวิตช์อย่างเป็นระบบและรวดเร็วก่อนที่ทรายจะท่วม' }, stat: 'CHA' },
      { text: { en: 'Use the rapidly falling sand piles as temporary stepping stones, parkouring erratically up the walls to hit the switch myself.', th: 'ใช้กองทรายที่ตกลงมาอย่างรวดเร็วเป็นแท่นเหยียบชั่วคราว กระโดดไต่กำแพงอย่างบ้าคลั่งเพื่อไปกดสวิตช์ด้วยตัวเอง' }, stat: 'AGI' }
    ]
  },
  {
    id: 15,
    text: {
      en: 'During a treacherous dungeon crawl, your closest friend triggers a dart trap and collapses from a potent, unknown neurotoxin. You have moments to save them. What is your plan?',
      th: 'ระหว่างการตะลุยดันเจี้ยนอันตราย เพื่อนสนิทของคุณไปเหยียบกับดักลูกดอกและล้มลงจากพิษต่อระบบประสาทร้ายแรงที่ไม่รู้จัก คุณมีเวลาแค่ไม่กี่นาทีในการช่วยพวกเขา คุณมีแผนอย่างไร?'
    },
    choices: [
      { text: { en: 'Examine the patient’s symptoms, consult my knowledge of local flora, and quickly grind nearby moss into a natural poultice.', th: 'ตรวจสอบอาการของผู้ป่วย ปรึกษาความรู้เกี่ยวกับพืชพรรณในท้องถิ่น และรีบบดตะไคร่น้ำใกล้ๆเพื่อทำเป็นยาพอกธรรมชาติ' }, stat: 'WIS' },
      { text: { en: 'Use blinding speed to strike specific nerve clusters, halting the venom\'s spread just long enough to apply a makeshift tourniquet.', th: 'ใช้วิชาสกัดจุดด้วยความเร็วแสงเพื่อหยุดการไหลเวียนของพิษในร่างกายชั่วคราว ซื้อเวลาจนกว่าจะใช้สายรัดห้ามเลือดชั่วคราวได้' }, stat: 'AGI' },
      { text: { en: 'Analyze the remaining dart\'s residue and immediately mix together a stabilizing chemical counter-agent using my supplies.', th: 'วิเคราะห์สารตกค้างบนลูกดอกที่เหลือ และผสมสารเคมีแก้พิษเพื่อรักษาสภาพร่างกายโดยใช้เสบียงที่ฉันมีอยู่ทันที' }, stat: 'INT' },
      { text: { en: 'Perform an emergency extraction using impossibly precise knife cuts to safely remove the poisoned flesh before it spreads.', th: 'ทำการผ่าตัดฉุกเฉินโดยใช้การกรีดมีดที่แม่นยำอย่างเหลือเชื่อเพื่อเฉือนเนื้อที่ถูกพิษออกไปอย่างปลอดภัยก่อนที่จะลาม' }, stat: 'DEX' }
    ]
  },
  {
    id: 16,
    text: {
      en: 'The spectral guardian of a mystic archive demands a toll not of gold, but of rare insight, before granting you access.',
      th: 'ผู้พิทักษ์วิญญาณแห่งหอจดหมายเหตุลึกลับเรียกร้องค่าผ่านทางที่ไม่ใช่ทองคำ แต่เป็นความเข้าใจที่ลึกซึ้งที่หาได้ยาก ก่อนที่จะอนุญาตให้คุณเข้าไปได้'
    },
    choices: [
      { text: { en: 'Offer a profound, universally true reflection on the nature of mortality and the cycle of souls that leaves the ghost pondering.', th: 'เสนอข้อคิดที่ลึกซึ้งและเป็นความจริงสากลเกี่ยวกับธรรมชาติของความตายและวัฏจักรของจิตวิญญาณ ซึ่งทำให้ผีตนนั้นต้องหยุดคิด' }, stat: 'WIS' },
      { text: { en: 'Distract the entity by demonstrating a mesmerizing, impossible sleight-of-hand trick, confusing its ethereal perception long enough to slip by.', th: 'เบี่ยงเบนความสนใจของวิญญาณด้วยการแสดงมายากลเปลี่ยนของด้วยมือที่สะกดสายตาและเป็นไปไม่ได้ เพื่อทำให้การรับรู้ทางวิญญาณของมันสับสนนานพอที่จะแอบผ่านไปได้' }, stat: 'DEX' },
      { text: { en: 'Recite a beautifully tragic poem about the guardian\'s forgotten mortal life, moving the restless spirit to tears.', th: 'ขับขานบทกวีที่ไพเราะแต่แสนเศร้าเกี่ยวกับชีวิตมนุษย์ที่ถูกลืมของผู้พิทักษ์ ซึ่งทำให้วิญญาณที่กระสับกระส่ายถึงกับหลั่งน้ำตา' }, stat: 'CHA' },
      { text: { en: 'Decipher the complex, multi-dimensional paradox etched onto the gate itself and speak the logical solution aloud.', th: 'ถอดรหัสความขัดแย้งหลายมิติอันซับซ้อนที่สลักอยู่บนประตู และพูดวิธีแก้ปัญหาที่เป็นเหตุเป็นผลออกมาดังๆ' }, stat: 'INT' }
    ]
  },
  {
    id: 17,
    text: {
      en: 'A terrifying dragon awakens and pins you down, clearly amused. It asks why it shouldn\'t simply eat you.',
      th: 'มังกรที่น่าสะพรึงกลัวตื่นขึ้นมาและกดคุณลงกับพื้น มันดูขบขันและถามว่าทำไมมันถึงไม่ควรกินคุณเสียดื้อๆ'
    },
    choices: [
      { text: { en: 'Sense its ancient loneliness and gently propose that devouring me provides a momentary meal, but conversing with me provides a lasting memory.', th: 'สัมผัสได้ถึงความเหงาอันเก่าแก่ของมัน และเสนออย่างนุ่มนวลว่าการกินฉันเข้าไปจะเป็นเพียงแค่มื้ออาหารชั่วคราว แต่การสนทนากับฉันจะมอบความทรงจำที่ยืนยาว' }, stat: 'WIS' },
      { text: { en: 'With a flick of my wrist, I perfectly bounce a blinding smoke pellet off a stalactite, using the split-second distraction to slide into a narrow crevice.', th: 'สะบัดข้อมือปาระเบิดควันให้ชิ่งกับหินย้อยอย่างแม่นยำเพื่อบดบังทัศนวิสัย และอาศัยเสี้ยววินาทีที่มันชะงัก สไลด์ตัวหลบเข้าไปในซอกหินแคบๆ' }, stat: 'DEX' },
      { text: { en: 'Boldly look into its fiery eyes, confidently flatter its majestic scales, and offer my services as its loyal herald to the human lands.', th: 'จ้องมองเข้าไปในดวงตาที่ลุกเป็นไฟของมันอย่างกล้าหาญ ยกยอเกล็ดอันสง่างามของมันอย่างมั่นใจ และเสนอตัวเป็นผู้ประกาศที่ภักดีเพื่อส่งสารไปยังดินแดนมนุษย์' }, stat: 'CHA' },
      { text: { en: 'Quickly recall the draconic customs of parley and invoke the Rite of the Silver Tongue, legally forcing it to hear my case.', th: 'นึกถึงธรรมเนียมการเจรจาของมังกรอย่างรวดเร็ว และอ้างสิทธิ์ในพิธีเจรจาต่อรองด้วยวาทศิลป์ ซึ่งเป็นการบังคับทางกฎหมายให้มันต้องฟังคำแก้ต่างของฉัน' }, stat: 'INT' }
    ]
  },

  // ---------------------------------------------------------
  // CHAPTER 4: THE LEGACY (บทสรุป)
  // ---------------------------------------------------------
  {
    id: 18,
    text: {
      en: 'When the dust has settled, the wars are won, and your earthly journey comes to an end... how do you truly want the world to remember your name?',
      th: 'เมื่อฝุ่นควันจางลง สงครามได้สิ้นสุดลงด้วยชัยชนะ และการเดินทางบนโลกของคุณมาถึงจุดจบ... คุณอยากให้โลกจดจำชื่อของคุณจริงๆว่าอย่างไร?'
    },
    choices: [
      { text: { en: 'As a fearless, indomitable champion whose mighty deeds and strength literally re-shaped mountains and kingdoms.', th: 'ในฐานะแชมเปี้ยนที่ไร้ความกลัวและไม่มีใครเอาชนะได้ ผู้ซึ่งมีความดีความชอบและความแข็งแกร่งมหาศาลที่เปลี่ยนแปลกรูปร่างของภูเขาและอาณาจักรอย่างแท้จริง' }, stat: 'STR' },
      { text: { en: 'As a supreme, all-knowing sage whose recorded spells and philosophies became the foundation of modern civilization.', th: 'ในฐานะปราชญ์ผู้รอบรู้และปกครองสูงสุด ซึ่งคาถาและปรัชญาที่ถูกบันทึกไว้ได้กลายมาเป็นรากฐานของอารยธรรมสมัยใหม่' }, stat: 'INT' },
      { text: { en: 'As a romanticized legend, immortalized forever through the taverns and theaters by the most beautiful songs ever sung.', th: 'ในฐานะตำนานที่แสนโรแมนติก ซึ่งถูกทำให้เป็นอมตะตลอดไปตามโรงเตี๊ยมและโรงละครด้วยบทเพลงที่ไพเราะที่สุดเท่าที่เคยมีการร้องขานมา' }, stat: 'CHA' },
      { text: { en: 'I do not want to be remembered. I prefer to fade into the shadows, remaining an elusive ghost that protected them all.', th: 'ฉันไม่อยากเป็นที่จดจำ ฉันชอบที่จะเลือนหายไปในเงามืด และยังคงเป็นวิญญาณที่ไม่มีใครจับต้องได้ซึ่งคอยปกป้องพวกเขาตลอดมา' }, stat: 'AGI' }
    ]
  }
];