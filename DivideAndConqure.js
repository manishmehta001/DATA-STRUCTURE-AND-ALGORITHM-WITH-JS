/*=========================================drycode=============================================================
humlog ek sorted array lengey
uss array mai n ki index position nikalegey
agar n nahi mila toh - 1 return karegey
                      min                       max
[1, 2, 3, 4, 5, 6, 7, 9, 8, 10, 11, 12, 13, 14, 15, 46, 17, 18, 19, 20], 13
sabse pehle ek midpoint letey hai
--> math.floor(araary.lngth / 2)
ek min point kiu ki divide karna hai harbar
ek maximum point
minim point 0 index se chalu hoga
aur maxim point array.length hoga
--> macimum aur minimum ko move kiu aur kab kare
--> ye points move tabhi hongi jab n se midpoint se n ko compare karwayegey
--> logic
ek logic ye hai ki midpoint n se kam hogi
{
    if (arr[midpoint] < n) {
        min = mid + 1
        midpoint = (max + min) / 2;
    }
}
aur ek logic ye hogi ki midpoint n se zyada ho sakta hai
{
    if (arr[midpoint] > n) {
        max = mid - 1
        mid = (max - min) / 2
    }
}
aur k ye ki midpoint n se == hogi
=================================================================================================================*/
function searchElement(array, n) {
    
    let midpoint = parseInt(array.length / 2);
        let min = 0;
        let max = array.length - 1;
        while (min < max) {
            if (array[midpoint] < n) {
                min = midpoint + 1;
                midpoint = parseInt(max + min) / 2;
            } else if (array[midpoint] > n) {
                max = midpoint - 1;
                midpoint =parseInt(max + min) / 2;
            }
            else if (array[max] == n) {
                return max;
            } else if (array[min] == n) {
                return min;
            } 
        }
        return -1;
        
    }
    

