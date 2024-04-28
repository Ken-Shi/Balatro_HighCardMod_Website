let decks = [
  {
    name: "X-Playing Deck",
    text: [
        "Start run as a {C:red}Player{}",
        "(i.e. Start with ",
        "{C:attention}X-Playing{} Joker)"
    ],
    image_url: "img/b_xplaying.png",
    rarity: "Deck"
  },
  {
    name: "X-Playing Joker",
    text: [
        "{C:red}PLAY{} {C:attention}first hand{} of round.",
        "(Transform into the scoring",
        "X-Playing card or X-hand)"
    ], 
    image_url: "img/j_hcm_xplay.png",
    rarity: "Legendary"
  },
]

let jokers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Common"
  // }
  {
    name: "Neo New Nambu",
    text: [
        "Gain {C:blue}+1{} Hand upon hand",
        "played, but you must play",
        "{C:attention}5 cards per hand{}, ",
        "{C:attention}lose all discards{}",
        "and set hand size to {C:attention}6{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_neo_new_nambu.png",
    rarity: "Legendary"
  },
  {
    name: "3 of Spades (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_spade3.png",
    rarity: "Legendary"
  },
  {
    name: "Clear Lance",
    text: [
        "If you play {C:attention}5{} cards and",
        "score {C:attention}exactly 4{} cards,",
        "this card gives {X:mult,C:white}X4{} Mult. ",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_clear_lance.png",
    rarity: "Legendary"
  },
  {
    name: "Brain Buster",
    text: [
        "If your {C:attention}highest scoring{}",
        "{C:attention}card{} is higher than ",
        "before, accumulate {X:mult,C:white}X1{}",
        "Mult until end of round. ",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}.",
        "{C:credit}Idea from{} {C:username}@FC{}"
    ],
    image_url: "img/j_hcm_brain_buster.png",
    rarity: "Legendary"
  },
  {
    name: "Juggling Gun",
    text: [
        "Automatically plays your",
        "{C:attention}lowest card held in hand{}",
        "in addition to your selected cards for play.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_juggling_gun.png",
    rarity: "Legendary"
  },
  {
    name: "Interceptor",
    text: [
        "Randomly {C:attention}enhance{} every ",
        "scoring cards before",
        "scoring, but {C:attention}remove all enhancements{} from ",
        "scoring cards afterward.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_interceptor.png",
    rarity: "Legendary"
  },
  {
    name: "All Kaboom",
    text: [
        "Destroy the {C:attention}first scoring{}",
        "{C:attention}card{} and all other",
        "scoring cards that are ",
        "{C:attention}of the same suit{}. each ",
        "destruction gives {C:mult}+5{} Mult. ",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_all_kaboom.png",
    rarity: "Legendary"
  },
  {
    name: "Bokka",
    text: [
        "Remove {C:attention}debuff{}",
        "from played cards.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_bokka.png",
    rarity: "Legendary"
  },
  {
    name: "Honest Straight",
    text: [
        "Turn all scored cards",
        "into a {C:attention}random{} scored card {C:attention}after{}",
        "{C:attention}the scoring stage{}. ",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}.",
        "{C:credit}Idea from{} {C:username}@MathIsFun_{}"
    ],
    image_url: "img/j_hcm_honest_straight.png",
    rarity: "Legendary"
  },
  {
    name: "Jack of Spades (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/b_xplaying.png",
    rarity: "Legendary"
  },
  {
    name: "Queen of Spades (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/b_xplaying.png",
    rarity: "Legendary"
  },
  {
    name: "San Galgano (WIP)",
    text: [
        "When you play and score",
        "{C:attention}High Card{}, {C:attention}consume{} the",
        "scoring card and disable",
        "its transformation. Gain",
        "{X:mult,C:white}X1{} per card consumed. ",
        "{C:red}Warning: This card has a mind of its own!{}"
    ],
    image_url: "img/j_hcm_san_galgano.png",
    rarity: "Legendary"
  },
  {
    name: "Love & Peace",
    text: [
        "Give {C:chips}+110{} Chips and {C:mult}+11{}",
        "Mult per card scored,",
        "but {C:attention}force a card{} for each hand.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_love_and_peace.png",
    rarity: "Legendary"
  },
  {
    name: "Jelly Crawler",
    text: [
        "Cards can be considered",
        "{C:attention}1 rank lower{} if that",
        "helps forming a better poker hand. ",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_jelly_crawler.png",
    rarity: "Legendary"
  },
  {
    name: "Rockin' Rocks",
    text: [
        "Turning your first scoring card into {C:attention}Stone{}",
        "{C:attention}Card{}. Retriggers played",
        "{C:attention}Stone Card{} for {C:attention}2 times{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_rockin_rocks.png",
    rarity: "Legendary"
  },
  {
    name: "Agent S",
    text: [
        "Retrigger the lowest",
        "played card used in",
        "scoring for {C:attention}4 times{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_agent_s.png",
    rarity: "Legendary"
  },
  {
    name: "Calorie's High",
    text: [
        "Gain {C:red}+1{} Discard upon ",
        "card(s) discarded, but ",
        "you only play {C:attention}1 hand{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_calories_high.png",
    rarity: "Legendary"
  },
  {
    name: "The Zoo",
    text: [
        "Transform your scoring",
        "cards to the {C:attention}leftmost{}",
        "scoring card if they are ",
        "of the same {C:attention}rank{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_the_zoo.png",
    rarity: "Legendary"
  },
  {
    name: "Chameleon",
    text: [
        "Convert {C:attention}suit{} of your",
        "played cards to suit of",
        "{C:attention}a random played card{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_chameleon.png",
    rarity: "Legendary"
  },
  {
    name: "Mun Pheromone Mun",
    text: [
        "If you scored {C:attention}High Card{} ",
        "is lower than 8, increase",
        "its {C:attention}rank{} by 1; if it's",
        "higher, decrease it by 1. ",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}.",
        "{C:credit}Idea from{} {C:username}@Coronacht_{}"
    ],
    image_url: "img/j_hcm_mun_pheromone_mun.png",
    rarity: "Legendary"
  },
  {
    name: "Marvelous Genius (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_marvelous_genius.png",
    rarity: "Legendary"
  },
  {
    name: "10 of Hearts (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_heart10.png",
    rarity: "Legendary"
  },
  {
    name: "Sky Dancer",
    text: [
        "Scoring your {C:attention}most played{}",
        "{C:attention}hand{} that's not High Card",
        "will give a corresponding {C:planet}Planet{} card.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_sky_dancer.png",
    rarity: "Legendary"
  },
  {
    name: "Sonic Move (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/b_xplaying.png",
    rarity: "Legendary"
  },
  {
    name: "Masculine Parfait",
    text: [
        "Destroy all scoring {C:attention}face cards{} and add {C:chips}+10{} chips",
        "and {C:mult}+5{} mult per card to",
        "{C:attention}both this joker and the playing card of this{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_masculine_parfait.png",
    rarity: "Legendary"
  },
  {
    name: "Faceless",
    text: [
        "If you play {C:attention}4{} or less ",
        "cards, this will act like a",
        "{C:attention}playing card{} that forms",
        "a {C:attention}higher poker hand{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_faceless.png",
    rarity: "Legendary"
  },
  {
    name: "Love Connection",
    text: [
        "Your poker hand played",
        "is always considered to",
        "have contained a {C:attention}Pair{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_love_connection.png",
    rarity: "Legendary"
  },
  {
    name: "Marble Rumble",
    text: [
        "Turn your {C:attention}scoring hand{}",
        "into {C:attention}Glass Card{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_marble_rumble.png",
    rarity: "Legendary"
  },
  {
    name: "4 of Diamonds (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/b_xplaying.png",
    rarity: "Legendary"
  },
  {
    name: "Greatest Man",
    text: [
        "If your {C:attention}scoring poker{} is ",
        "higher than your round ",
        "best, upgrade level of ",
        "played {C:attention}poker hand{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_greatest_man.png",
    rarity: "Legendary"
  },
  {
    name: "13 Stairs",
    text: [
        "If you have scored",
        "{C:red}exactly 13{} cards ",
        "this round, {C:attention}-1 Ante{}. ",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_13_stairs.png",
    rarity: "Legendary"
  },
  {
    name: "Never No Dollars",
    text: [
        "Spend up to {C:attention}20{} dollars,",
        "add that amount to {C:mult}Mult{}",
        "and {X:chips,C:white}X10{} that ",
        "amount to {C:chips}Chips{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_never_no_dollars.png",
    rarity: "Legendary"
  },
  {
    name: "Red Labyrinth",
    text: [
        "Selling consumeables will not earn dollars, but will ",
        "spend {C:attention}1 dollar{} and get ",
        "a {C:attention}random consumeable{}",
        "{C:attention} of the same type{} ",
        "if you have dollars.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_red_labyrinth.png",
    rarity: "Legendary"
  },
  {
    name: "No Mercy (WIP)",
    text: [
        "TBA!",
        "This X-Playing card is {C:attention}eternal{}."
    ],
    image_url: "img/j_hcm_no_mercy.png",
    rarity: "Legendary"
  },
  {
    name: "Unlucky Poky",
    text: [
        "All {C:green,E:1,S:1.1}probabilities{} become",
        "{C:green,E:1,S:1.1}deterministic{} ",
        "(always trigger)",
        "during the scoring stage.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_unlucky_poky.png",
    rarity: "Legendary"
  },
  {
    name: "Out of Five",
    text: [
        "{C:attention}High Card{} poker hand will",
        "score as your {C:attention}most{}",
        "{C:attention}played hand{} that's not ",
        "High Card.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_out_of_five.png",
    rarity: "Legendary"
  },
  {
    name: "Balor (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/b_xplaying.png",
    rarity: "Legendary"
  },
  {
    name: "Round & Round",
    text: [
        "If your scoring hand",
        "contains {C:attention}5{} scoring cards, ",
        "{C:purple}balance{} your {C:chips}chips{} and ",
        "{C:mult}mult{} and {C:attention}destroy{}",
        "all scoring cards.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_round_and_round.png",
    rarity: "Legendary"
  },
  {
    name: "Dynamic Kinesis (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_dynamic_kinesis.png",
    rarity: "Legendary"
  },
  {
    name: "Metallical Parade",
    text: [
        "{X:mult,C:white}X1.5{} per {C:attention}Steel Card{}",
        "or {C:attention}Gold Card{} played", 
        " when scored.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_metallical_parade.png",
    rarity: "Legendary"
  },
  {
    name: "Green Green",
    text: [
        "Your poker hand played",
        "is always considered",
        "{C:red}only{} as {C:attention}Straight{}.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_green_green.png",
    rarity: "Legendary"
  },
  {
    name: "Wing Wind (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_wing_wind.png",
    rarity: "Legendary"
  },
  {
    name: "G Round",
    text: [
        "When {C:attention}Stone Cards{} are ",
        "played, gain {C:mult}+5{} Mult each ",
        "for this round and {C:attention}destroy{} them.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_g_round.png",
    rarity: "Legendary"
  },
  {
    name: "6 of Clubs (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_club6.png",
    rarity: "Legendary"
  },
  {
    name: "Lethal Scoville",
    text: [
        "If your scoring hand {C:attention}lit{}",
        "{C:attention}the fire{}, gain a random",
        "{C:spectral}Spectral{} card.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_lethal_scoville.png",
    rarity: "Legendary"
  },
  {
    name: "Sinking Shadow",
    text: [
        "Cards that are played ",
        "but did not score ",
        "add their {C:attention}base{} {C:chips}chips{}",
        " to {C:mult}mult{} instead.",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_sinking_shadow.png",
    rarity: "Legendary"
  },
  {
    name: "9 of Clubs (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/b_xplaying.png",
    rarity: "Legendary"
  },
  {
    name: "Million Volt",
    text: [
        "{C:attention}Steel{} Card will also act",
        "like {C:attention}Gold{} Card and ",
        "{C:attention}vice versa{}. {C:red}(Only for {}",
        "{C:attention}enhancement{} {C:red}effects){}",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_million_volt.png",
    rarity: "Legendary"
  },
  {
    name: "Coming Home",
    text: [
        "After playing hand or ",
        "discard, you always draw ",
        "cards that form your",
        " {C:attention}most played hand{}. ",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_coming_home.png",
    rarity: "Legendary"
  },
  {
    name: "Queen of Clubs (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/b_xplaying.png",
    rarity: "Legendary"
  },
  {
    name: "Reaper's Hand",
    text: [
        "After playing a hand, ",
        "destroy all scoring cards ",
        "and gain their {C:chips}chips{}, {C:mult}mult{}",
        " and {C:attention}enhancement{}.",
        "{C:inactive}({}{C:chips}chips{}, {C:mult}mult{}, {X:mult,C:white}Xmult{} and",
        "{C:attention}gold at end of round{}{C:inactive}){}",
        "This X-Playing card is {C:attention}eternal{}."
    ],
    image_url: "img/j_hcm_reapers_hand.png",
    rarity: "Legendary"
  },
  {
    name: "Ace of Clubs (WIP)",
    text: [
        "TBA!",
        "When round ends, ",
        "transform back to ",
        "{C:attention}X-Playing Joker{}."
    ],
    image_url: "img/j_hcm_clubA.png",
    rarity: "Legendary"
  },
]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
  {
    name: "Low Light Cigarette Pack",
    text: [
      "Choose {C:attention}1{} of up to",
      "{C:attention}3{C:attention} X-Playing{} cards to",
      "add to your deck"
    ],
    image_url: "img/p_xcards.png",
    rarity: "Pack"
  },

  //{
  //  name: "Joker",
  //  text: [
  //    "{C:mult}+4{} Mult"
  //  ],
  //  image_url: "img/j_joker.png",
  //  rarity: "Voucher"
  //},
  //{
  //  name: "Joker",
  //  text: [
  //    "{C:mult}+4{} Mult"
  //  ],
  //  image_url: "img/j_joker.png",
  //  rarity: "Pack"
  //},
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
  CREDIT: "#8fce00",
  USERNAME: "#3640ff", 
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}