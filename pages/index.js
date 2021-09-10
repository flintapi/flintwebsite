import { Col, Collapse, Row } from "antd";
import {
  Button,
  Card,
  Heading,
  majorScale,
  MinusIcon,
  Pane,
  PlusIcon,
  Text,
} from "evergreen-ui";
import Head from "next/head";
import Image from "next/image";
import { withLayout } from "../components/layout";

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
        gutter={[32, 32]}
        style={{
          width: "100vw",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          backgroundColor: "white",
        }}
      >
        <Col xs={{ span: 24 }} lg={{ span: 16 }}>
          <Pane
            flex={3}
            // padding={majorScale(6)}
            paddingLeft={majorScale(9)}
            paddingRight={majorScale(9)}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            width="100%"
            height="100%"
          >
            <Heading size={900} marginBottom={30}>
              MULTI-CHAIN NFT
              <br /> API FOR GAME
              <br /> DEVELOPERS
            </Heading>
            <Text size={600}>
              FLINT MULTI-CHAIN API enables developers to build next generation
              games
              <br /> with APIs that deliver relevant and tradeable NFT assets
              <br /> in milliseconds.
            </Text>
            <Pane display="flex" alignItems="center" marginTop={30}>
              <Button appearance="primary" marginRight={12}>
                GET STARTED WITH DOCS
              </Button>
              <Button>DEMO</Button>
            </Pane>
          </Pane>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Pane
            display="flex"
            flex={2}
            backgroundImage="url('/hero-Image-1.png')"
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            width="100%"
            height="100%"
            minHeight={540}
          ></Pane>
        </Col>
      </Row>
      <Pane
        is="section"
        paddingY={majorScale(7)}
        paddingX={majorScale(5)}
        display="flex"
        flexDirection="column"
        // height={550}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size={600}>NFT API THAT ACCESS MULTI CHAIN NETWORK</Heading>
        <Pane
          width="100%"
          backgroundImage="url('/chain-grid-bg.png')"
          backgroundSize="contain"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          minHeight={350}
          marginY={20}
        ></Pane>
        <Card
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          background="tint2"
          backgroundImage="url('/folk-pattern-black.png')"
          backgroundSize="contain"
          backgroundPosition="center"
          backgroundRepeatX="repeat"
          backgroundRepeatY="repeat"
          paddingY={majorScale(4)}
          paddingX={majorScale(6)}
          width="100%"
          borderRadius={20}
        >
          <Row
            gutter={[32, 32]}
            style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
          >
            <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
              <Pane display="flex" flexDirection="column">
                <Image src="/logo-white.png" alt="" height={40} />
                <Button appearance="primary" height={majorScale(5)}>
                  REQUEST A DEMO
                </Button>
              </Pane>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
              <Pane
                display="flex"
                flexDirection="column"
                width="100%"
                alignItems="end"
                justifyContent="center"
              >
                <Heading size={800} textTransform="uppercase" color="white">
                  One integration with endless connectivity
                </Heading>
                <Text size={600} color="white">
                  FLINT API is Multichain with a 99.9% guaranteed uptime.
                </Text>
              </Pane>
            </Col>
          </Row>
        </Card>
      </Pane>
      <Pane
        is="section"
        paddingY={majorScale(4)}
        // paddingX={majorScale(8)}
        display="flex"
        flexDirection="column"
        // height={550}
        width="100%"
        // alignItems="center"
        justifyContent="space-between"
        background="white"
      >
        <Pane textAlign="center" marginBottom={majorScale(6)}>
          <Heading size={800}>BUILT WITH GAME DEVELOPERS IN MIND</Heading>
          <Text>
            FLINT NFT API is built by developers for developers, and is
            <br /> designed for seamless integration
          </Text>
        </Pane>
        <Row style={{ width: "100%", padding: 0, margin: "0 0 30px 0" }}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }} style={{}}>
            <Pane
              flex={1}
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="space-evenly"
              padding={majorScale(8)}
              height="100%"
              maxHeight={500}
            >
              <Heading size={900} color="#FFBD59">
                Plug-and-play with
                <br /> one API
              </Heading>
              <Pane>
                <Button appearance="primary" marginRight={16}>
                  READ DOCS
                </Button>
                <Button>GET STARTED</Button>
              </Pane>
              <Text>
                Implement any or all of FLINT API products
                <br /> with just a few lines of code. Access your API
                <br /> keys now to get started!
              </Text>
            </Pane>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Pane flex={1} background="tint2" height={500}>
              <pre className="line-numbers">
                {/* <code className="language-js">getAll();</code> */}
              </pre>
            </Pane>
          </Col>
        </Row>
        <Row gutter={[64, 64]} style={{ width: "100%", margin: 0, padding: 0 }}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            style={{ margin: 0 }}
          >
            <Card
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              paddingX={15}
              paddingY={25}
              background="tint2"
              borderRadius={20}
              width="100%"
              height="100%"
            >
              <Heading size={600} marginBottom={22}>
                99.9% UPTIME
              </Heading>
              <Text textAlign="center">
                We guarantee 99,9% uptime with great TPS for any blockchain
                network you choose. Write it once, deploy it everywhere. No need
                for rework.
              </Text>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            style={{ margin: 0 }}
          >
            <Card
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              paddingX={15}
              paddingY={25}
              background="tint2"
              borderRadius={20}
              width="100%"
              height="100%"
            >
              <Heading size={600} marginBottom={22}>
                SUPPORT
              </Heading>
              <Text textAlign="center">
                Good documentation and community resources to make
                implementation smooth and easy. With ever ready customer
                support.
              </Text>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            style={{ margin: 0 }}
          >
            <Card
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              paddingX={15}
              paddingY={25}
              background="tint2"
              borderRadius={20}
              width="100%"
              height="100%"
            >
              <Heading size={600} marginBottom={22}>
                MULTI-CHAIN
              </Heading>
              <Text textAlign="center">
                Our API connects to all available blockchain network available
                in the space. We unify all blockchain network into one simple
                API
              </Text>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            style={{ margin: 0 }}
          >
            <Card
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              paddingX={15}
              paddingY={25}
              background="tint2"
              borderRadius={20}
              width="100%"
              height="100%"
            >
              <Heading size={600} marginBottom={22}>
                SCALABLE
              </Heading>
              <Text textAlign="center">
                No need to learn blockchain programming, we take care of all
                that. so you can grow as quickly as you need to keep up with
                your user base.
              </Text>
            </Card>
          </Col>
        </Row>
      </Pane>
      <Pane
        is="section"
        paddingY={majorScale(4)}
        paddingX={majorScale(8)}
        display="flex"
        flexDirection="column"
        // height={550}
        alignItems="center"
        justifyContent="space-between"
        background="tint2"
      >
        <Heading size={900} color="#FFBD59" marginBottom={20}>
          FAQ
        </Heading>
        <Collapse
          onChange={(key) => console.log(key)}
          bordered={false}
          expandIcon={({ isActive }) =>
            isActive ? <MinusIcon /> : <PlusIcon />
          }
          style={{ width: "70%" }}
        >
          <Panel header="How can I pay for a plan?" key="1">
            <Text>
              At the moment you can pay via crypto, bank transfer, card payments
              or PayPal, flutter. We are currently working to add more gateway.
              More info to come very soon, so stay tuned!
            </Text>
          </Panel>
          <Panel header="Are plans on a monthly or annual basis?" key="2">
            <Text>
              You can use free plans for DEMO. Paid plans can be bought in
              monthly, quarterly, or yearly intervals.
            </Text>
          </Panel>
          <Panel header="What happens when I run out of credits?" key="3">
            <Text>
              You will receive a notification when you’re about to run out of
              credits. Once you have exceeded 100% of your credit amount, your
              subscription will stop till the next reneawal date. You can also
              upgrade your subcsription.
            </Text>
          </Panel>
          <Panel
            header="If I don’t use all of my monthly credits within a month, do they roll over to the next month?"
            key="4"
          >
            <Text>
              FLINT API service is a subscription based model. We do not support
              credit rollovers.
            </Text>
          </Panel>
        </Collapse>
      </Pane>
      <Pane
        is="section"
        paddingY={majorScale(8)}
        // paddingX={majorScale(8)}
        display="flex"
        flexDirection="column"
        // height={550}
        alignItems="center"
        justifyContent="space-between"
        background="white"
      >
        <Heading
          size={900}
          color="#FFBD59"
          marginBottom={20}
          textAlign="center"
        >
          Enable anyone to build on the
          <br /> blockchain & Mint NFT's
        </Heading>
        <Pane>
          <Button appearance="primary" marginRight={10}>
            WATCH DEMO
          </Button>
          <Button>GET STARTED</Button>
        </Pane>
      </Pane>
      <Row gutter={8} style={{ width: "100%", margin: 0, padding: 0 }}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <Pane
            display="flex"
            flexDirection="column"
            flex={1}
            padding={majorScale(6)}
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
    </>
  );
}

export default withLayout(Home);
