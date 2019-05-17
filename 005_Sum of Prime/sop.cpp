#include<iostream>
#include<stdlib.h>
using namespace std;
 
int primeTotal(int low, int high) {
    int total = 0;
    if(low == 1) {
        low = 2;
    }
    while (low <= high)
    {
        int flag = 0;
 
        for(int i = 2; i <= low/2; ++i)
        {
            if(low % i == 0)
            {
                flag = 1;
                break;
            }
        }
 
        if (flag == 0)
            total += low;
 
        ++low;
    }
    return total;
}
 
int main(void){
    int testCase;
    cin >> testCase;
    for(int i = 0; i < testCase; i++) {
        int l,r;
        cin >> l >> r;
        cout << primeTotal(l,r) << endl;
    }
}