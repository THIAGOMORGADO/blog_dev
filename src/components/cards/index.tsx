import {
  Container,
} from "./style";

import Image from "next/image";
import cards01 from '../../assets/image01.png'


export default function Card() {
  return (
    <Container>
      <div>
        <div className="container">
          <Image
            src={cards01}
            alt="alien-space white logo"
            width={371}
            height={298}
          />
          <div className="container-text">
            <span>MINIMALISM</span>
            <h1>Culpa sit Laboris Exercitation ea Fugiat</h1>
            <p>
              Incididunt occaecat et qui dolore consectetur magna. Lorem veniam
              ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim
              proident ad nulla consectetur eu aute ex anim mollit. Anim aute
              exercitation nisi fugiat. Dolor velit excepteur commodo proident
              nulla commodo ullamco labore et esse.
            </p>
          </div>
        </div>
        <div className="container">
          <Image
            src={cards01}
            alt="alien-space white logo"
            width={371}
            height={298}
          />
          <div className="container-text">
            <span>MINIMALISM</span>
            <h1>Culpa sit Laboris Exercitation ea Fugiat</h1>
            <p>
              Incididunt occaecat et qui dolore consectetur magna. Lorem veniam
              ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim
              proident ad nulla consectetur eu aute ex anim mollit. Anim aute
              exercitation nisi fugiat. Dolor velit excepteur commodo proident
              nulla commodo ullamco labore et esse.
            </p>
          </div>
        </div>
        <div className="container">
          <Image
            src={cards01}
            alt="alien-space white logo"
            width={371}
            height={298}
          />
          <div className="container-text">
            <span>MINIMALISM</span>
            <h1>Culpa sit Laboris Exercitation ea Fugiat</h1>
            <p>
              Incididunt occaecat et qui dolore consectetur magna. Lorem veniam
              ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim
              proident ad nulla consectetur eu aute ex anim mollit. Anim aute
              exercitation nisi fugiat. Dolor velit excepteur commodo proident
              nulla commodo ullamco labore et esse.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
