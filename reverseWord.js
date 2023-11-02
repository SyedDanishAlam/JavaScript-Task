function reverseWord(sentence) {
    let reversedSentence = "";
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                word += sentence[i];
            }

            let reversedWord = "";
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }

            if (reversedSentence.length === 0) {
                reversedSentence = reversedWord;
            } else {
                reversedSentence += " " + reversedWord;
            }

            word = "";
        } else {
            word += sentence[i];
        }
    }

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWord(inputSentence);
console.log(reversedSentence);

