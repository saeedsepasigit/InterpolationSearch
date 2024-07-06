function interpolationSearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && key >= arr[low] && key <= arr[high]) {
        if (low === high) {
            if (arr[low] === key) return low;
            return -1;
        }
        
        // محاسبه موقعیت احتمالی
        let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (key - arr[low]));
        
        // مقایسه عنصر
        if (arr[pos] === key) return pos;
        
        // تنظیم بازه جستجو
        if (arr[pos] < key) low = pos + 1;
        else high = pos - 1;
    }
    return -1;
}

// تست الگوریتم
let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
let key = 18;
let index = interpolationSearch(arr, key);

if (index !== -1) console.log(`عنصر در شاخص ${index} پیدا شد.`);
else console.log("عنصر پیدا نشد.");
