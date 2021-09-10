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
    Button: {
      baseStyle: {
        color: "#FFBD59",
        paddingX: 12,
        paddingY: 8,
        borderRadius: 5,
        border: "1px solid #FFBD59",
        backgroundColor: "transparent",
        _hover: {
          backgroundColor: "transparent",
          border: "1px solid transparent",
        },
        _active: {
          backgroundColor: "transparent",
        },
        _focus: {
          boxShadow: "0 0 0 2px lightcoral",
        },
      },
      appearances: {
        primary: {
          color: "white",
          paddingX: 12,
          paddingY: 8,
          borderRadius: 5,
          borderColor: "#FFBD59",
          backgroundColor: "#FFBD59",
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
          <Header style={{ background: "white", height: "auto" }}>
            <HeaderComp />
          </Header>
          <Content>
            <Comp size={size} />
            <Footer style={{ background: "white" }}>
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
