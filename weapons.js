// priority: 0

StartupEvents.registry('item', e => {

    const two_hand_durability_bonus = 1.5;

    const greatsword_tooltip = "Slightly slower than regular swords but with increased damage and durability; two-handed";
    const greatsword_damage_modifier = 1.25;
    const greatsword_speed_modifier = 0.9;

    const warhammer_tooltip = "Slightly slower than an axe and can mine stone, more damage"
    const warhammer_damage_modifier = 1.1;
    const warhammer_speed_modifier = 0.9;
    
    const greathammer_damage_modifier = 1.4;
    const greathammer_speed_modifier = 0.8;
    const greathammer_tooltip = "Slower than a warhammer with more damage; two-handed"

    const spear_damage_modifier = 0.95;
    const spear_speed_modifier = 1;
    const spear_tooltip = "Same speed as a sword with slightly less damage"

    const pike_damage_modifier = 1.4;
    const pike_speed_modifier = 0.94;
    const pike_tooltip = "Slower, heavier, and stronger than a spear; two-handed";

    const greataxe_damage_modifier = 1.25;
    const greataxe_speed_modifier = 0.9;
    const greataxe_tooltip = "Slower, heavier, and stronger than a regular axe; two-handed";

    const kopesh_damage_modifier = 0.9;
    const kopesh_speed_modifier = 1.15;
    const kopesh_tooltip = "An exotic curved sword"

    const rapier_damage_modifier = 0.8;
    const rapier_speed_modifier = 1.25;
    const rapier_tooltip = "A fast weapon for the evasive fighter";

    const dagger_damage_modifier = 0.8;
    const dagger_speed_modifier = 1.8;
    const dagger_tooltip = "A dainty and lightweight blade. Dual wield for maximum slashing power";

    //Greatswords
    //Two-handed
    //Slightly slower than swords but increased damage
    e.create("golden_greatsword", 'basic')
        .displayName("Golden Greatsword")
        .tool('sword')
        .tier('gold')
        .group('combat')
        .attackDamageBaseline(float_modifier(4, greatsword_damage_modifier))
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier))
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);
    
    e.create("wooden_greatsword", 'basic')
        .displayName("Wooden Greatsword")
        .tool('sword')
        .tier('wood')
        .group('combat')
        .attackDamageBaseline(float_modifier(4, greatsword_damage_modifier))
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier))
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    e.create("stone_greatsword", 'basic')
        .displayName("Stone Greatsword")
        .tool('sword')
        .tier('stone')
        .group('combat')
        .attackDamageBaseline(float_modifier(5, greatsword_damage_modifier))
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier))
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    e.create("iron_greatsword", 'basic')
        .displayName("Iron Greatsword")
        .tool('sword')
        .tier('iron')
        .group('combat')
        .attackDamageBaseline(float_modifier(7, greatsword_damage_modifier))
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier))
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    e.create("diamond_greatsword", 'basic')
        .displayName("Diamond Greatsword")
        .tool('sword')
        .tier('diamond')
        .group('combat')
        .attackDamageBaseline(float_modifier(8, greatsword_damage_modifier))
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier))
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    e.create("netherite_greatsword", 'basic')
        .displayName("Netherite Greatsword")
        .tool('sword')
        .tier('netherite')
        .group('combat')
        .attackDamageBaseline(float_modifier(9, greatsword_damage_modifier))
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier))
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    //Warhammer
    //Slightly slower than an axe and can mine stone, more damage
    e.create("golden_warhammer", 'basic')
        .tool('pickaxe')
        .tier('gold')
        .group('combat')
        .displayName("Golden Warhammer")
        .attackDamageBaseline(float_modifier(7, warhammer_damage_modifier))
        .speedBaseline(float_modifier(1, warhammer_speed_modifier))
        .tooltip(warhammer_tooltip);
    
    e.create("wooden_warhammer", 'basic')
        .tool('pickaxe')
        .tier('wood')
        .group('combat')
        .displayName("Wooden Warhammer")
        .attackDamageBaseline(float_modifier(7, warhammer_damage_modifier))
        .speedBaseline(float_modifier(0.8, warhammer_speed_modifier))
        .tooltip(warhammer_tooltip);

    e.create("stone_warhammer", 'basic')
        .tool('pickaxe')
        .tier('stone')
        .group('combat')
        .displayName("Stone Warhammer")
        .attackDamageBaseline(float_modifier(9, warhammer_damage_modifier))
        .speedBaseline(float_modifier(0.8, warhammer_speed_modifier))
        .tooltip(warhammer_tooltip);

    e.create("iron_warhammer", 'basic')
        .tool('pickaxe')
        .tier('iron')
        .group('combat')
        .displayName("Iron Warhammer")
        .attackDamageBaseline(float_modifier(9, warhammer_damage_modifier))
        .speedBaseline(float_modifier(0.9, warhammer_speed_modifier))
        .tooltip(warhammer_tooltip);

    e.create("diamond_warhammer", 'basic')
        .tool('pickaxe')
        .tier('diamond')
        .group('combat')
        .displayName("Diamond Warhammer")
        .attackDamageBaseline(float_modifier(9, warhammer_damage_modifier))
        .speedBaseline(float_modifier(1, warhammer_speed_modifier))
        .tooltip(warhammer_tooltip);

    e.create("netherite_warhammer", 'basic')
        .tool('pickaxe')
        .tier('netherite')
        .group('combat')
        .displayName("Netherite Warhammer")
        .attackDamageBaseline(float_modifier(10, warhammer_damage_modifier))
        .speedBaseline(float_modifier(1, warhammer_speed_modifier))
        .tooltip(warhammer_tooltip);

    //Greathammer
    //Two-handed
    //Slower than a warhammer and has more damage
    e.create("golden_greathammer", 'basic')
        .tool('pickaxe')
        .tier('gold')
        .group('combat')
        .displayName("Golden Greathammer")
        .attackDamageBaseline(float_modifier(7, greathammer_damage_modifier))
        .speedBaseline(float_modifier(1, greathammer_speed_modifier))
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("wooden_greathammer", 'basic')
        .tool('pickaxe')
        .tier('wood')
        .group('combat')
        .displayName("Wooden Greathammer")
        .attackDamageBaseline(float_modifier(7, greathammer_damage_modifier))
        .speedBaseline(float_modifier(0.8, greathammer_speed_modifier))
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("stone_greathammer", 'basic')
        .tool('pickaxe')
        .tier('stone')
        .group('combat')
        .displayName("Stone Greathammer")
        .attackDamageBaseline(float_modifier(9, greathammer_damage_modifier))
        .speedBaseline(float_modifier(0.8, greathammer_speed_modifier))
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("iron_greathammer", 'basic')
        .tool('pickaxe')
        .tier('iron')
        .group('combat')
        .displayName("Iron Greathammer")
        .attackDamageBaseline(float_modifier(9, greathammer_damage_modifier))
        .speedBaseline(float_modifier(0.9, greathammer_speed_modifier))
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("diamond_greathammer", 'basic')
        .tool('pickaxe')
        .tier('diamond')
        .group('combat')
        .displayName("Diamond Greathammer")
        .attackDamageBaseline(float_modifier(9, greathammer_damage_modifier))
        .speedBaseline(float_modifier(1, greathammer_speed_modifier))
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("netherite_greathammer", 'basic')
        .tool('pickaxe')
        .tier('netherite')
        .group('combat')
        .displayName("Netherite Greathammer")
        .attackDamageBaseline(float_modifier(10, greathammer_damage_modifier))
        .speedBaseline(float_modifier(1, greathammer_speed_modifier))
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    //Spear
    //Same speed as a sword with slightly less melee damage
    e.create("golden_spear", 'basic')
        .tool('sword')
        .tier('gold')
        .group('combat')
        .displayName("Golden Spear")
        .attackDamageBaseline(float_modifier(4, spear_damage_modifier))
        .speedBaseLine(float_modifier(1.6, spear_speed_modifier))
        .tooltip(spear_tooltip);

    e.create("wooden_spear", 'basic')
        .tool('sword')
        .tier('wood')
        .group('combat')
        .displayName("Wooden Spear")
        .attackDamageBaseline(float_modifier(4, spear_damage_modifier))
        .speedBaseLine(float_modifier(1.6, spear_speed_modifier))
        .tooltip(spear_tooltip);
    
    e.create("stone_spear", 'basic')
        .tool('sword')
        .tier('stone')
        .group('combat')
        .displayName("Stone Spear")
        .attackDamageBaseline(float_modifier(5, spear_damage_modifier))
        .speedBaseLine(float_modifier(1.6, spear_speed_modifier))
        .tooltip(spear_tooltip);

    e.create("iron_spear", 'basic')
        .tool('sword')
        .tier('iron')
        .group('combat')
        .displayName("Iron Spear")
        .attackDamageBaseline(float_modifier(6, spear_damage_modifier))
        .speedBaseLine(float_modifier(1.6, spear_speed_modifier))
        .tooltip(spear_tooltip);

    e.create("diamond_spear", 'basic')
        .tool('sword')
        .tier('diamond')
        .group('combat')
        .displayName("Diamond Spear")
        .attackDamageBaseline(float_modifier(7, spear_damage_modifier))
        .speedBaseLine(float_modifier(1.6, spear_speed_modifier))
        .tooltip(spear_tooltip);

    e.create("netherite_spear", 'basic')
        .tool('sword')
        .tier('netherite')
        .group('combat')
        .displayName("Netherite Spear")
        .attackDamageBaseline(float_modifier(8, spear_damage_modifier))
        .speedBaseLine(float_modifier(1.6, spear_speed_modifier))
        .tooltip(spear_tooltip);

    //Pike
    //Slower spear, but faster than a greatsword
    e.create("golden_pike", 'basic')
        .tool('sword')
        .tier('gold')
        .group('combat')
        .displayName("Golden Pike")
        .attackDamageBaseline(float_modifier(4,pike_damage_modifier))
        .speedBaseLine(float_modifier(1.6,pike_speed_modifier))
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(pike_tooltip);

    e.create("wooden_pike", 'basic')
        .tool('sword')
        .tier('wood')
        .group('combat')
        .displayName("Wooden Pike")
        .attackDamageBaseline(float_modifier(4,pike_damage_modifier))
        .speedBaseLine(float_modifier(1.6,pike_speed_modifier))
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(pike_tooltip);

    e.create("stone_pike", 'basic')
        .tool('sword')
        .tier('stone')
        .group('combat')
        .displayName("Stone Pike")
        .attackDamageBaseline(float_modifier(5,pike_damage_modifier))
        .speedBaseLine(float_modifier(1.6,pike_speed_modifier))
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(pike_tooltip);


    e.create("iron_pike", 'basic')
        .tool('sword')
        .tier('iron')
        .group('combat')
        .displayName("Iron Pike")
        .attackDamageBaseline(float_modifier(6,pike_damage_modifier))
        .speedBaseLine(float_modifier(1.6,pike_speed_modifier))
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(pike_tooltip);


    e.create("diamond_pike", 'basic')
        .tool('sword')
        .tier('diamond')
        .group('combat')
        .displayName("Diamond Pike")
        .attackDamageBaseline(float_modifier(7,pike_damage_modifier))
        .speedBaseLine(float_modifier(1.6,pike_speed_modifier))
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(pike_tooltip);


    e.create("netherite_pike", 'basic')
        .tool('sword')
        .tier('netherite')
        .group('combat')
        .displayName("Golden Pike")
        .attackDamageBaseline(float_modifier(8,pike_damage_modifier))
        .speedBaseLine(float_modifier(1.6,pike_speed_modifier))
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(pike_tooltip);


    //Greataxe
    //Two-handed
    e.create("golden_greataxe", 'basic')
        .tool('axe')
        .tier('gold')
        .group('combat')
        .displayName("Golden Greataxe")
        .attackDamageBaseline(float_modifier(7, greataxe_damage_modifier))
        .speedBaseLine(float_modifier(1, greataxe_speed_modifier))
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("wooden_greataxe", 'basic')
        .tool('axe')
        .tier('wood')
        .group('combat')
        .displayName("Wooden Greataxe")
        .attackDamageBaseline(float_modifier(7, greataxe_damage_modifier))
        .speedBaseLine(float_modifier(0.8, greataxe_speed_modifier))
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("stone_greataxe", 'basic')
        .tool('axe')
        .tier('stone')
        .group('combat')
        .displayName("Stone Greataxe")
        .attackDamageBaseline(float_modifier(9, greataxe_damage_modifier))
        .speedBaseLine(float_modifier(0.8, greataxe_speed_modifier))
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("iron_greataxe", 'basic')
        .tool('axe')
        .tier('iron')
        .group('combat')
        .displayName("Iron Greataxe")
        .attackDamageBaseline(float_modifier(9, greataxe_damage_modifier))
        .speedBaseLine(float_modifier(0.9, greataxe_speed_modifier))
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("diamond_greataxe", 'basic')
        .tool('axe')
        .tier('diamond')
        .group('combat')
        .displayName("Diamond Greataxe")
        .attackDamageBaseline(float_modifier(9, greataxe_damage_modifier))
        .speedBaseLine(float_modifier(1, greataxe_speed_modifier))
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("netherite_greataxe", 'basic')
        .tool('axe')
        .tier('netherite')
        .group('combat')
        .displayName("Netherite Greataxe")
        .attackDamageBaseline(float_modifier(10, greataxe_damage_modifier))
        .speedBaseLine(float_modifier(1, greataxe_speed_modifier))
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    //Kopesh
    // Slightly faster and a sword with a slight damage reduction
    e.create("golden_kopesh", 'basic')
        .tool('sword')
        .tier('gold')
        .group('combat')
        .displayName("Golden Kopesh")
        .attackDamageBaseline(float_modifier(4, kopesh_damage_modifier))
        .speedBaseLine(1.8)
        .tooltip(kopesh_tooltip);

    e.create("wooden_kopesh", 'basic')
        .tool('sword')
        .tier('wood')
        .group('combat')
        .displayName("Wooden Kopesh")
        .attackDamageBaseline(float_modifier(4, kopesh_damage_modifier))
        .speedBaseLine(float_modifier(1.6, kopesh_speed_modifier))
        .tooltip(kopesh_tooltip)

    e.create("stone_kopesh", 'basic')
        .tool('sword')
        .tier('stone')
        .group('combat')
        .displayName("Stone Kopesh")
        .attackDamageBaseline(float_modifier(5, kopesh_damage_modifier))
        .speedBaseLine(float_modifier(1.6, kopesh_speed_modifier))
        .tooltip(kopesh_tooltip)

    e.create("iron_kopesh", 'basic')
        .tool('sword')
        .tier('iron')
        .group('combat')
        .displayName("Iron Kopesh")
        .attackDamageBaseline(float_modifier(6, kopesh_damage_modifier))
        .speedBaseLine(float_modifier(1.6, kopesh_speed_modifier))
        .tooltip(kopesh_tooltip);

    e.create("diamond_kopesh", 'basic')
        .tool('sword')
        .tier('diamond')
        .group('combat')
        .displayName("Diamond Kopesh")
        .attackDamageBaseline(float_modifier(7, kopesh_damage_modifier))
        .speedBaseLine(float_modifier(1.6, kopesh_speed_modifier))
        .tooltip(kopesh_tooltip)

    e.create("netherite_kopesh", 'basic')
        .tool('sword')
        .tier('netherite')
        .group('combat')
        .displayName("Netherite Kopesh")
        .attackDamageBaseline(float_modifier(8, kopesh_damage_modifier))
        .speedBaseLine(float_modifier(1.6, kopesh_speed_modifier))
        .tooltip(kopesh_tooltip);

    //Rapier
    e.create("golden_rapier", 'basic')
        .tool('sword')
        .tier('gold')
        .group('combat')
        .displayName("Golden Rapier")
        .attackDamageBaseline(float_modifier(4, rapier_damage_modifier))
        .speedBaseLine(float_modifier(1.6,rapier_speed_modifier))
        .tooltip(rapier_tooltip);
    
    e.create("wooden_rapier", 'basic')
        .tool('sword')
        .tier('wood')
        .group('combat')
        .displayName("Wooden Rapier")
        .attackDamageBaseline(float_modifier(4, rapier_damage_modifier))
        .speedBaseLine(float_modifier(1.6,rapier_speed_modifier))
        .tooltip(rapier_tooltip);

    e.create("stone_rapier", 'basic')
        .tool('sword')
        .tier('stone')
        .group('combat')
        .displayName("Stone Rapier")
        .attackDamageBaseline(float_modifier(5, rapier_damage_modifier))
        .speedBaseLine(float_modifier(1.6,rapier_speed_modifier))
        .tooltip(rapier_tooltip);

    e.create("iron_rapier", 'basic')
        .tool('sword')
        .tier('iron')
        .group('combat')
        .displayName("Iron Rapier")
        .attackDamageBaseline(float_modifier(6, rapier_damage_modifier))
        .speedBaseLine(float_modifier(1.6,rapier_speed_modifier))
        .tooltip(rapier_tooltip);

    e.create("diamond_rapier", 'basic')
        .tool('sword')
        .tier('diamond')
        .group('combat')
        .displayName("Diamond Rapier")
        .attackDamageBaseline(float_modifier(7, rapier_damage_modifier))
        .speedBaseLine(float_modifier(1.6,rapier_speed_modifier))
        .tooltip(rapier_tooltip);

    e.create("netherite_rapier", 'basic')
        .tool('sword')
        .tier('netherite')
        .group('combat')
        .displayName("Netherite Rapier")
        .attackDamageBaseline(float_modifier(8, rapier_damage_modifier))
        .speedBaseLine(float_modifier(1.6,rapier_speed_modifier))
        .tooltip(rapier_tooltip);

    //Dagger
    e.create("golden_dagger", 'basic')
        .tool('sword')
        .tier('gold')
        .group('combat')
        .displayName("Golden Dagger")
        .attackDamageBaseline(float_modifier(4, dagger_damage_modifier))
        .speedBaseLine(float_modifier(1.6, dagger_speed_modifier))
        .tooltip(dagger_tooltip);

    e.create("wooden_dagger", 'basic')
        .tool('sword')
        .tier('wood')
        .group('combat')
        .displayName("Wooden Dagger")
        .attackDamageBaseline(float_modifier(4, dagger_damage_modifier))
        .speedBaseLine(float_modifier(1.6, dagger_speed_modifier))
        .tooltip(dagger_tooltip);;

    e.create("stone_dagger", 'basic')
        .tool('sword')
        .tier('stone')
        .group('combat')
        .displayName("Stone Dagger")
        .attackDamageBaseline(float_modifier(5, dagger_damage_modifier))
        .speedBaseLine(float_modifier(1.6, dagger_speed_modifier))
        .tooltip(dagger_tooltip);

    e.create("iron_dagger", 'basic')
        .tool('sword')
        .tier('iron')
        .group('combat')
        .displayName("Iron Dagger")
        .attackDamageBaseline(float_modifier(6, dagger_damage_modifier))
        .speedBaseLine(float_modifier(1.6, dagger_speed_modifier))
        .tooltip(dagger_tooltip);

    e.create("diamond_dagger", 'basic')
        .tool('sword')
        .tier('diamond')
        .group('combat')
        .displayName("Diamond Dagger")
        .attackDamageBaseline(float_modifier(7, dagger_damage_modifier))
        .speedBaseLine(float_modifier(1.6, dagger_speed_modifier))
        .tooltip(dagger_tooltip);

    e.create("netherite_dagger", 'basic')
        .tool('sword')
        .tier('netherite')
        .group('combat')
        .displayName("Netherite Dagger")
        .attackDamageBaseline(float_modifier(8, dagger_damage_modifier))
        .speedBaseLine(float_modifier(1.6, dagger_speed_modifier))
        .tooltip(dagger_tooltip);

})

var float_modifier = (value, modifier) => {
    return parseFloat((value * modifier).toFixed(1))
}

var int_modifier = (value, modifier) => {
    return Math.round(value * modifier);
}