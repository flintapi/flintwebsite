import { Menu } from "antd";
import { Button, Link, majorScale, Pane } from "evergreen-ui";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
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
        <Link href="#">
          <div className="logo">
            {/* <Image src="" alt="" width={160} height={40} /> */}
          </div>
        </Link>
      </Pane>
      <Pane alignItems="center" display="flex" width="100%">
        <Menu
          onClick={(e) => {
            console.log(e);
            router.push("/comingsoon");
          }}
          mode="horizontal"
          style={{ width: "100%", height: "auto" }}
        >
          <Menu.Item>PRICING</Menu.Item>
          <Menu.Item>DEVELOPER</Menu.Item>
          <Menu.Item>CONTACT</Menu.Item>
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
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          margin: 10px 24px 10px 0;
        }
      `}</style>
    </Pane>
  );
}
