import googleLogo from "./assets/icons8-google-48.png";
import facebookLogo from "./assets/icons8-facebook-48.png";
import twitterLogo from "./assets/icons8-twitter-48.png";
import linkedInLogo from "./assets/icons8-linkedin-48.png";

const config = [
  {
    type: "LineChart",
    order: 2,
    position: "7.8",
    size: {
      width: "100%",
      height: "300px",
    },
    dataSource: [
      ["Months", "2022", "2023"],
      ["January", 35, 40],
      ["February", 30, 45],
      ["March", 40, 36],
      ["April", 46, 42],
      ["May", 35, 50],
      ["June", 41, 55],
    ],
    priority: 2,
  },

  {
    type: "PieChart",
    order: 3,
    position: "4",
    size: {
      width: "100%",
      height: "300px",
    },
    dataSource1: [
      ["Task", "Socials"],
      ["Facebook", 45],
      ["Youtube", 25],
      ["Google Ads", 15],
      ["Instagram", 8],
      ["NewsLetter", 7],
    ],
    dataSource2: [
      ["Task", "Socials"],
      ["Facebook", 40],
      ["Youtube", 20],
      ["Google Ads", 20],
      ["Instagram", 13],
      ["NewsLetter", 7],
    ],
    dataSource3: [
      ["Task", "Socials"],
      ["Facebook", 45],
      ["Youtube", 25],
      ["Google Ads", 10],
      ["Instagram", 8],
      ["NewsLetter", 13],
    ],
    priority: 3,
  },

  {
    type: "ColumnChart",
    order: 5,
    position: "7.8",
    size: {
      width: "100%",
      height: "300px",
    },
    dataSource: [
      ["Continent", "Visits", { role: "style" }],
      ["Asia", 26.6, "#1C3353"],
      ["America", 27.7, "#467FCF"],
      ["Europe", 19.3, "#7EA5DD"],
      ["Africa", 15.3, "#58739A"],
      ["Other", 11.1, "color: #7194C6"],
    ],
    priority: 5,
  },

  {
    type: "Traffic-widget",
    order: 4,
    position: "4",
    dataSource: [
      {
        name: "Google",
        amount: "323.76K",
        logo: googleLogo,
      },
      {
        name: "Facebook",
        amount: "285.58K",
        logo: facebookLogo,
      },
      {
        name: "Twitter",
        amount: "176.46K",
        logo: twitterLogo,
      },
      {
        name: "LinkedIn",
        amount: "132.54K",
        logo: linkedInLogo,
      },
    ],
    priority: 4,
  },

  {
    type: "Summary-widget",
    order: 1,
    position: "2.8",
    size: {
      height: "200px",
    },
    dataSource: [
      {
        amount: "685K",
        summaryName: "Monthly Sales",
        color: "#d1e9fc",
      },
      {
        amount: "1.23M",
        summaryName: "Total Users",
        color: "#d1e9fc",
      },
      {
        amount: "$11K",
        summaryName: "Total Profit",
        color: "#d1e9fc",
      },
      {
        amount: "105M",
        summaryName: "Total Website Views",
        color: "#d1e9fc",
      },
    ],
    priority: 1,
  },

  {
    type: "Users-widget",
    order: 6,
    position: "12",
    dataSource: [
      {
        id: 1,
        name: "Mike",
        company: "ABC Company",
        role: "Web Developer",
        status: "Active",
        verified: "No",
      },
      {
        id: 2,
        name: "Ali",
        company: "XYZ Company",
        role: "Graphic Designer",
        status: "Inactive",
        verified: "Yes",
      },
      {
        id: 3,
        name: "Robert",
        company: "JKL Company",
        role: "Data Scientist",
        status: "Inactive",
        verified: "Yes",
      },
      {
        id: 4,
        name: "John",
        company: "QWE Company",
        role: "ML Developer",
        status: "Inactive",
        verified: "No",
      },
    ],
    priority: 6,
  },
];

export default config;
