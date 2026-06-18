"""汉字乐园数据生成脚本 - 生成完整的前端应用"""
import json
import os

CHARS = [
    # 自然 (13)
    ("日", "rì", "Sun", "自然", "☀️", "太阳公公每天早早起床，照亮大地。圆圆的太阳像大火球，带来温暖和光明。", "Grandpa Sun wakes early each day, lighting up the earth. The round sun is like a big fireball bringing warmth and light.", "竖、横折、横、横", ["日出 rì chū · Sunrise", "生日 shēng rì · Birthday"]),
    ("月", "yuè", "Moon", "自然", "🌙", "夜晚，弯弯的月亮挂在天空像一艘小船，小星星们围着月亮姐姐眨眼睛。", "At night the crescent moon hangs like a small boat. Little stars twinkle around Sister Moon.", "撇、横折钩、横、横", ["月亮 yuè liàng · Moon", "月饼 yuè bǐng · Mooncake"]),
    ("山", "shān", "Mountain", "自然", "⛰️", "高高的山峰直插云霄，小松鼠住在山上，每天在树林里跳来跳去。", "Tall peaks reach into the clouds. A little squirrel lives on the mountain, jumping among trees.", "竖、竖折、竖", ["火山 huǒ shān · Volcano", "爬山 pá shān · Climbing"]),
    ("水", "shuǐ", "Water", "自然", "💧", "哗啦啦小溪在唱歌，水滴从高处落下溅起美丽水花，小鱼在水里游来游去。", "Splash splash the stream sings, water drops fall high making splashes, little fish swims happily.", "竖钩、横撇、撇、捺", ["水果 shuǐ guǒ · Fruit", "喝水 hē shuǐ · Drink water"]),
    ("火", "huǒ", "Fire", "自然", "🔥", "篝火晚会开始了！火焰跳动像在跳舞。火可以做饭取暖，但小朋友不能玩火！", "Campfire party begins! Flames dance. Fire cooks and keeps warm, but kids must never play with fire!", "点、撇、撇、捺", ["火车 huǒ chē · Train", "烟火 yān huǒ · Fireworks"]),
    ("天", "tiān", "Sky", "自然", "🌤️", "蓝蓝的天空飘着白云，小鸟在天空中自由飞翔。天空真大真美啊！", "White clouds float in blue sky, birds fly freely. The sky is so big and beautiful!", "横、横、撇、捺", ["天空 tiān kōng · Sky", "今天 jīn tiān · Today"]),
    ("云", "yún", "Cloud", "自然", "☁️", "白云像棉花糖飘在天上。乌云来了就要下雨，云朵变化无穷真有趣！", "White clouds float like cotton candy. When dark clouds come rain follows. Clouds change endlessly!", "横、横、撇折、点", ["白云 bái yún · White cloud", "云彩 yún cǎi · Clouds"]),
    ("雨", "yǔ", "Rain", "自然", "🌧️", "小雨滴滴答答落下来，花儿喝足了水开得更鲜艳。下雨天可以踩水洼，好开心！", "Light rain falls patter-patter. Flowers drink enough water and bloom brighter. Splashing puddles is fun!", "横、竖、横折钩、竖、点、点、点、点", ["下雨 xià yǔ · Rain", "雨伞 yǔ sǎn · Umbrella"]),
    ("雪", "xuě", "Snow", "自然", "❄️", "冬天来了，白雪飘下来，大地盖上白色棉被。小朋友堆雪人打雪仗，好开心！", "Winter arrives, snowflakes fall, earth covers with white quilt. Kids build snowmen and snowball fights!", "横、点、横撇、竖、点、点、点、点、横折、横、横", ["下雪 xià xuě · Snow", "雪人 xuě rén · Snowman"]),
    ("风", "fēng", "Wind", "自然", "🌬️", "春风吹柳树摇；夏风吹真凉爽；秋风起落叶飞；冬风吹有点冷。", "Spring wind blows willows; summer wind so cool; autumn wind sends leaves flying; winter wind is cold.", "撇、横折弯钩、撇、点", ["大风 dà fēng · Strong wind", "风筝 fēng zheng · Kite"]),
    ("海", "hǎi", "Sea", "自然", "🌊", "大海蓝蓝一望无际。海浪一层一层涌上来，小螃蟹在沙滩上爬来爬去。", "The sea is blue stretching far. Waves roll in one after another, little crabs crawl on the beach.", "点、点、提、撇、横、竖折、横折钩、点、横、点", ["大海 dà hǎi · Sea", "海边 hǎi biān · Seaside"]),
    ("河", "hé", "River", "自然", "🏞️", "小河弯弯曲曲穿过山谷，鱼儿在河里游泳，青蛙在岸边呱呱叫。", "A small river winds through the valley. Fish swim, frogs croak on the bank.", "点、点、提、横、竖、横折、横、竖钩", ["小河 xiǎo hé · River", "河水 hé shuǐ · River water"]),
    ("星", "xīng", "Star", "自然", "⭐", "夜晚天空挂满小星星，一闪一闪像小朋友的眼睛。北斗七星像一把勺子。", "Night sky filled with little stars twinkling like children's eyes. The Big Dipper looks like a ladle.", "竖、横折、横、横、撇、横、横、竖、横", ["星星 xīng xing · Star", "火星 huǒ xīng · Mars"]),
    # 植物 (6)
    ("花", "huā", "Flower", "植物", "🌸", "春天来了花儿开了。五颜六色真美丽，蝴蝶在花丛中飞舞。", "Spring comes flowers bloom. Colorful and beautiful, butterflies dance among blossoms.", "横、竖、竖、撇、竖、撇、竖弯钩", ["花朵 huā duǒ · Flower", "花园 huā yuán · Garden"]),
    ("草", "cǎo", "Grass", "植物", "🌱", "绿油油的小草从土里探出头来，迎接春天的到来。", "Green grass peeks out from the soil, welcoming spring's arrival.", "横、竖、竖、竖、横折、横、横、横、竖", ["草地 cǎo dì · Lawn", "小草 xiǎo cǎo · Little grass"]),
    ("树", "shù", "Tree", "植物", "🌳", "大树枝叶茂盛，夏天为我们遮阳。树上住着小鸟一家，叽叽喳喳唱着歌。", "Big trees have lush leaves, giving us summer shade. A bird family lives in the tree, chirping songs.", "横、竖、撇、点、横撇、捺、横、竖钩", ["大树 dà shù · Big tree", "树叶 shù yè · Leaves"]),
    ("林", "lín", "Forest", "植物", "🌲", "两棵树并排站在一起就是'林'。树林里住着小松鼠、小兔子和梅花鹿。", "Two trees side by side make a 'forest'. Little squirrels, bunnies and deer live in the woods.", "横、竖、撇、点、横、竖、撇、捺", ["树林 shù lín · Woods", "森林 sēn lín · Forest"]),
    ("叶", "yè", "Leaf", "植物", "🍃", "秋天到树叶变黄变红，一片一片飘下来。落在地上像铺了彩色地毯。", "Autumn arrives, leaves turn yellow and red, falling one by one. They cover the ground like a colorful carpet.", "竖、横折、横、横、竖", ["树叶 shù yè · Leaves", "红叶 hóng yè · Red leaves"]),
    ("苗", "miáo", "Sprout", "植物", "🌾", "禾苗是水稻小的时候。农民伯伯在田里种下秧苗，等它们长大变成稻谷。", "Rice seedlings are young rice plants. Farmers plant them in fields, waiting for them to grow into rice.", "横、竖、竖、竖、横折、横、竖", ["禾苗 hé miáo · Sprout", "树苗 shù miáo · Sapling"]),
    # 动物 (17)
    ("马", "mǎ", "Horse", "动物", "🐴", "小马在草原上奔跑，鬃毛随风飘扬。小马真勇敢，跑得真快！", "Little horse gallops across grassland, mane flowing in wind. Brave and fast!", "横折、竖折折钩、横", ["马上 mǎ shàng · Immediately", "小马 xiǎo mǎ · Pony"]),
    ("牛", "niú", "Cow", "动物", "🐮", "老牛在田里辛勤耕地。牛是农民伯伯的好帮手，牛奶也是牛送给我们的礼物。", "Old ox plows fields diligently. Ox is farmer's helper, milk is ox's gift to us.", "撇、横、横、竖", ["牛奶 niú nǎi · Milk", "小牛 xiǎo niú · Calf"]),
    ("鱼", "yú", "Fish", "动物", "🐟", "小鱼在水里自由自在地游来游去，吐着泡泡。", "Little fish swims freely in water, blowing bubbles.", "撇、横撇、竖、横折、横、竖、横、横", ["金鱼 jīn yú · Goldfish", "钓鱼 diào yú · Fishing"]),
    ("鸟", "niǎo", "Bird", "动物", "🐦", "小鸟在树枝上唱歌，叽叽喳喳真好听。小鸟是森林里的歌唱家！", "Little bird sings on branch chirping beautifully. Bird is singer of the forest!", "撇、横折钩、点、竖折折钩、横", ["小鸟 xiǎo niǎo · Little bird", "飞鸟 fēi niǎo · Flying bird"]),
    ("羊", "yáng", "Sheep", "动物", "🐑", "小绵羊的毛白白软软像天上的白云。小羊最爱吃青草，咩咩地叫。", "Little sheep wool is white and soft like clouds. Sheep love green grass and bleat baa.", "点、撇、横、横、横、竖", ["小羊 xiǎo yáng · Lamb", "羊毛 yáng máo · Wool"]),
    ("猫", "māo", "Cat", "动物", "🐱", "小猫咪咪叫，喜欢追毛线球。猫跳得高跑得飞快，夜晚眼睛会发光。", "Little cat meows, loves chasing yarn balls. Cats jump high, run fast, eyes glow at night.", "撇、横撇、撇、横、竖、竖、竖、横折、横、竖、横", ["小猫 xiǎo māo · Kitten", "猫咪 māo mī · Kitty"]),
    ("狗", "gǒu", "Dog", "动物", "🐶", "小狗汪汪叫，摇着尾巴真可爱。狗狗是人类最忠实的朋友，会帮主人看家。", "Puppy barks wagging tail — so cute. Dogs are man's most loyal friends guarding homes.", "撇、横撇、撇、撇、横折钩、竖、横折、横", ["小狗 xiǎo gǒu · Puppy", "狗狗 gǒu gǒu · Doggie"]),
    ("兔", "tù", "Rabbit", "动物", "🐰", "小兔子有长长的耳朵，红红的眼睛，一蹦一跳真可爱。最爱吃胡萝卜！", "Little rabbit has long ears and red eyes, hopping so cute. Loves carrots most!", "撇、横撇、竖、横折、横、撇、竖弯钩、点", ["兔子 tù zi · Rabbit", "白兔 bái tù · White rabbit"]),
    ("鸡", "jī", "Chicken", "动物", "🐔", "公鸡每天早早打鸣叫醒大家。母鸡下蛋孵小鸡，黄黄的小鸡好可爱。", "Rooster crows early to wake everyone. Hens lay eggs hatching yellow little chicks — so cute!", "撇、点、点、撇、撇、横折钩、点、竖折折钩", ["小鸡 xiǎo jī · Chick", "鸡蛋 jī dàn · Egg"]),
    ("虫", "chóng", "Insect", "动物", "🐛", "毛毛虫在树叶上爬呀爬，最后变成美丽的蝴蝶。小蚂蚁是勤劳的搬运工。", "Caterpillar crawls on leaf and finally becomes beautiful butterfly. Ants are hardworking porters.", "竖、横折、横、竖、横、点", ["小虫 xiǎo chóng · Little bug", "毛毛虫 máo máo chóng · Caterpillar"]),
    ("象", "xiàng", "Elephant", "动物", "🐘", "大象有长长的鼻子和大大的耳朵。它能搬木头，还能给人们表演杂技。", "Elephant has long trunk and big ears. It moves logs and performs acrobatics for people.", "撇、横撇、竖、横折、横、撇、弯钩、撇、撇、撇、捺", ["大象 dà xiàng · Elephant", "象牙 xiàng yá · Ivory"]),
    ("龙", "lóng", "Dragon", "动物", "🐉", "龙是中国传说中的神兽，能腾云驾雾还能飞。我们都是龙的传人！", "Dragon is magical Chinese creature. It rides clouds and flies. We are descendants of the dragon!", "横、撇、竖弯钩、撇、点", ["飞龙 fēi lóng · Flying dragon", "恐龙 kǒng lóng · Dinosaur"]),
    ("虎", "hǔ", "Tiger", "动物", "🐯", "老虎是百兽之王，身上有黑色的条纹。老虎虽然凶猛，但也是保护动物哦！", "Tiger is king of beasts with black stripes. Though fierce, tigers are protected animals!", "竖、横、横撇、撇、横、竖弯钩、撇、横折弯钩", ["老虎 lǎo hǔ · Tiger", "小虎 xiǎo hǔ · Little tiger"]),
    ("龟", "guī", "Turtle", "动物", "🐢", "小乌龟背着硬硬的壳，遇到危险就缩进去。乌龟虽然爬得慢，但很稳很聪明。", "Little turtle carries hard shell, hiding inside when danger comes. Slow but steady and smart.", "撇、横撇、竖、横折、横、横、竖弯钩", ["乌龟 wū guī · Turtle", "海龟 hǎi guī · Sea turtle"]),
    ("鹅", "é", "Goose", "动物", "🦢", "大白鹅在池塘里游泳，用长脖子优雅地梳理羽毛。鹅鹅鹅，曲项向天歌！", "Big white goose swims in pond using long neck to groom feathers gracefully. Goose goose goose!", "撇、横、竖、横、竖、横折钩、撇、横折钩、点、竖折折钩", ["白鹅 bái é · White goose", "天鹅 tiān é · Swan"]),
    ("鸭", "yā", "Duck", "动物", "🦆", "小鸭子黄黄的，扁扁的嘴巴喜欢在水里游泳，嘎嘎地叫。", "Little ducks are yellow with flat mouths, love swimming in water quacking quack!", "竖、横折、横、横、竖、撇、横折钩、点、竖折折钩", ["小鸭 xiǎo yā · Duckling", "鸭子 yā zi · Duck"]),
    ("猪", "zhū", "Pig", "动物", "🐷", "小胖猪爱吃爱睡，圆滚滚真可爱。小猪可以养得白白胖胖，但是小朋友不可以懒！", "Little pig loves eating and sleeping, round and cute. Pigs can grow white and fat, but kids must not be lazy!", "撇、横撇、撇、横、竖、横、撇、竖、横折、横、横", ["小猪 xiǎo zhū · Piglet", "猪肉 zhū ròu · Pork"]),
    # 身体 (8)
    ("人", "rén", "Person", "身体", "👤", "一个小朋友张开双臂大步向前走。每个人都是独一无二的，都是最特别的。", "A child spreads arms walking forward. Everyone is unique and very special.", "撇、捺", ["大人 dà rén · Adult", "人们 rén men · People"]),
    ("口", "kǒu", "Mouth", "身体", "👄", "小嘴巴真能干！吃饭说话唱歌都靠它。我们用嘴巴说'你好'。", "Little mouth so capable! Eating talking singing all need it. We use mouth to say hello!", "竖、横折、横", ["口水 kǒu shuǐ · Saliva", "门口 mén kǒu · Doorway"]),
    ("目", "mù", "Eye", "身体", "👁️", "明亮的眼睛让我们看到美丽的世界。我们用眼睛看花看鸟看星星。", "Bright eyes let us see the beautiful world. We see flowers, birds and stars with our eyes.", "竖、横折、横、横、横", ["目光 mù guāng · Gaze", "节目 jié mù · Program"]),
    ("手", "shǒu", "Hand", "身体", "✋", "小手真灵巧，会画画会写字会做手工。我们用小手帮助别人。", "Little hands are clever. They draw, write and make crafts. We use little hands to help others.", "撇、横、横、竖钩", ["手机 shǒu jī · Phone", "洗手 xǐ shǒu · Wash hands"]),
    ("耳", "ěr", "Ear", "身体", "👂", "两只耳朵在头的两边，帮助我们听到小鸟唱歌、听到妈妈的声音。", "Two ears on both sides of head help us hear birds singing and mom's voice.", "横、竖、竖、横、横、横", ["耳朵 ěr duo · Ear", "耳机 ěr jī · Headphones"]),
    ("足", "zú", "Foot", "身体", "🦶", "两只脚帮我们走路、跑步、跳跃。小朋友光着脚踩在沙滩上，痒痒的好舒服！", "Two feet help us walk, run and jump. Children walking barefoot on sand feel ticklish!", "竖、横折、横、竖、横、撇、捺", ["足球 zú qiú · Football", "远足 yuǎn zú · Hiking"]),
    ("心", "xīn", "Heart", "身体", "❤️", "心脏在胸口跳动，把爱送给每一个人。我们要用心做每一件事，用心爱每个人。", "Heart beats in chest sending love to everyone. Do things with heart and love everyone sincerely.", "点、斜钩、点、点", ["小心 xiǎo xīn · Careful", "开心 kāi xīn · Happy"]),
    ("头", "tóu", "Head", "身体", "🧠", "头是身体的总司令，装着眼睛鼻子嘴巴还有大脑。勤动脑筋才能更聪明！", "Head is the body's commander, holding eyes, nose, mouth and brain. Think hard to get smarter!", "点、点、横、撇、点、撇、横、撇、捺", ["头发 tóu fa · Hair", "点头 diǎn tóu · Nod"]),
    # 数字 (12)
    ("一", "yī", "One", "数字", "1️⃣", "一个太阳，一个月亮，一个小朋友。一是一切数字的开始。", "One sun, one moon, one child. One is the beginning of all numbers.", "横", ["一个 yī gè · One", "第一 dì yī · First"]),
    ("二", "èr", "Two", "数字", "2️⃣", "两只小鸟站在树枝上，两只蝴蝶在花丛中飞舞。我有两只手两只眼睛。", "Two little birds sit on branch, two butterflies dance among flowers. I have two hands and two eyes.", "横、横", ["二月 èr yuè · February", "十二 shí èr · Twelve"]),
    ("三", "sān", "Three", "数字", "3️⃣", "三只小猪盖房子，三只小熊在跳舞。三角形有三条边。", "Three little pigs build houses, three little bears dance. Triangle has three sides.", "横、横、横", ["三月 sān yuè · March", "三角形 sān jiǎo xíng · Triangle"]),
    ("四", "sì", "Four", "数字", "4️⃣", "一年四季春夏秋冬，四方东南西北。四四方方的窗户让阳光照进来。", "Four seasons spring summer autumn winter, four directions. Square windows let sunshine in.", "竖、横折、撇、竖弯、横", ["四季 sì jì · Four seasons", "四方 sì fāng · Four directions"]),
    ("五", "wǔ", "Five", "数字", "5️⃣", "五角星闪闪发光，一只手有五根手指。五星红旗是我们的国旗。", "Five-pointed stars sparkle. A hand has five fingers. Five-star red flag is our national flag.", "横、竖、横折、横", ["五月 wǔ yuè · May", "五角星 wǔ jiǎo xīng · Star"]),
    ("六", "liù", "Six", "数字", "6️⃣", "六一儿童节是小朋友的节日！蜜蜂有六条腿，雪花有六个角。", "June 1 Children's Day is holiday for kids! Bees have six legs, snowflakes have six corners.", "点、横、撇、点", ["六月 liù yuè · June", "六一 liù yī · June 1"]),
    ("七", "qī", "Seven", "数字", "7️⃣", "一周有七天。七夕节是牛郎织女相会的日子。彩虹有七种颜色！", "A week has seven days. Qi Xi festival is when cowherd and weaver girl meet. Rainbow has seven colors!", "横、竖弯钩", ["七月 qī yuè · July", "七天 qī tiān · Seven days"]),
    ("八", "bā", "Eight", "数字", "8️⃣", "八仙过海各显神通。蜘蛛有八条腿。八月十五是中秋节，月圆人团圆！", "Eight immortals cross sea each showing their power. Spiders have eight legs. Mid-Autumn is August 15!", "撇、捺", ["八月 bā yuè · August", "八十 bā shí · Eighty"]),
    ("九", "jiǔ", "Nine", "数字", "9️⃣", "九是最大的数字，代表很久很久。九九重阳节，我们要尊敬老人！", "Nine is the largest digit representing 'long long'. Double Nine festival — respect the elderly!", "撇、横折弯钩", ["九月 jiǔ yuè · September", "九十 jiǔ shí · Ninety"]),
    ("十", "shí", "Ten", "数字", "🔟", "十个手指十个脚趾。十字路是两条路交叉的地方。十全十美是最好的祝福！", "Ten fingers and ten toes. Crossroad is where two roads cross. Perfect and complete — best blessing!", "横、竖", ["十月 shí yuè · October", "十字 shí zì · Cross"]),
    ("百", "bǎi", "Hundred", "数字", "💯", "考试得一百分是最棒的！一百个小朋友一起做游戏真热闹！", "Getting 100 on exams is best! A hundred kids playing together is so lively!", "横、撇、竖、横折、横、横", ["一百 yī bǎi · One hundred", "百姓 bǎi xìng · People"]),
    ("千", "qiān", "Thousand", "数字", "🔢", "一、十、百、千、万。我们的国家有五千年的历史文化，真是了不起！", "One, ten, hundred, thousand, ten thousand. Our country has 5000 years of history and culture — amazing!", "撇、横、竖", ["一千 yī qiān · One thousand", "千万 qiān wàn · Ten million"]),
    # 方位 (11)
    ("上", "shàng", "Up", "方位", "⬆️", "小鸟飞上天空，气球飘上云端。我们上楼、上山、向上看！", "Bird flies up to sky, balloons float up to clouds. We go up, climb up, look up!", "竖、横、横", ["上学 shàng xué · Go to school", "上面 shàng miàn · Above"]),
    ("下", "xià", "Down", "方位", "⬇️", "雨滴从天上落下来，树叶从树上飘下来。我们下楼下山往下看。", "Rain drops fall from sky, leaves drift down from trees. We go down and look down.", "横、竖、点", ["下雨 xià yǔ · Rain", "下面 xià miàn · Below"]),
    ("中", "zhōng", "Middle", "方位", "🎯", "中国是我们的国家。'中'字就像一支箭射中了靶心。", "China is our country. The character 中 looks like an arrow hitting the bullseye.", "竖、横折、横、竖", ["中国 zhōng guó · China", "中午 zhōng wǔ · Noon"]),
    ("左", "zuǒ", "Left", "方位", "⬅️", "左手举起来！左边有一棵大树，树上有小鸟在唱歌。", "Raise your left hand! On the left there's a big tree with birds singing.", "横、撇、横、竖、横", ["左右 zuǒ yòu · Left-right", "左手 zuǒ shǒu · Left hand"]),
    ("右", "yòu", "Right", "方位", "➡️", "右手会写字吃饭。向右转可以看到大海，看到美丽的夕阳。", "Right hand writes and eats. Turn right and see the sea and beautiful sunset.", "横、撇、竖、横折、横", ["右手 yòu shǒu · Right hand", "右边 yòu bian · Right side"]),
    ("前", "qián", "Front", "方位", "⏩", "前面有一条大路通向前方。小朋友排好队向前走，一二一，齐步走！", "Ahead there's a big road leading forward. Children line up and walk forward — one two one!", "点、撇、横、竖、横折钩、横、横、竖、竖钩", ["前面 qián miàn · Front", "向前 xiàng qián · Forward"]),
    ("后", "hòu", "Behind", "方位", "⏪", "排在后面的小朋友不要着急，慢慢走也能到终点。后面有一只小兔子在追！", "Kids at the back, don't worry — slow walk can still reach the end. A bunny is chasing behind!", "撇、撇、横、竖、横折、横", ["后面 hòu miàn · Behind", "以后 yǐ hòu · Later"]),
    ("东", "dōng", "East", "方位", "🌅", "东方升起太阳。东海的日出非常美丽。东方之珠指的是香港！", "Sun rises in the east. Sunrise over East Sea is beautiful. Pearl of Orient refers to Hong Kong!", "横、撇折、竖钩、撇、点", ["东方 dōng fāng · East", "东西 dōng xī · Things"]),
    ("西", "xī", "West", "方位", "🌇", "太阳从西边落下。西瓜是夏天最甜的水果！西边有美丽的夕阳。", "Sun sets in west. Watermelon is sweetest summer fruit! West has beautiful sunsets.", "横、竖、横折、撇、竖折、横", ["西瓜 xī guā · Watermelon", "西方 xī fāng · West"]),
    ("南", "nán", "South", "方位", "🏖️", "南方温暖，有椰子树和大海。南极住着企鹅，是冰天雪地的世界。", "South is warm with coconut trees and sea. South Pole has penguins, a world of ice and snow.", "横、竖、竖、横折钩、点、撇、横、横、竖", ["南方 nán fāng · South", "南极 nán jí · South Pole"]),
    ("北", "běi", "North", "方位", "❄️", "北方冬天会下雪，可以堆雪人打雪仗。北京是中国的首都。", "North has snow in winter — build snowmen and snowball fights. Beijing is China's capital.", "竖、横、提、撇、竖弯钩", ["北京 běi jīng · Beijing", "北方 běi fāng · North"]),
    # 形容词 (15)
    ("大", "dà", "Big", "形容词", "🐘", "大象是陆地上最大的动物，它有长长的鼻子和大大的耳朵。大象说：'我是大大大！'", "Elephant is largest land animal with long trunk and big ears. Elephant says: I am big big big!", "横、撇、捺", ["大象 dà xiàng · Elephant", "大家 dà jiā · Everyone"]),
    ("小", "xiǎo", "Small", "形容词", "🐜", "小蚂蚁虽然很小，但能搬动比自己重很多倍的食物。小蚂蚁说：'我虽然小，但我很厉害！'", "Though the ant is small, it carries food many times heavier than itself. Ant says: I may be small but amazing!", "竖钩、点、点", ["小鸟 xiǎo niǎo · Little bird", "小朋友 xiǎo péng yǒu · Child"]),
    ("多", "duō", "Many", "形容词", "✨", "天上的星星数不清有多少。图书馆有好多好多书，读也读不完！", "Sky's stars are too many to count. Library has many, many books — more than we can finish!", "撇、横撇、点、撇、横撇、点", ["很多 hěn duō · Many", "多少 duō shǎo · How many"]),
    ("少", "shǎo", "Few", "形容词", "🌿", "小朋友要少吃糖果多吃水果。少量的东西也要珍惜。", "Kids should eat less candy and more fruit. Even small amounts must be valued.", "竖、撇、点、撇", ["多少 duō shǎo · How much", "很少 hěn shǎo · Few"]),
    ("好", "hǎo", "Good", "形容词", "👍", "好孩子要听妈妈的话。'你好！'是最温暖的问候。好的开始是成功的一半！", "Good children listen to mom. Hello! is warmest greeting. Good start is half of success!", "撇点、撇、横、横撇、竖钩、横", ["你好 nǐ hǎo · Hello", "好人 hǎo rén · Good person"]),
    ("高", "gāo", "Tall/High", "形容词", "🏔️", "长颈鹿真高，脑袋伸进云里。高高的大楼一层一层往上叠，像天上的城市。", "Giraffes are so tall heads reach clouds. Tall buildings stack floor by floor like sky cities.", "点、横、竖、横折、横、竖、横折钩、竖、横折、横", ["高兴 gāo xìng · Happy", "高大 gāo dà · Tall"]),
    ("美", "měi", "Beautiful", "形容词", "🌺", "花朵真美丽！妈妈是最美的人。美丽的彩虹挂在雨后的天空。", "Flowers are so beautiful! Mom is the prettiest person. A beautiful rainbow hangs in sky after rain.", "点、撇、横、横、竖、横、横、撇、捺", ["美丽 měi lì · Beautiful", "美好 měi hǎo · Wonderful"]),
    ("新", "xīn", "New", "形容词", "🆕", "新年到，穿新衣戴新帽。新的一天新的开始！小朋友喜欢一切新鲜的事物。", "New Year arrives, wear new clothes and hats. New day new start! Kids love everything new.", "点、横、点、撇、横、横、竖钩、撇、点、撇、撇、横、竖", ["新年 xīn nián · New Year", "新鲜 xīn xiān · Fresh"]),
    ("白", "bái", "White", "形容词", "⚪", "白云、白雪、白棉花。小白兔有白白的毛和红红的眼睛，真可爱！", "White clouds, white snow, white cotton. Little white rabbit has white fur and red eyes — so cute!", "撇、竖、横折、横、横", ["白云 bái yún · White cloud", "白色 bái sè · White color"]),
    ("红", "hóng", "Red", "形容词", "🔴", "红色是中国最喜庆的颜色。红灯笼、红春联、红包，过年都是红色的！", "Red is China's most festive color. Red lanterns, red couplets, red envelopes — Chinese New Year is all red!", "撇折、撇折、提、横、竖、横", ["红花 hóng huā · Red flower", "红色 hóng sè · Red"]),
    ("黄", "huáng", "Yellow", "形容词", "🟡", "小黄鸭在水里游泳，黄色的香蕉香香甜甜。秋天的稻田一片金黄！", "Little yellow duck swims in water, yellow bananas are fragrant and sweet. Autumn rice fields are golden!", "横、竖、竖、横、竖、横折、横、竖、横、撇、点", ["黄色 huáng sè · Yellow", "黄金 huáng jīn · Gold"]),
    ("蓝", "lán", "Blue", "形容词", "🔵", "蓝蓝的天空，蓝蓝的大海。蓝色让我们感到安静和广阔。蓝鲸是世界上最大的动物！", "Blue sky, blue sea. Blue makes us feel calm and wide. Blue whales are the largest animals on Earth!", "横、竖、竖、竖、竖、撇、横、点、竖、横折、竖、竖、横", ["蓝色 lán sè · Blue", "蓝天 lán tiān · Blue sky"]),
    ("长", "cháng", "Long", "形容词", "📏", "长颈鹿有长长的脖子。每过一年小朋友就长一岁！妈妈说我长大了要自己做事。", "Giraffes have long necks. Every year kids grow one year older! Mom says when I grow up I do things myself.", "撇、横、竖提、捺", ["长大 zhǎng dà · Grow up", "长江 cháng jiāng · Yangtze"]),
    ("冷", "lěng", "Cold", "形容词", "❄️", "冬天天气冷，我们穿上厚厚的棉衣。热的时候吃冰棍，冷冷的真舒服！", "Winter is cold, we wear thick cotton clothes. Hot day eating popsicle — cold and so refreshing!", "点、提、撇、捺、点、横撇、点", ["寒冷 hán lěng · Cold", "冷水 lěng shuǐ · Cold water"]),
    ("热", "rè", "Hot", "形容词", "🔥", "夏天热，我们爱吃西瓜喝冷饮。太阳公公热得脸红红的！", "Summer is hot, we love eating watermelon and cold drinks. Grandpa Sun's face turns red from heat!", "横、竖钩、提、撇、横折弯钩、点、点、点、点", ["热水 rè shuǐ · Hot water", "热闹 rè nao · Lively"]),
    # 动作 (7)
    ("看", "kàn", "See", "动作", "👀", "睁大眼睛看世界。小朋友看书看电影看星星，眼睛要用好保护视力！", "Open eyes wide to see the world. Kids read books, watch movies, look at stars — protect your eyesight!", "撇、横、横、撇、竖、横折、横、横、横", ["看见 kàn jiàn · See", "看书 kàn shū · Read"]),
    ("听", "tīng", "Listen", "动作", "🎧", "认真听老师讲课，认真听妈妈的话。听小鸟唱歌真好听！", "Listen carefully to teacher, listen carefully to mom. Listening to birds sing is so beautiful!", "竖、横折、横、撇、撇、横、竖", ["听见 tīng jiàn · Hear", "好听 hǎo tīng · Nice sound"]),
    ("走", "zǒu", "Walk", "动作", "🚶", "小朋友学走路，一步一步慢慢走。大家一起走，走到公园去玩耍！", "Kids learn to walk step by step slowly. Walking together to the park to play!", "横、竖、横、竖、横、撇、捺", ["走路 zǒu lù · Walk", "行走 xíng zǒu · Walk"]),
    ("跑", "pǎo", "Run", "动作", "🏃", "小狗跑得真快，小白兔一蹦一跳跑得很远。小朋友比赛跑，第一最棒！", "Puppy runs so fast, little bunny hops far. Kids race running, first place is best!", "竖、横折、横、竖、横、竖提、撇、横折钩、横、竖弯钩", ["跑步 pǎo bù · Run", "奔跑 bēn pǎo · Dash"]),
    ("飞", "fēi", "Fly", "动作", "🪽", "小鸟在天空中自由飞翔。飞机也能带着我们飞向世界各地！", "Birds fly freely in the sky. Airplanes can also carry us flying around the world!", "横折弯钩、撇、点", ["飞机 fēi jī · Airplane", "飞鸟 fēi niǎo · Flying bird"]),
    ("吃", "chī", "Eat", "动作", "🍽️", "吃饭要细嚼慢咽，多吃蔬菜水果身体好。小朋友最喜欢吃冰淇淋！", "Eat slowly and chew well, eat more fruits and vegetables for good health. Kids love ice cream most!", "竖、横折、横、撇、横、横折钩、撇、竖弯钩", ["吃饭 chī fàn · Eat", "好吃 hǎo chī · Delicious"]),
    ("喝", "hē", "Drink", "动作", "🥤", "口渴要喝水。小朋友每天要喝足够的水，少喝含糖的饮料！", "Drink water when thirsty. Kids need enough water daily, less sugary drinks!", "竖、横折、横、竖、横折、横、撇、横折钩、撇、点", ["喝水 hē shuǐ · Drink water", "喝茶 hē chá · Drink tea"]),
]

# 把元组变成字典
CHARACTERS = []
for c in CHARS:
    char, pinyin, english, category, emoji, story_cn, story_en, stroke, words = c
    CHARACTERS.append({
        "char": char, "pinyin": pinyin, "english": english,
        "category": category, "emoji": emoji,
        "story_cn": story_cn, "story_en": story_en,
        "stroke_hint": stroke, "words": words,
    })

STORIES = [
    {"title": "太阳和月亮", "title_en": "The Sun and Moon", "emoji": "🌅",
     "content_cn": "从前，太阳和月亮是好朋友。太阳公公白天工作，给大地带来光明和温暖。月亮姐姐晚上工作，让夜晚不再黑暗。有一天，他们在黄昏见面了，天空变成了美丽的橙红色，那就是美丽的晚霞！太阳说：'我给大家阳光。'月亮说：'我给大家美梦。'太阳和月亮轮流守护着我们的世界。",
     "content_en": "Once upon a time the Sun and Moon were good friends. Grandpa Sun worked by day bringing light and warmth. Sister Moon worked by night making darkness bright. One day they met at dusk, and the sky turned orange-red — that is the beautiful sunset! Sun said: I give sunlight to everyone. Moon said: I give sweet dreams to everyone. Sun and Moon take turns guarding our world.",
     "characters": ["日", "月", "天", "大", "小"]},
    {"title": "勇敢的小鱼", "title_en": "The Brave Little Fish", "emoji": "🐠",
     "content_cn": "在蓝色的大海里，住着一条漂亮的小鱼。它有橙色的身体和金色的尾巴，在水中游来游去吐着泡泡。有一天，一张大网把大鱼们都困住了！小鱼虽然小，但它从网眼钻了出去，叫来聪明的海豚帮忙，终于救出了大家。小鱼明白：小小的身体，也能有大大的勇气！",
     "content_en": "In the blue sea lived a beautiful little fish. It had an orange body and golden tail, swimming around blowing bubbles. One day a big net trapped all the big fish! Though small, the little fish squeezed out through the mesh and called smart dolphins to help. Finally everyone was rescued. The fish learned: small body can have big courage!",
     "characters": ["鱼", "水", "小", "大", "海"]},
    {"title": "小马过河", "title_en": "The Little Horse Crosses the River", "emoji": "🐴",
     "content_cn": "小马要把一袋粮食送到河对岸。松鼠说：'河水很深，不要过去！'牛伯伯说：'河水很浅，可以过去。'妈妈说：'孩子，自己去试试吧！'小马自己走过去，发现河水不深也不浅，刚到肚子那么高。小马终于明白了：听别人说不如自己试一试！",
     "content_en": "Little horse needed to deliver grain across the river. Squirrel said: The river is deep, don't cross! Uncle Ox said: The river is shallow, you can cross. Mom said: Child, try it yourself! The horse walked across and found the river neither deep nor shallow, reaching just to its belly. The horse finally learned: trying it yourself is better than listening to others!",
     "characters": ["马", "水", "大", "小", "上"]},
    {"title": "花儿的朋友", "title_en": "The Flower's Friends", "emoji": "🌸",
     "content_cn": "花园里有一朵小红花，她觉得很孤单。有一天，一只小鸟停在枝头说：'花儿你好呀！'蝴蝶也飞来了，在花朵上跳舞。小蜜蜂也来采花蜜。小红花开心极了！后来她明白了：只要敞开心扉，到处都能找到好朋友。现在花园里充满了欢笑。",
     "content_en": "In the garden lived a little red flower feeling lonely. One day a little bird landed on a branch saying: Hello flower! A butterfly came dancing on blossoms. A little bee came collecting nectar. The little red flower was so happy! Later she learned: open your heart and friends are everywhere. Now the garden is full of laughter.",
     "characters": ["花", "鸟", "小", "大", "天"]},
    {"title": "乌鸦喝水", "title_en": "The Crow and the Pitcher", "emoji": "🪣",
     "content_cn": "一只乌鸦口渴了，到处找水喝。它发现一个瓶子里有半瓶水，可是瓶口太小，乌鸦的嘴伸不进去。乌鸦想到一个好办法：它把小石子一颗一颗丢进瓶子里。瓶子里的水慢慢升高了，乌鸦终于喝到了水！动动脑筋，就有好办法。",
     "content_en": "A thirsty crow looked everywhere for water. It found a bottle half-filled with water, but the mouth was too small for the crow's beak. The crow had a smart idea: it dropped small stones into the bottle one by one. The water slowly rose higher, and the crow could finally drink! Use your brain and find a good way.",
     "characters": ["水", "小", "大", "口", "鸟"]},
    {"title": "龟兔赛跑", "title_en": "The Hare and the Tortoise", "emoji": "🐢",
     "content_cn": "兔子和乌龟比赛跑步。兔子跑得快，一下就跑远了。它看到乌龟远远落在后面，就放心地在路边睡着了。乌龟虽然爬得慢，但它不放弃，一步一步坚持向前走。当兔子醒来时，乌龟已经到达终点！坚持不懈才是成功的秘诀。",
     "content_en": "Hare and Tortoise had a race. Hare ran fast and quickly got far ahead. Seeing Tortoise far behind, Hare felt confident and fell asleep by the roadside. Though Tortoise crawled slowly, it never gave up, stepping forward steadily one step at a time. When Hare woke up, Tortoise had reached the finish line! Persistence is the secret to success.",
     "characters": ["龟", "兔", "跑", "大", "小"]},
    {"title": "三只小猪", "title_en": "The Three Little Pigs", "emoji": "🐷",
     "content_cn": "三只小猪各自盖房子。老大用稻草很快盖好，但风一吹就倒了。老二用木头盖房子，比稻草结实，但被狼推倒了。老三用砖块认真盖房子，房子又坚固又漂亮。大灰狼来了，用尽全力也没能把砖房推倒。认真努力就会有好结果！",
     "content_en": "Three little pigs each built houses. First pig used straw and finished quickly, but wind blew it down. Second pig used wood, stronger than straw but wolf pushed it down. Third pig used bricks carefully building a strong, beautiful house. When big bad wolf came, it couldn't push down the brick house. Hard work brings good results!",
     "characters": ["三", "大", "小", "房", "马"]},
    {"title": "拔萝卜", "title_en": "Pulling the Carrot", "emoji": "🥕",
     "content_cn": "老爷爷种了一个大萝卜，萝卜长的又大又结实。老爷爷拔不动，叫来了老奶奶帮忙；还拔不动，叫来了小朋友；再叫来了小猫小狗。大家齐心协力，一起用力：'一、二、三！'大萝卜终于被拔出来了！人多力量大，团结就是力量。",
     "content_en": "Old man planted a big carrot that grew huge and strong. Old man couldn't pull it out and called old woman for help. Still couldn't, called a child. Then called little cat and little dog. Everyone worked together pulling hard: one two three! The big carrot finally came out! Many hands make light work — unity is strength.",
     "characters": ["大", "小", "人", "一", "手"]},
]

OUT = {"characters": CHARACTERS, "stories": STORIES}

out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "static")
os.makedirs(out_dir, exist_ok=True)
out_path = os.path.join(out_dir, "data.json")

with open(out_path, "w", encoding="utf-8") as f:
    json.dump(OUT, f, ensure_ascii=False, indent=2)

print(f"✅ 已生成 {len(CHARACTERS)} 个汉字, {len(STORIES)} 个故事 -> {out_path}")
