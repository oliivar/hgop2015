Testform

Event Create game
{

	Given []
	When  [createGame]
	Then  [Game Created]
}

Event Player 1 places tic
{

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,0,X)]
	Then  [Placed(0,0,X)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(1,0,X)]
	Then  [Placed(1,0,X)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(2,0,X)]
	Then  [Placed(2,0,X)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,1,X)]
	Then  [Placed(0,1,X)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(1,1,X)]
	Then  [Placed(1,1,X)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(2,1,X)]
	Then  [Placed(2.1.X)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,2,X)]
	Then  [Placed(0,2,X)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(1,2,X)]
	Then  [Placed(1,2,X)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(2,2,X)]
	Then  [Placed(2,2,X)]
}

Event player 2 places tic
{

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,0,O)]
	Then  [Placed(0,0,O)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(1,0,O)]
	Then  [Placed(1,0,O)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(2,0,O)]
	Then  [Placed(2,0,O)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,1,O)]
	Then  [Placed(0,1,O)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(1,1,O)]
	Then  [Placed(1,1,O)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(2,1,O)]
	Then  [Placed(2,1,O)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,2,O)]
	Then  [Placed(0,2,O)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(1,2,O)]
	Then  [Placed(1,2,O)]

	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(2,2,0)]
	Then  [Placed(2,2,0)]
}

Event player 1 wins
{

	Given [Placed(0,0,X), Placed(1,0,X)]
	When  [Place(2,0,X)]
	Then  [ Placed(2,0,X), Player 1 WINS ]

	Given [Placed(0,1,X), Placed(1,1,X)]
	When  [Place(2,1,X)]
	Then  [ Placed(2,1,X), Player 1 WINS ]

	Given [Placed(0,2,X), Placed(1,2,X)]
	When  [Place(2,2,X)]
	Then  [ Placed(2,2,X), Player 1 WINS ]

	Given [Placed(0,0,X), Placed(0,1,X)]
	When  [Place(0,2,X)]
	Then  [ Placed(0,2,X), Player 1 WINS ]

	Given [Placed(1,1,X) Placed(1,0,X)]
	When  [Place(1,2,X)]
	Then  [ Placed(1,2,X), Player 1 WINS ]

	Given [Placed(2,0,X), Placed(2,1,X)]
	When  [Place(2,2,X)]
	Then  [ Placed(2,2,X), Player 1 WINS ]

	Given [Placed(0,0,X), Placed(1,1,X)]
	When  [Place(2,2,X)]
	Then  [ Placed(2,2,X), Player 1 WINS ]

	Given [Placed(2,0,X), Placed(1,1,X)]
	When  [Place(0,2,X)]
	Then  [ Placed(0,2,X), Player 1 WINS]

Event player 2 WINS
{

	Given [Placed(0,0,O), Placed(1,0,O)]
	When  [Place(2,0,O)]
	Then  [ Placed(2,0,O), Player 2 WINS ]

	Given [Placed(0,1,O), Placed(1,1,O)]
	When  [Place(2,1,O)]
	Then  [ Placed(2,1,O), Player 2 WINS ]

	Given [Placed(0,2,O), Placed(1,2,O)]
	When  [Place(2,2,O)]
	Then  [ Placed(2,2,O), Player 2 WINS ]

	Given [Placed(0,0,O), Placed(0,1,O)]
	When  [Place(0,2,O)]
	Then  [ Placed(0,2,O), Player 2 WINS ]

	Given [Placed(1,1,O) Placed(1,0,O)]
	When  [Place(1,2,O)]
	Then  [ Placed(1,2,O), Player 2 WINS ]

	Given [Placed(2,0,O), Placed(2,1,O)]
	When  [Place(2,2,O)]
	Then  [ Placed(2,2,O), Player 2 WINS ]

	Given [Placed(0,0,O), Placed(1,1,O)]
	When  [Place(2,2,O)]
	Then  [ Placed(2,2,O), Player 2 WINS ]

	Given [Placed(2,0,O), Placed(1,1,O)]
	When  [Place(0,2,O)]
	Then  [ Placed(0,2,O), Player 2 WINS ]
}

Event DRAW
{

	Given [Placed(0,0,X) (1,0,O) (2,0,X)
	             (0,1,X) (1,1,O) (2,1,O)
	             (0,2,) (1,2,X) (2,2,X)]
	When  [Place(0,2,O)]
	Then  [Placed(0,2,O), DRAW ]
}

Event Elegal move 
{
	Player 1 move

	Given [Placed(0,0,X)]
	When  [Place(1,0,X)]
	Then  [ IT´S NOT YOUR MOVE ]

	Player 2 move

	Given [Placed(0,0,X), Placed(1,0,O)]
	When  [Place(2,0,O)]
	Then  [ IT´S NOT YOUR MOVE ]
}






