#include<bits/stdc++.h>
using namespace std;
void pairReverse(int len, int* arr){
    for(int i =0 ; i+1<len ; i+=2){
        swap(arr[i],arr[i+1]);
    }
}
int main(){
   int arr[] = {20,30,10,40,50};
   pairReverse(5, arr);
   for(int i = 0 ; i<5 ; i++){
       cout<<arr[i]<<" ";
   }
}