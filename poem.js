// ==========================================================================
// 3. POEM DATABASE (30 LONG POEMS)
// ==========================================================================

const poems = [
    // --- SWEET (1-33) ---
    {
        id: 1,
        title: "In the Quiet of the Morning",
        category: "Sweet",
        content: `Before the sun begins to rise and paint the morning gray,\nBefore the rushed and noisy world gets caught up in the day,\nMy thoughts will always wander to the soft light of your smile,\nAnd I just sit in quiet peace and linger for a while.\n\nYou have this gentle way about you, quiet and sincere,\nThat makes the world feel softer every time that you are near.\nIf I could wrap this feeling up and hold it in my hands,\nI'd save it for the rainy days that no one understands.`
    },
    {
        id: 2,
        title: "Constellations in Your Eyes",
        category: "Sweet",
        content: `I used to look up at the stars and wonder what was there,\nAcross the vast and empty dark of cold celestial air.\nBut now I look into your eyes and find a warmer glow,\nA universe of gentle things that only we two know.\n\nNo map of distant galaxies could ever match your grace,\nNo endless reach of cosmic dust could hold a brighter place.\nYou are my quiet universe, my constant guiding star,\nAnd I am endlessly in awe of simply who you are.`
    },
    {
        id: 3,
        title: "A Gentle Rhythm",
        category: "Sweet",
        content: `Like waves that kiss the quiet shore and pull back to the sea,\nYour laughter leaves a soft impress on every part of me.\nIt isn't loud or grandly made, but steady, warm, and true,\nA comfort that I only find whenever I'm with you.\n\nWe don't need fancy palaces or grand events to share,\nJust sitting in a quiet room with you beside my chair.\nThe simplest moments hold the grace that keeps my heart complete,\nBecause with you, the plainest day becomes exceptionally sweet.`
    },
    {
        id: 4,
        title: "Favorite Chapter",
        category: "Sweet",
        content: `If life were bound into a book of thousand printed leaves,\nWith tales of journeys through the dark and gold that sunlit weaves,\nI’d turn right to the page where you first walked into the frame,\nAnd underline each paragraph that softly holds your name.\n\nNo other chapter holds the light or sweetness of that day,\nWhen quiet fate stepped in and brought your heart along my way.\nAnd every single page we turn from this point to the end,\nWill be my favorite story that I'll read and read again.`
    },
    {
        id: 5,
        title: "Sunlight on Oak Leaves",
        category: "Sweet",
        content: `There is a warm and golden shade that filters through the trees,\nWhen afternoon begins to fade into a gentle breeze.\nThat is the exact feeling that you bring into my mind,\nA warmth so rare and peaceful that is very hard to find.\n\nYou make the ordinary days feel soft and deeply blessed,\nA place where tired wandering hearts can finally stop and rest.\nI thank the quiet stars above for bringing you to me,\nThe sweetest gift of life I ever thought I’d get to see.`
    },
    {
        id: 6,
        title: "Written in the Margin",
        category: "Sweet",
        content: `Some people write their love in stone with heavy, carved decree,\nWhile others sing it to the skies for all the world to see.\nBut I would rather write your name in small and secret script,\nUpon the margins of my days where quiet joy has slipped.\n\nIn tiny notes and stolen glances, laughter shared alone,\nA tender world of sweetness that is entirely our own.\nYou are the gentle footnote in every thought I hold,\nMore precious than a treasure chest of heavy shining gold.`
    },
    {
        id: 7,
        title: "The Sound of Your Name",
        category: "Sweet",
        content: `There are words that carry weight and words that sound like songs,\nAnd words that point the weary heart to where it best belongs.\nBut among the thousands spoken through the noise of day and night,\nYour name remains the sweetest one, spoken soft and light.\n\nIt carries quiet comfort like a rain upon the roof,\nOf all the gentle things in life, your existence is the proof.\nI love to speak it softly when the evening starts to fall,\nFor in your name lies everything I care about at all.`
    },
    {
        id: 8,
        title: "Soft Spoken Grace",
        category: "Sweet",
        content: `You do not have to shout to make the whole room turn and see,\nYour beauty lies in quiet things and simple honesty.\nThe way you tilt your head when listening closely to a friend,\nThe kindness in your gentle heart that seems to never end.\n\nIn a world that rushes onward without stopping to be kind,\nYou are the rarest sanctuary anyone could find.\nI cherish every little look, every smile you send my way,\nYou make my world much sweeter than my words could ever say.`
    },
    {
        id: 9,
        title: "Coffee and Sunbeams",
        category: "Sweet",
        content: `A quiet cup of warm drip tea, a beam of morning light,\nThe peaceful feeling in the air when darkness yields to bright.\nThese simple joys are wonderful, but none of them compare,\nTo sitting right beside you with no worries left to bear.\n\nYour presence feels like sunday mornings, relaxed and full of ease,\nA quiet breath of fresh air blowing through the summer trees.\nI’m grateful for the simple things, but most of all for you,\nMy favorite constant blessing in everything I do.`
    },
    {
        id: 10,
        title: "The Little Things",
        category: "Sweet",
        content: `It isn't just the big events that make me love you so,\nIt’s all the tiny unscripted things that only two can know.\nThe random memes you send to me, the way you say hello,\nThe subtle little habits that you think I do not know.\n\nThese tiny little details make a mosaic so rare,\nOf someone truly wonderful beyond any compare.\nI save them in my memory, a treasure chest so grand,\nHolding onto every little moment hand in hand.`
    },
    {
        id: 31,
        title: "Whispers in the Breeze",
        category: "Sweet",
        content: `When afternoon soft shadows stretch across the garden ground,\nI listen to the gentle breeze and hear a quiet sound.\nIt whispers of your sweetness like a blossom in the spring,\nAnd brings to mind the simple joy that only you can bring.\n\nNo melody composed by hand could ever match your grace,\nNo painted canvas captures what I see upon your face.\nYou fill my ordinary days with light so warm and clear,\nAnd everything feels sweeter just whenever you are near.`
    },
    {
        id: 32,
        title: "A Pocket Full of Sunshine",
        category: "Sweet",
        content: `If I could catch a sunbeam on a cold and cloudy day,\nI'd tuck it in my pocket just to give it all away.\nI'd hand it to you softly when the skies are dark and gray,\nTo light up every corner of your path along the way.\n\nBut even without sunshine, you bring light into the room,\nA warm and steady radiance that chases away gloom.\nTo know you is to walk within a quiet, golden beam,\nThe sweetest realization of my favorite morning dream.`
    },
    {
        id: 33,
        title: "Tracing the Horizon",
        category: "Sweet",
        content: `The sky puts on a show at dusk of purple, pink, and gold,\nA breathtaking display of light that never quite grows old.\nYet as I stand and watch the colors melt into the night,\nMy heart still finds in you a far more mesmerizing sight.\n\nFor sunsets fade away into the shadows of the evening,\nWhile your sweet grace remains with me, forever undeceiving.\nA constant spark of happiness that brightens up my soul,\nThe gentlest little missing piece that makes my world feel whole.`
    },
    {
        id: 34,
        title: "Dappled Light",
        category: "Sweet",
        content: `Through forest leaves the afternoon breaks into spots of gold,\nCreating patterns on the path that quiet woods unfold.\nThat is the way your gentle smile brightens up my mind,\nIn every tangled, busy hour, the sweetest spot I find.\n\nYou make the shadows disappear with just a single word,\nThe sweetest kind of poetry that I have ever heard.\nI keep your kindness in my heart where only soft things stay,\nTo light my steps and lead me through the longest working day.`
    },
    {
        id: 35,
        title: "The Softest Melody",
        category: "Sweet",
        content: `Some songs are played with heavy drums and brass that rings out clear,\nWhile others chime like music boxes soft against the ear.\nYour voice belongs among the tunes that quiet spirits sing,\nA gentle lullaby of peace that only angels bring.\n\nI listen to your cadence when you speak of simple things,\nAnd feel the kind of happiness that gives a heart its wings.\nNo symphony composed on earth holds half your gentle charm,\nWith you, my world is melody, serene and safe from harm.`
    },
    {
        id: 36,
        title: "Petals in the Wind",
        category: "Sweet",
        content: `A cherry blossom falls so soft upon the garden grass,\nA gentle moment dancing by before the light can pass.\nYour sweetness has that same soft touch, so elegant and light,\nIt turns a plain and simple day into a pure delight.\n\nI watch you move through life with such a warm, forgiving grace,\nAnd see how every room grows bright the moment you take place.\nYou are the sweetest flower in a garden full of bloom,\nA breath of fresh and springtime air inside a quiet room.`
    },
    {
        id: 37,
        title: "Golden Hour Glow",
        category: "Sweet",
        content: `There comes a moment right before the evening sun goes down,\nWhen golden light begins to wash across the busy town.\nThat fleeting, magic hour holds a sweet and quiet peace,\nWhere all the rushing noise of life begins to slow and cease.\n\nThat golden hour is how you feel inside my quiet heart,\nA gentle glow that stays with me e’en when we are apart.\nYou paint my world with warmth and love so tenderly designed,\nThe sweetest soul and softest heart I ever hoped to find.`
    },
    {
        id: 38,
        title: "Secret Starlight",
        category: "Sweet",
        content: `The night sky holds a million stars that shine for all to see,\nBut you possess a private light that shines alone for me.\nIt isn't flashy, loud, or bright, but steady, soft, and clear,\nA gentle beacon guiding me whenever dark is near.\n\nI store your smile inside my mind like starlight kept in glass,\nTo keep me warm through chilly nights until the shadows pass.\nYou are the sweetest galaxy, my peaceful northern star,\nAnd I am forever blessed to be wherever you are.`
    },
    {
        id: 39,
        title: "Paper Lanterns",
        category: "Sweet",
        content: `Like paper lanterns drifting soft across a summer night,\nYour quiet thoughts and gentle words drift up in glowing light.\nThey warm the cool and dark air with a soft, inviting glow,\nAnd bring a sweet tranquility that only you bestow.\n\nI love the way you see the world with kind and patient eyes,\nFinding beauty in the small under the quiet skies.\nYou teach my heart to slow its pace and savor what is real,\nThe sweetest kind of quiet love a human heart can feel.`
    },
    {
        id: 40,
        title: "Morning Dew",
        category: "Sweet",
        content: `Before the sun has touched the fields, the dew rests on the leaves,\nA sparkling row of crystal beads that morning gently weaves.\nYour presence in my daily life feels fresh and pure like dew,\nClearing away the dusty thoughts and making all things new.\n\nWith every dawn that breaks across the quiet morning sky,\nI thank the stars that brought us close as time goes passing by.\nYou are my morning freshness, my sweet and steady light,\nWho turns the darkest hours into something pure and bright.`
    },
    {
        id: 41,
        title: "Butterflies and Teacups",
        category: "Sweet",
        content: `A quiet room, a steaming cup, a window opened wide,\nA butterfly that flutters soft in gardens just outside.\nThese simple, cozy moments bring a smile upon my face,\nBut sitting right beside you makes them all feel full of grace.\n\nYour sweetness isn't grand or loud, but soft as velvet wings,\nFound in the quiet laughter that your gentle presence brings.\nI hold these quiet tea-time chats as treasures in my mind,\nFor sweeter companionship no soul could ever find.`
    },
    {
        id: 42,
        title: "A Thread of Gold",
        category: "Sweet",
        content: `Through all the tapestry of life with threads of gray and white,\nYour love is woven through it like a thread of golden light.\nIt catches every sunbeam and it shines when dark falls down,\nThe sweetest piece of embroidery inside this tapestry crown.\n\nNo matter where the pattern goes or what the design may be,\nThat golden thread remains intact between your heart and me.\nIt binds our quiet thoughts as one with soft and steady grace,\nAnd makes this world a sweeter and far better place.`
    },
    {
        id: 43,
        title: "The Softest Echo",
        category: "Sweet",
        content: `When quietness falls on the house and evening settles deep,\nYour words echo inside my mind before I fall asleep.\nThey sound like sweet and soft refrains from songs I used to know,\nBringing a calm and gentle peace that sets my heart aglow.\n\nI rest my head upon the pillow, thinking of your face,\nAnd feel wrapped up in comfort in your memory's embrace.\nYou are the sweetest song that plays inside my quiet head,\nA gentle blessing remembered in every word you said.`
    },

    // --- COMFORT (11-20, 44-67) ---
    {
        id: 11,
        title: "A Safe Harbor",
        category: "Comfort",
        content: `When storms begin to gather high and winds begin to blow,\nAnd all the paths you walk upon feel dark and hard to know,\nRemember that you have a place where you can always hide,\nA quiet, steady harbor where the waters wait inside.\n\nYou do not have to carry all the weight upon your own,\nNor walk through heavy shadows completely all alone.\nWhenever life feels heavy and you need a place to stand,\nJust turn around and look for me—I'll always hold your hand.`
    },
    {
        id: 12,
        title: "Soft Rain on the Glass",
        category: "Comfort",
        content: `Listen to the quiet rain upon the windowpane,\nAnd let it wash away the noise, the pressure, and the strain.\nYou don't have to be perfect, you don't have to be strong,\nIt's okay to feel weary when the days are hard and long.\n\nJust close your eyes and take a breath, let go of every fear,\nNothing in this heavy world can hurt you while I'm here.\nWe'll let the rain fall down outside and wait for sun above,\nWrapped inside the quiet safety of an endless love.`
    },
    {
        id: 13,
        title: "Unspoken Peace",
        category: "Comfort",
        content: `We do not always need to speak or fill the space with sound,\nSometimes the greatest comfort is in quietness profound.\nJust sitting here beside you with our shoulders touching light,\nIs enough to chase away the heavy shadows of the night.\n\nYour presence brings a stillness that my restless spirit needs,\nLike morning dew that settles soft upon the meadow reeds.\nNo matter how chaotic or confusing things may get,\nIn you I find a quiet peace I never will forget.`
    },
    {
        id: 14,
        title: "When the World is Loud",
        category: "Comfort",
        content: `The world is full of voices shouting what you ought to be,\nDemanding every ounce of strength and total energy.\nBut when you step inside this space, you leave that all behind,\nNo expectations placed on you, just quiet peace of mind.\n\nYou can be tired, you can cry, or simply sit in silence,\nAway from all the busy crowds and heavy world's insistence.\nI love you in your quiet times, your sad times, and your rest,\nJust being who you are right now is always more than best.`
    },
    {
        id: 15,
        title: "Light in the Evening",
        category: "Comfort",
        content: `When daylight fades away into a deep and quiet blue,\nAnd evening brings its stillness over everything we knew,\nI hope you feel the gentle warmth of knowing you belong,\nTo someone who will guard your heart and keep your spirit strong.\n\nThe night may bring its coldness, but inside we have a flame,\nThat burns so soft and steady every time I hear your name.\nRest easy now, sweet soul of mine, and let your worries cease,\nFor you are deeply loved tonight in unconditional peace.`
    },
    {
        id: 16,
        title: "Shelter from the Cold",
        category: "Comfort",
        content: `If winter blows its frosty breath across your daily road,\nAnd every step feels difficult beneath a heavy load,\nI'll be the warm and cozy coat that keeps the frost away,\nAnd walk right there beside you till the coming of the day.\n\nNo bitter wind can chill the heart that knows where it is bound,\nNo shadows stay forever once a true light has been found.\nSo rest your weary head upon my shoulder for a while,\nAnd let me bring back once again your soft and beautiful smile.`
    },
    {
        id: 17,
        title: "Breathing Space",
        category: "Comfort",
        content: `Take a long and deep slow breath, and let your shoulders drop,\nYou do not have to run so fast, it’s alright now to stop.\nThe world will keep on turning if you take a little break,\nSo pause and let your mind unwind from every small heartache.\n\nI’m keeping watch right here beside your quiet breathing space,\nTo make sure nothing bothers you or enters in this place.\nYou are allowed to rest, my love, you've done enough today,\nJust slip into a peaceful sleep and let the worries sway.`
    },
    {
        id: 18,
        title: "The Quiet Anchor",
        category: "Comfort",
        content: `Ships may toss upon the sea when ocean currents pull,\nAnd life can feel overwhelming when the mind is full.\nBut anchors hold the vessel steady in the roaring tide,\nUntil the storm has passed away and calm waters abide.\n\nLet me be your quiet anchor when the sea gets rough,\nWhen you feel overwhelmed and feel like you are not enough.\nI’ll hold you steady through the night until the morning beam,\nAnd keep you safe and grounded in the middle of the stream.`
    },
    {
        id: 19,
        title: "Gentle Blanket",
        category: "Comfort",
        content: `Wrap yourself in quiet thoughts like blankets warm and deep,\nAnd let the worries of the past slip softly into sleep.\nThere is no test you have to pass, no mountain you must climb,\nJust simply exist right here within this gentle stretch of time.\n\nI love you for the heart you hold, so caring and so true,\nAnd every peaceful thought I have returns right back to you.\nSleep softly now, my dear Zaira, and dream of happy things,\nUnderneath the gentle cover that my devotion brings.`
    },
    {
        id: 20,
        title: "A Soft Place to Fall",
        category: "Comfort",
        content: `You spend so much time being strong and caring for the rest,\nGiving everybody else your absolute best.\nBut even caregivers need a place to lay their heavy head,\nAnd listen to sweet words of comfort quietly instead.\n\nSo let me take care of you now, and guard your gentle peace,\nUntil the worries in your mind begin to slow and cease.\nYou are safe, you are loved, and you are cherished through and through,\nAnd nothing in this world will change what I feel for you.`
    },
    {
        id: 44,
        title: "The Quiet Hearth",
        category: "Comfort",
        content: `When icy winds blow dark and cold across the empty street,\nCome step inside where fire glows and brings a steady heat.\nYou leave your worries at the door, your heavy boots and coat,\nAnd listen to the peaceful song that quiet hearths denote.\n\nYou do not have to explain the reasons for your tired eyes,\nNor try to hide the heavy thoughts beneath a brave disguise.\nHere by the fire, you can rest and simply let things be,\nWrapped in the calm and safe embrace of gentle sanctuary.`
    },
    {
        id: 45,
        title: "Soft Light on Still Waters",
        category: "Comfort",
        content: `When thoughts inside your mind swirl like a restless mountain lake,\nDriven by winds of anxious fear that keep your soul awake,\nRemember there’s a quiet bay where waters settle still,\nProtected from the howling gusts behind a gentle hill.\n\nLet my soft words be that green hill that shelters you from wind,\nA quiet place where restless thoughts and worries softly end.\nLook down into the glassy calm and see the stars shine clear,\nNothing can break your peace tonight while I am standing near.`
    },
    {
        id: 46,
        title: "Lighthouse in the Fog",
        category: "Comfort",
        content: `When fog rolls thick across the bay and hides the ocean shore,\nAnd you feel lost upon the waves, uncertain anymore,\nA single steady light shines out across the gray expanse,\nTo guide your ship back home again and give your heart a chance.\n\nI am that light that watches for your safe return each night,\nTo keep you off the dangerous rocks until the morning light.\nNo matter how confused or lost you feel out on the sea,\nYou always have a guiding light that leads you back to me.`
    },
    {
        id: 47,
        title: "A Restful Canopy",
        category: "Comfort",
        content: `Beneath the broad and leafy boughs of an old willow tree,\nThere lies a shaded, quiet patch where tired souls rest free.\nThe world above may burn with heat and rush with busy care,\nBut underneath the green branches, sweet coolness fills the air.\n\nLie down upon the soft green grass and close your weary eyes,\nListen to leaves rustle soft against the summer skies.\nI’ll watch the shadows shift and protect your quiet sleep,\nSafe inside this green canopy where peaceful thoughts run deep.`
    },
    {
        id: 48,
        title: "Unwinding the Threads",
        category: "Comfort",
        content: `When your mind feels like a ball of tangled, knotted string,\nFrom all the complicated tasks that daily duties bring,\nDon't pull or strain to force the knot, or worry in despair,\nJust hand the tangled mess to me and let me hold it there.\n\nWe’ll loosen up each tight loop slow, with patience and with ease,\nUnraveling the heavy stress until your spirit frees.\nOne tiny thread at a time, we'll lay the worries flat,\nUntil your mind is smooth again and peaceful after that.`
    },
    {
        id: 49,
        title: "Quiet Raindrops",
        category: "Comfort",
        content: `There’s music in the quiet rain that falls upon the roof,\nOf nature's slow and gentle hand, a soft, reassuring proof.\nIt tells you that the dry earth drinks and life will green again,\nThat every heavy storm gives way to gentle summer rain.\n\nSo listen to the rhythmic tap against the windowpane,\nAnd let it wash away your grief, your fatigue, and your strain.\nTomorrow brings a fresh new field beneath a brighter sun,\nRest now, my love, inside the house, your daily work is done.`
    },
    {
        id: 50,
        title: "The Steady Mountain",
        category: "Comfort",
        content: `The clouds may swirl around the peak and shadows cover slope,\nAnd dark grey skies may hide away the sunrise light of hope.\nBut deep beneath the mist and fog, the mountain stands secure,\nUnmoved by passing stormy winds, immutable and pure.\n\nMy love for you stands like that peak through every changing weather,\nA quiet, steady rock of strength when we walk through together.\nYou don't have to be strong right now; lean hard against my side,\nMy strength will be your mountain peak where you can safely hide.`
    },
    {
        id: 51,
        title: "Feather in the Wind",
        category: "Comfort",
        content: `If you feel light and drifting free like feathers in the air,\nWithout a place to land your feet or anchor anywhere,\nI’ll be the soft and gentle hand that catches you with care,\nTo give your weary, floating soul a home to nestle there.\n\nNo harsh winds will blow you off or toss you to and fro,\nWithin my palm you’ll find a rest that lets your spirit grow.\nA safe and steady resting place where drifting comes to end,\nWrapped in the quiet comfort of your lover and your friend.`
    },
    {
        id: 52,
        title: "Candle in the Nook",
        category: "Comfort",
        content: `A single candle lit inside a quiet, shadowy nook,\nBrings more warmth than a thousand lights in any heavy book.\nIt casts a soft and golden glow that pushes back the night,\nAnd fills the cozy little room with gentle, peaceful light.\n\nI keep that candle lit for you whenever days are dim,\nTo warm your hands and lift your heart up to the quiet brim.\nCome sit beside the tiny flame and let its flickering glow,\nRemind you of a steady love that you will always know.`
    },
    {
        id: 53,
        title: "The Valley of Rest",
        category: "Comfort",
        content: `Down in the quiet valley where the cool, soft rivers wind,\nFar from the rocky mountain paths and dangerous trails behind,\nThere lies a green and mossy bank where weary travelers rest,\nTo heal their cuts and lay their heads upon a peaceful breast.\n\nCome step down from the steep cliff side and rest your aching feet,\nDrink from the cool and clear stream so quiet and so sweet.\nYou’ve climbed enough steep hills today; it's time to lay down low,\nWhere quiet peace and soft comfort will always gently flow.`
    },
    {
        id: 54,
        title: "Soft Velvet Night",
        category: "Comfort",
        content: `The night rolls in like velvet cloth, dark and soft and deep,\nTo cover up the noisy world and fold it into sleep.\nIt pulls a curtain on the cares that troubled you by day,\nAnd bids your mind to lay them down and gently walk away.\n\nEmbrace the quiet darkness now, it comes to bring you peace,\nA sanctuary in the dark where all demands must cease.\nI’m guarding over your sweet rest until the morning light,\nSleep well, my love, enveloped in this soft and velvet night.`
    },
    {
        id: 55,
        title: "The Gentle Tide",
        category: "Comfort",
        content: `The ocean tide flows out so slow across the silver sand,\nTaking away the scattered shells and smoothing out the land.\nIt washes clean the footprints made by heavy, tired feet,\nLeaving a smooth and peaceful shore where sea and horizon meet.\n\nLet comfort wash across your heart like that soft ocean tide,\nClearing away the weary thoughts you carry deep inside.\nIt leaves behind a quiet shore where peace can build its home,\nSafe from the crashing of the waves and chilly ocean foam.`
    },
    {
        id: 56,
        title: "An Open Arms Welcome",
        category: "Comfort",
        content: `No matter how far you may wander or how rough the road,\nNo matter how heavy a burden you carry in your load,\nYou'll always find an open door and arms to hold you tight,\nReady to welcome you back home through every day and night.\n\nYou never have to earn your place or prove your worth to me,\nMy love is an unconditional and quiet sanctuary.\nSo step across the threshold now and let your shoulders rest,\nYou are home where you belong, cherished and deeply blessed.`
    },
    {
        id: 57,
        title: "The Soft Wool Sweater",
        category: "Comfort",
        content: `Like putting on a cozy wool sweater on an autumn day,\nThat wards off every chilly breeze and drives the cold away,\nMy thoughts wrap all around your soul to keep you snug and warm,\nA shield of quiet affection that guards you from the storm.\n\nFeel the soft and gentle weave of care in every word,\nThe quietest reassurance that your tired heart has heard.\nYou are protected, held, and warm, safe from the freezing rain,\nRest easy in this cozy space, far from all stress and strain.`
    },
    {
        id: 58,
        title: "The Morning Calm",
        category: "Comfort",
        content: `Before the town awakes to work and cars begin to run,\nThere sits a quiet, motionless air before the rising sun.\nIt holds a deep, pristine peace that calms the hurried soul,\nA gentle pause in daily time that makes the spirit whole.\n\nI send that morning calm to you to settle in your chest,\nTo give your heart a quiet pause and grant your mind a rest.\nCarry this peace throughout your day like water in a cup,\nA cool, refreshing well of strength as morning brightens up.`
    },
    {
        id: 59,
        title: "Whispering Pines",
        category: "Comfort",
        content: `High in the hills the pine trees sing a low and gentle song,\nAs evening breezes rustle through the needles sharp and long.\nIt sounds like ancient lullabies that whisper soft and low,\nTelling the tired heart to rest and let the worries go.\n\nListen to that pine-tree breeze sing through your quiet room,\nChasing away the lingering dark and heavy evening gloom.\nIt sings of peace, it sings of home, it sings of steady love,\nUnder the watchful silver moon and quiet stars above.`
    },
    {
        id: 60,
        title: "The Warm Tea Cup",
        category: "Comfort",
        content: `Hold close this cup of warm sweet tea and feel the soothing heat,\nSeeping into your chilly hands so cozy and so sweet.\nWatch steam rise up in gentle curls and fade into the air,\nCarrying with it every thought of anxiety and care.\n\nTake small, slow sips and let the warmth flow deep into your soul,\nReminding you that piece by piece, your heart is growing whole.\nI'm right here sitting by your side, sharing this quiet space,\nWhere comfort stays and heavy thoughts leave not a single trace.`
    },
    {
        id: 61,
        title: "Silver Lining",
        category: "Comfort",
        content: `Though heavy clouds of grey may roll and block the sun from sight,\nEach cloud retains along its edge a silver fringe of light.\nIt reminds us that behind the grey, the sun still shines as bright,\nWaiting to burst through once again and fill the world with light.\n\nDon't lose your heart because today feels dark and hard to bear,\nThe silver lining shines for you beneath my loving care.\nThe sun will break the clouds apart, the grey will fade away,\nAnd we will walk together in a brighter, warmer day.`
    },
    {
        id: 62,
        title: "The Quiet Nest",
        category: "Comfort",
        content: `High in the fork of a sturdy tree, a bird builds up a nest,\nWith twigs and moss and feathers soft, a home of perfect rest.\nProtected from the heavy winds by leaves of thickest green,\nThe safest little sanctuary that you have ever seen.\n\nI've built a quiet nest for you inside my loving mind,\nWhere every thought is feather-soft and every memory kind.\nFold up your wings, sweet weary bird, and rest your tired head,\nSafe inside this cozy home where gentle words are said.`
    },
    {
        id: 63,
        title: "Stillness After Rain",
        category: "Comfort",
        content: `When thunder fades into the distance and rain stops on the leaves,\nA profound, enchanting quietness the fresh air softly weaves.\nThe earth breathes out a fragrant sigh, cleansed by the passing shower,\nAnd quiet peace returns again to every tree and flower.\n\nLet that post-rain stillness settle deep within your breast,\nAfter the storm of busy work, enjoy this well-earned rest.\nThe air is clear, the world is fresh, the storm has passed away,\nEnjoy the quiet evening hours that mark the end of day.`
    },
    {
        id: 64,
        title: "The Soft Horizon",
        category: "Comfort",
        content: `Where ocean meets the gentle sky in blurred lines of blue,\nThere lies a soft horizon line that welcomes me and you.\nIt holds no sharp or sudden turns, no obstacles in sight,\nJust endless space of calm and peace under the quiet light.\n\nLook out upon that calm line when life feels pressed and small,\nAnd know that all your troubles now are tiny, short, and tall.\nBeyond them lies a vast expanse of peace and steady grace,\nWhere you and I will always share a calm and quiet place.`
    },
    {
        id: 65,
        title: "The Safe Shadow",
        category: "Comfort",
        content: `Not all shadows bring dark thoughts or cause the heart to fear,\nSome shadows fall like leafy shade when midday heat is near.\nA cool protection from the sun that shields your delicate skin,\nA quiet place of sweet relief where comfort can begin.\n\nMy love stands like a shady tree to keep the heat away,\nTo shelter you from burning stress throughout the busy day.\nStep into this cool, safe shade and let your spirit rest,\nProtected, loved, and cared for by the one who knows you best.`
    },
    {
        id: 66,
        title: "Grounded Roots",
        category: "Comfort",
        content: `Deep underneath the forest floor, old tree roots reach out wide,\nClasping the earth in firm embrace where strength and life abide.\nThough winter winds may shake the boughs and strip the leaves away,\nThe tree remains firmly in place to see another day.\n\nOur bond is like those deep tree roots, grounded, firm, and deep,\nHolding us steady through the storms while all the world's asleep.\nYou'll never fall or drift away, no matter what winds blow,\nAnchored by a steady love that only we two know.`
    },
    {
        id: 67,
        title: "The Silent Oasis",
        category: "Comfort",
        content: `Across the hot and dusty sands of daily toil and care,\nThere sits a quiet green oasis with fresh water rare.\nCool palm trees sway above the spring, casting a gentle shade,\nThe sweetest, most refreshing spot that nature ever made.\n\nThink of this space as your oasis when the desert burns,\nA place of sweet refreshment where your tired heart returns.\nDrink deep of quiet love and peace, and wash your dusty feet,\nHere in this silent, cool oasis, comfort is complete.`
    },

    // --- SPECIAL (21-30, 68-100) ---
    {
        id: 21,
        title: "A Sanctuary Built for You",
        category: "Special",
        content: `I built this little digital space with code and loving care,\nTo create a quiet home for you whenever you are there.\nEach color was selected just to bring your eyes some rest,\nEach line written with intention to give you only my best.\n\nIt’s more than just a website on a bright computer screen,\nIt’s a declaration of a love that’s quiet and serene.\nA digital monument to you, my favorite person here,\nA place to come and read these words year after golden year.`
    },
    {
        id: 22,
        title: "August Twenty-Two",
        category: "Special",
        content: `Marked upon the calendar in golden ink so bright,\nA date that changed my universe and filled it up with light.\nThe twenty-second day of August, steady and serene,\nThe moment when our story turned the sweetest page I've seen.\n\nEach year that passes brings us back to where it all began,\nConfirming every single choice and every quiet plan.\nI’d choose that date a thousand times, and choose you every day,\nMy favorite milestone on the road we walk along our way.`
    },
    {
        id: 23,
        title: "April Fifth Bloom",
        category: "Special",
        content: `The fifth day of April came with spring's most gentle air,\nTo bring into this world a soul exceptionally rare.\nThe day that you were born was when the heavens gave a gift,\nA life that brings so many hearts a sweet and joyful lift.\n\nI celebrate the day you came, the beauty of your birth,\nThe kindest, softest human walking on this green earth.\nMay every April bring you joy and blessings from above,\nSurrounded by the warmth of those who hold you in their love.`
    },
    {
        id: 24,
        title: "My Favorite Muse",
        category: "Special",
        content: `Poets write of ancient queens and stars that light the sky,\nOf roaring seas and mountain peaks that reach up high.\nBut all their metaphors fall short compared to what I see,\nWhen you are sitting right across and smiling back at me.\n\nYou are my only poetry, the muse behind my verse,\nThe sweetest person living in this endless universe.\nI do not need grand mythical tales of legendary grace,\nWhen I can look right in your eyes and see a sweeter place.`
    },
    {
        id: 25,
        title: "Through Every Season",
        category: "Special",
        content: `In spring when green begins to grow upon the forest floor,\nIn summer when the sunlight warms the quiet ocean shore,\nIn autumn when the golden leaves fall softly from the tree,\nIn winter when the quiet snow covers the silent lea.\n\nThrough every changing season that the turning year can bring,\nMy heart remains as faithful as the birds that return in spring.\nYou are my constant season, my forever warmth and light,\nMy bright and shining morning star through every quiet night.`
    },
    {
        id: 26,
        title: "The Architecture of Us",
        category: "Special",
        content: `We didn't build our bond upon a foundation made of sand,\nNor rushed to raise a palace that could never truly stand.\nWe built it brick by simple brick with trust and honesty,\nWith quiet chats and shared laughs that set our spirits free.\n\nNow stands a sanctuary strong, proof of time and care,\nA fortress made of gentle love that nothing can impair.\nI’m proud of what we built together, simple and divine,\nAnd proud beyond all measure just to know that you are mine.`
    },
    {
        id: 27,
        title: "A Thousand Small Promises",
        category: "Special",
        content: `I will not promise you a life without a single tear,\nOr say that problems won't arise throughout each passing year.\nBut I will promise you my heart, steadfast, real, and true,\nTo walk through every single storm directly next to you.\n\nI promise to listen close whenever you need to speak,\nTo hold your hand when you are tired or feeling low and weak.\nThese promises are written deep, engraved in gold and stone,\nTo assure you that from this day on, you’ll never be alone.`
    },
    {
        id: 28,
        title: "The Masterpiece",
        category: "Special",
        content: `Painters spend their entire lives to craft a work of art,\nTo capture beauty in a frame that touches every heart.\nBut nature painted you with grace that art could never reach,\nA sweetness that no school or clever scholar could ever teach.\n\nYour kindness is the color palette, your smile the glowing light,\nYour spirit is the harmony that makes the whole world bright.\nYou are a living masterpiece, created from above,\nAnd I am just the lucky observer captivated by your love.`
    },
    {
        id: 29,
        title: "Written in My Heart",
        category: "Special",
        content: `Long after screens have all gone dark and code has faded out,\nLong after temporary things have turned to dust and doubt,\nThe love I have for you will stay as vibrant as today,\nUnshaken by the passing time or what the world may say.\n\nIt isn't stored on memory cards or held in digital air,\nIt’s written deep within my soul, permanent and rare.\nYou are my heart's permanent home, my quiet sanctuary,\nForever and always, my dear Zaira, you mean the world to me.`
    },
    {
        id: 30,
        title: "Forever Sanctuary",
        category: "Special",
        content: `So welcome to your sanctuary, built for you alone,\nA cozy little corner that you now can call your own.\nWhenever you need poetry, or music soft and clear,\nOr just a warm reminder that somebody holds you dear,\n\nCome step inside this quiet haven, rest your weary heart,\nAnd know that distance cannot pull our spirits far apart.\nYou are my heart's greatest joy, my soul's sweet delight,\nMy favorite thought at morning light and dream at quiet night.`
    },
    {
        id: 68,
        title: "Digital Tapestry",
        category: "Special",
        content: `Line by line of written code, crafted late at night,\nBuilding up a quiet world lit by screen-light bright.\nI placed each pixel with a thought of making you smile today,\nA custom sanctuary made to guide you on your way.\n\nIt isn't made of bricks or stone, but logic, love, and care,\nA digital refuge built for you whenever you go there.\nProof that across all distance, whether near or far away,\nMy heart is constantly designing blessings for your day.`
    },
    {
        id: 69,
        title: "The Golden Compass",
        category: "Special",
        content: `Travelers carry compasses made of brass and glass,\nTo navigate through unknown lands and stormy mountain pass.\nMy heart possesses its own dial that points across the sea,\nDirecting every quiet thought directly back to thee.\n\nNo matter where I wander or what paths I walk upon,\nMy inner needle points to you from evening until dawn.\nYou are my true north, my orientation, my constant guiding place,\nThe sweetest home I'll ever know in any time or space.`
    },
    {
        id: 70,
        title: "A Symphony of Quiet Things",
        category: "Special",
        content: `Grand orchestras may play their songs with brass and timpani,\nFilling halls with thunderous sounds of majestic symphony.\nBut our love plays a softer song, delicate and rare,\nLike harp strings touched by morning breeze in quiet country air.\n\nIt speaks in subtle glances and in gentle, understanding nods,\nA rare and precious harmony given by the gods.\nI’d rather listen to our song than all the world's applause,\nFor in your quiet rhythm lies my spirit's only cause.`
    },
    {
        id: 71,
        title: "Constellation of Memories",
        category: "Special",
        content: `We’ve mapped out tiny stars of joy across our shared past,\nCreating constellations of a love designed to last.\nEach laugh, each quiet text at night, each simple shared glance,\nForming a pattern in our sky of beautiful romance.\n\nWhen night falls dark around my soul, I look up at our sky,\nAnd trace the stars we placed up there as time went passing by.\nThey shine with permanent bright light that nothing can erase,\nA celestial map of pure devotion time cannot deface.`
    },
    {
        id: 72,
        title: "The Unbroken Thread",
        category: "Special",
        content: `Spun from gold and silver silk, an unseen, delicate thread,\nConnects our two hearts silently wherever we are led.\nIt stretches over miles of land, across the ocean sea,\nYet stays as taut and strong as steel between your heart and me.\n\nNo distance ever pulls so far that this thread breaks in two,\nIt twitches with each heartbeat that I dedicate to you.\nFeel its soft tug upon your soul when you are all alone,\nAnd know that you are anchored to a heart that's all your own.`
    },
    {
        id: 73,
        title: "The Keeper of My Secrets",
        category: "Special",
        content: `In a world where many talk and few take time to care,\nYou hold my quiet, secret thoughts with patience soft and rare.\nI’ve trusted you with hidden dreams and fears I never speak,\nAnd found in you a understanding sanctuary when I’m weak.\n\nYou guard my heart like precious gold inside a velvet chest,\nA safe and trusted confidante, the highest and the best.\nThank you for being who you are, sincere and true and kind,\nThe rarest treasure and the sweetest soul I’ll ever find.`
    },
    {
        id: 74,
        title: "The Lighthouse Lens",
        category: "Special",
        content: `Polished crystal curved just right to magnify the beam,\nSending light for miles out across the ocean stream.\nYour love acts like that crystal lens upon my simple life,\nMagnifying every joy and dispelling daily strife.\n\nThrough you I see the world with clearer, kinder, softer eyes,\nFinding beauty everywhere beneath the open skies.\nYou make my life shine brighter than I ever thought it could,\nA beacon of pure happiness that proves the world is good.`
    },
    {
        id: 75,
        title: "Forever Unfolding",
        category: "Special",
        content: `Like a lotus flower opening upon a quiet pond,\nRevealing layer after layer of beauty rare and fond,\nOur journey keeps unfolding with each brand new passing day,\nExposing deeper, sweeter things along our golden way.\n\nI never tire of learning all the details of your heart,\nFinding new reasons to cherish you e'en when we are apart.\nYou are an endless wonder, a story rich and deep,\nThe sweetest mystery that my soul will forever keep.`
    },
    {
        id: 76,
        title: "The Quiet Hour",
        category: "Special",
        content: `There is a quiet hour right before the midnight clock rings true,\nWhen I sit alone in silence and dedicate my thoughts to you.\nNo phones, no noise, no busy tasks to draw my mind away,\nJust pure, undivided love that brightens up the gray.\n\nIn that sacred, quiet hour, I send my love across the space,\nImagining your gentle smile and peaceful, sleeping face.\nYou are my midnight devotion, my sweet, lingering thought,\nThe greatest blessing that my searching heart has ever sought.`
    },
    {
        id: 77,
        title: "Etched in Glass",
        category: "Special",
        content: `Not written in the shifting sand where waves wash it away,\nNor drawn in chalk upon the walk to fade within a day.\nYour name is etched upon my heart like diamond cut in glass,\nPermanent, clear, and glowing bright as quiet years shall pass.\n\nNo winds of time can wear it down, no storms can make it blur,\nIt stays as sharp and beautiful as it first ever were.\nA permanent inscription of devotion true and deep,\nA treasure that my faithful soul forevermore will keep.`
    },
    {
        id: 78,
        title: "The Secret Garden",
        category: "Special",
        content: `Hidden behind a high stone wall, locked with a silver key,\nThere lies a secret garden built for only you and me.\nWhere flowers bloom that never fade and quiet fountains play,\nCreating a sweet paradise away from daily gray.\n\nWhenever life gets heavy, we can slip inside the gate,\nAnd leave behind the noisy world and demands of busy fate.\nHere in our private garden, surrounded by soft light,\nWe'll walk together hand in hand through quiet day and night.`
    },
    {
        id: 79,
        title: "The Timeless Hourglass",
        category: "Special",
        content: `Grains of golden sand slip down through narrow glass waist fine,\nMarking off the passing hours along life’s steady line.\nYet when I spend my time with you, the sand seems to stand still,\nOr flow with such a graceful ease across the quiet hill.\n\nMoments with you feel timeless, suspended in sweet air,\nFree from the rush of daily clocks and heavy, hurried care.\nI’d freeze the hourglass forever if I could hold the glass,\nTo keep us in this sweet embrace while centuries shall pass.`
    },
    {
        id: 80,
        title: "The Silver Moon's Promise",
        category: "Special",
        content: `The silver moon looks down tonight upon the quiet land,\nCasting its soft and gentle light across the ocean sand.\nIt whispers of a ancient promise made to skies above,\nTo watch over sleeping souls with unwavering, quiet love.\n\nI make that same moon-promise now to guard you through the night,\nTo watch over your peaceful dreams until the morning light.\nYou'll never wake up friendless, you'll never be alone,\nProtected by a steady heart that's forever your own.`
    },
    {
        id: 81,
        title: "The Artist's Palette",
        category: "Special",
        content: `If I were given colors made of sunlight, rain, and snow,\nI’d paint a picture of our love to make the whole world glow.\nDeep blues for quiet peace of mind, warm golds for laughter shared,\nAnd soft rose tints to represent how deeply I have cared.\n\nI’d blend them on the canvas of our shared and growing years,\nCreating a rich masterpiece of joy that shines through tears.\nA painting of true harmony, beautiful and divine,\nCelebrating the quiet miracle that made your heart mine.`
    },
    {
        id: 82,
        title: "The Sanctuary Key",
        category: "Special",
        content: `I carry in my pocket a small, invisible silver key,\nThat opens up the hidden door between your heart and me.\nIt turns so smooth inside the lock, with not a sound or strain,\nWelcoming me into a world far from all stress and pain.\n\nThank you for giving me that key and letting me come near,\nTo share in your sweet, quiet thoughts year after golden year.\nI’ll guard this key with honor, and keep it safe and bright,\nTo visit your sweet sanctuary every day and night.`
    },
    {
        id: 83,
        title: "Written in the Stars",
        category: "Special",
        content: `Ancient scholars looked above to read the night sky clear,\nSeeking signs of future fate through every passing year.\nAnd if they looked hard at our stars, I know what they would see:\nA quiet, undeniable link between your soul and me.\n\nOur meeting wasn't accident, nor chance of fleeting fate,\nIt was written in celestial light before the world's creation date.\nA quiet destiny fulfilled, two hearts aligned so true,\nI was made to cherish, love, and stand right next to you.`
    },
    {
        id: 84,
        title: "The Quiet Reflection",
        category: "Special",
        content: `Look down into a quiet pool of water clear and still,\nAnd see the bright sky mirrored back beneath the grassy hill.\nThat is how my heart reflects your gentleness and grace,\nShowing the world a warmer light from your sweet, glowing face.\n\nWhen I am with you, I become a better version true,\nInspired by the kindness that radiates from you.\nYou are my mirror of pure grace, my quiet, guiding light,\nWho fills my heart with sweet devotion every day and night.`
    },
    {
        id: 85,
        title: "The Pearl in the Shell",
        category: "Special",
        content: `Hidden deep beneath the sea, inside a quiet shell,\nThere lies a rare and lustrous pearl where calm deep waters dwell.\nIt took long years of quiet time to form its silky glow,\nA hidden treasure of the sea that few will ever know.\n\nYour love is like that precious pearl, formed in quiet peace,\nA treasure of immense great worth whose value won't decrease.\nI hold it close inside my soul, protected and secure,\nThe sweetest gift of life to me, permanent and pure.`
    },
    {
        id: 86,
        title: "The Unfading Blossom",
        category: "Special",
        content: `Earthly flowers bloom in spring and wither in the fall,\nLosing their bright petals at cold autumn's frosty call.\nBut the flower of our shared love blooms with a constant grace,\nUnshaken by the chilly winds of any time or place.\n\nIt stays as fresh and vibrant now as when it first took root,\nYielding a sweet and quiet peace, a pure and holy fruit.\nI water it with daily care and watch it grow so tall,\nThe sweetest flower in my garden, treasured most of all.`
    },
    {
        id: 87,
        title: "The Golden Bell",
        category: "Special",
        content: `High in a quiet chapel tower hangs a golden bell,\nWhose tone rings out across the valley, sweet and clear and well.\nIt echoes with a resonant peace that calms the listening ear,\nBringing a quiet joy to all who pause and stop to hear.\n\nYour presence rings inside my life like that clear golden chime,\nFilling my quiet days with music through the march of time.\nA steady tone of happiness that clears away all doubt,\nThe sweetest music that my heart could ever dream about.`
    },
    {
        id: 88,
        title: "The Haven of Trust",
        category: "Special",
        content: `Trust isn't built in single days or spoken with loud noise,\nIt’s woven slowly, thread by thread, in quiet, steady joys.\nIn kept promises and gentle words, in standing firm and true,\nCreating a safe haven where I rest along with you.\n\nI trust you with my softest thoughts, my heart, my very soul,\nKnowing that in your gentle care, my spirit stays made whole.\nA sacred haven built on trust that nothing can impair,\nThe safest, sweetest sanctuary found anywhere.`
    },
    {
        id: 89,
        title: "The Quiet Dawn",
        category: "Special",
        content: `Night slowly pulls its dark cloak back as morning starts to break,\nAnd soft pink light begins to make the sleeping world awake.\nThat transition from the dark to light is peaceful, calm, and slow,\nFilling the quiet horizon with a soft, promising glow.\n\nYou came into my quiet life like that soft morning light,\nGently chasing away the cold and shadows of the night.\nWith you, every single day feels like a fresh new dawn,\nA bright new chapter of sweet love that keeps on moving on.`
    },
    {
        id: 90,
        title: "The Perpetual Flame",
        category: "Special",
        content: `In ancient halls a flame was kept that burned through year and day,\nGuarded by faithful hands so it would never fade away.\nNo heavy wind could blow it out, no rain could dim its light,\nIt burned with steady, warm devotion through the dark of night.\n\nThat perpetual flame burns bright inside my heart for you,\nGuarded by constant thoughts of love, steady, real, and true.\nIt will not flicker, fade, or die as long as time shall move,\nA permanent, bright monument of my unchanging love.`
    },
    {
        id: 91,
        title: "The Silver Bookmark",
        category: "Special",
        content: `I place a silver bookmark down between the pages neat,\nTo mark the exact place where our sweet memories meet.\nSo I can turn right back to them whenever I am sad,\nAnd read again the happy tales that make my spirit glad.\n\nEvery day we spend together adds a page so bright,\nFilled with poetry and peace under the golden light.\nI love reading our story book, and marking every page,\nWith silver threads of pure devotion lasting through every age.`
    },
    {
        id: 92,
        title: "The Gentle Prism",
        category: "Special",
        content: `A simple ray of white sunbeam strikes a glass prism clear,\nAnd breaks into a rainbow bright across the room so near.\nShowing all the hidden colors hidden inside the light,\nTurning a plain and simple beam into a rainbow sight.\n\nYour love acts like that glass prism upon my daily mind,\nRevealing all the beauty and the joy that I can find.\nYou color my whole world with shades of peace and sweet delight,\nTurning the plainest, greyest day into a rainbow bright.`
    },
    {
        id: 93,
        title: "The Safe Anchor Cable",
        category: "Special",
        content: `Thick steel cables hold the giant ships inside the bay,\nPreventing them from drifting out when currents pull away.\nThey hold against the heavy tides and ocean's mighty swell,\nKeeping the vessel safe and sound where quiet waters dwell.\n\nYour kindness is the cable cable that keeps my spirit bound,\nTo peace and calm and sanity when heavy storms surround.\nI'm anchored safe beside your heart, secure in your embrace,\nFar from the roaring ocean waves in this sweet, quiet place.`
    },
    {
        id: 94,
        title: "The Unwritten Stanza",
        category: "Special",
        content: `Poets may write a hundred lines and fill up entire books,\nDescribing love in fields and flowers, mountains and quiet brooks.\nYet the sweetest part of what I feel remains unwritten still,\nToo deep for words to capture or for paper to fulfill.\n\nIt lives inside the quiet space between my heart's soft beats,\nIn unspoken understanding where devotion softly meets.\nAn unwritten stanza of pure love, sacred, deep, and true,\nThat my silent soul will recite forever unto you.`
    },
    {
        id: 95,
        title: "The Constant Tide",
        category: "Special",
        content: `The moon pulls on the ocean tide with an invisible hand,\nDrawing the waters in and out along the silent sand.\nIt never misses a single cycle, faithful to the skies,\nAn eternal rhythm of the earth that never fades or dies.\n\nMy love follows that constant tide, pulled by your gentle grace,\nFlowing towards you steadily in every time and place.\nAn eternal rhythm of the heart, faithful, deep, and sure,\nThat will outlast the ocean sand, permanent and pure.`
    },
    {
        id: 96,
        title: "The Velvet Shield",
        category: "Special",
        content: `A shield made not of heavy iron or sharp and cold hard steel,\nBut woven out of velvet soft, with power quiet and real.\nIt catches all the sharp, harsh words the world throws at your heart,\nAnd softens every blow before it causes pain or smart.\n\nI hold that velvet shield for you to keep you safe from harm,\nWrapped inside my gentle love, cozy, safe, and warm.\nNo harshness from the outside world can pierce this soft defense,\nProtected by a quiet love, unconditional and immense.`
    },
    {
        id: 97,
        title: "The Golden Thread of Time",
        category: "Special",
        content: `If I could weave a tapestry of all my future years,\nI’d spin them out of golden thread, free from all doubts and fears.\nAnd trace a single, steady path where two hearts walk as one,\nUnderneath the gentle light of an eternal sun.\n\nThat golden path is what I see whenever I look ahead,\nA beautiful, peaceful journey where our spirits are led.\nHand in hand through quiet days, sharing love so deep,\nA promise made for a lifetime that my soul will keep.`
    },
    {
        id: 98,
        title: "The Sweet Refrain",
        category: "Special",
        content: `In every classic song of love, there comes a sweet refrain,\nThat repeats throughout the melody again and yet again.\nIt brings the music back to center, satisfying the ear,\nWith familiar, comforting notes that everyone holds dear.\n\nYou are the sweet refrain that plays throughout my daily song,\nThe gentle theme that brings me back to where I best belong.\nNo matter where the verses drift, my heart returns to you,\nTo sing that sweet refrain of love, forever deep and true.`
    },
    {
        id: 99,
        title: "The Eternal Star",
        category: "Special",
        content: `Far beyond the cloudy skies where human eyes can see,\nShines a small and steadfast star of pure eternity.\nIt burns with an unquenchable light that time cannot erase,\nWatching over the universe with silent, steady grace.\n\nThat eternal star represents what I feel in my heart,\nA love that stays unchanging e'en when we are far apart.\nIt shines for you, my dearest Zaira, through every day and night,\nFilling your private sanctuary with everlasting light.`
    },
    {
        id: 100,
        title: "The Completed Sanctuary",
        category: "Special",
        content: `A hundred poems written down, a hundred songs of praise,\nTo decorate your sanctuary through all your coming days.\nEach verse a tiny brick of love, each line a beam of light,\nTo make this digital home of yours comfortable and bright.\n\nCome step inside whenever you need comfort, peace, or rest,\nAnd know that of all people here, I count myself most blessed.\nThis sanctuary stands complete, built for you alone,\nA permanent declaration of a love forever your own.`
    }
];

// Function 1: Pag-click sa Initial Envelope Modal (Open)
// INTRO
// ===============================================================
function startCinematicExperience() {
    const startOverlay = document.getElementById('start-overlay');
    if (startOverlay) {
        startOverlay.style.display = 'none';
    }

    const cinematicIntro = document.getElementById('cinematic-intro');
    if (cinematicIntro) {
        cinematicIntro.classList.remove('hidden');
    }

    // Play Audio with Safety Handling
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.volume = 0.6;
        audio.play().catch(err => console.log("Audio playback blocked by browser:", err));
    }
}

// Function 2: Pag-click sa "Enter Your Sanctuary" o "Skip Intro"
function dismissIntro() {
    const intro = document.getElementById('cinematic-intro');
    
    if (intro) {
        // Step 1: I-fade out ang Creamy Overlay
        intro.classList.add('fade-out');

        // Step 2: I-trigger ang paglabas ng Cards sa Main Page
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 300);

        // Step 3: Alisin ang overlay sa background pagkatapos ng fade animation
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1800);
    }
}



/*==============================================================
SEARCH BAR POEM
================================================================*/
document.addEventListener("DOMContentLoaded", () => {
    setupSearchDropdown();
});

function setupSearchDropdown() {
    const searchInput = document.getElementById("poem-search");
    const dropdown = document.getElementById("search-dropdown");

    if (!searchInput || !dropdown) return;

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        const poemCards = document.querySelectorAll(".poem-card");

        dropdown.innerHTML = "";

        if (query === "") {
            dropdown.classList.add("hidden");
            // Show all cards when search is cleared
            poemCards.forEach(card => card.style.display = "flex");
            return;
        }

        let matchesCount = 0;

        poemCards.forEach(card => {
            const title = card.querySelector("h3") ? card.querySelector("h3").textContent : "";
            const bodyText = card.querySelector("p") ? card.querySelector("p").textContent : "";
            const category = card.querySelector(".card-category") ? card.querySelector(".card-category").textContent : "Poem";

            const matchTitle = title.toLowerCase().includes(query);
            const matchBody = bodyText.toLowerCase().includes(query);
            const matchCat = category.toLowerCase().includes(query);

            if (matchTitle || matchBody || matchCat) {
                card.style.display = "flex";
                matchesCount++;

                // Create Dropdown Suggestion Item
                const item = document.createElement("div");
                item.className = "dropdown-item";
                item.innerHTML = `
                    <span class="item-title">${title}</span>
                    <span class="item-tag">${category}</span>
                `;

                // Click event for dropdown suggestion
                item.addEventListener("click", () => {
                    searchInput.value = title;
                    dropdown.classList.add("hidden");
                    
                    // Filter grid to show only selected item
                    poemCards.forEach(c => {
                        const cTitle = c.querySelector("h3") ? c.querySelector("h3").textContent : "";
                        c.style.display = (cTitle === title) ? "flex" : "none";
                    });
                });

                dropdown.appendChild(item);
            } else {
                card.style.display = "none";
            }
        });

        if (matchesCount === 0) {
            dropdown.innerHTML = `<div class="dropdown-no-result">No matching poems found</div>`;
        }

        dropdown.classList.remove("hidden");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add("hidden");
        }
    });

    // Re-open dropdown if focusing back on input with text
    searchInput.addEventListener("focus", () => {
        if (searchInput.value.trim() !== "") {
            dropdown.classList.remove("hidden");
        }
    });
}