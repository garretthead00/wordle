const wordList = [
    "APPLE", "BEACH", "CANDY", "DANCE", "EARTH", "FROST", "GIANT", "HORSE", "INPUT", "JOLLY",
    "KITES", "LEMON", "MANGO", "NOVEL", "ORBIT", "PARTY", "QUIET", "RIVER", "STORM", "TRAIN",
    "UNITY", "VALOR", "WORLD", "ZEBRA", "ANGLE", "BRAVE", "CAMEL", "DAIRY", "ELBOW", "FANCY",
    "GEARS", "HAPPY", "IGLOO", "JOKER", "KNIFE", "LUCKY", "MAGIC", "NORTH", "OLIVE", "PAPER",
    "QUEST", "RULER", "SMART", "TIGER", "UNDER", "VOICE", "WATER", "XENON", "YIELD", "ZEBRA",
    "AGILE", "BLOOM", "CHALK", "DREAM", "EXCEL", "FLARE", "GRAIN", "HOUSE", "IDEAL", "JEWEL",
    "KRAUT", "LIGHT", "MONTH", "NERVE", "OPIUM", "POWER", "QUERY", "RADAR", "SHARP", "TOKEN",
    "UPSET", "VIVID", "WAXED", "YUMMY", "ZONES", "AZURE", "BONGO", "CRISP", "DWELL", "EMBER",
    "FLAIR", "GRASP", "HIKER", "IONIC", "JOINT", "KEBAB", "LEDGE", "MAPLE", "NOVEL", "ORBIT",
    "PIOUS", "QUIRK", "RIGID", "SCOUT", "TRUCE", "UNITY", "VERVE", "WHISK", "XENON", "YIELD"
];
  
export const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    console.log('random word', wordList[randomIndex])
    return wordList[randomIndex];
}