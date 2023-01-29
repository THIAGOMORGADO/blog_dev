import { Container } from "./style";
import Image from "next/image";
import banner from '../../assets/banner.png'


export default function Banner() {
  return (
    <Container>
      <div>
        <h1>
          Make better <br />
          coffee
        </h1>
        <p>why learn how to blog?</p>
      </div>
      <Image
        src={banner}
        alt="alien-space white logo"
        width={476}
        height={323}
      />
    </Container>
  )
}