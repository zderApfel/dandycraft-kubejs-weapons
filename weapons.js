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

    const glaive_damage_modifier = 1.4;
    const glaive_speed_modifier = 0.94;
    const glaive_tooltip = "Slower, heavier, and stronger than a spear; two-handed";

    const greataxe_damage_modifier = 1.25;
    const greataxe_speed_modifier = 0.9;
    const greataxe_tooltip = "Slower, heavier, and stronger than a regular axe; two-handed";

    const katana_damage_modifier = 1;
    const katana_speed_modifier = 1.5;
    const katana_tooltip = "Omae wa, no shindeiru or whatever the weebs say idk"

    const kopesh_damage_modifier = 0.9;
    const kopesh_speed_modifier = 1.15;
    const kopesh_tooltip = "An exotic curved sword"

    const rapier_damage_modifier = 0.8;
    const rapier_speed_modifier = 1.25;
    const rapier_tooltip = "A fast weapon for the evasive fighter";

    const dagger_damage_modifier = 0.5;
    const dagger_speed_modifier = 1.8;
    const dagger_tooltip = "A dainty and lightweight blade. Dual wield for maximum slashing power";

    //Greatswords
    //Two-handed
    //Slightly slower than swords but increased damage
    e.create("golden_greatsword", 'sword')
        .displayName("Golden Greatsword")
        
        .tier('gold')
        
        .attackDamageBonus(float_modifier(4, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);
    
    e.create("wooden_greatsword", 'sword')
        .displayName("Wooden Greatsword")
        
        .tier('wood')
        
        .attackDamageBonus(float_modifier(4, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    e.create("stone_greatsword", 'sword')
        .displayName("Stone Greatsword")
        
        .tier('stone')
        
        .attackDamageBonus(float_modifier(5, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    e.create("iron_greatsword", 'sword')
        .displayName("Iron Greatsword")
        
        .tier('iron')
        
        .attackDamageBonus(float_modifier(7, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    e.create("diamond_greatsword", 'sword')
        .displayName("Diamond Greatsword")
        
        .tier('diamond')
        
        .attackDamageBonus(float_modifier(8, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    e.create("netherite_greatsword", 'sword')
        .displayName("Netherite Greatsword")
        
        .tier('netherite')
        
        .attackDamageBonus(float_modifier(9, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(greatsword_tooltip);

    //Warhammer
    //Slightly slower than an axe and can mine stone, more damage
    e.create("golden_warhammer", 'pickaxe')
        .tier('gold')        
        .displayName("Golden Warhammer")
        .attackDamageBonus(float_modifier(7, warhammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, warhammer_speed_modifier)-4)
        .tooltip(warhammer_tooltip);
    
    e.create("wooden_warhammer", 'pickaxe')
        
        .tier('wood')
        
        .displayName("Wooden Warhammer")
        .attackDamageBonus(float_modifier(7, warhammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, warhammer_speed_modifier)-4)
        .tooltip(warhammer_tooltip);

    e.create("stone_warhammer", 'pickaxe')
        
        .tier('stone')
        
        .displayName("Stone Warhammer")
        .attackDamageBonus(float_modifier(9, warhammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, warhammer_speed_modifier)-4)
        .tooltip(warhammer_tooltip);

    e.create("iron_warhammer", 'pickaxe')
        
        .tier('iron')
        
        .displayName("Iron Warhammer")
        .attackDamageBonus(float_modifier(9, warhammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.9, warhammer_speed_modifier)-4)
        .tooltip(warhammer_tooltip);

    e.create("diamond_warhammer", 'pickaxe')
        
        .tier('diamond')
        
        .displayName("Diamond Warhammer")
        .attackDamageBonus(float_modifier(9, warhammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, warhammer_speed_modifier)-4)
        .tooltip(warhammer_tooltip);

    e.create("netherite_warhammer", 'pickaxe')
        
        .tier('netherite')
        
        .displayName("Netherite Warhammer")
        .attackDamageBonus(float_modifier(10, warhammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, warhammer_speed_modifier)-4)
        .tooltip(warhammer_tooltip);

    //Greathammer
    //Two-handed
    //Slower than a warhammer and has more damage
    e.create("golden_greathammer", 'pickaxe')
        
        .tier('gold')
        
        .displayName("Golden Greathammer")
        .attackDamageBonus(float_modifier(7, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("wooden_greathammer", 'pickaxe')
        
        .tier('wood')
        
        .displayName("Wooden Greathammer")
        .attackDamageBonus(float_modifier(7, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("stone_greathammer", 'pickaxe')
        
        .tier('stone')
        
        .displayName("Stone Greathammer")
        .attackDamageBonus(float_modifier(9, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("iron_greathammer", 'pickaxe')
        
        .tier('iron')
        
        .displayName("Iron Greathammer")
        .attackDamageBonus(float_modifier(9, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.9, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("diamond_greathammer", 'pickaxe')
        
        .tier('diamond')
        
        .displayName("Diamond Greathammer")
        .attackDamageBonus(float_modifier(9, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    e.create("netherite_greathammer", 'pickaxe')
        
        .tier('netherite')
        
        .displayName("Netherite Greathammer")
        .attackDamageBonus(float_modifier(10, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(greathammer_tooltip);

    //Spear
    //Same speed as a sword with slightly less melee damage
    e.create("golden_spear", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Spear")
        .attackDamageBonus(float_modifier(4, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .tooltip(spear_tooltip);

    e.create("wooden_spear", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Spear")
        .attackDamageBonus(float_modifier(4, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .tooltip(spear_tooltip);
    
    e.create("stone_spear", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Spear")
        .attackDamageBonus(float_modifier(5, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .tooltip(spear_tooltip);

    e.create("iron_spear", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Spear")
        .attackDamageBonus(float_modifier(6, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .tooltip(spear_tooltip);

    e.create("diamond_spear", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Spear")
        .attackDamageBonus(float_modifier(7, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .tooltip(spear_tooltip);

    e.create("netherite_spear", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Spear")
        .attackDamageBonus(float_modifier(8, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .tooltip(spear_tooltip);

    //Glaive
    //Slower spear, but faster than a greatsword
    e.create("golden_glaive", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Glaive")
        .attackDamageBonus(float_modifier(4,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(glaive_tooltip);

    e.create("wooden_glaive", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Glaive")
        .attackDamageBonus(float_modifier(4,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(glaive_tooltip);

    e.create("stone_glaive", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Glaive")
        .attackDamageBonus(float_modifier(5,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(glaive_tooltip);


    e.create("iron_glaive", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Glaive")
        .attackDamageBonus(float_modifier(6,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(glaive_tooltip);


    e.create("diamond_glaive", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Glaive")
        .attackDamageBonus(float_modifier(7,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(glaive_tooltip);


    e.create("netherite_glaive", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Glaive")
        .attackDamageBonus(float_modifier(8,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(glaive_tooltip);


    //Greataxe
    //Two-handed
    e.create("golden_greataxe", 'axe')
        
        .tier('gold')
        
        .displayName("Golden Greataxe")
        .attackDamageBonus(float_modifier(7, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("wooden_greataxe", 'axe')
        
        .tier('wood')
        
        .displayName("Wooden Greataxe")
        .attackDamageBonus(float_modifier(7, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("stone_greataxe", 'axe')
        
        .tier('stone')
        
        .displayName("Stone Greataxe")
        .attackDamageBonus(float_modifier(9, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("iron_greataxe", 'axe')
        
        .tier('iron')
        
        .displayName("Iron Greataxe")
        .attackDamageBonus(float_modifier(9, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(0.9, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("diamond_greataxe", 'axe')
        
        .tier('diamond')
        
        .displayName("Diamond Greataxe")
        .attackDamageBonus(float_modifier(9, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);

    e.create("netherite_greataxe", 'axe')
        
        .tier('netherite')
        
        .displayName("Netherite Greataxe")
        .attackDamageBonus(float_modifier(10, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(greataxe_tooltip);
    //Katana
    e.create("golden_katana", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Katana")
        .attackDamageBonus(float_modifier(4, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .tooltip(katana_tooltip);

    e.create("wooden_katana", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Katana")
        .attackDamageBonus(float_modifier(4, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .tooltip(katana_tooltip)

    e.create("stone_katana", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Katana")
        .attackDamageBonus(float_modifier(5, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .tooltip(katana_tooltip)

    e.create("iron_katana", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Katana")
        .attackDamageBonus(float_modifier(6, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .tooltip(katana_tooltip);

    e.create("diamond_katana", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Katana")
        .attackDamageBonus(float_modifier(7, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .tooltip(katana_tooltip)

    e.create("netherite_katana", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Katana")
        .attackDamageBonus(float_modifier(8, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(katana_tooltip);

    //Kopesh
    // Slightly faster and a sword with a slight damage reduction
    e.create("golden_kopesh", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Kopesh")
        .attackDamageBonus(float_modifier(4, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .tooltip(kopesh_tooltip);

    e.create("wooden_kopesh", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Kopesh")
        .attackDamageBonus(float_modifier(4, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .tooltip(kopesh_tooltip)

    e.create("stone_kopesh", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Kopesh")
        .attackDamageBonus(float_modifier(5, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .tooltip(kopesh_tooltip)

    e.create("iron_kopesh", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Kopesh")
        .attackDamageBonus(float_modifier(6, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .tooltip(kopesh_tooltip);

    e.create("diamond_kopesh", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Kopesh")
        .attackDamageBonus(float_modifier(7, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .tooltip(kopesh_tooltip)

    e.create("netherite_kopesh", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Kopesh")
        .attackDamageBonus(float_modifier(8, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .tooltip(kopesh_tooltip);

    //Rapier
    e.create("golden_rapier", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Rapier")
        .attackDamageBonus(float_modifier(4, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .tooltip(rapier_tooltip);
    
    e.create("wooden_rapier", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Rapier")
        .attackDamageBonus(float_modifier(4, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .tooltip(rapier_tooltip);

    e.create("stone_rapier", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Rapier")
        .attackDamageBonus(float_modifier(5, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .tooltip(rapier_tooltip);

    e.create("iron_rapier", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Rapier")
        .attackDamageBonus(float_modifier(6, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .tooltip(rapier_tooltip);

    e.create("diamond_rapier", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Rapier")
        .attackDamageBonus(float_modifier(7, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .tooltip(rapier_tooltip);

    e.create("netherite_rapier", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Rapier")
        .attackDamageBonus(float_modifier(8, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .tooltip(rapier_tooltip);

    //Dagger
    e.create("golden_dagger", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Dagger")
        .attackDamageBonus(float_modifier(4, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .tooltip(dagger_tooltip);

    e.create("wooden_dagger", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Dagger")
        .attackDamageBonus(float_modifier(4, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .tooltip(dagger_tooltip);;

    e.create("stone_dagger", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Dagger")
        .attackDamageBonus(float_modifier(5, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .tooltip(dagger_tooltip);

    e.create("iron_dagger", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Dagger")
        .attackDamageBonus(float_modifier(6, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .tooltip(dagger_tooltip);

    e.create("diamond_dagger", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Dagger")
        .attackDamageBonus(float_modifier(7, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .tooltip(dagger_tooltip);

    e.create("netherite_dagger", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Dagger")
        .attackDamageBonus(float_modifier(8, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .tooltip(dagger_tooltip);

})

var float_modifier = (value, modifier) => {
    return value * modifier
}

var int_modifier = (value, modifier) => {
    return Math.round(value * modifier);
}