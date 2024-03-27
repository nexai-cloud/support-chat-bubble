"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNameGenerator = void 0;
const adjective = [
    "Gentle", "Graceful", "Radiant", "Serene", "Charming", "Tranquil", "Polite", "Kind",
    "Courteous", "Amiable", "Eloquent", "Thoughtful", "Gracious", "Elegant", "Respectful",
    "Sincere", "Genuine", "Compassionate", "Empathetic", "Affable", "Humble", "Modest",
    "Tactful", "Sophisticated", "Stylish", "Pleasant", "Cultured", "Majestic", "Regal",
    "Enchanting", "Captivating", "Pristine", "Harmonious", "Mellow", "Blissful", "Cheerful",
    "Delightful", "Enthusiastic", "Exuberant", "Vivacious", "Animated", "Lively", "Dynamic",
    "Energetic", "Effervescent", "Sparkling", "Joyful", "Merry", "Radiant", "Spirited",
    "Vibrant", "Whimsical", "Witty", "Brilliant",
    "Cordial", "Ingenious", "Persuasive", "Nurturing", "Stellar", "Dazzling", "Alluring",
    "Enigmatic", "Epic", "Ravishing", "Exquisite", "Intriguing", "Mesmerizing",
    "Irresistible", "Fantastic", "Phenomenal", "Splendid", "Opulent", "Luxurious",
    "Svelte", "Sumptuous", "Luminous", "Radiant", "Transcendent", "Celestial",
    "Ethereal", "Zenith", "Sublime", "Supreme", "Illustrious", "Majestic", "Grandiose",
    "Sovereign", "Regal", "Palatial", "Imposing", "August", "Noble", "Magnanimous",
    "Munificent", "Benevolent", "Prodigious", "Wondrous", "Marvelous", "Breathtaking",
    "Awe-inspiring", "Enthralling", "Spellbinding", "Captivating", "Euphoric",
    "Exhilarating", "Thrilling", "Enlivening", "Invigorating", "Uplifting", "Ecstatic",
    "Blissful", "Rapturous", "Transcendental", "Eclectic", "Charismatic", "Idyllic",
    "Quintessential", "Effulgent", "Resplendent", "Beaming", "Effervescent", "Coruscating",
    "Lustrous", "Vivid", "Dynamic", "Electrifying", "Radiating", "Efflorescent",
    "Incandescent", "Refulgent", "Scintillating", "Vivid", "Vibrant", "Zesty", "Exotic",
    "Captivating", "Rhapsodic", "Ineffable", "Unforgettable", "Irreplaceable"
];
const object = [
    "Sunshine Smile", "Rainbow Umbrella", "Lemonade Stand", "Cherry Blossom", "Cupcake Castle",
    "Moonbeam Lullaby", "Bubblegum Dream", "Butterfly Kiss", "Starlight Symphony",
    "Laughter Lantern", "Petal Pillow", "Jubilant Jigsaw", "Giggly Gazebo", "Peppermint Palace",
    "Sparkle Sprinkle", "Candy Cane Carousel", "Honeybee Haven", "Peaches & Cream",
    "Whispering Willow", "Dreamy Delight", "Glowing Gratitude", "Breezy Bubbles",
    "Sunny Smiles", "Lollipop Lane", "Carousel Charm", "Fluffy Cloud", "Raindrop Ripple",
    "Cosmic Carousel", "Bouncing Bubble", "Twinkling Star", "Golden Glow", "Cuddle Cove",
    "Sweet Serenity", "Radiant Rainbow", "Gentle Breeze", "Moonlit Meadow", "Laughing Lily",
    "Wonderland Wish", "Serenading Songbird", "Velvet Vine", "Cotton Candy Cloud",
    "Whimsical Whirl", "Bubbly Brook", "Harmony Harbor", "Singing Swallow", "Enchanted Echo",
    "Giggling Glimpse", "Merry Melody", "Peachy Paradise", "Glistening Glade", "Zesty Zephyr",
    "Silly Symphony", "Sugarplum Spark", "Blissful Breeze", "Dreamy Dazzle", "Fancy Flutter",
    "Tranquil Treasure", "Sunny Side", "Moonbeam Magic", "Pleasant Plume", "Wishing Well",
    "Sapphire Skies", "Radiant Rapture", "Whispering Wind", "Lavender Lullaby", "Merry Mirage",
    "Delightful Drizzle", "Starlit Symphony", "Lemonade Lagoon", "Blossom Breeze",
    "Twinkle Twirl", "Butterfly Bliss", "Sunflower Symphony", "Candyfloss Cloud",
    "Jolly Jigsaw", "Cherub Charm", "Merry Moonbeam", "Lullaby Lantern", "Jovial Jive",
    "Petal Parade", "Dreamy Dance", "Gleeful Gaze", "Blissful Bounce", "Wishing Well",
    "Bubblegum Bliss", "Tropical Tango", "Lavender Lagoon", "Starlit Serenade", "Rainbow Rhapsody",
    "Whispering Waters", "Moonlight Melody", "Fairy Floss Fiesta", "Cherished Chime",
    "Serene Sanctuary", "Jubilant Jewel", "Giggly Gala", "Lemonade Luminary",
    "Charming Chorus", "Bountiful Blossom", "Enchanted Embrace", "Twinkling Tide",
    "Dreamy Dazzle", "Crimson Cascade", "Buttercup Boulevard", "Golden Glade",
    "Peachy Paradise", "Whimsical Waltz", "Sapphire Symphony", "Starry Spell",
    "Radiant Reef", "Mellow Melody", "Luminous Lagoon", "Blissful Breeze",
    "Tender Twilight", "Sunny Serenade", "Cherry Cheer", "Gentle Glow",
    "Harmonious Haven", "Tranquil Twist", "Delicate Dream", "Joyful Journey",
    "Velvet Voyage", "Bubbly Brook", "Lavish Lagoon", "Whispering Willow",
    "Zesty Zenith", "Pleasant Pasture", "Majestic Meadow", "Glowing Glade",
    "Whistling Wind", "Mirthful Mosaic", "Lavish Lagoon", "Serene Splash",
    "Gentle Gust", "Lush Lullaby", "Lustrous Lagoon", "Twinkling Tranquility",
    "Vibrant Vista", "Soothing Sanctuary", "Tropical Treasure", "Harmonious Haven",
    "Merry Mirage", "Golden Grove", "Radiant Reef", "Velvet Valley", "Tranquil Treetop",
    "Luminous Land", "Whimsical Waterfall", "Dreamy Desert", "Peachy Peak",
    "Crimson Canyon", "Whispering Waters", "Majestic Mountain", "Mellow Meadow",
    "Bubbly Beach", "Glowing Glen", "Radiant Ravine", "Lush Lagoon", "Serene Summit"
];
function randomNameGenerator(sep = ' ') {
    return adjective[Math.floor(Math.random() * adjective.length)]
        + sep + object[Math.floor(Math.random() * object.length)];
}
exports.randomNameGenerator = randomNameGenerator;