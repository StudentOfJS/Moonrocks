import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
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
  section: {
    flexGrow: 1,
    margin: 10,
    padding: 10
  },
  title: {
    backgroundColor: "#e4e4e4",
    fontFamily: "Roboto",
    fontSize: 25,
    margin: 20,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

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
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </div>
    );
  }
}
