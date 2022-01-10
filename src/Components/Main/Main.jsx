import React from "react";
import { Container, Wrapper,WrapperImg } from "./Main.elements";
import Avatar from "../../img/avatar.png";
const Main = () => {
  return (
    <Container>
      <Wrapper>
          <WrapperImg>
              <img src={Avatar} alt="" /> 
          </WrapperImg>
       
        <div>
          <h6>Hi There! Im Jonathan Armesto</h6>
          <h5>Full Stack Developer</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
            optio. Necessitatibus vero earum debitis asperiores consequatur cum
            autem rem dolores perferendis ipsum sapiente velit accusamus, magnam
            repellat, voluptatem optio. Voluptatum.
          </p>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Main;
