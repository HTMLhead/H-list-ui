const titleArray = [
  "네이버",
  "네이버 지도",
  "네이버 웹툰",
  "네이버 클라우드",
  "네이버 카페",
  "네이버 사전",
  "네이버",
  "네이버 지도",
  "네이버 웹툰",
  "네이버 클라우드",
  "네이버 카페",
  "네이버 사전",
];
const thumbnailArray = [
  "https://yt3.ggpht.com/a/AGF-l7-5-hIaLpaYcO4KP1B30jcepRKfwrwli2suxA=s288-mo-c-c0xffffffff-rj-k-no",
  "https://lh3.googleusercontent.com/yB6ePH3QA0EMU8qTqM5tOPtpZ8bZeIYhb9Oi2RHOy9YvK5fdxIlbN1H46QtdHNC_1g=s360-rw",
  "https://lh3.googleusercontent.com/yEh_3Tn28fJWRW6q9GkiUjl6YKNHAllQLEeQ63gS4rF5hpobUbic0jq4bS6BfP80g1E=s360-rw",
  "https://lh3.googleusercontent.com/vvIXRL_fK0t7jqS3neVowUSsWoopT39OgB-fUN26yDT3B0iN4krRjX4GxwASVEDv670=s360-rw",
  "https://lh3.googleusercontent.com/Zt1Ac3OOTTTaSrro-Ji6ttmVHx3qrzUklYeCC3RxTScjWGEyZjlJkqJ8t58z0zWENJb_=s360-rw",
  "https://lh3.googleusercontent.com/ytdLHA3Td0wOlW-e1exeUNVhrqyWXpbsb0MJVt8IjncgyTSwITJ6tsWUGsd2ulGLS1g=s360-rw",
  "https://yt3.ggpht.com/a/AGF-l7-5-hIaLpaYcO4KP1B30jcepRKfwrwli2suxA=s288-mo-c-c0xffffffff-rj-k-no",
  "https://lh3.googleusercontent.com/yB6ePH3QA0EMU8qTqM5tOPtpZ8bZeIYhb9Oi2RHOy9YvK5fdxIlbN1H46QtdHNC_1g=s360-rw",
  "https://lh3.googleusercontent.com/yEh_3Tn28fJWRW6q9GkiUjl6YKNHAllQLEeQ63gS4rF5hpobUbic0jq4bS6BfP80g1E=s360-rw",
  "https://lh3.googleusercontent.com/vvIXRL_fK0t7jqS3neVowUSsWoopT39OgB-fUN26yDT3B0iN4krRjX4GxwASVEDv670=s360-rw",
  "https://lh3.googleusercontent.com/Zt1Ac3OOTTTaSrro-Ji6ttmVHx3qrzUklYeCC3RxTScjWGEyZjlJkqJ8t58z0zWENJb_=s360-rw",
  "https://lh3.googleusercontent.com/ytdLHA3Td0wOlW-e1exeUNVhrqyWXpbsb0MJVt8IjncgyTSwITJ6tsWUGsd2ulGLS1g=s360-rw",
];
const linkArray = [
  "https://www.naver.com",
  "https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko",
  "https://play.google.com/store/apps/details?id=com.nhn.android.webtoon&hl=ko",
  "https://play.google.com/store/apps/details?id=com.nhn.android.ndrive&hl=ko",
  "https://play.google.com/store/apps/details?id=com.nhn.android.navercafe&hl=ko",
  "https://play.google.com/store/apps/details?id=com.nhn.android.naverdic&hl=ko",
  "https://www.naver.com",
  "https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko",
  "https://play.google.com/store/apps/details?id=com.nhn.android.webtoon&hl=ko",
  "https://play.google.com/store/apps/details?id=com.nhn.android.ndrive&hl=ko",
  "https://play.google.com/store/apps/details?id=com.nhn.android.navercafe&hl=ko",
  "https://play.google.com/store/apps/details?id=com.nhn.android.naverdic&hl=ko",
];
const descArray = [
  "네이버 홈페이지로 이동",
  "네이버 지도 앱 페이지로 이동",
  "네이버 웹툰 앱 페이지로 이동",
  "네이버 클라우드 앱 페이지로 이동",
  "네이버 카페 앱 페이지로 이동",
  "네이버 사전 앱 페이지로 이동",
  "네이버 홈페이지로 이동",
  "네이버 지도 앱 페이지로 이동",
  "네이버 웹툰 앱 페이지로 이동",
  "네이버 클라우드 앱 페이지로 이동",
  "네이버 카페 앱 페이지로 이동",
  "네이버 사전 앱 페이지로 이동",
];

document.addEventListener("DOMContentLoaded", () => {
  listUi.createList({
    type: "typeA",
    domElement: "#h-list",
    data: {
      titleArr: titleArray,
      descriptionArr: descArray,
      linkArr: linkArray,
      thumbnailArr: thumbnailArray,
    },
    style: {
      container: {
        width: "500",
        height: "200",
      },
      content: {
        width: "150",
        height: "200",
      },
      title: {
        fontSize: "0.8rem",
        bold: true,
      },
      description: {
        fontSize: "0.3rem",
      },
      border: {
        size: "1",
        color: "#fff",
      },
      selector: {
        color: "#008000",
        opacity: "0.3",
      },
    },
  });
  listUi.createList({
    type: "typeB",
    domElement: "#h-list-grid",
    data: {
      titleArr: titleArray,
      descriptionArr: descArray,
      linkArr: linkArray,
      thumbnailArr: thumbnailArray,
    },
    style: {
      container: {
        width: "auto",
        height: "500",
        column: "5",
      },
      content: {
        width: "150",
        height: "200",
      },
      title: {
        fontSize: "0.8rem",
        bold: true,
      },
      description: {
        fontSize: "0.3rem",
      },
      border: {
        size: "1",
        color: "#fff",
      },
      selector: {
        color: "#008000",
        opacity: "0.3",
      },
    },
  });
});
