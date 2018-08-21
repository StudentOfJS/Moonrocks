import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "../../theme";
import Div from "../Div";
import { MoonBackground } from "../MoonBackground";
import { Title } from "../Text";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    flexDirection: "row"
  },
  section: {
    flexGrow: 1,
    margin: 10,
    padding: 10
  }
});

const InnerWrapper = styled(Div)`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: #292a2b;
  border-radius: 30px;
  overflow: hidden;
  padding: 20px;
  margin: 100px;
`;

export default class Whitepaper extends React.PureComponent {
  public state = {};

  public render() {
    return (
      <MoonBackground>
        <Helmet>
          <title>Moonrock's Whitepaper</title>
          <meta
            name="description"
            content="Read Moonrock's whitepaper and find out more about our tech"
          />
          <link rel="canonical" href="https://moonrocks.io/whitepaper" />
        </Helmet>
        <InnerWrapper>
          <Title>Whitepaper</Title>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>
                  <Title>Whitepaper</Title>
                  Section #1
                </Text>
              </View>
              <View style={styles.section}>
                <Text>Section #2</Text>
              </View>
            </Page>
          </Document>
        </InnerWrapper>
      </MoonBackground>
    );
  }
}
