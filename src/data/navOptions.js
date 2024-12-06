const navOptions = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/AboutUs",
    subOptions: [
      {
        label: "Introduction",
        path: "/AboutUs/Introduction",
        header: "Introduction",
        description:
          "Vrinnova stands out as your trusted IT partner, dedicated to delivering cutting-edge technology solutions.",
      },
      {
        label: "Mission",
        path: "/AboutUs/Mission",
        header: "Our Mission",
        description:
          "At Vrinnova, our mission is to transform businesses and lives through efficient IT services, delivering cost savings and unparalleled customer satisfaction.",
      },
      {
        label: "Vision",
        path: "/AboutUs/Vision",
        header: "Our Vision",
        description:
          "We envision a future where technology seamlessly empowers every business to thrive in a rapidly evolving digital landscape. We strive to be the catalyst for innovation and efficiency, unlocking the full potential of our clients while fostering an environment of collaboration, creativity, and excellence. Our journey is not just about technology; it’s about building lasting relationships and making a meaningful impact on lives and communities.",
      },
      { label: "Core Values", path: "/AboutUs/CoreValues", header: "Our Core Values" },
    ],
  },
  {
    label: "IT Services",
    path: "/Service",
    description: "We provide the following services",
    subOptions: [{ label: "List of Portfolios", path: "/Service/Portfolios" }],
  },
  {
    label: "Let's Talk",
    path: "/Contact",
    subOptions: [
      { label: "Contact Us", path: "/Contact/ContactUs", header: "Contact Us" },
      { label: "Support", path: "/Contact/Support", header: "Support" },
      { label: "Sales", path: "/Contact/Sales", header: "Sales" },
    ],
  },
];

export default navOptions;
