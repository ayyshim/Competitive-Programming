#include<iostream>
#include<stdlib.h>
using namespace std;
int main(void) {
    int n;
    cin >> n;
    int vals[n];
    for(int i = 0; i < n; i++) {
        cin >> vals[i];
    }
    
    int q;
    cin >> q;
 
    for(int i = 0; i < q; i++) {
        int count = 0;
        int queryOption, query;
        cin >> queryOption >> query;
        if(queryOption == 0) {
            for(int j = 0; j < n; j++) {
                if(vals[j] >= query) {
                    count++;
                }
            }
        } else {
            for(int j = 0; j < n; j++) {
                if(vals[j] > query) {
                    count++;
                }
            }
        }
        cout << count << endl;
    }
    
}