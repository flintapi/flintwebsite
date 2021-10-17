// import HeroMain from "../public/hero-main.svg";
import { Card, Col, Collapse, Row } from "antd";
import {
  Button,
  Heading,
  Link,
  majorScale,
  MinusIcon,
  Pane,
  PlayIcon,
  PlusIcon,
  Text,
} from "evergreen-ui";
import Head from "next/head";
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
                    fontSize: 50,
                    marginBottom: 30,
                    fontWeight: "bolder",
                    lineHeight: "1.2em",
                  }}
                >
                  PRICING
                </h1>
                <Text size={600}>
                  We’ve got a plan to suit you regardless of the
                  <br /> blockchain network you choose.
                </Text>
              </Pane>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Pane display="flex" alignItems="center" marginTop={30}>
                <Button appearance="primary" marginRight={25}>
                  SIGN UP
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
            </Col>
            <Col span={24} style={{ marginTop: 40 }}>
              <Pane
                width="100%"
                backgroundColor="white"
                paddingY={150}
                paddingX={majorScale(9)}
              >
                <Row
                  gutter={[16, 8]}
                  style={{ width: "100%", padding: 0, margin: 0 }}
                >
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 8 }}
                    style={{ textAlign: "center" }}
                  >
                    <Card hoverable>
                      <Text>Basic</Text>
                      <Heading>$Free</Heading>
                      <br />
                      <ul>
                        <li>99.9% uptime</li>
                        <li>Limited Tps of 50/s</li>
                        <li>Support dev team</li>
                        <li>Feedback Loop Notifications</li>
                        <li>Multi Chain Network integrations</li>
                      </ul>
                      <Button appearance="primary">GET STARTED</Button>
                    </Card>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 8 }}
                    style={{ textAlign: "center" }}
                    flex
                  >
                    <Card hoverable>
                      <Text>Basic Pro</Text>
                      <Heading>Coming soon</Heading>
                      <br />
                      <Button>GET UPDATED</Button>
                    </Card>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 8 }}
                    style={{ textAlign: "center" }}
                  >
                    <Card hoverable>
                      <Text>Basic Pro Max</Text>
                      <Heading>Coming soon</Heading>
                      <br />
                      <Button>GET UPDATED</Button>
                    </Card>
                  </Col>
                </Row>
              </Pane>
            </Col>
            <Col span={24}>
              <Pane
                width="100%"
                backgroundImage="url('/networks-row.svg')"
                backgroundSize="contain"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                minHeight={150}
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
          backgroundColor: "white",
        }}
      >
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
        <Col xs={{ span: 22 }} lg={{ span: 18 }}>
          <Pane
            // is="section"
            paddingY={150}
            // paddingX={majorScale(8)}
            display="flex"
            flexDirection="column"
            // height={550}
            alignItems="center"
            justifyContent="space-between"
            background="transparent"
          >
            <Heading
              size={900}
              color="#FFBD59"
              marginBottom={20}
              textAlign="center"
            >
              FREQUENTLY ASKED QUESTIONS
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
                  At the moment you can pay via crypto, bank transfer, card
                  payments or PayPal, flutter. We are currently working to add
                  more gateway. More info to come very soon, so stay tuned!
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
                  You will receive a notification when you’re about to run out
                  of credits. Once you have exceeded 100% of your credit amount,
                  your subscription will stop till the next reneawal date. You
                  can also upgrade your subcsription.
                </Text>
              </Panel>
              <Panel
                header="If I don’t use all of my monthly credits within a month, do they roll over to the next month?"
                key="4"
              >
                <Text>
                  FLINT API service is a subscription based model. We do not
                  support credit rollovers.
                </Text>
              </Panel>
            </Collapse>
          </Pane>
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
              color="black"
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
      <style jsx global>{`
        ul {
          text-align: left;
        }

        ul li {
          text-align: left;
          list-style: url("/check.svg");
          color: #514040;
          // list-style-type: space-counter;
        }
      `}</style>
    </>
  );
}

export default withLayout(Home);
