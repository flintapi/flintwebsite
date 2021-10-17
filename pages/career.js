// import HeroMain from "../public/hero-main.svg";
import Icon from "@ant-design/icons";
import { Card, Col, Collapse, Row } from "antd";
import {
  Button,
  Heading,
  Link,
  majorScale,
  Pane,
  PlayIcon,
  Text,
} from "evergreen-ui";
import Head from "next/head";
import { withLayout } from "../components/layout";
import GoogleDevs from "../public/career-icons/google-devs.svg";
import IdeaBulb from "../public/career-icons/idea-bulb.svg";
import Community from "../public/career-icons/people.svg";

const { Panel } = Collapse;

function Home({ size }) {
  return (
    <>
      <Head>
        <title>FlintApi</title>
        <meta
          name="description"
          content="A simple API solution to blockchain complexity"
        />
        <link rel="icon" href="/ico.png" type="image/x-icon" />
      </Head>
      <Row
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#D8D8D8",
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
        <Col xs={{ span: 22 }} lg={{ span: 18 }} style={{}}>
          <Row
            gutter={[32, 32]}
            style={{
              // width: "100vw",

              margin: 0,
              padding: 0,
              backgroundColor: "inherit",
            }}
          >
            <Col xs={{ span: 24 }} lg={{ span: 14 }}>
              <Pane
                flex={3}
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                width="100%"
                height="100%"
              >
                <h1
                  style={{
                    fontSize: 50,
                    marginBottom: 30,
                    fontWeight: "bolder",
                    lineHeight: "1.2em",
                  }}
                >
                  LET’S BUILD THE
                  <br /> FUTURE TOGETHER
                  <br /> AT <b style={{ color: "#FFBD59" }}>FLINT</b>
                </h1>
                <Text size={600} marginBottom={30}>
                  Does blockchain technology fascinate you?
                  <br />
                  Do you intend to work in a culture of self
                  <br /> improvement and innovation, then come work
                  <br /> with us.
                </Text>
                <Pane display="flex" alignItems="center" marginTop={30}>
                  <Button appearance="primary" marginRight={25}>
                    SEE OPEN ROLES
                  </Button>
                  <Link
                    color="black"
                    fontWeight="bold"
                    textTransform="capitalize"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    Watch Demo <PlayIcon />
                  </Link>
                </Pane>
              </Pane>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 10 }}>
              <Pane
                display="flex"
                flex={2}
                backgroundImage="url('/career-bg.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                width="100%"
                minHeight={440}
              ></Pane>
            </Col>
          </Row>
          <Row style={{ width: "100%", margin: 0, padding: 0, marginTop: 120 }}>
            <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
            <Col xs={{ span: 22 }} lg={{ span: 18 }}>
              <Row
                gutter={[16, 16]}
                style={{
                  width: "100%",
                  margin: 0,
                  padding: 0,
                }}
              >
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 8 }}
                  style={{ minHeight: 210 }}
                >
                  <Card
                    hoverable
                    bodyStyle={{ padding: "60px auto" }}
                    style={{ height: "100%", textAlign: "center" }}
                  >
                    <Icon component={IdeaBulb} style={{ fontSize: 60 }} />
                    <br />
                    <br />
                    <Text textAlign="center">
                      We create the culture to bring the best experience to
                      developers, and create new frontier in blockchain
                      development.
                    </Text>
                  </Card>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 8 }}
                  style={{ minHeight: 210 }}
                >
                  <Card
                    hoverable
                    bodyStyle={{ padding: "60px auto" }}
                    style={{ height: "100%", textAlign: "center" }}
                  >
                    <Icon component={GoogleDevs} style={{ fontSize: 60 }} />
                    <br />
                    <br />
                    <Text textAlign="center">
                      We make implementation of blockchain solution super easy
                      for developers as simple as plug and mint.
                    </Text>
                  </Card>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 8 }}
                  style={{ minHeight: 210 }}
                >
                  <Card
                    hoverable
                    bodyStyle={{ padding: "60px auto" }}
                    style={{ height: "100%", textAlign: "center" }}
                  >
                    <Icon component={Community} style={{ fontSize: 60 }} />
                    <br />
                    <br />
                    <Text textAlign="center">
                      We seek passionate and respectful people to join our ever
                      growing community of skilled team.
                    </Text>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
          </Row>
        </Col>
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
      </Row>

      <Row
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
          backgroundColor: "white",
        }}
      >
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
        <Col xs={{ span: 22 }} lg={{ span: 18 }}>
          <Pane width="100%" textAlign="center" marginY={150}>
            <Heading size={900}>OPEN ROLES</Heading>
          </Pane>

          <Row
            gutter={[16, 64]}
            style={{
              width: "100%",
              paddingLeft: 80,
              paddingRight: 80,
              marginBottom: 150,
            }}
          >
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <Pane
                flex={3}
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                width="100%"
                height="100%"
              >
                <Heading size={400}>Backend Developer</Heading>
                <Text size={300} marginBottom={20}>
                  html, css, javascript, react
                </Text>
              </Pane>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Pane display="flex" flex={2}>
                <Button appearance="primary" marginRight={25}>
                  APPLY
                </Button>
              </Pane>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <Pane
                flex={3}
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                width="100%"
                height="100%"
              >
                <Heading size={400}>UI/UX Developer</Heading>
                <Text size={300} marginBottom={20}>
                  React, copywriter
                </Text>
              </Pane>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Pane display="flex" flex={2}>
                <Button appearance="primary" marginRight={25}>
                  APPLY
                </Button>
              </Pane>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
      </Row>

      <Row
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
          backgroundColor: "#D8D8D8",
        }}
      >
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
        <Col
          xs={{ span: 22 }}
          lg={{ span: 18 }}
          style={{ paddingTop: 150, paddingBottom: 150 }}
        >
          <Pane
            paddingY={majorScale(4)}
            display="flex"
            flexDirection="column"
            // height={550}
            alignItems="center"
            justifyContent="space-between"
            background="transparent"
          >
            <Heading
              size={900}
              color="#000000"
              marginBottom={20}
              textAlign="center"
            >
              Enable anyone to build on the
              <br /> <b style={{ color: "#FFBD59" }}>blockchain</b> and Mint{" "}
              <b style={{ color: "#FFBD59" }}>NFTs</b>
            </Heading>
            <Pane>
              <Button appearance="primary" marginRight={10}>
                WATCH DEMO
              </Button>
              <Button>GET STARTED</Button>
            </Pane>
          </Pane>
          <Row
            gutter={[16, 16]}
            style={{ width: "100%", margin: 0, padding: 0 }}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <Pane
                display="flex"
                flexDirection="column"
                flex={1}
                paddingY={majorScale(6)}
              >
                <Heading size={700} marginBottom={30}>
                  EXCEPTIONAL SUPPORT
                </Heading>
                <Heading size={500}>HERE TO HELP</Heading>
                <Text>
                  Our engineers and architects are here to assist you. We’ve got
                  your back 24/7, and you can count on enterprise-class quality
                  support and help whenever you need us.
                </Text>
              </Pane>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <Pane
                flex={1}
                height="100%"
                minHeight={200}
                display="flex"
                padding={majorScale(6)}
                backgroundImage="url('/support.png')"
                backgroundSize="contain"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              ></Pane>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
      </Row>
    </>
  );
}

export default withLayout(Home);
