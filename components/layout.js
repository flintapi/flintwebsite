import { Layout } from "antd";
import { defaultTheme, ThemeProvider } from "evergreen-ui";
import componentQueries from "react-component-queries";
import FooterComp from "./footer";
import HeaderComp from "./header";

const { Content, Header, Footer } = Layout;
const theme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    Link: {
      baseStyle: {
        color: "#000000",
        textDecoration: "none",
      },
    },
    Button: {
      baseStyle: {
        color: "#000000",
        paddingX: 25,
        paddingY: 8,
        borderRadius: 3,
        border: "1px solid transparent",
        backgroundColor: "transparent",
        minWidth: 150,
        transition: "all 0.3s ease 0s",
        _hover: {
          backgroundColor: "transparent",
          border: "1px solid #FFBD59",
        },
        _active: {
          backgroundColor: "transparent",
        },
        _focus: {
          boxShadow: "0 0 0 2px #FFBD59",
        },
      },
      appearances: {
        primary: {
          color: "black",
          fontWeight: "bold",
          paddingX: 25,
          paddingY: 8,
          borderRadius: 3,
          borderColor: "#FFBD59",
          backgroundColor: "#FFBD59",
          minWidth: 150,
          boxShadow: "0px 10px 26px 2px rgba(0,0,0,.3)",
          _hover: {
            backgroundColor: "#FFBD59",
            borderColor: "#FFBD59",
          },
          _active: {
            backgroundColor: "#FFBD59",
          },
          _focus: {
            boxShadow: "0 0 0 2px tint2",
          },
        },
      },
    },
  },
};

function withLayout(Comp) {
  function App({ size }) {
    return (
      <Layout>
        <ThemeProvider value={theme}>
          <Header style={{ background: "white", height: "auto", padding: 0 }}>
            <HeaderComp />
          </Header>
          <Content>
            <Comp size={size} />
            <Footer style={{ background: "white", padding: 0 }}>
              <FooterComp />
            </Footer>
          </Content>
        </ThemeProvider>
      </Layout>
    );
  }

  return componentQueries({
    queries: [
      function (size, props) {
        // console.log(size, props);
        return { size: size };
      },
    ],
    config: {
      monitorWidth: true,
      monitorHeight: false,
      refreshRate: 16,
      pure: true,
    },
  })(App);
}

export { withLayout };
