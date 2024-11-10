import Link from "next/link";
import "./style.css";
import Image from "next/image";
import { MdCloudDownload } from "react-icons/md";

function Header() {
  return (
    <div id="main">
      <div id="picture">
        <Image src={"/title.jpeg"} height={50} width={100} alt="picture"></Image>
      </div>
      <h2>AS INSTITUTE</h2>
      <div id="navbar">
        <Link href={"/"} target="_blank">
          Home
        </Link>
        <Link href={"#about"} target="_blank">
          About
        </Link>
        <Link href={"#projects"} target="_blank">
          Projects
        </Link>
        <Link href={"#skills"} target="_blank">
          Skills
        </Link>
        <Link href={"#contact"} target="_blank">
          Contact
        </Link>
      </div>
      <div id="button">
        <button>
          Download CV <MdCloudDownload />
        </button>
      </div>
    </div>
  );
}
export default Header;
