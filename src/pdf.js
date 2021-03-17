import React from "react";
import {
  Document,
  View,
  Text,
  Page,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import font from "./fonts/SourceHanSansK-Normal.ttf";

const data = [
  {
    id: 1,
    name: "ok",
    amount: 1,
    price: 10,
  },
  {
    id: 2,
    name: "ok 2",
    amount: 1,
    price: 10,
  },
];

const DataEmpty = ({ index }) => {
  return (
    <View
      style={[
        styles.tableRow,
        styles.tableDataEmpty,
        {
          backgroundColor: index % 2 !== 0 ? "#e6e3e3" : "#fff",
        },
      ]}
    >
      <View style={[styles.tableCol, { width: "10%" }]}></View>
      <View style={[styles.tableCol, { width: "40%" }]}></View>
      <View style={[styles.tableCol, { width: "10%" }]}></View>
      <View style={[styles.tableCol, { width: "20%" }]}></View>
      <View style={[styles.tableCol, { width: "20%" }]}></View>
    </View>
  );
};

const DataTable = ({ data, index }) => {
  return (
    <View
      style={[
        styles.tableRow,
        styles.tableData,
        { backgroundColor: index % 2 !== 0 ? "#e6e3e3" : "#fff" },
      ]}
    >
      <View style={[styles.tableCol, { width: "10%" }]}>
        <Text style={styles.tableCell}>{data.id}</Text>
      </View>
      <View style={[styles.tableCol, { width: "40%" }]}>
        <Text style={[styles.tableCell, { textAlign: "left" }]}>
          {data.name}
        </Text>
      </View>
      <View style={[styles.tableCol, { width: "10%" }]}>
        <Text style={styles.tableCell}>{data.amount}</Text>
      </View>
      <View style={[styles.tableCol, { width: "20%" }]}>
        <Text style={styles.tableCell}>{data.price}</Text>
      </View>
      <View style={[styles.tableCol, { width: "20%" }]}>
        <Text style={styles.tableCell}>{data.amount * data.price}</Text>
      </View>
    </View>
  );
};

const Pdf = () => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text>Eメールアドレス</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.infoLeft}>
                <View style={styles.CustomName}>
                  <Text>Dong</Text>
                </View>
                <View style={styles.totalHead}>
                  <Text>Total : 100</Text>
                </View>
              </View>
              <View style={styles.infoRight}>
                <View style={styles.row}>
                  <Text style={styles.InvoiceId}>No.</Text>
                  <Text style={styles.InvoiceId}>001</Text>
                </View>
                <View style={styles.DateInvoice}>
                  <Text>12/12/2020</Text>
                </View>
                <View style={styles.infoCompany}>
                  <View style={styles.content}>
                    <View>
                      <Text>cpn name</Text>
                    </View>
                    <View>
                      <Text>address</Text>
                    </View>
                    <View>
                      <Text>phone fax</Text>
                    </View>
                  </View>
                  <Image
                    style={styles.StampCompany}
                    src="https://s3-ap-northeast-1.amazonaws.com/dev.jewelry-storage/seal/2021/03/15/Ec4VJYC31atcyQnv4niRf.png?x-request=xhr"
                    crossorigin="anonymous"
                  />
                </View>
                <View style={styles.wrapQr}>
                  <View style={styles.qr}></View>
                  <View style={styles.qr}></View>
                  <View style={styles.qrLast}>
                    <Image
                      style={styles.stampCurator}
                      src="https://s3-ap-northeast-1.amazonaws.com/dev.jewelry-storage/seal/2021/03/15/Ec4VJYC31atcyQnv4niRf.png?x-request=xhr"
                      crossorigin="anonymous"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.unit}>
              <Text>Unit: Yen</Text>
            </View>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHead]}>
                <View style={[styles.tableCol, { width: "10%" }]}>
                  <Text style={styles.tableCell}>ID</Text>
                </View>
                <View style={[styles.tableCol, { width: "40%" }]}>
                  <Text style={styles.tableCell}>Name</Text>
                </View>
                <View style={[styles.tableCol, { width: "10%" }]}>
                  <Text style={styles.tableCell}>Quantity</Text>
                </View>
                <View style={[styles.tableCol, { width: "20%" }]}>
                  <Text style={styles.tableCell}>Price</Text>
                </View>
                <View style={[styles.tableCol, { width: "20%" }]}>
                  <Text style={styles.tableCell}>Total</Text>
                </View>
              </View>
              {data.map((value, index) => (
                <DataTable key={index} data={value} index={index} />
              ))}
              <DataEmpty index={data.length} />
              <DataEmpty index={data.length + 1} />
              <DataEmpty index={data.length + 2} />
              <DataEmpty index={data.length + 3} />
            </View>
            <View style={styles.remarks}>
              <Text>remarks column</Text>
              <View style={styles.contentRemarks}></View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "HanSansk",
  src: font,
});

const styles = StyleSheet.create({
  body: {
    fontFamily: "HanSansk",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {},
  title: {
    border: "1px solid gray",
    textAlign: "center",
    backgroundColor: "#d1d1cf",
    color: "black",
  },
  infoLeft: {
    position: "relative",
    width: "60%",
  },
  infoRight: {
    paddingLeft: 15,
    width: "40%",
  },
  totalHead: {
    position: "absolute",
    bottom: 0,
  },
  InvoiceId: {
    width: "50%",
    textAlign: "right",
  },
  DateInvoice: {
    textAlign: "right",
  },
  infoCompany: {
    position: "relative",
    minHeight: 100,
  },
  content: {
    position: "absolute",
    left: 0,
  },
  StampCompany: {
    position: "absolute",
    right: 0,
    width: 60,
    height: 60,
  },
  wrapQr: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    border: 1,
    borderStyle: "solid",
    borderColor: "gray",
    height: 50,
    width: "100%",
  },
  qr: {
    width: "33.33%",
    borderRight: 1,
    borderStyle: "solid",
    borderColor: "gray",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  qrLast: {
    width: "33.33%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boder: "none",
  },
  stampCurator: {
    width: "auto",
    height: "100%",
  },
  unit: {
    padding: 2,
    textAlign: "right",
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: "grey",
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: "grey",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    borderColor: "grey",
  },
  tableHead: {
    backgroundColor: "#d1d1cf",
  },
  tableDataEmpty: {
    height: 20,
  },
  remarks: {
    marginTop: 10,
  },
  contentRemarks: {
    border: 1,
    borderStyle: "solid",
    borderColor: "grey",
    height: 50,
  },
});

export default Pdf;
