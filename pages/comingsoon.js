import {
  LinkedinFilled,
  MediumSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { Card, Heading, Link, Pane, Text } from "evergreen-ui";
import Head from "next/head";
import Script from "next/script";

export default function ComingSoon() {
  const checkMandatory5022173000000344923 = () => {
    var mndFileds = new Array("NAME");
    var fldLangVal = new Array("Email");
    for (i = 0; i < mndFileds.length; i++) {
      var fieldObj = document.forms["WebForm5022173000000344923"][mndFileds[i]];
      if (fieldObj) {
        if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
          if (fieldObj.type == "file") {
            alert("Please select a file to upload.");
            fieldObj.focus();
            return false;
          }
          alert(fldLangVal[i] + " cannot be empty.");
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName == "SELECT") {
          if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
            alert(fldLangVal[i] + " cannot be none.");
            fieldObj.focus();
            return false;
          }
        } else if (fieldObj.type == "checkbox") {
          if (fieldObj.checked == false) {
            alert("Please accept  " + fldLangVal[i]);
            fieldObj.focus();
            return false;
          }
        }
        try {
          if (fieldObj.name == "Last Name") {
            name = fieldObj.value;
          }
        } catch (e) {}
      }
    }
    document
      .querySelector(".crmWebToEntityForm .formsubmit")
      .setAttribute("disabled", true);
  };

  const tooltipShow5022173000000344923 = (el) => {
    var tooltip = el.nextElementSibling;
    var tooltipDisplay = tooltip.style.display;
    if (tooltipDisplay == "none") {
      var allTooltip = document.getElementsByClassName("zcwf_tooltip_over");
      for (i = 0; i < allTooltip.length; i++) {
        allTooltip[i].style.display = "none";
      }
      tooltip.style.display = "block";
    } else {
      tooltip.style.display = "none";
    }
  };
  return (
    <>
      <Head>
        <title>FlintApi</title>
        <meta
          name="description"
          content="A simple API solution to blockchain complexity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8" />
        <link rel="icon" href="/ico.png" type="image/x-icon" />
        <Script
          id="wf_anal"
          src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=e8f611d0c54ab379829ef1161e8a6715bba995cbef1d2e72046b4b1f8de09039gid1d8319e80246eb3787774377fba9d76657092a3a01ce58655806d56b06646df8gid0553f79ba9ccf83e1be97f6851b4205dc78530f131c55496a36cdc928fa214e9gid14f4ec16431e0686150daa43f3210513"
        ></Script>
        {/* <!-- Do not remove this --- Analytics Tracking code ends. --> */}
      </Head>
      <Row
        style={{
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          backgroundImage: "url('/folk-pattern-black.png')",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <Col span={24}>
          <Pane
            alignItems="center"
            display="flex"
            height="100%"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Link href="/">
              <img src="/logo-white.png" height={50} />
            </Link>
            <Pane
              display="flex"
              // width="100%"
              paddingLeft={30}
              marginBottom={10}
              flexDirection="row"
              justifyContent="start"
            >
              <Link href="https://www.linkedin.com/company/flint-api/">
                <LinkedinFilled
                  style={{ marginRight: 20, fontSize: 30, color: "#0077b5" }}
                />
              </Link>
              <Link href="https://twitter.com/flintApi">
                <TwitterSquareFilled
                  style={{ marginRight: 20, fontSize: 30, color: "#1DA1F2" }}
                />
              </Link>
              <Link href="https://medium.com/@flintApi">
                <MediumSquareFilled
                  style={{ marginRight: 20, fontSize: 30, color: "white" }}
                />
              </Link>
            </Pane>
          </Pane>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Heading size={900} color="white">
            AN NFT API FOR
            <br /> GAME DEVELOPERS.
          </Heading>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          {/* <!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.--> */}
          <div
            id="crmWebToEntityForm"
            className="zcwf_lblLeft crmWebToEntityForm"
            style={{
              backgroundColor: "white",
              color: "black",
              maxWidth: "600px",
            }}
          >
            <form
              action="https://crm.zoho.com/crm/WebForm"
              name="WebForm5022173000000344923"
              method="POST"
              onSubmit={() => {
                document.charset = "UTF-8";
                return checkMandatory5022173000000344923();
              }}
              acceptCharset="UTF-8"
            >
              <input
                type="text"
                style={{ display: "none" }}
                name="xnQsjsdp"
                value="1d8319e80246eb3787774377fba9d76657092a3a01ce58655806d56b06646df8"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input
                type="text"
                style={{ display: "none" }}
                name="xmIwtLD"
                value="e8f611d0c54ab379829ef1161e8a6715bba995cbef1d2e72046b4b1f8de09039"
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="actionType"
                value="Q3VzdG9tTW9kdWxlMQ=="
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="returnURL"
                value="https&#x3a;&#x2f;&#x2f;www.flintapi.io"
              />
              {/* <!-- Do not remove this code. --> */}

              <div
                className="zcwf_title"
                style={{ maxWidth: "600px", color: "black" }}
              >
                NEWSLETTER
              </div>
              <div className="zcwf_row">
                <div
                  className="zcwf_col_lab"
                  style={{ fontSize: "12px", fontFamily: "Arial" }}
                >
                  <label htmlFor="NAME">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div className="zcwf_col_fld">
                  <input type="text" id="NAME" name="NAME" maxLength="120" />
                  <div className="zcwf_col_help"></div>
                </div>
              </div>
              <div className="zcwf_row">
                <div className="zcwf_col_lab"></div>
                <div className="zcwf_col_fld">
                  <input
                    type="submit"
                    id="formsubmit"
                    className="formsubmit zcwf_button"
                    value="Submit"
                    title="Submit"
                  />
                  <input
                    type="reset"
                    className="zcwf_button"
                    name="reset"
                    value="Reset"
                    title="Reset"
                  />
                </div>
              </div>
              {/* <!-- Do not remove this --- Analytics Tracking code starts --> */}
            </form>
          </div>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Heading size={700} color="white" lineHeight="2.5rem">
            You will be the first to know when
            <br /> we go{" "}
            <span
              style={{
                backgroundColor: "#FFBD59",
                padding: "5px 8px",
                borderRadius: 10,
              }}
            >
              LIVE
            </span>
            .
          </Heading>
        </Col>
        <Col
          span={24}
          style={{ padding: "20px 20px", width: "100%", height: "auto" }}
        >
          <Row
            gutter={[18, 18]}
            style={{ margin: 0, padding: 0, width: "100%", height: "auto" }}
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              style={{ height: "auto", display: "flex" }}
              flex="auto"
            >
              <Card
                width="100%"
                height="100%"
                padding={20}
                borderRadius={25}
                background="rgba(0, 0, 0, 0.25)"
              >
                <Heading size={500} color="#FFBD59">
                  NFT
                </Heading>
                <Text color="white">
                  They are non-fungible tokens with intrinsic value and can be
                  exhanged for more value
                </Text>
              </Card>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              style={{ height: "auto", display: "flex" }}
              flex="auto"
            >
              <Card
                width="100%"
                height="100%"
                padding={20}
                borderRadius={25}
                background="rgba(0, 0, 0, 0.25)"
              >
                <Heading size={500} color="#FFBD59">
                  API
                </Heading>
                <Text color="white">
                  It is endpoint built on the blockchain technology for game
                  developers to leverage the tech
                </Text>
              </Card>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              style={{ height: "auto", display: "flex" }}
              flex="auto"
            >
              <Card
                width="100%"
                height="100%"
                padding={20}
                borderRadius={25}
                background="rgba(0, 0, 0, 0.25)"
              >
                <Heading size={500} color="#FFBD59">
                  MULTICHAIN
                </Heading>
                <Text color="white">
                  It is built multichain for all available and functional
                  blockchain ecosystem
                </Text>
              </Card>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              style={{ height: "auto", display: "flex" }}
            >
              <Card
                width="100%"
                height="100%"
                padding={20}
                borderRadius={25}
                background="rgba(0, 0, 0, 0.25)"
              >
                <Heading size={500} color="#FFBD59">
                  MARKETPLACE
                </Heading>
                <Text color="white">
                  Easy integration to any wallet and transfer to any chain
                  marketplace for exchange of value
                </Text>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
