"""
儿童汉字学习数据模块
包含汉字、拼音、英文翻译、故事、图片描述等丰富内容
"""

CHARACTERS = [
    {
        "char": "日",
        "pinyin": "rì",
        "english": "Sun / Day",
        "category": "自然",
        "category_en": "Nature",
        "story_cn": "太阳公公每天早早起床，照亮大地。圆圆的太阳像一个大火球，给我们带来温暖和光明。古人看到圆圆的太阳，就画了一个圆圈，中间加一点，变成了'日'字。",
        "story_en": "Grandpa Sun gets up early every day to light up the earth. The round sun is like a big fireball, bringing us warmth and light. Ancient people saw the round sun, drew a circle with a dot in the middle, and it became the character '日'.",
        "image_prompt": "A cute cartoon sun with a smiling face, bright yellow and orange rays, blue sky background, children's book illustration style, warm and friendly",
        "stroke_hint": "竖、横折、横、横",
        "words": [
            {"word": "日出", "pinyin": "rì chū", "english": "Sunrise"},
            {"word": "生日", "pinyin": "shēng rì", "english": "Birthday"},
        ]
    },
    {
        "char": "月",
        "pinyin": "yuè",
        "english": "Moon / Month",
        "category": "自然",
        "category_en": "Nature",
        "story_cn": "夜晚，弯弯的月亮挂在天空，像一艘小船，又像一根香蕉。小星星们围着月亮姐姐眨眼睛。古人看到弯弯的月亮，就画出了'月'字的形状。",
        "story_en": "At night, the crescent moon hangs in the sky, like a little boat or a banana. Little stars twinkle around Sister Moon. Ancient people saw the crescent moon and drew the shape of the character '月'.",
        "image_prompt": "A cute crescent moon with a gentle smiling face, surrounded by twinkling stars, dark blue night sky, children's book illustration style, dreamy and soft",
        "stroke_hint": "撇、横折钩、横、横",
        "words": [
            {"word": "月亮", "pinyin": "yuè liàng", "english": "Moon"},
            {"word": "月饼", "pinyin": "yuè bǐng", "english": "Mooncake"},
        ]
    },
    {
        "char": "山",
        "pinyin": "shān",
        "english": "Mountain",
        "category": "自然",
        "category_en": "Nature",
        "story_cn": "高高的山峰直插云霄，三座山峰连在一起，就是'山'字。小松鼠住在山上，每天在树林里跳来跳去，看日出日落，过着快乐的生活。",
        "story_en": "Tall peaks reach into the clouds. Three peaks connected together make the character '山'. Little squirrel lives on the mountain, jumping among the trees every day, watching the sunrise and sunset, living a happy life.",
        "image_prompt": "Three cute green mountains with snow-capped peaks, a small squirrel on the middle mountain, blue sky with white clouds, children's book illustration style, colorful and cheerful",
        "stroke_hint": "竖、竖折、竖",
        "words": [
            {"word": "火山", "pinyin": "huǒ shān", "english": "Volcano"},
            {"word": "爬山", "pinyin": "pá shān", "english": "Mountain climbing"},
        ]
    },
    {
        "char": "水",
        "pinyin": "shuǐ",
        "english": "Water",
        "category": "自然",
        "category_en": "Nature",
        "story_cn": "哗啦啦，小溪在唱歌。水滴从高处落下，溅起美丽的水花。'水'字就像流动的河水，中间是主河道，两边是飞溅的水花。小鱼在水里游来游去，真快乐！",
        "story_en": "Splish splash, the little stream is singing. Water drops fall from high up, splashing beautiful water flowers. The character '水' is like flowing river water, with the main channel in the middle and splashing water on both sides. Little fish swim happily in the water!",
        "image_prompt": "A cute flowing river with blue water, splashing water drops, a small orange fish jumping out, green grass on the banks, children's book illustration style, vibrant and playful",
        "stroke_hint": "竖钩、横撇、撇、捺",
        "words": [
            {"word": "水果", "pinyin": "shuǐ guǒ", "english": "Fruit"},
            {"word": "喝水", "pinyin": "hē shuǐ", "english": "Drink water"},
        ]
    },
    {
        "char": "火",
        "pinyin": "huǒ",
        "english": "Fire",
        "category": "自然",
        "category_en": "Nature",
        "story_cn": "篝火晚会开始了！火焰跳动着，像在跳舞一样。'火'字就像一团燃烧的火焰，上面是火苗，下面是木柴。火可以做饭，可以取暖，但也要小心，不能玩火哦！",
        "story_en": "The campfire party has begun! The flames are dancing, jumping happily. The character '火' looks like a burning flame, with the fire on top and wood below. Fire can cook food and keep us warm, but we must be careful and never play with fire!",
        "image_prompt": "A cute campfire with orange and red flames dancing, marshmallows on sticks nearby, night sky with stars, children's book illustration style, warm and cozy",
        "stroke_hint": "点、撇、撇、捺",
        "words": [
            {"word": "火车", "pinyin": "huǒ chē", "english": "Train"},
            {"word": "大火", "pinyin": "dà huǒ", "english": "Big fire"},
        ]
    },
    {
        "char": "人",
        "pinyin": "rén",
        "english": "Person / Human",
        "category": "人物",
        "category_en": "People",
        "story_cn": "一个小朋友张开双臂，大步向前走。'人'字就像一个人站立的姿势，两条腿稳稳地站在地上。每个人都是独一无二的，都是世界上最特别的'人'！",
        "story_en": "A little child spreads their arms wide and walks forward with big steps. The character '人' looks like a person standing, with two legs firmly on the ground. Everyone is unique, everyone is the most special 'person' in the world!",
        "image_prompt": "A cute cartoon child with arms spread wide, walking happily, green meadow background, butterflies flying around, children's book illustration style, joyful and warm",
        "stroke_hint": "撇、捺",
        "words": [
            {"word": "大人", "pinyin": "dà rén", "english": "Adult"},
            {"word": "人们", "pinyin": "rén men", "english": "People"},
        ]
    },
    {
        "char": "大",
        "pinyin": "dà",
        "english": "Big / Large",
        "category": "形容词",
        "category_en": "Adjectives",
        "story_cn": "大象是陆地上最大的动物，它有长长的鼻子，大大的耳朵。'大'字就像一个张开双臂的人，表示'很大'的意思。大象说：'我是大大大！'",
        "story_en": "The elephant is the largest animal on land. It has a long trunk and big ears. The character '大' looks like a person spreading their arms wide, meaning 'big'. The elephant says: 'I am big, big, big!'",
        "image_prompt": "A cute cartoon elephant with big floppy ears, long trunk raised up, small birds on its back, jungle background, children's book illustration style, friendly and adorable",
        "stroke_hint": "横、撇、捺",
        "words": [
            {"word": "大象", "pinyin": "dà xiàng", "english": "Elephant"},
            {"word": "大海", "pinyin": "dà hǎi", "english": "Ocean"},
        ]
    },
    {
        "char": "小",
        "pinyin": "xiǎo",
        "english": "Small / Little",
        "category": "形容词",
        "category_en": "Adjectives",
        "story_cn": "小蚂蚁虽然很小，但它能搬动比自己重很多倍的食物。'小'字就像一个缩着身子的人，表示'很小'的意思。小蚂蚁说：'我虽然小，但我很厉害！'",
        "story_en": "Although the little ant is very small, it can carry food many times heavier than itself. The character '小' looks like a person huddled up, meaning 'small'. The little ant says: 'I may be small, but I am amazing!'",
        "image_prompt": "A cute cartoon ant carrying a large green leaf, green grass background, tiny flowers around, children's book illustration style, detailed and adorable",
        "stroke_hint": "竖钩、点、点",
        "words": [
            {"word": "小鸟", "pinyin": "xiǎo niǎo", "english": "Little bird"},
            {"word": "小朋友", "pinyin": "xiǎo péng yǒu", "english": "Child / Little friend"},
        ]
    },
    {
        "char": "天",
        "pinyin": "tiān",
        "english": "Sky / Day / Heaven",
        "category": "自然",
        "category_en": "Nature",
        "story_cn": "蓝蓝的天空飘着白云，小鸟在天空中自由飞翔。'天'字就像一个人头顶着天空，上面一横是天，下面是人。天空真大真美啊！",
        "story_en": "White clouds float in the blue sky, and birds fly freely in the sky. The character '天' looks like a person with the sky above their head — the top line is the sky, and below is a person. The sky is so big and beautiful!",
        "image_prompt": "A beautiful blue sky with fluffy white clouds, colorful birds flying, a rainbow in the distance, children's book illustration style, bright and cheerful",
        "stroke_hint": "横、横、撇、捺",
        "words": [
            {"word": "天空", "pinyin": "tiān kōng", "english": "Sky"},
            {"word": "今天", "pinyin": "jīn tiān", "english": "Today"},
        ]
    },
    {
        "char": "木",
        "pinyin": "mù",
        "english": "Tree / Wood",
        "category": "自然",
        "category_en": "Nature",
        "story_cn": "森林里有一棵大树，它长着粗壮的树干和茂密的树枝。'木'字就像一棵树，有树根、树干和树枝。小鸟在树上筑巢，小松鼠在树上玩耍。",
        "story_en": "There is a big tree in the forest with a thick trunk and lush branches. The character '木' looks like a tree with roots, trunk, and branches. Little birds build nests in the tree, and little squirrels play on the branches.",
        "image_prompt": "A cute big tree with a friendly face on the trunk, green leafy crown, a bird nest with eggs, a squirrel on a branch, children's book illustration style, vibrant green",
        "stroke_hint": "横、竖、撇、捺",
        "words": [
            {"word": "树木", "pinyin": "shù mù", "english": "Trees"},
            {"word": "木头", "pinyin": "mù tou", "english": "Wood"},
        ]
    },
    {
        "char": "口",
        "pinyin": "kǒu",
        "english": "Mouth / Opening",
        "category": "身体",
        "category_en": "Body",
        "story_cn": "小嘴巴，真能干！吃饭、说话、唱歌都靠它。'口'字就像一张张开的大嘴巴，方方正正的。我们用嘴巴说'你好'，用嘴巴吃美味的食物！",
        "story_en": "Little mouth, so capable! Eating, talking, singing all depend on it. The character '口' looks like a wide open mouth, square and neat. We use our mouth to say 'hello' and eat delicious food!",
        "image_prompt": "A cute cartoon face with a big smiling mouth, rosy cheeks, bright eyes, surrounded by floating food items like apple and cake, children's book illustration style, happy and fun",
        "stroke_hint": "竖、横折、横",
        "words": [
            {"word": "口水", "pinyin": "kǒu shuǐ", "english": "Saliva"},
            {"word": "门口", "pinyin": "mén kǒu", "english": "Doorway"},
        ]
    },
    {
        "char": "目",
        "pinyin": "mù",
        "english": "Eye",
        "category": "身体",
        "category_en": "Body",
        "story_cn": "明亮的眼睛让我们看到美丽的世界。'目'字就像一只竖起来的眼睛，中间有两横是眼珠。我们用眼睛看花、看鸟、看星星，世界真奇妙！",
        "story_en": "Bright eyes let us see the beautiful world. The character '目' looks like a vertical eye, with two horizontal lines inside as the pupil. We use our eyes to see flowers, birds, and stars — the world is so wonderful!",
        "image_prompt": "A cute cartoon eye with long eyelashes, colorful iris, sparkly highlights, soft pastel background, children's book illustration style, bright and curious",
        "stroke_hint": "竖、横折、横、横、横",
        "words": [
            {"word": "目光", "pinyin": "mù guāng", "english": "Gaze / Sight"},
            {"word": "节目", "pinyin": "jié mù", "english": "Program / Show"},
        ]
    },
    {
        "char": "手",
        "pinyin": "shǒu",
        "english": "Hand",
        "category": "身体",
        "category_en": "Body",
        "story_cn": "小手真灵巧，会画画、会写字、会做手工。'手'字就像一只张开的手掌，有五根手指。我们用小手帮助别人，用小手创造美好！",
        "story_en": "Little hands are so clever — they can draw, write, and make crafts. The character '手' looks like an open palm with five fingers. We use our little hands to help others and create beautiful things!",
        "image_prompt": "A cute cartoon open hand with five fingers, colorful paint on fingertips, surrounded by art supplies, children's book illustration style, creative and playful",
        "stroke_hint": "撇、横、横、竖钩",
        "words": [
            {"word": "手机", "pinyin": "shǒu jī", "english": "Cell phone"},
            {"word": "洗手", "pinyin": "xǐ shǒu", "english": "Wash hands"},
        ]
    },
    {
        "char": "马",
        "pinyin": "mǎ",
        "english": "Horse",
        "category": "动物",
        "category_en": "Animals",
        "story_cn": "小马在草原上奔跑，鬃毛随风飘扬，蹄声嗒嗒嗒。'马'字就像一匹奔跑的马，有头、有身体、有四条腿和尾巴。小马真勇敢，跑得真快！",
        "story_en": "The little horse gallops across the grassland, its mane flowing in the wind, hooves going clip-clop-clip-clop. The character '马' looks like a running horse with a head, body, four legs, and a tail. The little horse is so brave and runs so fast!",
        "image_prompt": "A cute cartoon pony running on green grassland, flowing mane and tail, blue sky with clouds, colorful flowers in the field, children's book illustration style, energetic and happy",
        "stroke_hint": "横折、竖折折钩、横",
        "words": [
            {"word": "马上", "pinyin": "mǎ shàng", "english": "Immediately"},
            {"word": "马车", "pinyin": "mǎ chē", "english": "Carriage"},
        ]
    },
    {
        "char": "牛",
        "pinyin": "niú",
        "english": "Cow / Ox",
        "category": "动物",
        "category_en": "Animals",
        "story_cn": "老牛在田里辛勤地耕地，哞哞叫。'牛'字就像一头牛的头，上面有两只弯弯的角。牛是农民伯伯的好帮手，牛奶也是牛送给我们的礼物哦！",
        "story_en": "The old ox plows the field diligently, mooing as it works. The character '牛' looks like an ox's head with two curved horns on top. The ox is the farmer's good helper, and milk is also a gift from cows to us!",
        "image_prompt": "A cute cartoon cow with big gentle eyes, curved horns, black and white spots, standing in a green meadow with flowers, children's book illustration style, gentle and friendly",
        "stroke_hint": "撇、横、横、竖",
        "words": [
            {"word": "牛奶", "pinyin": "niú nǎi", "english": "Milk"},
            {"word": "水牛", "pinyin": "shuǐ niú", "english": "Water buffalo"},
        ]
    },
    {
        "char": "鱼",
        "pinyin": "yú",
        "english": "Fish",
        "category": "动物",
        "category_en": "Animals",
        "story_cn": "小鱼在水里自由自在地游来游去，吐着泡泡。'鱼'字上面是鱼头，中间是鱼身，下面一横是鱼尾。小鱼和家人一起生活在美丽的海洋里。",
        "story_en": "Little fish swims freely in the water, blowing bubbles. The top of '鱼' is the fish head, the middle is the body, and the bottom line is the tail. Little fish lives with its family in the beautiful ocean.",
        "image_prompt": "A cute cartoon fish swimming in blue water, colorful orange and yellow scales, bubbles floating up, seaweed and coral in background, children's book illustration style, underwater magic",
        "stroke_hint": "撇、横撇、竖、横折、横、竖、横、横",
        "words": [
            {"word": "金鱼", "pinyin": "jīn yú", "english": "Goldfish"},
            {"word": "钓鱼", "pinyin": "diào yú", "english": "Fishing"},
        ]
    },
    {
        "char": "鸟",
        "pinyin": "niǎo",
        "english": "Bird",
        "category": "动物",
        "category_en": "Animals",
        "story_cn": "小鸟在树枝上唱歌，叽叽喳喳真好听。'鸟'字就像一只站在树枝上的小鸟，有头、有翅膀、有尾巴。小鸟是森林里的歌唱家！",
        "story_en": "The little bird sings on the branch, chirping so beautifully. The character '鸟' looks like a little bird standing on a branch, with a head, wings, and a tail. The little bird is the singer of the forest!",
        "image_prompt": "A cute cartoon bird with colorful feathers, sitting on a branch, singing with musical notes floating around, green leaves, children's book illustration style, musical and cheerful",
        "stroke_hint": "撇、横折钩、点、竖折折钩、横",
        "words": [
            {"word": "小鸟", "pinyin": "xiǎo niǎo", "english": "Little bird"},
            {"word": "鸟巢", "pinyin": "niǎo cháo", "english": "Bird nest"},
        ]
    },
    {
        "char": "花",
        "pinyin": "huā",
        "english": "Flower",
        "category": "植物",
        "category_en": "Plants",
        "story_cn": "春天来了，花儿开了。红的花、黄的花、粉的花，五颜六色真美丽。'花'字上面是草字头，下面是变化的意思。花儿在风中轻轻摇摆，蝴蝶在花丛中飞舞。",
        "story_en": "Spring has come, and flowers are blooming. Red flowers, yellow flowers, pink flowers — so colorful and beautiful! The top of '花' is the grass radical, and the bottom means 'change'. Flowers sway gently in the wind, and butterflies dance among the blossoms.",
        "image_prompt": "A field of colorful cartoon flowers with smiling faces, red yellow pink purple, butterflies flying around, green grass, blue sky, children's book illustration style, vibrant spring garden",
        "stroke_hint": "横、竖、竖、撇、竖、撇、竖弯钩",
        "words": [
            {"word": "花朵", "pinyin": "huā duǒ", "english": "Flower"},
            {"word": "花园", "pinyin": "huā yuán", "english": "Garden"},
        ]
    },
    {
        "char": "草",
        "pinyin": "cǎo",
        "english": "Grass",
        "category": "植物",
        "category_en": "Plants",
        "story_cn": "绿油油的小草从土里探出头来，迎接春天的到来。'草'字上面是草字头，就像两棵小草。小草虽然不起眼，但它们团结在一起，就变成了美丽的草地！",
        "story_en": "Green little grass peeks out from the soil, welcoming the arrival of spring. The top of '草' is the grass radical, looking like two little grass plants. Though grass may seem small, when they unite together, they become a beautiful meadow!",
        "image_prompt": "A cute green meadow with grass blades having tiny smiling faces, dewdrops sparkling, a ladybug on a grass blade, morning sunlight, children's book illustration style, fresh and lively",
        "stroke_hint": "横、竖、竖、竖、横折、横、横、横、竖",
        "words": [
            {"word": "草地", "pinyin": "cǎo dì", "english": "Grassland / Lawn"},
            {"word": "小草", "pinyin": "xiǎo cǎo", "english": "Little grass"},
        ]
    },
    {
        "char": "一",
        "pinyin": "yī",
        "english": "One",
        "category": "数字",
        "category_en": "Numbers",
        "story_cn": "一个太阳，一个月亮，一个小朋友。'一'是最简单的汉字，就是一根横线。一是一切数字的开始，从'一'开始，我们可以数到很多很多！",
        "story_en": "One sun, one moon, one little child. '一' is the simplest Chinese character — just one horizontal line. One is the beginning of all numbers. Starting from '一', we can count to many, many more!",
        "image_prompt": "A cute number 1 character with a smiling face, surrounded by single items (one sun, one apple, one star), bright and simple, children's book illustration style, clean and educational",
        "stroke_hint": "横",
        "words": [
            {"word": "一个", "pinyin": "yī gè", "english": "One (of something)"},
            {"word": "第一", "pinyin": "dì yī", "english": "First"},
        ]
    },
    {
        "char": "二",
        "pinyin": "èr",
        "english": "Two",
        "category": "数字",
        "category_en": "Numbers",
        "story_cn": "两只小鸟站在树枝上，两只蝴蝶在花丛中飞舞。'二'就是两条横线，上面短，下面长。我有两只手，两只脚，两只眼睛和两只耳朵！",
        "story_en": "Two little birds sit on a branch, two butterflies dance among the flowers. '二' is two horizontal lines, the top one short and the bottom one long. I have two hands, two feet, two eyes, and two ears!",
        "image_prompt": "A cute number 2 character with a smiling face, two identical cute animals (two kittens or two bunnies) side by side, children's book illustration style, warm and friendly",
        "stroke_hint": "横、横",
        "words": [
            {"word": "二月", "pinyin": "èr yuè", "english": "February"},
            {"word": "十二", "pinyin": "shí èr", "english": "Twelve"},
        ]
    },
    {
        "char": "三",
        "pinyin": "sān",
        "english": "Three",
        "category": "数字",
        "category_en": "Numbers",
        "story_cn": "三只小猪盖房子，三只小熊在跳舞。'三'就是三条横线，代表数字三。三角形有三条边，三原色是红黄蓝。三是一个神奇的数字！",
        "story_en": "Three little pigs build houses, three little bears are dancing. '三' is three horizontal lines, representing the number three. A triangle has three sides, and the three primary colors are red, yellow, and blue. Three is a magical number!",
        "image_prompt": "A cute number 3 character with a smiling face, three cute little pigs standing together, each with a tiny house, children's book illustration style, storytelling and fun",
        "stroke_hint": "横、横、横",
        "words": [
            {"word": "三月", "pinyin": "sān yuè", "english": "March"},
            {"word": "三角形", "pinyin": "sān jiǎo xíng", "english": "Triangle"},
        ]
    },
    {
        "char": "上",
        "pinyin": "shàng",
        "english": "Up / Above / On",
        "category": "方位",
        "category_en": "Direction",
        "story_cn": "小鸟飞上天空，气球飘上云端。'上'字表示在高处、在表面的意思。看！底座上面有一横，表示'在上面'。我们上楼，上山，向上看！",
        "story_en": "The bird flies up into the sky, the balloon floats up to the clouds. The character '上' means 'up' or 'on top'. Look! There's a horizontal line above the base, meaning 'on top'. We go upstairs, climb up mountains, and look up!",
        "image_prompt": "A cute arrow pointing upward with a smiling face, balloons floating up, a bird flying upward, clouds at the top, children's book illustration style, uplifting and bright",
        "stroke_hint": "竖、横、横",
        "words": [
            {"word": "上学", "pinyin": "shàng xué", "english": "Go to school"},
            {"word": "上面", "pinyin": "shàng miàn", "english": "On top / Above"},
        ]
    },
    {
        "char": "下",
        "pinyin": "xià",
        "english": "Down / Below / Under",
        "category": "方位",
        "category_en": "Direction",
        "story_cn": "雨滴从天上落下来，树叶从树上飘下来。'下'字表示在低处、在下面的意思。一横是地面，下面有东西在往下。我们下楼，下山，往下看！",
        "story_en": "Raindrops fall down from the sky, leaves float down from the trees. The character '下' means 'down' or 'below'. The horizontal line is the ground, and something is going down below it. We go downstairs, go down the mountain, and look down!",
        "image_prompt": "A cute arrow pointing downward with a smiling face, raindrops falling, autumn leaves drifting down, puddles on the ground, children's book illustration style, gentle and playful",
        "stroke_hint": "横、竖、点",
        "words": [
            {"word": "下雨", "pinyin": "xià yǔ", "english": "Rain / Raining"},
            {"word": "下面", "pinyin": "xià miàn", "english": "Below / Under"},
        ]
    },
    {
        "char": "中",
        "pinyin": "zhōng",
        "english": "Middle / Center / China",
        "category": "方位",
        "category_en": "Direction",
        "story_cn": "一个方框，中间一竖，就是'中'字。就像一支箭射中了靶心！中国是我们的国家，我们都是中国人。'中'也表示中间、里面的意思。",
        "story_en": "A square frame with a vertical line in the middle — that's the character '中'. It's like an arrow hitting the bullseye! China is our country, and we are all Chinese. '中' also means 'middle' or 'center'.",
        "image_prompt": "A cute target board with an arrow hitting the bullseye center, red and gold Chinese elements, fireworks, children's book illustration style, celebratory and proud",
        "stroke_hint": "竖、横折、横、竖",
        "words": [
            {"word": "中国", "pinyin": "zhōng guó", "english": "China"},
            {"word": "中午", "pinyin": "zhōng wǔ", "english": "Noon"},
        ]
    },
]

# 中文故事合集
STORIES = [
    {
        "title": "太阳和月亮",
        "title_en": "The Sun and the Moon",
        "content_cn": "从前，太阳和月亮是好朋友。太阳公公白天工作，照亮大地，让小朋友们快乐地玩耍。月亮姐姐晚上工作，守护睡梦中的孩子们。\n\n有一天，太阳说：'我好想看看晚上的世界啊！'月亮说：'我也好想看看白天的世界！'\n\n于是，他们约定在黄昏时见面。太阳慢慢落下，月亮慢慢升起，他们在天空中相遇了。那一刻，天空变成了美丽的橙红色，这就是我们看到的晚霞！\n\n从那以后，每天黄昏，太阳和月亮都会短暂地见面，然后交换工作。太阳去休息，月亮来上班。\n\n小朋友们，你们喜欢太阳还是月亮呢？",
        "content_en": "Long ago, the Sun and the Moon were good friends. Grandpa Sun worked during the day, lighting up the earth so children could play happily. Sister Moon worked at night, watching over children in their dreams.\n\nOne day, the Sun said: 'I really want to see the world at night!' The Moon said: 'I really want to see the world during the day!'\n\nSo they agreed to meet at dusk. The Sun slowly went down, the Moon slowly rose up, and they met in the sky. At that moment, the sky turned into a beautiful orange-red color — that's the sunset glow we see!\n\nFrom then on, every day at dusk, the Sun and the Moon would briefly meet, then exchange jobs. The Sun goes to rest, and the Moon comes to work.\n\nChildren, do you like the Sun or the Moon more?",
        "characters": ["日", "月", "天", "大", "小"],
        "image_prompt": "A beautiful sunset scene with the sun and moon meeting in the sky, warm orange and pink colors, cute cartoon sun and moon with smiling faces, children's book illustration style, magical and heartwarming"
    },
    {
        "title": "勇敢的小鱼",
        "title_en": "The Brave Little Fish",
        "content_cn": "在深深的大海里，住着一条小鱼。它非常小，比所有其他的鱼都小。大鱼们常常笑它：'你这么小，能做什么呢？'\n\n小鱼很难过，但它没有放弃。它每天努力练习游泳，观察大海里的各种事物。\n\n有一天，大海里来了一张大渔网，把很多鱼都困住了。大鱼们拼命挣扎，但越挣扎网越紧。\n\n小鱼说：'让我来试试！'因为它很小，它从网眼里钻了出去，然后游到水面上，叫来了海豚朋友帮忙。海豚们一起把渔网咬破了，所有的鱼都得救了！\n\n大鱼们感激地说：'谢谢你，小鱼！你虽然小，但你很勇敢，很聪明！'\n\n从那以后，再也没有鱼笑小鱼了。大家都明白了一个道理：小不代表没用，每个人都有自己的长处！",
        "content_en": "In the deep ocean, there lived a little fish. It was very small, smaller than all the other fish. The big fish often laughed at it: 'You're so small, what can you do?'\n\nThe little fish was sad, but it didn't give up. Every day it practiced swimming hard and observed everything in the ocean.\n\nOne day, a big fishing net came into the ocean and trapped many fish. The big fish struggled desperately, but the more they struggled, the tighter the net became.\n\nThe little fish said: 'Let me try!' Because it was so small, it squeezed through a hole in the net, then swam to the surface and called for help from its dolphin friends. The dolphins bit through the net together, and all the fish were saved!\n\nThe big fish said gratefully: 'Thank you, little fish! You may be small, but you are so brave and clever!'\n\nFrom then on, no fish ever laughed at the little fish again. Everyone understood a truth: being small doesn't mean being useless — everyone has their own strengths!",
        "characters": ["鱼", "小", "大", "水", "上"],
        "image_prompt": "A cute small orange fish bravely swimming through a net, big fish watching in amazement, blue ocean background with bubbles, dolphins approaching to help, children's book illustration style, brave and heartwarming underwater scene"
    },
    {
        "title": "小马过河",
        "title_en": "The Little Horse Crosses the River",
        "content_cn": "小马要去河对岸的外婆家，但它从没去过。到了河边，它犹豫了：'这条河深不深呢？我能过去吗？'\n\n它问小松鼠：'小松鼠，这条河深吗？'小松鼠说：'深得很！我的一个朋友昨天就掉进去淹死了！'\n\n小马又问了老牛：'牛伯伯，这条河深吗？'老牛说：'不深不深，水才到我的膝盖呢！'\n\n小马更困惑了，一个说深，一个说浅，到底该听谁的呢？\n\n小马决定回家问妈妈。妈妈笑着说：'孩子，你为什么自己不试试呢？'\n\n小马回到河边，小心翼翼地走进水里。河水不深不浅，刚好到小马的肚子。它高兴地过了河，到了外婆家。\n\n原来，遇到事情，光听别人说是不够的，要自己勇敢地去尝试！",
        "content_en": "The little horse needed to go to Grandma's house across the river, but it had never been there before. At the riverbank, it hesitated: 'Is this river deep? Can I cross it?'\n\nIt asked the little squirrel: 'Little squirrel, is this river deep?' The squirrel said: 'Very deep! One of my friends fell in yesterday and drowned!'\n\nThen the little horse asked the old ox: 'Uncle Ox, is this river deep?' The old ox said: 'Not deep at all, the water only reaches my knees!'\n\nThe little horse was even more confused. One said deep, one said shallow — who should it listen to?\n\nThe little horse decided to go home and ask its mother. Mother smiled and said: 'My child, why don't you try it yourself?'\n\nThe little horse went back to the river and carefully stepped into the water. The river was neither too deep nor too shallow — it reached just the little horse's belly. It happily crossed the river and arrived at Grandma's house.\n\nIt turns out, when facing a problem, just listening to others isn't enough — you need to bravely try it yourself!",
        "characters": ["马", "水", "大", "小", "上", "下"],
        "image_prompt": "A cute little horse standing at the edge of a river, looking thoughtful, with a squirrel on one side and an ox on the other, gentle river with stepping stones, green trees, children's book illustration style, storytelling and adventurous"
    },
    {
        "title": "花儿的朋友",
        "title_en": "The Flower's Friends",
        "content_cn": "花园里有一朵小红花，它觉得自己很孤单，没有朋友。\n\n一天，一只小鸟飞过来，停在花旁边的树枝上。小鸟说：'小红花，你真漂亮！我可以做你的朋友吗？'\n\n小红花开心地说：'当然可以！'\n\n过了一会儿，一只蝴蝶飞来了。蝴蝶说：'小红花，你的花香真好闻！我可以做你的朋友吗？'\n\n小红花更开心了：'当然可以！'\n\n又过了一会儿，一只小蜜蜂嗡嗡地飞过来。小蜜蜂说：'小红花，你的花蜜真甜！我可以做你的朋友吗？'\n\n小红花开心极了：'当然可以！'\n\n现在，小红花有三个好朋友了。小鸟每天唱歌给它听，蝴蝶陪它跳舞，小蜜蜂帮它传播花粉。\n\n小红花再也不孤单了。它明白了，只要敞开心扉，到处都能找到朋友！",
        "content_en": "In the garden, there was a little red flower. It felt very lonely and had no friends.\n\nOne day, a little bird flew over and perched on a branch next to the flower. The bird said: 'Little red flower, you are so beautiful! Can I be your friend?'\n\nThe little red flower happily said: 'Of course!'\n\nAfter a while, a butterfly flew over. The butterfly said: 'Little red flower, your fragrance smells so good! Can I be your friend?'\n\nThe little red flower was even happier: 'Of course!'\n\nA little while later, a little bee buzzed over. The bee said: 'Little red flower, your nectar is so sweet! Can I be your friend?'\n\nThe little red flower was overjoyed: 'Of course!'\n\nNow, the little red flower had three good friends. The bird sang to it every day, the butterfly danced with it, and the bee helped spread its pollen.\n\nThe little red flower was never lonely again. It understood that as long as you open your heart, you can find friends everywhere!",
        "characters": ["花", "鸟", "小", "大", "天", "人"],
        "image_prompt": "A cute red flower with a smiling face in a garden, a bird on a branch, a butterfly and a bee flying around, colorful garden setting, children's book illustration style, heartwarming friendship theme"
    },
]

# 学习等级
LEVELS = [
    {"name": "初级", "name_en": "Beginner", "char_indices": [19, 20, 21, 22, 23, 24]},  # 数字和方位
    {"name": "中级", "name_en": "Intermediate", "char_indices": [0, 1, 2, 3, 4, 5, 6, 7, 8]},  # 自然和基础
    {"name": "高级", "name_en": "Advanced", "char_indices": [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]},  # 动植物等
]