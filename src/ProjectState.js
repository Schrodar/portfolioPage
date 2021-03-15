//Import Images
import variation from "./img/EGNAVAAL.jpg";
import gasp from "./img/gasp.jpg";
import covid from "./img/covid.jpg";
import rav from "./img/räv.jpg";
import gasp2 from "./img/gasp3.jpg";
import blacknwhite from "./img/blacknwhite.jpg";

export const ProjectState = () => {
  return [
    {
      title: "Digital Art",
      mainImg: variation,
      secondaryImg: rav,
      url: "/work/the-variation",
      awards: [
        {
          title: "Assembly picture ",
          description:
            "",
        },
        {
          title: "Fox",
          description:
            "",
        },
        {
          title: "Mosi own styles",
          description:
            "",
        },
      ],
    },
    {
      title: "Nipple twizzt",
      mainImg: gasp,
      url: "/work/cartoon",
      secondaryImg: gasp2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "10 oute of ten",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "to trong",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Black and white",
      mainImg: covid,
      url: "/work/the-good-mosi",
      secondaryImg: blacknwhite,
      awards: [
        {
          title: "Mosi is the artis of the 20th century",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look but a brutal truth",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Love at first sight",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};

