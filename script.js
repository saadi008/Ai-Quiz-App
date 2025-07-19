// Quiz Data Structure with 100 MCQs
let quizData = [
    {
        question: "What is the primary goal of adversarial search in AI?",
        options: {
            A: "To maximize the player's utility",
            B: "To find the best move against an opponent",
            C: "To minimize computational complexity",
            D: "To explore all possible states"
        },
        correct: "B"
    },
    {
        question: "Which algorithm is used for perfect play in deterministic games?",
        options: {
            A: "Minimax",
            B: "A*",
            C: "Dijkstra",
            D: "Greedy Search"
        },
        correct: "A"
    },
    {
        question: "What does the utility function represent in adversarial search?",
        options: {
            A: "The cost of the path",
            B: "The heuristic value",
            C: "The numeric value of terminal states",
            D: "The branching factor"
        },
        correct: "C"
    },
    {
        question: "What is the time complexity of the minimax algorithm?",
        options: {
            A: "O(b)",
            B: "O(b^2)",
            C: "O(b^m)",
            D: "O(m^b)"
        },
        correct: "C"
    },
    {
        question: "Alpha-beta pruning improves minimax by:",
        options: {
            A: "Reducing the depth of search",
            B: "Eliminating branches that cannot influence the final decision",
            C: "Randomly selecting moves",
            D: "Increasing the branching factor"
        },
        correct: "B"
    },
    {
        question: "What is the optimal ordering for alpha-beta pruning?",
        options: {
            A: "Random order",
            B: "Worst moves first",
            C: "Best moves first",
            D: "Alphabetical order"
        },
        correct: "C"
    },
    {
        question: "Which game was solved by Chinook in 1994?",
        options: {
            A: "Chess",
            B: "Checkers",
            C: "Go",
            D: "Poker"
        },
        correct: "B"
    },
    {
        question: "What is the horizon effect in adversarial search?",
        options: {
            A: "A limit on computational resources",
            B: "Postponing inevitable losses beyond the search depth",
            C: "A heuristic function",
            D: "A type of pruning"
        },
        correct: "B"
    },
    {
        question: "Which of the following is a property of minimax?",
        options: {
            A: "It is incomplete",
            B: "It is suboptimal",
            C: "It is optimal against an optimal opponent",
            D: "It only works for single-player games"
        },
        correct: "C"
    },
    {
        question: "What does the term \"ply\" refer to in game trees?",
        options: {
            A: "A full move by both players",
            B: "A half-move (one player's turn)",
            C: "A terminal state",
            D: "A heuristic value"
        },
        correct: "B"
    },
    {
        question: "Which quantifier is used to express \"all cats are mammals\" in FOL?",
        options: {
            A: "∃",
            B: "∀",
            C: "∧",
            D: "∨"
        },
        correct: "B"
    },
    {
        question: "What is the correct FOL translation for \"some happy person wears a hat\"?",
        options: {
            A: "∀x (Happy(x) → WearingHat(x))",
            B: "∃x (Happy(x) ∧ WearingHat(x))",
            C: "∃x (Happy(x) → WearingHat(x))",
            D: "∀x (Happy(x) ∧ WearingHat(x))"
        },
        correct: "B"
    },
    {
        question: "Which connective is typically paired with ∀ in FOL?",
        options: {
            A: "∧",
            B: "→",
            C: "∨",
            D: "¬"
        },
        correct: "B"
    },
    {
        question: "What is the result of unifying P(x, f(y)) and P(z, f(A))?",
        options: {
            A: "{x/z, y/A}",
            B: "{x/z, y/A}",
            C: "{x/A, y/z}",
            D: "{z/x, A/y}"
        },
        correct: "A"
    },
    {
        question: "Which rule is used to eliminate existential quantifiers in FOL?",
        options: {
            A: "Universal instantiation",
            B: "Skolemization",
            C: "Resolution",
            D: "Modus ponens"
        },
        correct: "B"
    },
    {
        question: "What is the main connective in ∃x (P(x) ∧ Q(x))?",
        options: {
            A: "∧",
            B: "→",
            C: "∨",
            D: "¬"
        },
        correct: "A"
    },
    {
        question: "Which of the following is a valid FOL sentence?",
        options: {
            A: "∀x P(x) ∧ Q(x)",
            B: "∃x P(x) → Q(x)",
            C: "∀x (P(x) → Q(x))",
            D: "∃x (P(x) ∨ Q(x)) → R(x)"
        },
        correct: "C"
    },
    {
        question: "What is the negation of ∀x P(x)?",
        options: {
            A: "∀x ¬P(x)",
            B: "∃x ¬P(x)",
            C: "¬∃x P(x)",
            D: "¬∀x ¬P(x)"
        },
        correct: "B"
    },
    {
        question: "Which of the following is a Horn clause?",
        options: {
            A: "P ∨ Q ∨ ¬R",
            B: "¬P ∨ ¬Q ∨ R",
            C: "P ∧ Q → R",
            D: "P → (Q ∨ R)"
        },
        correct: "B"
    },
    {
        question: "What is the output of SUBST({x/John, y/Mary}, Likes(x, y))?",
        options: {
            A: "Likes(John, x)",
            B: "Likes(John, Mary)",
            C: "Likes(y, Mary)",
            D: "Likes(x, y)"
        },
        correct: "B"
    },
    {
        question: "Which algorithm is used for inference in Prolog?",
        options: {
            A: "Forward chaining",
            B: "Backward chaining",
            C: "A*",
            D: "Minimax"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of standardizing apart in resolution?",
        options: {
            A: "To reduce the number of clauses",
            B: "To avoid variable name conflicts",
            C: "To speed up unification",
            D: "To eliminate quantifiers"
        },
        correct: "B"
    },
    {
        question: "Which of the following is not a valid unification?",
        options: {
            A: "P(x, y) and P(A, B)",
            B: "P(f(x), y) and P(f(A), B)",
            C: "P(x, f(x)) and P(f(y), y)",
            D: "P(x, y) and P(y, x)"
        },
        correct: "C"
    },
    {
        question: "What is the result of resolving P ∨ Q and ¬P ∨ R?",
        options: {
            A: "P ∨ R",
            B: "Q ∨ R",
            C: "P ∨ Q ∨ R",
            D: "¬P ∨ P"
        },
        correct: "B"
    },
    {
        question: "Which of the following is a Skolem constant?",
        options: {
            A: "x",
            B: "f(x)",
            C: "C",
            D: "P(x)"
        },
        correct: "C"
    },
    {
        question: "What is the main drawback of propositional logic compared to FOL?",
        options: {
            A: "Lack of connectives",
            B: "Limited expressive power",
            C: "Inability to handle variables",
            D: "No support for inference"
        },
        correct: "B"
    },
    {
        question: "Which of the following is a predicate in FOL?",
        options: {
            A: "x",
            B: "P(x)",
            C: "∀x",
            D: "∧"
        },
        correct: "B"
    },
    {
        question: "What is the correct FOL translation for \"no one loves Jane\"?",
        options: {
            A: "∀x Loves(x, Jane)",
            B: "∃x ¬Loves(x, Jane)",
            C: "∀x ¬Loves(x, Jane)",
            D: "¬∃x Loves(x, Jane)"
        },
        correct: "C"
    },
    {
        question: "Which rule is used to introduce universal quantifiers?",
        options: {
            A: "Existential instantiation",
            B: "Universal generalization",
            C: "Resolution",
            D: "Modus ponens"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of the occur check in unification?",
        options: {
            A: "To speed up the process",
            B: "To prevent infinite loops",
            C: "To ensure completeness",
            D: "To handle equality"
        },
        correct: "B"
    },
    {
        question: "In FOL, what does the equality predicate \"=\" represent?",
        options: {
            A: "Logical equivalence",
            B: "Identity between objects",
            C: "Implication",
            D: "Substitution"
        },
        correct: "B"
    },
    {
        question: "Which FOL component maps constants to domain objects?",
        options: {
            A: "Predicate",
            B: "Interpretation",
            C: "Quantifier",
            D: "Connective"
        },
        correct: "B"
    },
    {
        question: "What is the canonical form for resolution in FOL?",
        options: {
            A: "Conjunctive Normal Form",
            B: "Clausal Form",
            C: "Disjunctive Normal Form",
            D: "Horn Clause"
        },
        correct: "B"
    },
    {
        question: "Which rule eliminates existential quantifiers by introducing Skolem functions?",
        options: {
            A: "Universal Instantiation",
            B: "Skolemization",
            C: "Resolution",
            D: "Paramodulation"
        },
        correct: "B"
    },
    {
        question: "What is the MGU of P(x,f(y)) and P(z,f(A))?",
        options: {
            A: "{x/z, y/A}",
            B: "{x/A, y/z}",
            C: "{z/x, A/y}",
            D: "{x/f(y), z/f(A)}"
        },
        correct: "A"
    },
    {
        question: "Which algorithm combines forward and backward chaining?",
        options: {
            A: "Minimax",
            B: "A*",
            C: "Resolution",
            D: "Dijkstra"
        },
        correct: "C"
    },
    {
        question: "In FOL, \"Every dog barks\" is best represented as:",
        options: {
            A: "∃x (Dog(x) → Barks(x))",
            B: "∀x (Dog(x) → Barks(x))",
            C: "∀x (Dog(x) ∧ Barks(x))",
            D: "∃x (Dog(x) ∧ Barks(x))"
        },
        correct: "B"
    },
    {
        question: "Which of the following is NOT a valid FOL sentence?",
        options: {
            A: "∀x P(x)",
            B: "∃x (P(x) ∧ Q(x))",
            C: "P(x) ∧ ∀x Q(x)",
            D: "∀x (P(x) → Q(x))"
        },
        correct: "C"
    },
    {
        question: "What is the result of applying {x/A, y/B} to P(x,y)?",
        options: {
            A: "P(B,A)",
            B: "P(A,B)",
            C: "P(y,x)",
            D: "P(x,y)"
        },
        correct: "B"
    },
    {
        question: "Which quantifier is used in \"There exists a unicorn\"?",
        options: {
            A: "∀",
            B: "∃",
            C: "→",
            D: "∧"
        },
        correct: "B"
    },
    {
        question: "What is the main advantage of alpha-beta pruning over minimax?",
        options: {
            A: "Higher accuracy",
            B: "Reduced search space",
            C: "Better heuristic values",
            D: "Faster depth calculation"
        },
        correct: "B"
    },
    {
        question: "In game trees, what does a \"terminal state\" represent?",
        options: {
            A: "A random move",
            B: "End of the game",
            C: "Player's turn",
            D: "Heuristic evaluation"
        },
        correct: "B"
    },
    {
        question: "Which chess AI defeated Kasparov in 1997?",
        options: {
            A: "AlphaGo",
            B: "Deep Blue",
            C: "Chinook",
            D: "Watson"
        },
        correct: "B"
    },
    {
        question: "What is the branching factor in chess approximately?",
        options: {
            A: "10",
            B: "35",
            C: "100",
            D: "5"
        },
        correct: "B"
    },
    {
        question: "Which technique addresses the horizon effect?",
        options: {
            A: "Quiescence search",
            B: "Random pruning",
            C: "Depth-limiting",
            D: "Bidirectional search"
        },
        correct: "A"
    },
    {
        question: "What does \"ply\" refer to in game trees?",
        options: {
            A: "Full game cycle",
            B: "Half-move (one player's action)",
            C: "Terminal node",
            D: "Heuristic calculation"
        },
        correct: "B"
    },
    {
        question: "Which game has the highest branching factor?",
        options: {
            A: "Chess",
            B: "Go",
            C: "Checkers",
            D: "Tic-tac-toe"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of evaluation functions in games?",
        options: {
            A: "Count nodes",
            B: "Estimate state quality",
            C: "Store moves",
            D: "Track players"
        },
        correct: "B"
    },
    {
        question: "Which algorithm uses \"max\" and \"min\" layers?",
        options: {
            A: "A*",
            B: "Minimax",
            C: "Dijkstra",
            D: "Greedy search"
        },
        correct: "B"
    },
    {
        question: "What is the primary challenge in adversarial search?",
        options: {
            A: "Memory limits",
            B: "Opponent's unpredictability",
            C: "Variable costs",
            D: "Infinite states"
        },
        correct: "B"
    },
    {
        question: "Which FOL component represents relations?",
        options: {
            A: "Constants",
            B: "Predicates",
            C: "Functions",
            D: "Variables"
        },
        correct: "B"
    },
    {
        question: "What is the correct negation of ∃x P(x)?",
        options: {
            A: "∀x ¬P(x)",
            B: "∃x ¬P(x)",
            C: "¬∀x P(x)",
            D: "¬∃x ¬P(x)"
        },
        correct: "A"
    },
    {
        question: "Which rule derives Q from P → Q and P?",
        options: {
            A: "Resolution",
            B: "Modus Ponens",
            C: "Universal Instantiation",
            D: "Skolemization"
        },
        correct: "B"
    },
    {
        question: "What is the result of unifying R(x,y) and R(A,B)?",
        options: {
            A: "{x/A, y/B}",
            B: "{A/x, B/y}",
            C: "{x/B, y/A}",
            D: "{A/y, B/x}"
        },
        correct: "A"
    },
    {
        question: "Which is a Horn clause?",
        options: {
            A: "P ∨ Q ∨ R",
            B: "¬P ∨ ¬Q ∨ R",
            C: "P ∧ Q ∧ R",
            D: "P → (Q ∧ R)"
        },
        correct: "B"
    },
    {
        question: "What is the main connective in ∀x (P(x) → Q(x))?",
        options: {
            A: "∀",
            B: "→",
            C: "∧",
            D: "∨"
        },
        correct: "B"
    },
    {
        question: "Which quantifier is used in \"All humans are mortal\"?",
        options: {
            A: "∃",
            B: "∀",
            C: "→",
            D: "∧"
        },
        correct: "B"
    },
    {
        question: "What is the Skolem form of ∃y ∀x P(x,y)?",
        options: {
            A: "∀x P(x,C)",
            B: "∀x P(x,f(x))",
            C: "∃x P(x,y)",
            D: "∀y P(x,y)"
        },
        correct: "B"
    },
    {
        question: "Which inference method is used in Prolog?",
        options: {
            A: "Forward chaining",
            B: "Backward chaining",
            C: "Resolution",
            D: "Minimax"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of the occur check?",
        options: {
            A: "Speed up unification",
            B: "Prevent infinite loops",
            C: "Ensure completeness",
            D: "Handle equality"
        },
        correct: "B"
    },
    {
        question: "What is the time complexity of minimax with alpha-beta pruning in optimal order?",
        options: {
            A: "O(b^m)",
            B: "O(b^(m/2))",
            C: "O(m^b)",
            D: "O(b log m)"
        },
        correct: "B"
    },
    {
        question: "Which FOL rule replaces ∃x P(x) with P(C) for a new constant C?",
        options: {
            A: "Universal instantiation",
            B: "Existential instantiation",
            C: "Resolution",
            D: "Skolemization"
        },
        correct: "B"
    },
    {
        question: "In game trees, what does the utility function evaluate?",
        options: {
            A: "Branching factor",
            B: "Move legality",
            C: "Terminal states",
            D: "Player turn order"
        },
        correct: "C"
    },
    {
        question: "Which connective is main in ∃x (P(x) ∧ Q(x))?",
        options: {
            A: "∃",
            B: "→",
            C: "∧",
            D: "∨"
        },
        correct: "C"
    },
    {
        question: "What does the minimax algorithm assume about the opponent?",
        options: {
            A: "Optimal play",
            B: "Random moves",
            C: "Suboptimal play",
            D: "No heuristic"
        },
        correct: "A"
    },
    {
        question: "Which is NOT a valid unification?",
        options: {
            A: "P(x,y) and P(A,B)",
            B: "P(f(x),y) and P(f(A),B)",
            C: "P(x,x) and P(A,B)",
            D: "P(x,y) and P(y,x)"
        },
        correct: "C"
    },
    {
        question: "What is the result of resolving ¬P ∨ Q and P ∨ R?",
        options: {
            A: "P ∨ Q",
            B: "Q ∨ R",
            C: "¬P ∨ P",
            D: "Q ∧ R"
        },
        correct: "B"
    },
    {
        question: "Which game was solved by AlphaGo in 2016?",
        options: {
            A: "Chess",
            B: "Checkers",
            C: "Go",
            D: "Poker"
        },
        correct: "C"
    },
    {
        question: "What is the main limitation of propositional logic?",
        options: {
            A: "Cannot represent objects",
            B: "No quantifiers",
            C: "Limited connectives",
            D: "No inference rules"
        },
        correct: "A"
    },
    {
        question: "Which FOL component maps predicates to relations?",
        options: {
            A: "Interpretation",
            B: "Model",
            C: "Valuation",
            D: "Substitution"
        },
        correct: "A"
    },
    {
        question: "What is the correct negation of ∀x (P(x) → Q(x))?",
        options: {
            A: "∀x (P(x) ∧ ¬Q(x))",
            B: "∃x (P(x) ∧ ¬Q(x))",
            C: "∃x (¬P(x) ∨ Q(x))",
            D: "∀x (¬P(x) → Q(x))"
        },
        correct: "B"
    },
    {
        question: "Which algorithm uses MAX and MIN nodes?",
        options: {
            A: "Minimax",
            B: "A*",
            C: "Dijkstra",
            D: "BFS"
        },
        correct: "A"
    },
    {
        question: "What is the MGU of P(f(x),y) and P(f(A),B)?",
        options: {
            A: "{x/A, y/B}",
            B: "{x/B, y/A}",
            C: "{f(x)/f(A), y/B}",
            D: "No MGU"
        },
        correct: "A"
    },
    {
        question: "Which quantifier is used in \"There exists a white cat\"?",
        options: {
            A: "∀",
            B: "∃",
            C: "→",
            D: "∧"
        },
        correct: "B"
    },
    {
        question: "What does alpha represent in alpha-beta pruning?",
        options: {
            A: "Best value for MAX",
            B: "Best value for MIN",
            C: "Current depth",
            D: "Branching factor"
        },
        correct: "A"
    },
    {
        question: "Which is a valid Horn clause?",
        options: {
            A: "P ∨ Q ∨ ¬R",
            B: "¬P ∨ ¬Q ∨ R",
            C: "P ∧ Q → R ∨ S",
            D: "¬(P ∧ Q)"
        },
        correct: "B"
    },
    {
        question: "What is the result of SUBST({x/John}, Likes(x,Mary))?",
        options: {
            A: "Likes(John,x)",
            B: "Likes(John,Mary)",
            C: "Likes(x,Mary)",
            D: "Likes(Mary,John)"
        },
        correct: "B"
    },
    {
        question: "Which technique extends search beyond depth limit for unstable positions?",
        options: {
            A: "Quiescence search",
            B: "Iterative deepening",
            C: "Random sampling",
            D: "Bidirectional search"
        },
        correct: "A"
    },
    {
        question: "What is the branching factor of Go?",
        options: {
            A: "~35",
            B: "~300",
            C: "~100",
            D: "~50"
        },
        correct: "B"
    },
    {
        question: "Which rule derives P(A) from ∀x P(x)?",
        options: {
            A: "Universal instantiation",
            B: "Existential generalization",
            C: "Resolution",
            D: "Modus ponens"
        },
        correct: "A"
    },
    {
        question: "In FOL, \"No dogs fly\" is best represented as:",
        options: {
            A: "∃x (Dog(x) ∧ ¬Flies(x))",
            B: "∀x (Dog(x) → ¬Flies(x))",
            C: "∀x (Dog(x) ∧ ¬Flies(x))",
            D: "¬∃x (Dog(x) ∧ Flies(x))"
        },
        correct: "B"
    },
    {
        question: "What is the purpose of iterative deepening in game trees?",
        options: {
            A: "Reduce memory",
            B: "Time management",
            C: "Improve heuristics",
            D: "Randomize play"
        },
        correct: "B"
    },
    {
        question: "Which is NOT a game characteristic for adversarial search?",
        options: {
            A: "Turn-based",
            B: "Opponent",
            C: "Single agent",
            D: "Terminal states"
        },
        correct: "C"
    },
    {
        question: "What is the result of unifying R(x,x) and R(A,B)?",
        options: {
            A: "{x/A, x/B}",
            B: "Fail",
            C: "{A/x, B/x}",
            D: "{x/A, B/A}"
        },
        correct: "B"
    },
    {
        question: "Which algorithm uses \"backed-up\" values?",
        options: {
            A: "A*",
            B: "Minimax",
            C: "Dijkstra",
            D: "Greedy search"
        },
        correct: "B"
    },
    {
        question: "What is the correct FOL for \"All birds fly except penguins\"?",
        options: {
            A: "∀x (Bird(x) ∧ ¬Penguin(x) → Flies(x))",
            B: "∀x ((Bird(x) ∧ ¬Penguin(x)) → Flies(x))",
            C: "∀x (Bird(x) → (¬Penguin(x) ∧ Flies(x)))",
            D: "∃x (Bird(x) ∧ ¬Penguin(x) ∧ Flies(x))"
        },
        correct: "B"
    },
    {
        question: "Which FOL rule introduces ∃x P(x) from P(A)?",
        options: {
            A: "Existential generalization",
            B: "Universal instantiation",
            C: "Resolution",
            D: "Skolemization"
        },
        correct: "A"
    },
    {
        question: "What does beta represent in alpha-beta pruning?",
        options: {
            A: "Best value for MAX",
            B: "Best value for MIN",
            C: "Current depth",
            D: "Branching factor"
        },
        correct: "B"
    },
    {
        question: "Which is a valid application of Demodulation?",
        options: {
            A: "P(x) ∧ Q(x) → R(x)",
            B: "f(A)=B, P(f(A)) → P(B)",
            C: "∀x P(x) → P(A)",
            D: "∃x P(x) → P(C)"
        },
        correct: "B"
    },
    {
        question: "What is the main advantage of backward chaining?",
        options: {
            A: "Goal-directed",
            B: "Complete inference",
            C: "Faster for large KBs",
            D: "Better heuristics"
        },
        correct: "A"
    },
    {
        question: "Which FOL rule allows replacing ∀x P(x) with P(A)?",
        options: {
            A: "Existential Instantiation",
            B: "Universal Instantiation",
            C: "Skolemization",
            D: "Resolution"
        },
        correct: "B"
    },
    {
        question: "What is the result of unifying P(x, f(y)) and P(g(z), f(A))?",
        options: {
            A: "{x/g(y), z/A}",
            B: "{x/g(z), y/A}",
            C: "{z/x, A/y}",
            D: "Fail"
        },
        correct: "B"
    },
    {
        question: "Which technique helps avoid infinite branches in unification?",
        options: {
            A: "Skolemization",
            B: "Resolution",
            C: "Occur Check",
            D: "Demodulation"
        },
        correct: "C"
    },
    {
        question: "In alpha-beta pruning, when can a MIN node be pruned?",
        options: {
            A: "α ≤ β",
            B: "β ≤ α",
            C: "α = β",
            D: "Never"
        },
        correct: "B"
    },
    {
        question: "Which FOL sentence represents \"Some cats are black\"?",
        options: {
            A: "∀x (Cat(x) → Black(x))",
            B: "¬∃x (Cat(x) ∧ Black(x))",
            C: "∃x (Cat(x) ∧ Black(x))",
            D: "∀x (Cat(x) ∧ Black(x))"
        },
        correct: "C"
    },
    {
        question: "What is the primary purpose of evaluation functions in game trees?",
        options: {
            A: "Count nodes",
            B: "Estimate state quality",
            C: "Store move history",
            D: "Determine player order"
        },
        correct: "B"
    },
    {
        question: "Which is NOT a valid step in converting FOL to CNF?",
        options: {
            A: "Eliminate implications",
            B: "Skolemize",
            C: "Introduce new variables",
            D: "Distribute ∨ over ∧"
        },
        correct: "C"
    },
    {
        question: "What does the minimax algorithm return at MAX nodes?",
        options: {
            A: "Maximum child value",
            B: "Minimum child value",
            C: "Average child value",
            D: "First child value"
        },
        correct: "A"
    },
    {
        question: "Which is a valid application of paramodulation?",
        options: {
            A: "P ∨ Q, ¬P ∨ R ⊢ Q ∨ R",
            B: "f(A)=B, P(f(A)) ⊢ P(B)",
            C: "∀x P(x) ⊢ P(A)",
            D: "∃x P(x) ⊢ P(C)"
        },
        correct: "B"
    },
    {
        question: "What is the main disadvantage of backward chaining?",
        options: {
            A: "Requires complete KB",
            B: "May explore irrelevant paths",
            C: "Doesn't handle variables",
            D: "Slow for small queries"
        },
        correct: "B"
    }
];

// Motivational messages array
const motivationalMessages = [
    "You're doing great! Keep going! 💪",
    "Every question makes you stronger! 🧠",
    "You've got this! Stay focused! ⚡",
    "Your AI knowledge is growing! 🌟",
    "Halfway there! You're amazing! 🎯",
    "Almost there! Keep pushing! 🚀",
    "You're on fire! 🔥",
    "Brilliant work! Keep it up! ✨",
    "You're mastering AI concepts! 🎓",
    "Final stretch! You're incredible! 🏆"
];

const resultMessages = {
    excellent: [
        "Outstanding performance! You're an AI expert! 🏆",
        "Perfect score! You're absolutely brilliant! 🌟",
        "Incredible work! You've mastered AI theory! 🎓"
    ],
    good: [
        "Great job! You have solid AI knowledge! 👍",
        "Well done! You're on the right track! 🎯",
        "Excellent work! Keep learning and growing! 📚"
    ],
    average: [
        "Good effort! Every attempt makes you better! 💪",
        "You're learning! That's what matters most! 📖",
        "Keep practicing! You're getting stronger! 🔥"
    ],
    needsImprovement: [
        "Don't give up! Learning is a journey! 🌱",
        "Every mistake is a learning opportunity! 📝",
        "You've taken the first step! Keep going! 🚀"
    ]
};

// Update motivational message based on progress
function updateMotivationalMessage() {
    const progress = (currentQuestionIndex / quizData.length) * 100;
    const messageIndex = Math.floor(progress / 10);
    const motivationText = document.getElementById('motivation-text');
    
    if (motivationText && messageIndex < motivationalMessages.length) {
        motivationText.textContent = motivationalMessages[messageIndex];
        motivationText.style.animation = 'none';
        motivationText.offsetHeight; // Trigger reflow
        motivationText.style.animation = 'slideInUp 0.5s ease';
    }
}

// Update result message based on score
function updateResultMessage() {
    const finalScore = parseInt(finalScoreDisplay.textContent);
    const resultMessage = document.getElementById('result-message');
    const resultEncouragement = document.getElementById('result-encouragement');
    
    let messages;
    if (finalScore >= 90) {
        messages = resultMessages.excellent;
    } else if (finalScore >= 70) {
        messages = resultMessages.good;
    } else if (finalScore >= 50) {
        messages = resultMessages.average;
    } else {
        messages = resultMessages.needsImprovement;
    }
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    if (resultMessage) {
        resultMessage.textContent = randomMessage;
    }
    
    if (resultEncouragement) {
        resultEncouragement.textContent = "Your dedication to learning AI is inspiring!";
    }
}

// Timer variables
let timeLimit = 150 * 60; // 150 minutes (2.5 hours) in seconds
let timeRemaining = timeLimit;
let timerInterval;
let quizStarted = false;

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizCompleted = false;
let shuffledQuestions = [];

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const reviewScreen = document.getElementById('review-screen');
const loadingOverlay = document.getElementById('loading-overlay');

// Welcome Screen Elements
const startQuizBtn = document.getElementById('start-quiz');
const totalQuestionsDisplay = document.getElementById('total-questions');

// Quiz Screen Elements
const currentQuestionDisplay = document.getElementById('current-question');
const totalQuestionsQuizDisplay = document.getElementById('total-questions-display');
const questionText = document.getElementById('question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const progressFill = document.querySelector('.progress-fill');
const currentScoreDisplay = document.getElementById('current-score');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Results Screen Elements
const finalScoreDisplay = document.getElementById('final-score');
const correctAnswersDisplay = document.getElementById('correct-answers');
const totalAnsweredDisplay = document.getElementById('total-answered');
const accuracyDisplay = document.getElementById('accuracy');
const reviewQuizBtn = document.getElementById('review-quiz');
const restartQuizBtn = document.getElementById('restart-quiz');

// Review Screen Elements
const backToResultsBtn = document.getElementById('back-to-results');
const reviewContainer = document.getElementById('review-container');

// Timer display element
let timerDisplay;

// Initialize the application
function init() {
    updateTotalQuestions();
    setupEventListeners();
    showLoading(false);
}

// Create timer display - REMOVED since timer is already in HTML
function createTimerDisplay() {
    // Timer display is already in HTML, no need to create dynamically
}

// Setup event listeners
function setupEventListeners() {
    startQuizBtn.addEventListener('click', startQuiz);
    previousBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    reviewQuizBtn.addEventListener('click', showReviewScreen);
    restartQuizBtn.addEventListener('click', restartQuiz);
    backToResultsBtn.addEventListener('click', showResultsScreen);
    
    // Option selection
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', selectOption);
    });
}

// Update total questions display
function updateTotalQuestions() {
    totalQuestionsDisplay.textContent = quizData.length;
    totalQuestionsQuizDisplay.textContent = quizData.length;
}

// Show loading overlay
function showLoading(show) {
    if (show) {
        loadingOverlay.classList.add('active');
    } else {
        loadingOverlay.classList.remove('active');
    }
}

// Switch between screens
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    document.getElementById(screenId).classList.add('active');
}

// Shuffle questions
function shuffleQuestions() {
    shuffledQuestions = [...quizData];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

// Start the quiz
function startQuiz() {
    showLoading(true);
    
    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    score = 0;
    quizCompleted = false;
    timeRemaining = timeLimit;
    quizStarted = true;
    
    // Shuffle questions
    shuffleQuestions();
    
    setTimeout(() => {
        showLoading(false);
        showScreen('quiz-screen');
        loadQuestion();
        startTimer();
    }, 1000);
}

// Start timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer-text').textContent = timeString;
    
    // Change color when time is running low
    if (timeRemaining <= 300) { // 5 minutes
        document.getElementById('timer-text').style.color = '#f44336';
        document.querySelector('.timer-display').style.animation = 'shake 0.5s ease-in-out infinite';
    } else if (timeRemaining <= 600) { // 10 minutes
        document.getElementById('timer-text').style.color = '#ff9800';
    }
}

// Time up function
function timeUp() {
    alert('Time is up! Your quiz will be submitted automatically.');
    completeQuiz();
}

// Load current question
function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update options
    optionA.textContent = question.options.A;
    optionB.textContent = question.options.B;
    optionC.textContent = question.options.C;
    optionD.textContent = question.options.D;
    
    // Update progress
    currentQuestionDisplay.textContent = currentQuestionIndex + 1;
    const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    
    // Update motivational message
    updateMotivationalMessage();
    
    // Update navigation buttons
    previousBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? 'Finish' : 'Next';
    
    // Clear previous selections and re-enable options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
        option.style.pointerEvents = 'auto';
    });
    
    // Show user's previous answer if exists
    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedOption = document.querySelector(`[data-option="${userAnswers[currentQuestionIndex]}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
    }
    
    // Animate question card
    const questionCard = document.querySelector('.question-card');
    questionCard.style.animation = 'none';
    questionCard.offsetHeight; // Trigger reflow
    questionCard.style.animation = 'slideInUp 0.5s ease';
}

// Select an option
function selectOption(event) {
    const selectedOption = event.currentTarget;
    const optionValue = selectedOption.getAttribute('data-option');
    
    // Clear previous selections and feedback
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Select current option
    selectedOption.classList.add('selected');
    
    // Store user answer
    userAnswers[currentQuestionIndex] = optionValue;
    
    // Get current question
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Show feedback based on answer
    if (optionValue === question.correct) {
        // Correct answer - show green feedback
        selectedOption.classList.add('correct');
        score++;
        currentScoreDisplay.textContent = score;
        
        // Show success message
        showFeedback('Correct!', 'success');
    } else {
        // Wrong answer - show red feedback
        selectedOption.classList.add('incorrect');
        
        // Highlight the correct answer in green
        const correctOption = document.querySelector(`[data-option="${question.correct}"]`);
        if (correctOption) {
            correctOption.classList.add('correct');
        }
        
        // Show error message
        showFeedback('Incorrect!', 'error');
    }
    
    // Disable all options after selection
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Auto-advance after 2 seconds
    setTimeout(() => {
        if (currentQuestionIndex < quizData.length - 1) {
            nextQuestion();
        }
    }, 2000);
}

// Show feedback message
function showFeedback(message, type) {
    // Remove existing feedback
    const existingFeedback = document.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = `feedback-message ${type}`;
    feedback.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'times-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to question container
    const questionContainer = document.querySelector('.question-container');
    questionContainer.appendChild(feedback);
    
    // Animate in
    setTimeout(() => {
        feedback.classList.add('show');
    }, 100);
    
    // Remove after 2 seconds
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
            feedback.remove();
        }, 300);
    }, 2000);
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Quiz completed
        completeQuiz();
    }
}

// Complete the quiz
function completeQuiz() {
    quizCompleted = true;
    clearInterval(timerInterval);
    calculateFinalScore();
    showResultsScreen();
}

// Calculate final score
function calculateFinalScore() {
    const totalAnswered = userAnswers.filter(answer => answer !== null).length;
    const correctAnswers = userAnswers.filter((answer, index) => 
        answer === shuffledQuestions[index].correct
    ).length;
    
    const finalScore = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    
    // Update displays
    finalScoreDisplay.textContent = finalScore;
    correctAnswersDisplay.textContent = correctAnswers;
    totalAnsweredDisplay.textContent = totalAnswered;
    accuracyDisplay.textContent = accuracy;
    
    // Update result messages
    updateResultMessage();
    
    // Animate score circle
    const scoreFill = document.querySelector('.score-fill');
    const circumference = 2 * Math.PI * 50; // r = 50
    const offset = circumference - (finalScore / 100) * circumference;
    scoreFill.style.strokeDashoffset = offset;
}

// Show results screen
function showResultsScreen() {
    showScreen('results-screen');
}

// Show review screen
function showReviewScreen() {
    showScreen('review-screen');
    loadReviewQuestions();
}

// Load review questions
function loadReviewQuestions() {
    reviewContainer.innerHTML = '';
    
    shuffledQuestions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <strong>Question ${index + 1}:</strong> ${question.question}
            </div>
            <div class="review-options">
                ${Object.entries(question.options).map(([key, value]) => {
                    let className = 'review-option';
                    if (key === userAnswer) {
                        className += ' user-answer';
                    }
                    if (key === question.correct) {
                        className += ' correct-answer';
                    } else if (key === userAnswer && !isCorrect) {
                        className += ' incorrect-answer';
                    }
                    
                    return `
                        <div class="${className}">
                            <span class="option-label">${key}</span>
                            <span class="option-text">${value}</span>
                            ${key === question.correct ? '<i class="fas fa-check" style="color: #4CAF50;"></i>' : ''}
                            ${key === userAnswer && !isCorrect ? '<i class="fas fa-times" style="color: #f44336;"></i>' : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

// Restart quiz
function restartQuiz() {
    showScreen('welcome-screen');
    clearInterval(timerInterval);
    quizStarted = false;
}

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
    if (quizScreen.classList.contains('active')) {
        switch(event.key) {
            case '1':
            case 'a':
            case 'A':
                document.querySelector('[data-option="A"]').click();
                break;
            case '2':
            case 'b':
            case 'B':
                document.querySelector('[data-option="B"]').click();
                break;
            case '3':
            case 'c':
            case 'C':
                document.querySelector('[data-option="C"]').click();
                break;
            case '4':
            case 'd':
            case 'D':
                document.querySelector('[data-option="D"]').click();
                break;
            case 'ArrowLeft':
                if (!previousBtn.disabled) {
                    previousBtn.click();
                }
                break;
            case 'ArrowRight':
            case 'Enter':
                nextBtn.click();
                break;
        }
    }
});

// Add touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && !previousBtn.disabled) {
            // Swipe left - go to previous
            previousBtn.click();
        } else if (diff < 0) {
            // Swipe right - go to next
            nextBtn.click();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
}); 