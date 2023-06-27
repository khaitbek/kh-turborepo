interface NavItem {
  title: string;
  href: string;
  description: string;
  img: string;
}

export const services: NavItem[] = [
  {
    title: "Qur'on",
    href: "/quran",
    description:
      "30 pora Qur'oni Karimning arabcha matni, tafsiri va audiosidan bahramand bo'ling!",
    img: "https://static.vecteezy.com/system/resources/previews/012/628/567/original/3d-al-quran-illustration-free-png.png",
  },
  {
    title: "Namoz vaqtlari",
    href: "/prayer",
    description:
      "Har kunlik, oylik va yillik namoz vaqtlarini kuzating. Namozni o'z vaqtida o'qing!",
    img: "https://www.learnreligions.com/thmb/U4Ze56Kz0eO0lTtWYUybNVowzOk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/islamic-prayer-timings-2003811-final-updatedlogo-9221178d55c849bf8e0addebd96d2045.jpg",
  },
  {
    title: "Azon",
    href: "/adhan",
    description:
      "Mohir va xushovoz o'zbek muazzinlari tomonidan aytilgan betakror azon ovozlaridan bahramand bo'ling!",
    img: "https://muslim-page.netlify.app/azan.401d3e52.jpg",
  },
  {
    title: "Savol-javob",
    href: "/quiz",
    description:
      "Muqaddas dinimiz haqidagi bilimlaringizni sinovdan o'tkazmoqchimisiz? Savol-javob sahifamizga marhamat!",
    img: "https://i.etsystatic.com/34658854/r/il/50f03d/4635241837/il_fullxfull.4635241837_239y.jpg",
  },
];
