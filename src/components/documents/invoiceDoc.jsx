import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    width: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottom: 1,
    alignItems: "center",
    textAlign: "center",
    fontStyle: "bold",
  },
  tableBody: {
    flexDirection: "row",
    borderBottom: 1,
    alignItems: "center",
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    borderRight: 1,
    borderBottom: 1,
    padding: 5,
  },
  viewer: {
    width: window.innerWidth - 224, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

export const InvoiceDoc = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Invoice</Text>
            <Text style={styles.subtitle}>Invoice Number: 123456</Text>
            <Text style={styles.text}>Date: September 22, 2023</Text>
            <Text style={styles.text}>Due Date: October 22, 2023</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Bill To</Text>
            <Text style={styles.text}>Customer Name: John Doe</Text>
            <Text style={styles.text}>Address: 123 Main Street</Text>
            <Text style={styles.text}>
              City, State, Zip: Anytown, USA 12345
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Item</Text>
              <Text style={styles.tableCell}>Description</Text>
              <Text style={styles.tableCell}>Quantity</Text>
              <Text style={styles.tableCell}>Price</Text>
              <Text style={styles.tableCell}>Total</Text>
            </View>
            <View style={styles.tableBody}>
              <Text style={styles.tableCell}>Product A</Text>
              <Text style={styles.tableCell}>Sample Description</Text>
              <Text style={styles.tableCell}>2</Text>
              <Text style={styles.tableCell}>$10.00</Text>
              <Text style={styles.tableCell}>$20.00</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
