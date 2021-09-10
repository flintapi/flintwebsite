import {
  LinkedinFilled,
  MediumSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { Button, Heading, Link, Pane, TextInput } from "evergreen-ui";
import router from "next/router";

export default function Footer() {
  return (
    <Pane
      display="flex"
      padding={10}
      justifyContent="start"
      background="white"
      borderRadius={3}
      paddingY={40}
    >
      <Row style={{ width: "100%", margin: 0, padding: 0 }}>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          style={{ padding: "20px auto" }}
        >
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            height="100%"
          >
            <img src="/logo-black.png" height={90} />
            <Heading size={400} paddingLeft={30} marginBottom={10}>
              Social Networks
            </Heading>
            <Pane
              display="flex"
              width="100%"
              paddingLeft={30}
              marginBottom={10}
              flexDirection="row"
              justifyContent="space-evenly"
            >
              <LinkedinFilled />
              <TwitterSquareFilled />
              <MediumSquareFilled />
            </Pane>
            <Pane display="flex" paddingLeft={30}>
              <TextInput width="100%" marginRight={12} height="100%" />
              <Button
                appearance="primary"
                onClick={(e) => router.push("/comingsoon")}
              >
                SUBSCRIBE
              </Button>
            </Pane>
          </Pane>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          style={{ padding: "20px auto", height: "100%" }}
        >
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            width="100%"
            height="100%"
            paddingLeft={30}
          >
            <Heading size={500}>Platform</Heading>
            <Link href="#">Overview</Link>
            <Link href="#">How it works</Link>
            <Link href="#">Sign up</Link>
            <Link href="#">Sign in</Link>
          </Pane>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          style={{ padding: "20px auto", height: "100%" }}
        >
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            width="100%"
            height="100%"
            paddingLeft={30}
          >
            <Heading size={500}>Developer</Heading>
            <Link href="#">Pricing</Link>
            <Link href="#">ApiDoc</Link>
            <Link href="#">Changelog</Link>
            <Link href="#">Demo</Link>
          </Pane>
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          style={{ padding: "20px auto", height: "100%" }}
        >
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            width="100%"
            height="100%"
            paddingLeft={30}
          >
            <Heading size={500}>Company</Heading>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Newsletter</Link>
          </Pane>
        </Col>
      </Row>
    </Pane>
  );
}
