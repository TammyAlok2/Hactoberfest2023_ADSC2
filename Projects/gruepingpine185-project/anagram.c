// const int CHAR = 256;
// bool areanagram(string &s1, string &s2){
//     if(s1.length()!= s2.length()){
//         return false;
//     }
//     else{
//         int count[CHAR] = {0};
//         for(int i=0;i<s1.length();i++){
//             count[s1[i]]++;
//             count[s2[i]]--;
//         }
//         for(int i=0;i<s1.length();i++){
//             if(count[i]!=0)
//                 return false;
//         }return true;
//     }
// }
//  int main(){
//     string s1 = "listen";
//     string s2 = "silent";
    
//     if(areanagram(s1,s2)==1)
//         cout<<"are anagram";
//     else
//         cout<<"not anagram";
        
//     return 0;
//  }

#include <stdlib.h>
#include <string.h>
#include <stdio.h>


int is_anagram(char* _str1, char* _str2) {
    if(!_str1 || !_str2) return 0;
    size_t s1_len = strlen(_str1);
    if(s1_len != strlen(_str2)) return 0;

    char arr[256] = {0};
    for(size_t i = 0; i < s1_len; i++) {
        arr[_str1[i]]++;
        arr[_str2[i]]--;
    }

    for(size_t i = 0; i < 256; i++) {
        if(arr[i] != 0) return 0;
    }

    return 1;
}

int main(void) {
    printf("%d\n", is_anagram("stop", "pots"));
}
