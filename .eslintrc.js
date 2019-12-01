// Standard Formatting rules for Kolbot scripts
// Compatible with ESLint plugin

module.exports = {
	"root": true,
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaFeatures": {
			"impliedStrict": true,
		}
	},
	"env": {
		"es6": true,
	},
	"globals": {
		// The following globals are defined within D2BS, or are actually defined in the source code
		"global": true,
		"include": true,
		"print": true,
		"me": true,
		"td": true,
		"getTickCount": true,
		"delay": true,
		"getParty": true,
		"Pickit": true,
		"takeScreenshot": true,
		"getUnit": true,
		"quit": true,
		"clickMap": true,
		"getBaseStat": true,
		"clickItem": true,
		"getCursorType": true,
		"getPresetUnits": true,
		"getDistance": true,
		"copyUnit": true,
		"getRoom": true,
		"getLocaleString": true,
		"DataFile": true,
		"D2Bot": true,
		"scriptBroadcast": true,
		"isIncluded": true,
		"FileTools": true,
		"showConsole": true,
		"getInteractedNPC": true,
		"getDialogLines": true,
		"getUIFlag": true,
		"sendPacket": true,
		"getPacket": true,
		"getPath": true,
		"rand": true,
		"PresetUnit": true,
		"getPresetUnit": true,
		"getArea": true,
		"getWaypoint": true,
		"getScript": true,
		"Room": true,
		"say": true,
		"load": true,
		"addEventListener": true,
		"getMercHP": true,
		"Experience": true,
		"checkCollision": true,
		"gold": true,
		"getLocation": true,
		"login": true,
		"sendCopyData": true,
		"locationAction": true,
		"getControl": true,
		"debugLog": true,
		"getCollision": true,
		"transmute": true,
		"submitItem": true,
		"MuleLogger": true,
		"createGame": true,
		"joinGame": true,
		"Line": true,
		"removeEventListener": true,
		"Unit": true,
		"Party": true,
		"UtilitySystem": true,
		"CraftingSystem": true,
		"moveNPC": true,
		"ShitList": true,
		"getPlayerFlag": true,
		"clickParty": true,
		"dopen": true,
		"Items": true,
		"CustomConfig": true,
		"getLists": true,
		"pickItems": true,
		"getNPCName": true,
		"countItems": true,
		"shopStuff": true,
		"othersInGame": true,
		"checkItem": true,
		"Text": true,
		"File": true,
		"js_strict": true,
		"handler": true,
		"sendKey": true,
		"md5": true,
		"module": true,
		"require": true,
	},
	"rules": {
		// enable additional rules
		"indent": ["warn", "tab"],
		"linebreak-style": ["error", "windows"],
		"semi": ["error", "always"],
		"comma-spacing": ["error", {"before": false, "after": true}],
		"keyword-spacing": ["error", {"before": true, "after": true}],
		"brace-style": ["error", "1tbs", {"allowSingleLine": false}],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", {"words": true, "nonwords": false}],
		"arrow-spacing": "error",
		"arrow-body-style": ["error", "as-needed"],
		"space-before-blocks": "error",
		"key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
		"no-mixed-spaces-and-tabs": "error",
		"no-trailing-spaces": ["warn", {"ignoreComments": true, "skipBlankLines": true}],
		"no-whitespace-before-property": "error",
		"comma-style": ["error", "last"],
		"eol-last": ["error", "always"],
		"block-scoped-var": "error",
		"no-var": "warn",
		"curly": "error",
		//"default-case": "warn",
		"dot-notation": "warn",
		"eqeqeq": ["error", "smart"],
		"no-caller": "error",
		"no-floating-decimal": "error",
		"no-multi-spaces": "error",
		"no-self-compare": "error",
		"no-with": "error",
		"no-shadow": "warn",
		"no-use-before-define": "error",
		"no-prototype-builtins": "off",
		"quotes": ["warn", "single"],
		"no-constant-condition": ["error", {"checkLoops": false}],
		"no-labels": ["error", {"allowLoop": true}], // in the future no loops ;)
		"no-unused-vars": "warn",
		"no-fallthrough": ["error", {"commentPattern": "break[\\s\\w]*omitted"}],
	}
};
