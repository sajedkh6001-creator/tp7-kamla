<body>
<nav>
<button onclick="nav('calc')">Calculatrice</button>
<button onclick="nav('todo')">To-Do List</button>
<button onclick="nav('galerie')">Galerie</button>
<button onclick="nav('puzzle')">Puzzle 3x3</button>
<button onclick="nav('Quiz')">Quiz</button>
</nav>
<section id="calc" class="page active">
<h2>Calculatrice</h2>
<input type="text" id="ecran" value="" placeholder="0" readonly>
<br><br>
<button onclick="add('7')">7</button> <button onclick="add('8')">8</button> <button
onclick="add('9')">9</button> <button onclick="add('/')">/</button><br>
<button onclick="add('4')">4</button> <button onclick="add('5')">5</button> <button
onclick="add('6')">6</button> <button onclick="add('*')">*</button><br>
<button onclick="add('1')">1</button> <button onclick="add('2')">2</button> <button
onclick="add('3')">3</button> <button onclick="add('-')">-</button><br>
<button onclick="effacer()">C</button> <button onclick="add('0')">0</button> <button
onclick="calculer()">=</button> <button onc