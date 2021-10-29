import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
export default () => {
  return (
    <div className="JumbotronFooter jumby" fluid>
      <p className="pFooter">
        Tc-Music & TC-Crew® are registred marks of TC-Crew Group made at
        Plataforma 5 by:
      </p>
      <Container className="JumbotronFooter">
        <Row className="containerFooter">
          <Col xs={6} md={4}>
            <Image
              className="imagesFoot"
              src="https://cdn.discordapp.com/attachments/764235703889428490/776602326680207400/CV.jpg"
              roundedCircle
            />
            <h6>Nahuel Bonader</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="imagesFoot"
              src="https://cdn.discordapp.com/attachments/757364879496839168/776842818093973514/emi.jpg"
              roundedCircle
            />

            <h6>Emiliano Cantisani</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="imagesFoot"
              src="https://lh3.googleusercontent.com/-plptZ70Mrj0/X6FsvePpACI/AAAAAAAADB8/CmCwRaEjKyYxaLQh4jsRJQFcSxbyDDVYACEwYBhgLKtQDAL1Ocqz2lunCfmutbioQ2Z2Ah_jfngq3kKgG9SAGbN4schmGzO5I_pY-ITtRCQ2YgYS7mvs05Dm_4La0HMm8j0HV_6iGdqG5ZspifeA8bK4X-FNDsECA08paBCN7VcerwbbSaftBsPpW1CN0q2J8-fIe80Z744uGQiMm7z5aUWNGEf-lSl4437wL8PrwBcDHJz3Ex2NF6OJmgG96wonMdx7MsjKWUYCPot4KL6n1EosGiIPvngEjhGyx3atuB7bUtlCU2peO2RapbJs4YK8OX7Wp4Dwcl_BqpWsOj1Yxv1jyupurvho0Da-7zT7iP4aJJRfyrQ1Bs9ImrChGCROi8mI256pA06dmRMcK7KMYYtw3qi1a-YWvp4NN7MRXZSc5KW5aBQCEH4aaPRjsjtn_4YmABxWugFzobb6jKmBnP-EYm1e60S-H_GA1ZCW3f865h-HKMDB0swXdzfjIozhbnRoB2FHPHNHgrl4t95Gjeh87TaysodEx8ZVzUFFK2G4F_CFWonwwigYLpptq6NX-Ojag1LEBzQI-ZL1NCpYhIKBGxvLyH2hpJuBRtKDEIY3Q8sOXc6Yv3Zgzeayf06DhaqsoQT9EYV5ZSnkPL65hT_xF2t13MIb7tv0F/w140-h140-p/20191020_153150v2.jpg"
              roundedCircle
            />

            <h6>Alejandro Tartaglia</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="imagesFoot"
              src="https://los40es00.epimg.net/los40/imagenes/2019/11/28/musica/1574941974_409983_1574943522_miniatura_normal.jpg"
              roundedCircle
            />

            <h6>Diego Garber</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="imagesFoot"
              src="https://www.facebook.com/photo/?fbid=10210677951961590&set=a.1548480228575"
              roundedCircle
            />
            Yherard Rojas
          </Col>
        </Row>
      </Container>
    </div>
  );
};
