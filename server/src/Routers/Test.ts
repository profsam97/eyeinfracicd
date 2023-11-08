


const helperFunction = (word: string[]) : string | undefined => {

        const wordPlaceholder = [...word];
        const reverse = wordPlaceholder.reverse();
        for (let i = 0; i < word.length; i++){
                if (word[i] === reverse[ i]) {
                        continue;
                }
                return
        }
        return word.join('');
}
export const palindrome = (word : string) => {
        const placeholder : string [] = [];

        const arrayLength  : string[] = word.split('');

        const length : number = arrayLength.length
        const allPalindrome : string[] = []
        for (let i = 0; i <= arrayLength.length; i++){

                for (let j = 0; j <= arrayLength.length; j++) {
                        const splitArray : string[] =  arrayLength.slice(i, j + i)
                        let newWord : string | undefined = helperFunction(splitArray);
                        if (!newWord) continue
                        allPalindrome.push(newWord)
                }

        }
        let longestSubStringPlaceholder : string [] = [];
        for (let j =0; j < allPalindrome.length; j++){
                const length = allPalindrome[j].length;
                if (longestSubStringPlaceholder.length === 0){
                        longestSubStringPlaceholder.push(allPalindrome[j])
                        continue

                }
                if (longestSubStringPlaceholder[0].length < length){
                        longestSubStringPlaceholder = []
                        longestSubStringPlaceholder.push(allPalindrome[j])
                }
        }
        return longestSubStringPlaceholder[0]

}

