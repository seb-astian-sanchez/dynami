
function getNewQuote() {
  // code to get a new quote and set it as the text of the p element
  let quotes = [  "It's your life!",  "Love without sacrifice is like theft.",
    "Heroes are heroes because they are heroic in behavior, not because they won or lost.",
    "What labels me, negates me.", "If anyone on the verge of action should judge himself according to the outcome, he would never begin.",
    "Anxiety is the dizziness of freedom.", "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
    "The world breaks everyone, and afterward, many are strong at the broken places", "Never confuse movement with action.",
    "Never discourage anyone...who continually makes progress, no matter how slow", "I'm trying to think, don't confuse me with facts.",
    "Courage is knowing what not to fear.", "χαλεπὰ τὰ καλά Nothing beautiful without struggle.", "The first and best victory is to conquer self",
    "Patience is the companion of wisdom.", "In my deepest wound I saw your glory, and it dazzled me.", "Think you're escaping and run into yourself. Longest way round is the shortest way home.",
    "All things are inconstant except the faith in the soul, which changes all things and fills their inconstancy with light.", "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "The fault, dear Brutus, is not in our stars, but in ourselves.", "Expectation is the root of all heartache", "Whereof one cannot speak, thereof one must be silent.",
    "Hell isn't other people. Hell is yourself.", "If people never did silly things nothing intelligent would ever get done.",
    "Set thy heart upon thy work, but never on its reward.", "Perform all work carefully, guided by compassion.",
    "It is Nature that causes all movement. Deluded by the ego, the fool harbors the perception that says \"I did it\".",
    "Everything excellent is as difficult as it is rare.", "Do not weep. Do not wax indignant. Understand.",
    "Let everything happen to you Beauty and terror Just keep going No feeling is final", "Have patience with everything that remains unsolved in your heart. ...live in the question.",
    "The purpose of life is to be defeated by greater and greater things.", "The only journey is the one within.", "Every angel is terrifying.",
    "The future enters into us, in order to transform itself in us, long before it happens.", "You cannot swim for new horizons until you have courage to lose sight of the shore.",
    "Angry people are not always wise.", "The distance is nothing when one has a motive.", "Conventionality is not morality.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", "Those who know do not speak. Those who speak do not know.",
    "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.'", "The further one goes, the less one knows.",
    "Overconcentration on any one point is distortion.", "We are not rich by what we possess but by what we can do without.", "Look closely. The beautiful may be small.",
    "One who makes himself a worm cannot complain afterwards if people step on him.", "Man must be disciplined, for he is by nature raw and wild.",
    "Optimism is a strategy for making a better future. Because unless you believe that the future can be better, you are unlikely to step up and take responsibility for making it so.",
    "It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.",
    "Nobody deserves your tears, but whoever deserves them will not make you cry.", "Conquer yourself rather than the world.",
    "Whatsoever a man soweth, that shall he also reap.", "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control.",
    "The grateful heart sits at a continuous feast.", "Everyone thinks of changing the world, but no one thinks of changing himself.",
    "If you look for perfection, you'll never be content.", "It is better to fail in originality than to succeed in imitation.",
    "I know not all that may be coming, but be it what it will, I'll go to it laughing", "See how elastic our prejudices grow when once love comes to bend them."];
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[quoteIndex];
  document.getElementById("quote").innerText = quote;
}




function selectRoutine(routine) {
  // Hide all circuits
  // Show the corresponding menu based on the selected routine
  if (routine == '5x5') {
    document.getElementById('routine').innerHTML = '<div id="5x5" style="display: block; margin: auto;">' +
                                                   '<button class="button-35" onclick="selectCircuit(\'5x5a\')"> A </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'5x5b\')"> B </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'create\')"> create </button>' +
                                                   '<button class="button-35" onclick="prev(\'5x5\')"> Back </button>' +
                                                   '</div>';
  } else if (routine == 'PPL') {
    document.getElementById('routine').innerHTML = '<div id="PPL" style="display: block; margin: auto;">' +
                                                   '<button class="button-35" onclick="selectCircuit(\'Push\')"> Push </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'Pull\')"> Pull </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'Legs\')"> Legs </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'create\')"> create </button>' +
                                                   '<button class="button-35" onclick="prev(\'PPL\')">Back</button>' +
                                                   '</div>';
  } else if (routine == 'Split') {
    document.getElementById('routine').innerHTML = '<div id="Split" style="display: block; margin: auto;">' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit1\')">Circuit 1</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit2\')">Circuit 2</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit3\')">Circuit 3</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit4\')">Circuit 4</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit5\')">Circuit 5</button>' +
                                                   '<button class="button-35" onclick="prev(\'Split\')">Back</button>' +
                                                   '</div>';
  } else if (routine == '5/3/1') {
    document.getElementById('routine').innerHTML = '<div id="5/3/1" style="display: block; margin: auto;">' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit1\')">Circuit 1</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit2\')">Circuit 2</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit3\')">Circuit 3</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit4\')">Circuit 4</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit5\')">Circuit 5</button>' +
                                                   '<button class="button-35" onclick="prev(\'5/3/1\')">Back</button>' +
                                                   '</div>';
  } else if (routine == 'Yours') {
    document.getElementById('routine').innerHTML = '<div id="Yours" style="display: block; margin: auto;">' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit1\')">Circuit 1</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit2\')">Circuit 2</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit3\')">Circuit 3</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit4\')">Circuit 4</button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'circuit5\')">Circuit 5</button>' +
                                                   '<button class="button-35" onclick="prev(\'Yours\')">Back</button>' +
                                                   '</div>';
  }
}


async function getGraph() {
  const newScript = await eel.genGraph()();
  const scriptEl = document.createRange().createContextualFragment(newScript);
  document.body.appendChild(scriptEl)
  getNewQuote();
}

window.onload = getGraph;


function selectCircuit(circuit) {

  // Show the corresponding menu based on the selected routine
  if (circuit == 'Pull') {
    document.getElementById('PPL').innerHTML =
                                                '<div id="Pull">' +
                                                '<table>' +
                                                '<tr>' +
                                                  '<td>Deadlift</td>' +
                                                  '<td><input type="text" id="DL"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Row</td>' +
                                                  '<td><input type="text" id="Row"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Lat Pull Down</td>' +
                                                  '<td><input type="text" id="LPD"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Seated Cable Row</td>' +
                                                  '<td><input type="text" id="SCR"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Face-pull</td>' +
                                                  '<td><input type="text" id="FP"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Bicep Curl</td>' +
                                                  '<td><input type="text" id="BicepC"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Hammer Curl</td>' +
                                                  '<td><input type="text" id="HammerC"></td>' +
                                                '</tr>' +
                                                '</table>' +
                                                '<div id="inputValueContainer">' +
                                                '</div>' +
                                                '<button class="button-35" onclick="prev(\'Pull\')"> Back </button>' +
                                                '</div>' ;
    }
  else if (circuit == 'Push') {
    document.getElementById('PPL').innerHTML =
                                              '<div id="Push">' +
                                              '<table>' +
                                                '<tr>' +
                                                  '<td>Bench</td>' +
                                                  '<td><input type="text" id="Bench"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>OHP</td>' +
                                                  '<td><input type="text" id="OHP"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Incline Bench Press</td>' +
                                                  '<td><input type="text" id="InclineBP"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Tricep Pushdown</td>' +
                                                  '<td><input type="text" id="TricepPD"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Overhead Tricep Extension</td>' +
                                                  '<td><input type="text" id="OHTE"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                  '<td>Lateral Raise</td>' +
                                                  '<td><input type="text" id="LateralR"></td>' +
                                                '</tr>' +
                                              '</table>' +
                                                '<div id="inputValueContainer">' +
                                                '</div>' +
                                                '<button class="button-35" onclick="prev(\'Push\')"> Back </button>' +
                                                 '<div id ="pushGraph">' +
                                                 '</div>' +
                                            '</div>';
    }
    else if (circuit == 'Legs') {
    document.getElementById('PPL').innerHTML =
                                            '<div id= "Legs">' +
                                            '<table>' +
                                            '<tr>' +
                                            '<td>Squat</td>' +
                                            '<td><input type="text" id="Squat"></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                            '<td>Romanian Deadlift</td>' +
                                            '<td><input type="text" id="RDL"></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                            '<td>Leg Press</td>' +
                                            '<td><input type="text" id="LegPress"></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                            '<td>Calf Raise</td>' +
                                            '<td><input type="text" id="CalfR"></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                            '<td>Leg Curl</td>' +
                                            '<td><input type="text" id="LegC"></td>' +
                                            '</tr>' +
                                            '</table>' +
                                            '<div id="inputValueContainer">' +
                                            '</div>' +
                                            '</div>' +
                                            '<button class="button-35" onclick="prev(\'Legs\')"> Back </button>';

        }
        else if (circuit == '5x5a') {
            document.getElementById('5x5').innerHTML =
                                            '<div id= "5x5a">' +
                                            '<table>' +
                                            '<tr>' +
                                            '<td>Squat</td>' +
                                            '<td><input type="text" id="Squat"></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                            '<td>Bench</td>' +
                                            '<td><input type="text" id="Bench"></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                            '<td>Row</td>' +
                                            '<td><input type="text" id="Row"></td>' +
                                            '</tr>' +
                                            '</table>' +
                                            '<div id="inputValueContainer">' +
                                            '</div>' +
                                            '<button class="button-35" onclick="prev(\'5x5a\')"> Back </button>' +
                                            '</div>';
                                            }
                else if (circuit == '5x5b') {
                    document.getElementById('5x5').innerHTML =
                                                '<div id= "5x5b">' +
                                                '<table>' +
                                                '<tr>' +
                                                '<td>Squat</td>' +
                                                '<td><input type="text" id="Squat"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td>OHP</td>' +
                                                '<td><input type="text" id="Overhead Press"></td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td>DL</td>' +
                                                '<td><input type="text" id="Deadlift"></td>' +
                                                '</tr>' +
                                                '</table>' +
                                                '<div id="inputValueContainer">' +
                                                '</div>' +
                                                '<button class="button-35" onclick="prev(\'5x5b\')"> Back </button>' +
                                                '</div>';
                    }



  const inputBoxes = document.querySelectorAll('input[type="text"]');

inputBoxes.forEach(inputBox => {
  inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      // Get the input value
      var inputValue = inputBox.value;
      var exer = inputBox.id;

      // Process the input value (e.g. store it in a database or local storage)
      processInput(exer, inputValue);

      // Display the input value
     document.getElementById('inputValueContainer').innerHTML = inputValue;

      // Clear the input box
      inputBox.value = '';
       }
     });
    });
}
function processInput(exercise, inputValue) {
    console.log(exercise, inputValue);
    eel.inputWeight(exercise, inputValue);
}

function prev(current) {
      if (current == '5x5' || current == 'PPL' || current == '5/3/1' || current == 'Split' || current == 'create') {
        document.getElementById(current).innerHTML =    '<div id="routine">' +
                                                        '<button class="button-35" onclick="selectRoutine(\'5x5\')"> 5x5 </button>' +
                                                        '<button class="button-35" onclick="selectRoutine(\'PPL\')"> PPL </button>' +
                                                        '<button class="button-35" onclick="selectRoutine(\'Split\')"> Split </button>' +
                                                        '<button class="button-35" onclick="selectRoutine(\'5/3/1\')"> 5/3/1 </button>' +
                                                        '<button class="button-35" onclick="selectRoutine(\'create\')"> create </button>'
                                                        '</div>';
      }
      else if (current == 'Push' || current == 'Pull' || current == 'Legs') {
        document.getElementById(current).innerHTML = '<div id="PPL" style="display: block; margin: auto;">' +
                                                   '<button class="button-35" onclick="selectCircuit(\'Push\')"> Push </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'Pull\')"> Pull </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'Legs\')"> Legs </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'create\')"> create </button>' +
                                                   '<button class="button-35" onclick="prev(\'PPL\')">Back</button>' +
                                                   '</div>';
      }
      else if (current == '5x5a' || current == '5x5b') {
        document.getElementById(current).innerHTML =    '<div id="5x5" style="display: block; margin: auto;">' +
                                                   '<button class="button-35" onclick="selectCircuit(\'5x5a\')"> A </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'5x5b\')"> B </button>' +
                                                   '<button class="button-35" onclick="selectCircuit(\'create\')"> create </button>' +
                                                   '<button class="button-35" onclick="prev(\'5x5\')">Back</button>' +
                                                   '</div>';
      }
}