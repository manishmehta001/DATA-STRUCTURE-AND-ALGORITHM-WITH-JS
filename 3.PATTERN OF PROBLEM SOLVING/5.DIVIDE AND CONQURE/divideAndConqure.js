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
const binarySearch = (array, n) => {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (array[middle] !== n && left <= right) {
    if (array[middle] < n) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === n ? middle : -1;
};
