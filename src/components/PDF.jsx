import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Helvetica",
  },
  image: {
    marginVertical: 12,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    left: "50%",
    bottom: 30,
    width: "100vw",
    textAlign: "center",
    color: "grey",
  },
});

const url = `https://res.cloudinary.com/dgp67jheg/image/upload/v1732201168/Googie%20Advent%20Calendar/star-blue_supmtg.png`;

const PDF = ({ poem }) => {
  return (
    <Document>
      <Page size="A4">
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#3388af", fontSize: "42px" }}>
            {poem ? poem.title : "..."}
          </Text>
          <Text>Por {poem ? poem.author : "..."}</Text>
          <Text
            style={{
              fontStyle: "italic",
              fontSize: "10px",
              padding: "20px",
            }}
          >
            {poem ? poem.text : "..."}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
