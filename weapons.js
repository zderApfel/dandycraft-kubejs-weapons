// priority: 0

StartupEvents.registry('item', e => {
    //Greatswords
    //Two-handed
    //Slightly slower than swords but increased damage
    e.create("golden_greatsword", 'sword').tier('golden').displayName("Golden Greatsword").attackDamageBaseline(5).speedBaseline(1.4);
    e.create("wooden_greatsword", 'sword').tier('wooden').displayName("Wooden Greatsword").attackDamageBaseline(5).speedBaseline(1.4);
    e.create("stone_greatsword", 'sword').tier('stone').displayName("Stone Greatsword").attackDamageBaseline(6).speedBaseline(1.4);
    e.create("iron_greatsword", 'sword').tier('iron').displayName("Iron Greatsword").attackDamageBaseline(7).speedBaseline(1.4);
    e.create("diamond_greatsword", 'sword').tier('diamond').displayName("Diamond Greatsword").attackDamageBaseline(8).speedBaseline(1.4);
    e.create("netherite_greatsword", 'sword').tier('netherite').displayName("Netherite Greatsword").attackDamageBaseline(9).speedBaseline(1.4);

    //Warhammer
    //Slightly slower than an axe and can mine stone, more damage
    e.create("golden_warhammer", 'pickaxe').tier('golden').displayName("Golden Warhammer").attackDamageBaseline(7.7).speedBaseline(0.91);
    e.create("wooden_warhammer", 'pickaxe').tier('wooden').displayName("Wooden Warhammer").attackDamageBaseline(7.7).speedBaseline(0.73);
    e.create("stone_warhammer", 'pickaxe').tier('stone').displayName("Stone Warhammer").attackDamageBaseline(9.9).speedBaseline(0.73);
    e.create("iron_warhammer", 'pickaxe').tier('iron').displayName("Iron Warhammer").attackDamageBaseline(9.9).speedBaseline(0.82);
    e.create("diamond_warhammer", 'pickaxe').tier('diamond').displayName("Diamond Warhammer").attackDamageBaseline(9.9).speedBaseline(0.91);
    e.create("netherite_warhammer", 'pickaxe').tier('netherite').displayName("Netherite Warhammer").attackDamageBaseline(11).speedBaseline(0.91);

    //Greathammer
    //Two-handed
    //Slower than a warhammer and has more damage
    e.create("golden_greathammer", 'pickaxe').tier('golden').displayName("Golden Greathammer").attackDamageBaseline(9.6);
    e.create("wooden_greathammer", 'pickaxe').tier('wooden').displayName("Wooden Greathammer").attackDamageBaseline(9.6);
    e.create("stone_greathammer", 'pickaxe').tier('stone').displayName("Stone Greathammer").attackDamageBaseline(12.4);
    e.create("iron_greathammer", 'pickaxe').tier('iron').displayName("Iron Greathammer").attackDamageBaseline(12.4);
    e.create("diamond_greathammer", 'pickaxe').tier('diamond').displayName("Diamond Greathammer").attackDamageBaseline(12.4);
    e.create("netherite_greathammer", 'pickaxe').tier('netherite').displayName("Netherite Greathammer").attackDamageBaseline(13.8);

    //Spear
    //Same speed as a sword with slightly less melee damage
    e.create("golden_spear", 'sword').tier('golden').displayName("Golden Spear").attackDamageBaseline(3.8).speedBaseLine(1.6);
    e.create("wooden_spear", 'sword').tier('wooden').displayName("Wooden Spear").attackDamageBaseline(3.8).speedBaseLine(1.6);
    e.create("stone_spear", 'sword').tier('stone').displayName("Stone Spear").attackDamageBaseline(4.8).speedBaseLine(1.6);
    e.create("iron_spear", 'sword').tier('iron').displayName("Iron Spear").attackDamageBaseline(5.71).speedBaseLine(1.6);
    e.create("diamond_spear", 'sword').tier('diamond').displayName("Diamond Spear").attackDamageBaseline(6.7).speedBaseLine(1.6);
    e.create("netherite_spear", 'sword').tier('netherite').displayName("Netherite Spear").attackDamageBaseline(7.6).speedBaseLine(1.6);

    //Pike
    //Slower spear, but faster than a greatsword
    e.create("golden_pike", 'sword').tier('golden').displayName("Golden Pike").attackDamageBaseline(5.7).speedBaseLine(1.5);
    e.create("wooden_pike", 'sword').tier('wooden').displayName("Wooden Pike").attackDamageBaseline(5.7).speedBaseLine(1.5);
    e.create("stone_pike", 'sword').tier('stone').displayName("Stone Pike").attackDamageBaseline(7.2).speedBaseLine(1.5);
    e.create("iron_pike", 'sword').tier('iron').displayName("Iron Pike").attackDamageBaseline(8.6).speedBaseLine(1.5);
    e.create("diamond_pike", 'sword').tier('diamond').displayName("Diamond Pike").attackDamageBaseline(10.1).speedBaseLine(1.5);
    e.create("netherite_pike", 'sword').tier('netherite').displayName("Golden Pike").attackDamageBaseline(11.4).speedBaseLine(1.5);

    //Greataxe
    //Two-handed
    e.create("golden_greataxe", 'axe').tier('golden').displayName("Golden Greataxe").attackDamageBaseline(8);
    e.create("wooden_greataxe", 'axe').tier('wooden').displayName("Wooden Greataxe").attackDamageBaseline(8);
    e.create("stone_greataxe", 'axe').tier('stone').displayName("Stone Greataxe").attackDamageBaseline(11.3);
    e.create("iron_greataxe", 'axe').tier('iron').displayName("Iron Greataxe").attackDamageBaseline(11.3);
    e.create("diamond_greataxe", 'axe').tier('diamond').displayName("Diamond Greataxe").attackDamageBaseline(11.3);
    e.create("netherite_greataxe", 'axe').tier('netherite').displayName("Netherite Greataxe").attackDamageBaseline(12.5);

    //Rapier
    e.create("golden_rapier", 'sword').tier('golden').displayName("Golden Rapier").attackDamageBaseline(3.2);
    e.create("wooden_rapier", 'sword').tier('wooden').displayName("Wooden Rapier").attackDamageBaseline(3.2);
    e.create("stone_rapier", 'sword').tier('stone').displayName("Stone Rapier").attackDamageBaseline(4);
    e.create("iron_rapier", 'sword').tier('iron').displayName("Iron Rapier").attackDamageBaseline(4.8);
    e.create("diamond_rapier", 'sword').tier('diamond').displayName("Diamond Rapier").attackDamageBaseline(5.6);
    e.create("netherite_rapier", 'sword').tier('netherite').displayName("Netherite Rapier").attackDamageBaseline(6.4);

    //Dagger
    e.create("golden_dagger", 'sword').tier('golden').displayName("Golden Dagger").attackDamageBaseline(2.9);
    e.create("wooden_dagger", 'sword').tier('wooden').displayName("Wooden Dagger").attackDamageBaseline(2.9);
    e.create("stone_dagger", 'sword').tier('stone').displayName("Stone Dagger").attackDamageBaseline(3.6);
    e.create("iron_dagger", 'sword').tier('iron').displayName("Iron Dagger").attackDamageBaseline(4.3);
    e.create("diamond_dagger", 'sword').tier('diamond').displayName("Diamond Dagger").attackDamageBaseline(5);
    e.create("netherite_dagger", 'sword').tier('netherite').displayName("Diamond Dagger").attackDamageBaseline(5.7);

    //Kopesh
    // Slightly faster and a sword with a slight damage reduction
    e.create("golden_kopesh", 'sword').tier('golden').displayName("Golden Kopesh").attackDamageBaseline(3.6);
    e.create("wooden_kopesh", 'sword').tier('wooden').displayName("Wooden Kopesh").attackDamageBaseline(3.6);
    e.create("stone_kopesh", 'sword').tier('stone').displayName("Stone Kopesh").attackDamageBaseline(4.5);
    e.create("iron_kopesh", 'sword').tier('iron').displayName("Iron Kopesh").attackDamageBaseline(5.45);
    e.create("diamond_kopesh", 'sword').tier('diamond').displayName("Diamond Kopesh").attackDamageBaseline(6.4);
    e.create("netherite_kopesh", 'sword').tier('netherite').displayName("Netherite Kopesh").attackDamageBaseline(7.3);

})