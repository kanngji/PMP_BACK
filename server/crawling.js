const axios = require("axios");
const cheerio = require("cheerio");
// 한글 깨짐
const iconv = require("iconv-lite");

const getHtml = async () => {
  try {
    // 1
    const html = await axios.get(
      "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105",
      { responseType: "arraybuffer" }
    );
    const content = iconv.decode(html.data, "EUC-KR").toString();
    let ulList = [];
    // 2
    const $ = cheerio.load(content);
    // 3
    const bodyList = $("div.cluster_head_topic_wrap");
    // console.log(bodyList);
    bodyList.map((i, element) => {
      ulList[i] = {
        title: $(element).find("span.cluster_head_sub_topic").text(),
      };
    });
    console.log(ulList);
  } catch (error) {
    console.error(error);
  }
};

getHtml();
