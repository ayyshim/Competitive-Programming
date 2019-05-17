#include<iostream>
#include<stdlib.h>
using namespace std;
 
int main(void){
    int testCase;
    cin >> testCase;
    int tc = 0;
    while(tc < testCase) {
        int number;
        int count = 0;
        cin >> number;
        for(int i = 1; i <= number; i++) {
            if(number%i == 0) {
                count++;
            }
        }
        
        cout << count << endl;
        tc++;
    }
}