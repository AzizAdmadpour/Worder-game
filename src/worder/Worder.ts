
import {Mode, Hide_Word_Type, Guess_Word_List} from './types'
//GLOBAL VARIABLES
const words : string[] = [
  "ABOUT", "ABOVE", "ACTOR", "ACUTE", "ADEPT", "ADMIT", "ADOPT", "ADORE", "ADULT", "AFTER",
  "AGILE", "AGREE", "AISLE", "ALBUM", "ALERT", "ALIEN", "ALIKE", "ALIVE", "ALLOW", "ALONG",
  "ALOUD", "ALTER", "AMBER", "AMEND", "AMPLE", "AMPLY", "AMUSE", "ANGEL", "ANGLE", "ANKLE",
  "APPLE", "APPLY", "APRON", "ARROW", "ASSET", "AVERT", "AVOID", "BACON", "BAKER", "BASIC",
  "BASIL", "BASIN", "BATHE", "BEACH", "BEARD", "BEAST", "BEATS", "BEGIN", "BEGUN", "BEING",
  "BELOW", "BIRCH", "BIRTH", "BLACK", "BLANK", "BLINK", "BLOWN", "BLUSH", "BOARD", "BOAST",
  "BONUS", "BOOST", "BOUND", "BOWEL", "BRAID", "BRAIN", "BRAKE", "BRAND", "BRAVE", "BREAD",
  "BREAK", "BRIDE", "BRIEF", "BRING", "BRISK", "BROKE", "BROOM", "BROWN", "BULKY", "BUNCH",
  "BUYER", "CABIN", "CABLE", "CAMEL", "CANDY", "CATER", "CHAIN", "CHAIR", "CHALK", "CHARM",
  "CHART", "CHASM", "CHEAP", "CHIEF", "CHINA", "CHIPS", "CHOKE", "CHOPS", "CIGAR", "CLAIM",
  "CLAMP", "CLASP", "CLASS", "CLEAN", "CLEAR", "CLIMB", "CLOAK", "CLONE", "CLOSE", "CLOTH",
  "CLOUD", "CLOVE", "CLOWN", "COAST", "CORAL", "COUNT", "CRAFT", "CRANE", "CRANK", "CRAWL",
  "CRISP", "CROSS", "CROWD", "CROWN", "CRUSH", "CRUST", "CURVE", "DAILY", "DAIRY", "DANCE",
  "DATUM", "DECAY", "DECOR", "DELAY", "DEVIL", "DIARY", "DINER", "DIRTY", "DISCO", "DIVER",
  "DOUBT", "DOUGH", "DRAFT", "DRAIN", "DRAWN", "DREAM", "DRESS", "DRINK", "DRIVE", "EARLY",
  "EARTH", "EIGHT", "ELBOW", "EMAIL", "EMPTY", "ENJOY", "EQUAL", "EQUIP", "ETHIC", "EXACT",
  "EXIST", "EXTRA", "FACET", "FAIRY", "FAITH", "FALSE", "FANCY", "FAULT", "FAVOR", "FEAST",
  "FETCH", "FIBER", "FIELD", "FINAL", "FIRST", "FLAIR", "FLAKE", "FLASK", "FLICK", "FLOAT",
  "FLOCK", "FLOWN", "FLUSH", "FLUTE", "FOCAL", "FOCUS", "FORCE", "FORUM", "FOUND", "FRAME",
  "FRANK", "FRAUD", "FRESH", "FRONT", "FROST", "FROZE", "FRUIT", "FUNGI", "FUNNY", "GHOST",
  "GIVEN", "GLASS", "GLAZE", "GLOBE", "GLORY", "GLOVE", "GRACE", "GRADE", "GRAIN", "GRAND",
  "GRAPE", "GRAPH", "GRASP", "GRASS", "GRAVY", "GREAT", "GREET", "GRILL", "GROUP", "GROWN",
  "GUARD", "GUESS", "GUEST", "GUIDE", "HABIT", "HAIRY", "HAPPY", "HARDY", "HASTE", "HAUNT",
  "HEART", "HEAVY", "HEFTY", "HONEY", "HORSE", "HOTEL", "HOUSE", "HUMAN", "HUMID", "HUMOR",
  "HUSKY", "IDEAL", "IMAGE", "IMPLY", "INCUR", "INDEX", "INFER", "INFRA", "INLET", "INNER",
  "INPUT", "INSET", "IVORY", "JEANS", "JOINT", "JUICE", "LABOR", "LADEN", "LAPSE", "LARGE",
  "LATEX", "LAUGH", "LAYER", "LEAFY", "LEANS", "LEARN", "LEMON", "LIGHT", "LINER", "LIVER",
  "LIVES", "LODGE", "LOFTY", "LOGIC", "LOVER", "LOWER", "LUCID", "LUCKY", "LUNCH", "LYMPH",
  "MACRO", "MAGIC", "MAIZE", "MAJOR", "MAKER", "MANGO", "MAPLE", "MARCH", "MATCH", "MEDAL",
  "MEDIA", "MERCY", "MERIT", "METAL", "MICRO", "MIDST", "MIGHT", "MINOR", "MINUS", "MIXER",
  "MODEL", "MOIST", "MONEY", "MONTH", "MORAL", "MOUNT", "MOUSE", "MOUTH", "MOVER", "MOVIE",
  "MULTI", "MUSIC", "NAIVE", "NEWLY", "NEXUS", "NICHE", "NIGHT", "NINJA", "NOBLE", "NODAL",
  "NOISE", "NOISY", "NORTH", "NOTCH", "NOTED", "NOVEL", "NURSE", "OCEAN", "OFTEN", "OLIVE",
  "ONSET", "OPERA", "OPTIC", "ORBIT", "ORGAN", "OTHER", "OUGHT", "OUNCE", "OUTER", "OVERT",
  "OWING", "OWNED", "OWNER", "OXIDE", "PACED", "PAINT", "PANIC", "PANTS", "PARTY", "PASTE",
  "PATCH", "PATIO", "PAUSE", "PAVED", "PAYER", "PEACH", "PEARL", "PEDAL", "PHASE", "PHONE",
  "PIANO", "PILOT", "PINCH", "PIVOT", "PIZZA", "PLACE", "PLAIN", "PLANE", "PLANK", "PLANT",
  "PLATE", "PLEAD", "PLUCK", "POINT", "POKER", "POLAR", "PORCH", "POUCH", "POUND", "POWER",
  "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", "PRIZE", "PRONE", "PROUD", "PROVE", "PUNCH",
  "PUPPY", "PURGE", "PURSE", "QUAIL", "QUEEN", "QUERY", "QUEST", "QUICK", "QUIET", "QUILT",
  "QUITE", "QUOTA", "QUOTE", "RADIO", "RAINY", "RAISE", "RANCH", "RANGE", "RAPID", "RATIO",
  "REACH", "REACT", "READY", "REALM", "REGAL", "REIGN", "RELAX", "RELAY", "RELIC", "REMIT",
  "REPAY", "REPLY", "RESIN", "RIDGE", "RIGHT", "RINSE", "RISKY", "RIVAL", "ROAST", "ROCKY",
  "ROMAN", "ROUGH", "ROUND", "ROYAL", "RUSTY", "SADLY", "SAINT", "SALON", "SALTY", "SANDY",
  "SATIN", "SAUCE", "SCALE", "SCARE", "SCARF", "SCARY", "SCENT", "SCORE", "SCOUT", "SCREW",
  "SERUM", "SETUP", "SHADE", "SHADY", "SHAKE", "SHAKY", "SHAME", "SHAPE", "SHARE", "SHARK",
  "SHARP", "SHAVE", "SHEAR", "SHELF", "SHELL", "SHIFT", "SHINE", "SHIRT", "SHOCK", "SHORE",
  "SHORT", "SHOUT", "SHOVE", "SHOWN", "SHRUB", "SHRUG", "SIGHT", "SIGMA", "SILKY", "SINCE",
  "SIXTY", "SKATE", "SKILL", "SKIRT", "SLACK", "SLATE", "SLEEP", "SLEPT", "SLICE", "SLICK",
  "SLIDE", "SLING", "SLUMP","SMALL","SMART","SMILE","SMOKE","SMOKY","SNACK","SNAIL","SNAKE","SNEAK","SOBER","SOLAR","SOLVE","SOUND","SOUTH","SPACE","SPADE","SPARE","SPARK","SPEAK","SPEAR","SPELL","SPICE","SPICY","SPIKE","SPILL","SPINE","SPLIT","SPOIL","SPOKE","SPORT","SPRAY","SQUAD","SQUAT","SQUID","STACK","STAFF","STAGE","STAIN","STAIR","STAKE","STALE","STAMP","STAND","STARE","STEAD","STEAK","STEAL","STEAM","STEEL","STERN","STICK","STILL","STING","STOCK","STONE","STORE","STORM","STORY","STOVE","STRAP","STRAW","STRAY","STUCK","STUDY","STUFF","STUMP","STYLE","SUGAR","SUITE","SUNNY","SUPER","SWAMP","SWEAT","SWEPT","SWIFT","SWINE","SWING","SWIRL","SYRUP","TABLE","TAKEN","TEACH","TEMPO","THANK","THEIR","THICK","THING","THINK","THIRD","THORN","THOSE","THREE","THROW","THUMB","THYME","TIDAL","TIGER","TIMER","TODAY","TOKEN","TONIC","TOUCH","TOUGH","TOWEL","TOWER","TOXIC","TOXIN","TRACE","TRACK","TRADE","TRAIL","TRAIN","TRASH","TREAD","TREND","TRIAD","TRIAL","TRIBE","TRICK","TWICE","TWINS","ULCER","ULTRA","UNCLE","UNDER","UNIFY","UNITE","UNITY","UPSET","URBAN","USAGE","VAGUE","VALID","VALUE","VIDEO","VIRAL","VITAL","VOCAL","VODKA","VOICE","VOWEL","WAFER","WAGED","WAGER","WAGON","WAIST","WAIVE","WASTE","WATCH","WATER","WEARY","WEIGH","WEIRD","WHALE","WHARF","WHEAT","WHILE","WHITE","WHOLE","WHOSE","WIDEN","WIDTH","WINDY","WOMAN","WOMEN","WORLD","WORSE","WORST","WORTH","WOULD","WOUND","WOVEN","WRECK","WRITE","WRONG","YEAST","YIELD","YOUNG","YOUTH"
   
]

// get random number function
const  get_random_number = (length : number): number =>{
    return Math.floor(Math.random() * length);  
 }

// FUNCTION FOR GET RANDOM ELEMNT OF ARRY
function getRandomElement<T>(arr: T[]): T {
    const randomIndex = get_random_number(arr.length);
    return arr[randomIndex];
  }

// GET WORDS RANDOMLY FUNCTION
export function bot_guess( mode : Mode, hide_word : Hide_Word_Type[], guses_list: Guess_Word_List[], selected_word : string ) : string {
    console.log('hided word'+ hide_word);
    
    let not_in_words : string[] =[] 
    let include_letters : string[]=[]

    let difficulty_number = 0;
    if(mode === 'EASY') difficulty_number = 3;
    else if(mode === 'NORMAL') difficulty_number = 4;
    else if(mode === 'HARD') difficulty_number = 5;
     let reg :string = ''

    hide_word.forEach((letter : Hide_Word_Type, index : number) =>{
        if(letter.isCorrect || letter.hint !== ''){
            if(difficulty_number > 0){
                reg += letter.hint === '' ? letter.text : letter.hint
                difficulty_number -=1;
            }else
                reg+= '-'
        }else   
        reg += '-'
    })

    



    let guess : string[] = [];
    let regex = new  RegExp('^'+ reg.replace(/-/g,'.')+ '$')
    let re = ''
    words.forEach(word=>{
         if(regex.test(word))
            guess.push(word)
    })
    
    if(hide_word.length> 0){
        
    }
    guses_list.forEach(item=>{
            item.word.forEach((letter)=>{
                    if(!selected_word.includes(letter.text)){
                        if(!not_in_words.includes(letter.text)){
                            not_in_words.push(letter.text)
                        }
                    }
                    else if (selected_word.includes(letter.text))
                    if(!include_letters.includes(letter.text))
                        include_letters.push(letter.text)

            })
    }  )

 
    
  


             re = '';
             include_letters.forEach(item=>{
                        re += `(?=.*${item})`
            })
             regex = new RegExp(re);
           guess=  guess.filter(word => regex.test(word))
    

         re = `^(?!.*[${not_in_words.join('')}])`
         
        regex = new RegExp(re);
        guess = guess.filter(word => regex.test(word))
    return getRandomElement(guess)
}

// START GAME function
export const get_word= (mode : Mode ) : string  =>{
    return getRandomElement(words);
}


const shuffleArray =(array : string[]) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  


export const hide_the_word = (word : string, mode: Mode) : string =>{

    let letters_list : string[] = word.split('');
    let output : string = ''
    let shown_index : number[] = [];

    switch(mode){
            case 'EASY':
                shown_index.push(get_random_number(word.length-1));
                shown_index.push(get_random_number(word.length-1));
                break;
            case 'NORMAL':
                shown_index.push(get_random_number(word.length-1));
                break;
            case 'HARD':
                shown_index = [];
                break;
            default :
                shown_index = []
                break;
    }

    letters_list.forEach((letter: string) =>{
        output += '-'
    })

    shown_index.forEach((i : number) =>{
      output = output.slice(0, i) + letters_list[i] + output.slice(i + 1);
    })




    return output

}

const get_random_letter = (word : string) : string=>{
    const alphabet : string = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let random_letter =''
    while(true){
        random_letter = alphabet[get_random_number(alphabet.length -1 )];
        if(word.indexOf(random_letter) === -1)
            break
    }
    return random_letter
}

export const  get_list_of_letters =(word : string , mode : Mode) : string[] =>{
        
        let output = word.split('');

        switch(mode){
            case 'EASY':
                output.push(get_random_letter(word));
                break;
            case 'NORMAL':
                output.push(get_random_letter(output.join(' ')));
                output.push(get_random_letter(output.join(' ')));
                break;
            case 'HARD':
                output.push(get_random_letter(output.join(' ')));
                output.push(get_random_letter(output.join(' ')));
                output.push(get_random_letter(output.join(' ')));
                break;
        }
        
        output = shuffleArray(output);
        return output
}