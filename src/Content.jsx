import React from "react";
import MediaCard from "./card";
import { Grid } from "@material-ui/core";
import P_malt from "./images/P_malt.jpg";
import Betty from "./images/Betty.jpg";
import Uncle from "./images/Uncle.png";
import Smoke from "./images/Smoke.jpg";
import zac from "./images/zac.jpg";
import grill from "./images/grill.jpg";
import Japan from "./images/Japan.jpg";
import Luce from "./images/Luce.jpg";
import Sun from "./images/Sun.jpg";
import Texas from "./images/Texas.jpg";
import Brew from "./images/Brew.jpg";
import London from "./images/London.jpg";
import Falls from "./images/Falls.jpg";
import Park from "./images/Park.jpg";
import Sheen from "./images/Sheen.jpg";
import Sprit from "./images/Sprit.jpg";
import Bridge from "./images/Bridge.jpg";
import Jay from "./images/Jay.jpg";
import Rail from "./images/Rail.jpg";
import Enger from "./images/Enger.jpg";
import Split from "./images/Split.jpg";
import Beach from "./images/Beach.png";
import Ice from "./images/Ice.jpg";
import Chester from "./images/Chester.jpg";
import Tischer from "./images/Tischer.jpg";
import Hawk from "./images/Hawk.jpg";
import Wis from "./images/Wis.jpg";
import Sup from "./images/Sup.png";
import Aqua from "./images/Aqua.jpg";
import Ship from "./images/Ship.jpg";

const Content = () => {
  return (
    <Grid container spacing="4">
      <Grid item md={3}>
        <MediaCard
          title="Portland Malt Shop"
          ImgSrc={P_malt}
          description="Best Malt shop in the whole of Duluth. They are Known for serving delicious Malt's and Ice Creams as well. They also have a view of the lake so you can view the ships and boats as you eat!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/The+PortLand+Malt+Shoppe,+East+Superior+Street,+Duluth,+MN/@46.8018408,-92.1012854,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52c458e991e5:0x50925954fbe57026!2m2!1d-92.0895163!2d46.7932726"
          link2="https://www.portlandmaltshoppe.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Betty's Pie"
          ImgSrc={Betty}
          description="Betty's Pie has been open since 1957, and serves one of the best pie in the entire northern shore. It is also a sit in restaurant with many different options for breakfast, lunch, and dinner. "
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Betty's+Pies,+Minnesota+61,+Two+Harbors,+MN/@46.9263105,-91.9998887,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52af3e007da5670d:0x5a8a7e791b94891b!2m2!1d-91.6318382!2d47.0481432"
          link2="https://bettyspies.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Uncle Loui's Cafe"
          ImgSrc={Uncle}
          description="Vibrant Breakfast and Lunch spot with a classic americal style panckaes, burgers, and omlets. Is a very small place, and usually packed because of the incredible taste."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Uncle+Loui's+Cafe,+East+4th+Street,+Duluth,+MN/@46.8067347,-92.0981636,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52c7bc7809d5:0xba693b0a6fad44f1!2m2!1d-92.0954141!2d46.7947655"
          link2="https://www.facebook.com/unclelouiscafe/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Northern Waters Smokehaus"
          ImgSrc={Smoke}
          description="A unique gourmet specialty market and eatery located on Lake Superior in Duluth, Minnesota. Use Locally sustained meats and fish to cook and serve customers."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Northern+Waters+Smokehaus,+South+Lake+Avenue+%23106,+Duluth,+MN/@46.7991567,-92.1059309,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52ec9e518a19:0x85e4ed42855e4231!2m2!1d-92.0945182!2d46.782166"
          link2="https://northernwaterssmokehaus.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Zeitgeist Arts Cafe"
          ImgSrc={zac}
          description="Fresh American cuisine, classic comfort foods with a contemporary touch, local beer, extensive wine and whiskey menus, handcrafted cocktails, and the best fries in town."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Zeitgeist+Arts+Cafe,+ZEITGEIST+ARTS+BUILDING,+East+Superior+Street,+Duluth,+MN/@46.8040019,-92.1038413,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52c0f84403cd:0x229c80d4307a6b8b!2m2!1d-92.094528!2d46.789302"
          link2="https://zeitgeistarts.com/cafe/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Duluth Grill"
          ImgSrc={grill}
          description="Best Burgers in town using locally produced and fresh produce. Duluth Grill has been around since 1971 and workes very hard to make sure you have the best experience."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Duluth+Grill,+South+27th+Avenue+West,+Duluth,+MN/@46.7909156,-92.140987,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae4d9be0c03c2d:0x5f1e0456fbaac627!2m2!1d-92.129998!2d46.7606683"
          link2="https://duluthgrill.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Hanabi Japanese Cuisine"
          ImgSrc={Japan}
          description="From Japanese Fusion to Sushi and other traditional Dishes. They have Happy hour menu as well and is a nice relaxing place to go and chill. Takeout also available"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Hanabi+Japanese+Cuisine,+North+1st+Avenue+West,+Duluth,+MN/@46.8024294,-92.1083271,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52be1fc4c583:0xcb81a0cfdca7678d!2m2!1d-92.1007609!2d46.7870601"
          link2="http://hanabimn.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Pizza Luce"
          ImgSrc={Luce}
          description="Handmade gourmet Pizza made from fresh ingredients. Vegan, vegitarian, and gluten options also available. Very friendly and nice place to chill and relax with your friends."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Pizza+Luce,+East+Superior+Street+%23100,+Duluth,+MN/@46.7999539,-92.1081851,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52bfddf3d523:0x6f6d7eb53c105062!2m2!1d-92.0980556!2d46.7872222"
          link2="https://pizzaluce.com/locations/duluth"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Sunshine Cafe"
          ImgSrc={Sun}
          description="Is a small little cafe that serves very delicious breakfast,and lunch. A lot of effort went into this place feeling and looking homey and nice."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Sunshine+Cafe,+Grand+Avenue,+Duluth,+MN/@46.7772724,-92.1543741,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae4c3b6ca86d8f:0xea320392f0dd8562!2m2!1d-92.1700901!2d46.7385696"
          link2="https://www.facebook.com/SunshineCafeDuluth/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Texas Roadhouse"
          ImgSrc={Texas}
          description="Restaurant that embodies the American Culture, with classic roasted meats, Ribs and plenty of other delicious Meats."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Texas+Roadhouse,+Mall+Drive,+Duluth,+MN/@46.808971,-92.1345188,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52afb32b259b2c01:0x1cbb30459de5a9dc!2m2!1d-92.1491097!2d46.8011901"
          link2="https://www.texasroadhouse.com/locations/minnesota/duluth"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Fitger's Brewhouse and Grille"
          ImgSrc={Brew}
          description="Voted Duluth's favorite burgers by Duluth Reader Weekly, Fitger's Brewhouse's famous burgers offer a savory taste of fresh, local ingredients."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Fitger's+Brewhouse+Brewery+and+Grille,+East+Superior+Street,+Duluth,+MN/@46.8053041,-92.0911083,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52c413e7142b:0x25055b614acd8e84!2m2!1d-92.090552!2d46.792397"
          link2="https://fitgersbrewhouse.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="New London Cafe"
          ImgSrc={London}
          description="A lowkey cafe for many different types of students, workers, or anyone looking to chill or hang out with friends!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/New+London+Cafe,+East+Superior+Street,+Duluth,+MN/@46.8224449,-92.0756657,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52afab6638966955:0x62d237ee5239835c!2m2!1d-92.0279968!2d46.8300639"
          link2="https://www.newlondoncafeduluth.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Gooseberry Falls"
          ImgSrc={Falls}
          description="One of Duluth's must see places. Amazing Falls with many different hiking trails and can swin there as well (as long as its not winter)"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Gooseberry+Falls+State+Park,+Minnesota+61,+Two+Harbors,+MN/@46.9750037,-91.9170077,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52af480aea874371:0x9a4d15e7d27d1446!2m2!1d-91.4653688!2d47.1456215"
          link2="https://www.dnr.state.mn.us/state_parks/park.html?id=spk00172#homepage"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Canal Park"
          ImgSrc={Park}
          description="A nice lakeside walkthrough and view area. A good place to go and relax your mind during hard days of study and stress!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Canal+Park,+Duluth,+MN/@46.7991567,-92.105888,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52eb33b311c7:0x30eb1913b30b1eb7!2m2!1d-92.0950821!2d46.783164"
          link2="https://canalpark.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Glensheen Mansion"
          ImgSrc={Sheen}
          description="A good tour of the famouse Glensheen mansion, knows as one of the most historic home in all of Minnesota."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Glensheen,+3300+London+Rd,+Duluth,+MN+55804/@46.8133483,-92.0799259,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52afacb0ac350179:0x243e5759a7818a57!2m2!1d-92.051791!2d46.815161"
          link2="https://glensheen.org/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Sprit Mountain"
          ImgSrc={Sprit}
          description="Known for its skiing and snowboarding areas. Is on of the most popular area to learn and master skiing and snowboarding."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Spirit+Mountain+Recreation+Area,+Spirit+Mountain+Place,+Duluth,+MN/@46.7700355,-92.2155949,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae49678a0336f9:0x3014394d17ba1e81!2m2!1d-92.2167365!2d46.7182684"
          link2="https://www.spiritmt.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Aerial Lift Bridge"
          ImgSrc={Bridge}
          description="One of the most iconic places in Duluth. This Bridge has been around for longer than 60 years, and is one of the most prominent areas."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Aerial+Lift+Bridge,+South+Lake+Avenue,+Duluth,+MN/@46.7985912,-92.105888,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52ec55a6c0ad:0xb7092797d58f931e!2m2!1d-92.0928901!2d46.7789733"
          link2="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwKTIyNjFgtFI1qDA1Skw1NUpNNjVNNEs2SEyxMqhIMjewNDK3NE8xtUizNDZM9RJKTC3KTMxRyMlMK1FIKspMSU8FAJmpFFc&q=aerial+lift+bridge&rlz=1C5CHFA_enUS859US859&oq=Arieal+lift&aqs=chrome.1.69i57j46j0l5.2924j0j9&sourceid=chrome&ie=UTF-8"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Jay Cooke State Park"
          ImgSrc={Jay}
          description="A nice relaxing state park with lots of different types of hiking trails and waterfall"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Jay+Cooke+State+Park,+Minnesota+210,+Carlton,+MN/@46.7348662,-92.3039249,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae3042ac7e87fd:0xdfb2d414ed5ac945!2m2!1d-92.345346!2d46.6475355"
          link2="https://www.dnr.state.mn.us/state_parks/park.html?id=spk00187#homepage"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="NorthShore Scenic Railroad"
          ImgSrc={Rail}
          description="History comes alive during the Summer and Fall when you are able to see the historic NorthShore scenic railroad!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/North+Shore+Scenic+Railroad,+West+Michigan+Street,+Duluth,+MN/@46.7348662,-92.3039249,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae52912b255663:0xfe3821fa303abba3!2m2!1d-92.1030377!2d46.7815788"
          link2="https://duluthtrains.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Enger Tower/Park"
          ImgSrc={Enger}
          description="Enger Tower is a famous tower located in Duluth where you can see the entire city and skyline!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Enger+Tower,+Enger+Tower+Drive,+Duluth,+MN/@46.7348662,-92.3039249,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae4d7ad0e30ef1:0x1340b8151cb3859c!2m2!1d-92.1249934!2d46.7760994"
          link2="http://www.engertowerduluth.com/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Split Rock Lighthouse"
          ImgSrc={Split}
          description="A lighthouse and a museum that talks about a lot of the history surrounding the area and what was famouse during the building of the lighthouse."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Split+Rock+Lighthouse+State+Park,+Split+Rock+Lighthouse+Road,+Two+Harbors,+MN/@46.896667,-91.9400458,11.47z/data=!4m13!4m12!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52af4958ddf5c5bd:0xa2d598466ac5b576!2m2!1d-91.3942065!2d47.1931329"
          link2="https://www.dnr.state.mn.us/state_parks/park.html?id=spk00266#homepage"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Park Point Beach"
          ImgSrc={Beach}
          description="Nice little beach to go and relax and enjoy some sun or play volleyball or frisbee with friends!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Park+Point,+Duluth,+MN/@46.896796,-91.9399943,11.47z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae53c3b9b26529:0x28ac5cc185b34f7e!2m2!1d-92.0522153!2d46.7307117!3e0"
          link2="https://www.parkpointbeach.org/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Ice House"
          ImgSrc={Ice}
          description="A cool little house at the LakeWalk/Canal Park area where you can swin to it and then up off it! giving it a cliff jumping vibes."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/The+CRIBS+(Uncle+Harvey's+Mausoleum),+The+Lakewalk,+Duluth,+MN/@46.896796,-91.9399943,11.47z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae53d5d75c1715:0x990ae73c031e02f2!2m2!1d-92.0920592!2d46.7845678!3e0"
          link2="https://www.atlasobscura.com/places/uncle-harveys-mausoleum"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Chester Park"
          ImgSrc={Chester}
          description="Hiking Trails, Waterfalls, downhill skiing right next to campus. It is an easy walk from UMD and is a must see if you are on campus."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Chester+Park,+Duluth,+MN/@46.896796,-91.9399943,11.47z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52afad312ae886f1:0x3366a05affc13bbe!2m2!1d-92.0907824!2d46.8135101!3e0"
          link2="https://duluthmn.gov/parks/parks-listing/chester-park/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Tischer Creek"
          ImgSrc={Tischer}
          description="Hiking Trails, and waterfall are availabe in this trail and is right next to campus as well. It is an easy walk from UMD and is a must see if you are on campus."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Tischer+Creek,+Duluth,+MN/@46.896796,-91.9399943,11.47z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52afad0257228ddb:0xe2d18478b03bc2e8!2m2!1d-92.0735702!2d46.8262303!3e0"
          link2="https://gowaterfalling.com/waterfalls/tischercreek.shtml"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Hawk Ridge"
          ImgSrc={Hawk}
          description="A great place to bird watch and enjoy the view of fall colors as well. Lots of cool birds can be spotted at the right time of the year!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Hawk+Ridge+Bird+Observatory,+East+Skyline+Parkway,+Duluth,+MN/@46.8315087,-92.0726958,13.87z/data=!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52afab826c698d21:0x46aac179c59f18fb!2m2!1d-92.0316406!2d46.846908!3e0"
          link2="https://www.hawkridge.org/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Wisconsin Point"
          ImgSrc={Wis}
          description="A cool lighthouse to check out and a relaxing place to go with friends and take some pictures and enjoy the view of the lake."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Wisconsin+Point+Lighthouse,+Superior,+WI/@46.8315087,-92.0726958,13.87z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae56eac69f8afd:0x9cba6db434c995b4!2m2!1d-92.0062611!2d46.7101417!3e0"
          link2="https://www.ci.superior.wi.us/226/Wisconsin-Point"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Superior Hiking Trail"
          ImgSrc={Sup}
          description="The Superior Hiking Trail goes for over 310 miles and it spans from Duluth to Near the Canadian Border. Definitly a wonderful trail to go through and walk around and enjoy nature! Check out their website for more infomation."
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Superior+Hiking+Trail,+Grand+Marais,+MN/@46.8315087,-92.0726958,13.87z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52a624586149378f:0xcb63766e474fedac!2m2!1d-90.4382649!2d47.7655242!3e0"
          link2="https://superiorhiking.org/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="Great Lakes Aquarium"
          ImgSrc={Aqua}
          description="A cool Aquarium in duluth that has many exotic fishes to see and enjoy!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/Great+Lakes+Aquarium,+Harbor+Drive,+Duluth,+MN/@46.8315087,-92.0726958,13.87z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae5292347daea9:0x9267d1067fe3c6bf!2m2!1d-92.1000213!2d46.7789955!3e0"
          link2="https://glaquarium.org/"
        />
      </Grid>
      <Grid item md={3}>
        <MediaCard
          title="William A Irvin"
          ImgSrc={Ship}
          description="A ship that has been in duluth for over 30 years and is one of the prominent figures in Duluth. In Halloween they make the ship into a haunted ship which is extremenly cool!"
          link="https://www.google.com/maps/dir/1120+Kirby+Dr,+Duluth,+MN+55812/William+A+Irvin+Museum,+Harbor+Drive,+Duluth,+MN/@46.8315087,-92.0726958,13.87z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x52afad250102f6d3:0xeec2b259d7e42d27!2m2!1d-92.0861505!2d46.8182118!1m5!1m1!1s0x52ae5292553738bf:0x291ce4d4384173b6!2m2!1d-92.0972199!2d46.7827822!3e0"
          link2="https://decc.org/william-a-irvin/"
        />
      </Grid>
    </Grid>
  );
};

export default Content;
