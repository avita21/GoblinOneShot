
$(document).ready(function() {
    var diceRoller  = new DiceRoller();

    function roll(){
      var value = document.getElementById('input').value;

      diceRoller.roll(value);

      document.getElementById('output').value = diceRoller.getNotation();

      // stop event propagation
      return false;
    }

    function clearLog(){
      diceRoller.clearLog();

      document.getElementById('output').value = diceRoller.getNotation();

      // stop event propagation
      return false;
    }
  });