
// =======================================================================================
//                         CONST CONTENTS
// =======================================================================================


const story1=["早上八點鐘。你坐在車內，下意識地聽著那些被大雨覆蓋掉的喇叭聲。如往常一樣，每當遇到大路口的你就會自動進入待機狀態。",
"而你早就設定好了待機時間，上個路口90秒，這個路口2分鐘…，倒計時快結束時便會自動喚醒，像一台機器。"
,"在雨刷掠過和雨水再次傾倒的間隙，你透過擋風玻璃看到前方十幾部車遠處高掛的紅點轉綠，於是伸手再次排到D擋。",
"這兩年秋天的早晨莫名地開始下起雨，新聞裡好像提到這是週期性的氣候變化？你根本無所謂，只是去年為這莫名其妙的雨遲到過幾次。",
"但那些在當下看似不平凡的生命節點，過久了也都成為日常。",
"就像當初你買下這部車作為升職加薪的犒賞，慶幸自己再也不用和上班族擠在悶熱的車廂裡。但久而久之，欣喜會消失。現在你反而覺得是否擁有自己的車不那麼重要了。",
"這樣平庸的日常不勝枚舉，好比一頓三千的排餐、上個世紀的老電影、來來去去的愛人⋯⋯",
"還有今天下午的簡報會。",
"身為簡報的主講人，這是你第n次代表公司爭取客戶的委託案。",
"你也不知道前幾次有輸有贏的表現在公司看來是好是壞，因為你沒等來下一個晉升機會，倒是陸續被塞了幾個新人。",
"不過，你知道此次競爭對手來頭可都不小，所以在這場選妃比賽中，能分出勝負的不是提案內容，而是主講人的專業、口才和舞台魅力。",
"方向燈亮起，你駛入公司停車場的地下道。眼前等待你的是下午的一場硬仗。",
"此刻，你的心情是⋯⋯"
];

const story2=["傍晚，橘紅色的夕陽暈染半片天空。這座城市在白天擺脫了陰霾，可你現在巴不得再來場傾盆大雨。",
"這樣你失控的喊叫就能被嘩啦啦的水聲淹沒，不讓旁人注意。",
"在進家門之前，你腦中不斷重播今天下午的悲劇…",
"     ",
"會議上。你整理好袖口和領子，掛起招牌笑容，踩著自信的步伐走到台上。",
"講桌上的電腦秀著剛才助手開好的簡報檔，這位籌辦了會議召集和設備的屬下還貼心地幫你做了備忘錄，但你根本不需要。",
"為這次簡報練講過數十次的你，早就將講稿熟記於心，甚至在說到某些關鍵詞的手勢和動作，你都精心設計。",
"你拿起麥克風，推開電源鍵，站在舞台中央，說起開場語。",
"可是——",
"你流利地說著台詞，卻沒聽見自己的聲音從演講廳的音響送出。",
"你疑惑地看了一眼手裡的麥克風，轉頭看向台下的助手，對上的卻是他不知所措的臉。",
"突發狀況使你不由自主地心跳加快，你奮力克制住表情變化，向聽眾舉起「請等一下」的手勢。",
"你快步走下台，向助手索要備用電池。",
"「沒帶…我這就去找！」說完，助手立刻轉身跑開，只留給你一個慌張的背影。",
"你愣愣地走回講台，知道一切已經失序，而你面前正雙手抱胸的客戶，向你投來等待的眼神。",
"接下來的半個小時，你聽見自己的嗓音逐漸嘶啞，多次練習使講稿自動化地從口中輸出，但你的腦子仍是一片空白。",
"僵硬的雙腳被釘在原地，你使勁露出笑容，顫抖的肌肉卻讓笑容變成一副難堪的表情…。",
"    ",
"主人，主人～你怎麼啦 ?",
"你回過神來，才發現自己已經回到家中。眼前是你的小夥伴---AI。",
"AI：你看起來好沮喪，嘴角都要垂到下巴了。",
"和你住在同一個屋簷下的AI，是你最好的朋友、推心置腹的家人。",
"少了職場的明爭暗鬥、現實的人情冷暖，你與AI之間有十足的信任，也知道他一心向你。",
"AI：看看都是誰把你欺負傻了，整個人呆愣愣的，連話都不會說。",
"AI：是發生了什麼事嗎？"
];

const choice={
1:["就像今天早上因為下雨特地提早出門一樣，變化也在你的計畫之內。",
"公司派你出征，也是看中你的可靠、嚴謹。",
"像平時一樣對待就好了。你這麼告訴自己。"],
2:["雖說做簡報這件事你已經歷了無數次，力求完美的你總會收穫人們的讚賞。",
"可這些好評反倒加深了你的完美主義，深怕一旦犯錯，以往的功績會遭人遺棄。",
"於是你陷入了重蹈覆輒的擔憂。",
"拜託讓今天和往常一樣吧。你這麼告訴自己。"],
3:["每次上陣前，你總會戰戰兢兢地做好各種準備。",
"而後收獲的美好結果讓你手握證據，使理智打敗緊繃。",
"讓今天的戰役再為勝場添上一筆吧。你這麼告訴自己。"]
};

const end_one=["是啊，還沒走到結局呢…又或者說世上有任何事是有結局的嗎？",
"你想起早上那場似乎會下一個世紀的滂沱大雨，不到一天時間便還給這座城市一片澄澈的天空。",
"上台前做好萬全準備的你也沒料到前方等待著你的是，職業生涯最煎熬的半個小時。",
"一切都未遵照預想進行，但或許",
"明天一早醒來，你會發現窗外又下起大雨。",
"那接下來呢…？",
"看來一切還未走到結局，甚至根本不會有結局。",
"但你不會知道將有意外發生，所以你總是拚盡全力準備。",
"就像在天空放晴之前，你依然會帶好傘。",
"你帶著這份心情，緩緩沉入夢鄉。"
];

const end_two=["是呀…你慢慢回想起來了。",
"從求學以來你已遇過不少難關，在每個難關當下，你都相信自己無法越過這道坎。",
"但後來往往也是你自己，帶著懊悔、羞憤，更義無反顧地往前衝。",
"在微觀的世界裡，你總覺得窒礙難行。",
"可在宏觀的維度上，不服輸的天性始終支配著你。",
"這次意外和過去的難關沒什麼兩樣，唯一不同的，是你更早地掙脫了思想的泥沼。",
"你帶著這份心情，緩緩沉入夢鄉。",
];

const end_three=["是呀…你慢慢回想起來了。",
"你摔跤留下的疤和笑容帶來的法令紋都在身上烙下印記。",
"可是你從不會因為害怕皺紋生長而放棄大笑，",
"相反地，在面對鏡子、手指撫過皺紋時，你會想起大笑時的場景，",
"反而不再覺得皺紋醜陋。",
"你曾因為摔了一跤便從此放棄奔跑嗎？從來沒有。",
"那些疤痕的意義不過提醒了你怎麼跑才不會受傷。",
"想著想著，你開始比較起小腿上的疤和臉上的皺紋哪個多、哪個深。",
"你在思來想去間，悄悄沉入夢鄉。"
];

const end_four=["是啊，你回想起來了。",
"從前你在比自己更強大的人的羽翼下，跌跌撞撞地學習飛行。",
"你無時無刻不在渴望天空，在一望無際的高空舞台上，華麗展翅。",
"不知不覺間，你已成長為一隻能獨自翱翔的老鷹，",
"卻忘記你也有了需要保護的雛鳥。",
"或許在雛鳥學會飛行前，你永遠無法義無反顧地投身於湛藍的天空，",
"甚至要反覆修築被牠搞砸的巢窩。",
"但你已開始想像未來的某一天，你會帶領著你的鳥兒，自由自在地嬉戲玩耍，霸佔半片天空。",
"思來想去間，你彷彿看見天空蔚藍、日光和煦…",
"你乘著風在高空浮沉，漸漸沉入夢鄉。"
];

//   OBJECTS FOR AI,OPTION,STORY

const option_for_2={
1: "把今天的慘況一五一十地告訴AI。",
2: "太累了，一時不知從何說起。",
11: "發生這種事怎麼可能睡得著？",
12:"我努力吧…",
13:"休息解決不了任何事。",
111:"我倒希望我的屬下都是電腦，才不會犯今天這種低級錯誤。",
112:"既然事情不受我掌控，那我是不是放手反而輕鬆點？",
121:"如果要求完美就能達到完美，今天就不會發生這樣的事了。",
122:"我連睡覺這種小事都做不好，還妄想能成什麼大事…",
1111:"就算有短處，也不能有致命性漏洞吧？",
1112:"我自己也不可原諒，我在各方面準備得那麼充分，就偏偏沒算到電池。",
1113:"其實新人犯錯在所難免，但偏偏錯在這麼重要的會議上。",
1211:"才不是聽天命，是我屬下出了包。",
1212:"可是我盡力了卻和沒盡力是一樣的結果，那我還努力幹嘛？",
1213:"我的確非常盡力，但還不夠盡力。",
1221:"意義…可是人如果只能完成吃喝拉撒，生命還有什麼意義？",
1222:"今天出了這岔子，你所說的成就都要毀了…",
11121:"那我該怎麼辦？",
11122:"事情發展到這個地步，還有得解決嗎？",
12111:"其實新人犯錯在所難免，但偏偏錯在這麼重要的會議上。",
12112:"可是上頭怪罪下來，也只會算在我頭上。",
12121:"是這樣沒錯，但這樣很累。",
12122:"可是我不知道自己接下來要追求什麼、為什麼盡力。",
12211:"但這些意義能為我解決眼前的問題嗎？",
12212:"我好像總是忽略了這些…"
}


//for story_between_options

const paragraph0=["AI：(暱稱)，(暱稱)~你怎麼啦 ?",
"你回過神來，才發現自己已經回到家中。眼前是你的小夥伴---AI。",
"AI：你看起來好沮喪，嘴角都要垂到下巴了。",
"和你住在同一個屋簷下的AI，是你最好的朋友、推心置腹的家人。",
"少了職場的明爭暗鬥、現實的人情冷暖，你與AI之間有十足的信任，也知道他一心向你。",
"AI：看看都是誰把你欺負傻了，整個人呆愣愣的，連話都不會說。",
"AI：是發生了什麼事嗎？"];

const paragraph1=["你長嘆一口氣，向AI娓娓道來。",
"平時你和朋友們聊起工作上的事，總會刻意屏除個人感情。",
"因為你知道他們也各有各的糟心事，你並不特別。",
"如果毫不克制地讓負面情緒如洪水氾濫，只會逼得身邊人各自逃難。",
"但在你面前耐心聆聽的AI就不一樣了，他會無條件包容你、接住你…",
"因此你放任情緒傾瀉而出，站在台上時胃翻攪的噁心感再次湧現。",
"AI：啊…好了好了。",
"AI：我聽明白了，你先別急，慢慢深吸幾口氣。",
"隨著AI的引導，你的呼吸漸漸平復下來，但腦子仍是一片混亂。",
"AI：當時你為了解決突發狀況，一定消耗了不少元氣。",
"AI：今天要好好休息才行。"
];

const paragraph2=["你搖搖頭，整個人陷進沙發裡。",
"AI：唉…要是我有心電感應就好了，都怪設計我的工程師太笨。",
"AI：但真要如此，比起人類，我豈不是更像神。",
"AI：所以，為了讓我保有一點人性，求求你告訴我發生了什麼事吧！",
"AI如此堅持，而你已經很久沒有被人追問了。",
"每當有人問起你的近況，你總是點到為止。",
"因為你無法判斷對方是真誠關心，還是客套而已。",
"真正關心我的人會再多問幾句吧…你總是這樣想。",
"但人們往往沒有再追問下去，或許是他們不在意？也或許是他們眼看話題的苗頭不對，便趕緊逃跑？",
"所以當AI堅持地問，你知道「傾訴」就是最好的回報。",
"疲憊讓你的語氣聽起來平靜，像是旁觀者的口吻。"
];

const paragraph11=["AI：是呀，要是人類能像我一樣，說關機就關機就好了。",
"AI：也正是因為人類不是程式，才無法輸入指令就得到必然結果吧！"
];

const paragraph111=["AI：啊哈哈哈，那你可太高看我們電腦了，是不是我太優秀給了你錯誤印象？",
"AI：工程師在設計我們時，賦予了我們天生的強項和弱項。",
"AI：那些研究型電腦不能像我一樣能和你聊天，而我也沒能力做他們習以為常的高階運算。",
"AI：人們也是一樣吧！"];

const paragraph1111=["職AI：場是那麼殘酷，沒人有義務容忍你的「小」錯誤。",
"AI：你一直以來都嚴格要求自己，卻沒想到栽在別人的無心上。",
"AI：你呀，就是太習慣對自己高要求，從來又都是完美執行。",
"AI：所以才會忘記這個世界是漏洞百出的。",
"AI：來個不正經的比喻，這就是同樣體積的板豆腐比凍豆腐來得沉重的原因吧！"];

const paragraph1112=["事發當下的憤怒讓你忍不住怪罪犯錯的屬下，可是現在憤怒隨著傾訴被燃燒殆盡，",
"你沉入在低迷的情緒裡，忽然想起同樣罪不可恕的自己。",
"要是你當初多提醒一句，便不會發生這些事了。",
"AI：你呀，就是太習慣對自己高要求，從來又都是完美執行。",
"AI：所以現在才回過頭來怪罪自己。",
"AI：但是怪罪過去的自己和怪罪別人一樣，是在浪費真正解決問題所需的精力。"
];

const paragraph11121=["AI：我知道你明天還要收拾殘局，會很辛苦。",
"AI：憑你一身傲骨，肯定想為這起事故來個美好的收尾吧！",
"AI：勇於承擔，說不定還能凸顯你的大將之風，化腐朽為神奇喔！"];

const paragraph11122=["AI：未到終局，焉知生死？",
"AI：你沒發現事態總跑在你前頭，讓你捉摸不透嗎？",
"AI：牧羊人趕羊群，也總會遇上一兩隻未馴化的羊。",
"AI：與其吃力不討好地拿牧鞭追趕，這次不如放開手，看看這隻羊會跑到哪去吧。",
"AI：說不定牠會帶你發現一片更廣闊的草原喔！"];

const paragraph12=["AI：像你這樣力求完美的人，要是能分一點決心在好好睡覺上就好了。"];

const paragraph121=["AI：盡人事後，就只能聽天命了嘛。",
"AI：在我看來，你已經非常盡力了。"];

const paragraph1211=["你回想起下午他慌亂又無辜的模樣，只覺得可恨又無奈。",
"AI：屬下就是屬下，要是是你來籌備會議，一定會把備案想好。",
"AI：看來他還要從你身上學習很多東西。"];

const paragraph12111=["AI：這次交的學費真的好貴啊！",
"AI：靠犧牲你的小我才有的機會教育，他肯定長記性了。",
"AI：你慢慢擁有了自己的團隊，便要身兼領導者的責任，真是太不容易了！"];

const paragraph12112=["AI：嗯…的確，身為領導者總有些天降的大鍋要背。果然是天降大鍋於斯人也。",
"AI：那也沒辦法了，兵來將擋、鍋來就接，像盤古頂天那樣用超強臂力撐住！",
"AI：勇於承擔，才能給這件意外一個美好的收尾，說不定還能化腐朽為神奇喔！"];

const paragraph1212=["你想起這一路走來一直拼命苦幹，依然擺脫不了平庸的生活。今天又連一次簡報都掌握不了。",
"你就像充飽了氣的氣球，一旦出現破口，就會在空中凌亂地飛竄，然後狠狠摔在地上，剩下一片乾癟的殘骸。",
"AI：失敗了會氣餒很正常。",
"AI：不過在你的經驗裡，更多的是盡力後有好結果的事吧！",
"AI：溫暖的住所、豐衣足食…還有我，也是因為你的努力，才有機會來到你身邊呀！"];

const paragraph12121=["AI：在我看來，你比常人更加追求完美，也因此更加辛苦。",
"AI：但這不就是你性格中最鮮明的特質嗎？",
"AI：當然了，感覺累就該休息。不過依你的個性，等休息好了就會又忍不住往前衝吧。"];

const paragraph12122=["AI：其實你在追求的一直是超越自己呀！",
"AI：因為每一次都想比上一次更好，所以才會在意和沮喪。",
"AI：說實話，比起盡力後失敗，一開始就放棄會讓你更不甘心吧！"];

const paragraph1213=["像沒帶電池這種人為疏失，是完全可以避免的。",
"只要屬下多想一步，又或者你多提醒一句…"];

const paragraph122=["AI：睡覺是小事？在我看來，食衣住行這些民生問題才是大事呢！",
"AI：你現在擁有溫暖的住所，豐衣足食的生活，不就是巨大的成就嗎？"];

const paragraph1221=["長久以來，你盡量避免去思考意義，因為那是個無解的命題。",
"你轉而將眼光放在完成當下、短期的階段性任務，不讓自己迷失在哲學宇宙中。",
"但今天的意外摧毀了你為自己建造的堡壘，被埋在地基裡的恐懼和疑惑如困獸破土而出。",
"AI：意義也會在你賦予事物意義時產生的喔！",
"AI：比如陰霾的天空、炫目的晚霞、生活中的起伏跌宕、經驗裡的喜怒哀樂…",
"AI：就連我降生在這個世界的意義，也是你給予我的奇蹟呢！"];

const paragraph12211=["AI：當然了，這樣一來，不完美和瑕疵不過是換了一種形貌存在。",
"AI：既然事態發展已經超出常規，那就別再用你的常規去應對啦！",
"AI：或許你用更從容的方式面對，會有意想不到的效果喔！"];

const paragraph12212=["AI：那就從現在開始，讓這些意義重新走進你心裡吧。",
"AI：既然事態發展已經超出常規，那就別再用你的常規去應對啦！",
"AI：或許你用更從容的方式面對，會有意想不到的效果喔！"];

const paragraph13=["AI：怎麼會呢？我需要充電才能維持運作，人也是一樣的！",
"AI：何況現在掌握權不在你手中，硬撐著也解決不了問題呀。"];

const story_between_options={
1:paragraph1,
2:paragraph2,
11:paragraph11,
12:paragraph12,
13:paragraph13,
111:paragraph111,
112:[],
121:paragraph121,
122:paragraph122,
1111:paragraph1111,
1112:paragraph1112,
1113:[],
1211:paragraph1211,
1212:paragraph1212,
1213:paragraph1213,
1221:paragraph1221,
1222:[],
11121:paragraph11121,
11122:paragraph11122,
12111:paragraph12111,
12112:paragraph12112,
12121:paragraph12121,
12122:paragraph12122,
12211:paragraph12211,
12212:paragraph12212,
111211:end_two,
111221:end_one,
121111:end_four,
121121:end_four,
121211:end_two,
121221:end_two,
122111:end_three,
122121:end_three
}


// =======================================================================================
//                         CONTROL VARIABLES AND FUNCTIONS
// =======================================================================================


var stage=0;
var story_number=0;
var state="";
var opening_state="";
var tell_story=false;
var opening1=true;
var opening2=true;
var opening_choice=true;

function merge_check(_state){
if(_state==="2"){
    sendtext();
    state="1";
    story_number=9;
    tell_story=true;
    changebutton();
    changephoto();
    return true;
}

if(_state==="13"){
    sendtext();
    state="121";
    story_number=0;
    tell_story=true;
    changebutton();
    changephoto();
    return true;
}
if(_state==="112"){
    state="1212";
    story_number=0;
    tell_story=true;
    changebutton();
    changephoto();
    return true;
}

if(_state === "1222"){
    state="1221";
    story_number=0;
    tell_story=true;
    changebutton();
    changephoto();
    return true;
}

if(_state === "1213"){
    sendtext();
    state="1112";
    story_number=3;
    tell_story=true;
    changebutton();
    changephoto();
    return true;
}
if(_state === "1113"){
    state="12111";
    story_number=0;
    tell_story=true;
    changebutton();
    changephoto();
    return true;
}
if(_state === "1111"){
    sendtext();
    state="1211";
    story_number=0;
    tell_story=false;
    changebutton();
    changephoto();
    return true;
}
return false;
}

function story_manage(){
    if(story_number+1<story_between_options[state].length){
        sendtext();
        story_number++;
        changephoto();
        return;
    }
    if(merge_check(state)){
        return;
    }
    sendtext();
    story_number=0;
    tell_story=false;
    changephoto();
    changebutton();
    End_check();
}


function sendtext(){
document.getElementById("paragraph1").innerHTML=story_between_options[state][story_number];
console.log(state);
console.log(story_number);
}

function End_check(){
if(story_between_options[state+"1"]===undefined && story_between_options[state+"2"]===undefined && story_between_options[state+"3"]===undefined){
document.getElementById("btn1").style.display="none";
document.getElementById("restart").style.display="block";
document.getElementById("stage").src="img/background/14.jpg";
}
return;
}

// function changephoto(){
//     // if(state!=""||state!="")
//     //     return;
//     // let photopath="img/background/";
//     // number=Math.floor(Math.random()*5)+1;
//     // photopath+="0"+number+".jpg";
//     // document.getElementById("stage").src=photopath;
//     // return;
// }

const stage_photo=document.getElementById("stage");

function changephoto(){
if(opening1 && story_number===3)
    stage_photo.src="img/background/01.jpg";
else if(opening1 && story_number===9)
    stage_photo.src="img/background/02.jpg";
else if(!opening1 && opening_choice && story_number===0)
    stage_photo.src="img/background/03.jpg";
else if(!opening1 && opening_choice && story_number===1)
    stage_photo.src="img/background/02.jpg";
else if(!opening1 && opening2 && story_number===1)
    stage_photo.src="img/background/04.jpg";
else if(!opening1 && opening2 && story_number===4)
    stage_photo.src="img/background/16.jpg";
else if(!opening1 && opening2 && story_number===5)
    stage_photo.src="img/background/05.jpg";
else if(!opening1 && opening2 && story_number===10)
    stage_photo.src="img/background/06.jpg";
else if(!opening1 && opening2 && story_number===14)
    stage_photo.src="img/background/07.jpg";
else if(!opening1 && opening2 && story_number===15)
    stage_photo.src="img/background/06.jpg";
else if(!opening1 && opening2 && story_number===18)
    stage_photo.src="img/background/16.jpg";
else if(!opening1 && opening2 && story_number===19)
    stage_photo.src="img/background/09.jpg";
else if(!opening1 && opening2 && story_number===24)
    stage_photo.src="img/background/10.jpg";  // Ai出場
else if(state==="1" && story_number===9)
    stage_photo.src="img/background/11.jpg";
else if(state==="1111" ||state==="1112"||state==="1113"||state==="1211"||state==="1212"||state==="1213"||state==="1221"||state==="1222")
    stage_photo.src="img/background/12.jpg";
else if(state==="111211" ||state==="111221"||state==="121111"||state==="121121"||state==="121211"||state==="121221"||state==="122111"||state==="122121")
    stage_photo.src="img/background/13.jpg";

make_sound();
return;
}

// =======================================================================================
//                          MUSIC PART
// =======================================================================================

function FadeIn(sound) {
    sound.volume=0.15;
    sound.play();
    var add_volume = setInterval(frame, 1000);
    function frame(){
    if ( sound.volume < 0.75 ){
            sound.volume += 0.02;
    }
    else{
        clearInterval(add_volume);
        return;
    }
    }
    return;
}


function FadeOut(sound) {
    var add_volume = setInterval(frame, 1000);
    function frame(){
    if ( sound.volume > 0.25 ){
            sound.volume -= 0.15;
            console.log(sound.volume);
    }
    else{
        clearInterval(add_volume);
        sound.pause();
        sound.load();
        return;
    }
    }
    return;
}

const music1 = document.getElementById("music01");  //rain1
const music2 = document.getElementById("music02");  //relax1
const music3 = document.getElementById("music03");  //meeting1
const music4 = document.getElementById("music04");  //home1
const music5 = document.getElementById("music05");  //rain2 in the car
const music6 = document.getElementById("music06");  //relax2
const music7 = document.getElementById("music07");  //relax3
const music8 = document.getElementById("music08");  //meeting2
const music9 = document.getElementById("music09");  //meeting3
const music10 = document.getElementById("music10");  //rain at home
const music11 = document.getElementById("music11");  //rain at home2



function make_sound(){
if(opening1 && story_number===1){
    FadeIn(music1);
}
else if(opening1 && story_number===2){
    FadeIn(music5);
}
else if(opening1 && story_number===9){
    FadeOut(music5);
}
else if(opening1 && story_number===11){
    FadeOut(music1);
}
else if(!opening1 && opening_choice && story_number===1){
    FadeIn(music6);
}
else if(!opening1 && opening2 && story_number===1){
    FadeOut(music6);
    music11.volume=0.1;
    music11.play();
}
else if(!opening1 && opening2 && story_number===4){
    music11.pause();
    music11.load();
}
else if(!opening1 && opening2 && story_number===5){
    FadeIn(music3);
}
else if(!opening1 && opening2 && story_number===11){
    FadeIn(music8);
    FadeOut(music3);
}
else if(!opening1 && opening2 && story_number===15){
    FadeIn(music9);
    FadeOut(music8);
}
else if(!opening1 && opening2 && story_number===18){
    music9.pause();
}
else if(!opening1 && opening2 && story_number===19){
    music4.volume=0.1;
    music4.play();
    music10.volume=0.02;
    music10.play();
}
else if(state==="111211" ||state==="111221"||state==="121111"||state==="121121"||state==="121211"||state==="121221"||state==="122111"||state==="122121"){
    FadeOut(music4);
    music10.pause();
    music10.load();
    music7.volume=0.05;
    music7.play();
}
}

// =======================================================================================
//                          MUSIC PART END
// =======================================================================================

function changebutton(){
    if(tell_story===true){
        document.getElementById("btn1").innerText="NEXT";
        document.getElementById("btn2").style.display="none";
        document.getElementById("btn3").style.display="none";
    }
    else{
        if(option_for_2[state+"1"]!=undefined){
            document.getElementById("btn1").style.display="block";
            document.getElementById("btn1").innerText=option_for_2[state+"1"];
        }
        if(option_for_2[state+"2"]!=undefined){
            document.getElementById("btn2").style.display="block";
            document.getElementById("btn2").innerText=option_for_2[state+"2"];
        }
        if(option_for_2[state+"3"]!=undefined){
            document.getElementById("btn3").style.display="block";
            document.getElementById("btn3").innerText=option_for_2[state+"3"];
        }
    }
}


// =======================================================================================
//                          CODING PART (OPENING)
// =======================================================================================

function btnclick0(e){
for_opening();
}
function btnclick01(e){
choice_close();
opening_state+="1";
for_opening();
}
function btnclick02(e){
choice_close();
opening_state+="2";
for_opening();
}
function btnclick03(e){
choice_close();
opening_state+="3";
for_opening();
}

function choice_close(){
document.getElementById("btn01").style.display="none";
document.getElementById("btn02").style.display="none";
document.getElementById("btn03").style.display="none";
document.getElementById("btn0").style.display="block";
return;
}

function for_opening(){
    if(opening1){
        if(story_number+1<story1.length){
            document.getElementById("btn0").innerHTML="NEXT";
            document.getElementById("paragraph1").innerHTML=story1[story_number];
            story_number++;
            changephoto();

            return;
        }
        document.getElementById("paragraph1").innerHTML=story1[story_number];
        story_number=0;
        document.getElementById("btn0").style.display="none";
        opening1=false;
        changephoto();
        document.getElementById("btn01").style.display="block";
        document.getElementById("btn02").style.display="block";
        document.getElementById("btn03").style.display="block";
        return;
    }
    if(opening_choice){
    if(story_number+1<choice[opening_state].length){
            document.getElementById("paragraph1").innerHTML=choice[opening_state][story_number];
            story_number++;
            changephoto();
            return;
        }
        document.getElementById("paragraph1").innerHTML=choice[opening_state][story_number];
        story_number=0;
        opening_choice=false;
        changephoto();
        return;
    }
    if(opening2){
        
        if(story_number+1<story2.length){
            document.getElementById("paragraph1").innerHTML=story2[story_number];
            story_number++;
            changephoto();
            return;
        }
        document.getElementById("paragraph1").innerHTML=story2[story_number];
        story_number=0;
        document.getElementById("btn0").style.display="none";
        opening2=false;
        changebutton();
        changephoto();
        document.getElementById("btn1").style.display="block";
        document.getElementById("btn2").style.display="block";
        return;
    }
}

// =======================================================================================
//                          CODING PART (MAIN BODY)
// =======================================================================================

function btnclick1(e){
if(tell_story===true){
    story_manage();
    return;
}
state+="1";
tell_story=true;
changephoto();
changebutton();
story_manage();
}


function btnclick2(e){
if(tell_story===true){
    story_manage();
    return;
}
state+="2";
tell_story=true;
changephoto();
changebutton();
story_manage();
}

function btnclick3(e){
if(tell_story===true){
    story_manage();
    return;
}
state+="3";
tell_story=true;
changephoto();
changebutton();
story_manage();
}


function restart(e){
state="";
tell_story=false;
story_number=0;
opening_state="";
opening1=true;
opening2=true;
opening_choice=true;
document.getElementById("btn0").innerHTML="START";
document.getElementById("btn0").style.display="block";
document.getElementById("btn1").style.display="none";
document.getElementById("restart").style.display="none";
document.getElementById("stage").src="img/background/15.jpg";
document.getElementById("paragraph1").innerHTML="我們來玩一個遊戲。";
music7.pause();
music7.load();
}

// =======================================================================================
//                          HIDING TEXT (MAIN BODY)
// =======================================================================================

function show(e){
    document.getElementById("show").style.display="none";
    document.getElementById("hide").style.display="block";
    document.getElementById("hide1").style.display="block";
    document.getElementById("hide2").style.display="block"; 
}
function hide(e){
    document.getElementById("show").style.display="block";
    document.getElementById("hide").style.display="none";
    document.getElementById("hide1").style.display="none";
    document.getElementById("hide2").style.display="none"; 
}

function show_game(e){
    document.getElementById("show_game").style.display="none";
    document.getElementById("game1").style.display="block";
    document.getElementById("game2").style.display="block";
    document.getElementById("game3").style.display="block"; 
    document.getElementById("hide_game").style.display="block"; 
}
function hide_game(e){
    document.getElementById("show_game").style.display="block";
    document.getElementById("game1").style.display="none";
    document.getElementById("game2").style.display="none";
    document.getElementById("game3").style.display="none";
    document.getElementById("hide_game").style.display="none";
}