

export  async function GET() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "application/json",
    },
  });

  if(!res.ok){
    return Response.json(

        {error: "External API failed" , status : res.status },
        {status : 502} 
    );
    
  }

  const data = await res.json();
  return Response.json(data) ;

 
}

/**
 * 
 * ফাইলের নাম route.js হতে হবে। ফোল্ডারের পথ app/api/fitlog মানে ঠিকানা হবে /api/fitlog।
export async function GET() মানে কেউ এই ঠিকানায় তথ্য চাইলে (GET অনুরোধ) এই ফাংশন চলবে।
await fetch(...) বাইরের API-তে অনুরোধ পাঠায়। await মানে উত্তর না আসা পর্যন্ত অপেক্ষা করো। await ব্যবহার করতে ফাংশনের আগে async লিখতে হয়।
cache: "no-store" মানে পুরোনো জমানো উত্তর নয়, প্রতিবার নতুন করে আনো।
headers অংশে User-Agent দিয়ে জানানো হচ্ছে, অনুরোধটি একটি সাধারণ ব্রাউজার থেকে আসছে। কিছু সার্ভার পরিচয়হীন অনুরোধ আটকে দেয়, সেটা এড়ানোর জন্য।
res.ok হলো উত্তর সফল কি না। সফল না হলে আমরা একটি ত্রুটির বার্তা ও কোড (status) ফেরত দিই, যাতে সমস্যা ধরা সহজ হয়।
res.json() উত্তরের লেখাকে ব্যবহারযোগ্য তালিকায় রূপান্তর করে।
 */
