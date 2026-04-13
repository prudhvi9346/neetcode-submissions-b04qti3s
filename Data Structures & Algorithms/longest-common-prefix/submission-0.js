class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(!strs.length) return "";
        let res ="";
        for(let i =0; i < strs[0].length;i++){
             for(let j=1; j<=strs.length -1; j++){
                if(i >= strs[j].length  || strs[0][i] !== strs[j][i]){
                    return res;
                }
             }
                res += strs[0][i];
        }
        return res;
    }
}
