function countWords(inputWords) {
  var wordCounts = {}
  const reducer = (wordCounts, word) => {
    wordCounts[word] ? wordCounts[word] += 1 : wordCounts[word] = 1
    return wordCounts
  }
  return inputWords.reduce(reducer, {})
}

module.exports = countWords
