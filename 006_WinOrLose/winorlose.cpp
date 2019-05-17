#include <iostream>
using namespace std;

int main () {
  int test_case;
  cin >> test_case;
  int res[test_case];
  for (int i = 0; i < test_case; i++) {
      int number_of_chars;
      cin >> number_of_chars;
      int villians[number_of_chars];
      int heros[number_of_chars];
      int totalVillianStrength = 0;
      int totalHeroStrength = 0;
    for (int j = 0; j < number_of_chars; j++) {
	  cin >> villians[j];
	};

	for (int j = 0; j < number_of_chars; j++) {
	    cin >> heros[j];
	}

	for(int j = 0; j < number_of_chars; j++) {
	    totalHeroStrength += heros[j];
	    totalVillianStrength += villians[j];
	}

	if(totalHeroStrength > totalVillianStrength) {
	    res[i] = 1;
	} else {
	    res[i] = 0;
	}

    }

    for(int i = 0; i < test_case; i++) {
        if(res[i] == 1) {
            cout << "WIN" << "\n";
        } else {
            cout << "LOSE" << "\n";
        }
    }

  return 0;
}
