import { Frame, List } from "@react95/core";
import { Mail } from "@react95/icons";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contactLinks = [
  {
    icon: <FaGithub size={24} />,
    label: "GitHub",
    url: "https://github.com/WizardCarp85",
  },
  {
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/yashkumar-nimje-75a824323/",
  },
  {
    icon: <SiLeetcode size={24} />,
    label: "LeetCode",
    url: "https://leetcode.com/u/Wizardcarp85/", // replace
  },
  {
    icon: <Mail variant="32x32_4" />,
    label: "Gmail",
    url: "mailto:yashkumar.nimje2024@nst.rishihood.edu.in",
  },
];

const Contact = () => (
  <Frame bg="white" boxShadow="in" style={{ padding: 24, minWidth: 320 }}>
    <h2 style={{ marginTop: 0, marginBottom: 16, fontFamily: "MS Sans Serif", fontSize: 22, color: "#222" }}>
      Contact Me
    </h2>
    <List>
      {contactLinks.map(({ icon, label, url }) => (
        <List.Item key={label} icon={icon}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#222", fontFamily: "MS Sans Serif" }}
          >
            {label}
          </a>
        </List.Item>
      ))}
    </List>
  </Frame>
);

export default Contact;