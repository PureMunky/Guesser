var guesser = (function () {
  const max = 4;
  var current = 0;
  var output = document.getElementById('output');
  var outputHistory = document.getElementById('history');
  var history = {
    correct: 0,
    events: []
  };

  function getNext() {
    return Math.round(Math.random() * 100) % max;
  }

  function reset() {
    current = getNext();
    outputHistory.innerText = formatHistory();
  }

  function guess(num) {
    var result = (num == current);
    var message = "";

    if (result) {
      message = "Success!";
    } else {
      message = "Failure!";
    }

    output.innerText = message + " " + current;

    history.correct += (result ? 1 : 0);
    history.events.push({
      result: result,
      current: current,
      guess: guess
    });

    reset();
  }

  function formatHistory() {
    var message = '';

    if (history.events.length > 0) {
      message += Math.round((history.correct / history.events.length) * 100) + '%\n';
      message += history.correct + ' correct of ' + history.events.length + ' games\n';
    } else {
      message += 'No games yet';
    }

    return message;
  }

  reset();

  return {
    reset: reset,
    guess: guess
  }
}())