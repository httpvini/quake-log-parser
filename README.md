# Quake Log Parser

### Requirements

```
NodeJS (Versão 18.0.0 ou acima)
```

### Installing dependencies

```
npm install
```

### Run

```
npm start
```

## Routes

**LIST GAME MATCHES**

**GET** ```/api/v1/games```

**200** ```OK```

**Example**
```
{
	"game_1": {
		"total_kills": 0,
		"players": [
			"Isgalamido"
		],
		"kills": {
			"Isgalamido": 0
		}
	},
	"game_2": {
		"total_kills": 11,
		"players": [
			"Isgalamido",
			"Mocinha"
		],
		"kills": {
			"Isgalamido": 0,
			"Mocinha": 0
		}
	},
}
```

----------
**GET SPECIFIC GAME MATCH**

**GET** ```/api/v1/game/{id}```

**200** ```OK```

**Example**
```
{
	"total_kills": 130,
	"players": [
		"Oootsimo",
		"Isgalamido",
		"Zeh",
		"Dono da Bola",
		"Mal",
		"Assasinu Credi",
		"Chessus"
	],
	"kills": {
		"Oootsimo": 20,
		"Isgalamido": 16,
		"Zeh": 9,
		"Dono da Bola": 12,
		"Mal": 0,
		"Assasinu Credi": 22,
		"Chessus": 0
	}
}
```