async function getRedirectedUrl(imageUrl) {
  try {
    const response = await fetch(imageUrl, {
      method: "HEAD",
      redirect: "follow",
    });
    if (response.ok) {
      return response.url;
    } else {
      throw new Error("Failed to fetch image");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Example usage:
const imageUrl = "https://random.imagecdn.app/200/200";
getRedirectedUrl(imageUrl)
  .then((redirectedUrl) => {
    console.log("Redirected URL:", redirectedUrl);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// import axios from "axios";

// export default class PostService {
//   static async getAll() {
//     let response = [];
//     let cache = JSON.parse(localStorage.getItem("freesound"));
//     if (cache) {
//       response = cache;
//       // console.log("UPLOADED FROM CACHE")
//       console.log(response);
//     } else {
//       for (let x = 0; x < 100; x++) {
//         await new Promise((r) => setTimeout(r, 200));
//         let a = await axios
//           .get("https://random.imagecdn.app/500/500", {})
//           .then((res) => {
//             response.push(res.data);
//           });
//       }
//       // console.log("UPLOADED FROM NET")
//       localStorage.setItem("freesound", JSON.stringify(response));
//     }
//     console.log(response, 111);
//     return response;
//   }

//   // static async getById(id) {
//   //     const response = await axios.get("https://api.discogs.com/releases/"+ id)
//   //     return response.data;
//   // }
// }
