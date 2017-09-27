var testLevel ={"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,2,1,2,1,2,2,0],[0,1,8,8,8,8,1,0],[0,2,1,4,2,1,3,0],[0,8,8,8,8,8,8,0],[0,8,8,8,8,8,8,0],[0,2,1,4,4,3,4,0],[0,3,8,8,8,8,3,0],[0,2,1,4,1,5,5,0]],"chip_types":[1,2,3,5,4],"moves":25,"chip_goal_count":5,"chip_goal_bonus":"BONUS_CROSS","goal_type":"GOAL_BONUS","chip_goal":1};
//{"form":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,0,0,0,0,0,0,0],[0, 3, 4, 5, 1, 2, 3,0 ],[0, 1, 5, 3, 4, 3, 4,0 ],[0, 3, 2, 1, 1, 5, 5,0 ],[0, 5, 1, 2, 3, 2, 1,0 ],[0, 2, 3, 4, 2, 1, 2,0 ],[0, 4, 5, 1, 5, 3, 4,0 ],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6,7],"moves":15,"chip_goal_count":3500,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};
	
	// form:
	// [
		// [1, 1, 1, 1, 1, 1, 1, 1],
		// [1, 1, 1, 1, 1, 1, 1, 1],
		// [1, 1, 1, 1, 1, 1, 1, 1],
		// [1, 1, 1, 1, 1, 1, 1, 1],
		// [1, 1, 1, 1, 1, 1, 1, 1],
		// [1, 1, 1, 1, 1, 1, 1, 1],
		// [1, 1, 1, 1, 1, 1, 1, 1],
		// [0, 0, 0, 0, 0, 0, 0, 0]
	// ],
	// dirt: null,
	// chips:
	// [
		// [8, 5, 3, 2, 1, 2, 5, 8],
		// [8, 1, 2, 1, 2, 1, 4, 8],
		// [8, 3, 1, 5, 1, 5, 1, 8],
		// [8, 1, 2, 3, 3, 2, 4, 8],
		// [8, 2, 3, 5, 1, 4, 1, 8],
		// [8, 2, 5, 3, 5, 1, 4, 8],
		// [8, 11, 12, 13, 11, 14, 11, 8],
		// [0, 0, 0, 0, 0, 0, 0, 0]
	// ],
	// chip_types: 5,
	// moves: 25,
	// chip_goal: 4,
	// chip_goal_count: 5,
	// chip_goal_bonus: "BONUS_CROSS",
	// goal_type: "GOAL_BONUS"
// };

var LEVEL_TUTOR = {"form":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,0,0,0,0,0,0,0],[0,5,4,5,3,6,3,0],[0,4,5,3,4,3,4,0],[0,3,2,1,1,5,5,0],[0,5,1,2,3,2,1,0],[0,2,3,4,2,1,2,0],[0,4,5,1,5,3,4,0],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":25,"chip_goal_count":3500,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};
//{"form":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,0,0,0,0,0,0,0],[0, 3, 4, 5, 1, 2, 3,0 ],[0, 1, 5, 3, 4, 3, 4,0 ],[0, 3, 2, 1, 1, 5, 5,0 ],[0, 5, 1, 2, 3, 2, 1,0 ],[0, 2, 3, 4, 2, 1, 2,0 ],[0, 4, 5, 1, 5, 3, 4,0 ],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":25,"chip_goal_count":3500,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_1 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,0,0,1,0],[0,1,1,1,0,0,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,0,0,1,1,1,0],[0,1,0,0,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,2,2,4,4,2,2,0],[0,4,4,2,0,0,4,0],[0,4,2,2,0,0,4,0],[0,5,4,4,2,2,5,0],[0,5,2,2,4,4,5,0],[0,2,0,0,2,5,2,0],[0,5,0,0,2,2,5,0],[0,4,5,4,4,2,4,0]],"chip_types":[2,4,5,3,1],"moves":11,"chip_goal_count":3000,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_2 = {"form":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,0,0,0,0,0,0,0],[0,2,2,7,7,2,2,0],[0,2,2,7,7,2,2,0],[0,7,7,2,2,7,7,0],[0,7,7,2,2,7,7,0],[0,2,2,7,7,2,2,0],[0,2,2,7,7,2,2,0],[0,0,0,0,0,0,0,0]],"chip_types":[2,7,4,3],"moves":15,"chip_goal_count":40,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":7};

var LEVEL_3 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,2,1,2,2,1,1,0],[0,2,3,1,3,1,3,0],[0,3,2,2,3,2,2,0],[0,3,1,3,1,3,3,0],[0,2,2,3,3,2,1,0],[0,3,2,2,1,2,3,0],[0,1,3,1,1,3,1,0],[0,2,3,3,2,3,2,0]],"chip_types":[1,2,3,4,5],"moves":21,"chip_goal_count":2,"chip_goal_bonus":"BONUS_SHAMAN","goal_type":"GOAL_BONUS","chip_goal":1}

var LEVEL_4 = {"form":[[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0]],"dirt":null,"chips":[[0,4,4,0,0,2,2,0],[0,4,3,0,0,4,1,0],[0,2,3,0,0,1,2,0],[0,1,2,1,1,2,3,0],[0,3,2,1,1,2,1,0],[0,3,4,0,0,4,3,0],[0,4,3,0,0,4,2,0],[0,4,2,0,0,2,4,0]],"chip_types":[2,4,3,1],"moves":12,"chip_goal_count":2500,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_5 = {"form":[[0,1,1,1,1,0,0,0],[0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,0],[0,0,0,1,1,1,1,0],[0,0,0,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,0,0,0],[0,1,1,1,1,0,0,0]],"dirt":[[0,1,1,1,1,0,0,0],[0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,0],[0,0,0,1,1,1,1,0],[0,0,0,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,0,0,0],[0,1,1,1,1,0,0,0]],"chips":[[0,6,4,4,2,0,0,0],[0,4,5,2,2,0,0,0],[0,2,5,2,4,4,2,0],[0,0,0,5,4,6,6,0],[0,0,0,2,6,2,4,0],[0,5,4,2,4,4,6,0],[0,4,5,5,2,0,0,0],[0,4,2,5,2,0,0,0]],"chip_types":[2,5,6,4,3],"moves":20,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT","chip_goal":1};

var LEVEL_6 = {"form":[[0,1,1,1,0,0,0,0],[0,1,1,1,0,0,0,0],[0,1,1,1,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,1,1,1,0],[0,0,0,0,1,1,1,0],[0,0,0,0,1,1,1,0]],"dirt":null,"chips":[[0,6,4,4,0,0,0,0],[0,6,5,2,0,0,0,0],[0,2,4,2,0,0,0,0],[0,5,5,4,4,6,6,0],[0,2,6,7,6,7,4,0],[0,0,0,0,2,4,7,0],[0,0,0,0,6,7,4,0],[0,0,0,0,6,4,7,0]],"chip_types":[2,5,6,7,4],"moves":14,"chip_goal_count":4000,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_7 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,2,2,3,3,2,2,0],[0,4,4,2,2,4,4,0],[0,4,3,1,1,3,4,0],[0,1,3,2,2,3,1,0],[0,2,2,1,1,2,2,0],[0,2,3,1,1,3,2,0],[0,3,4,2,2,4,3,0],[0,4,2,4,4,2,4,0]],"chip_types":[2,3,1,4,5],"moves":10,"chip_goal_count":4500,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_8 = {"form":[[1,1,1,1,1,1,0,0],[1,1,1,1,0,0,1,1],[1,1,1,1,0,0,1,1],[1,1,0,0,1,1,1,1],[1,1,0,0,1,1,1,1],[0,0,1,1,1,1,1,1],[0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[1,1,1,1,1,1,0,0],[1,1,1,1,0,0,1,1],[1,1,1,1,0,0,1,1],[1,1,0,0,1,1,1,1],[1,1,0,0,1,1,1,1],[0,0,1,1,1,1,1,1],[0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"chips":[[2,6,2,4,2,2,0,0],[3,2,6,4,0,0,4,6],[2,3,6,2,0,0,4,2],[3,2,0,0,2,6,3,2],[3,2,0,0,4,6,3,4],[0,0,3,2,4,2,2,4],[0,0,3,6,2,3,3,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,6],"moves":22,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT","chip_goal":1};

var LEVEL_9 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,4,4,2,4,2,6,0],[0,7,6,7,7,4,1,0],[0,12,12,16,12,11,12,0],[0,11,12,11,11,12,17,0],[0,16,17,11,11,17,11,0],[0,7,6,2,6,7,6,0],[0,6,7,2,2,4,7,0],[0,6,2,7,7,2,4,0]],"chip_types":[2,4,1,6,7],"moves":20,"chip_goal_count":30,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":7};

var LEVEL_10 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"chips":[[0,2,2,3,3,2,2,0],[0,4,4,2,2,4,4,0],[0,14,13,11,11,13,14,0],[0,9,9,9,9,9,9,0],[0,9,9,9,9,9,9,0],[0,12,13,11,11,13,12,0],[0,3,4,2,2,4,3,0],[0,4,2,4,4,2,4,0]],"chip_types":[2,3,1,4],"moves":18,"chip_goal_count":20,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT","chip_goal":1};

var LEVEL_11 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"chips":[[0,2,2,4,4,2,2,0],[0,4,4,2,2,4,4,0],[0,14,12,0,0,12,14,0],[0,8,8,0,0,8,8,0],[0,8,8,0,0,8,8,0],[0,12,15,0,0,15,12,0],[0,5,4,5,2,2,5,0],[0,4,5,4,4,2,4,0]],"chip_types":[2,4,5],"moves":23,"chip_goal_count":20,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT","chip_goal":1};

var LEVEL_12 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,2,1,9,9,2,2,0],[0,1,3,9,9,3,1,0],[0,2,9,9,9,9,1,0],[0,9,9,9,9,9,9,0],[0,9,9,9,9,9,9,0],[0,2,9,9,9,9,5,0],[0,3,2,9,9,5,3,0],[0,2,1,9,9,2,5,0]],"chip_types":[1,2,3,5],"moves":15,"chip_goal_count":35,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":1};

var LEVEL_13 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,8,8,6,6,8,8,0],[0,8,8,7,7,8,8,0],[0,8,8,6,6,8,8,0],[0,8,8,7,6,8,8,0],[0,8,8,7,7,8,8,0],[0,8,8,6,6,8,8,0],[0,8,8,6,7,8,8,0],[0,8,8,7,7,8,8,0]],"chip_types":[2,6,7,3],"moves":15,"chip_goal_count":30,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":6};

var LEVEL_14 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,2,1,2,1,2,2,0],[0,1,8,8,8,8,1,0],[0,2,1,4,2,1,3,0],[0,8,8,8,8,8,8,0],[0,8,8,8,8,8,8,0],[0,2,1,4,4,3,4,0],[0,3,8,8,8,8,3,0],[0,2,1,4,1,5,5,0]],"chip_types":[1,2,3,5,4],"moves":23,"chip_goal_count":25,"chip_goal_bonus":"BONUS_CROSS","goal_type":"GOAL_COUNT","chip_goal":1};

var LEVEL_15 = {"form":[[0,0,0,1,1,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,1,1,0,0,0]],"dirt":null,"chips":[[0,0,0,2,1,0,0,0],[0,1,3,3,2,1,1,0],[0,2,1,4,2,1,3,0],[0,1,3,0,0,2,1,0],[0,1,3,0,0,1,1,0],[0,2,1,4,4,3,4,0],[0,3,1,1,4,1,3,0],[0,0,0,4,1,0,0,0]],"chip_types":[1,2,3,5,4],"moves":15,"chip_goal_count":30,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":1};

var LEVEL_16 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0]],"dirt":null,"chips":[[0,7,2,7,7,2,2,0],[0,7,5,0,0,6,1,0],[0,2,1,0,0,1,6,0],[0,1,5,0,0,2,6,0],[0,1,6,0,0,1,1,0],[0,2,6,0,0,5,6,0],[0,7,1,0,0,1,5,0],[0,7,7,6,6,7,5,0]],"chip_types":[1,2,5,6,7],"moves":17,"chip_goal_count":3500,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_17 = {"form":[[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,0,0,1,1,0]],"dirt":null,"chips":[[0,4,4,0,0,2,2,0],[0,4,3,2,2,3,3,0],[0,2,3,2,3,3,2,0],[0,0,0,9,9,0,0,0],[0,0,0,9,9,0,0,0],[0,3,4,2,4,4,3,0],[0,4,3,3,2,3,2,0],[0,4,2,0,0,2,3,0]],"chip_types":[2,4,3,1],"moves":12,"chip_goal_count":5000,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_18 = {"form":[[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,0,4,12,12,1,0,0],[0,2,3,14,14,3,2,0],[0,2,3,12,14,3,2,0],[0,11,11,13,12,11,14,0],[0,2,3,12,14,4,2,0],[0,2,1,14,12,1,2,0],[0,0,4,14,12,4,0,0],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":14,"chip_goal_count":15,"chip_goal_bonus":"BONUS_CROSS","goal_type":"GOAL_COUNT","chip_goal":4};

var LEVEL_19 = {"form":[[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[0,0,0,1,1,0,0,0],[1,1,1,1,1,1,1,1],[0,0,0,1,1,0,0,0],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[1,1,0,2,2,0,1,1],[1,1,0,2,2,0,1,1],[0,0,0,3,3,0,0,0],[2,3,3,2,2,3,3,2],[0,0,0,3,3,0,0,0],[1,1,0,2,2,0,1,1],[1,1,0,2,2,0,1,1],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,5],"moves":18,"chip_goal_count":35,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":1};

var LEVEL_20 = {"form":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"chips":[[0,0,0,0,0,0,0,0],[0,9,9,9,9,9,9,0],[0,9,9,9,9,9,9,0],[0,9,9,9,9,9,9,0],[0,2,3,2,4,4,6,0],[0,3,1,4,2,1,2,0],[0,2,4,6,2,4,6,0],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,6,5],"moves":27,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT","chip_goal":1};

var LEVEL_21 = {"form":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"chips":[[0,0,0,0,0,0,0,0],[0,1,5,1,2,1,4,0],[0,2,5,8,8,5,1,0],[0,1,2,8,8,1,2,0],[0,2,3,8,8,4,4,0],[0,3,1,8,8,1,2,0],[0,2,4,2,2,4,4,0],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":18,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT","chip_goal":1};

var LEVEL_22 = {"form":[[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[0,1,0,1,1,1,1,0],[0,1,1,0,1,1,1,0],[0,1,1,1,0,1,1,0],[0,1,1,1,1,0,1,0],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0]],"dirt":null,"chips":[[0,0,1,2,4,2,0,0],[0,1,5,1,4,3,4,0],[0,2,0,1,1,5,1,0],[0,1,2,0,2,3,2,0],[0,2,3,1,0,4,4,0],[0,3,1,4,1,0,4,0],[0,2,4,2,2,4,2,0],[0,0,2,4,2,4,0,0]],"chip_types":[1,2,3,4,5],"moves":18,"chip_goal_count":25,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":2};

var LEVEL_23 = {"form":[[0,1,1,1,1,1,1,0],[0,0,0,1,1,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,1,1,0,0,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":[[0,1,1,1,1,1,1,0],[0,0,0,1,1,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,0,0,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,1,1,0,0,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"chips":[[0,2,2,4,2,2,4,0],[0,0,0,4,4,0,0,0],[0,3,3,2,2,1,2,0],[0,3,3,0,0,2,1,0],[0,2,2,4,4,1,2,0],[0,0,0,2,1,0,0,0],[0,1,2,2,1,3,1,0],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":20,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT","chip_goal":1};

var LEVEL_24 = {"form":[[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0]],"dirt":null,"chips":[[0,2,1,2,1,2,2,0],[0,1,3,1,3,3,1,0],[0,2,2,3,1,2,1,0],[0,1,2,1,2,3,2,0],[0,9,9,9,9,9,9,0],[0,0,9,9,9,9,0,0],[0,0,0,9,9,0,0,0],[0,0,0,9,9,0,0,0]],"chip_types":[1,2,3],"moves":8,"chip_goal_count":10000,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_25 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,0,1,1,0,1,0],[0,0,0,1,1,0,0,0],[1,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,1],[1,1,1,0,0,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[2,1,7,2,2,7,1,2],[3,1,1,7,2,1,1,2],[0,2,0,2,7,0,2,0],[0,0,0,2,7,0,0,0],[3,0,2,3,2,7,0,3],[2,1,3,2,3,1,1,2],[2,1,7,0,0,3,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,7],"moves":17,"chip_goal_count":35,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":7};

var LEVEL_26 = {"form":[[1,1,1,1,1,1,0,0],[1,1,1,1,1,1,0,0],[1,1,1,1,1,1,0,0],[0,0,1,1,1,1,0,0],[0,0,1,1,1,1,1,1],[0,0,1,1,1,1,1,1],[0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[2,2,1,14,12,2,0,0],[3,4,2,14,14,2,0,0],[3,3,2,15,12,3,0,0],[0,0,4,13,15,1,0,0],[0,0,3,13,15,2,4,3],[0,0,2,12,11,1,4,2],[0,0,3,12,11,3,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":22,"chip_goal_count":4,"chip_goal_bonus":"BONUS_CROSS","goal_type":"GOAL_BONUS","chip_goal":1};

var LEVEL_27 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,0,1,1],[0,0,0,1,1,0,0,0],[1,1,0,1,1,0,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[2,2,1,4,2,2,3,2],[3,2,2,4,4,2,3,2],[3,3,0,9,9,0,2,3],[0,0,0,9,9,0,0,0],[4,2,0,9,9,0,2,3],[4,2,3,2,1,2,3,2],[1,1,2,2,1,3,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4],"moves":25,"chip_goal_count":5,"chip_goal_bonus":"BONUS_CROSS","goal_type":"GOAL_BONUS","chip_goal":1};

var LEVEL_28 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[1,1,0,0,0,0,1,1],[0,0,0,0,0,0,0,0]],"chips":[[2,1,3,2,1,3,1,2],[1,2,2,1,2,3,2,1],[2,1,1,5,1,5,1,2],[1,2,2,3,3,2,2,1],[2,1,3,5,1,5,1,2],[1,2,5,3,5,1,2,1],[2,1,2,3,1,5,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":9,"chip_goal":4,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};

var LEVEL_29 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,1,1,0,0,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],"chips":[[7,6,6,3,2,2,6,7],[7,1,2,6,1,2,1,7],[0,0,0,2,2,0,0,0],[3,3,1,1,2,2,3,2],[0,0,0,0,0,0,0,0],[7,2,3,2,1,2,2,7],[6,3,6,3,2,3,3,6],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":10,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};

var LEVEL_30 = {"form":[[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[1,1,1,1,1,1,1,1],[0,0,1,1,1,1,0,0],[0,0,1,1,1,1,0,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,0,0,5,2,0,0,0],[0,0,0,2,5,0,0,0],[0,0,0,5,5,0,0,0],[5,5,6,2,6,5,2,2],[0,0,2,6,2,6,0,0],[0,0,6,2,6,2,0,0],[2,2,6,2,6,5,2,2],[0,0,0,0,0,0,0,0]],"chip_types":[2,5,6,3],"moves":20,"chip_goal_count":4,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_BONUS","chip_goal":1};

var LEVEL_31 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,0,1,1],[1,1,1,1,1,0,1,1],[1,1,0,0,0,0,1,1],[1,1,0,1,1,1,1,1],[1,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[2,1,6,3,2,2,1,2],[3,2,9,9,9,0,5,1],[3,1,9,9,9,0,1,1],[2,5,0,0,0,0,3,3],[2,1,0,9,9,9,1,1],[3,1,0,9,9,9,2,3],[2,2,6,3,2,3,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":23,"chip_goal_count":3,"chip_goal_bonus":"BONUS_CROSS","goal_type":"GOAL_BONUS","chip_goal":1};

var LEVEL_32 = {"form":[[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],"chips":[[7,6,0,2,2,0,6,7],[7,1,0,2,2,0,1,7],[6,2,0,3,3,0,2,6],[2,3,0,3,3,0,3,2],[6,2,0,2,2,0,2,6],[7,2,0,2,2,0,2,7],[6,3,0,3,3,0,3,6],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":26,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};

var LEVEL_33 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,0,1,1],[1,1,1,1,1,0,1,1],[1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,1,0,0,0,0,1,1],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],"chips":[[6,6,7,9,9,7,6,6],[7,7,9,9,9,9,7,7],[6,9,8,8,8,0,9,6],[9,9,8,8,8,0,9,9],[6,9,8,8,8,0,9,6],[7,2,9,9,9,9,2,7],[6,6,1,9,9,1,6,6],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":17,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};

var LEVEL_34 = {"form":[[1,1,1,1,1,1,1,1],[1,1,0,0,0,0,1,1],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[1,1,0,0,0,0,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"chips":[[1,5,3,4,1,2,5,1],[4,1,0,0,0,0,5,3],[1,3,0,5,1,0,4,1],[1,3,0,3,3,0,4,2],[2,2,0,2,2,0,1,4],[4,2,0,0,0,0,4,2],[1,1,2,3,1,4,1,1],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":18,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};

var LEVEL_35 = {"form":[[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[1,1,6,0,0,2,1,2],[3,1,1,0,0,1,1,2],[3,2,5,0,0,6,2,3],[5,3,3,0,0,5,1,2],[3,2,2,0,0,6,2,5],[2,1,1,0,0,1,1,2],[2,1,6,0,0,3,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":23,"chip_goal_count":5,"chip_goal_bonus":"BONUS_CROSS","goal_type":"GOAL_BONUS","chip_goal":1};

var LEVEL_36 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[9,9,6,3,2,2,9,9],[9,9,2,6,1,5,9,9],[9,9,5,3,2,2,9,9],[11,13,13,11,15,15,13,12],[9,9,2,5,2,6,9,9],[9,9,3,2,1,2,9,9],[9,9,6,3,2,3,9,9],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":18,"chip_goal_count":25,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":2};

var LEVEL_37 = {"form":[[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[1,1,1,0,0,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,0,0,1,1,1],[0,0,0,0,0,1,1,1],[0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0],[1,1,1,0,0,0,0,0],[1,1,1,0,0,0,0,1],[0,0,0,0,0,0,0,0]],"chips":[[2,1,3,0,0,3,1,2],[1,3,2,0,0,3,2,1],[3,1,1,0,0,2,1,3],[1,0,0,0,0,0,0,3],[2,1,3,0,0,2,1,2],[5,3,5,0,0,2,2,1],[2,1,2,0,0,5,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":25,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};

var LEVEL_38 = {"form":[[0,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,1,6,13,12,2,1,0],[3,2,2,16,11,5,5,1],[3,1,15,13,12,12,1,1],[1,3,13,1,5,15,3,3],[2,1,12,15,12,16,1,1],[2,1,3,12,11,2,2,3],[0,2,6,13,12,3,1,0],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":20,"chip_goal_count":35,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT","chip_goal":1};

var LEVEL_39 = {"form":[[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[1,1,1,1,1,1,1,1],[1,1,1,0,0,1,1,1],[1,1,1,1,1,1,1,1],[1,1,0,1,1,0,1,1],[1,1,0,1,1,0,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[2,1,0,8,8,0,1,2],[2,1,0,8,8,0,1,2],[3,8,8,8,8,8,8,3],[2,8,8,0,0,8,8,2],[3,8,8,8,8,8,8,3],[2,2,0,8,8,0,1,2],[2,1,0,8,8,0,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3],"moves":10,"chip_goal_count":5000,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE","chip_goal":1};

var LEVEL_40 = {"form":[[0,0,1,1,1,1,0,0],[0,0,1,1,1,1,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,1,1,1,1,0,0],[0,0,1,1,1,1,0,0],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,0,3,2,1,2,0,0],[0,0,2,1,2,1,0,0],[1,3,1,5,1,5,1,1],[2,1,2,8,8,2,4,3],[1,2,3,8,8,4,1,3],[0,0,5,3,5,1,0,0],[0,0,2,3,1,4,0,0],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":20,"chip_goal":1,"chip_goal_count":25,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_COUNT"};

var LEVEL_41 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"chips":[[7,6,12,3,6,12,6,7],[2,2,13,3,6,12,1,7],[1,2,12,6,2,16,2,6],[12,13,16,13,13,12,13,12],[6,1,13,2,6,13,2,6],[2,3,12,2,3,12,3,2],[6,3,13,6,6,13,3,6],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":26,"chip_goal_count":5,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};

var LEVEL_42 = {"form":[[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"chips":[[2,5,3,2,1,2,5,1],[0,1,2,1,2,1,2,0],[0,0,1,5,1,5,0,0],[0,0,0,3,2,0,0,0],[0,0,3,5,1,3,0,0],[0,2,5,3,5,1,3,0],[3,1,3,3,1,3,1,1],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":15,"chip_goal":4,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};

var LEVEL_43 = {"form":[[0,0,0,1,1,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":null,"chips":[[0,0,0,9,9,0,0,0],[3,1,2,9,9,1,4,1],[1,3,1,9,9,5,1,3],[0,0,0,9,9,0,0,0],[0,0,0,9,9,0,0,0],[2,2,5,9,9,1,4,2],[1,1,2,9,9,4,1,2],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":14,"chip_goal":1,"chip_goal_count":3500,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_SCORE"};

var LEVEL_44 = {"form":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],"chips":[[0,0,0,0,0,0,0,0],[0,11,5,1,2,3,14,0],[0,2,15,1,1,15,1,0],[0,1,2,13,12,3,2,0],[0,2,3,11,11,4,4,0],[0,3,11,4,1,11,2,0],[0,12,4,2,2,4,14,0],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5],"moves":18,"chip_goal_count":10,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT","chip_goal":1};

var LEVEL_45 = {"form":[[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"dirt":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0]],"chips":[[7,6,2,3,6,2,6,7],[6,2,3,6,6,2,1,7],[6,2,2,3,3,6,2,6],[2,3,6,3,3,2,3,2],[6,2,3,2,6,2,2,6],[0,0,0,0,0,0,0,0],[6,3,3,6,6,3,3,6],[0,0,0,0,0,0,0,0]],"chip_types":[1,2,3,4,5,6],"moves":5,"chip_goal_count":5,"chip_goal_bonus":"BONUS_BOMB","goal_type":"GOAL_DIRT"};


var g_levels =
[
	LEVEL_TUTOR,
	LEVEL_1,
	
	LEVEL_2,
	LEVEL_5,
	
	LEVEL_3,
	LEVEL_14,
	LEVEL_4,
	
	LEVEL_6,
	LEVEL_7,
	LEVEL_8,
	LEVEL_9,
	LEVEL_10,
	LEVEL_11,
	LEVEL_12,
	LEVEL_13,
	
	LEVEL_15,
	LEVEL_16,
	LEVEL_17,
	LEVEL_18,
	LEVEL_19,
	LEVEL_20,
	LEVEL_21,
	LEVEL_22,
	LEVEL_23,
	LEVEL_24,
	LEVEL_25,
	LEVEL_26,
	LEVEL_27,
	LEVEL_28,
	LEVEL_29,
	LEVEL_30,
	LEVEL_31,
	LEVEL_32,
	LEVEL_33,
	LEVEL_34,
	LEVEL_35,
	LEVEL_36,
	LEVEL_37,
	LEVEL_38,
	LEVEL_39,
	LEVEL_40,
	LEVEL_41,
	LEVEL_42,
	LEVEL_43,
	LEVEL_44,
	LEVEL_45
];