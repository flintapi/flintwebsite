import { Col, Menu, Row } from "antd";
import { Button, Link, majorScale, Pane } from "evergreen-ui";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
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
          display="flex"
          padding={10}
          justifyContent="start"
          background="transparent"
          borderRadius={3}
        >
          <Pane
            flex={1}
            alignItems="center"
            display="flex"
            height="100%"
            flexDirection="row"
            justifyContent="center"
          >
            <Link href="/">
              <div className="logo">
                {/* <Image src="" alt="" width={160} height={40} /> */}
              </div>
            </Link>
          </Pane>
          <Pane
            display="flex"
            justifyContent="end"
            alignItems="end"
            width="100%"
          >
            <Menu
              onSelect={({ item, key, keyPath }) => {
                console.log(item, key, keyPath);
                router.push("/" + key);
              }}
              mode="horizontal"
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                width: "100%",
              }}
            >
              <Menu.Item key="pricing">PRICING</Menu.Item>
              <Menu.Item key="developer">DEVELOPER</Menu.Item>
              <Menu.Item key="contact">CONTACT</Menu.Item>
              <Menu.Item>
                <Button height={majorScale(5)}>LOGIN</Button>
              </Menu.Item>
              <Menu.Item>
                <Button appearance="primary" height={majorScale(5)}>
                  SIGN UP
                </Button>
              </Menu.Item>
            </Menu>
          </Pane>
          <style jsx global>{`
            .ant-menu-item-active {
              border-color: #ffbd59;
            }
            .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover {
              color: #ffbd59;
            }
            .logo {
              float: left;
              width: 120px;
              height: 40px;
              background-image: url("/logo-black.png");
              background-size: 150%;
              background-position: center;
              background-repeat: no-repeat;
              margin: 10px 24px 10px 0;
            }
            .logo-white {
              float: left;
              width: 120px;
              height: 40px;
              background-image: url("/logo-white.png");
              background-size: 150%;
              background-position: center;
              background-repeat: no-repeat;
              margin: 10px 24px 10px 0;
            }
          `}</style>
        </Pane>
      </Col>
      <Col xs={{ span: 1 }} lg={{ span: 3 }}></Col>
    </Row>
  );
}
