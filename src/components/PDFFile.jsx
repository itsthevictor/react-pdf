import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

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

const PDFFile = () => {
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed></Text>
      <Image style={styles.image} src={url} />
      <Text style={styles.text}>
        I'm baby freegan biodiesel tote bag marfa salvia yes plz selvage celiac
        enamel pin farm-to-table craft beer. Etsy Brooklyn coloring book bespoke
        grailed ennui. Chartreuse direct trade adaptogen cardigan +1 fam vegan
        flannel pinterest iPhone solarpunk blog narwhal venmo same. Church-key
        shabby chic pork belly lomo migas tote bag knausgaard. PBR&B man bun
        jianbing paleo gatekeep. Tattooed yes plz organic vaporware yuccie
        enamel pin. Activated charcoal biodiesel neutra skateboard small batch,
        yuccie kombucha DIY master cleanse XOXO bespoke iPhone health goth.
        IPhone lyft stumptown everyday carry fam freegan. Locavore fingerstache
        austin ramps asymmetrical chia. Bushwick williamsburg art party meh.
        Gentrify etsy ascot salvia, DIY helvetica austin artisan kinfolk fam
        vaporware. Prism tote bag polaroid bodega boys, marxism bitters poke
        master cleanse flannel tofu palo santo. Raw denim taiyaki hella
        sartorial palo santo JOMO, DIY meditation readymade pickled
        vexillologist godard praxis. Bicycle rights ethical portland green juice
        bushwick, DSA fit. Helvetica hoodie pork belly VHS tote bag cupping
        hashtag. Godard pok pok retro farm-to-table, neutra hoodie woke before
        they sold out coloring book green juice single-origin coffee forage
        ascot leggings fixie. Messenger bag poke single-origin coffee, food
        truck biodiesel freegan authentic shaman tonx vegan pug keffiyeh. Paleo
        cliche gastropub, heirloom VHS next level yes plz godard raclette plaid.
        Brooklyn air plant forage squid cupping mlkshk. Four loko farm-to-table
        vaporware kinfolk cardigan, health goth affogato fit la croix iPhone.
        Kale chips hammock meh mumblecore quinoa. Knausgaard marxism big
        moodchicharrones austin cold-pressed fit franzen marfa. Raclette shabby
        chic taxidermy, fit forage venmo tonx heirloom mukbang tumblr
        church-keylumbersexual bespoke gatekeep kale chips. Truffaut JOMO salvia
        helvetica, street art lo-fi organic jianbing vibecession direct trade
        austin. Pop-up vice Brooklyn, four dollar toast artisan offal messenger
        bag kickstarter air plant woke dreamcatcher solarpunk coloring book
        paleo. Man braid hell of wayfarers vinyl pour-over. Solarpunk cardigan
        unicorn kombucha neutral milk hotel, migas you probably haven't heard of
        them pickled blue bottle whatever vexillologist ramps. Praxis whatever
        semiotics tofu, selfies listicle migas shaman man bun health goth jawn
        air plant freegan quinoa. Hashtag kickstarter cold-pressed, sustainable
        microdosing hot chicken austin. Helvetica distillery meditation, celiac
        flannel portland mixtape tonx microdosing before they sold out
        flexitarian ethical marfa. Lumbersexual migas hoodie neutra gorpcore.{" "}
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
      />
    </Page>
  </Document>;
};
export default PDFFile;
