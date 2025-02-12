// Vocabulary List: You can add more words and meanings
const vocabulary = [
    // Minggu 1
    { word: "子", meaning: "ねずみ" },{ word: "丑", meaning: "うし" },{ word: "寅", meaning: "とら" },{ word: "卯", meaning: "うさぎ" },{ word: "辰", meaning: "たつ" },{ word: "巳", meaning: "へび" },{ word: "午", meaning: "うま" },{ word: "未", meaning: "ひつじ" },{ word: "申", meaning: "さる" },{ word: "酉", meaning: "とり" },{ word: "戌", meaning: "いぬ" },{ word: "亥", meaning: "いのしし" },
    
];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button and hide "Show Vocab"
    document.getElementById("show-meaning").style.display = "inline";
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").style.display = "none";
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").style.display = "inline";
  }
  
