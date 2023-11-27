// priority: 0

StartupEvents.registry('item', e => {

    const two_hand_durability_bonus = 1.5;

    const greatsword_tooltip = "It's a sword, but great";
    const greatsword_damage_modifier = 1.25;
    const greatsword_speed_modifier = 1;

    const greathammer_damage_modifier = 1.4;
    const greathammer_speed_modifier = 0.8;
    const greathammer_tooltip = "Super heavy but also super powerful; can mine stone"

    const spear_damage_modifier = 1.1;
    const spear_speed_modifier = 1;
    const spear_tooltip = "Same speed as a sword with slightly less damage but more reach"

    const glaive_damage_modifier = 1.4;
    const glaive_speed_modifier = 0.9;
    const glaive_tooltip = "Slower and stronger than a spear";

    const greataxe_damage_modifier = 1.25;
    const greataxe_speed_modifier = 1;
    const greataxe_tooltip = "Heavier, and stronger than a regular axe";

    const katana_damage_modifier = 1;
    const katana_speed_modifier = 1.5;
    const katana_tooltip = "Omae wa, no shindeiru or whatever the weebs say idk"

    const kopesh_damage_modifier = 0.9;
    const kopesh_speed_modifier = 1.15;
    const kopesh_tooltip = "An exotic curved sword"

    const rapier_damage_modifier = 0.8;
    const rapier_speed_modifier = 1.4;
    const rapier_tooltip = "*poke* *poke*";

    const dagger_damage_modifier = 0.5;
    const dagger_speed_modifier = 1.8;
    const dagger_tooltip = "Face it, you won't use this";

    //Greatswords
    //Two-handed
    //Slightly slower than swords but increased damage
    e.create("golden_greatsword", 'sword')
        .displayName("Golden Greatsword")
        
        .tier('gold')
        
        .attackDamageBonus(float_modifier(4, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .texture('weapons:item/greatsword/golden_greatsword')
        .tooltip(greatsword_tooltip);
    
    e.create("wooden_greatsword", 'sword')
        .displayName("Wooden Greatsword")
        
        .tier('wood')
        
        .attackDamageBonus(float_modifier(4, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .texture('weapons:item/greatsword/wooden_greatsword')
        .tooltip(greatsword_tooltip);

    e.create("stone_greatsword", 'sword')
        .displayName("Stone Greatsword")
        
        .tier('stone')
        
        .attackDamageBonus(float_modifier(5, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .texture('weapons:item/greatsword/stone_greatsword')
        .tooltip(greatsword_tooltip);

    e.create("iron_greatsword", 'sword')
        .displayName("Iron Greatsword")
        
        .tier('iron')
        
        .attackDamageBonus(float_modifier(7, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .texture('weapons:item/greatsword/iron_greatsword')
        .tooltip(greatsword_tooltip);

    e.create("diamond_greatsword", 'sword')
        .displayName("Diamond Greatsword")
        
        .tier('diamond')
        
        .attackDamageBonus(float_modifier(8, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .texture('weapons:item/greatsword/diamond_greatsword')
        .tooltip(greatsword_tooltip);

    e.create("netherite_greatsword", 'sword')
        .displayName("Netherite Greatsword")
        
        .tier('netherite')
        
        .attackDamageBonus(float_modifier(9, greatsword_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, greatsword_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .texture('weapons:item/greatsword/netherite_greatsword')
        .tooltip(greatsword_tooltip);

    //Greathammer
    //Two-handed
    //Slower than a warhammer and has more damage
    e.create("golden_greathammer", 'pickaxe')
        
        .tier('gold')
        
        .displayName("Golden Greathammer")
        .attackDamageBonus(float_modifier(7, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .texture('weapons:item/greathammer/golden_greathammer')
        .tooltip(greathammer_tooltip);

    e.create("wooden_greathammer", 'pickaxe')
        
        .tier('wood')
        
        .displayName("Wooden Greathammer")
        .attackDamageBonus(float_modifier(7, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .texture('weapons:item/greathammer/wooden_greathammer')
        .tooltip(greathammer_tooltip);

    e.create("stone_greathammer", 'pickaxe')
        
        .tier('stone')
        
        .displayName("Stone Greathammer")
        .attackDamageBonus(float_modifier(9, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .texture('weapons:item/greathammer/stone_greathammer')
        .tooltip(greathammer_tooltip);

    e.create("iron_greathammer", 'pickaxe')
        
        .tier('iron')
        
        .displayName("Iron Greathammer")
        .attackDamageBonus(float_modifier(9, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(0.9, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .texture('weapons:item/greathammer/iron_greathammer')
        .tooltip(greathammer_tooltip);

    e.create("diamond_greathammer", 'pickaxe')
        
        .tier('diamond')
        
        .displayName("Diamond Greathammer")
        .attackDamageBonus(float_modifier(9, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .texture('weapons:item/greathammer/diamond_greathammer')
        .tooltip(greathammer_tooltip);

    e.create("netherite_greathammer", 'pickaxe')
        
        .tier('netherite')
        
        .displayName("Netherite Greathammer")
        .attackDamageBonus(float_modifier(10, greathammer_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greathammer_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .texture('weapons:item/greathammer/netherite_greathammer')
        .tooltip(greathammer_tooltip);

    //Spear
    //Same speed as a sword with slightly less melee damage
    e.create("golden_spear", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Spear")
        .attackDamageBonus(float_modifier(4, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .texture('weapons:item/spear/golden_spear')
        .tooltip(spear_tooltip);

    e.create("wooden_spear", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Spear")
        .attackDamageBonus(float_modifier(4, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .texture('weapons:item/spear/wooden_spear')
        .tooltip(spear_tooltip);
    
    e.create("stone_spear", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Spear")
        .attackDamageBonus(float_modifier(5, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .texture('weapons:item/spear/stone_spear')
        .tooltip(spear_tooltip);

    e.create("iron_spear", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Spear")
        .attackDamageBonus(float_modifier(6, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .texture('weapons:item/spear/iron_spear')
        .tooltip(spear_tooltip);

    e.create("diamond_spear", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Spear")
        .attackDamageBonus(float_modifier(7, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .texture('weapons:item/spear/diamond_spear')
        .tooltip(spear_tooltip);

    e.create("netherite_spear", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Spear")
        .attackDamageBonus(float_modifier(8, spear_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, spear_speed_modifier)-4)
        .texture('weapons:item/spear/netherite_spear')
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .tooltip(spear_tooltip);

    //Glaive
    //Slower spear, but faster than a greatsword
    e.create("golden_glaive", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Glaive")
        .attackDamageBonus(float_modifier(4,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .texture('weapons:item/glaive/golden_glaive')
        .tooltip(glaive_tooltip);

    e.create("wooden_glaive", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Glaive")
        .attackDamageBonus(float_modifier(4,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .texture('weapons:item/glaive/wooden_glaive')
        .tooltip(glaive_tooltip);

    e.create("stone_glaive", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Glaive")
        .attackDamageBonus(float_modifier(5,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .texture('weapons:item/glaive/stone_glaive')
        .tooltip(glaive_tooltip);


    e.create("iron_glaive", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Glaive")
        .attackDamageBonus(float_modifier(6,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .texture('weapons:item/glaive/iron_glaive')
        .tooltip(glaive_tooltip);


    e.create("diamond_glaive", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Glaive")
        .attackDamageBonus(float_modifier(7,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .texture('weapons:item/glaive/diamond_glaive')
        .tooltip(glaive_tooltip);


    e.create("netherite_glaive", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Glaive")
        .attackDamageBonus(float_modifier(8,glaive_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,glaive_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .texture('weapons:item/glaive/netherite_glaive')
        .tooltip(glaive_tooltip);


    //Greataxe
    //Two-handed
    e.create("golden_greataxe", 'axe')
        
        .tier('gold')
        
        .displayName("Golden Greataxe")
        .attackDamageBonus(float_modifier(7, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .texture('weapons:item/greataxe/golden_greataxe')
        .tooltip(greataxe_tooltip);

    e.create("wooden_greataxe", 'axe')
        
        .tier('wood')
        
        .displayName("Wooden Greataxe")
        .attackDamageBonus(float_modifier(7, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .texture('weapons:item/greataxe/wooden_greataxe')
        .tooltip(greataxe_tooltip);

    e.create("stone_greataxe", 'axe')
        
        .tier('stone')
        
        .displayName("Stone Greataxe")
        .attackDamageBonus(float_modifier(9, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(0.8, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .texture('weapons:item/greataxe/stone_greataxe')
        .tooltip(greataxe_tooltip);

    e.create("iron_greataxe", 'axe')
        
        .tier('iron')
        
        .displayName("Iron Greataxe")
        .attackDamageBonus(float_modifier(9, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(0.9, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .texture('weapons:item/greataxe/iron_greataxe')
        .tooltip(greataxe_tooltip);

    e.create("diamond_greataxe", 'axe')
        
        .tier('diamond')
        
        .displayName("Diamond Greataxe")
        .attackDamageBonus(float_modifier(9, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .texture('weapons:item/greataxe/diamond_greataxe')
        .tooltip(greataxe_tooltip);

    e.create("netherite_greataxe", 'axe')
        
        .tier('netherite')
        
        .displayName("Netherite Greataxe")
        .attackDamageBonus(float_modifier(10, greataxe_damage_modifier)-4)
        .speedBaseline(float_modifier(1, greataxe_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .texture('weapons:item/greataxe/netherite_greataxe')
        .tooltip(greataxe_tooltip);
    //Katana
    e.create("golden_katana", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Katana")
        .attackDamageBonus(float_modifier(4, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(32, two_hand_durability_bonus))
        .texture('weapons:item/katana/golden_katana')
        .tooltip(katana_tooltip);

    e.create("wooden_katana", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Katana")
        .attackDamageBonus(float_modifier(4, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(59, two_hand_durability_bonus))
        .texture('weapons:item/katana/wooden_katana')
        .tooltip(katana_tooltip)

    e.create("stone_katana", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Katana")
        .attackDamageBonus(float_modifier(5, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(131, two_hand_durability_bonus))
        .texture('weapons:item/katana/stone_katana')
        .tooltip(katana_tooltip)

    e.create("iron_katana", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Katana")
        .attackDamageBonus(float_modifier(6, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(250, two_hand_durability_bonus))
        .texture('weapons:item/katana/iron_katana')
        .tooltip(katana_tooltip);

    e.create("diamond_katana", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Katana")
        .attackDamageBonus(float_modifier(7, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(1561, two_hand_durability_bonus))
        .texture('weapons:item/katana/diamond_katana')
        .tooltip(katana_tooltip)

    e.create("netherite_katana", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Katana")
        .attackDamageBonus(float_modifier(8, katana_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, katana_speed_modifier)-4)
        .maxDamage(int_modifier(2031, two_hand_durability_bonus))
        .texture('weapons:item/katana/netherite_katana')
        .tooltip(katana_tooltip);

    //Kopesh
    // Slightly faster and a sword with a slight damage reduction
    e.create("golden_kopesh", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Kopesh")
        .attackDamageBonus(float_modifier(4, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .texture('weapons:item/kopesh/golden_kopesh')
        .tooltip(kopesh_tooltip);

    e.create("wooden_kopesh", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Kopesh")
        .attackDamageBonus(float_modifier(4, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .texture('weapons:item/kopesh/wooden_kopesh')
        .tooltip(kopesh_tooltip)

    e.create("stone_kopesh", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Kopesh")
        .attackDamageBonus(float_modifier(5, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .texture('weapons:item/kopesh/stone_kopesh')
        .tooltip(kopesh_tooltip)

    e.create("iron_kopesh", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Kopesh")
        .attackDamageBonus(float_modifier(6, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .texture('weapons:item/kopesh/iron_kopesh')
        .tooltip(kopesh_tooltip);

    e.create("diamond_kopesh", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Kopesh")
        .attackDamageBonus(float_modifier(7, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .texture('weapons:item/kopesh/diamond_kopesh')
        .tooltip(kopesh_tooltip)

    e.create("netherite_kopesh", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Kopesh")
        .attackDamageBonus(float_modifier(8, kopesh_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, kopesh_speed_modifier)-4)
        .texture('weapons:item/kopesh/netherite_kopesh')
        .tooltip(kopesh_tooltip);

    //Rapier
    e.create("golden_rapier", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Rapier")
        .attackDamageBonus(float_modifier(4, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .texture('weapons:item/rapier/golden_rapier')
        .tooltip(rapier_tooltip);
    
    e.create("wooden_rapier", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Rapier")
        .attackDamageBonus(float_modifier(4, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .texture('weapons:item/rapier/wooden_rapier')
        .tooltip(rapier_tooltip);

    e.create("stone_rapier", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Rapier")
        .attackDamageBonus(float_modifier(5, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .texture('weapons:item/rapier/stone_rapier')
        .tooltip(rapier_tooltip);

    e.create("iron_rapier", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Rapier")
        .attackDamageBonus(float_modifier(6, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .texture('weapons:item/rapier/iron_rapier')
        .tooltip(rapier_tooltip);

    e.create("diamond_rapier", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Rapier")
        .attackDamageBonus(float_modifier(7, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .texture('weapons:item/rapier/diamond_rapier')
        .tooltip(rapier_tooltip);

    e.create("netherite_rapier", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Rapier")
        .attackDamageBonus(float_modifier(8, rapier_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6,rapier_speed_modifier)-4)
        .texture('weapons:item/rapier/netherite_rapier')
        .tooltip(rapier_tooltip);

    //Dagger
    e.create("golden_dagger", 'sword')
        
        .tier('gold')
        
        .displayName("Golden Dagger")
        .attackDamageBonus(float_modifier(4, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .texture('weapons:item/dagger/golden_dagger')
        .tooltip(dagger_tooltip);

    e.create("wooden_dagger", 'sword')
        
        .tier('wood')
        
        .displayName("Wooden Dagger")
        .attackDamageBonus(float_modifier(4, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .texture('weapons:item/dagger/wooden_dagger')
        .tooltip(dagger_tooltip);;

    e.create("stone_dagger", 'sword')
        
        .tier('stone')
        
        .displayName("Stone Dagger")
        .attackDamageBonus(float_modifier(5, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .texture('weapons:item/dagger/stone_dagger')
        .tooltip(dagger_tooltip);

    e.create("iron_dagger", 'sword')
        
        .tier('iron')
        
        .displayName("Iron Dagger")
        .attackDamageBonus(float_modifier(6, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .texture('weapons:item/dagger/iron_dagger')
        .tooltip(dagger_tooltip);

    e.create("diamond_dagger", 'sword')
        
        .tier('diamond')
        
        .displayName("Diamond Dagger")
        .attackDamageBonus(float_modifier(7, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .texture('weapons:item/dagger/diamond_dagger')
        .tooltip(dagger_tooltip);

    e.create("netherite_dagger", 'sword')
        
        .tier('netherite')
        
        .displayName("Netherite Dagger")
        .attackDamageBonus(float_modifier(8, dagger_damage_modifier)-4)
        .speedBaseline(float_modifier(1.6, dagger_speed_modifier)-4)
        .texture('weapons:item/dagger/netherite_dagger')
        .tooltip(dagger_tooltip);

})

var float_modifier = (value, modifier) => {
    return value * modifier
}

var int_modifier = (value, modifier) => {
    return Math.round(value * modifier);
}