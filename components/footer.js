import {
  LinkedinFilled,
  MediumSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { Heading, Link, Pane, Text } from "evergreen-ui";

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
      <Row style={{ width: "100%", padding: 0, margin: 0 }}>
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
        <Col xs={{ span: 22 }} lg={{ span: 18 }}>
          <Row
            gutter={[16, 16]}
            style={{ width: "100%", margin: 0, padding: 0 }}
          >
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              // style={{ padding: "20px auto" }}
            >
              <Pane
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                height="100%"
              >
                {/* <Image src="/logo-black.png" alt="" width={160} height={40} /> */}
                <div className="logo"></div>
                <Heading size={400} marginBottom={10}>
                  Social Networks
                </Heading>
                <Pane
                  display="flex"
                  width="100%"
                  // paddingLeft={30}
                  marginBottom={10}
                  flexDirection="row"
                  justifyContent="start"
                >
                  <Link href="https://www.linkedin.com/company/flint-api/">
                    <LinkedinFilled
                      style={{
                        marginRight: 20,
                        fontSize: 20,
                        color: "#0077b5",
                      }}
                    />
                  </Link>
                  <Link href="https://twitter.com/flintApi">
                    <TwitterSquareFilled
                      style={{
                        marginRight: 20,
                        fontSize: 20,
                        color: "#1DA1F2",
                      }}
                    />
                  </Link>
                  <Link href="https://medium.com/@flintApi">
                    <MediumSquareFilled
                      style={{ marginRight: 20, fontSize: 20, color: "black" }}
                    />
                  </Link>
                </Pane>
                <Link href="mailto:admin@flintapi.io">admin@flintapi.io</Link>
                {/* <Pane display="flex" paddingLeft={30}> */}
                {/* <TextInput width="100%" marginRight={12} height="100%" /> */}

                {/* </Pane> */}
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
                <br />
                <Link href="#">Overview</Link>
                <br />
                <Link href="#">How it works</Link>
                <br />
                <Link href="#">Sign up</Link>
                <br />
                <Link href="#">Sign in</Link>
                <br />
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
                <br />
                <Link href="#">Pricing</Link>
                <br />
                <Link href="#">ApiDoc</Link>
                <br />
                <Link href="#">Changelog</Link>
                <br />
                <Link href="#">Demo</Link>
                <br />
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
                <br />
                <Link href="#">About Us</Link>
                <br />
                <Link href="#">Contact Us</Link>
                <br />
                <Link href="#">Careers</Link>
                <br />
                <Link href="/comingsoon">Newsletter</Link>
                <br />
              </Pane>
            </Col>
            <Col
              span={24}
              style={{
                padding: "20px auto",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Text>© 2021 FlintApi. All rights reserved.</Text>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
      </Row>
    </Pane>
  );
}
