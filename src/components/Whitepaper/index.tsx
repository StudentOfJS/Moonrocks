import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";
import * as React from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps } from "react-router";
import Navigation from "../Navigation";

// Create styles
const styles = StyleSheet.create({
  document: {
    color: "lightBlue",
    height: "90vh",
    width: "100%"
  },
  page: {
    backgroundColor: "#E4E4E4",
    flexDirection: "column",
    paddingTop: "30px",
    width: "100%"
  },
  paragraph: {
    fontFamily: "Oswald",
    margin: 10,
    textAlign: "justify",
    width: "60%"
  },
  section: {
    flexGrow: 1,
    margin: 10,
    padding: 10
  },
  subtitle: {
    fontFamily: "Oswald",
    fontSize: 20,
    margin: 20,
    textAlign: "justify"
  },
  title: {
    backgroundColor: "#e4e4e4",
    fontFamily: "Oswald",
    fontSize: 25,
    margin: 20,
    textAlign: "center",
    textTransform: "uppercase"
  },
  title2: {
    backgroundColor: "#e4e4e4",
    fontFamily: "Oswald",
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

Font.register(
  "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  {
    family: "Oswald"
  }
);

export default class Whitepaper extends React.PureComponent<
  RouteComponentProps<{}>
> {
  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.props.match.path);
    return (
      <div>
        <Helmet>
          <title>Moonrock's Whitepaper</title>
          <meta
            name="description"
            content="Read Moonrock's whitepaper and find out more about our tech"
          />
          <link rel="canonical" href="https://moonrocks.io/whitepaper" />
        </Helmet>
        <Navigation path={this.props.match.path} />
        <Document style={styles.document}>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>Moonrock Technical Whitepaper</Text>
              <Text style={styles.title2}>Version 0.0.1</Text>
              <Text style={styles.title2}>August 22 2018</Text>
              <Text style={styles.title2}>enquiry@moonrocks.io</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Coming soon</Text>
              <Text style={styles.paragraph}>
                Please be patient while our team creates a whitepaper worthy of
                your time
              </Text>
            </View>
          </Page>
        </Document>
      </div>
    );
  }
}
