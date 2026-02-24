window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "a1d88bf44d9648e98a7c663e2d8bd5cc",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-seven.vercel.app/token.html",
      },
      "https://oauth-master-class-seven.vercel.app",
    )
   .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
};
