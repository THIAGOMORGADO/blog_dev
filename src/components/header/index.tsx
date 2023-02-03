import { Container } from "./style";
import Image from "next/image";
import Logo from '../../assets/logo.svg'
import link from '../../assets/insta.svg'
import insta from '../../assets/t.svg'
import t from '../../assets/linke.svg'

export default function Header() {
  return (
    <Container>
      <a href="#">Luis Antonio</a>
      <nav>
        <ul>
          <li>home</li>
          <li>tags</li>
          <li>About</li>
          <li><Image
            src={link}
            alt="alien-space white logo"
            width={24}
            height={24}
          /></li>
          <li>
            <Image
              src={insta}
              alt="alien-space white logo"
              width={24}
              height={24}
            />
          </li>
          <li><Image
            src={t}
            alt="alien-space white logo"
            width={24}
            height={24}
          /></li>
        </ul>
      </nav>
    </Container>
  )
}