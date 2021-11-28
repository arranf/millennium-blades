import {
  BronzePromo,
  ExpansionPack,
  GoldPromo,
  MasterPack,
  PremiumPack,
  SilverPromo,
} from "./cards";
import { ExpansionName, PresetOption } from "./models";

const newBeginnings: PresetOption = {
  name: "New Beginnings",
  order: 0,
  description:
    "A beginner set-up. This build doesn’t have many complicated cards and often gives players a good idea of what each set is trying to do. Great for your first or second game, especially with newbies!",
  requiredExpansions: [],
  preset: {
    bronzePromos: [BronzePromo.LEGEND_OF_FINAL_BADASS],
    silverPromos: [SilverPromo.PRINCESS_BLADE],
    goldPromos: [GoldPromo.ELEMENTAL_DRAGON_LORDS],
    expansionPacks: [
      ExpansionPack.RUBBER_DUCKY_MAID_CRUSADERS_R,
      ExpansionPack.FISTS_OF_STEEL,
      ExpansionPack.OBARI_AS_HELL,
      ExpansionPack.ONE_THOUSAND_AND_ONE_NIGHTS,
      ExpansionPack.GNOMANS_LAND,
      ExpansionPack.SUNSET_STRIDERS,
    ],
    premiumPacks: [
      PremiumPack.CARDS_MAGICA,
      PremiumPack.AD_2400,
      PremiumPack.XENO_X_OVER,
      PremiumPack.CLOCKWORK_EMPIRE,
      PremiumPack.LEGEND_OF_TANANANAH,
    ],
    masterPacks: [
      MasterPack.HELL_TO_PAY,
      MasterPack.SYMPHONY_OF_DESTRUCTION,
      MasterPack.FANTASY_FINALE_MCLXVH_2,
      MasterPack.M_N_M,
    ],
    bronzePromoPrize: [BronzePromo.ELEMENTAL_BLADES],
    silverPromoPrize: [SilverPromo.SEALED_VAULTS],
  },
};

const fightMe: PresetOption = {
  name: "Fight Me!",
  order: 1,
  description:
    "Feel like your games don’t have enough PvP? This build aims to fix that! Featuring a large variety of clashing and disruption, you can expect this set-up to be very interactive!",
  requiredExpansions: [],
  preset: {
    bronzePromos: [BronzePromo.ELEMENTAL_BLADES],
    silverPromos: [SilverPromo.PRINCESS_BLADE],
    goldPromos: [GoldPromo.ELEMENTAL_DRAGON_LORDS],
    expansionPacks: [
      ExpansionPack.FISTS_OF_STEEL,
      ExpansionPack.SUNSET_STRIDERS,
      ExpansionPack.SAMURAI_MOWDOWN,
      ExpansionPack.BLACK_FLAGS_BLACK_WATERS,
      ExpansionPack.ANVILICIOUS_ARRANGEMENTS,
      ExpansionPack.SUPER_PLUMBER_BROS,
    ],
    premiumPacks: [
      PremiumPack.CARDS_MAGICA,
      PremiumPack.CLOCKWORK_EMPIRE,
      PremiumPack.MOUSE_CARD,
      PremiumPack.AD_2400,
      PremiumPack.CARDS_FROM_THE_CRYPT,
    ],
    masterPacks: [
      MasterPack.VEX_CARDS_OF_HATE,
      MasterPack.DOUBLE_O_SIX_PLUS_ONE,
      MasterPack.M_N_M,
      MasterPack.MILLENNIUM_MASTERS,
    ],
    bronzePromoPrize: [BronzePromo.LEGEND_OF_FINAL_BADASS],
    silverPromoPrize: [SilverPromo.SEALED_VAULTS],
  },
};

const middleHandManagement: PresetOption = {
  name: "Middle Handle Management",
  order: 2,
  description:
    "Managing your cards is key to any Millennium Blades win. This is even more true with this loadout! Consider your options carefully and make sure to not accidentally discard your key cards!",
  requiredExpansions: [],
  preset: {
    bronzePromos: [BronzePromo.ELEMENTAL_BLADES],
    silverPromos: [SilverPromo.PRINCESS_BLADE],
    goldPromos: [GoldPromo.ELEMENTAL_DRAGON_LORDS],
    expansionPacks: [
      ExpansionPack.BLACK_FLAGS_BLACK_WATERS,
      ExpansionPack.SUPER_PLUMBER_BROS,
      ExpansionPack.OBARI_AS_HELL,
      ExpansionPack.LIGHTNING_BUG,
      ExpansionPack.ANVILICIOUS_ARRANGEMENTS,
      ExpansionPack.SUNSET_STRIDERS,
    ],
    premiumPacks: [
      PremiumPack.LEGEND_OF_TANANANAH,
      PremiumPack.CLOCKWORK_EMPIRE,
      PremiumPack.CARDS_FROM_THE_CRYPT,
      PremiumPack.MOUSE_CARD,
      PremiumPack.CARDS_MAGICA,
    ],
    masterPacks: [
      MasterPack.HELL_TO_PAY,
      MasterPack.DOUBLE_O_SIX_PLUS_ONE,
      MasterPack.VEX_CARDS_OF_HATE,
      MasterPack.M_N_M,
    ],
    bronzePromoPrize: [BronzePromo.LEGEND_OF_FINAL_BADASS],
    silverPromoPrize: [SilverPromo.SEALED_VAULTS],
  },
};

const comboCity: PresetOption = {
  name: "Combo City",
  order: 3,
  description:
    "We love it when a plan comes together! This loadout gives special attention to slow, combo-based decks that tend to have huge payoffs. Play this if you love seeing huge Tournament scores.",
  requiredExpansions: [ExpansionName.COLLUSION],
  preset: {
    bronzePromos: [BronzePromo.LEGEND_OF_FINAL_BADASS],
    silverPromos: [SilverPromo.PRINCESS_BLADE],
    goldPromos: [GoldPromo.ELEMENTAL_DRAGON_LORDS],
    expansionPacks: [
      ExpansionPack.RUBBER_DUCKY_MAID_CRUSADERS_R,
      ExpansionPack.ONE_THOUSAND_AND_ONE_NIGHTS,
      ExpansionPack.SUPER_PLUMBER_BROS,
      ExpansionPack.GNOMANS_LAND,
      ExpansionPack.OBARI_AS_HELL,
      ExpansionPack.GET_SCHOOLED,
    ],
    premiumPacks: [
      PremiumPack.AD_2400,
      PremiumPack.PANDORAS_BOX_OPENED,
      PremiumPack.LEGEND_OF_TANANANAH,
      PremiumPack.SHIN_RUBBER_DUCKY_MAID_CRUSADERS_R,
      PremiumPack.STAR_POWER,
    ],
    masterPacks: [
      MasterPack.MILLENNIUM_MASTERS,
      MasterPack.GALACTIC_CABOOSE,
      MasterPack.FANTASY_FINALE_MCLXVH_2,
      MasterPack.SYMPHONY_OF_DESTRUCTION,
    ],
    bronzePromoPrize: [BronzePromo.FUSION_CHAOS],
    silverPromoPrize: [SilverPromo.DOUBLE_TROUBLE],
  },
};

const strategicMode: PresetOption = {
  name: "Strategic Mode",
  order: 4,
  description:
    "For players who want more strategic depth, this loadout is for you. Position your cards well and reap massive rewards. Support it with some tableau positioning manipulation and you’ve got an interesting game!",
  requiredExpansions: [ExpansionName.COLLUSION],
  preset: {
    bronzePromos: [BronzePromo.FUSION_CHAOS],
    silverPromos: [SilverPromo.BACK_TO_THE_PAST],
    goldPromos: [GoldPromo.EXALTIUS_SHOPPING_LIST],
    expansionPacks: [
      ExpansionPack.OBARI_AS_HELL,
      ExpansionPack.SUPER_PLUMBER_BROS,
      ExpansionPack.GNOMANS_LAND,
      ExpansionPack.SAMURAI_MOWDOWN,
      ExpansionPack.SUPER_ZEROS_THEY_TRY,
      ExpansionPack.SHOULDERS_OF_WAR,
    ],
    premiumPacks: [
      PremiumPack.MOUSE_CARD,
      PremiumPack.PANDORAS_BOX_OPENED,
      PremiumPack.CARDS_MAGICA,
      PremiumPack.AD_2400,
      PremiumPack.FASTER,
    ],
    masterPacks: [
      MasterPack.DOUBLE_O_SIX_PLUS_ONE,
      MasterPack.MILLENNIUM_MASTERS,
      MasterPack.CORE_SET_II,
      MasterPack.MONSTER_GIRLS,
    ],
    bronzePromoPrize: [BronzePromo.WERE_BACK_A_STARTER_DECKS_STORY],
    silverPromoPrize: [SilverPromo.DOUBLE_TROUBLE],
  },
};

const theNameGame: PresetOption = {
  name: "Strategic Mode",
  order: 5,
  description:
    "Are you a card master? Test your card knowledge with this loadout that focuses on effects that let you name and predict cards. Knowledge is power with The Name Game!",
  requiredExpansions: [ExpansionName.COLLUSION],
  preset: {
    bronzePromos: [BronzePromo.WERE_BACK_A_STARTER_DECKS_STORY],
    silverPromos: [SilverPromo.DOUBLE_TROUBLE],
    goldPromos: [GoldPromo.EXALTIUS_SHOPPING_LIST],
    expansionPacks: [
      ExpansionPack.BLACK_FLAGS_BLACK_WATERS,
      ExpansionPack.SUNSET_STRIDERS,
      ExpansionPack.ONE_THOUSAND_AND_ONE_NIGHTS,
      ExpansionPack.BORED_GAMES,
      ExpansionPack.MB_CARDBARD_STREET,
      ExpansionPack.GET_SCHOOLED,
    ],
    premiumPacks: [
      PremiumPack.CLOCKWORK_EMPIRE,
      PremiumPack.CARDS_FROM_THE_CRYPT,
      PremiumPack.CARDS_MAGICA,
      PremiumPack.WSF_WORLD_SELLOUT_FEDERATION,
      PremiumPack.COME_ON_DOWN,
    ],
    masterPacks: [
      MasterPack.VEX_CARDS_OF_HATE,
      MasterPack.SYMPHONY_OF_DESTRUCTION,
      MasterPack.CORE_SET_II,
      MasterPack.OKIE_DOKIE_LITERATURE_CLUB,
    ],
    bronzePromoPrize: [BronzePromo.FUSION_CHAOS],
    silverPromoPrize: [SilverPromo.BACK_TO_THE_PAST],
  },
};

const flipFlops: PresetOption = {
  name: "Flip Flops",
  order: 6,
  description:
    "Flipping cards has never been this much fun! Play your games fast and loose by flipping all sorts of cards with your effects. Whether it’s your own or an enemy’s, you’ll surely have a flippin great time!",
  requiredExpansions: [ExpansionName.COLLUSION],
  preset: {
    bronzePromos: [BronzePromo.BURGLE_BROS],
    silverPromos: [SilverPromo.DOUBLE_TROUBLE],
    goldPromos: [GoldPromo.HOT_CHICKS],
    expansionPacks: [
      ExpansionPack.GNOMANS_LAND,
      ExpansionPack.SUPER_PLUMBER_BROS,
      ExpansionPack.SUNSET_STRIDERS,
      ExpansionPack.ANVILICIOUS_ARRANGEMENTS,
      ExpansionPack.SHOULDERS_OF_WAR,
      ExpansionPack.SUPER_ZEROS_THEY_TRY,
    ],
    premiumPacks: [
      PremiumPack.XENO_X_OVER,
      PremiumPack.UNDERLORDS_OF_METROPOLITAM,
      PremiumPack.AD_2400,
      PremiumPack.WSF_WORLD_SELLOUT_FEDERATION,
      PremiumPack.FASTER,
    ],
    masterPacks: [
      MasterPack.HELL_TO_PAY,
      MasterPack.M_N_M,
      MasterPack.OKIE_DOKIE_LITERATURE_CLUB,
      MasterPack.TOY_TALES,
    ],
    bronzePromoPrize: [BronzePromo.ELEMENTAL_BLADES],
    silverPromoPrize: [SilverPromo.BACK_TO_THE_PAST],
  },
};

// DISABLED BECAUSE DOUBLE TROUBLE IS LISTED TWICE
// const fast4You: PresetOption = {
//   name: "2 Fast 4 You",
//   order: 7,
//   description:
//     "Flipping cards has never been this much fun! Play your games fast and loose by flipping all sorts of cards with your effects. Whether it’s your own or an enemy’s, you’ll surely have a flippin great time!",
//   requiredExpansions: [ExpansionName.COLLUSION, ExpansionName.SET_ROTATION],
//   preset: {
//     bronzePromos: [BronzePromo.FUSION_CHAOS],
//     silverPromos: [SilverPromo.DOUBLE_TROUBLE],
//     goldPromos: [GoldPromo.HOT_CHICKS],
//     expansionPacks: [
//       ExpansionPack.LIGHTNING_BUG,
//       ExpansionPack.ANVILICIOUS_ARRANGEMENTS,
//       ExpansionPack.SUPER_ZEROS_THEY_TRY,
//       ExpansionPack.MB_CARDBARD_STREET,
//       ExpansionPack.FAST,
//       ExpansionPack.QUANTUM_JUMP,
//     ],
//     premiumPacks: [
//       PremiumPack.LEGEND_OF_TANANANAH,
//       PremiumPack.AD_2400,
//       PremiumPack.FASTER,
//       PremiumPack.SHONEN_LEAP,
//       PremiumPack.GAME_OF_RINGS,
//     ],
//     masterPacks: [
//       MasterPack.SYMPHONY_OF_DESTRUCTION,
//       MasterPack.DOUBLE_O_SIX_PLUS_ONE,
//       MasterPack.MONSTER_GIRLS,
//       MasterPack.THE_ULTIMATE_STEEL_COOK,
//     ],
//     bronzePromoPrize: [BronzePromo.WERE_BACK_A_STARTER_DECKS_STORY],
//     silverPromoPrize: [SilverPromo.DOUBLE_TROUBLE],
//   },
// };

const payToWin: PresetOption = {
  name: "Pay To Win!",
  order: 8,
  description:
    "The changes to Collusion give us more room to integrate Money into Tournaments! This loadout is all about spending and gaining resources during the tournament! Cold hard cash awaits.",
  requiredExpansions: [ExpansionName.COLLUSION, ExpansionName.SET_ROTATION],
  preset: {
    bronzePromos: [BronzePromo.LEGEND_OF_FINAL_BADASS],
    silverPromos: [SilverPromo.BACK_TO_THE_PAST],
    goldPromos: [GoldPromo.FATE_OF_INDINES],
    expansionPacks: [
      ExpansionPack.THE_THOUSAND_PIXEL_CABINET,
      ExpansionPack.SHILLS_AND_SHILLS_INC,
      ExpansionPack.GET_SCHOOLED,
      ExpansionPack.SUPER_ZEROS_THEY_TRY,
      ExpansionPack.UUURGH,
      ExpansionPack.OBARI_AS_HELL,
    ],
    premiumPacks: [
      PremiumPack.WSF_WORLD_SELLOUT_FEDERATION,
      PremiumPack.COME_ON_DOWN,
      PremiumPack.DEVELOPMENTAL_ISSUES,
      PremiumPack.LEGEND_OF_TANANANAH,
      PremiumPack.CARDS_MAGICA,
    ],
    masterPacks: [
      MasterPack.CORE_SET_II,
      MasterPack.TOY_TALES,
      MasterPack.PENNY_DREADFUL,
      MasterPack.GALACTIC_CABOOSE,
    ],
    bronzePromoPrize: [BronzePromo.WERE_BACK_A_STARTER_DECKS_STORY],
    silverPromoPrize: [SilverPromo.DOUBLE_TROUBLE],
  },
};

const absolutelyMassiveUnits: PresetOption = {
  name: "Absolutely Massive Units",
  order: 9,
  description:
    "Players who enjoy playing HUGE cards will definitely enjoy this loadout! Whether its buffing your singles or dropping giant 10 Star bombs, feel the rush of playing massive units!",
  requiredExpansions: [ExpansionName.COLLUSION, ExpansionName.SET_ROTATION],
  preset: {
    bronzePromos: [BronzePromo.LEGEND_OF_FINAL_BADASS],
    silverPromos: [SilverPromo.PRINCESS_BLADE],
    goldPromos: [GoldPromo.ARGENT_CANDIDATES],
    expansionPacks: [
      ExpansionPack.ANVILICIOUS_ARRANGEMENTS,
      ExpansionPack.LIGHTNING_BUG,
      ExpansionPack.OBARI_AS_HELL,
      ExpansionPack.MB_CARDBARD_STREET,
      ExpansionPack.SAVED_BY_THE_90S,
      ExpansionPack.QUANTUM_JUMP,
    ],
    premiumPacks: [
      PremiumPack.CLOCKWORK_EMPIRE,
      PremiumPack.CARDS_MAGICA,
      PremiumPack.STAR_POWER,
      PremiumPack.WSF_WORLD_SELLOUT_FEDERATION,
      PremiumPack.DEUS_REX_MACHINA,
    ],
    masterPacks: [
      MasterPack.HELL_TO_PAY,
      MasterPack.MILLENNIUM_MASTERS,
      MasterPack.GALACTIC_CABOOSE,
      MasterPack.ULTIMATE_KAIJU_THROWDOWN,
    ],
    bronzePromoPrize: [BronzePromo.FUSION_CHAOS],
    silverPromoPrize: [SilverPromo.BACK_TO_THE_PAST],
  },
};

const theTrueBeginning: PresetOption = {
  name: "The True Beginning",
  order: 9,
  description:
    "It’s like the beginner loadout, but BETTER. This set-up takes from all expansions, giving you the true legit beginner loadout that shows-off most of the cool stuff in all the games!",
  requiredExpansions: [ExpansionName.COLLUSION, ExpansionName.SET_ROTATION],
  preset: {
    bronzePromos: [BronzePromo.LEGEND_OF_FINAL_BADASS],
    silverPromos: [SilverPromo.PRINCESS_BLADE],
    goldPromos: [GoldPromo.ELEMENTAL_DRAGON_LORDS],
    expansionPacks: [
      ExpansionPack.SAMURAI_MOWDOWN,
      ExpansionPack.RUBBER_DUCKY_MAID_CRUSADERS_R,
      ExpansionPack.SHOULDERS_OF_WAR,
      ExpansionPack.SHILLS_AND_SHILLS_INC,
      ExpansionPack.FAST,
      ExpansionPack.QUANTUM_JUMP,
    ],
    premiumPacks: [
      PremiumPack.CARDS_MAGICA,
      PremiumPack.CLOCKWORK_EMPIRE,
      PremiumPack.LEGEND_OF_TANANANAH,
      PremiumPack.STAR_POWER,
      PremiumPack.SHONEN_LEAP,
    ],
    masterPacks: [
      MasterPack.DOUBLE_O_SIX_PLUS_ONE,
      MasterPack.SYMPHONY_OF_DESTRUCTION,
      MasterPack.OKIE_DOKIE_LITERATURE_CLUB,
      MasterPack.THE_ULTIMATE_STEEL_COOK,
    ],
    bronzePromoPrize: [BronzePromo.WERE_BACK_A_STARTER_DECKS_STORY],
    silverPromoPrize: [SilverPromo.DOUBLE_TROUBLE],
  },
};

const cardClashOn: PresetOption = {
  name: "Card Clash On!",
  order: 10,
  description:
    "Even more player interaction than before! Clash with anyone and see who’s truly the master. This loadout is great if you wanted EVEN MORE conflict during tournaments!",
  requiredExpansions: [ExpansionName.COLLUSION, ExpansionName.SET_ROTATION],
  preset: {
    bronzePromos: [BronzePromo.ELEMENTAL_BLADES],
    silverPromos: [SilverPromo.FATE],
    goldPromos: [GoldPromo.ELEMENTAL_DRAGON_LORDS],
    expansionPacks: [
      ExpansionPack.SAMURAI_MOWDOWN,
      ExpansionPack.RUBBER_DUCKY_MAID_CRUSADERS_R,
      ExpansionPack.SHOULDERS_OF_WAR,
      ExpansionPack.SHILLS_AND_SHILLS_INC,
      ExpansionPack.FAST,
      ExpansionPack.QUANTUM_JUMP,
    ],
    premiumPacks: [
      PremiumPack.CARDS_MAGICA,
      PremiumPack.CLOCKWORK_EMPIRE,
      PremiumPack.LEGEND_OF_TANANANAH,
      PremiumPack.STAR_POWER,
      PremiumPack.SHONEN_LEAP,
    ],
    masterPacks: [
      MasterPack.DOUBLE_O_SIX_PLUS_ONE,
      MasterPack.SYMPHONY_OF_DESTRUCTION,
      MasterPack.OKIE_DOKIE_LITERATURE_CLUB,
      MasterPack.THE_ULTIMATE_STEEL_COOK,
    ],
    bronzePromoPrize: [BronzePromo.LEGEND_OF_FINAL_BADASS],
    silverPromoPrize: [SilverPromo.PRINCESS_BLADE],
  },
};


export const presets: PresetOption[] = [
  newBeginnings,
  fightMe,
  middleHandManagement,
  comboCity,
  strategicMode,
  theNameGame,
  flipFlops,
  payToWin,
  absolutelyMassiveUnits,
  theTrueBeginning
];
