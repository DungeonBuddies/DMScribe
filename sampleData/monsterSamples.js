const monsterSamples = [{
	"_id": "592f6c32c9e7ce9f72157fcc",
	"name": "Acolyte",
	"armor_class": 10,
	"hit_points": 9,
	"strength": 10,
	"dexterity": 10,
	"constitution": 10,
	"intelligence": 10,
	"wisdom": 14,
	"charisma": 11,
	"init": 2,
	"actions": [
		{
			"damage_dice": "1d4",
			"attack_bonus": 2,
			"desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
			"name": "Club"
		}
	]
}, {
	"_id": "592f6c32c9e7ce9f72157ff2",
	"name": "Basilisk",
	"armor_class": 12,
	"hit_points": 52,
	"strength": 16,
	"dexterity": 8,
	"constitution": 15,
	"intelligence": 2,
	"wisdom": 8,
	"charisma": 7,
	"init": 12,
	"actions": [
		{
			"damage_bonus": 3,
			"damage_dice": "2d6 + 2d6",
			"attack_bonus": 5,
			"desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
			"name": "Bite"
		}
	]
}, {
	"_id": "592f6c32c9e7ce9f72158009",
	"name": "Cave Bear",
	"armor_class": 12,
	"hit_points": 42,
	"strength": 20,
	"dexterity": 10,
	"constitution": 16,
	"intelligence": 2,
	"wisdom": 13,
	"charisma": 7,
	"init": 6,
	"actions": [
		{
			"attack_bonus": 0,
			"desc": "The bear makes two attacks: one with its bite and one with its claws.",
			"name": "Multiattack"
		},
		{
			"damage_bonus": 5,
			"damage_dice": "1d8",
			"attack_bonus": 7,
			"desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
			"name": "Bite"
		},
		{
			"damage_bonus": 5,
			"damage_dice": "2d6",
			"attack_bonus": 7,
			"desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
			"name": "Claws"
		}
	]
}]

export default monsterSamples;
