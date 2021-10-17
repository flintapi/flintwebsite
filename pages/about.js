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
import Blockchain from "../public/section-icons/blockchain.svg";
import Rocket from "../public/section-icons/rocket.svg";
import Support from "../public/section-icons/support.svg";
import Uptime from "../public/section-icons/uptime.svg";

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
            <Col xs={{ span: 24 }} lg={{ span: 18 }}>
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
                  ABOUT FLINT
                </h1>
                <Text size={600} marginBottom={30}>
                  We want to build the future where game developers can leverage
                  <br />
                  on the blockchain technology without the rigor of learning
                  blockchain programming for each and every blockchain network
                  <br /> they intend to use.
                </Text>
                <Text size={600}>
                  A simple plug and mint multi-chain NFT API that services
                  <br /> every form of games, from consoles, dapp, sdk, and the
                  lots of them..
                  <br />
                  With easy integration to wallets and closed and open NFT
                  marketplace.
                </Text>
                <Pane display="flex" alignItems="center" marginTop={30}>
                  <Button appearance="primary" marginRight={25}>
                    GET STARTED
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
            <Col xs={{ span: 24 }} lg={{ span: 6 }}></Col>
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
                  lg={{ span: 12 }}
                  style={{ minHeight: 210 }}
                >
                  <Card
                    hoverable
                    bodyStyle={{ padding: "60px auto" }}
                    style={{ height: "100%" }}
                  >
                    <Heading size={600} marginBottom={22} color="#FFBD59">
                      <Icon component={Uptime} /> 99.9% UPTIME
                    </Heading>
                    <Text textAlign="left">
                      We guarantee 99,9% uptime with great TPS for any
                      blockchain network you choose. Write it once, deploy it
                      everywhere. No need for rework.
                    </Text>
                  </Card>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 12 }}
                  style={{ minHeight: 210 }}
                >
                  <Card
                    hoverable
                    bodyStyle={{ padding: "60px auto" }}
                    style={{ height: "100%" }}
                  >
                    <Heading size={600} marginBottom={22} color="#FFBD59">
                      <Icon component={Blockchain} /> MULTI-CHAIN
                    </Heading>
                    <Text textAlign="left">
                      Our API connects to all available blockchain network
                      available in the space. We unify all blockchain network
                      into one simple API
                    </Text>
                  </Card>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 12 }}
                  style={{ minHeight: 210 }}
                >
                  <Card
                    hoverable
                    bodyStyle={{ padding: "60px auto" }}
                    style={{ height: "100%" }}
                  >
                    <Heading size={600} marginBottom={22} color="#FFBD59">
                      <Icon component={Support} /> SUPPORT
                    </Heading>
                    <Text textAlign="left">
                      Good documentation and community resources to make
                      implementation smooth and easy. With ever ready customer
                      support.
                    </Text>
                  </Card>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 12 }}
                  style={{ minHeight: 210 }}
                >
                  <Card
                    hoverable
                    bodyStyle={{ padding: "60px auto" }}
                    style={{ height: "100%" }}
                  >
                    <Heading size={600} marginBottom={22} color="#FFBD59">
                      <Icon component={Rocket} /> SCALABLE
                    </Heading>
                    <Text textAlign="left">
                      No need to learn blockchain programming, we take care of
                      all that. so you can grow as quickly as you need to keep
                      up with your user base.
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
          <Pane width="100%" textAlign="center" marginTop={150}>
            <Button appearance="primary" marginY={60}>
              GET STARTED
            </Button>
            <br />
            <Text color="#FFBD59" size={500}>
              A DEVELOPER SHOULD BE ABLE TO SERVICE THEIR GAMERS
              <br /> WITH TRADEABLE NFT ASSET WITHOUT STRESS ON ANY
              <br /> BLOCKCHAIN NETWORK
            </Text>
          </Pane>

          <Pane
            width="100%"
            backgroundImage="url('/networks-row.svg')"
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            minHeight={150}
            marginBottom={50}
          ></Pane>

          <Row
            style={{
              width: "100%",
              margin: 0,
              paddingLeft: 80,
              paddingRight: 80,
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
                <h1
                  style={{
                    fontSize: 30,
                    marginBottom: 30,
                    fontWeight: "bolder",
                    lineHeight: "1.2em",
                  }}
                >
                  COME WORK WITH US
                </h1>
                <Text size={500} marginBottom={20}>
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
                </Pane>
              </Pane>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
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
