// Aliya Rose Nursery - Expanded Catalog Data
// Compiled from the official Shikarpur Rose Plant Code & Commercial Directory
// Structure supports 500+ entries. Currently populated with all unique varieties
// clearly listed across the provided catalog pages.

const roseVarieties = [
  {
    code: "A1 BI HT F",
    name: "Abhisarika",
    origin: "India",
    color: "Red & Yellow Bicolor",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Popular Indian hybrid tea variety with rich bi-color velvety red and soft yellow petals, ideal for warm climates."
  },
  {
    code: "A2 BI HT",
    name: "Abrakadabra",
    origin: "Germany",
    color: "Striped Dark Red & Yellow",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Striking striped hybrid tea with dark red, purple, and bright yellow splash patterns. Unique novelty cut rose."
  },
  {
    code: "A3 LV FL F",
    name: "Angel Face",
    origin: "USA",
    color: "Lavender / Purple",
    type: "Floribunda",
    fragrant: true,
    description: "Deep lavender ruffled floribunda with rich citrus-sweet scent, high disease resistance, and glossy dark foliage."
  },
  {
    code: "A4 PK HT F",
    name: "Anurag",
    origin: "India",
    color: "Deep Pink",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Bred in India, features heavy-petaled double pink blooms with continuous repeat flowering throughout the year."
  },
  {
    code: "A5 RD HT",
    name: "Alexander",
    origin: "UK",
    color: "Luminous Orange-Red",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Vibrant orange-red blooms, extremely vigorous upright growth, exceptional heat tolerance across tropical India."
  },
  {
    code: "A6 OR SH F",
    name: "Abraham Darby",
    origin: "UK",
    color: "Apricot & Pink",
    type: "Shrub",
    fragrant: true,
    description: "Classic English shrub rose with large cupped apricot-pink blooms and strong fruity aroma. Heavy petal count."
  },
  {
    code: "A7 BI HT F",
    name: "Archiduc Joseph",
    origin: "France",
    color: "Pink & Apricot Blend",
    type: "Tea Rose",
    fragrant: true,
    description: "Classic old Tea rose with rich blend of pink, copper, and apricot tones; thrives exceptionally in hot climates."
  },
  {
    code: "B1 OR MI F",
    name: "Baby Darling",
    origin: "USA",
    color: "Apricot-Orange",
    type: "Miniature",
    fragrant: true,
    description: "Popular mini rose producing tight, high-centered apricot blooms; excellent choice for pot culture and sunny borders."
  },
  {
    code: "B2 YL MI",
    name: "Baby Love",
    origin: "USA",
    color: "Bright Yellow",
    type: "Miniature",
    fragrant: false,
    description: "Single-flowered sunny yellow miniature rose with exceptional black-spot resistance and bushy compact growth habit."
  },
  {
    code: "B3 RD FL",
    name: "Banjaran",
    origin: "India",
    color: "Bright Red",
    type: "Floribunda",
    fragrant: false,
    description: "Famous Indian floribunda with profuse cluster blooms of vivid fire-engine red, flowering reliably year-round."
  },
  {
    code: "B4 RD HT F",
    name: "Black Lady",
    origin: "Germany",
    color: "Deep Velvet Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Dark velvet crimson rose appearing nearly black at bud stage, expanding into large scented exhibition blooms."
  },
  {
    code: "B5 LV HT F",
    name: "Blue Moon",
    origin: "Germany",
    color: "Lilac / Lavender",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Iconic lavender-lilac hybrid tea rose worldwide, highly celebrated for its exquisite strong sweet tea perfume."
  },
  {
    code: "B6 RD HT",
    name: "Bhim",
    origin: "India",
    color: "Dark Crimson Red",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Robust Indian hybrid tea variety producing massive, velvety deep crimson blossoms on tall sturdy stems."
  },
  {
    code: "B7 BI HT F",
    name: "Baronne E. de Rothschild",
    origin: "France",
    color: "Solferino Purple & Silver",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Large high-centered purple-pink blooms with silvery reverse; intense sweet perfume and thick petals."
  },
  {
    code: "B8 RD FL",
    name: "Black Forest Rose",
    origin: "Germany",
    color: "Bright Crimson Red",
    type: "Floribunda",
    fragrant: false,
    description: "Extremely resilient cluster rose covered in brilliant red blooms; unbeatable resistance to black spot."
  },
  {
    code: "C1 BI FL",
    name: "Charisma",
    origin: "USA",
    color: "Red & Yellow Bicolor",
    type: "Floribunda",
    fragrant: false,
    description: "Vibrant cluster-flowering rose shifting continuously from golden yellow to fiery scarlet red as blooms mature."
  },
  {
    code: "C2 PK PO F",
    name: "Cecile Brunner",
    origin: "France",
    color: "Soft Light Pink",
    type: "Polyantha",
    fragrant: true,
    description: "Classic 'Sweetheart Rose' with tiny perfectly formed pale pink buds in large spray clusters. Highly reliable."
  },
  {
    code: "C3 RD HT F",
    name: "Christian Dior",
    origin: "France",
    color: "Crimson Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Classic high-centered crimson hybrid tea rose, very popular across Indian commercial cut-flower markets."
  },
  {
    code: "C4 OR HT F",
    name: "Chitralekha",
    origin: "India",
    color: "Bright Orange-Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Bred by IARI India, features brilliant orange-red blooms with pleasant spicy fragrance and dark glossy leaves."
  },
  {
    code: "C5 RD HT F",
    name: "Crimson Glory",
    origin: "Germany",
    color: "Deep Crimson Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Legendary dark crimson-red rose famous for its rich classical damask perfume and velvety thick petals."
  },
  {
    code: "C6 BI HT F",
    name: "Cherry Parfait",
    origin: "France",
    color: "White & Crimson Bicolor",
    type: "Grandiflora",
    fragrant: true,
    description: "Striking bi-colored blooms with white center and broad deep crimson-red edges; heavy spray output."
  },
  {
    code: "C7 OR HT F",
    name: "Chicago Peace",
    origin: "USA",
    color: "Copper & Pink Blend",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Famous sport of Peace rose featuring vibrant coppery pink and warm canary yellow shades."
  },
  {
    code: "D1 BI HT F",
    name: "Double Delight",
    origin: "USA",
    color: "Cream & Red Bicolor",
    type: "Hybrid Tea",
    fragrant: true,
    description: "World-renowned bicolor rose with creamy yellow center and strawberry red edges; intensely spicy scent."
  },
  {
    code: "D2 PK DB F",
    name: "Desi Gulab (Rosa damascena)",
    origin: "India / Persia",
    color: "Deep Pink",
    type: "Damask",
    fragrant: true,
    description: "Traditional Indian aromatic rose used extensively for attar, rose water, and gulkand production. Extremely fragrant."
  },
  {
    code: "D3 OR MI",
    name: "Dazzler",
    origin: "USA",
    color: "Orange-Scarlet",
    type: "Miniature",
    fragrant: false,
    description: "Compact miniature rose with vivid orange-red double blooms, ideal for nursery pots, borders, and edging."
  },
  {
    code: "D4 PK HT F",
    name: "Dr. M.S. Swaminathan",
    origin: "India",
    color: "Magenta Pink",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Named after the eminent agricultural scientist, features rich magenta double blooms with strong floral perfume."
  },
  {
    code: "D5 PK FL",
    name: "Delhi Princess",
    origin: "India",
    color: "Deep Warm Pink",
    type: "Floribunda",
    fragrant: false,
    description: "Prolific Indian floribunda rose producing massive sprays of pink flowers continuously throughout warm seasons."
  },
  {
    code: "D6 YL FL F",
    name: "Dortmund",
    origin: "Germany",
    color: "Red with White Eye",
    type: "Climber",
    fragrant: true,
    description: "Vigorous single-flowered climber with rich crimson petals and prominent clear white center eye."
  },
  {
    code: "E1 PK GR",
    name: "Earth Song",
    origin: "USA",
    color: "Deep Rose Pink",
    type: "Grandiflora",
    fragrant: false,
    description: "Vigorous Grandiflora rose with large urn-shaped deep pink flowers borne singly and in clusters on long stems."
  },
  {
    code: "E2 BI CL F",
    name: "Eden Rose (Pierre de Ronsard)",
    origin: "France",
    color: "Cream & Pink Bicolor",
    type: "Climber",
    fragrant: true,
    description: "Romantica climbing rose with heavy cupped cream-white blooms flushed with warm carmine pink. Very romantic form."
  },
  {
    code: "E3 RD FL",
    name: "Europeana",
    origin: "Netherlands",
    color: "Brilliant Crimson Red",
    type: "Floribunda",
    fragrant: false,
    description: "Prolific crimson floribunda with distinctive dark reddish-bronze foliage, highly resilient in tropical humidity."
  },
  {
    code: "E4 PK HT F",
    name: "Eiffel Tower",
    origin: "USA",
    color: "Silvery Soft Pink",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Very tall high-centered pale pink hybrid tea rose with exceptionally long stems, tailored for cut flower arrangements."
  },
  {
    code: "E5 YL HT F",
    name: "Elina",
    origin: "Northern Ireland",
    color: "Light Lemon Yellow",
    type: "Hybrid Tea",
    fragrant: true,
    description: "World's Favorite Rose winner; huge creamy lemon-yellow blossoms on strong disease-resistant bushes."
  },
  {
    code: "F1 RD HT",
    name: "First Red",
    origin: "Germany",
    color: "Dark Velvet Red",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Standard greenhouse and commercial cut flower rose across India; valued for long straight stems and extended vase life."
  },
  {
    code: "F2 PK PO",
    name: "Fairy Rose (The Fairy)",
    origin: "UK",
    color: "Soft Pink",
    type: "Polyantha",
    fragrant: false,
    description: "Ultra-hardy polyantha creating dense low mounds of tiny blush pink double roses, excellent groundcover choice."
  },
  {
    code: "F3 LV GR F",
    name: "Fragrant Plum",
    origin: "USA",
    color: "Lavender-Purple",
    type: "Grandiflora",
    fragrant: true,
    description: "Grandiflora with elegant lavender blooms edged in deep plum-purple, releasing a powerful sweet fruity perfume."
  },
  {
    code: "F4 PK HT F",
    name: "First Prize",
    origin: "USA",
    color: "Rose Pink & Cream",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Huge exhibition double blooms with blended shades of rose pink, ivory, and warm coral. Classic prize-winner."
  },
  {
    code: "F5 RD FL F",
    name: "French Lace",
    origin: "USA",
    color: "Ivory & Warm Peach",
    type: "Floribunda",
    fragrant: true,
    description: "Elegant cupped ivory-peach flowers; high exhibition quality floribunda with delicate tea aroma."
  },
  {
    code: "G1 YL HT F",
    name: "Golden Giant",
    origin: "Germany",
    color: "Pure Deep Yellow",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Large bright golden-yellow blooms on long sturdy stems, widely used in commercial landscape design in India."
  },
  {
    code: "G2 BI HT F",
    name: "Garden Party",
    origin: "USA",
    color: "Ivory & Soft Pink",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Elegant ivory white petals delicate-edged with pastel pink blush. Large flowers with refined high-centered form."
  },
  {
    code: "G3 RD FL",
    name: "Glad Tidings",
    origin: "UK",
    color: "Deep Crimson",
    type: "Floribunda",
    fragrant: false,
    description: "Compact floribunda blooming continuously in heavy spray clusters of deep crimson red. Excellent border rose."
  },
  {
    code: "G4 WH HT F",
    name: "Ganga",
    origin: "India",
    color: "White & Soft Pink",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Indian hybrid tea variety producing graceful white blooms tinted with delicate pink blush; strong vigor."
  },
  {
    code: "G5 YL HT F",
    name: "Gold Medal (Gold Stick)",
    origin: "USA",
    color: "Deep Golden Yellow",
    type: "Grandiflora",
    fragrant: true,
    description: "Vigorous tall grower producing dark golden yellow double roses with high centers and fruity perfume."
  },
  {
    code: "G6 PK HT F",
    name: "Granada",
    origin: "USA",
    color: "Scarlet, Peach & Yellow",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Multi-toned bloom blending rose red, peach, and golden yellow with strong spicy floral fragrance."
  },
  {
    code: "H1 PK DB F",
    name: "Himroz",
    origin: "India",
    color: "Pastel Pink",
    type: "Damask",
    fragrant: true,
    description: "Indian Damask cultivar specifically bred for high essential oil extraction, rose water, and medicinal extracts."
  },
  {
    code: "H2 RD SH",
    name: "Home Run",
    origin: "USA",
    color: "Flame Red",
    type: "Shrub",
    fragrant: false,
    description: "Disease-resistant landscape shrub rose covered in bright flame-red single flowers; virtually maintenance free."
  },
  {
    code: "H3 OR FL F",
    name: "Honey Perfume",
    origin: "USA",
    color: "Apricot Yellow",
    type: "Floribunda",
    fragrant: true,
    description: "Spicy-scented floribunda with rich apricot-yellow blooms fading to warm peach tone. Strong fungal resistance."
  },
  {
    code: "H4 PK SH F",
    name: "Heritage",
    origin: "UK",
    color: "Clear Shell Pink",
    type: "Shrub",
    fragrant: true,
    description: "Austin English rose with cupped shell-pink blossoms and intense lemon-myrrh scent; heavy repeat bloomer."
  },
  {
    code: "H5 YL HT F",
    name: "Helmut Schmidt",
    origin: "Germany",
    color: "Clear Soft Yellow",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Perfect high-centered exhibition blooms in clear un-fading yellow; heat hardy across Indian regions."
  },
  {
    code: "I1 WH FL F",
    name: "Iceberg",
    origin: "Germany",
    color: "Pure Crisp White",
    type: "Floribunda",
    fragrant: true,
    description: "World's leading white floribunda rose, produces massive flushes of snow-white clusters with mild honey aroma."
  },
  {
    code: "I2 RD HT",
    name: "Inkspot",
    origin: "USA",
    color: "Near-Black Velvet Red",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Dark maroon-black buds opening into dramatic deep velvety red flowers with thick rain-resistant petals."
  },
  {
    code: "I3 RD HT F",
    name: "Indian Princess",
    origin: "India",
    color: "Velvet Dark Crimson",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Bred in India, robust plant with deep crimson blooms, classic high center, and delightful sweet floral scent."
  },
  {
    code: "J1 WH HT F",
    name: "Jawahar",
    origin: "India",
    color: "Pure Pearl White",
    type: "Hybrid Tea",
    fragrant: true,
    description: "IARI bred Indian variety with glistening white full blooms, refined high-centered form, and good heat stamina."
  },
  {
    code: "J2 OR HT F",
    name: "Just Joey",
    origin: "UK",
    color: "Warm Copper-Apricot",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Huge ruffled petals in warm coppery-orange, internationally famous for its powerful fruity fragrance."
  },
  {
    code: "J3 BI FL",
    name: "Jubile du Prince de Monaco",
    origin: "France",
    color: "White & Red Bicolor",
    type: "Floribunda",
    fragrant: false,
    description: "Eye-catching white flowers edged in brilliant cherry crimson; highly floriferous spray production."
  },
  {
    code: "K1 RD HT F",
    name: "Kashmiri Rose",
    origin: "India",
    color: "Deep Pink-Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Hardy regional variety adapted to Northern India, highly aromatic, full-petaled, and resilient against frost."
  },
  {
    code: "K2 OR CL",
    name: "Kanyakumari",
    origin: "India",
    color: "Orange-Coral",
    type: "Climber",
    fragrant: false,
    description: "Climbing rose variety tested for tropical Indian conditions, bearing bright coral-orange sprays along pillars."
  },
  {
    code: "K3 RD SH",
    name: "Knock Out",
    origin: "USA",
    color: "Cherry Red",
    type: "Shrub",
    fragrant: false,
    description: "Ultra-hardy landscape shrub rose continuously flowering with high heat and disease tolerance across India."
  },
  {
    code: "K4 BI HT F",
    name: "Kiss of Fire",
    origin: "Japan",
    color: "Yellow & Red Bicolor",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Striking yellow petals edged with fiery scarlet red margins; sturdy stems and good vase life."
  },
  {
    code: "K5 OR FL F",
    name: "Koko Loko (Poco Loco)",
    origin: "USA",
    color: "Milk Chocolate to Lavender",
    type: "Floribunda",
    fragrant: true,
    description: "Famous novelty rose starting creamy chocolate tan and fading gracefully into warm lavender-magenta."
  },
  {
    code: "L1 RD HT F",
    name: "Lal Kolkata",
    origin: "India",
    color: "Rich Velvet Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Widely cultivated across Bengal and East India; features classic scented crimson blossoms for local markets."
  },
  {
    code: "L2 LV MI F",
    name: "Lavender Jewel",
    origin: "USA",
    color: "Lavender-Violet",
    type: "Miniature",
    fragrant: true,
    description: "Charming mini rose with clear lilac-lavender fully double flowers; ideal for small pots and terrace gardens."
  },
  {
    code: "L3 LV HT F",
    name: "Lady X",
    origin: "France",
    color: "Mauve / Pale Lavender",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Tall elegant pale lilac-mauve hybrid tea rose with long straight stems; exquisite subtle scent."
  },
  {
    code: "L4 YL HT",
    name: "Landora",
    origin: "Germany",
    color: "Clear Bright Yellow",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Popular yellow hybrid tea rose that retains bright unfading color even under hot Indian sun."
  },
  {
    code: "L5 BI HT F",
    name: "Love",
    origin: "USA",
    color: "Scarlet Red & White Reverse",
    type: "Grandiflora",
    fragrant: true,
    description: "Dramatic contrast rose featuring bright scarlet red petals with stark silvery-white outer reverse."
  },
  {
    code: "M1 RD HT F",
    name: "Mr. Lincoln",
    origin: "USA",
    color: "Rich Dark Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Global benchmark for scented red roses, producing huge velvety crimson blooms with heavy damask perfume."
  },
  {
    code: "M2 OR PO",
    name: "Margo Koster",
    origin: "Netherlands",
    color: "Salmon Orange",
    type: "Polyantha",
    fragrant: false,
    description: "Classic globose button-like salmon-orange blooms in dense polyantha clusters; long-lasting garden display."
  },
  {
    code: "M3 WH DB F",
    name: "Madame Hardy",
    origin: "France",
    color: "Pure White",
    type: "Damask",
    fragrant: true,
    description: "Historic Damask rose with cupped white flowers and a distinct green central button; strong lemon scent."
  },
  {
    code: "M4 OR HT",
    name: "Mohini",
    origin: "India",
    color: "Chocolate Brown / Copper",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Unique Indian bred variety exhibiting unusual coppery-tan and chocolate hue; rare collector favorite."
  },
  {
    code: "M5 PK RM F",
    name: "May Queen",
    origin: "USA",
    color: "Lilac Pink",
    type: "Rambler",
    fragrant: true,
    description: "Vigorous rambler rose creating thick cascades of fragrant double pink flowers over arbors and fencing."
  },
  {
    code: "M6 BI HT F",
    name: "Monaco (Princesse de Monaco)",
    origin: "France",
    color: "Cream & Carmine Pink",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Prestigious exhibition cultivar with glistening white petals soft-edged in rich rosy pink; sweet perfume."
  },
  {
    code: "M7 OR FL F",
    name: "Mardi Gras",
    origin: "USA",
    color: "Yellow, Orange & Pink",
    type: "Floribunda",
    fragrant: true,
    description: "Festive cluster rose featuring shifting tones of yellow, bright orange, and deep pink with spicy scent."
  },
  {
    code: "N1 PK HT F",
    name: "Navneet",
    origin: "India",
    color: "Soft Pink & Cream",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Indian hybrid tea with broad ivory petals soft-shaded in pastel pink; smooth stem habit."
  },
  {
    code: "N2 LV HT F",
    name: "Neelambari",
    origin: "India",
    color: "Deep Mauve / Purple",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Distinctive Indian lilac-purple variety prized by rose collectors for its rare color tone."
  },
  {
    code: "N3 RD HT F",
    name: "Night Time",
    origin: "USA",
    color: "Dark Velvet Crimson",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Deep crimson double rose with rich old-rose perfume and sturdy upright bush habit."
  },
  {
    code: "N4 PK FL F",
    name: "Nearly Wild",
    origin: "USA",
    color: "Rose Pink",
    type: "Floribunda",
    fragrant: true,
    description: "Single-to-semi-double wild-look pink blossoms produced in non-stop clusters on hardy bushy plants."
  },
  {
    code: "O1 RD HT F",
    name: "Oklahoma",
    origin: "USA",
    color: "Very Dark Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Deep blackish-red hybrid tea with broad velvety petals and intense sweet rose fragrance."
  },
  {
    code: "O2 BI FL",
    name: "Orange Splash",
    origin: "USA",
    color: "Orange & White Striped",
    type: "Floribunda",
    fragrant: false,
    description: "Showy floribunda with bright orange petals splashed and striped with pure white. High visual impact."
  },
  {
    code: "O3 OR HT",
    name: "Olympike",
    origin: "France",
    color: "Vermilion Red",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Vivid orange-vermilion hybrid tea rose with outstanding cut-flower durability and sun resistance."
  },
  {
    code: "O4 BI HT F",
    name: "Osiria",
    origin: "Germany",
    color: "Dark Crimson & Silvery White",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Famous bicolor novelty rose with deep velvety crimson-red interior and brilliant white outer reverse."
  },
  {
    code: "P1 BI HT F",
    name: "Peace",
    origin: "France",
    color: "Yellow & Pink Bicolor",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Historical landmark rose with massive golden yellow blooms soft-edged in delicate rose pink. Extremely hardy."
  },
  {
    code: "P2 WH HT",
    name: "Pascali",
    origin: "Belgium",
    color: "Creamy Pure White",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Voted world's favorite white rose, featuring perfect high-centered exhibition shape and clean foliage."
  },
  {
    code: "P3 PK GR F",
    name: "Pink Parfait",
    origin: "USA",
    color: "Pastel Pink Bicolor",
    type: "Grandiflora",
    fragrant: true,
    description: "Grandiflora rose blooming in rich clusters of soft pink and apricot-pink flowers with sweet scent."
  },
  {
    code: "P4 PK FL F",
    name: "Preyasi",
    origin: "India",
    color: "Blush Pink",
    type: "Floribunda",
    fragrant: true,
    description: "Bred in West Bengal, India; profuse floribunda with charming blush-pink spray clusters. Heat adapted."
  },
  {
    code: "P5 PK PO",
    name: "Pink Spray",
    origin: "USA",
    color: "Medium Pink",
    type: "Polyantha",
    fragrant: false,
    description: "Compact polyantha smothered in dense spray clusters of clear pink flowers; great border filler."
  },
  {
    code: "P6 OR HT F",
    name: "Pat Austin",
    origin: "UK",
    color: "Coppery Orange",
    type: "Shrub",
    fragrant: true,
    description: "English shrub rose featuring deeply cupped copper-orange inner petals with pale yellow reverse."
  },
  {
    code: "P7 PK HT F",
    name: "Perfume Delight",
    origin: "USA",
    color: "Deep Rose Pink",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Vibrant pink double rose celebrated for its intense classic damask floral fragrance and vigor."
  },
  {
    code: "R1 RD HT F",
    name: "Raktagandha",
    origin: "India",
    color: "Vibrant Scarlet Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Bred by IARI India; widely recognized national crimson rose with rich sweet fragrance and long stems."
  },
  {
    code: "R2 OR FL",
    name: "Rajamani",
    origin: "India",
    color: "Deep Orange",
    type: "Floribunda",
    fragrant: false,
    description: "Indian floribunda featuring bold deep orange cluster blooms that hold color well in hot weather."
  },
  {
    code: "R3 BI HT F",
    name: "Raja Surendra Singh",
    origin: "India",
    color: "Red & Yellow Bicolor",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Fascinating Indian hybrid tea with fiery red inner petals and golden yellow outer reverse. Highly ornamental."
  },
  {
    code: "R4 PK HT F",
    name: "Royal Highness",
    origin: "USA",
    color: "Soft Shell Pink",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Classic exhibition pink rose with perfect high-centered form and delicate sweet perfume."
  },
  {
    code: "R5 BI HT F",
    name: "Rock & Roll",
    origin: "USA",
    color: "Burgundy & White Striped",
    type: "Grandiflora",
    fragrant: true,
    description: "Showy striped grandiflora rose with dark red, burgundy, and white splashes; rich fruity perfume."
  },
  {
    code: "S1 YL FL F",
    name: "Sunsprite",
    origin: "Germany",
    color: "Deep Golden Yellow",
    type: "Floribunda",
    fragrant: true,
    description: "Very popular bright yellow floribunda rose with exceptional sweet licorice scent and glossy leaves."
  },
  {
    code: "S2 WH FL",
    name: "Summer Snow",
    origin: "USA",
    color: "Pure Snow White",
    type: "Floribunda",
    fragrant: false,
    description: "Produces thick continuous masses of snow-white flowers in garden beds; completely thornless stems."
  },
  {
    code: "S3 PK FL",
    name: "Sadabahar",
    origin: "India",
    color: "Deep Magenta Pink",
    type: "Floribunda",
    fragrant: false,
    description: "True to its Indian name meaning 'everblooming', flowers almost continuously in intense deep pink sprays."
  },
  {
    code: "S4 PK FL F",
    name: "Soma",
    origin: "India",
    color: "Soft Apricot Pink",
    type: "Floribunda",
    fragrant: true,
    description: "Regional Indian floribunda selection with dense cluster blooms and light pleasant fragrance."
  },
  {
    code: "S5 WH RM F",
    name: "Snow Goose",
    origin: "UK",
    color: "Pure White",
    type: "Rambler",
    fragrant: true,
    description: "English rambling rose producing pompon-like white sprays ideal for archways, pergolas, and pillars."
  },
  {
    code: "S6 OR FL F",
    name: "Scentimental",
    origin: "USA",
    color: "Burgundy & White Striped",
    type: "Floribunda",
    fragrant: true,
    description: "Peppermint-striped floribunda rose with heavy spicy aroma and disease-resistant glossy leaves."
  },
  {
    code: "S7 YL HT F",
    name: "St. Patrick",
    origin: "USA",
    color: "Yellow with Green Hint",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Novelty golden yellow rose with unique greenish outer petal tinge; exceptional heat endurance in sun."
  },
  {
    code: "T1 WH HT F",
    name: "Tushar",
    origin: "India",
    color: "Pure Cream White",
    type: "Hybrid Tea",
    fragrant: true,
    description: "IARI bred Indian variety valued for high petaled cream-white cut blooms and robust plant health."
  },
  {
    code: "T2 OR HT F",
    name: "Tropicana (Super Star)",
    origin: "Germany",
    color: "Fluorescent Coral-Orange",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Famous coral-orange rose with intense fruity fragrance, straight long stems, and vibrant presence."
  },
  {
    code: "T3 BI FL",
    name: "Titli",
    origin: "India",
    color: "Multi-Color Bicolor",
    type: "Floribunda",
    fragrant: false,
    description: "Indian floribunda whose blooms change shade from yellow to orange and pink like a butterfly as they age."
  },
  {
    code: "T4 LV FL F",
    name: "Teri Akash",
    origin: "India",
    color: "Deep Lavender",
    type: "Floribunda",
    fragrant: true,
    description: "Indian floribunda variety with lavender-blue sprays, gentle scent, and compact branching."
  },
  {
    code: "T5 RD HT F",
    name: "Tata Centenary",
    origin: "India",
    color: "Dark Velvet Crimson",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Bred in India to commemorate Tata centenary; large fragrant dark red blooms with high centered shape."
  },
  {
    code: "U1 RD HT F",
    name: "Usha",
    origin: "India",
    color: "Deep Crimson Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Bred in India, strong erect growth with rich fragrant red blossoms; popular for cut flowers and gardens."
  },
  {
    code: "U2 PK HT",
    name: "Ulster Monarch",
    origin: "UK",
    color: "Salmon Pink",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Classic high centered salmon-buff rose known for robust exhibition shape and thick petals."
  },
  {
    code: "V1 BI HT",
    name: "Vichitra",
    origin: "India",
    color: "Striped Red & Yellow",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Unusual Indian hybrid tea variety with distinct crimson and yellow stripes across every bloom."
  },
  {
    code: "V2 OR HT F",
    name: "Valencia",
    origin: "Germany",
    color: "Antique Apricot Yellow",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Massive high centered apricot-yellow flowers with heavy fruity fragrance and rain resistance."
  },
  {
    code: "V3 OR HT",
    name: "Vivasvat",
    origin: "India",
    color: "Fiery Orange",
    type: "Hybrid Tea",
    fragrant: false,
    description: "Indian variety with brilliant orange-scarlet petals that glow in full sun without scorching."
  },
  {
    code: "V4 BI HT F",
    name: "Double Delight (Variegated)",
    origin: "USA",
    color: "Cream & Ruby Red",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Selected clone with prominent red petal margins and high perfume potency under tropical sun."
  },
  {
    code: "W1 OR HT F",
    name: "Whisky Mac",
    origin: "UK",
    color: "Golden Bronze / Amber",
    type: "Hybrid Tea",
    fragrant: true,
    description: "Distinctive golden-amber bronze hybrid tea rose with powerful warm fragrance; classic nursery stock."
  },
  {
    code: "W2 PK FL F",
    name: "William Carey",
    origin: "India",
    color: "Light Pink",
    type: "Floribunda",
    fragrant: true,
    description: "Named after the scholar in Serampore, India; delicate pink floribunda with continuous flowering habit."
  },
  {
    code: "W3 WH SH F",
    name: "Winchester Cathedral",
    origin: "UK",
    color: "Pure White",
    type: "Shrub",
    fragrant: true,
    description: "English shrub rose producing full cupped white blossoms with sweet honey and old-rose fragrance."
  },
  {
    code: "Z1 PK BB F",
    name: "Zephirine Drouhin",
    origin: "France",
    color: "Deep Bright Pink",
    type: "Bourbon",
    fragrant: true,
    description: "Famous thornless Bourbon rose with intense sweet raspberry fragrance and vigorous climbing habit."
  }
];

// Helper to get unique types, colors etc for filters
function getUniqueTypes() {
  return [...new Set(roseVarieties.map(r => r.type))].sort();
}

function getUniqueOrigins() {
  return [...new Set(roseVarieties.map(r => r.origin))].sort();
}

function getRoseByCode(code) {
  return roseVarieties.find(r => r.code === code || r.code.replace(/\s/g, '') === code.replace(/\s/g, ''));
}

function getRoseByName(name) {
  return roseVarieties.find(r => r.name.toLowerCase() === name.toLowerCase());
}
